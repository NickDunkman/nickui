import{r as e}from"./iframe-D9ZoAjjD.js";import{F as O}from"./Field-Dwne6UUl.js";import{a as V,S as h,u as q}from"./index-B824ghBp.js";import{r as x}from"./randomId-Dfhrkieu.js";const S={sm:`after:bg-[url("data:image/svg+xml;charset=utf8,%3Csvg%20viewBox='0%200%207%2013'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cpath%20d='M3.85296%200.645978C3.75915%200.551937%203.63178%200.499084%203.49896%200.499084C3.36613%200.499084%203.23876%200.551937%203.14496%200.645978L0.144956%203.64598C0.00157937%203.78899%20-0.0413739%204.00437%200.0361719%204.19144C0.113718%204.37852%200.296447%204.50034%200.498956%204.49998H6.49896C6.70147%204.50034%206.88419%204.37852%206.96174%204.19144C7.03929%204.00437%206.99633%203.78899%206.85296%203.64598L3.85296%200.645978Z'%20fill='black'%20/%3E%3Cpath%20d='M6.49896%208.5H0.498956C0.296447%208.49964%200.113718%208.62146%200.0361719%208.80854C-0.0413739%208.99561%200.00157937%209.21099%200.144956%209.354L3.14496%2012.354C3.23876%2012.448%203.36613%2012.5009%203.49896%2012.5009C3.63178%2012.5009%203.75915%2012.448%203.85296%2012.354L6.85296%209.354C6.99633%209.21099%207.03929%208.99561%206.96174%208.80854C6.88419%208.62146%206.70147%208.49964%206.49896%208.5Z'%20fill='black'%20/%3E%3C/svg%3E")]`,md:`after:bg-[url("data:image/svg+xml;utf8,%3Csvg%20viewBox='0%200%2012%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cpath%20d='M0.853554%205.14645C0.538571%205.46143%200.761654%206%201.20711%206H10.7929C11.2383%206%2011.4614%205.46143%2011.1464%205.14645L6.35355%200.353553C6.15829%200.158291%205.84171%200.158291%205.64645%200.353553L0.853554%205.14645Z'%20fill='black'%20/%3E%3Cpath%20d='M5.64645%2015.6464C5.84171%2015.8417%206.15829%2015.8417%206.35355%2015.6464L11.1464%2010.8536C11.4614%2010.5386%2011.2383%2010%2010.7929%2010H1.20711C0.761654%2010%200.538571%2010.5386%200.853553%2010.8536L5.64645%2015.6464Z'%20fill='black'%20/%3E%3C/svg%3E")]`,lg:`after:bg-[url("data:image/svg+xml;utf8,%3Csvg%20viewBox='0%200%2012%2023'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cpath%20d='M11.4%207.7C11.6472%208.02962%2011.412%208.5%2011%208.5H1C0.587977%208.5%200.352786%208.02962%200.6%207.7L5.6%201.03333C5.8%200.766667%206.2%200.766667%206.4%201.03333L11.4%207.7Z'%20fill='black'%20fill-opacity='0.86'%20/%3E%3Cpath%20d='M11.4%2015.3C11.6472%2014.9704%2011.412%2014.5%2011%2014.5H1C0.587977%2014.5%200.352786%2014.9704%200.6%2015.3L5.6%2021.9667C5.8%2022.2333%206.2%2022.2333%206.4%2021.9667L11.4%2015.3Z'%20fill='black'%20fill-opacity='0.86'%20/%3E%3C/svg%3E")]`},F=V({slots:{select:`
      appearance-none
      w-full
      border-2 rounded-sm
      bg-white
      focus:border-indigo-800 focus:shadow-[0_0_11px] focus:shadow-indigo-300 focus:outline-0 
      disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed disabled:opacity-100
    `,root:`
      relative after:block
      after:absolute after:top-[50%] after:-translate-y-1/2
      after:bg-cover after:bg-no-repeat
      after:pointer-events-none after:select-none
    `},variants:{sizer:{[h.small]:{select:"text-sm py-1.5 pl-2 pr-8",root:`after:w-[7px] after:h-[13px] after:right-3 ${S.sm}`},[h.medium]:{select:"text-base py-2.5 pl-3.5 pr-10",root:`after:w-[12px] after:h-[16px] after:right-3.75 ${S.md}`},[h.large]:{select:"text-lg py-3.5 pl-4.5 pr-12",root:`after:w-[12px] after:h-[23px] after:right-4.5 ${S.lg}`}},hasError:{true:{select:"border-rose-800 focus:border-rose-800 focus:shadow-rose-300"}},isDisabled:{true:{root:"after:opacity-40"}}},defaultVariants:{sizer:h.small,hasError:!1,isDisabled:!1}});function r({className:t,sizer:s,label:o,hint:n,error:l,disabled:f,required:w,id:z,"aria-describedby":B,"aria-errormessage":M,"aria-invalid":E,...k}){const[_]=e.useState(x()),A=z||(o?_:void 0),[D]=e.useState(x()),H=B||(n?D:void 0),[N]=e.useState(x()),L=M||(l&&l!==!0?N:void 0),R=q(s),T=F({sizer:R,hasError:!!l,isDisabled:!!f});return e.createElement(O,{className:t,sizer:s,label:o,controlId:A,hint:n,hintId:H,error:l!==!0?l:void 0,errorId:L,disabled:f,required:w},e.createElement("div",{className:T.root()},e.createElement("select",{...k,id:A,className:T.select(),disabled:f,required:w,"aria-describedby":H,"aria-errormessage":L,"aria-invalid":E!==void 0?E:!!l})))}r.sizer=h;r.__docgenInfo={description:`A form control that allows users to choose an option using a menu
@param props {@link SelectProps} + {@link CommonFieldProps}`,methods:[],displayName:"Select",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLSelectElement>",elements:[{name:"HTMLSelectElement"}]},name:"event"}],return:{name:"void"}}},description:"Called when the value of the Select changes"},value:{required:!1,tsType:{name:"string"},description:`Sets the value of the Select when using it as a
[controlled component](https://react.dev/reference/react-dom/components/select#controlling-a-select-box-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"string"},description:"Sets the value of the Select when using it as an uncontrolled component"},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"union",raw:"Sizer | Sizer[]",elements:[{name:"Sizer"},{name:"Array",elements:[{name:"Sizer"}],raw:"Sizer[]"}]},description:'Changes the size of the field ("small", "medium", "large")'},label:{required:!1,tsType:{name:"ReactNode"},description:"The main label to show above the form control, naming the field"},hint:{required:!1,tsType:{name:"ReactNode"},description:`A hint about what kind of value the control accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}}};const{expect:a,fn:C}=__STORYBOOK_MODULE_TEST__,U={title:"Form controls/Select",component:r},b={args:{required:!0,label:"A label",error:"An error message",hint:"A hint",children:e.createElement("option",null,"An option")},play:async({canvas:t,step:s})=>{const o=t.getByLabelText("A label*"),n=t.getByTitle("required");await s("Assert accessibility of layout elements",async()=>{a(o).toHaveRole("combobox"),a(o).toHaveAccessibleDescription("A hint"),a(o).toHaveAccessibleErrorMessage("An error message"),a(n).toHaveTextContent("*")}),await s("Assert the error style",async()=>{a(o).toHaveClass("border-rose-800")})}},c={args:{value:"controlled",onChange:C(),"aria-label":"Controlled Select",children:[e.createElement("option",{value:"another",key:"another"},"Another option"),e.createElement("option",{value:"controlled",key:"controlled"},"Controlled Select")]},play:async({args:t,canvas:s,step:o,userEvent:n})=>{const l=s.getByLabelText("Controlled Select");await o("Assert `value` works",async()=>{a(l).toHaveValue(t.value)}),await o("Try selecting the other option. `onChange` should fire, but the value is controlled, so it shouldn’t change",async()=>{await n.tab(),a(l).toHaveFocus(),await n.selectOptions(l,"another"),a(t.onChange).toHaveBeenCalledOnce(),a(l).toHaveValue(t.value)})}},i={args:{defaultValue:"uncontrolled","aria-label":"Uncontrolled Select",onChange:C(),children:[e.createElement("option",{value:"another",key:"another"},"Another option"),e.createElement("option",{value:"uncontrolled",key:"uncontrolled"},"Uncontrolled Select")]},play:async({args:t,canvas:s,step:o,userEvent:n})=>{const l=s.getByLabelText("Uncontrolled Select");await o("Assert `defaultValue` works",async()=>{a(l).toHaveValue(t.defaultValue)}),await o("Selecting a different option should change the value, since it’s uncontrolled",async()=>{await n.selectOptions(l,"another"),a(l).toHaveValue("another"),a(t.onChange).toHaveBeenCalledOnce()}),await o("Reset the value",async()=>{await n.selectOptions(l,"uncontrolled"),a(l).toHaveValue("uncontrolled")})}},d={args:{disabled:!0,"aria-label":"Disabled Select",onChange:C(),children:e.createElement("option",{value:"disabled"},"Disabled Select")},play:async({canvas:t,step:s})=>{await s("Assert disabled state",async()=>{a(t.getByLabelText("Disabled Select")).toBeDisabled()})}},p={args:{sizer:r.sizer.small,label:"Small label",children:e.createElement("option",null,"Small Select (default)")},play:async({canvas:t,step:s})=>{await s("Assert the small style on both the Select & Field",async()=>{a(t.getByLabelText("Small label")).toHaveClass("text-sm"),a(t.getByText("Small label")).toHaveClass("text-xs")})}},m={args:{sizer:r.sizer.medium,label:"Medium label",children:e.createElement("option",null,"Medium Select")},play:async({canvas:t,step:s})=>{await s("Assert the medium style on both the Select & Field",async()=>{a(t.getByLabelText("Medium label")).toHaveClass("text-base"),a(t.getByText("Medium label")).toHaveClass("text-sm")})}},u={args:{sizer:r.sizer.large,label:"Large label",children:e.createElement("option",null,"Large Select")},play:async({canvas:t,step:s})=>{await s("Assert the small style on both the Select & Field",async()=>{a(t.getByLabelText("Large label")).toHaveClass("text-lg"),a(t.getByText("Large label")).toHaveClass("text-lg")})}},g={tags:["!test"],args:{sizer:[r.sizer.smMedium,r.sizer.mdLarge],label:"Responsive label",children:e.createElement("option",null,"Responsive Select")}},v={tags:["!dev","!test"],render:t=>e.createElement("div",{className:"flex flex-col gap-4"},e.createElement(r,{...c.args}),e.createElement(r,{...i.args}),e.createElement(r,{...d.args}))},y={tags:["!dev","!test"],render:t=>e.createElement("div",{className:"flex flex-col items-baseline gap-4 sm:flex-row"},e.createElement(r,{...p.args,className:"sm:flex-1"}),e.createElement(r,{...m.args,className:"sm:flex-1"}),e.createElement(r,{...u.args,className:"sm:flex-1"}),e.createElement(r,{...g.args,className:"sm:flex-1"}))};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    required: true,
    label: 'A label',
    error: 'An error message',
    hint: 'A hint',
    children: <option>An option</option>
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
}`,...b.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'controlled',
    onChange: fn(),
    'aria-label': 'Controlled Select',
    children: [<option value="another" key="another">
        Another option
      </option>, <option value="controlled" key="controlled">
        Controlled Select
      </option>]
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'uncontrolled',
    'aria-label': 'Uncontrolled Select',
    onChange: fn(),
    children: [<option value="another" key="another">
        Another option
      </option>, <option value="uncontrolled" key="uncontrolled">
        Uncontrolled Select
      </option>]
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    'aria-label': 'Disabled Select',
    onChange: fn(),
    children: <option value="disabled">Disabled Select</option>
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert disabled state', async () => {
      expect(canvas.getByLabelText('Disabled Select')).toBeDisabled();
    });
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Select.sizer.small,
    label: 'Small label',
    children: <option>Small Select (default)</option>
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the small style on both the Select & Field', async () => {
      expect(canvas.getByLabelText('Small label')).toHaveClass('text-sm');
      expect(canvas.getByText('Small label')).toHaveClass('text-xs');
    });
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Select.sizer.medium,
    label: 'Medium label',
    children: <option>Medium Select</option>
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the medium style on both the Select & Field', async () => {
      expect(canvas.getByLabelText('Medium label')).toHaveClass('text-base');
      expect(canvas.getByText('Medium label')).toHaveClass('text-sm');
    });
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Select.sizer.large,
    label: 'Large label',
    children: <option>Large Select</option>
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the small style on both the Select & Field', async () => {
      expect(canvas.getByLabelText('Large label')).toHaveClass('text-lg');
      expect(canvas.getByText('Large label')).toHaveClass('text-lg');
    });
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  args: {
    sizer: [Select.sizer.smMedium, Select.sizer.mdLarge],
    label: 'Responsive label',
    children: <option>Responsive Select</option>
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Select {...Controlled.args} />
      <Select {...Uncontrolled.args} />
      <Select {...Disabled.args} />
    </div>
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col items-baseline gap-4 sm:flex-row">
      <Select {...Small.args} className="sm:flex-1" />
      <Select {...Medium.args} className="sm:flex-1" />
      <Select {...Large.args} className="sm:flex-1" />
      <Select {...Responsive.args} className="sm:flex-1" />
    </div>
}`,...y.parameters?.docs?.source}}};const I=["FieldLayout","Controlled","Uncontrolled","Disabled","Small","Medium","Large","Responsive","AllControlStates","AllSizes"],K=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:v,AllSizes:y,Controlled:c,Disabled:d,FieldLayout:b,Large:u,Medium:m,Responsive:g,Small:p,Uncontrolled:i,__namedExportsOrder:I,default:U},Symbol.toStringTag,{value:"Module"}));export{K as S,r as a};
