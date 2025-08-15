import{r as o}from"./iframe-hb8Gt22z.js";import{A}from"./AllSizersStoryWrapper-tjgd90o1.js";import{g as M}from"./getStoryArgTypes-C9YzteSP.js";import{M as l}from"./Money-Bx29-dZB.js";const{expect:e,fn:c}=__STORYBOOK_MODULE_TEST__,S={title:"Form controls/Money",component:l,argTypes:M({formControl:{isDisableable:!0,valueType:["string","number"]},isSizerable:!0,defaultValues:{currencySymbol:"$",decimalPoint:".",decimalPlaces:2,thousandsSeparator:",",allowNegatives:!1},types:{defaultValue:["string","number"],value:["string","number"]}}),parameters:{a11y:{config:{rules:[{id:"color-contrast",selector:'*:not([data-testid="placeholder-input"])'}]}}}},b={tags:["field-layout"],args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"1234567.89",onChange:c()},play:async({canvas:n,step:r})=>{const a=n.getByLabelText("A label*"),t=n.getByTitle("(required)");await r("Assert accessibility of layout elements",async()=>{e(a).toHaveRole("spinbutton"),e(a).toHaveAccessibleName("A label* $"),e(a).toHaveAccessibleDescription("A hint"),e(a).toHaveAccessibleErrorMessage("An error message"),e(t).toHaveTextContent("*")}),await r("Assert default currency formatting",async()=>{e(a).toHaveValue("1,234,567.89"),e(n.getByTestId("currency-symbol")).toHaveTextContent("$")}),await r("Assert the error style",async()=>{e(a).toHaveClass("border-rose-800")})}},i={tags:["control-state"],args:{label:"Empty",onChange:c()},play:async({args:n,canvas:r,step:a,userEvent:t})=>{const s=r.getByLabelText("Empty");await a("Assert Money is functional without an initial value",async()=>{await t.type(s,"1"),e(s).toHaveValue("1"),e(n.onChange).toHaveBeenCalledOnce()}),await a("Reset the value",async()=>{await t.type(s,"{backspace}"),e(s).toHaveValue("")})}},u={tags:["control-state"],args:{label:"Controlled",value:"1234.56",onChange:c()},play:async({args:n,canvas:r,step:a,userEvent:t})=>{const s=r.getByLabelText("Controlled");await a("Assert `value` gets formatted",async()=>{e(s).toHaveValue("1,234.56")}),await a("Try adding text. `onChange` should fire, & <Money> allows the input value to change even when the controlledValue doesn’t update",async()=>{await t.tab(),e(s).toHaveFocus(),await t.type(s,"{backspace}"),e(s).toHaveValue("1234.5"),e(n.onChange).toHaveBeenCalledOnce()}),await a("Reset to initial state",async()=>{await t.type(s,"6"),e(s).toHaveValue("1234.56"),await t.tab(),e(s).not.toHaveFocus()})}},d={tags:["control-state"],args:{label:"Uncontrolled",defaultValue:"1234.56",onChange:c()},play:async({args:n,canvas:r,step:a,userEvent:t})=>{const s=r.getByLabelText("Uncontrolled");await a("Assert `defaultValue` gets formatted",async()=>{e(s).toHaveValue("1,234.56")}),await a("Try adding text. `onChange` should fire, & the <input> value should update",async()=>{await t.tab(),e(s).toHaveFocus(),await t.type(s,"{backspace}"),e(s).toHaveValue("1234.5"),e(n.onChange).toHaveBeenCalledOnce()}),await a("Reset to initial state",async()=>{await t.type(s,"6"),e(s).toHaveValue("1234.56"),await t.tab(),e(s).not.toHaveFocus()})}},p={tags:["control-state"],args:{label:"Disabled",defaultValue:"1234.56",disabled:!0,onChange:c()},play:async({args:n,canvas:r,step:a,userEvent:t})=>{const s=r.getByLabelText("Disabled");await a("Assert disabled state",async()=>{e(s).toBeDisabled(),await t.tab(),e(s).not.toHaveFocus()}),await a("Typing should have no effect",async()=>{await t.type(s,"{backspace}"),e(n.onChange).not.toHaveBeenCalled(),e(s).toHaveValue("1,234.56")})}},f={tags:["control-state"],args:{defaultValue:"1234567.89",currencySymbol:"€",label:"Euros",hint:'Uses "." as the thousands-separator and "," as the decimal point!',thousandsSeparator:".",decimalPoint:",",onChange:c()},play:async({canvas:n,step:r,userEvent:a})=>{const t=n.getByLabelText("Euros");await r("Assert default currency formatting",async()=>{e(t).toHaveValue("1.234.567,89"),e(t).toHaveAccessibleName("Euros €"),e(n.getByTestId("currency-symbol")).toHaveTextContent("€")}),await r("Assert deformatting abides the currency configuration",async()=>{await a.tab(),e(t).toHaveFocus(),await a.type(t,"{backspace}"),e(t).toHaveValue("1234567,8")}),await r("Reset to initial state",async()=>{await a.type(t,"9"),e(t).toHaveValue("1234567,89"),await a.tab(),e(t).not.toHaveFocus()})}};function B(){const[n,r]=o.useState(),[a,t]=o.useState(1e4);return o.useEffect(()=>{fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json").then(s=>s.json()).then(s=>{r({btc:s.usd.btc,eur:s.usd.eur})})},[]),n?o.createElement("div",{className:"flex flex-col gap-3 sm:flex-row"},o.createElement(l,{className:"sm:flex-1",label:"US Dollars",value:a,onChange:s=>t(s.target.value===""?void 0:Number(s.target.value))}),o.createElement(l,{className:"sm:flex-1",label:"Euros",value:a===void 0?void 0:Number(a)*n.eur,onChange:s=>t(s.target.value===""?void 0:Number(s.target.value)/n.eur),currencySymbol:"€",decimalPoint:",",thousandsSeparator:"."}),o.createElement(l,{className:"sm:flex-1",label:"Bitcoin",value:a===void 0?void 0:Number(a)*n.btc,onChange:s=>t(s.target.value===""?void 0:Number(s.target.value)/n.btc),decimalPlaces:{min:8,max:10},currencySymbol:"₿"})):null}const h={tags:["!dev","!test"],render:n=>o.createElement(B,null),parameters:{source:`
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
    `}},C={tags:["sizer"],args:{label:"Negatives allowed!",defaultValue:"-1234.56",allowNegatives:!0}},g={tags:["sizer"],args:{"aria-label":"Xs Money",sizer:"xs",defaultValue:"1.23",onChange:c()},play:async({canvas:n,step:r})=>{const a=n.getByLabelText("Xs Money"),t=a.closest('[data-nickui-component="Money"]');await r("Assert the xs sizer style on both the Money & Field",async()=>{e(a).toHaveClass("text-xs"),e(t).toHaveAttribute("data-nickui-sizer","xs"),e(n.getByText("$")).toHaveClass("text-xs")})}},y={tags:["sizer"],args:{"aria-label":"Sm Money",sizer:"sm",defaultValue:"1.23",onChange:c()},play:async({canvas:n,step:r})=>{const a=n.getByLabelText("Sm Money"),t=a.closest('[data-nickui-component="Money"]');await r("Assert the sm sizer style on both the Money & Field",async()=>{e(a).toHaveClass("text-sm"),e(t).toHaveAttribute("data-nickui-sizer","sm"),e(n.getByText("$")).toHaveClass("text-sm")})}},m={tags:["sizer"],args:{"aria-label":"Base Money",sizer:"base",defaultValue:"1.23",onChange:c()},play:async({canvas:n,step:r})=>{const a=n.getByLabelText("Base Money"),t=a.closest('[data-nickui-component="Money"]');await r("Assert the base sizer style on both the Money & Field",async()=>{e(a).toHaveClass("text-base"),e(t).toHaveAttribute("data-nickui-sizer","base"),e(n.getByText("$")).toHaveClass("text-base")})}},v={tags:["sizer"],args:{"aria-label":"Lg Money",sizer:"lg",defaultValue:"1.23",onChange:c()},play:async({canvas:n,step:r})=>{const a=n.getByLabelText("Lg Money"),t=a.closest('[data-nickui-component="Money"]');await r("Assert the lg sizer style on both the Money & Field",async()=>{e(a).toHaveClass("text-lg"),e(t).toHaveAttribute("data-nickui-sizer","lg"),e(n.getByText("$")).toHaveClass("text-lg")})}},x={tags:["sizer"],args:{"aria-label":"Xl Money",sizer:"xl",defaultValue:"1.23",onChange:c()},play:async({canvas:n,step:r})=>{const a=n.getByLabelText("Xl Money"),t=a.closest('[data-nickui-component="Money"]');await r("Assert the xl sizer style on both the Money & Field",async()=>{e(a).toHaveClass("text-xl"),e(t).toHaveAttribute("data-nickui-sizer","xl"),e(n.getByText("$")).toHaveClass("text-xl")})}},H={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],label:"Responsive Money",defaultValue:"1.23",onChange:c()}},w={tags:["!dev","!test"],render:n=>o.createElement("div",{className:"flex flex-col gap-3 sm:flex-row"},o.createElement(l,{...i.args,className:"sm:flex-1"}),o.createElement(l,{...u.args,className:"sm:flex-1"}),o.createElement(l,{...d.args,className:"sm:flex-1"}),o.createElement(l,{...p.args,className:"sm:flex-1"}))},V={tags:["!dev","!test"],render:n=>o.createElement(A,{alignBaseline:!0},o.createElement(l,{...g.args,className:"sm:flex-12"}),o.createElement(l,{...y.args,className:"sm:flex-14"}),o.createElement(l,{...m.args,className:"sm:flex-16"}),o.createElement(l,{...v.args,className:"sm:flex-18"}),o.createElement(l,{...x.args,className:"sm:flex-20"}))};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
      expect(input).toHaveValue('1,234,567.89');
      expect(canvas.getByTestId('currency-symbol')).toHaveTextContent('$');
    });
    await step('Assert the error style', async () => {
      expect(input).toHaveClass('border-rose-800');
    });
  }
}`,...b.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
      expect(input).toHaveValue('1');
      expect(args.onChange).toHaveBeenCalledOnce();
    });
    await step('Reset the value', async () => {
      await userEvent.type(input, '{backspace}');
      expect(input).toHaveValue('');
    });
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
      expect(input).toHaveValue('1,234.56');
    });
    await step('Try adding text. \`onChange\` should fire, & <Money> allows the input value to change even when the controlledValue doesn’t update', async () => {
      await userEvent.tab();
      expect(input).toHaveFocus();
      await userEvent.type(input, '{backspace}');
      expect(input).toHaveValue('1234.5');
      expect(args.onChange).toHaveBeenCalledOnce();
    });
    await step('Reset to initial state', async () => {
      await userEvent.type(input, '6');
      expect(input).toHaveValue('1234.56');
      await userEvent.tab();
      expect(input).not.toHaveFocus();
    });
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
      expect(input).toHaveValue('1,234.56');
    });
    await step('Try adding text. \`onChange\` should fire, & the <input> value should update', async () => {
      await userEvent.tab();
      expect(input).toHaveFocus();
      await userEvent.type(input, '{backspace}');
      expect(input).toHaveValue('1234.5');
      expect(args.onChange).toHaveBeenCalledOnce();
    });
    await step('Reset to initial state', async () => {
      await userEvent.type(input, '6');
      expect(input).toHaveValue('1234.56');
      await userEvent.tab();
      expect(input).not.toHaveFocus();
    });
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
      expect(input).toHaveValue('1,234.56');
    });
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
      expect(input).toHaveValue('1.234.567,89');
      expect(input).toHaveAccessibleName('Euros €');
      expect(canvas.getByTestId('currency-symbol')).toHaveTextContent('€');
    });
    await step('Assert deformatting abides the currency configuration', async () => {
      await userEvent.tab();
      expect(input).toHaveFocus();
      await userEvent.type(input, '{backspace}');
      expect(input).toHaveValue('1234567,8');
    });
    await step('Reset to initial state', async () => {
      await userEvent.type(input, '9');
      expect(input).toHaveValue('1234567,89');
      await userEvent.tab();
      expect(input).not.toHaveFocus();
    });
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive Money',
    defaultValue: '1.23',
    onChange: fn()
  }
}`,...H.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-3 sm:flex-row">
      <Money {...empty.args} className="sm:flex-1" />
      <Money {...controlled.args} className="sm:flex-1" />
      <Money {...uncontrolled.args} className="sm:flex-1" />
      <Money {...disabled.args} className="sm:flex-1" />
    </div>
}`,...w.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper alignBaseline>
      <Money {...xs.args} className="sm:flex-12" />
      <Money {...sm.args} className="sm:flex-14" />
      <Money {...base.args} className="sm:flex-16" />
      <Money {...lg.args} className="sm:flex-18" />
      <Money {...xl.args} className="sm:flex-20" />
    </AllSizersStoryWrapper>
}`,...V.parameters?.docs?.source}}};const N=["fieldLayout","empty","controlled","uncontrolled","disabled","euros","currencyConverter","allowNegatives","xs","sm","base","lg","xl","responsive","allControlStates","allSizers"],k=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:N,allControlStates:w,allSizers:V,allowNegatives:C,base:m,controlled:u,currencyConverter:h,default:S,disabled:p,empty:i,euros:f,fieldLayout:b,lg:v,responsive:H,sm:y,uncontrolled:d,xl:x,xs:g},Symbol.toStringTag,{value:"Module"}));export{C as a,h as c,k as s};
