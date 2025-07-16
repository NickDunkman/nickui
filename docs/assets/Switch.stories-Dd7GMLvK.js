import{r}from"./iframe-fqey7XDt.js";import{S as n}from"./Switch-gI19phk4.js";const{expect:e,fn:b}=__STORYBOOK_MODULE_TEST__,S={title:"Form controls/Switch",component:n},y={args:{label:"A label",hint:"A hint",onChange:b()},play:async({args:a,canvas:s,step:c,userEvent:l})=>{const t=s.getByLabelText("A label");await c("Assert accessibility of layout elements",async()=>{e(t).toHaveRole("checkbox"),e(t).toHaveAccessibleDescription("A hint")}),await c("Assert initial unchecked state",async()=>{e(t).not.toBeChecked()}),await c("Toggle the Switch by clicking the label",async()=>{await l.click(s.getByText("A label")),e(t).toBeChecked(),e(a.onChange).toHaveBeenCalledOnce()}),await c("Toggle the Switch by clicking the hint",async()=>{await l.click(s.getByText("A hint")),e(t).not.toBeChecked(),e(a.onChange).toHaveBeenCalledTimes(2)})}},o={args:{label:"Unchecked Switch"},play:async({canvas:a})=>{e(a.getByLabelText("Unchecked Switch")).not.toBeChecked()}},i={args:{label:"Controlled Switch",checked:!0,onChange:b()},play:async({args:a,canvas:s,step:c,userEvent:l})=>{const t=s.getByLabelText("Controlled Switch");await c("Assert `checked` prop works",()=>{e(t).toBeChecked()}),await c("Try unchecking the Switch. `onChange` should fire, but the checked state is controlled, so it shouldn’t change",async()=>{await l.click(t),e(a.onChange).toHaveBeenCalled(),e(t).toBeChecked()})}},h={args:{label:"Uncontrolled Switch",defaultChecked:!0,onChange:b()},play:async({args:a,canvas:s,step:c,userEvent:l})=>{const t=s.getByLabelText("Uncontrolled Switch");await c("Assert `defaultChecked` prop works",()=>{e(t).toBeChecked()}),await c("Clicking the Switch should toggle the checked state, since it’s uncontrolled",async()=>{await l.click(t),e(a.onChange).toHaveBeenCalled(),e(t).not.toBeChecked()}),await c("Reset to checked state",async()=>{await l.click(t),e(t).toBeChecked()})}},d={args:{label:"Disabled & unchecked Switch",disabled:!0,onChange:b()},play:async({args:a,canvas:s,step:c,userEvent:l})=>{const t=s.getByLabelText("Disabled & unchecked Switch");await c("Assert disabled & unchecked state",async()=>{e(t).toBeDisabled(),e(t).not.toBeChecked(),e(s.getByTestId("indicator")).toHaveClass("bg-gray-300")}),await c("Clicking the Switch should have no effect",async()=>{await l.click(t),e(t).not.toBeChecked(),e(a.onChange).not.toHaveBeenCalled()})}},g={args:{label:"Disabled & checked Switch",disabled:!0,defaultChecked:!0,onChange:b()},play:async({args:a,canvas:s,step:c,userEvent:l})=>{const t=s.getByLabelText("Disabled & checked Switch");await c("Assert disabled & checked state",async()=>{e(t).toBeDisabled(),e(t).toBeChecked(),e(s.getByTestId("indicator")).toHaveClass("bg-gray-300")}),await c("Clicking the Switch should have no effect",async()=>{await l.click(t),e(t).toBeChecked(),e(a.onChange).not.toHaveBeenCalled()})}},w={args:{label:"Small Switch (default)",defaultChecked:!0},play:async({canvas:a,step:s})=>{await s("Assert the the small style",async()=>{e(a.getByTestId("indicator")).toHaveClass("h-5")})}},p={args:{sizer:n.sizer.medium,label:"Medium Switch",defaultChecked:!0},play:async({canvas:a,step:s})=>{await s("Assert the the medium style",async()=>{e(a.getByTestId("indicator")).toHaveClass("h-6")})}},u={args:{sizer:n.sizer.large,label:"Large Switch",defaultChecked:!0},play:async({canvas:a,step:s})=>{await s("Assert the the large style",async()=>{e(a.getByTestId("indicator")).toHaveClass("h-7")})}},m={tags:["!test"],args:{sizer:[n.sizer.smMedium,n.sizer.mdLarge],label:"Responsive Switch",defaultChecked:!0}},k={tags:["!dev","!test"],render:a=>r.createElement("div",{className:"flex flex-col gap-4"},r.createElement(n,{...o.args}),r.createElement(n,{...i.args}),r.createElement(n,{...h.args}),r.createElement(n,{...d.args}),r.createElement(n,{...g.args}))},C={tags:["!dev","!test"],render:a=>r.createElement("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-baseline"},r.createElement(n,{...w.args,className:"sm:flex-1"}),r.createElement(n,{...p.args,className:"sm:flex-1"}),r.createElement(n,{...u.args,className:"sm:flex-1"}),r.createElement(n,{...m.args,className:"sm:flex-1"}))};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
    const swtch = canvas.getByLabelText('A label');
    await step('Assert accessibility of layout elements', async () => {
      expect(swtch).toHaveRole('checkbox');
      expect(swtch).toHaveAccessibleDescription('A hint');
    });
    await step('Assert initial unchecked state', async () => {
      expect(swtch).not.toBeChecked();
    });
    await step('Toggle the Switch by clicking the label', async () => {
      await userEvent.click(canvas.getByText('A label'));
      expect(swtch).toBeChecked();
      expect(args.onChange).toHaveBeenCalledOnce();
    });
    await step('Toggle the Switch by clicking the hint', async () => {
      await userEvent.click(canvas.getByText('A hint'));
      expect(swtch).not.toBeChecked();
      expect(args.onChange).toHaveBeenCalledTimes(2);
    });
  }
}`,...y.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Unchecked Switch'
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByLabelText('Unchecked Switch')).not.toBeChecked();
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Controlled Switch',
    checked: true,
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const swtch = canvas.getByLabelText('Controlled Switch');
    await step('Assert \`checked\` prop works', () => {
      expect(swtch).toBeChecked();
    });
    await step('Try unchecking the Switch. \`onChange\` should fire, but the checked state is controlled, so it shouldn’t change', async () => {
      await userEvent.click(swtch);
      expect(args.onChange).toHaveBeenCalled();
      expect(swtch).toBeChecked();
    });
  }
}`,...i.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Uncontrolled Switch',
    defaultChecked: true,
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const swtch = canvas.getByLabelText('Uncontrolled Switch');
    await step('Assert \`defaultChecked\` prop works', () => {
      expect(swtch).toBeChecked();
    });

    // The Switch is uncontrolled, so clicking should cause the checked
    // state to change.
    await step('Clicking the Switch should toggle the checked state, since it’s uncontrolled', async () => {
      await userEvent.click(swtch);
      expect(args.onChange).toHaveBeenCalled();
      expect(swtch).not.toBeChecked();
    });
    await step('Reset to checked state', async () => {
      await userEvent.click(swtch);
      expect(swtch).toBeChecked();
    });
  }
}`,...h.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled & unchecked Switch',
    disabled: true,
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const swtch = canvas.getByLabelText('Disabled & unchecked Switch');
    await step('Assert disabled & unchecked state', async () => {
      expect(swtch).toBeDisabled();
      expect(swtch).not.toBeChecked();
      expect(canvas.getByTestId('indicator')).toHaveClass('bg-gray-300');
    });
    await step('Clicking the Switch should have no effect', async () => {
      await userEvent.click(swtch);
      expect(swtch).not.toBeChecked();
      expect(args.onChange).not.toHaveBeenCalled();
    });
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled & checked Switch',
    disabled: true,
    defaultChecked: true,
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const swtch = canvas.getByLabelText('Disabled & checked Switch');
    await step('Assert disabled & checked state', async () => {
      expect(swtch).toBeDisabled();
      expect(swtch).toBeChecked();
      expect(canvas.getByTestId('indicator')).toHaveClass('bg-gray-300');
    });
    await step('Clicking the Switch should have no effect', async () => {
      await userEvent.click(swtch);
      expect(swtch).toBeChecked();
      expect(args.onChange).not.toHaveBeenCalled();
    });
  }
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small Switch (default)',
    defaultChecked: true
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the the small style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('h-5');
    });
  }
}`,...w.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Switch.sizer.medium,
    label: 'Medium Switch',
    defaultChecked: true
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the the medium style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('h-6');
    });
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Switch.sizer.large,
    label: 'Large Switch',
    defaultChecked: true
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the the large style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('h-7');
    });
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  args: {
    sizer: [Switch.sizer.smMedium, Switch.sizer.mdLarge],
    label: 'Responsive Switch',
    defaultChecked: true
  }
}`,...m.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Switch {...Unchecked.args} />
      <Switch {...Controlled.args} />
      <Switch {...Uncontrolled.args} />
      <Switch {...DisabledUnchecked.args} />
      <Switch {...DisabledChecked.args} />
    </div>
}`,...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline">
      <Switch {...Small.args} className="sm:flex-1" />
      <Switch {...Medium.args} className="sm:flex-1" />
      <Switch {...Large.args} className="sm:flex-1" />
      <Switch {...Responsive.args} className="sm:flex-1" />
    </div>
}`,...C.parameters?.docs?.source}}};const v=["CheckedFieldLayout","Unchecked","Controlled","Uncontrolled","DisabledUnchecked","DisabledChecked","Small","Medium","Large","Responsive","AllControlStates","AllSizes"],f=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:k,AllSizes:C,CheckedFieldLayout:y,Controlled:i,DisabledChecked:g,DisabledUnchecked:d,Large:u,Medium:p,Responsive:m,Small:w,Unchecked:o,Uncontrolled:h,__namedExportsOrder:v,default:S},Symbol.toStringTag,{value:"Module"}));export{f as S};
