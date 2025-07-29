import{r as n}from"./iframe-ewlT1mRj.js";import{A as F}from"./AllSizersStoryWrapper-Do39ytD5.js";import{F as O}from"./Field-BijVQz4q.js";import{r as w}from"./randomId-Dfhrkieu.js";import{a as M,u as U}from"./index-uDilQlfd.js";const N=M({base:`
    w-full
    border-2 rounded-sm
    bg-white
    placeholder:opacity-100 placeholder:text-gray-400
    focus:border-blue-800 focus:shadow-[0_0_11px] focus:shadow-blue-300 focus:outline-0 
    disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder:text-gray-300 disabled:cursor-not-allowed disabled:opacity-100
  `,variants:{sizer:{xs:"text-xs py-1.25 px-2",sm:"text-sm py-1.5 px-2",base:"text-base py-2.5 px-3.5",lg:"text-lg py-3.5 px-4.5",xl:"text-xl py-4.5 px-5.5"},hasError:{true:"border-rose-800 focus:border-rose-800 focus:shadow-rose-300"}},defaultVariants:{sizer:"base",hasError:!1}});function o({className:e,sizer:l,label:s,hint:r,error:t,required:C,disabled:B,id:E,"aria-describedby":L,"aria-errormessage":V,"aria-invalid":H,...X}){const[_]=n.useState(w()),A=E||(s?_:void 0),[R]=n.useState(w()),S=L||(r?R:void 0),[q]=n.useState(w()),z=V||(t&&t!==!0?q:void 0),k=U(l),D=N({sizer:k,hasError:!!t});return n.createElement(O,{className:e,sizer:l,label:s,controlId:A,hint:r,hintId:S,error:t!==!0?t:void 0,errorId:z,disabled:B,required:C},n.createElement("input",{...X,id:A,className:D,disabled:B,required:C,"aria-describedby":S,"aria-errormessage":z,"aria-invalid":H!==void 0?H:!!t}))}o.__docgenInfo={description:`A form control that allows users to enter & edit a single line of text
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
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}}};const{expect:a,fn:i}=__STORYBOOK_MODULE_TEST__,I={title:"Form controls/Text",component:o},b={tags:["field-layout"],args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"A problematic value",onChange:i()},play:async({canvas:e,step:l})=>{const s=e.getByLabelText("A label*"),r=e.getByTitle("required");await l("Assert accessibility of layout elements",async()=>{a(s).toHaveRole("textbox"),a(s).toHaveAccessibleDescription("A hint"),a(s).toHaveAccessibleErrorMessage("An error message"),a(r).toHaveTextContent("*")}),await l("Assert the error style",async()=>{a(s).toHaveClass("border-rose-800")})}},c={tags:["control-state"],args:{placeholder:"Empty Text","aria-label":"Empty Text",onChange:i()},play:async({args:e,canvas:l,step:s,userEvent:r})=>{const t=l.getByLabelText("Empty Text");await s("Assert Text is functional without an initial value",async()=>{await r.type(t,"a"),a(t).toHaveValue("a"),a(e.onChange).toHaveBeenCalledOnce()}),await s("Reset the value",async()=>{await r.type(t,"{backspace}"),a(t).toHaveValue("")})}},u={tags:["control-state"],args:{value:"Controlled Text","aria-label":"Controlled Text",onChange:i()},play:async({args:e,canvas:l,step:s,userEvent:r})=>{const t=l.getByLabelText("Controlled Text");await s("Assert `value` works",async()=>{a(t).toHaveValue(e.value)}),await s("Try adding text. `onChange` should fire, but the value is controlled, so it shouldn’t change",async()=>{await r.type(t,"a"),a(e.onChange).toHaveBeenCalledOnce(),a(t).toHaveValue(e.value)})}},m={tags:["control-state"],args:{defaultValue:"Uncontrolled Text","aria-label":"Uncontrolled Text",onChange:i()},play:async({args:e,canvas:l,step:s,userEvent:r})=>{const t=l.getByLabelText("Uncontrolled Text");await s("Assert `defaultValue` works",async()=>{a(t).toHaveValue(e.defaultValue)}),await s("Typing into the Text should amend the value, since it’s uncontrolled",async()=>{await r.type(t,"a"),a(t).toHaveValue(`${e.defaultValue}a`),a(e.onChange).toHaveBeenCalledOnce()}),await s("Reset the value",async()=>{await r.type(t,"{backspace}"),a(t).toHaveValue(e.defaultValue)})}},d={tags:["control-state"],args:{defaultValue:"Disabled Text",disabled:!0,"aria-label":"Disabled Text",onChange:i()},play:async({args:e,canvas:l,step:s,userEvent:r})=>{const t=l.getByLabelText("Disabled Text");await s("Assert disabled state",async()=>{a(t).toBeDisabled()}),await s("Typing should have no effect",async()=>{await r.type(t,"a"),a(e.onChange).not.toHaveBeenCalled(),a(t).toHaveValue(e.defaultValue)})}},p={tags:["sizer"],args:{sizer:"xs",label:"Xs label",placeholder:"Xs Text",onChange:i()},play:async({canvas:e,step:l})=>{await l("Assert the xs sizer style on both the Text & Field",async()=>{a(e.getByLabelText("Xs label")).toHaveClass("text-xs"),a(e.getByText("Xs label")).toHaveClass("text-xs")})}},g={tags:["sizer"],args:{sizer:"sm",label:"Sm label",placeholder:"Sm Text",onChange:i()},play:async({canvas:e,step:l})=>{await l("Assert the sm sizer style on both the Text & Field",async()=>{a(e.getByLabelText("Sm label")).toHaveClass("text-sm"),a(e.getByText("Sm label")).toHaveClass("text-sm")})}},x={tags:["sizer"],args:{sizer:"base",label:"Base label",placeholder:"Base Text",onChange:i()},play:async({canvas:e,step:l})=>{await l("Assert the base sizer style on both the Text & Field",async()=>{a(e.getByLabelText("Base label")).toHaveClass("text-base"),a(e.getByText("Base label")).toHaveClass("text-base")})}},v={tags:["sizer"],args:{sizer:"lg",label:"Lg label",placeholder:"Lg Text",onChange:i()},play:async({canvas:e,step:l})=>{await l("Assert the lg sizer style on both the Text & Field",async()=>{a(e.getByLabelText("Lg label")).toHaveClass("text-lg"),a(e.getByText("Lg label")).toHaveClass("text-lg")})}},y={tags:["sizer"],args:{sizer:"xl",label:"Xl label",placeholder:"Xl Text",onChange:i()},play:async({canvas:e,step:l})=>{await l("Assert the xl sizer style on both the Text & Field",async()=>{a(e.getByLabelText("Xl label")).toHaveClass("text-xl"),a(e.getByText("Xl label")).toHaveClass("text-xl")})}},h={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],label:"Responsive label",placeholder:"Responsive Text",onChange:i()}},T={tags:["!dev","!test"],render:e=>n.createElement("div",{className:"flex flex-col gap-4"},n.createElement(o,{...c.args}),n.createElement(o,{...u.args}),n.createElement(o,{...m.args}),n.createElement(o,{...d.args}))},f={tags:["!dev","!test"],render:e=>n.createElement(F,{alignBaseline:!0},n.createElement(o,{...p.args}),n.createElement(o,{...g.args}),n.createElement(o,{...x.args}),n.createElement(o,{...v.args}),n.createElement(o,{...y.args}))};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'xs',
    label: 'Xs label',
    placeholder: 'Xs Text',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the xs sizer style on both the Text & Field', async () => {
      expect(canvas.getByLabelText('Xs label')).toHaveClass('text-xs');
      expect(canvas.getByText('Xs label')).toHaveClass('text-xs');
    });
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'sm',
    label: 'Sm label',
    placeholder: 'Sm Text',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the sm sizer style on both the Text & Field', async () => {
      expect(canvas.getByLabelText('Sm label')).toHaveClass('text-sm');
      expect(canvas.getByText('Sm label')).toHaveClass('text-sm');
    });
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'base',
    label: 'Base label',
    placeholder: 'Base Text',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the base sizer style on both the Text & Field', async () => {
      expect(canvas.getByLabelText('Base label')).toHaveClass('text-base');
      expect(canvas.getByText('Base label')).toHaveClass('text-base');
    });
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'lg',
    label: 'Lg label',
    placeholder: 'Lg Text',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the lg sizer style on both the Text & Field', async () => {
      expect(canvas.getByLabelText('Lg label')).toHaveClass('text-lg');
      expect(canvas.getByText('Lg label')).toHaveClass('text-lg');
    });
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'xl',
    label: 'Xl label',
    placeholder: 'Xl Text',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the xl sizer style on both the Text & Field', async () => {
      expect(canvas.getByLabelText('Xl label')).toHaveClass('text-xl');
      expect(canvas.getByText('Xl label')).toHaveClass('text-xl');
    });
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive label',
    placeholder: 'Responsive Text',
    onChange: fn()
  }
}`,...h.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Text {...Empty.args} />
      <Text {...Controlled.args} />
      <Text {...Uncontrolled.args} />
      <Text {...Disabled.args} />
    </div>
}`,...T.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper alignBaseline>
      <Text {...Xs.args} />
      <Text {...Sm.args} />
      <Text {...Base.args} />
      <Text {...Lg.args} />
      <Text {...Xl.args} />
    </AllSizersStoryWrapper>
}`,...f.parameters?.docs?.source}}};const W=["FieldLayout","Empty","Controlled","Uncontrolled","Disabled","Xs","Sm","Base","Lg","Xl","Responsive","AllControlStates","AllSizers"],G=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:T,AllSizers:f,Base:x,Controlled:u,Disabled:d,Empty:c,FieldLayout:b,Lg:v,Responsive:h,Sm:g,Uncontrolled:m,Xl:y,Xs:p,__namedExportsOrder:W,default:I},Symbol.toStringTag,{value:"Module"}));export{G as S,o as T};
