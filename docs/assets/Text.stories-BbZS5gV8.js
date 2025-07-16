import{r}from"./iframe-d_INZCmK.js";import{F as k}from"./Field-BINraHLL.js";import{a as D,S as y,u as O}from"./index-BxnlHtOP.js";import{r as f}from"./randomId-Dfhrkieu.js";const F=D({base:`
    w-full
    border-2 rounded-sm
    bg-white
    placeholder:opacity-100 placeholder:text-gray-400
    focus:border-indigo-800 focus:shadow-[0_0_11px] focus:shadow-indigo-300 focus:outline-0 
    disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder:text-gray-300 disabled:cursor-not-allowed disabled:opacity-100
  `,variants:{sizer:{[y.small]:"text-sm py-1.5 px-2",[y.medium]:"text-base py-2.5 px-3.5",[y.large]:"text-lg py-3.5 px-4.5"},hasError:{true:"border-rose-800 focus:border-rose-800 focus:shadow-rose-300"}},defaultVariants:{sizer:y.small,hasError:!1}});function l({className:e,sizer:n,label:s,hint:o,error:a,required:w,disabled:C,id:B,"aria-describedby":L,"aria-errormessage":z,"aria-invalid":H,...V}){const[M]=r.useState(f()),A=B||(s?M:void 0),[R]=r.useState(f()),E=L||(o?R:void 0),[_]=r.useState(f()),S=z||(a&&a!==!0?_:void 0),q=O(n),N=F({sizer:q,hasError:!!a});return r.createElement(k,{className:e,sizer:n,label:s,controlId:A,hint:o,hintId:E,error:a!==!0?a:void 0,errorId:S,disabled:C,required:w},r.createElement("input",{...V,id:A,className:N,disabled:C,required:w,"aria-describedby":E,"aria-errormessage":S,"aria-invalid":H!==void 0?H:!!a}))}l.sizer=y;l.__docgenInfo={description:`A form control that allows users to enter & edit a single line of text
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
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"string"},description:"Sets the value of the Text when using it as an uncontrolled component"},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"union",raw:"Sizer | Sizer[]",elements:[{name:"Sizer"},{name:"Array",elements:[{name:"Sizer"}],raw:"Sizer[]"}]},description:'Changes the size of the field ("small", "medium", "large")'},label:{required:!1,tsType:{name:"ReactNode"},description:"The main label to show above the form control, naming the field"},hint:{required:!1,tsType:{name:"ReactNode"},description:`A hint about what kind of value the control accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}}};const{expect:t,fn:T}=__STORYBOOK_MODULE_TEST__,U={title:"Form controls/Text",component:l},v={args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"A problematic value"},play:async({canvas:e,step:n})=>{const s=e.getByLabelText("A label*"),o=e.getByTitle("required");await n("Assert accessibility of layout elements",async()=>{t(s).toHaveRole("textbox"),t(s).toHaveAccessibleDescription("A hint"),t(s).toHaveAccessibleErrorMessage("An error message"),t(o).toHaveTextContent("*")}),await n("Assert the error style",async()=>{t(s).toHaveClass("border-rose-800")})}},i={args:{placeholder:"Empty Text","aria-label":"Empty Text",onChange:T()},play:async({args:e,canvas:n,step:s,userEvent:o})=>{const a=n.getByLabelText("Empty Text");await s("Assert Text is functional without an initial value",async()=>{await o.type(a,"a"),t(a).toHaveValue("a"),t(e.onChange).toHaveBeenCalledOnce()}),await s("Reset the value",async()=>{await o.type(a,"{backspace}"),t(a).toHaveValue("")})}},c={args:{value:"Controlled Text","aria-label":"Controlled Text",onChange:T()},play:async({args:e,canvas:n,step:s,userEvent:o})=>{const a=n.getByLabelText("Controlled Text");await s("Assert `value` works",async()=>{t(a).toHaveValue(e.value)}),await s("Try adding text. `onChange` should fire, but the value is controlled, so it shouldn’t change",async()=>{await o.type(a,"a"),t(e.onChange).toHaveBeenCalledOnce(),t(a).toHaveValue(e.value)})}},d={args:{defaultValue:"Uncontrolled Text","aria-label":"Uncontrolled Text",onChange:T()},play:async({args:e,canvas:n,step:s,userEvent:o})=>{const a=n.getByLabelText("Uncontrolled Text");await s("Assert `defaultValue` works",async()=>{t(a).toHaveValue(e.defaultValue)}),await s("Typing into the Text should amend the value, since it’s uncontrolled",async()=>{await o.type(a,"a"),t(a).toHaveValue(`${e.defaultValue}a`),t(e.onChange).toHaveBeenCalledOnce()}),await s("Reset the value",async()=>{await o.type(a,"{backspace}"),t(a).toHaveValue(e.defaultValue)})}},u={args:{defaultValue:"Disabled Text",disabled:!0,onChange:T(),"aria-label":"Disabled Text"},play:async({args:e,canvas:n,step:s,userEvent:o})=>{const a=n.getByLabelText("Disabled Text");await s("Assert disabled state",async()=>{t(a).toBeDisabled()}),await s("Typing should have no effect",async()=>{await o.type(a,"a"),t(e.onChange).not.toHaveBeenCalled(),t(a).toHaveValue(e.defaultValue)})}},p={args:{sizer:l.sizer.small,label:"Small label",placeholder:"Small Text (default)"},play:async({canvas:e,step:n})=>{await n("Assert the small style on both the Text & Field",async()=>{t(e.getByLabelText("Small label")).toHaveClass("text-sm"),t(e.getByText("Small label")).toHaveClass("text-xs")})}},m={args:{sizer:l.sizer.medium,label:"Medium label",placeholder:"Medium Text"},play:async({canvas:e,step:n})=>{await n("Assert the medium style on both the Text & Field",async()=>{t(e.getByLabelText("Medium label")).toHaveClass("text-base"),t(e.getByText("Medium label")).toHaveClass("text-sm")})}},g={args:{sizer:l.sizer.large,label:"Large label",placeholder:"Large Text"},play:async({canvas:e,step:n})=>{await n("Assert the large style on both the Text & Field",async()=>{t(e.getByLabelText("Large label")).toHaveClass("text-lg"),t(e.getByText("Large label")).toHaveClass("text-lg")})}},x={tags:["!test"],args:{sizer:[l.sizer.smMedium,l.sizer.mdLarge],label:"Responsive label",placeholder:"Responsive Text"}},h={tags:["!dev","!test"],render:e=>r.createElement("div",{className:"flex flex-col gap-4"},r.createElement(l,{...i.args}),r.createElement(l,{...c.args}),r.createElement(l,{...d.args}),r.createElement(l,{...u.args}))},b={tags:["!dev","!test"],render:e=>r.createElement("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-baseline"},r.createElement(l,{...p.args,className:"sm:flex-1"}),r.createElement(l,{...m.args,className:"sm:flex-1"}),r.createElement(l,{...g.args,className:"sm:flex-1"}),r.createElement(l,{...x.args,className:"sm:flex-1"}))};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    required: true,
    label: 'A label',
    hint: 'A hint',
    error: 'An error message',
    defaultValue: 'A problematic value'
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('A label*');
    const requiredAsterisk = canvas.getByTitle('required');
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
}`,...v.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Disabled Text',
    disabled: true,
    onChange: fn(),
    'aria-label': 'Disabled Text'
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Text.sizer.small,
    label: 'Small label',
    placeholder: 'Small Text (default)'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the small style on both the Text & Field', async () => {
      expect(canvas.getByLabelText('Small label')).toHaveClass('text-sm');
      expect(canvas.getByText('Small label')).toHaveClass('text-xs');
    });
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Text.sizer.medium,
    label: 'Medium label',
    placeholder: 'Medium Text'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the medium style on both the Text & Field', async () => {
      expect(canvas.getByLabelText('Medium label')).toHaveClass('text-base');
      expect(canvas.getByText('Medium label')).toHaveClass('text-sm');
    });
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Text.sizer.large,
    label: 'Large label',
    placeholder: 'Large Text'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the large style on both the Text & Field', async () => {
      expect(canvas.getByLabelText('Large label')).toHaveClass('text-lg');
      expect(canvas.getByText('Large label')).toHaveClass('text-lg');
    });
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  args: {
    sizer: [Text.sizer.smMedium, Text.sizer.mdLarge],
    label: 'Responsive label',
    placeholder: 'Responsive Text'
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Text {...Empty.args} />
      <Text {...Controlled.args} />
      <Text {...Uncontrolled.args} />
      <Text {...Disabled.args} />
    </div>
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline">
      <Text {...Small.args} className="sm:flex-1" />
      <Text {...Medium.args} className="sm:flex-1" />
      <Text {...Large.args} className="sm:flex-1" />
      <Text {...Responsive.args} className="sm:flex-1" />
    </div>
}`,...b.parameters?.docs?.source}}};const I=["FieldLayout","Empty","Controlled","Uncontrolled","Disabled","Small","Medium","Large","Responsive","AllControlStates","AllSizes"],K=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:h,AllSizes:b,Controlled:c,Disabled:u,Empty:i,FieldLayout:v,Large:g,Medium:m,Responsive:x,Small:p,Uncontrolled:d,__namedExportsOrder:I,default:U},Symbol.toStringTag,{value:"Module"}));export{K as S,l as T};
