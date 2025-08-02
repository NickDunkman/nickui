// Note: most tests are in story play functions in Radio.stories.tsx
import { CurrencyFormatType } from './types';
import { deformatValue, parseValue } from './utils';

const usdFormat: CurrencyFormatType = {
  decimalPoint: '.',
  minDecimalPlaces: 2,
  maxDecimalPlaces: 2,
  thousandsSeparator: ',',
};

const euroFormat: CurrencyFormatType = {
  ...usdFormat,
  decimalPoint: ',',
  thousandsSeparator: '.',
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

  test('does not use custom decimalPoint', () => {
    expect(
      parseValue('1234', { ...euroFormat, minDecimalPlaces: 2 }),
    ).toStrictEqual('1234.00');
  });

  test('should strip leading zeros properly', () => {
    expect(parseValue('0', usdFormat)).toStrictEqual('0.00');
    expect(parseValue('0.', usdFormat)).toStrictEqual('0.00');
    expect(parseValue('-0', usdFormat)).toStrictEqual('-0.00');
    expect(parseValue('-0.', usdFormat)).toStrictEqual('-0.00');

    expect(parseValue('00', usdFormat)).toStrictEqual('0.00');
    expect(parseValue('00.', usdFormat)).toStrictEqual('0.00');
    expect(parseValue('-00', usdFormat)).toStrictEqual('-0.00');
    expect(parseValue('-00.', usdFormat)).toStrictEqual('-0.00');

    expect(parseValue('001', usdFormat)).toStrictEqual('1.00');
    expect(parseValue('001.', usdFormat)).toStrictEqual('1.00');
    expect(parseValue('-001', usdFormat)).toStrictEqual('-1.00');
    expect(parseValue('-001.', usdFormat)).toStrictEqual('-1.00');

    expect(parseValue('0010', usdFormat)).toStrictEqual('10.00');
    expect(parseValue('0010.', usdFormat)).toStrictEqual('10.00');
    expect(parseValue('-0010', usdFormat)).toStrictEqual('-10.00');
    expect(parseValue('-0010.', usdFormat)).toStrictEqual('-10.00');

    expect(parseValue('0010.0', usdFormat)).toStrictEqual('10.00');
    expect(parseValue('0010.0', usdFormat)).toStrictEqual('10.00');
    expect(parseValue('-0010.0', usdFormat)).toStrictEqual('-10.00');
    expect(parseValue('-0010.0', usdFormat)).toStrictEqual('-10.00');

    expect(parseValue('0010.1', usdFormat)).toStrictEqual('10.10');
    expect(parseValue('0010.1', usdFormat)).toStrictEqual('10.10');
    expect(parseValue('-0010.1', usdFormat)).toStrictEqual('-10.10');
    expect(parseValue('-0010.1', usdFormat)).toStrictEqual('-10.10');
  });
});

describe('deformatValue', () => {
  test('Deformats from standard format', () => {
    expect(deformatValue('', usdFormat)).toStrictEqual('');
    expect(deformatValue('1', usdFormat)).toStrictEqual('1');
    expect(deformatValue('1.', usdFormat)).toStrictEqual('1.');
    expect(deformatValue('1.2', usdFormat)).toStrictEqual('1.2');
    expect(deformatValue('1,234.56', usdFormat)).toStrictEqual('1234.56');
    expect(deformatValue('1,234,567.89', usdFormat)).toStrictEqual(
      '1234567.89',
    );
  });

  test('Deformats from custom format', () => {
    expect(deformatValue('', euroFormat)).toStrictEqual('');
    expect(deformatValue('1', euroFormat)).toStrictEqual('1');
    expect(deformatValue('1,', euroFormat)).toStrictEqual('1.');
    expect(deformatValue('1,2', euroFormat)).toStrictEqual('1.2');
    expect(deformatValue('1.234,56', euroFormat)).toStrictEqual('1234.56');
    expect(deformatValue('1.234.567,89', euroFormat)).toStrictEqual(
      '1234567.89',
    );
  });
});
