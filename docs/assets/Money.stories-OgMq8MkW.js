import{r as l}from"./iframe-iALQ-ti1.js";import{A as V}from"./AllSizersStoryWrapper-D4nj99Nk.js";import{g as S}from"./getStoryArgTypes-q4o9iYFY.js";import{M as o,e as c}from"./expectDelayedValue-DFtDPh44.js";const{expect:n,fn:i}=__STORYBOOK_MODULE_TEST__,B={title:"Form controls/Money",component:o,argTypes:S({formControl:{isDisableable:!0,valueType:["string","number"]},isSizerable:!0,defaultValues:{currencySymbol:"$",decimalPoint:".",decimalPlaces:"2",thousandsSeparator:",",allowNegatives:"false"},types:{defaultValue:["string","number"],value:["string","number"],decimalPlaces:["number","{ min: number; max: number; }"]}}),parameters:{a11y:{config:{rules:[{id:"color-contrast",selector:'*:not([data-testid="placeholder-input"])'}]}}}},f={tags:["field-layout"],args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"1234567.89",onChange:i()},play:async({canvas:s,step:r})=>{const e=s.getByLabelText("A label*"),a=s.getByTitle("(required)");await r("Assert accessibility of layout elements",async()=>{n(e).toHaveRole("spinbutton"),n(e).toHaveAccessibleName("A label* $"),n(e).toHaveAccessibleDescription("A hint"),n(e).toHaveAccessibleErrorMessage("An error message"),n(a).toHaveTextContent("*")}),await r("Assert default currency formatting",async()=>{await c(e,"1,234,567.89"),n(s.getByTestId("currency-symbol")).toHaveTextContent("$")}),await r("Assert the error style",async()=>{n(e).toHaveClass("border-rose-800")})}},u={tags:["control-state"],args:{label:"Empty",onChange:i()},play:async({args:s,canvas:r,step:e,userEvent:a})=>{const t=r.getByLabelText("Empty");await e("Assert Money is functional without an initial value",async()=>{await a.type(t,"1"),await c(t,"1"),n(s.onChange).toHaveBeenCalledOnce()}),await e("Reset the value",async()=>{await a.type(t,"{backspace}"),await c(t,"")})}},d={tags:["control-state"],args:{label:"Controlled",value:"1234.56",onChange:i()},play:async({args:s,canvas:r,step:e,userEvent:a})=>{const t=r.getByLabelText("Controlled");await e("Assert `value` gets formatted",async()=>{await c(t,"1,234.56")}),await e("Try adding text. `onChange` should fire, & <Money> allows the input value to change even when the controlledValue doesn’t update",async()=>{await a.tab(),n(t).toHaveFocus(),await a.type(t,"{backspace}"),await c(t,"1234.5"),n(s.onChange).toHaveBeenCalledOnce()}),await e("Reset to initial state",async()=>{await a.type(t,"6"),await c(t,"1234.56"),await a.tab(),n(t).not.toHaveFocus()})}},p={tags:["control-state"],args:{label:"Uncontrolled",defaultValue:"1234.56",onChange:i()},play:async({args:s,canvas:r,step:e,userEvent:a})=>{const t=r.getByLabelText("Uncontrolled");await e("Assert `defaultValue` gets formatted",async()=>{await c(t,"1,234.56")}),await e("Try adding text. `onChange` should fire, & the <input> value should update",async()=>{await a.tab(),n(t).toHaveFocus(),await a.type(t,"{backspace}"),await c(t,"1234.5"),n(s.onChange).toHaveBeenCalledOnce()}),await e("Reset to initial state",async()=>{await a.type(t,"6"),await c(t,"1234.56"),await a.tab(),n(t).not.toHaveFocus()})}},y={tags:["control-state"],args:{label:"Disabled",defaultValue:"1234.56",disabled:!0,onChange:i()},play:async({args:s,canvas:r,step:e,userEvent:a})=>{const t=r.getByLabelText("Disabled");await e("Assert disabled state",async()=>{n(t).toBeDisabled(),await a.tab(),n(t).not.toHaveFocus()}),await e("Typing should have no effect",async()=>{await a.type(t,"{backspace}"),n(s.onChange).not.toHaveBeenCalled(),await c(t,"1,234.56")})}},h={tags:["control-state"],args:{defaultValue:"1234567.89",currencySymbol:"€",label:"Euros",hint:'Uses "." as the thousands-separator and "," as the decimal point!',thousandsSeparator:".",decimalPoint:",",onChange:i()},play:async({canvas:s,step:r,userEvent:e})=>{const a=s.getByLabelText("Euros");await r("Assert default currency formatting",async()=>{await c(a,"1.234.567,89"),n(a).toHaveAccessibleName("Euros €"),n(s.getByTestId("currency-symbol")).toHaveTextContent("€")}),await r("Assert deformatting abides the currency configuration",async()=>{await e.tab(),n(a).toHaveFocus(),await e.type(a,"{backspace}"),await c(a,"1234567,8")}),await r("Reset to initial state",async()=>{await e.type(a,"9"),await c(a,"1234567,89"),await e.tab(),n(a).not.toHaveFocus()})}};function N(){const[s,r]=l.useState(),[e,a]=l.useState(1e4);return l.useEffect(()=>{fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json").then(t=>t.json()).then(t=>{r({btc:t.usd.btc,eur:t.usd.eur})})},[]),s?l.createElement("div",{className:"flex flex-col gap-3 sm:flex-row"},l.createElement(o,{className:"sm:flex-1",label:"US Dollars",value:e,onChange:t=>a(t.target.value===""?void 0:Number(t.target.value))}),l.createElement(o,{className:"sm:flex-1",label:"Euros",value:e===void 0?void 0:Number(e)*s.eur,onChange:t=>a(t.target.value===""?void 0:Number(t.target.value)/s.eur),currencySymbol:"€",decimalPoint:",",thousandsSeparator:"."}),l.createElement(o,{className:"sm:flex-1",label:"Bitcoin",value:e===void 0?void 0:Number(e)*s.btc,onChange:t=>a(t.target.value===""?void 0:Number(t.target.value)/s.btc),decimalPlaces:{min:8,max:10},currencySymbol:"₿"})):null}const w={tags:["!dev","!test"],render:s=>l.createElement(N,null),parameters:{source:`
    function CurrencyConverter() {
      const [usdValue, setUsdValue] = React.useState<number | undefined>(10000);
      const [exchangeRates, setExchangeRates] = React.useState<{
        btc: number;
        eur: number;
      }>();

      React.useEffect(() => {
        fetch(
          'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json',
        )
          .then((response) => response.json())
          .then((data) => {
            setExchangeRates({
              btc: data.usd.btc,
              eur: data.usd.eur,
            });
          });
      }, []);

      if (!exchangeRates) {
        return null;
      }

      return (
        <div className="flex flex-col gap-3 sm:flex-row">
          <Money
            className="sm:flex-1"
            label="US Dollars"
            value={usdValue}
            onChange={(event) =>
              setUsdValue(
                event.target.value === '' ? undefined : Number(event.target.value),
              )
            }
          />
          <Money
            className="sm:flex-1"
            label="Euros"
            currencySymbol="€"
            decimalPoint=","
            thousandsSeparator="."
            value={
              usdValue === undefined
                ? undefined
                : Number(usdValue) * exchangeRates.eur
            }
            onChange={(event) =>
              setUsdValue(
                event.target.value === ''
                  ? undefined
                  : Number(event.target.value) / exchangeRates.eur,
              )
            }
          />
          <Money
            className="sm:flex-1"
            label="Bitcoin"
            currencySymbol="₿"
            decimalPlaces={{ min: 8, max: 10 }}
            value={
              usdValue === undefined
                ? undefined
                : Number(usdValue) * exchangeRates.btc
            }
            onChange={(event) =>
              setUsdValue(
                event.target.value === ''
                  ? undefined
                  : Number(event.target.value) / exchangeRates.btc,
              )
            }
          />
        </div>
      );
    }
    `}},C={tags:["sizer"],args:{label:"Negatives allowed!",defaultValue:"-1234.56",allowNegatives:!0}},g={tags:["sizer"],args:{"aria-label":"Xs Money",sizer:"xs",defaultValue:"1.23",onChange:i()},play:async({canvas:s,step:r})=>{const e=s.getByLabelText("Xs Money"),a=e.closest('[data-nickui-component="Money"]');await r("Assert the xs sizer style on both the Money & Field",async()=>{n(e).toHaveClass("text-xs"),n(a).toHaveAttribute("data-nickui-sizer","xs"),n(s.getByText("$")).toHaveClass("text-xs")})}},m={tags:["sizer"],args:{"aria-label":"Sm Money",sizer:"sm",defaultValue:"1.23",onChange:i()},play:async({canvas:s,step:r})=>{const e=s.getByLabelText("Sm Money"),a=e.closest('[data-nickui-component="Money"]');await r("Assert the sm sizer style on both the Money & Field",async()=>{n(e).toHaveClass("text-sm"),n(a).toHaveAttribute("data-nickui-sizer","sm"),n(s.getByText("$")).toHaveClass("text-sm")})}},x={tags:["sizer"],args:{"aria-label":"Base Money",sizer:"base",defaultValue:"1.23",onChange:i()},play:async({canvas:s,step:r})=>{const e=s.getByLabelText("Base Money"),a=e.closest('[data-nickui-component="Money"]');await r("Assert the base sizer style on both the Money & Field",async()=>{n(e).toHaveClass("text-base"),n(a).toHaveAttribute("data-nickui-sizer","base"),n(s.getByText("$")).toHaveClass("text-base")})}},b={tags:["sizer"],args:{"aria-label":"Lg Money",sizer:"lg",defaultValue:"1.23",onChange:i()},play:async({canvas:s,step:r})=>{const e=s.getByLabelText("Lg Money"),a=e.closest('[data-nickui-component="Money"]');await r("Assert the lg sizer style on both the Money & Field",async()=>{n(e).toHaveClass("text-lg"),n(a).toHaveAttribute("data-nickui-sizer","lg"),n(s.getByText("$")).toHaveClass("text-lg")})}},v={tags:["sizer"],args:{"aria-label":"Xl Money",sizer:"xl",defaultValue:"1.23",onChange:i()},play:async({canvas:s,step:r})=>{const e=s.getByLabelText("Xl Money"),a=e.closest('[data-nickui-component="Money"]');await r("Assert the xl sizer style on both the Money & Field",async()=>{n(e).toHaveClass("text-xl"),n(a).toHaveAttribute("data-nickui-sizer","xl"),n(s.getByText("$")).toHaveClass("text-xl")})}},H={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],label:"Responsive Money",defaultValue:"1.23",onChange:i()}},A={tags:["!dev","!test"],render:s=>l.createElement("div",{className:"flex flex-col gap-3 sm:flex-row"},l.createElement(o,{...u.args,className:"sm:flex-1"}),l.createElement(o,{...d.args,className:"sm:flex-1"}),l.createElement(o,{...p.args,className:"sm:flex-1"}),l.createElement(o,{...y.args,className:"sm:flex-1"}))},M={tags:["!dev","!test"],render:s=>l.createElement(V,{alignBaseline:!0},l.createElement(o,{...g.args,className:"sm:flex-12"}),l.createElement(o,{...m.args,className:"sm:flex-14"}),l.createElement(o,{...x.args,className:"sm:flex-16"}),l.createElement(o,{...b.args,className:"sm:flex-18"}),l.createElement(o,{...v.args,className:"sm:flex-20"}))};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['field-layout'],
  args: {
    required: true,
    label: 'A label',
    hint: 'A hint',
    error: 'An error message',
    defaultValue: '1234567.89',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('A label*');
    const requiredAsterisk = canvas.getByTitle('(required)');
    await step('Assert accessibility of layout elements', async () => {
      expect(input).toHaveRole('spinbutton');
      expect(input).toHaveAccessibleName('A label* $');
      expect(input).toHaveAccessibleDescription('A hint');
      expect(input).toHaveAccessibleErrorMessage('An error message');
      expect(requiredAsterisk).toHaveTextContent('*');
    });
    await step('Assert default currency formatting', async () => {
      await expectDelayedValue(input, '1,234,567.89');
      expect(canvas.getByTestId('currency-symbol')).toHaveTextContent('$');
    });
    await step('Assert the error style', async () => {
      expect(input).toHaveClass('border-rose-800');
    });
  }
}`,...f.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    label: 'Empty',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const input = canvas.getByLabelText('Empty');
    await step('Assert Money is functional without an initial value', async () => {
      await userEvent.type(input, '1');
      await expectDelayedValue(input, '1');
      expect(args.onChange).toHaveBeenCalledOnce();
    });
    await step('Reset the value', async () => {
      await userEvent.type(input, '{backspace}');
      await expectDelayedValue(input, '');
    });
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    label: 'Controlled',
    value: '1234.56',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const input = canvas.getByLabelText('Controlled');
    await step('Assert \`value\` gets formatted', async () => {
      await expectDelayedValue(input, '1,234.56');
    });
    await step('Try adding text. \`onChange\` should fire, & <Money> allows the input value to change even when the controlledValue doesn’t update', async () => {
      await userEvent.tab();
      expect(input).toHaveFocus();
      await userEvent.type(input, '{backspace}');
      await expectDelayedValue(input, '1234.5');
      expect(args.onChange).toHaveBeenCalledOnce();
    });
    await step('Reset to initial state', async () => {
      await userEvent.type(input, '6');
      await expectDelayedValue(input, '1234.56');
      await userEvent.tab();
      expect(input).not.toHaveFocus();
    });
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    label: 'Uncontrolled',
    defaultValue: '1234.56',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const input = canvas.getByLabelText('Uncontrolled');
    await step('Assert \`defaultValue\` gets formatted', async () => {
      await expectDelayedValue(input, '1,234.56');
    });
    await step('Try adding text. \`onChange\` should fire, & the <input> value should update', async () => {
      await userEvent.tab();
      expect(input).toHaveFocus();
      await userEvent.type(input, '{backspace}');
      await expectDelayedValue(input, '1234.5');
      expect(args.onChange).toHaveBeenCalledOnce();
    });
    await step('Reset to initial state', async () => {
      await userEvent.type(input, '6');
      await expectDelayedValue(input, '1234.56');
      await userEvent.tab();
      expect(input).not.toHaveFocus();
    });
  }
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    label: 'Disabled',
    defaultValue: '1234.56',
    disabled: true,
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const input = canvas.getByLabelText('Disabled');
    await step('Assert disabled state', async () => {
      expect(input).toBeDisabled();
      await userEvent.tab();
      expect(input).not.toHaveFocus();
    });

    // Typing should not fire any changes
    await step('Typing should have no effect', async () => {
      await userEvent.type(input, '{backspace}');
      expect(args.onChange).not.toHaveBeenCalled();
      await expectDelayedValue(input, '1,234.56');
    });
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    defaultValue: '1234567.89',
    currencySymbol: '€',
    label: 'Euros',
    hint: 'Uses "." as the thousands-separator and "," as the decimal point!',
    thousandsSeparator: '.',
    decimalPoint: ',',
    onChange: fn()
  },
  play: async ({
    canvas,
    step,
    userEvent
  }) => {
    const input = canvas.getByLabelText('Euros');
    await step('Assert default currency formatting', async () => {
      await expectDelayedValue(input, '1.234.567,89');
      expect(input).toHaveAccessibleName('Euros €');
      expect(canvas.getByTestId('currency-symbol')).toHaveTextContent('€');
    });
    await step('Assert deformatting abides the currency configuration', async () => {
      await userEvent.tab();
      expect(input).toHaveFocus();
      await userEvent.type(input, '{backspace}');
      await expectDelayedValue(input, '1234567,8');
    });
    await step('Reset to initial state', async () => {
      await userEvent.type(input, '9');
      await expectDelayedValue(input, '1234567,89');
      await userEvent.tab();
      expect(input).not.toHaveFocus();
    });
  }
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <CurrencyConverter />,
  parameters: {
    source: \`
    function CurrencyConverter() {
      const [usdValue, setUsdValue] = React.useState<number | undefined>(10000);
      const [exchangeRates, setExchangeRates] = React.useState<{
        btc: number;
        eur: number;
      }>();

      React.useEffect(() => {
        fetch(
          'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json',
        )
          .then((response) => response.json())
          .then((data) => {
            setExchangeRates({
              btc: data.usd.btc,
              eur: data.usd.eur,
            });
          });
      }, []);

      if (!exchangeRates) {
        return null;
      }

      return (
        <div className="flex flex-col gap-3 sm:flex-row">
          <Money
            className="sm:flex-1"
            label="US Dollars"
            value={usdValue}
            onChange={(event) =>
              setUsdValue(
                event.target.value === '' ? undefined : Number(event.target.value),
              )
            }
          />
          <Money
            className="sm:flex-1"
            label="Euros"
            currencySymbol="€"
            decimalPoint=","
            thousandsSeparator="."
            value={
              usdValue === undefined
                ? undefined
                : Number(usdValue) * exchangeRates.eur
            }
            onChange={(event) =>
              setUsdValue(
                event.target.value === ''
                  ? undefined
                  : Number(event.target.value) / exchangeRates.eur,
              )
            }
          />
          <Money
            className="sm:flex-1"
            label="Bitcoin"
            currencySymbol="₿"
            decimalPlaces={{ min: 8, max: 10 }}
            value={
              usdValue === undefined
                ? undefined
                : Number(usdValue) * exchangeRates.btc
            }
            onChange={(event) =>
              setUsdValue(
                event.target.value === ''
                  ? undefined
                  : Number(event.target.value) / exchangeRates.btc,
              )
            }
          />
        </div>
      );
    }
    \`
  }
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    label: 'Negatives allowed!',
    defaultValue: '-1234.56',
    allowNegatives: true
  }
}`,...C.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Xs Money',
    sizer: 'xs',
    defaultValue: '1.23',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('Xs Money');
    const field = input.closest('[data-nickui-component="Money"]');
    await step('Assert the xs sizer style on both the Money & Field', async () => {
      expect(input).toHaveClass('text-xs');
      expect(field).toHaveAttribute('data-nickui-sizer', 'xs');
      expect(canvas.getByText('$')).toHaveClass('text-xs');
    });
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Sm Money',
    sizer: 'sm',
    defaultValue: '1.23',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('Sm Money');
    const field = input.closest('[data-nickui-component="Money"]');
    await step('Assert the sm sizer style on both the Money & Field', async () => {
      expect(input).toHaveClass('text-sm');
      expect(field).toHaveAttribute('data-nickui-sizer', 'sm');
      expect(canvas.getByText('$')).toHaveClass('text-sm');
    });
  }
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Base Money',
    sizer: 'base',
    defaultValue: '1.23',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('Base Money');
    const field = input.closest('[data-nickui-component="Money"]');
    await step('Assert the base sizer style on both the Money & Field', async () => {
      expect(input).toHaveClass('text-base');
      expect(field).toHaveAttribute('data-nickui-sizer', 'base');
      expect(canvas.getByText('$')).toHaveClass('text-base');
    });
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Lg Money',
    sizer: 'lg',
    defaultValue: '1.23',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('Lg Money');
    const field = input.closest('[data-nickui-component="Money"]');
    await step('Assert the lg sizer style on both the Money & Field', async () => {
      expect(input).toHaveClass('text-lg');
      expect(field).toHaveAttribute('data-nickui-sizer', 'lg');
      expect(canvas.getByText('$')).toHaveClass('text-lg');
    });
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Xl Money',
    sizer: 'xl',
    defaultValue: '1.23',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('Xl Money');
    const field = input.closest('[data-nickui-component="Money"]');
    await step('Assert the xl sizer style on both the Money & Field', async () => {
      expect(input).toHaveClass('text-xl');
      expect(field).toHaveAttribute('data-nickui-sizer', 'xl');
      expect(canvas.getByText('$')).toHaveClass('text-xl');
    });
  }
}`,...v.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive Money',
    defaultValue: '1.23',
    onChange: fn()
  }
}`,...H.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-3 sm:flex-row">
      <Money {...empty.args} className="sm:flex-1" />
      <Money {...controlled.args} className="sm:flex-1" />
      <Money {...uncontrolled.args} className="sm:flex-1" />
      <Money {...disabled.args} className="sm:flex-1" />
    </div>
}`,...A.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper alignBaseline>
      <Money {...xs.args} className="sm:flex-12" />
      <Money {...sm.args} className="sm:flex-14" />
      <Money {...base.args} className="sm:flex-16" />
      <Money {...lg.args} className="sm:flex-18" />
      <Money {...xl.args} className="sm:flex-20" />
    </AllSizersStoryWrapper>
}`,...M.parameters?.docs?.source}}};const T=["fieldLayout","empty","controlled","uncontrolled","disabled","euros","currencyConverter","allowNegatives","xs","sm","base","lg","xl","responsive","allControlStates","allSizers"],L=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:T,allControlStates:A,allSizers:M,allowNegatives:C,base:x,controlled:d,currencyConverter:w,default:B,disabled:y,empty:u,euros:h,fieldLayout:f,lg:b,responsive:H,sm:m,uncontrolled:p,xl:v,xs:g},Symbol.toStringTag,{value:"Module"}));export{C as a,w as c,L as s};
