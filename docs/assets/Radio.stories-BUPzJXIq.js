import{r}from"./iframe-DHsgvQHS.js";import{A as R}from"./AllSizersStoryWrapper-DuGUIzJ0.js";import{g as z}from"./getStoryArgTypes-R_C4k6yZ.js";import{R as c}from"./Radio-DsNTVZZl.js";const{expect:s,fn:o}=__STORYBOOK_MODULE_TEST__,w={title:"Form controls/Radio",component:c,argTypes:z({formControl:{isCheckable:!0,isDisableable:!0},isSizerable:!0})};async function f(e,a){await a("Programmatically resetting the radio to unchecked",async()=>{e.checked=!1,s(e).not.toBeChecked()})}const C={tags:["field-layout"],args:{label:"A label",hint:"A hint",onChange:o()},play:async({args:e,canvas:a,step:t,userEvent:B})=>{const n=a.getByLabelText("A label");await t("Assert accessibility of layout elements",async()=>{s(n).toHaveRole("radio"),s(n).toHaveAccessibleDescription("A hint")}),await t("Assert initial unchecked state",async()=>{s(n).not.toBeChecked()}),await t("Toggle the Radio by clicking the label",async()=>{await B.click(a.getByText("A label")),s(n).toBeChecked(),s(e.onChange).toHaveBeenCalledOnce()}),await f(n,t),await t("Toggle the Radio by clicking the hint",async()=>{await B.click(a.getByText("A hint")),s(n).toBeChecked(),s(e.onChange).toHaveBeenCalledTimes(2)}),await f(n,t)}},l={tags:["control-state"],args:{label:"Unchecked Radio",onChange:o()},play:({canvas:e})=>{s(e.getByLabelText("Unchecked Radio")).not.toBeChecked()}},i={tags:["control-state"],args:{label:"Controlled Radio",checked:!0,onChange:o()},play:async({canvas:e,step:a})=>{await a("Assert `checked` prop works",async()=>{s(e.getByLabelText("Controlled Radio")).toBeChecked()})}},d={tags:["control-state"],args:{label:"Uncontrolled Radio",defaultChecked:!0,onChange:o()},play:async({canvas:e,step:a})=>{await a("Assert `defaultChecked` prop works",async()=>{s(e.getByLabelText("Uncontrolled Radio")).toBeChecked()})}},g={tags:["control-state"],args:{label:"Disabled & unchecked Radio",disabled:!0,onChange:o()},play:async({args:e,canvas:a,step:t,userEvent:B})=>{const n=a.getByLabelText("Disabled & unchecked Radio");await t("Assert disabled & unchecked state",async()=>{s(n).toBeDisabled(),s(n).not.toBeChecked(),s(a.getByTestId("indicator")).toHaveClass("bg-gray-100")}),await t("Clicking the Radio should have no effect",async()=>{await B.click(n),s(n).not.toBeChecked(),s(e.onChange).not.toHaveBeenCalled()})}},p={tags:["control-state"],args:{label:"Disabled & checked Radio",disabled:!0,defaultChecked:!0,onChange:o()},play:async({canvas:e,step:a})=>{const t=e.getByLabelText("Disabled & checked Radio");await a("Assert the disabled & checked state",async()=>{s(t).toBeDisabled(),s(t).toBeChecked(),s(e.getByTestId("indicator")).toHaveClass("bg-gray-100")})}},h={tags:["sizer"],args:{sizer:"xs",label:"Xs Radio",defaultChecked:!0,onChange:o()},play:async({canvas:e,step:a})=>{await a("Assert the xs sizer style",async()=>{s(e.getByTestId("indicator")).toHaveClass("size-3.5")})}},y={tags:["sizer"],args:{sizer:"sm",label:"Sm Radio",defaultChecked:!0,onChange:o()},play:async({canvas:e,step:a})=>{await a("Assert the sm sizer style",async()=>{s(e.getByTestId("indicator")).toHaveClass("size-4")})}},u={tags:["sizer"],args:{sizer:"base",label:"Base Radio",defaultChecked:!0,onChange:o()},play:async({canvas:e,step:a})=>{await a("Assert the base sizer style",async()=>{s(e.getByTestId("indicator")).toHaveClass("size-4.75")})}},m={tags:["sizer"],args:{sizer:"lg",label:"Lg Radio",defaultChecked:!0,onChange:o()},play:async({canvas:e,step:a})=>{await a("Assert the lg sizer style",async()=>{s(e.getByTestId("indicator")).toHaveClass("size-5.5")})}},b={tags:["sizer"],args:{sizer:"xl",label:"Xl Radio",defaultChecked:!0,onChange:o()},play:async({canvas:e,step:a})=>{await a("Assert the xl sizer style",async()=>{s(e.getByTestId("indicator")).toHaveClass("size-6")})}},k={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],label:"Responsive Radio",defaultChecked:!0,onChange:o()}},x={tags:["!dev","!test"],render:e=>r.createElement("div",{className:"flex flex-col gap-4 sm:flex-row sm:justify-between"},r.createElement(c,{...l.args}),r.createElement(c,{...i.args}),r.createElement(c,{...d.args}),r.createElement(c,{...g.args}),r.createElement(c,{...p.args}))},v={tags:["!dev","!test"],render:e=>r.createElement(R,{alignBaseline:!0},r.createElement(c,{...h.args}),r.createElement(c,{...y.args}),r.createElement(c,{...u.args}),r.createElement(c,{...m.args}),r.createElement(c,{...b.args}))};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['field-layout'],
  args: {
    label: 'A label',
    hint: 'A hint',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const radio = canvas.getByLabelText('A label');
    await step('Assert accessibility of layout elements', async () => {
      expect(radio).toHaveRole('radio');
      expect(radio).toHaveAccessibleDescription('A hint');
    });
    await step('Assert initial unchecked state', async () => {
      expect(radio).not.toBeChecked();
    });
    await step('Toggle the Radio by clicking the label', async () => {
      await userEvent.click(canvas.getByText('A label'));
      expect(radio).toBeChecked();
      expect(args.onChange).toHaveBeenCalledOnce();
    });
    await uncheck(radio, step);
    await step('Toggle the Radio by clicking the hint', async () => {
      await userEvent.click(canvas.getByText('A hint'));
      expect(radio).toBeChecked();
      expect(args.onChange).toHaveBeenCalledTimes(2);
    });
    await uncheck(radio, step);
  }
}`,...C.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    label: 'Unchecked Radio',
    onChange: fn()
  },
  play: ({
    canvas
  }) => {
    expect(canvas.getByLabelText('Unchecked Radio')).not.toBeChecked();
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    label: 'Controlled Radio',
    checked: true,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert \`checked\` prop works', async () => {
      expect(canvas.getByLabelText('Controlled Radio')).toBeChecked();
    });
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    label: 'Uncontrolled Radio',
    defaultChecked: true,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert \`defaultChecked\` prop works', async () => {
      expect(canvas.getByLabelText('Uncontrolled Radio')).toBeChecked();
    });
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    label: 'Disabled & unchecked Radio',
    disabled: true,
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const radio = canvas.getByLabelText('Disabled & unchecked Radio');
    await step('Assert disabled & unchecked state', async () => {
      expect(radio).toBeDisabled();
      expect(radio).not.toBeChecked();
      expect(canvas.getByTestId('indicator')).toHaveClass('bg-gray-100');
    });
    await step('Clicking the Radio should have no effect', async () => {
      await userEvent.click(radio);
      expect(radio).not.toBeChecked();
      expect(args.onChange).not.toHaveBeenCalled();
    });
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    label: 'Disabled & checked Radio',
    disabled: true,
    defaultChecked: true,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const radio = canvas.getByLabelText('Disabled & checked Radio');
    await step('Assert the disabled & checked state', async () => {
      expect(radio).toBeDisabled();
      expect(radio).toBeChecked();
      expect(canvas.getByTestId('indicator')).toHaveClass('bg-gray-100');
    });
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'xs',
    label: 'Xs Radio',
    defaultChecked: true,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the xs sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-3.5');
    });
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'sm',
    label: 'Sm Radio',
    defaultChecked: true,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the sm sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-4');
    });
  }
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'base',
    label: 'Base Radio',
    defaultChecked: true,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the base sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-4.75');
    });
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'lg',
    label: 'Lg Radio',
    defaultChecked: true,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the lg sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-5.5');
    });
  }
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'xl',
    label: 'Xl Radio',
    defaultChecked: true,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the xl sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-6');
    });
  }
}`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive Radio',
    defaultChecked: true,
    onChange: fn()
  }
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
      <Radio {...unchecked.args} />
      <Radio {...controlled.args} />
      <Radio {...uncontrolled.args} />
      <Radio {...disabledUnchecked.args} />
      <Radio {...disabledChecked.args} />
    </div>
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper alignBaseline>
      <Radio {...xs.args} />
      <Radio {...sm.args} />
      <Radio {...base.args} />
      <Radio {...lg.args} />
      <Radio {...xl.args} />
    </AllSizersStoryWrapper>
}`,...v.parameters?.docs?.source}}};const T=["checkedFieldLayout","unchecked","controlled","uncontrolled","disabledUnchecked","disabledChecked","xs","sm","base","lg","xl","responsive","allControlStates","allSizers"],L=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:T,allControlStates:x,allSizers:v,base:u,checkedFieldLayout:C,controlled:i,default:w,disabledChecked:p,disabledUnchecked:g,lg:m,responsive:k,sm:y,unchecked:l,uncontrolled:d,xl:b,xs:h},Symbol.toStringTag,{value:"Module"}));export{L as s};
