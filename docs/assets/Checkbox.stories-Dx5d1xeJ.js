import{r as l}from"./iframe-7jkboxGE.js";import{C as s}from"./Checkbox-DHAYKB9Q.js";const{expect:e,fn:m}=__STORYBOOK_MODULE_TEST__,y={title:"Form controls/Checkbox",component:s},x={args:{label:"A label",hint:"A hint",onChange:m()},play:async({args:c,canvas:t,step:n,userEvent:o})=>{const a=t.getByLabelText("A label");await n("Assert accessibility of layout elements",async()=>{e(a).toHaveRole("checkbox"),e(a).toHaveAccessibleDescription("A hint")}),await n("Assert initial unchecked state",async()=>{e(a).not.toBeChecked()}),await n("Toggle the Checkbox by clicking the label",async()=>{await o.click(a),e(a).toBeChecked(),e(c.onChange).toHaveBeenCalledOnce()}),await n("Toggle the Checkbox by clicking the hint",async()=>{await o.click(t.getByText("A hint")),e(a).not.toBeChecked(),e(c.onChange).toHaveBeenCalledTimes(2)})}},r={args:{label:"Unchecked Checkbox"},play:({canvas:c})=>{e(c.getByLabelText("Unchecked Checkbox")).not.toBeChecked()}},d={args:{label:"Controlled Checkbox",checked:!0,onChange:m()},play:async({args:c,canvas:t,step:n,userEvent:o})=>{const a=t.getByLabelText("Controlled Checkbox");await n("Assert `checked` prop works",()=>{e(a).toBeChecked()}),await n("Try unchecking the Checkbox. `onChange` should fire, but the checked state is controlled, so it shouldn’t change",async()=>{await o.click(a),e(c.onChange).toHaveBeenCalled(),e(a).toBeChecked()})}},h={args:{label:"Uncontrolled Checkbox",defaultChecked:!0,onChange:m()},play:async({args:c,canvas:t,step:n,userEvent:o})=>{const a=t.getByLabelText("Uncontrolled Checkbox");await n("Assert `defaultChecked` prop works",()=>{e(a).toBeChecked()}),await n("Clicking the Checkbox should toggle the checked state, since it’s uncontrolled",async()=>{await o.click(a),e(c.onChange).toHaveBeenCalled(),e(a).not.toBeChecked()}),await n("Reset to checked state",async()=>{await o.click(a),e(a).toBeChecked()})}},i={args:{label:"Disabled & unchecked Checkbox",disabled:!0,onChange:m()},play:async({args:c,canvas:t,step:n,userEvent:o})=>{const a=t.getByLabelText("Disabled & unchecked Checkbox");await n("Assert disabled & unchecked state",async()=>{e(a).toBeDisabled(),e(a).not.toBeChecked(),e(t.getByTestId("indicator")).toHaveClass("bg-gray-100")}),await n("Clicking the Checkbox should have no effect",async()=>{await o.click(a),e(a).not.toBeChecked(),e(c.onChange).not.toHaveBeenCalled()})}},k={args:{label:"Disabled & checked Checkbox",disabled:!0,defaultChecked:!0,onChange:m()},play:async({args:c,canvas:t,step:n,userEvent:o})=>{const a=t.getByLabelText("Disabled & checked Checkbox");await n("Assert disabled & checked state",async()=>{e(a).toBeDisabled(),e(a).toBeChecked(),e(t.getByTestId("indicator")).toHaveClass("bg-gray-100")}),await n("Clicking the Checkbox should have no effect",async()=>{await o.click(a),e(a).toBeChecked(),e(c.onChange).not.toHaveBeenCalled()})}},p={tags:["!dev","!test"],render:c=>l.createElement("div",{className:"flex flex-col gap-4"},l.createElement(s,{...r.args}),l.createElement(s,{...d.args}),l.createElement(s,{...h.args}),l.createElement(s,{...i.args}),l.createElement(s,{...k.args}))},b={args:{sizer:s.sizer.small,label:"Small Checkbox (default)",defaultChecked:!0},play:async({canvas:c,step:t})=>{await t("Assert the the small style",async()=>{e(c.getByTestId("indicator")).toHaveClass("size-3.5")})}},g={args:{sizer:s.sizer.medium,label:"Medium Checkbox",defaultChecked:!0},play:async({canvas:c,step:t})=>{await t("Assert the medium style",async()=>{e(c.getByTestId("indicator")).toHaveClass("size-4")})}},C={args:{sizer:s.sizer.large,label:"Large Checkbox",defaultChecked:!0},play:async({canvas:c,step:t})=>{await t("Assert the large style",async()=>{e(c.getByTestId("indicator")).toHaveClass("size-5")})}},u={tags:["!dev","!test"],render:c=>l.createElement("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-baseline"},l.createElement(s,{...b.args,className:"sm:flex-1"}),l.createElement(s,{...g.args,className:"sm:flex-1"}),l.createElement(s,{...C.args,className:"sm:flex-1"}))};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
    const checkbox = canvas.getByLabelText('A label');
    await step('Assert accessibility of layout elements', async () => {
      expect(checkbox).toHaveRole('checkbox');
      expect(checkbox).toHaveAccessibleDescription('A hint');
    });
    await step('Assert initial unchecked state', async () => {
      expect(checkbox).not.toBeChecked();
    });
    await step('Toggle the Checkbox by clicking the label', async () => {
      await userEvent.click(checkbox);
      expect(checkbox).toBeChecked();
      expect(args.onChange).toHaveBeenCalledOnce();
    });
    await step('Toggle the Checkbox by clicking the hint', async () => {
      await userEvent.click(canvas.getByText('A hint'));
      expect(checkbox).not.toBeChecked();
      expect(args.onChange).toHaveBeenCalledTimes(2);
    });
  }
}`,...x.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Unchecked Checkbox'
  },
  play: ({
    canvas
  }) => {
    expect(canvas.getByLabelText('Unchecked Checkbox')).not.toBeChecked();
  }
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Controlled Checkbox',
    checked: true,
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const checkbox = canvas.getByLabelText('Controlled Checkbox');
    await step('Assert \`checked\` prop works', () => {
      expect(checkbox).toBeChecked();
    });
    await step('Try unchecking the Checkbox. \`onChange\` should fire, but the checked state is controlled, so it shouldn’t change', async () => {
      await userEvent.click(checkbox);
      expect(args.onChange).toHaveBeenCalled();
      expect(checkbox).toBeChecked();
    });
  }
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Uncontrolled Checkbox',
    defaultChecked: true,
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const checkbox = canvas.getByLabelText('Uncontrolled Checkbox');
    await step('Assert \`defaultChecked\` prop works', () => {
      expect(checkbox).toBeChecked();
    });

    // The Checkbox is uncontrolled, so clicking should cause the checked
    // state to change.
    await step('Clicking the Checkbox should toggle the checked state, since it’s uncontrolled', async () => {
      await userEvent.click(checkbox);
      expect(args.onChange).toHaveBeenCalled();
      expect(checkbox).not.toBeChecked();
    });
    await step('Reset to checked state', async () => {
      await userEvent.click(checkbox);
      expect(checkbox).toBeChecked();
    });
  }
}`,...h.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled & unchecked Checkbox',
    disabled: true,
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const checkbox = canvas.getByLabelText('Disabled & unchecked Checkbox');
    await step('Assert disabled & unchecked state', async () => {
      expect(checkbox).toBeDisabled();
      expect(checkbox).not.toBeChecked();
      expect(canvas.getByTestId('indicator')).toHaveClass('bg-gray-100');
    });
    await step('Clicking the Checkbox should have no effect', async () => {
      await userEvent.click(checkbox);
      expect(checkbox).not.toBeChecked();
      expect(args.onChange).not.toHaveBeenCalled();
    });
  }
}`,...i.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled & checked Checkbox',
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
    const checkbox = canvas.getByLabelText('Disabled & checked Checkbox');
    await step('Assert disabled & checked state', async () => {
      expect(checkbox).toBeDisabled();
      expect(checkbox).toBeChecked();
      expect(canvas.getByTestId('indicator')).toHaveClass('bg-gray-100');
    });
    await step('Clicking the Checkbox should have no effect', async () => {
      await userEvent.click(checkbox);
      expect(checkbox).toBeChecked();
      expect(args.onChange).not.toHaveBeenCalled();
    });
  }
}`,...k.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Checkbox {...Unchecked.args} />
      <Checkbox {...Controlled.args} />
      <Checkbox {...Uncontrolled.args} />
      <Checkbox {...DisabledUnchecked.args} />
      <Checkbox {...DisabledChecked.args} />
    </div>
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Checkbox.sizer.small,
    label: 'Small Checkbox (default)',
    defaultChecked: true
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the the small style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-3.5');
    });
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Checkbox.sizer.medium,
    label: 'Medium Checkbox',
    defaultChecked: true
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the medium style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-4');
    });
  }
}`,...g.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Checkbox.sizer.large,
    label: 'Large Checkbox',
    defaultChecked: true
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the large style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-5');
    });
  }
}`,...C.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline">
      <Checkbox {...Small.args} className="sm:flex-1" />
      <Checkbox {...Medium.args} className="sm:flex-1" />
      <Checkbox {...Large.args} className="sm:flex-1" />
    </div>
}`,...u.parameters?.docs?.source}}};const v=["CheckedFieldLayout","Unchecked","Controlled","Uncontrolled","DisabledUnchecked","DisabledChecked","AllControlStates","Small","Medium","Large","AllSizes"],w=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:p,AllSizes:u,CheckedFieldLayout:x,Controlled:d,DisabledChecked:k,DisabledUnchecked:i,Large:C,Medium:g,Small:b,Unchecked:r,Uncontrolled:h,__namedExportsOrder:v,default:y},Symbol.toStringTag,{value:"Module"}));export{w as S};
