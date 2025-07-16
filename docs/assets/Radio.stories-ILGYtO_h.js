import{r}from"./iframe-B29wKBek.js";import{R as t}from"./Radio-D3iELwhW.js";const{expect:a,fn:o}=__STORYBOOK_MODULE_TEST__,f={title:"Form controls/Radio",component:t};async function x(e,s){await s("Programmatically resetting the radio to unchecked",async()=>{e.checked=!1,a(e).not.toBeChecked()})}const C={args:{label:"A label",hint:"A hint",onChange:o()},play:async({args:e,canvas:s,step:n,userEvent:v})=>{const c=s.getByLabelText("A label");await n("Assert accessibility of layout elements",async()=>{a(c).toHaveRole("radio"),a(c).toHaveAccessibleDescription("A hint")}),await n("Assert initial unchecked state",async()=>{a(c).not.toBeChecked()}),await n("Toggle the Radio by clicking the label",async()=>{await v.click(s.getByText("A label")),a(c).toBeChecked(),a(e.onChange).toHaveBeenCalledOnce()}),await x(c,n),await n("Toggle the Radio by clicking the hint",async()=>{await v.click(s.getByText("A hint")),a(c).toBeChecked(),a(e.onChange).toHaveBeenCalledTimes(2)}),await x(c,n)}},l={args:{label:"Unchecked Radio",onChange:o()},play:({canvas:e})=>{a(e.getByLabelText("Unchecked Radio")).not.toBeChecked()}},d={args:{label:"Controlled Radio",checked:!0,onChange:o()},play:async({canvas:e,step:s})=>{await s("Assert `checked` prop works",async()=>{a(e.getByLabelText("Controlled Radio")).toBeChecked()})}},i={args:{label:"Uncontrolled Radio",defaultChecked:!0,onChange:o()},play:async({canvas:e,step:s})=>{await s("Assert `defaultChecked` prop works",async()=>{a(e.getByLabelText("Uncontrolled Radio")).toBeChecked()})}},g={args:{label:"Disabled & unchecked Radio",disabled:!0,onChange:o()},play:async({args:e,canvas:s,step:n,userEvent:v})=>{const c=s.getByLabelText("Disabled & unchecked Radio");await n("Assert disabled & unchecked state",async()=>{a(c).toBeDisabled(),a(c).not.toBeChecked(),a(s.getByTestId("indicator")).toHaveClass("bg-gray-100")}),await n("Clicking the Radio should have no effect",async()=>{await v.click(c),a(c).not.toBeChecked(),a(e.onChange).not.toHaveBeenCalled()})}},p={args:{label:"Disabled & checked Radio",disabled:!0,defaultChecked:!0,onChange:o()},play:async({canvas:e,step:s})=>{const n=e.getByLabelText("Disabled & checked Radio");await s("Assert the disabled & checked state",async()=>{a(n).toBeDisabled(),a(n).toBeChecked(),a(e.getByTestId("indicator")).toHaveClass("bg-gray-100")})}},h={args:{label:"Small Radio (default)",defaultChecked:!0,onChange:o()},play:async({canvas:e,step:s})=>{await s("Assert the small style",async()=>{a(e.getByTestId("indicator")).toHaveClass("size-3.5")})}},m={args:{sizer:t.sizer.medium,label:"Medium Radio",defaultChecked:!0,onChange:o()},play:async({canvas:e,step:s})=>{await s("Assert the medium style",async()=>{a(e.getByTestId("indicator")).toHaveClass("size-4")})}},y={args:{sizer:t.sizer.large,label:"Large Radio",defaultChecked:!0,onChange:o()},play:async({canvas:e,step:s})=>{await s("Assert the large style",async()=>{a(e.getByTestId("indicator")).toHaveClass("size-5")})}},u={tags:["!test"],args:{sizer:[t.sizer.smMedium,t.sizer.mdLarge],label:"Responsive Radio",defaultChecked:!0,onChange:o()}},k={tags:["!dev","!test"],render:e=>r.createElement("div",{className:"flex flex-col gap-4"},r.createElement(t,{...l.args}),r.createElement(t,{...d.args}),r.createElement(t,{...i.args}),r.createElement(t,{...g.args}),r.createElement(t,{...p.args}))},b={tags:["!dev","!test"],render:e=>r.createElement("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-baseline"},r.createElement(t,{...h.args,className:"sm:flex-1"}),r.createElement(t,{...m.args,className:"sm:flex-1"}),r.createElement(t,{...y.args,className:"sm:flex-1"}),r.createElement(t,{...u.args,className:"sm:flex-1"}))};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
  args: {
    label: 'Unchecked Radio',
    onChange: fn()
  },
  play: ({
    canvas
  }) => {
    expect(canvas.getByLabelText('Unchecked Radio')).not.toBeChecked();
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
  args: {
    label: 'Small Radio (default)',
    defaultChecked: true,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the small style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-3.5');
    });
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Radio.sizer.medium,
    label: 'Medium Radio',
    defaultChecked: true,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the medium style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-4');
    });
  }
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Radio.sizer.large,
    label: 'Large Radio',
    defaultChecked: true,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the large style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-5');
    });
  }
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  args: {
    sizer: [Radio.sizer.smMedium, Radio.sizer.mdLarge],
    label: 'Responsive Radio',
    defaultChecked: true,
    onChange: fn()
  }
}`,...u.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Radio {...Unchecked.args} />
      <Radio {...Controlled.args} />
      <Radio {...Uncontrolled.args} />
      <Radio {...DisabledUnchecked.args} />
      <Radio {...DisabledChecked.args} />
    </div>
}`,...k.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline">
      <Radio {...Small.args} className="sm:flex-1" />
      <Radio {...Medium.args} className="sm:flex-1" />
      <Radio {...Large.args} className="sm:flex-1" />
      <Radio {...Responsive.args} className="sm:flex-1" />
    </div>
}`,...b.parameters?.docs?.source}}};const R=["CheckedFieldLayout","Unchecked","Controlled","Uncontrolled","DisabledUnchecked","DisabledChecked","Small","Medium","Large","Responsive","AllControlStates","AllSizes"],A=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:k,AllSizes:b,CheckedFieldLayout:C,Controlled:d,DisabledChecked:p,DisabledUnchecked:g,Large:y,Medium:m,Responsive:u,Small:h,Unchecked:l,Uncontrolled:i,__namedExportsOrder:R,default:f},Symbol.toStringTag,{value:"Module"}));export{A as S};
