import{r as l}from"./iframe-CJWqI_sH.js";import{S as c}from"./Switch-BfB_7ntw.js";const{expect:e,fn:o}=__STORYBOOK_MODULE_TEST__,S={title:"Form controls/Switch",component:c},m={args:{label:"A label",hint:"A hint",onChange:o()},play:async({args:t,canvas:s,step:n,userEvent:r})=>{const a=s.getByLabelText("A label");await n("Assert accessibility of layout elements",async()=>{e(a).toHaveRole("checkbox"),e(a).toHaveAccessibleDescription("A hint")}),await n("Assert initial unchecked state",async()=>{e(a).not.toBeChecked()}),await n("Toggle the Switch by clicking the label",async()=>{await r.click(s.getByText("A label")),e(a).toBeChecked(),e(t.onChange).toHaveBeenCalledOnce()}),await n("Toggle the Switch by clicking the hint",async()=>{await r.click(s.getByText("A hint")),e(a).not.toBeChecked(),e(t.onChange).toHaveBeenCalledTimes(2)})}},i={args:{label:"Unchecked Switch",onChange:o()},play:async({canvas:t})=>{e(t.getByLabelText("Unchecked Switch")).not.toBeChecked()}},h={args:{label:"Controlled Switch",checked:!0,onChange:o()},play:async({args:t,canvas:s,step:n,userEvent:r})=>{const a=s.getByLabelText("Controlled Switch");await n("Assert `checked` prop works",()=>{e(a).toBeChecked()}),await n("Try unchecking the Switch. `onChange` should fire, but the checked state is controlled, so it shouldn’t change",async()=>{await r.click(a),e(t.onChange).toHaveBeenCalled(),e(a).toBeChecked()})}},d={args:{label:"Uncontrolled Switch",defaultChecked:!0,onChange:o()},play:async({args:t,canvas:s,step:n,userEvent:r})=>{const a=s.getByLabelText("Uncontrolled Switch");await n("Assert `defaultChecked` prop works",()=>{e(a).toBeChecked()}),await n("Clicking the Switch should toggle the checked state, since it’s uncontrolled",async()=>{await r.click(a),e(t.onChange).toHaveBeenCalled(),e(a).not.toBeChecked()}),await n("Reset to checked state",async()=>{await r.click(a),e(a).toBeChecked()})}},g={args:{label:"Disabled & unchecked Switch",disabled:!0,onChange:o()},play:async({args:t,canvas:s,step:n,userEvent:r})=>{const a=s.getByLabelText("Disabled & unchecked Switch");await n("Assert disabled & unchecked state",async()=>{e(a).toBeDisabled(),e(a).not.toBeChecked(),e(s.getByTestId("indicator")).toHaveClass("bg-gray-300")}),await n("Clicking the Switch should have no effect",async()=>{await r.click(a),e(a).not.toBeChecked(),e(t.onChange).not.toHaveBeenCalled()})}},w={args:{label:"Disabled & checked Switch",disabled:!0,defaultChecked:!0,onChange:o()},play:async({args:t,canvas:s,step:n,userEvent:r})=>{const a=s.getByLabelText("Disabled & checked Switch");await n("Assert disabled & checked state",async()=>{e(a).toBeDisabled(),e(a).toBeChecked(),e(s.getByTestId("indicator")).toHaveClass("bg-gray-300")}),await n("Clicking the Switch should have no effect",async()=>{await r.click(a),e(a).toBeChecked(),e(t.onChange).not.toHaveBeenCalled()})}},p={args:{sizer:c.sizer.small,label:"Small Switch",defaultChecked:!0,onChange:o()},play:async({canvas:t,step:s})=>{await s("Assert the the small sizer style",async()=>{e(t.getByTestId("indicator")).toHaveClass("h-5")})}},y={args:{sizer:c.sizer.base,label:"Base Switch",defaultChecked:!0,onChange:o()},play:async({canvas:t,step:s})=>{await s("Assert the the base sizer style",async()=>{e(t.getByTestId("indicator")).toHaveClass("h-6")})}},C={args:{sizer:c.sizer.large,label:"Large Switch",defaultChecked:!0,onChange:o()},play:async({canvas:t,step:s})=>{await s("Assert the the large sizer style",async()=>{e(t.getByTestId("indicator")).toHaveClass("h-7")})}},k={tags:["!test"],args:{sizer:[c.sizer.small,c.sizer.smBase,c.sizer.mdLarge],label:"Responsive Switch",defaultChecked:!0}},u={tags:["!dev","!test"],render:t=>l.createElement("div",{className:"flex flex-col gap-4"},l.createElement(c,{...i.args}),l.createElement(c,{...h.args}),l.createElement(c,{...d.args}),l.createElement(c,{...g.args}),l.createElement(c,{...w.args}))},b={tags:["!dev","!test"],render:t=>l.createElement("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-baseline"},l.createElement(c,{...p.args,className:"sm:flex-1"}),l.createElement(c,{...y.args,className:"sm:flex-1"}),l.createElement(c,{...C.args,className:"sm:flex-1"}),l.createElement(c,{...k.args,className:"sm:flex-1"}))};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Unchecked Switch',
    onChange: fn()
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByLabelText('Unchecked Switch')).not.toBeChecked();
  }
}`,...i.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Switch.sizer.small,
    label: 'Small Switch',
    defaultChecked: true,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the the small sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('h-5');
    });
  }
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Switch.sizer.base,
    label: 'Base Switch',
    defaultChecked: true,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the the base sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('h-6');
    });
  }
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Switch.sizer.large,
    label: 'Large Switch',
    defaultChecked: true,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the the large sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('h-7');
    });
  }
}`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  args: {
    sizer: [Switch.sizer.small, Switch.sizer.smBase, Switch.sizer.mdLarge],
    label: 'Responsive Switch',
    defaultChecked: true
  }
}`,...k.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Switch {...Unchecked.args} />
      <Switch {...Controlled.args} />
      <Switch {...Uncontrolled.args} />
      <Switch {...DisabledUnchecked.args} />
      <Switch {...DisabledChecked.args} />
    </div>
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline">
      <Switch {...Small.args} className="sm:flex-1" />
      <Switch {...Base.args} className="sm:flex-1" />
      <Switch {...Large.args} className="sm:flex-1" />
      <Switch {...Responsive.args} className="sm:flex-1" />
    </div>
}`,...b.parameters?.docs?.source}}};const B=["CheckedFieldLayout","Unchecked","Controlled","Uncontrolled","DisabledUnchecked","DisabledChecked","Small","Base","Large","Responsive","AllControlStates","AllSizes"],f=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:u,AllSizes:b,Base:y,CheckedFieldLayout:m,Controlled:h,DisabledChecked:w,DisabledUnchecked:g,Large:C,Responsive:k,Small:p,Unchecked:i,Uncontrolled:d,__namedExportsOrder:B,default:S},Symbol.toStringTag,{value:"Module"}));export{f as S};
