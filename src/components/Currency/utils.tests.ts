// Note: most tests are in story play functions in Radio.stories.tsx
import { CurrencyFormatType } from './types';
import { parseValue } from './utils';

const usdFormat: CurrencyFormatType = {
  decimalPoint: '.',
  minDecimalPlaces: 2,
  maxDecimalPlaces: 2,
  excludeDecimalOnWholeNumber: false,
  thousandsSeparator: ',',
};

describe('parseValue', () => {
  test('multiple decimal points is invalid', () => {
    expect(parseValue('1.2.3', usdFormat)).toStrictEqual('');
  });

  test('improperly positioned negative signs are invalid', () => {
    expect(parseValue('-1-', usdFormat)).toStrictEqual('');
    expect(parseValue('1-', usdFormat)).toStrictEqual('');
  });

  test('properly positioned negative signs are valid', () => {
    expect(parseValue('-1', usdFormat)).toStrictEqual('-1.00');
    expect(parseValue(' -1 ', usdFormat)).toStrictEqual('-1.00');
    expect(parseValue(' -1.23 ', usdFormat)).toStrictEqual('-1.23');
  });

  test.each([
    ['undefined is accepted', { input: undefined, min: 2, max: 2, output: '' }],
    ['empty strings are preserved', { input: '', min: 2, max: 2, output: '' }],
    [
      'whole numbers get decimals',
      { input: '1', min: 2, max: 2, output: '1.00' },
    ],
    [
      'whitespace is stripped',
      { input: ' 1 ', min: 2, max: 2, output: '1.00' },
    ],
    [
      'partial decimals are completed',
      { input: ' 1.0 ', min: 2, max: 2, output: '1.00' },
    ],
    [
      'decimals & point are dropped on maxDecimalPlaces:0',
      { input: ' 1.00000 ', min: 0, max: 0, output: '1' },
    ],
    [
      'decimals are truncated to maxDecimalPlaces',
      { input: ' 1.00000 ', min: 2, max: 3, output: '1.000' },
    ],
    [
      'rounding happens during truncation to maxDecimalPlaces',
      { input: ' 1.99999 ', min: 2, max: 3, output: '2.000' },
    ],
    [
      'rounding happens during truncation to maxDecimalPlaces',
      { input: ' -1.99999 ', min: 2, max: 3, output: '-2.000' },
    ],
  ])(
    'min & max decimal places are abided: $0',
    (_, { input, min, max, output }) => {
      expect(
        parseValue(input, {
          ...usdFormat,
          minDecimalPlaces: min,
          maxDecimalPlaces: max,
        }),
      ).toStrictEqual(output);
    },
  );

  test.each([
    ['empty strings are preserved', { input: '', max: 2, output: '' }],
    ['decimal zeros are dropped', { input: ' 1.00 ', max: 2, output: '1' }],
    [
      'dropping happens after rounding occurs when truncating to max decimal places',
      { input: ' 1.999 ', max: 2, output: '2' },
    ],
  ])(
    'can exclude decimals on whole numbers: $0',
    (_, { input, max, output }) => {
      expect(
        parseValue(input, {
          ...usdFormat,
          excludeDecimalOnWholeNumber: true,
          minDecimalPlaces: max,
          maxDecimalPlaces: max,
        }),
      ).toStrictEqual(output);
    },
  );
});
