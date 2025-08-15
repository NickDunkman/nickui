import{r as a}from"./iframe-tLceCB4s.js";import{A as _}from"./AllSizersStoryWrapper-BLGIkJkb.js";import{g as D}from"./getStoryArgTypes-C7SE4Oe8.js";import{F as O}from"./Field-Cjc1ukvx.js";import{a as q}from"./fieldA11y-DqObeeAK.js";import{r as F,u as R}from"./index-DVQLTMkD.js";const b=`after:bg-[url("data:image/svg+xml;utf8,%3Csvg%20viewBox='0%200%2012%2023'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cpath%20d='M11.4%207.7C11.6472%208.02962%2011.412%208.5%2011%208.5H1C0.587977%208.5%200.352786%208.02962%200.6%207.7L5.6%201.03333C5.8%200.766667%206.2%200.766667%206.4%201.03333L11.4%207.7Z'%20fill='black'%20fill-opacity='0.86'%20/%3E%3Cpath%20d='M11.4%2015.3C11.6472%2014.9704%2011.412%2014.5%2011%2014.5H1C0.587977%2014.5%200.352786%2014.9704%200.6%2015.3L5.6%2021.9667C5.8%2022.2333%206.2%2022.2333%206.4%2021.9667L11.4%2015.3Z'%20fill='black'%20fill-opacity='0.86'%20/%3E%3C/svg%3E")]`,X=F({slots:{select:`
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
    `},variants:{sizer:{xs:{select:"text-xs py-1.25 pl-2 pr-6",root:`after:w-[6px] after:h-[12px] after:right-2.5 ${b}`},sm:{select:"text-sm py-1.5 pl-2 pr-7",root:`after:w-[6.5px] after:h-[13px] after:right-3 ${b}`},base:{select:"text-base py-2.5 pl-3.5 pr-9",root:`after:w-[9px] after:h-[18px] after:right-3.75 ${b}`},lg:{select:"text-lg py-3.5 pl-4.5 pr-11",root:`after:w-[11.5px] after:h-[23px] after:right-4.5 ${b}`},xl:{select:"text-xl py-5.5 pl-5.5 pr-12.5",root:`after:w-[14px] after:h-[28px] after:right-5 ${b}`}},hasError:{true:{select:"border-rose-800 focus:border-rose-800 focus:shadow-rose-300"}},isDisabled:{true:{root:"after:opacity-40"}}},defaultVariants:{sizer:"base",hasError:!1,isDisabled:!1}});function n({className:t,sizer:l,label:e,hint:r,error:o,disabled:w,required:C,id:T,"aria-label":H,"aria-labelledby":E,"aria-describedby":k,"aria-errormessage":B,"aria-invalid":L,...N}){const A=q({label:e,hint:r,error:o,controlledId:T,controlledAriaLabel:H,controlledAriaLabelledBy:E,controlledAriaDescribedBy:k,controlledAriaErrorMessage:B,controlledAriaInvalid:L}),V=R(l),z=X({sizer:V,hasError:!!o,isDisabled:!!w});return a.createElement(O,{...A.field,className:t,sizer:l,label:e,hint:r,error:o!==!0?o:void 0,required:C,"data-nickui-component":"Select"},a.createElement("div",{className:z.root()},a.createElement("select",{...N,...A.formControl,className:z.select(),disabled:w,required:C})))}n.__docgenInfo={description:`A form control that allows users to choose an option using a menu
@param props {@link SelectProps}`,methods:[],displayName:"Select",props:{sizer:{required:!1,tsType:{name:"union",raw:"SizerType | SizerType[]",elements:[{name:"unknown[number]",raw:"(typeof SIZERS)[number]"},{name:"Array",elements:[{name:"unknown[number]",raw:"(typeof SIZERS)[number]"}],raw:"SizerType[]"}]},description:`Changes the size of the component. A sizer string, or an array of sizer
strings for responsive sizing.`},label:{required:!1,tsType:{name:"DescriptorType"},description:"The main label to show above the form control(s), naming the field"},hint:{required:!1,tsType:{name:"DescriptorType"},description:`A hint about what kind of value the field accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"DescriptorType"},description:"Error message to show beneath the form control(s), or just `true` to\ntrigger the error style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the component"},value:{required:!1,tsType:{name:"ValueType"},description:`Sets the value of the component when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"ValueType"},description:"Sets the value of the component when using it as an uncontrolled component"},name:{required:!1,tsType:{name:"string"},description:"The name of the field"}}};const{expect:s,fn:c}=__STORYBOOK_MODULE_TEST__,U={title:"Form controls/Select",component:n,argTypes:D({formControl:{isDisableable:!0,valueType:"string"},isSizerable:!0})},f={tags:["field-layout"],args:{required:!0,label:"A label",error:"An error message",hint:"A hint",children:a.createElement("option",null,"An option"),onChange:c()},play:async({canvas:t,step:l})=>{const e=t.getByLabelText("A label*"),r=t.getByTitle("(required)");await l("Assert accessibility of layout elements",async()=>{s(e).toHaveRole("combobox"),s(e).toHaveAccessibleDescription("A hint"),s(e).toHaveAccessibleErrorMessage("An error message"),s(r).toHaveTextContent("*")}),await l("Assert the error style",async()=>{s(e).toHaveClass("border-rose-800")})}},i={tags:["control-state"],args:{value:"controlled","aria-label":"Controlled Select",children:[a.createElement("option",{value:"another",key:"another"},"Another option"),a.createElement("option",{value:"controlled",key:"controlled"},"Controlled Select")],onChange:c()},play:async({args:t,canvas:l,step:e,userEvent:r})=>{const o=l.getByLabelText("Controlled Select");await e("Assert `value` works",async()=>{s(o).toHaveValue(t.value)}),await e("Try selecting the other option. `onChange` should fire, but the value is controlled, so it shouldn’t change",async()=>{await r.tab(),s(o).toHaveFocus(),await r.selectOptions(o,"another"),s(t.onChange).toHaveBeenCalledOnce(),s(o).toHaveValue(t.value)})}},p={tags:["control-state"],args:{defaultValue:"uncontrolled","aria-label":"Uncontrolled Select",children:[a.createElement("option",{value:"another",key:"another"},"Another option"),a.createElement("option",{value:"uncontrolled",key:"uncontrolled"},"Uncontrolled Select")],onChange:c()},play:async({args:t,canvas:l,step:e,userEvent:r})=>{const o=l.getByLabelText("Uncontrolled Select");await e("Assert `defaultValue` works",async()=>{s(o).toHaveValue(t.defaultValue)}),await e("Selecting a different option should change the value, since it’s uncontrolled",async()=>{await r.selectOptions(o,"another"),s(o).toHaveValue("another"),s(t.onChange).toHaveBeenCalledOnce()}),await e("Reset the value",async()=>{await r.selectOptions(o,"uncontrolled"),s(o).toHaveValue("uncontrolled")})}},d={tags:["control-state"],args:{disabled:!0,"aria-label":"Disabled Select",children:a.createElement("option",{value:"disabled"},"Disabled Select"),onChange:c()},play:async({canvas:t,step:l})=>{await l("Assert disabled state",async()=>{s(t.getByLabelText("Disabled Select")).toBeDisabled()})}},u={tags:["sizer"],args:{"aria-label":"Xs Select",sizer:"xs",children:a.createElement("option",null,"Xs Select"),onChange:c()},play:async({canvas:t,step:l})=>{const e=t.getByLabelText("Xs Select"),r=e.closest('[data-nickui-component="Select"');await l("Assert the xs sizer style on both the Select & Field",async()=>{s(e).toHaveClass("text-xs"),s(r).toHaveAttribute("data-nickui-sizer","xs")})}},m={tags:["sizer"],args:{"aria-label":"Sm Select",sizer:"sm",children:a.createElement("option",null,"Sm Select"),onChange:c()},play:async({canvas:t,step:l})=>{const e=t.getByLabelText("Sm Select"),r=e.closest('[data-nickui-component="Select"');await l("Assert the sm sizer style on both the Select & Field",async()=>{s(e).toHaveClass("text-sm"),s(r).toHaveAttribute("data-nickui-sizer","sm")})}},g={tags:["sizer"],args:{"aria-label":"Base Select",sizer:"base",children:a.createElement("option",null,"Base Select"),onChange:c()},play:async({canvas:t,step:l})=>{const e=t.getByLabelText("Base Select"),r=e.closest('[data-nickui-component="Select"');await l("Assert the base sizer style on both the Select & Field",async()=>{s(e).toHaveClass("text-base"),s(r).toHaveAttribute("data-nickui-sizer","base")})}},h={tags:["sizer"],args:{"aria-label":"Lg Select",sizer:"lg",children:a.createElement("option",null,"Lg Select"),onChange:c()},play:async({canvas:t,step:l})=>{const e=t.getByLabelText("Lg Select"),r=e.closest('[data-nickui-component="Select"');await l("Assert the lg sizer style on both the Select & Field",async()=>{s(e).toHaveClass("text-lg"),s(r).toHaveAttribute("data-nickui-sizer","lg")})}},y={tags:["sizer"],args:{"aria-label":"Xl Select",sizer:"xl",children:a.createElement("option",null,"Xl Select"),onChange:c()},play:async({canvas:t,step:l})=>{const e=t.getByLabelText("Xl Select"),r=e.closest('[data-nickui-component="Select"');await l("Assert the xl sizer style on both the Select & Field",async()=>{s(e).toHaveClass("text-xl"),s(r).toHaveAttribute("data-nickui-sizer","xl")})}},x={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],label:"Responsive label",children:a.createElement("option",null,"Responsive Select"),onChange:c()}},S={tags:["!dev","!test"],render:t=>a.createElement("div",{className:"flex flex-col gap-4 sm:flex-row"},a.createElement(n,{...i.args,className:"sm:flex-1"}),a.createElement(n,{...p.args,className:"sm:flex-1"}),a.createElement(n,{...d.args,className:"sm:flex-1"}))},v={tags:["!dev","!test"],render:t=>a.createElement(_,{alignBaseline:!0},a.createElement(n,{...u.args,className:"sm:flex-12"}),a.createElement(n,{...m.args,className:"sm:flex-14"}),a.createElement(n,{...g.args,className:"sm:flex-16"}),a.createElement(n,{...h.args,className:"sm:flex-18"}),a.createElement(n,{...y.args,className:"sm:flex-20"}))};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive label',
    children: <option>Responsive Select</option>,
    onChange: fn()
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row">
      <Select {...controlled.args} className="sm:flex-1" />
      <Select {...uncontrolled.args} className="sm:flex-1" />
      <Select {...disabled.args} className="sm:flex-1" />
    </div>
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper alignBaseline>
      <Select {...xs.args} className="sm:flex-12" />
      <Select {...sm.args} className="sm:flex-14" />
      <Select {...base.args} className="sm:flex-16" />
      <Select {...lg.args} className="sm:flex-18" />
      <Select {...xl.args} className="sm:flex-20" />
    </AllSizersStoryWrapper>
}`,...v.parameters?.docs?.source}}};const M=["fieldLayout","controlled","uncontrolled","disabled","xs","sm","base","lg","xl","responsive","allControlStates","allSizers"],K=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:M,allControlStates:S,allSizers:v,base:g,controlled:i,default:U,disabled:d,fieldLayout:f,lg:h,responsive:x,sm:m,uncontrolled:p,xl:y,xs:u},Symbol.toStringTag,{value:"Module"}));export{n as S,K as s};
