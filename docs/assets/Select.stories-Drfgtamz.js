import{r as a}from"./iframe-DJUO-rvG.js";import{A as V}from"./AllSizersStoryWrapper-w4m3vfDX.js";import{F as q}from"./Field-DzqdsOp7.js";import{r as w}from"./randomId-Dfhrkieu.js";import{a as M,u as U}from"./index-D9dgeNtQ.js";const v=`after:bg-[url("data:image/svg+xml;utf8,%3Csvg%20viewBox='0%200%2012%2023'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cpath%20d='M11.4%207.7C11.6472%208.02962%2011.412%208.5%2011%208.5H1C0.587977%208.5%200.352786%208.02962%200.6%207.7L5.6%201.03333C5.8%200.766667%206.2%200.766667%206.4%201.03333L11.4%207.7Z'%20fill='black'%20fill-opacity='0.86'%20/%3E%3Cpath%20d='M11.4%2015.3C11.6472%2014.9704%2011.412%2014.5%2011%2014.5H1C0.587977%2014.5%200.352786%2014.9704%200.6%2015.3L5.6%2021.9667C5.8%2022.2333%206.2%2022.2333%206.4%2021.9667L11.4%2015.3Z'%20fill='black'%20fill-opacity='0.86'%20/%3E%3C/svg%3E")]`,N=M({slots:{select:`
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
    `},variants:{sizer:{xs:{select:"text-xs py-1.25 pl-2 pr-6",root:`after:w-[6px] after:h-[12px] after:right-2.5 ${v}`},sm:{select:"text-sm py-1.5 pl-2 pr-7",root:`after:w-[6.5px] after:h-[13px] after:right-3 ${v}`},base:{select:"text-base py-2.5 pl-3.5 pr-9",root:`after:w-[9px] after:h-[18px] after:right-3.75 ${v}`},lg:{select:"text-lg py-3.5 pl-4.5 pr-11",root:`after:w-[11.5px] after:h-[23px] after:right-4.5 ${v}`},xl:{select:"text-xl py-5.5 pl-5.5 pr-12.5",root:`after:w-[14px] after:h-[28px] after:right-5 ${v}`}},hasError:{true:{select:"border-rose-800 focus:border-rose-800 focus:shadow-rose-300"}},isDisabled:{true:{root:"after:opacity-40"}}},defaultVariants:{sizer:"base",hasError:!1,isDisabled:!1}});function o({className:e,sizer:l,label:n,hint:r,error:s,disabled:C,required:A,id:L,"aria-describedby":k,"aria-errormessage":X,"aria-invalid":T,..._}){const[D]=a.useState(w()),B=L||(n?D:void 0),[F]=a.useState(w()),E=k||(r?F:void 0),[O]=a.useState(w()),H=X||(s&&s!==!0?O:void 0),R=U(l),z=N({sizer:R,hasError:!!s,isDisabled:!!C});return a.createElement(q,{className:e,sizer:l,label:n,controlId:B,hint:r,hintId:E,error:s!==!0?s:void 0,errorId:H,disabled:C,required:A},a.createElement("div",{className:z.root()},a.createElement("select",{..._,id:B,className:z.select(),disabled:C,required:A,"aria-describedby":E,"aria-errormessage":H,"aria-invalid":T!==void 0?T:!!s})))}o.__docgenInfo={description:`A form control that allows users to choose an option using a menu
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
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}}};const{expect:t,fn:c}=__STORYBOOK_MODULE_TEST__,I={title:"Form controls/Select",component:o},h={tags:["field-layout"],args:{required:!0,label:"A label",error:"An error message",hint:"A hint",children:a.createElement("option",null,"An option"),onChange:c()},play:async({canvas:e,step:l})=>{const n=e.getByLabelText("A label*"),r=e.getByTitle("required");await l("Assert accessibility of layout elements",async()=>{t(n).toHaveRole("combobox"),t(n).toHaveAccessibleDescription("A hint"),t(n).toHaveAccessibleErrorMessage("An error message"),t(r).toHaveTextContent("*")}),await l("Assert the error style",async()=>{t(n).toHaveClass("border-rose-800")})}},i={tags:["control-state"],args:{value:"controlled","aria-label":"Controlled Select",children:[a.createElement("option",{value:"another",key:"another"},"Another option"),a.createElement("option",{value:"controlled",key:"controlled"},"Controlled Select")],onChange:c()},play:async({args:e,canvas:l,step:n,userEvent:r})=>{const s=l.getByLabelText("Controlled Select");await n("Assert `value` works",async()=>{t(s).toHaveValue(e.value)}),await n("Try selecting the other option. `onChange` should fire, but the value is controlled, so it shouldn’t change",async()=>{await r.tab(),t(s).toHaveFocus(),await r.selectOptions(s,"another"),t(e.onChange).toHaveBeenCalledOnce(),t(s).toHaveValue(e.value)})}},d={tags:["control-state"],args:{defaultValue:"uncontrolled","aria-label":"Uncontrolled Select",children:[a.createElement("option",{value:"another",key:"another"},"Another option"),a.createElement("option",{value:"uncontrolled",key:"uncontrolled"},"Uncontrolled Select")],onChange:c()},play:async({args:e,canvas:l,step:n,userEvent:r})=>{const s=l.getByLabelText("Uncontrolled Select");await n("Assert `defaultValue` works",async()=>{t(s).toHaveValue(e.defaultValue)}),await n("Selecting a different option should change the value, since it’s uncontrolled",async()=>{await r.selectOptions(s,"another"),t(s).toHaveValue("another"),t(e.onChange).toHaveBeenCalledOnce()}),await n("Reset the value",async()=>{await r.selectOptions(s,"uncontrolled"),t(s).toHaveValue("uncontrolled")})}},m={tags:["control-state"],args:{disabled:!0,"aria-label":"Disabled Select",children:a.createElement("option",{value:"disabled"},"Disabled Select"),onChange:c()},play:async({canvas:e,step:l})=>{await l("Assert disabled state",async()=>{t(e.getByLabelText("Disabled Select")).toBeDisabled()})}},g={tags:["sizer"],args:{sizer:"xs",label:"Xs label",children:a.createElement("option",null,"Xs Select"),onChange:c()},play:async({canvas:e,step:l})=>{await l("Assert the xs sizer style on both the Select & Field",async()=>{t(e.getByLabelText("Xs label")).toHaveClass("text-xs"),t(e.getByText("Xs label")).toHaveClass("text-xs")})}},p={tags:["sizer"],args:{sizer:"sm",label:"Sm label",children:a.createElement("option",null,"Sm Select"),onChange:c()},play:async({canvas:e,step:l})=>{await l("Assert the sm sizer style on both the Select & Field",async()=>{t(e.getByLabelText("Sm label")).toHaveClass("text-sm"),t(e.getByText("Sm label")).toHaveClass("text-sm")})}},u={tags:["sizer"],args:{sizer:"base",label:"Base label",children:a.createElement("option",null,"Base Select"),onChange:c()},play:async({canvas:e,step:l})=>{await l("Assert the base sizer style on both the Select & Field",async()=>{t(e.getByLabelText("Base label")).toHaveClass("text-base"),t(e.getByText("Base label")).toHaveClass("text-base")})}},x={tags:["sizer"],args:{sizer:"lg",label:"Lg label",children:a.createElement("option",null,"Lg Select"),onChange:c()},play:async({canvas:e,step:l})=>{await l("Assert the lg sizer style on both the Select & Field",async()=>{t(e.getByLabelText("Lg label")).toHaveClass("text-lg"),t(e.getByText("Lg label")).toHaveClass("text-lg")})}},b={tags:["sizer"],args:{sizer:"xl",label:"Xl label",children:a.createElement("option",null,"Xl Select"),onChange:c()},play:async({canvas:e,step:l})=>{await l("Assert the xl sizer style on both the Select & Field",async()=>{t(e.getByLabelText("Xl label")).toHaveClass("text-xl"),t(e.getByText("Xl label")).toHaveClass("text-xl")})}},y={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],label:"Responsive label",children:a.createElement("option",null,"Responsive Select"),onChange:c()}},S={tags:["!dev","!test"],render:e=>a.createElement("div",{className:"flex flex-col gap-4"},a.createElement(o,{...i.args}),a.createElement(o,{...d.args}),a.createElement(o,{...m.args}))},f={tags:["!dev","!test"],render:e=>a.createElement(V,{alignBaseline:!0},a.createElement(o,{...g.args}),a.createElement(o,{...p.args}),a.createElement(o,{...u.args}),a.createElement(o,{...x.args}),a.createElement(o,{...b.args}))};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
    const requiredAsterisk = canvas.getByTitle('required');
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
}`,...h.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'xs',
    label: 'Xs label',
    children: <option>Xs Select</option>,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the xs sizer style on both the Select & Field', async () => {
      expect(canvas.getByLabelText('Xs label')).toHaveClass('text-xs');
      expect(canvas.getByText('Xs label')).toHaveClass('text-xs');
    });
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'sm',
    label: 'Sm label',
    children: <option>Sm Select</option>,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the sm sizer style on both the Select & Field', async () => {
      expect(canvas.getByLabelText('Sm label')).toHaveClass('text-sm');
      expect(canvas.getByText('Sm label')).toHaveClass('text-sm');
    });
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'base',
    label: 'Base label',
    children: <option>Base Select</option>,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the base sizer style on both the Select & Field', async () => {
      expect(canvas.getByLabelText('Base label')).toHaveClass('text-base');
      expect(canvas.getByText('Base label')).toHaveClass('text-base');
    });
  }
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'lg',
    label: 'Lg label',
    children: <option>Lg Select</option>,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the lg sizer style on both the Select & Field', async () => {
      expect(canvas.getByLabelText('Lg label')).toHaveClass('text-lg');
      expect(canvas.getByText('Lg label')).toHaveClass('text-lg');
    });
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'xl',
    label: 'Xl label',
    children: <option>Xl Select</option>,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the xl sizer style on both the Select & Field', async () => {
      expect(canvas.getByLabelText('Xl label')).toHaveClass('text-xl');
      expect(canvas.getByText('Xl label')).toHaveClass('text-xl');
    });
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive label',
    children: <option>Responsive Select</option>,
    onChange: fn()
  }
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Select {...Controlled.args} />
      <Select {...Uncontrolled.args} />
      <Select {...Disabled.args} />
    </div>
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper alignBaseline>
      <Select {...Xs.args} />
      <Select {...Sm.args} />
      <Select {...Base.args} />
      <Select {...Lg.args} />
      <Select {...Xl.args} />
    </AllSizersStoryWrapper>
}`,...f.parameters?.docs?.source}}};const $=["FieldLayout","Controlled","Uncontrolled","Disabled","Xs","Sm","Base","Lg","Xl","Responsive","AllControlStates","AllSizers"],Y=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:S,AllSizers:f,Base:u,Controlled:i,Disabled:m,FieldLayout:h,Lg:x,Responsive:y,Sm:p,Uncontrolled:d,Xl:b,Xs:g,__namedExportsOrder:$,default:I},Symbol.toStringTag,{value:"Module"}));export{Y as S,o as a};
