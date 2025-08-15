import{r as o}from"./iframe-JcCZxaL9.js";import{A as T}from"./AllSizersStoryWrapper-C5EzkKf3.js";import{g as z}from"./getStoryArgTypes-BeU_9RHb.js";import{M as H,e as i}from"./expectDelayedValue-OSHZCLI-.js";function c({decimalPlaces:n=0,...s}){return o.createElement(H,{...s,decimalPlaces:n,currencySymbol:"","data-nickui-component":"Numeric"})}c.__docgenInfo={description:"",methods:[],displayName:"Numeric",props:{sizer:{required:!1,tsType:{name:"union",raw:"SizerType | SizerType[]",elements:[{name:"unknown[number]",raw:"(typeof SIZERS)[number]"},{name:"Array",elements:[{name:"unknown[number]",raw:"(typeof SIZERS)[number]"}],raw:"SizerType[]"}]},description:`Changes the size of the component. A sizer string, or an array of sizer
strings for responsive sizing.`},label:{required:!1,tsType:{name:"DescriptorType"},description:"The main label to show above the form control(s), naming the field"},hint:{required:!1,tsType:{name:"DescriptorType"},description:`A hint about what kind of value the field accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"DescriptorType"},description:"Error message to show beneath the form control(s), or just `true` to\ntrigger the error style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the component"},value:{required:!1,tsType:{name:"ValueType"},description:`Sets the value of the component when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"ValueType"},description:"Sets the value of the component when using it as an uncontrolled component"},name:{required:!1,tsType:{name:"string"},description:"The name of the field"},decimalPoint:{required:!1,tsType:{name:"string"},description:`The character separating the whole part from the decimal part, typically
"."`},thousandsSeparator:{required:!1,tsType:{name:"string"},description:`The character to use to separate every three digits in the whole part,
typically ","`},decimalPlaces:{required:!1,tsType:{name:"union",raw:`| number
| {
    min: number;
    max: number;
  }`,elements:[{name:"number"},{name:"signature",type:"object",raw:`{
  min: number;
  max: number;
}`,signature:{properties:[{key:"min",value:{name:"number",required:!0}},{key:"max",value:{name:"number",required:!0}}]}}]},description:`Controls how many decimal places the user is allowed to add, and how many
will always be included on the value emitted via the onChange handler.
Defaults to 0.`,defaultValue:{value:"0",computed:!1}},allowNegatives:{required:!1,tsType:{name:"boolean"},description:"Set to `true` to allow the user to enter negative values"}}};const{expect:t,fn:l}=__STORYBOOK_MODULE_TEST__,S={title:"Form controls/Numeric",component:c,argTypes:z({formControl:{isDisableable:!0,valueType:["string","number"]},isSizerable:!0,defaultValues:{decimalPoint:".",decimalPlaces:0,thousandsSeparator:",",allowNegatives:!1},types:{defaultValue:["string","number"],value:["string","number"]}}),parameters:{a11y:{config:{rules:[{id:"color-contrast",selector:'*:not([data-testid="placeholder-input"])'}]}}}},v={tags:["field-layout"],args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"1234567.89",onChange:l()},play:async({canvas:n,step:s})=>{const e=n.getByLabelText("A label*"),a=n.getByTitle("(required)");await s("Assert accessibility of layout elements",async()=>{t(e).toHaveRole("spinbutton"),t(e).toHaveAccessibleName("A label*"),t(e).toHaveAccessibleDescription("A hint"),t(e).toHaveAccessibleErrorMessage("An error message"),t(a).toHaveTextContent("*")}),await s("Assert default numeric formatting",async()=>{await i(e,"1,234,567")}),await s("Assert the error style",async()=>{t(e).toHaveClass("border-rose-800")})}},u={tags:["control-state"],args:{label:"Empty",onChange:l()},play:async({args:n,canvas:s,step:e,userEvent:a})=>{const r=s.getByLabelText("Empty");await e("Assert Numeric is functional without an initial value",async()=>{await a.type(r,"1"),await i(r,"1"),t(n.onChange).toHaveBeenCalledOnce()}),await e("Reset the value",async()=>{await a.type(r,"{backspace}"),await i(r,"")})}},p={tags:["control-state"],args:{label:"Controlled",value:"1234.56",decimalPlaces:2,onChange:l()},play:async({args:n,canvas:s,step:e,userEvent:a})=>{const r=s.getByLabelText("Controlled");await e("Assert `value` gets formatted",async()=>{await i(r,"1,234.56")}),await e("Try adding text. `onChange` should fire, & <Numeric> allows the input value to change even when the controlledValue doesn’t update",async()=>{await a.tab(),t(r).toHaveFocus(),await a.type(r,"{backspace}"),await i(r,"1234.5"),t(n.onChange).toHaveBeenCalledOnce()}),await e("Reset to initial state",async()=>{await a.type(r,"6"),await i(r,"1234.56"),await a.tab(),t(r).not.toHaveFocus()})}},m={tags:["control-state"],args:{label:"Uncontrolled",defaultValue:"1234.56",decimalPlaces:2,onChange:l()},play:async({args:n,canvas:s,step:e,userEvent:a})=>{const r=s.getByLabelText("Uncontrolled");await e("Assert `defaultValue` gets formatted",async()=>{await i(r,"1,234.56")}),await e("Try adding text. `onChange` should fire, & the <input> value should update",async()=>{await a.tab(),t(r).toHaveFocus(),await a.type(r,"{backspace}"),await i(r,"1234.5"),t(n.onChange).toHaveBeenCalledOnce()}),await e("Reset to initial state",async()=>{await a.type(r,"6"),await i(r,"1234.56"),await a.tab(),t(r).not.toHaveFocus()})}},d={tags:["control-state"],args:{label:"Disabled",defaultValue:"1234",disabled:!0,onChange:l()},play:async({args:n,canvas:s,step:e,userEvent:a})=>{const r=s.getByLabelText("Disabled");await e("Assert disabled state",async()=>{t(r).toBeDisabled(),await a.tab(),t(r).not.toHaveFocus()}),await e("Typing should have no effect",async()=>{await a.type(r,"{backspace}"),t(n.onChange).not.toHaveBeenCalled(),await i(r,"1,234")})}},w={tags:["control-state"],args:{defaultValue:"1234567.89",label:"European number",hint:'Uses "." as the thousands-separator and "," as the decimal point!',thousandsSeparator:".",decimalPoint:",",decimalPlaces:2,onChange:l()},play:async({canvas:n,step:s,userEvent:e})=>{const a=n.getByLabelText("European number");await s("Assert proper formatting",async()=>{await i(a,"1.234.567,89")}),await s("Assert deformatting abides the european configuration",async()=>{await e.tab(),t(a).toHaveFocus(),await e.type(a,"{backspace}"),await i(a,"1234567,8")}),await s("Reset to initial state",async()=>{await e.type(a,"9"),await i(a,"1234567,89"),await e.tab(),t(a).not.toHaveFocus()})}},x={tags:["sizer"],args:{label:"Negatives allowed!",defaultValue:"-1234.56",decimalPlaces:2,allowNegatives:!0}},g={tags:["sizer"],args:{"aria-label":"Xs Numeric",sizer:"xs",defaultValue:"1.23",onChange:l()},play:async({canvas:n,step:s})=>{const e=n.getByLabelText("Xs Numeric"),a=e.closest('[data-nickui-component="Numeric"]');await s("Assert the xs sizer style on both the Numeric & Field",async()=>{t(e).toHaveClass("text-xs"),t(a).toHaveAttribute("data-nickui-sizer","xs")})}},y={tags:["sizer"],args:{"aria-label":"Sm Numeric",sizer:"sm",defaultValue:"1.23",onChange:l()},play:async({canvas:n,step:s})=>{const e=n.getByLabelText("Sm Numeric"),a=e.closest('[data-nickui-component="Numeric"]');await s("Assert the sm sizer style on both the Numeric & Field",async()=>{t(e).toHaveClass("text-sm"),t(a).toHaveAttribute("data-nickui-sizer","sm")})}},b={tags:["sizer"],args:{"aria-label":"Base Numeric",sizer:"base",defaultValue:"1.23",onChange:l()},play:async({canvas:n,step:s})=>{const e=n.getByLabelText("Base Numeric"),a=e.closest('[data-nickui-component="Numeric"]');await s("Assert the base sizer style on both the Numeric & Field",async()=>{t(e).toHaveClass("text-base"),t(a).toHaveAttribute("data-nickui-sizer","base")})}},h={tags:["sizer"],args:{"aria-label":"Lg Numeric",sizer:"lg",defaultValue:"1.23",onChange:l()},play:async({canvas:n,step:s})=>{const e=n.getByLabelText("Lg Numeric"),a=e.closest('[data-nickui-component="Numeric"]');await s("Assert the lg sizer style on both the Numeric & Field",async()=>{t(e).toHaveClass("text-lg"),t(a).toHaveAttribute("data-nickui-sizer","lg")})}},f={tags:["sizer"],args:{"aria-label":"Xl Numeric",sizer:"xl",defaultValue:"1.23",onChange:l()},play:async({canvas:n,step:s})=>{const e=n.getByLabelText("Xl Numeric"),a=e.closest('[data-nickui-component="Numeric"]');await s("Assert the xl sizer style on both the Numeric & Field",async()=>{t(e).toHaveClass("text-xl"),t(a).toHaveAttribute("data-nickui-sizer","xl")})}},N={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],label:"Responsive Numeric",defaultValue:"1.23",onChange:l()}},A={tags:["!dev","!test"],render:n=>o.createElement("div",{className:"flex flex-col gap-3 sm:flex-row"},o.createElement(c,{...u.args,className:"sm:flex-1"}),o.createElement(c,{...p.args,className:"sm:flex-1"}),o.createElement(c,{...m.args,className:"sm:flex-1"}),o.createElement(c,{...d.args,className:"sm:flex-1"}))},C={tags:["!dev","!test"],render:n=>o.createElement(T,{alignBaseline:!0},o.createElement(c,{...g.args,className:"sm:flex-12"}),o.createElement(c,{...y.args,className:"sm:flex-14"}),o.createElement(c,{...b.args,className:"sm:flex-16"}),o.createElement(c,{...h.args,className:"sm:flex-18"}),o.createElement(c,{...f.args,className:"sm:flex-20"}))};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
      expect(input).toHaveAccessibleName('A label*');
      expect(input).toHaveAccessibleDescription('A hint');
      expect(input).toHaveAccessibleErrorMessage('An error message');
      expect(requiredAsterisk).toHaveTextContent('*');
    });
    await step('Assert default numeric formatting', async () => {
      await expectDelayedValue(input, '1,234,567');
    });
    await step('Assert the error style', async () => {
      expect(input).toHaveClass('border-rose-800');
    });
  }
}`,...v.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
    await step('Assert Numeric is functional without an initial value', async () => {
      await userEvent.type(input, '1');
      await expectDelayedValue(input, '1');
      expect(args.onChange).toHaveBeenCalledOnce();
    });
    await step('Reset the value', async () => {
      await userEvent.type(input, '{backspace}');
      await expectDelayedValue(input, '');
    });
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    label: 'Controlled',
    value: '1234.56',
    decimalPlaces: 2,
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
    await step('Try adding text. \`onChange\` should fire, & <Numeric> allows the input value to change even when the controlledValue doesn’t update', async () => {
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    label: 'Uncontrolled',
    defaultValue: '1234.56',
    decimalPlaces: 2,
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    label: 'Disabled',
    defaultValue: '1234',
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
      await expectDelayedValue(input, '1,234');
    });
  }
}`,...d.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    defaultValue: '1234567.89',
    label: 'European number',
    hint: 'Uses "." as the thousands-separator and "," as the decimal point!',
    thousandsSeparator: '.',
    decimalPoint: ',',
    decimalPlaces: 2,
    onChange: fn()
  },
  play: async ({
    canvas,
    step,
    userEvent
  }) => {
    const input = canvas.getByLabelText('European number');
    await step('Assert proper formatting', async () => {
      await expectDelayedValue(input, '1.234.567,89');
    });
    await step('Assert deformatting abides the european configuration', async () => {
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
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    label: 'Negatives allowed!',
    defaultValue: '-1234.56',
    decimalPlaces: 2,
    allowNegatives: true
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Xs Numeric',
    sizer: 'xs',
    defaultValue: '1.23',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('Xs Numeric');
    const field = input.closest('[data-nickui-component="Numeric"]');
    await step('Assert the xs sizer style on both the Numeric & Field', async () => {
      expect(input).toHaveClass('text-xs');
      expect(field).toHaveAttribute('data-nickui-sizer', 'xs');
    });
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Sm Numeric',
    sizer: 'sm',
    defaultValue: '1.23',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('Sm Numeric');
    const field = input.closest('[data-nickui-component="Numeric"]');
    await step('Assert the sm sizer style on both the Numeric & Field', async () => {
      expect(input).toHaveClass('text-sm');
      expect(field).toHaveAttribute('data-nickui-sizer', 'sm');
    });
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Base Numeric',
    sizer: 'base',
    defaultValue: '1.23',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('Base Numeric');
    const field = input.closest('[data-nickui-component="Numeric"]');
    await step('Assert the base sizer style on both the Numeric & Field', async () => {
      expect(input).toHaveClass('text-base');
      expect(field).toHaveAttribute('data-nickui-sizer', 'base');
    });
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Lg Numeric',
    sizer: 'lg',
    defaultValue: '1.23',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('Lg Numeric');
    const field = input.closest('[data-nickui-component="Numeric"]');
    await step('Assert the lg sizer style on both the Numeric & Field', async () => {
      expect(input).toHaveClass('text-lg');
      expect(field).toHaveAttribute('data-nickui-sizer', 'lg');
    });
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Xl Numeric',
    sizer: 'xl',
    defaultValue: '1.23',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('Xl Numeric');
    const field = input.closest('[data-nickui-component="Numeric"]');
    await step('Assert the xl sizer style on both the Numeric & Field', async () => {
      expect(input).toHaveClass('text-xl');
      expect(field).toHaveAttribute('data-nickui-sizer', 'xl');
    });
  }
}`,...f.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive Numeric',
    defaultValue: '1.23',
    onChange: fn()
  }
}`,...N.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-3 sm:flex-row">
      <Numeric {...empty.args} className="sm:flex-1" />
      <Numeric {...controlled.args} className="sm:flex-1" />
      <Numeric {...uncontrolled.args} className="sm:flex-1" />
      <Numeric {...disabled.args} className="sm:flex-1" />
    </div>
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper alignBaseline>
      <Numeric {...xs.args} className="sm:flex-12" />
      <Numeric {...sm.args} className="sm:flex-14" />
      <Numeric {...base.args} className="sm:flex-16" />
      <Numeric {...lg.args} className="sm:flex-18" />
      <Numeric {...xl.args} className="sm:flex-20" />
    </AllSizersStoryWrapper>
}`,...C.parameters?.docs?.source}}};const V=["fieldLayout","empty","controlled","uncontrolled","disabled","european","allowNegatives","xs","sm","base","lg","xl","responsive","allControlStates","allSizers"],D=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:V,allControlStates:A,allSizers:C,allowNegatives:x,base:b,controlled:p,default:S,disabled:d,empty:u,european:w,fieldLayout:v,lg:h,responsive:N,sm:y,uncontrolled:m,xl:f,xs:g},Symbol.toStringTag,{value:"Module"}));export{D as s};
