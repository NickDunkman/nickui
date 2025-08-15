import{r as o}from"./iframe-hb8Gt22z.js";import{A}from"./AllSizersStoryWrapper-tjgd90o1.js";import{g as C}from"./getStoryArgTypes-C9YzteSP.js";import{M as T}from"./Money-Bx29-dZB.js";function l({decimalPlaces:n=0,...s}){return o.createElement(T,{...s,decimalPlaces:n,currencySymbol:"","data-nickui-component":"Numeric"})}l.__docgenInfo={description:"",methods:[],displayName:"Numeric",props:{sizer:{required:!1,tsType:{name:"union",raw:"SizerType | SizerType[]",elements:[{name:"unknown[number]",raw:"(typeof SIZERS)[number]"},{name:"Array",elements:[{name:"unknown[number]",raw:"(typeof SIZERS)[number]"}],raw:"SizerType[]"}]},description:`Changes the size of the component. A sizer string, or an array of sizer
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
Defaults to 0.`,defaultValue:{value:"0",computed:!1}},allowNegatives:{required:!1,tsType:{name:"boolean"},description:"Set to `true` to allow the user to enter negative values"}}};const{expect:e,fn:i}=__STORYBOOK_MODULE_TEST__,z={title:"Form controls/Numeric",component:l,argTypes:C({formControl:{isDisableable:!0,valueType:["string","number"]},isSizerable:!0,defaultValues:{decimalPoint:".",decimalPlaces:0,thousandsSeparator:",",allowNegatives:!1},types:{defaultValue:["string","number"],value:["string","number"]}}),parameters:{a11y:{config:{rules:[{id:"color-contrast",selector:'*:not([data-testid="placeholder-input"])'}]}}}},v={tags:["field-layout"],args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"1234567.89",onChange:i()},play:async({canvas:n,step:s})=>{const a=n.getByLabelText("A label*"),t=n.getByTitle("(required)");await s("Assert accessibility of layout elements",async()=>{e(a).toHaveRole("spinbutton"),e(a).toHaveAccessibleName("A label*"),e(a).toHaveAccessibleDescription("A hint"),e(a).toHaveAccessibleErrorMessage("An error message"),e(t).toHaveTextContent("*")}),await s("Assert default numeric formatting",async()=>{e(a).toHaveValue("1,234,567")}),await s("Assert the error style",async()=>{e(a).toHaveClass("border-rose-800")})}},c={tags:["control-state"],args:{label:"Empty",onChange:i()},play:async({args:n,canvas:s,step:a,userEvent:t})=>{const r=s.getByLabelText("Empty");await a("Assert Numeric is functional without an initial value",async()=>{await t.type(r,"1"),e(r).toHaveValue("1"),e(n.onChange).toHaveBeenCalledOnce()}),await a("Reset the value",async()=>{await t.type(r,"{backspace}"),e(r).toHaveValue("")})}},u={tags:["control-state"],args:{label:"Controlled",value:"1234.56",decimalPlaces:2,onChange:i()},play:async({args:n,canvas:s,step:a,userEvent:t})=>{const r=s.getByLabelText("Controlled");await a("Assert `value` gets formatted",async()=>{e(r).toHaveValue("1,234.56")}),await a("Try adding text. `onChange` should fire, & <Numeric> allows the input value to change even when the controlledValue doesn’t update",async()=>{await t.tab(),e(r).toHaveFocus(),await t.type(r,"{backspace}"),e(r).toHaveValue("1234.5"),e(n.onChange).toHaveBeenCalledOnce()}),await a("Reset to initial state",async()=>{await t.type(r,"6"),e(r).toHaveValue("1234.56"),await t.tab(),e(r).not.toHaveFocus()})}},p={tags:["control-state"],args:{label:"Uncontrolled",defaultValue:"1234.56",decimalPlaces:2,onChange:i()},play:async({args:n,canvas:s,step:a,userEvent:t})=>{const r=s.getByLabelText("Uncontrolled");await a("Assert `defaultValue` gets formatted",async()=>{e(r).toHaveValue("1,234.56")}),await a("Try adding text. `onChange` should fire, & the <input> value should update",async()=>{await t.tab(),e(r).toHaveFocus(),await t.type(r,"{backspace}"),e(r).toHaveValue("1234.5"),e(n.onChange).toHaveBeenCalledOnce()}),await a("Reset to initial state",async()=>{await t.type(r,"6"),e(r).toHaveValue("1234.56"),await t.tab(),e(r).not.toHaveFocus()})}},m={tags:["control-state"],args:{label:"Disabled",defaultValue:"1234",disabled:!0,onChange:i()},play:async({args:n,canvas:s,step:a,userEvent:t})=>{const r=s.getByLabelText("Disabled");await a("Assert disabled state",async()=>{e(r).toBeDisabled(),await t.tab(),e(r).not.toHaveFocus()}),await a("Typing should have no effect",async()=>{await t.type(r,"{backspace}"),e(n.onChange).not.toHaveBeenCalled(),e(r).toHaveValue("1,234")})}},f={tags:["control-state"],args:{defaultValue:"1234567.89",label:"European number",hint:'Uses "." as the thousands-separator and "," as the decimal point!',thousandsSeparator:".",decimalPoint:",",decimalPlaces:2,onChange:i()},play:async({canvas:n,step:s,userEvent:a})=>{const t=n.getByLabelText("European number");await s("Assert proper formatting",async()=>{e(t).toHaveValue("1.234.567,89")}),await s("Assert deformatting abides the european configuration",async()=>{await a.tab(),e(t).toHaveFocus(),await a.type(t,"{backspace}"),e(t).toHaveValue("1234567,8")}),await s("Reset to initial state",async()=>{await a.type(t,"9"),e(t).toHaveValue("1234567,89"),await a.tab(),e(t).not.toHaveFocus()})}},x={tags:["sizer"],args:{label:"Negatives allowed!",defaultValue:"-1234.56",decimalPlaces:2,allowNegatives:!0}},d={tags:["sizer"],args:{"aria-label":"Xs Numeric",sizer:"xs",defaultValue:"1.23",onChange:i()},play:async({canvas:n,step:s})=>{const a=n.getByLabelText("Xs Numeric"),t=a.closest('[data-nickui-component="Numeric"]');await s("Assert the xs sizer style on both the Numeric & Field",async()=>{e(a).toHaveClass("text-xs"),e(t).toHaveAttribute("data-nickui-sizer","xs")})}},g={tags:["sizer"],args:{"aria-label":"Sm Numeric",sizer:"sm",defaultValue:"1.23",onChange:i()},play:async({canvas:n,step:s})=>{const a=n.getByLabelText("Sm Numeric"),t=a.closest('[data-nickui-component="Numeric"]');await s("Assert the sm sizer style on both the Numeric & Field",async()=>{e(a).toHaveClass("text-sm"),e(t).toHaveAttribute("data-nickui-sizer","sm")})}},y={tags:["sizer"],args:{"aria-label":"Base Numeric",sizer:"base",defaultValue:"1.23",onChange:i()},play:async({canvas:n,step:s})=>{const a=n.getByLabelText("Base Numeric"),t=a.closest('[data-nickui-component="Numeric"]');await s("Assert the base sizer style on both the Numeric & Field",async()=>{e(a).toHaveClass("text-base"),e(t).toHaveAttribute("data-nickui-sizer","base")})}},b={tags:["sizer"],args:{"aria-label":"Lg Numeric",sizer:"lg",defaultValue:"1.23",onChange:i()},play:async({canvas:n,step:s})=>{const a=n.getByLabelText("Lg Numeric"),t=a.closest('[data-nickui-component="Numeric"]');await s("Assert the lg sizer style on both the Numeric & Field",async()=>{e(a).toHaveClass("text-lg"),e(t).toHaveAttribute("data-nickui-sizer","lg")})}},h={tags:["sizer"],args:{"aria-label":"Xl Numeric",sizer:"xl",defaultValue:"1.23",onChange:i()},play:async({canvas:n,step:s})=>{const a=n.getByLabelText("Xl Numeric"),t=a.closest('[data-nickui-component="Numeric"]');await s("Assert the xl sizer style on both the Numeric & Field",async()=>{e(a).toHaveClass("text-xl"),e(t).toHaveAttribute("data-nickui-sizer","xl")})}},w={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],label:"Responsive Numeric",defaultValue:"1.23",onChange:i()}},N={tags:["!dev","!test"],render:n=>o.createElement("div",{className:"flex flex-col gap-3 sm:flex-row"},o.createElement(l,{...c.args,className:"sm:flex-1"}),o.createElement(l,{...u.args,className:"sm:flex-1"}),o.createElement(l,{...p.args,className:"sm:flex-1"}),o.createElement(l,{...m.args,className:"sm:flex-1"}))},H={tags:["!dev","!test"],render:n=>o.createElement(A,{alignBaseline:!0},o.createElement(l,{...d.args,className:"sm:flex-12"}),o.createElement(l,{...g.args,className:"sm:flex-14"}),o.createElement(l,{...y.args,className:"sm:flex-16"}),o.createElement(l,{...b.args,className:"sm:flex-18"}),o.createElement(l,{...h.args,className:"sm:flex-20"}))};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
      expect(input).toHaveValue('1,234,567');
    });
    await step('Assert the error style', async () => {
      expect(input).toHaveClass('border-rose-800');
    });
  }
}`,...v.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
      expect(input).toHaveValue('1');
      expect(args.onChange).toHaveBeenCalledOnce();
    });
    await step('Reset the value', async () => {
      await userEvent.type(input, '{backspace}');
      expect(input).toHaveValue('');
    });
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
      expect(input).toHaveValue('1,234.56');
    });
    await step('Try adding text. \`onChange\` should fire, & <Numeric> allows the input value to change even when the controlledValue doesn’t update', async () => {
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
      expect(input).toHaveValue('1,234');
    });
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
      expect(input).toHaveValue('1.234.567,89');
    });
    await step('Assert deformatting abides the european configuration', async () => {
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
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    label: 'Negatives allowed!',
    defaultValue: '-1234.56',
    decimalPlaces: 2,
    allowNegatives: true
  }
}`,...x.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive Numeric',
    defaultValue: '1.23',
    onChange: fn()
  }
}`,...w.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-3 sm:flex-row">
      <Numeric {...empty.args} className="sm:flex-1" />
      <Numeric {...controlled.args} className="sm:flex-1" />
      <Numeric {...uncontrolled.args} className="sm:flex-1" />
      <Numeric {...disabled.args} className="sm:flex-1" />
    </div>
}`,...N.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper alignBaseline>
      <Numeric {...xs.args} className="sm:flex-12" />
      <Numeric {...sm.args} className="sm:flex-14" />
      <Numeric {...base.args} className="sm:flex-16" />
      <Numeric {...lg.args} className="sm:flex-18" />
      <Numeric {...xl.args} className="sm:flex-20" />
    </AllSizersStoryWrapper>
}`,...H.parameters?.docs?.source}}};const V=["fieldLayout","empty","controlled","uncontrolled","disabled","european","allowNegatives","xs","sm","base","lg","xl","responsive","allControlStates","allSizers"],L=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:V,allControlStates:N,allSizers:H,allowNegatives:x,base:y,controlled:u,default:z,disabled:m,empty:c,european:f,fieldLayout:v,lg:b,responsive:w,sm:g,uncontrolled:p,xl:h,xs:d},Symbol.toStringTag,{value:"Module"}));export{L as s};
