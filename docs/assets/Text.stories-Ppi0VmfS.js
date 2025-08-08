import{r}from"./iframe-C3OS0XiJ.js";import{A as N}from"./AllSizersStoryWrapper-BgoD26Cb.js";import{F as q}from"./Field-DLW1HTnl.js";import{u as _}from"./useFieldA11yIds-CXvEWjgF.js";import{u as R}from"./index-X5EXH7qk.js";import{t as F}from"./styles-CCUGfjU_.js";function o({className:a,sizer:n,label:e,hint:s,error:l,required:C,disabled:A,id:H,"aria-labelledby":B,"aria-describedby":E,"aria-errormessage":S,"aria-invalid":z,...k}){const c=_({label:e,hint:s,error:l,controlledId:H,controlledAriaLabelledBy:B,controlledAriaDescribedBy:E,controlledAriaErrorMessage:S}),L=R(n),V=F({sizer:L,hasError:!!l});return r.createElement(q,{className:a,sizer:n,label:e,labelId:c.ariaLabelledBy,controlId:c.id,hint:s,hintId:c.ariaDescribedBy,error:l!==!0?l:void 0,errorId:c.ariaErrorMessage,disabled:A,required:C,"data-nickui-component":"Text"},r.createElement("input",{...k,id:c.id,className:V,disabled:A,required:C,"aria-labelledby":c.ariaLabelledBy,"aria-describedby":c.ariaDescribedBy,"aria-errormessage":c.ariaErrorMessage,"aria-invalid":z!==void 0?z:!!l}))}o.__docgenInfo={description:`A form control that allows users to enter & edit a single line of text
@param props {@link TextProps} + {@link CommonFieldProps}`,methods:[],displayName:"Text",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Called when the value of the Text changes"},placeholder:{required:!1,tsType:{name:"string"},description:`A string that contains a brief hint to the user as to what information is
expected in the field.`},type:{required:!1,tsType:{name:"union",raw:`| 'date'
| 'datetime'
| 'datetime-local'
| 'email'
| 'month'
| 'number'
| 'password'
| 'search'
| 'tel'
| 'text'
| 'time'
| 'url'
| 'week'`,elements:[{name:"literal",value:"'date'"},{name:"literal",value:"'datetime'"},{name:"literal",value:"'datetime-local'"},{name:"literal",value:"'email'"},{name:"literal",value:"'month'"},{name:"literal",value:"'number'"},{name:"literal",value:"'password'"},{name:"literal",value:"'search'"},{name:"literal",value:"'tel'"},{name:"literal",value:"'text'"},{name:"literal",value:"'time'"},{name:"literal",value:"'url'"},{name:"literal",value:"'week'"}]},description:`The input type to use (only textual types are allowed with Text).
See
[MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types)
for more details`},value:{required:!1,tsType:{name:"string"},description:`Sets the value of the Text when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"string"},description:"Sets the value of the Text when using it as an uncontrolled component"},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"union",raw:"SizerType | SizerType[]",elements:[{name:"union",raw:`| 'xs'
| 'sm'
| 'base'
| 'lg'
| 'xl'
| 'sm:xs'
| 'sm:sm'
| 'sm:base'
| 'sm:lg'
| 'sm:xl'
| 'md:xs'
| 'md:sm'
| 'md:base'
| 'md:lg'
| 'md:xl'
| 'lg:xs'
| 'lg:sm'
| 'lg:base'
| 'lg:lg'
| 'lg:xl'
| 'xl:xs'
| 'xl:sm'
| 'xl:base'
| 'xl:lg'
| 'xl:xl'`,elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'sm:xs'"},{name:"literal",value:"'sm:sm'"},{name:"literal",value:"'sm:base'"},{name:"literal",value:"'sm:lg'"},{name:"literal",value:"'sm:xl'"},{name:"literal",value:"'md:xs'"},{name:"literal",value:"'md:sm'"},{name:"literal",value:"'md:base'"},{name:"literal",value:"'md:lg'"},{name:"literal",value:"'md:xl'"},{name:"literal",value:"'lg:xs'"},{name:"literal",value:"'lg:sm'"},{name:"literal",value:"'lg:base'"},{name:"literal",value:"'lg:lg'"},{name:"literal",value:"'lg:xl'"},{name:"literal",value:"'xl:xs'"},{name:"literal",value:"'xl:sm'"},{name:"literal",value:"'xl:base'"},{name:"literal",value:"'xl:lg'"},{name:"literal",value:"'xl:xl'"}]},{name:"Array",elements:[{name:"union",raw:`| 'xs'
| 'sm'
| 'base'
| 'lg'
| 'xl'
| 'sm:xs'
| 'sm:sm'
| 'sm:base'
| 'sm:lg'
| 'sm:xl'
| 'md:xs'
| 'md:sm'
| 'md:base'
| 'md:lg'
| 'md:xl'
| 'lg:xs'
| 'lg:sm'
| 'lg:base'
| 'lg:lg'
| 'lg:xl'
| 'xl:xs'
| 'xl:sm'
| 'xl:base'
| 'xl:lg'
| 'xl:xl'`,elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'sm:xs'"},{name:"literal",value:"'sm:sm'"},{name:"literal",value:"'sm:base'"},{name:"literal",value:"'sm:lg'"},{name:"literal",value:"'sm:xl'"},{name:"literal",value:"'md:xs'"},{name:"literal",value:"'md:sm'"},{name:"literal",value:"'md:base'"},{name:"literal",value:"'md:lg'"},{name:"literal",value:"'md:xl'"},{name:"literal",value:"'lg:xs'"},{name:"literal",value:"'lg:sm'"},{name:"literal",value:"'lg:base'"},{name:"literal",value:"'lg:lg'"},{name:"literal",value:"'lg:xl'"},{name:"literal",value:"'xl:xs'"},{name:"literal",value:"'xl:sm'"},{name:"literal",value:"'xl:base'"},{name:"literal",value:"'xl:lg'"},{name:"literal",value:"'xl:xl'"}]}],raw:"SizerType[]"}]},description:`Changes the size of the field ("xs", "sm", "base", "lg", "xl", "sm:base",
"lg:xl", etc)`},label:{required:!1,tsType:{name:"ReactNode"},description:"The main label to show above the form control, naming the field"},hint:{required:!1,tsType:{name:"ReactNode"},description:`A hint about what kind of value the control accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}}};const{expect:t,fn:i}=__STORYBOOK_MODULE_TEST__,D={title:"Form controls/Text",component:o},b={tags:["field-layout"],args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"A problematic value",onChange:i()},play:async({canvas:a,step:n})=>{const e=a.getByLabelText("A label*"),s=a.getByTitle("(required)");await n("Assert accessibility of layout elements",async()=>{t(e).toHaveRole("textbox"),t(e).toHaveAccessibleDescription("A hint"),t(e).toHaveAccessibleErrorMessage("An error message"),t(s).toHaveTextContent("*")}),await n("Assert the error style",async()=>{t(e).toHaveClass("border-rose-800")})}},m={tags:["control-state"],args:{placeholder:"Empty Text","aria-label":"Empty Text",onChange:i()},play:async({args:a,canvas:n,step:e,userEvent:s})=>{const l=n.getByLabelText("Empty Text");await e("Assert Text is functional without an initial value",async()=>{await s.type(l,"a"),t(l).toHaveValue("a"),t(a.onChange).toHaveBeenCalledOnce()}),await e("Reset the value",async()=>{await s.type(l,"{backspace}"),t(l).toHaveValue("")})}},u={tags:["control-state"],args:{value:"Controlled Text","aria-label":"Controlled Text",onChange:i()},play:async({args:a,canvas:n,step:e,userEvent:s})=>{const l=n.getByLabelText("Controlled Text");await e("Assert `value` works",async()=>{t(l).toHaveValue(a.value)}),await e("Try adding text. `onChange` should fire, but the value is controlled, so it shouldn’t change",async()=>{await s.type(l,"a"),t(a.onChange).toHaveBeenCalledOnce(),t(l).toHaveValue(a.value)})}},d={tags:["control-state"],args:{defaultValue:"Uncontrolled Text","aria-label":"Uncontrolled Text",onChange:i()},play:async({args:a,canvas:n,step:e,userEvent:s})=>{const l=n.getByLabelText("Uncontrolled Text");await e("Assert `defaultValue` works",async()=>{t(l).toHaveValue(a.defaultValue)}),await e("Typing into the Text should amend the value, since it’s uncontrolled",async()=>{await s.type(l,"a"),t(l).toHaveValue(`${a.defaultValue}a`),t(a.onChange).toHaveBeenCalledOnce()}),await e("Reset the value",async()=>{await s.type(l,"{backspace}"),t(l).toHaveValue(a.defaultValue)})}},p={tags:["control-state"],args:{defaultValue:"Disabled Text",disabled:!0,"aria-label":"Disabled Text",onChange:i()},play:async({args:a,canvas:n,step:e,userEvent:s})=>{const l=n.getByLabelText("Disabled Text");await e("Assert disabled state",async()=>{t(l).toBeDisabled()}),await e("Typing should have no effect",async()=>{await s.type(l,"a"),t(a.onChange).not.toHaveBeenCalled(),t(l).toHaveValue(a.defaultValue)})}},x={tags:["sizer"],args:{"aria-label":"Xs Text",sizer:"xs",placeholder:"Xs Text",onChange:i()},play:async({canvas:a,step:n})=>{const e=a.getByLabelText("Xs Text"),s=e.closest('[data-nickui-component="Text"]');await n("Assert the xs sizer style on both the Text & Field",async()=>{t(e).toHaveClass("text-xs"),t(s).toHaveAttribute("data-nickui-sizer","xs")})}},g={tags:["sizer"],args:{"aria-label":"Sm Text",sizer:"sm",placeholder:"Sm Text",onChange:i()},play:async({canvas:a,step:n})=>{const e=a.getByLabelText("Sm Text"),s=e.closest('[data-nickui-component="Text"]');await n("Assert the sm sizer style on both the Text & Field",async()=>{t(e).toHaveClass("text-sm"),t(s).toHaveAttribute("data-nickui-sizer","sm")})}},v={tags:["sizer"],args:{"aria-label":"Base Text",sizer:"base",placeholder:"Base Text",onChange:i()},play:async({canvas:a,step:n})=>{const e=a.getByLabelText("Base Text"),s=e.closest('[data-nickui-component="Text"]');await n("Assert the base sizer style on both the Text & Field",async()=>{t(e).toHaveClass("text-base"),t(s).toHaveAttribute("data-nickui-sizer","base")})}},y={tags:["sizer"],args:{"aria-label":"Lg Text",sizer:"lg",placeholder:"Lg Text",onChange:i()},play:async({canvas:a,step:n})=>{const e=a.getByLabelText("Lg Text"),s=e.closest('[data-nickui-component="Text"]');await n("Assert the lg sizer style on both the Text & Field",async()=>{t(e).toHaveClass("text-lg"),t(s).toHaveAttribute("data-nickui-sizer","lg")})}},h={tags:["sizer"],args:{"aria-label":"Xl Text",sizer:"xl",placeholder:"Xl Text",onChange:i()},play:async({canvas:a,step:n})=>{const e=a.getByLabelText("Xl Text"),s=e.closest('[data-nickui-component="Text"]');await n("Assert the xl sizer style on both the Text & Field",async()=>{t(e).toHaveClass("text-xl"),t(s).toHaveAttribute("data-nickui-sizer","xl")})}},T={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],label:"Responsive label",placeholder:"Responsive Text",onChange:i()}},f={tags:["!dev","!test"],render:a=>r.createElement("div",{className:"flex flex-col gap-3 sm:flex-row"},r.createElement(o,{...m.args,className:"sm:flex-1"}),r.createElement(o,{...u.args,className:"sm:flex-1"}),r.createElement(o,{...d.args,className:"sm:flex-1"}),r.createElement(o,{...p.args,className:"sm:flex-1"}))},w={tags:["!dev","!test"],render:a=>r.createElement(N,{alignBaseline:!0},r.createElement(o,{...x.args,className:"sm:flex-12"}),r.createElement(o,{...g.args,className:"sm:flex-14"}),r.createElement(o,{...v.args,className:"sm:flex-16"}),r.createElement(o,{...y.args,className:"sm:flex-18"}),r.createElement(o,{...h.args,className:"sm:flex-20"}))};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['field-layout'],
  args: {
    required: true,
    label: 'A label',
    hint: 'A hint',
    error: 'An error message',
    defaultValue: 'A problematic value',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('A label*');
    const requiredAsterisk = canvas.getByTitle('(required)');
    await step('Assert accessibility of layout elements', async () => {
      expect(input).toHaveRole('textbox');
      expect(input).toHaveAccessibleDescription('A hint');
      expect(input).toHaveAccessibleErrorMessage('An error message');
      expect(requiredAsterisk).toHaveTextContent('*');
    });
    await step('Assert the error style', async () => {
      expect(input).toHaveClass('border-rose-800');
    });
  }
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    placeholder: 'Empty Text',
    'aria-label': 'Empty Text',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const input = canvas.getByLabelText('Empty Text');
    await step('Assert Text is functional without an initial value', async () => {
      await userEvent.type(input, 'a');
      expect(input).toHaveValue('a');
      expect(args.onChange).toHaveBeenCalledOnce();
    });
    await step('Reset the value', async () => {
      await userEvent.type(input, '{backspace}');
      expect(input).toHaveValue('');
    });
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    value: 'Controlled Text',
    'aria-label': 'Controlled Text',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const input = canvas.getByLabelText('Controlled Text');
    await step('Assert \`value\` works', async () => {
      expect(input).toHaveValue(args.value);
    });
    await step('Try adding text. \`onChange\` should fire, but the value is controlled, so it shouldn’t change', async () => {
      await userEvent.type(input, 'a');
      expect(args.onChange).toHaveBeenCalledOnce();
      expect(input).toHaveValue(args.value);
    });
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    defaultValue: 'Uncontrolled Text',
    'aria-label': 'Uncontrolled Text',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const input = canvas.getByLabelText('Uncontrolled Text');
    await step('Assert \`defaultValue\` works', async () => {
      expect(input).toHaveValue(args.defaultValue);
    });
    await step('Typing into the Text should amend the value, since it’s uncontrolled', async () => {
      await userEvent.type(input, 'a');
      expect(input).toHaveValue(\`\${args.defaultValue}a\`);
      expect(args.onChange).toHaveBeenCalledOnce();
    });
    await step('Reset the value', async () => {
      await userEvent.type(input, '{backspace}');
      expect(input).toHaveValue(args.defaultValue);
    });
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    defaultValue: 'Disabled Text',
    disabled: true,
    'aria-label': 'Disabled Text',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const input = canvas.getByLabelText('Disabled Text');
    await step('Assert disabled state', async () => {
      expect(input).toBeDisabled();
    });

    // Typing should not fire any changes
    await step('Typing should have no effect', async () => {
      await userEvent.type(input, 'a');
      expect(args.onChange).not.toHaveBeenCalled();
      expect(input).toHaveValue(args.defaultValue);
    });
  }
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Xs Text',
    sizer: 'xs',
    placeholder: 'Xs Text',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('Xs Text');
    const field = input.closest('[data-nickui-component="Text"]');
    await step('Assert the xs sizer style on both the Text & Field', async () => {
      expect(input).toHaveClass('text-xs');
      expect(field).toHaveAttribute('data-nickui-sizer', 'xs');
    });
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Sm Text',
    sizer: 'sm',
    placeholder: 'Sm Text',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('Sm Text');
    const field = input.closest('[data-nickui-component="Text"]');
    await step('Assert the sm sizer style on both the Text & Field', async () => {
      expect(input).toHaveClass('text-sm');
      expect(field).toHaveAttribute('data-nickui-sizer', 'sm');
    });
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Base Text',
    sizer: 'base',
    placeholder: 'Base Text',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('Base Text');
    const field = input.closest('[data-nickui-component="Text"]');
    await step('Assert the base sizer style on both the Text & Field', async () => {
      expect(input).toHaveClass('text-base');
      expect(field).toHaveAttribute('data-nickui-sizer', 'base');
    });
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Lg Text',
    sizer: 'lg',
    placeholder: 'Lg Text',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('Lg Text');
    const field = input.closest('[data-nickui-component="Text"]');
    await step('Assert the lg sizer style on both the Text & Field', async () => {
      expect(input).toHaveClass('text-lg');
      expect(field).toHaveAttribute('data-nickui-sizer', 'lg');
    });
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Xl Text',
    sizer: 'xl',
    placeholder: 'Xl Text',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('Xl Text');
    const field = input.closest('[data-nickui-component="Text"]');
    await step('Assert the xl sizer style on both the Text & Field', async () => {
      expect(input).toHaveClass('text-xl');
      expect(field).toHaveAttribute('data-nickui-sizer', 'xl');
    });
  }
}`,...h.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive label',
    placeholder: 'Responsive Text',
    onChange: fn()
  }
}`,...T.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-3 sm:flex-row">
      <Text {...empty.args} className="sm:flex-1" />
      <Text {...controlled.args} className="sm:flex-1" />
      <Text {...uncontrolled.args} className="sm:flex-1" />
      <Text {...disabled.args} className="sm:flex-1" />
    </div>
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper alignBaseline>
      <Text {...xs.args} className="sm:flex-12" />
      <Text {...sm.args} className="sm:flex-14" />
      <Text {...base.args} className="sm:flex-16" />
      <Text {...lg.args} className="sm:flex-18" />
      <Text {...xl.args} className="sm:flex-20" />
    </AllSizersStoryWrapper>
}`,...w.parameters?.docs?.source}}};const O=["fieldLayout","empty","controlled","uncontrolled","disabled","xs","sm","base","lg","xl","responsive","allControlStates","allSizers"],j=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:O,allControlStates:f,allSizers:w,base:v,controlled:u,default:D,disabled:p,empty:m,fieldLayout:b,lg:y,responsive:T,sm:g,uncontrolled:d,xl:h,xs:x},Symbol.toStringTag,{value:"Module"}));export{o as T,j as s};
