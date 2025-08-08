import{r as t}from"./iframe-C3OS0XiJ.js";import{A as _}from"./AllSizersStoryWrapper-BgoD26Cb.js";import{F as O}from"./Field-DLW1HTnl.js";import{u as V}from"./useFieldA11yIds-CXvEWjgF.js";import{a as q,u as F}from"./index-X5EXH7qk.js";const b=`after:bg-[url("data:image/svg+xml;utf8,%3Csvg%20viewBox='0%200%2012%2023'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cpath%20d='M11.4%207.7C11.6472%208.02962%2011.412%208.5%2011%208.5H1C0.587977%208.5%200.352786%208.02962%200.6%207.7L5.6%201.03333C5.8%200.766667%206.2%200.766667%206.4%201.03333L11.4%207.7Z'%20fill='black'%20fill-opacity='0.86'%20/%3E%3Cpath%20d='M11.4%2015.3C11.6472%2014.9704%2011.412%2014.5%2011%2014.5H1C0.587977%2014.5%200.352786%2014.9704%200.6%2015.3L5.6%2021.9667C5.8%2022.2333%206.2%2022.2333%206.4%2021.9667L11.4%2015.3Z'%20fill='black'%20fill-opacity='0.86'%20/%3E%3C/svg%3E")]`,D=q({slots:{select:`
      appearance-none
      w-full
      border-2 rounded-sm
      bg-white
      focus:border-blue-800 focus:shadow-[0_0_11px] focus:shadow-blue-300 focus:outline-0 
      disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed disabled:opacity-100
    `,root:`
      relative after:block
      after:absolute after:top-[50%] after:-translate-y-1/2
      after:bg-cover after:bg-no-repeat
      after:pointer-events-none after:select-none
    `},variants:{sizer:{xs:{select:"text-xs py-1.25 pl-2 pr-6",root:`after:w-[6px] after:h-[12px] after:right-2.5 ${b}`},sm:{select:"text-sm py-1.5 pl-2 pr-7",root:`after:w-[6.5px] after:h-[13px] after:right-3 ${b}`},base:{select:"text-base py-2.5 pl-3.5 pr-9",root:`after:w-[9px] after:h-[18px] after:right-3.75 ${b}`},lg:{select:"text-lg py-3.5 pl-4.5 pr-11",root:`after:w-[11.5px] after:h-[23px] after:right-4.5 ${b}`},xl:{select:"text-xl py-5.5 pl-5.5 pr-12.5",root:`after:w-[14px] after:h-[28px] after:right-5 ${b}`}},hasError:{true:{select:"border-rose-800 focus:border-rose-800 focus:shadow-rose-300"}},isDisabled:{true:{root:"after:opacity-40"}}},defaultVariants:{sizer:"base",hasError:!1,isDisabled:!1}});function o({className:a,sizer:s,label:e,hint:r,error:n,disabled:C,required:A,id:H,"aria-labelledby":T,"aria-describedby":k,"aria-errormessage":B,"aria-invalid":z,...L}){const i=V({label:e,hint:r,error:n,controlledId:H,controlledAriaLabelledBy:T,controlledAriaDescribedBy:k,controlledAriaErrorMessage:B}),N=F(s),E=D({sizer:N,hasError:!!n,isDisabled:!!C});return t.createElement(O,{className:a,sizer:s,label:e,labelId:i.ariaLabelledBy,controlId:i.id,hint:r,hintId:i.ariaDescribedBy,error:n!==!0?n:void 0,errorId:i.ariaErrorMessage,disabled:C,required:A,"data-nickui-component":"Select"},t.createElement("div",{className:E.root()},t.createElement("select",{...L,id:i.id,className:E.select(),disabled:C,required:A,"aria-labelledby":i.ariaLabelledBy,"aria-describedby":i.ariaDescribedBy,"aria-errormessage":i.ariaErrorMessage,"aria-invalid":z!==void 0?z:!!n})))}o.__docgenInfo={description:`A form control that allows users to choose an option using a menu
@param props {@link SelectProps} + {@link CommonFieldProps}`,methods:[],displayName:"Select",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLSelectElement>",elements:[{name:"HTMLSelectElement"}]},name:"event"}],return:{name:"void"}}},description:"Called when the value of the Select changes"},value:{required:!1,tsType:{name:"string"},description:`Sets the value of the Select when using it as a
[controlled component](https://react.dev/reference/react-dom/components/select#controlling-a-select-box-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"string"},description:"Sets the value of the Select when using it as an uncontrolled component"},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"union",raw:"SizerType | SizerType[]",elements:[{name:"union",raw:`| 'xs'
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
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}}};const{expect:l,fn:c}=__STORYBOOK_MODULE_TEST__,R={title:"Form controls/Select",component:o},y={tags:["field-layout"],args:{required:!0,label:"A label",error:"An error message",hint:"A hint",children:t.createElement("option",null,"An option"),onChange:c()},play:async({canvas:a,step:s})=>{const e=a.getByLabelText("A label*"),r=a.getByTitle("(required)");await s("Assert accessibility of layout elements",async()=>{l(e).toHaveRole("combobox"),l(e).toHaveAccessibleDescription("A hint"),l(e).toHaveAccessibleErrorMessage("An error message"),l(r).toHaveTextContent("*")}),await s("Assert the error style",async()=>{l(e).toHaveClass("border-rose-800")})}},m={tags:["control-state"],args:{value:"controlled","aria-label":"Controlled Select",children:[t.createElement("option",{value:"another",key:"another"},"Another option"),t.createElement("option",{value:"controlled",key:"controlled"},"Controlled Select")],onChange:c()},play:async({args:a,canvas:s,step:e,userEvent:r})=>{const n=s.getByLabelText("Controlled Select");await e("Assert `value` works",async()=>{l(n).toHaveValue(a.value)}),await e("Try selecting the other option. `onChange` should fire, but the value is controlled, so it shouldn’t change",async()=>{await r.tab(),l(n).toHaveFocus(),await r.selectOptions(n,"another"),l(a.onChange).toHaveBeenCalledOnce(),l(n).toHaveValue(a.value)})}},d={tags:["control-state"],args:{defaultValue:"uncontrolled","aria-label":"Uncontrolled Select",children:[t.createElement("option",{value:"another",key:"another"},"Another option"),t.createElement("option",{value:"uncontrolled",key:"uncontrolled"},"Uncontrolled Select")],onChange:c()},play:async({args:a,canvas:s,step:e,userEvent:r})=>{const n=s.getByLabelText("Uncontrolled Select");await e("Assert `defaultValue` works",async()=>{l(n).toHaveValue(a.defaultValue)}),await e("Selecting a different option should change the value, since it’s uncontrolled",async()=>{await r.selectOptions(n,"another"),l(n).toHaveValue("another"),l(a.onChange).toHaveBeenCalledOnce()}),await e("Reset the value",async()=>{await r.selectOptions(n,"uncontrolled"),l(n).toHaveValue("uncontrolled")})}},u={tags:["control-state"],args:{disabled:!0,"aria-label":"Disabled Select",children:t.createElement("option",{value:"disabled"},"Disabled Select"),onChange:c()},play:async({canvas:a,step:s})=>{await s("Assert disabled state",async()=>{l(a.getByLabelText("Disabled Select")).toBeDisabled()})}},p={tags:["sizer"],args:{"aria-label":"Xs Select",sizer:"xs",children:t.createElement("option",null,"Xs Select"),onChange:c()},play:async({canvas:a,step:s})=>{const e=a.getByLabelText("Xs Select"),r=e.closest('[data-nickui-component="Select"');await s("Assert the xs sizer style on both the Select & Field",async()=>{l(e).toHaveClass("text-xs"),l(r).toHaveAttribute("data-nickui-sizer","xs")})}},g={tags:["sizer"],args:{"aria-label":"Sm Select",sizer:"sm",children:t.createElement("option",null,"Sm Select"),onChange:c()},play:async({canvas:a,step:s})=>{const e=a.getByLabelText("Sm Select"),r=e.closest('[data-nickui-component="Select"');await s("Assert the sm sizer style on both the Select & Field",async()=>{l(e).toHaveClass("text-sm"),l(r).toHaveAttribute("data-nickui-sizer","sm")})}},x={tags:["sizer"],args:{"aria-label":"Base Select",sizer:"base",children:t.createElement("option",null,"Base Select"),onChange:c()},play:async({canvas:a,step:s})=>{const e=a.getByLabelText("Base Select"),r=e.closest('[data-nickui-component="Select"');await s("Assert the base sizer style on both the Select & Field",async()=>{l(e).toHaveClass("text-base"),l(r).toHaveAttribute("data-nickui-sizer","base")})}},v={tags:["sizer"],args:{"aria-label":"Lg Select",sizer:"lg",children:t.createElement("option",null,"Lg Select"),onChange:c()},play:async({canvas:a,step:s})=>{const e=a.getByLabelText("Lg Select"),r=e.closest('[data-nickui-component="Select"');await s("Assert the lg sizer style on both the Select & Field",async()=>{l(e).toHaveClass("text-lg"),l(r).toHaveAttribute("data-nickui-sizer","lg")})}},h={tags:["sizer"],args:{"aria-label":"Xl Select",sizer:"xl",children:t.createElement("option",null,"Xl Select"),onChange:c()},play:async({canvas:a,step:s})=>{const e=a.getByLabelText("Xl Select"),r=e.closest('[data-nickui-component="Select"');await s("Assert the xl sizer style on both the Select & Field",async()=>{l(e).toHaveClass("text-xl"),l(r).toHaveAttribute("data-nickui-sizer","xl")})}},f={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],label:"Responsive label",children:t.createElement("option",null,"Responsive Select"),onChange:c()}},S={tags:["!dev","!test"],render:a=>t.createElement("div",{className:"flex flex-col gap-4 sm:flex-row"},t.createElement(o,{...m.args,className:"sm:flex-1"}),t.createElement(o,{...d.args,className:"sm:flex-1"}),t.createElement(o,{...u.args,className:"sm:flex-1"}))},w={tags:["!dev","!test"],render:a=>t.createElement(_,{alignBaseline:!0},t.createElement(o,{...p.args,className:"sm:flex-12"}),t.createElement(o,{...g.args,className:"sm:flex-14"}),t.createElement(o,{...x.args,className:"sm:flex-16"}),t.createElement(o,{...v.args,className:"sm:flex-18"}),t.createElement(o,{...h.args,className:"sm:flex-20"}))};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['field-layout'],
  args: {
    required: true,
    label: 'A label',
    error: 'An error message',
    hint: 'A hint',
    children: <option>An option</option>,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const select = canvas.getByLabelText('A label*');
    const requiredAsterisk = canvas.getByTitle('(required)');
    await step('Assert accessibility of layout elements', async () => {
      expect(select).toHaveRole('combobox');
      expect(select).toHaveAccessibleDescription('A hint');
      expect(select).toHaveAccessibleErrorMessage('An error message');
      expect(requiredAsterisk).toHaveTextContent('*');
    });
    await step('Assert the error style', async () => {
      expect(select).toHaveClass('border-rose-800');
    });
  }
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    value: 'controlled',
    'aria-label': 'Controlled Select',
    children: [<option value="another" key="another">
        Another option
      </option>, <option value="controlled" key="controlled">
        Controlled Select
      </option>],
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const select = canvas.getByLabelText('Controlled Select');
    await step('Assert \`value\` works', async () => {
      expect(select).toHaveValue(args.value);
    });
    await step('Try selecting the other option. \`onChange\` should fire, but the value is controlled, so it shouldn’t change', async () => {
      await userEvent.tab();
      expect(select).toHaveFocus();
      await userEvent.selectOptions(select, 'another');
      expect(args.onChange).toHaveBeenCalledOnce();
      expect(select).toHaveValue(args.value);
    });
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    defaultValue: 'uncontrolled',
    'aria-label': 'Uncontrolled Select',
    children: [<option value="another" key="another">
        Another option
      </option>, <option value="uncontrolled" key="uncontrolled">
        Uncontrolled Select
      </option>],
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const select = canvas.getByLabelText('Uncontrolled Select');
    await step('Assert \`defaultValue\` works', async () => {
      expect(select).toHaveValue(args.defaultValue);
    });
    await step('Selecting a different option should change the value, since it’s uncontrolled', async () => {
      await userEvent.selectOptions(select, 'another');
      expect(select).toHaveValue('another');
      expect(args.onChange).toHaveBeenCalledOnce();
    });
    await step('Reset the value', async () => {
      await userEvent.selectOptions(select, 'uncontrolled');
      expect(select).toHaveValue('uncontrolled');
    });
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    disabled: true,
    'aria-label': 'Disabled Select',
    children: <option value="disabled">Disabled Select</option>,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert disabled state', async () => {
      expect(canvas.getByLabelText('Disabled Select')).toBeDisabled();
    });
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Xs Select',
    sizer: 'xs',
    children: <option>Xs Select</option>,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const select = canvas.getByLabelText('Xs Select');
    const field = select.closest('[data-nickui-component="Select"');
    await step('Assert the xs sizer style on both the Select & Field', async () => {
      expect(select).toHaveClass('text-xs');
      expect(field).toHaveAttribute('data-nickui-sizer', 'xs');
    });
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Sm Select',
    sizer: 'sm',
    children: <option>Sm Select</option>,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const select = canvas.getByLabelText('Sm Select');
    const field = select.closest('[data-nickui-component="Select"');
    await step('Assert the sm sizer style on both the Select & Field', async () => {
      expect(select).toHaveClass('text-sm');
      expect(field).toHaveAttribute('data-nickui-sizer', 'sm');
    });
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Base Select',
    sizer: 'base',
    children: <option>Base Select</option>,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const select = canvas.getByLabelText('Base Select');
    const field = select.closest('[data-nickui-component="Select"');
    await step('Assert the base sizer style on both the Select & Field', async () => {
      expect(select).toHaveClass('text-base');
      expect(field).toHaveAttribute('data-nickui-sizer', 'base');
    });
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Lg Select',
    sizer: 'lg',
    children: <option>Lg Select</option>,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const select = canvas.getByLabelText('Lg Select');
    const field = select.closest('[data-nickui-component="Select"');
    await step('Assert the lg sizer style on both the Select & Field', async () => {
      expect(select).toHaveClass('text-lg');
      expect(field).toHaveAttribute('data-nickui-sizer', 'lg');
    });
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Xl Select',
    sizer: 'xl',
    children: <option>Xl Select</option>,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const select = canvas.getByLabelText('Xl Select');
    const field = select.closest('[data-nickui-component="Select"');
    await step('Assert the xl sizer style on both the Select & Field', async () => {
      expect(select).toHaveClass('text-xl');
      expect(field).toHaveAttribute('data-nickui-sizer', 'xl');
    });
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive label',
    children: <option>Responsive Select</option>,
    onChange: fn()
  }
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row">
      <Select {...controlled.args} className="sm:flex-1" />
      <Select {...uncontrolled.args} className="sm:flex-1" />
      <Select {...disabled.args} className="sm:flex-1" />
    </div>
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper alignBaseline>
      <Select {...xs.args} className="sm:flex-12" />
      <Select {...sm.args} className="sm:flex-14" />
      <Select {...base.args} className="sm:flex-16" />
      <Select {...lg.args} className="sm:flex-18" />
      <Select {...xl.args} className="sm:flex-20" />
    </AllSizersStoryWrapper>
}`,...w.parameters?.docs?.source}}};const X=["fieldLayout","controlled","uncontrolled","disabled","xs","sm","base","lg","xl","responsive","allControlStates","allSizers"],W=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:X,allControlStates:S,allSizers:w,base:x,controlled:m,default:R,disabled:u,fieldLayout:y,lg:v,responsive:f,sm:g,uncontrolled:d,xl:h,xs:p},Symbol.toStringTag,{value:"Module"}));export{o as S,W as s};
