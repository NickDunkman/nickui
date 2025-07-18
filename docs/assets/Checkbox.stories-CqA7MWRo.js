import{r}from"./iframe-D0vVQOb0.js";import{C as t}from"./Checkbox-Y-DNF4m1.js";const{expect:e,fn:l}=__STORYBOOK_MODULE_TEST__,v={title:"Form controls/Checkbox",component:t},m={args:{label:"A label",hint:"A hint",onChange:l()},play:async({args:c,canvas:s,step:n,userEvent:o})=>{const a=s.getByLabelText("A label");await n("Assert accessibility of layout elements",async()=>{e(a).toHaveRole("checkbox"),e(a).toHaveAccessibleDescription("A hint")}),await n("Assert initial unchecked state",async()=>{e(a).not.toBeChecked()}),await n("Toggle the Checkbox by clicking the label",async()=>{await o.click(a),e(a).toBeChecked(),e(c.onChange).toHaveBeenCalledOnce()}),await n("Toggle the Checkbox by clicking the hint",async()=>{await o.click(s.getByText("A hint")),e(a).not.toBeChecked(),e(c.onChange).toHaveBeenCalledTimes(2)})}},h={args:{label:"Unchecked Checkbox",onChange:l()},play:({canvas:c})=>{e(c.getByLabelText("Unchecked Checkbox")).not.toBeChecked()}},i={args:{label:"Controlled Checkbox",checked:!0,onChange:l()},play:async({args:c,canvas:s,step:n,userEvent:o})=>{const a=s.getByLabelText("Controlled Checkbox");await n("Assert `checked` prop works",()=>{e(a).toBeChecked()}),await n("Try unchecking the Checkbox. `onChange` should fire, but the checked state is controlled, so it shouldn’t change",async()=>{await o.click(a),e(c.onChange).toHaveBeenCalled(),e(a).toBeChecked()})}},d={args:{label:"Uncontrolled Checkbox",defaultChecked:!0,onChange:l()},play:async({args:c,canvas:s,step:n,userEvent:o})=>{const a=s.getByLabelText("Uncontrolled Checkbox");await n("Assert `defaultChecked` prop works",()=>{e(a).toBeChecked()}),await n("Clicking the Checkbox should toggle the checked state, since it’s uncontrolled",async()=>{await o.click(a),e(c.onChange).toHaveBeenCalled(),e(a).not.toBeChecked()}),await n("Reset to checked state",async()=>{await o.click(a),e(a).toBeChecked()})}},k={args:{label:"Disabled & unchecked Checkbox",disabled:!0,onChange:l()},play:async({args:c,canvas:s,step:n,userEvent:o})=>{const a=s.getByLabelText("Disabled & unchecked Checkbox");await n("Assert disabled & unchecked state",async()=>{e(a).toBeDisabled(),e(a).not.toBeChecked(),e(s.getByTestId("indicator")).toHaveClass("bg-gray-100")}),await n("Clicking the Checkbox should have no effect",async()=>{await o.click(a),e(a).not.toBeChecked(),e(c.onChange).not.toHaveBeenCalled()})}},g={args:{label:"Disabled & checked Checkbox",disabled:!0,defaultChecked:!0,onChange:l()},play:async({args:c,canvas:s,step:n,userEvent:o})=>{const a=s.getByLabelText("Disabled & checked Checkbox");await n("Assert disabled & checked state",async()=>{e(a).toBeDisabled(),e(a).toBeChecked(),e(s.getByTestId("indicator")).toHaveClass("bg-gray-100")}),await n("Clicking the Checkbox should have no effect",async()=>{await o.click(a),e(a).toBeChecked(),e(c.onChange).not.toHaveBeenCalled()})}},b={args:{sizer:t.sizer.small,label:"Small Checkbox",defaultChecked:!0,onChange:l()},play:async({canvas:c,step:s})=>{await s("Assert the the small sizer style",async()=>{e(c.getByTestId("indicator")).toHaveClass("size-3.5")})}},C={args:{sizer:t.sizer.base,label:"Base Checkbox",defaultChecked:!0,onChange:l()},play:async({canvas:c,step:s})=>{await s("Assert the base sizer style",async()=>{e(c.getByTestId("indicator")).toHaveClass("size-4")})}},x={args:{sizer:t.sizer.large,label:"Large Checkbox",defaultChecked:!0,onChange:l()},play:async({canvas:c,step:s})=>{await s("Assert the large sizer style",async()=>{e(c.getByTestId("indicator")).toHaveClass("size-5")})}},p={tags:["!test"],args:{sizer:[t.sizer.small,t.sizer.smBase,t.sizer.mdLarge],label:"Responsive Checkbox",defaultChecked:!0,onChange:l()}},u={tags:["!dev","!test"],render:c=>r.createElement("div",{className:"flex flex-col gap-4"},r.createElement(t,{...h.args}),r.createElement(t,{...i.args}),r.createElement(t,{...d.args}),r.createElement(t,{...k.args}),r.createElement(t,{...g.args}))},y={tags:["!dev","!test"],render:c=>r.createElement("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-baseline"},r.createElement(t,{...b.args,className:"sm:flex-1"}),r.createElement(t,{...C.args,className:"sm:flex-1"}),r.createElement(t,{...x.args,className:"sm:flex-1"}),r.createElement(t,{...p.args,className:"sm:flex-1"}))};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Unchecked Checkbox',
    onChange: fn()
  },
  play: ({
    canvas
  }) => {
    expect(canvas.getByLabelText('Unchecked Checkbox')).not.toBeChecked();
  }
}`,...h.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Checkbox.sizer.small,
    label: 'Small Checkbox',
    defaultChecked: true,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the the small sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-3.5');
    });
  }
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Checkbox.sizer.base,
    label: 'Base Checkbox',
    defaultChecked: true,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the base sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-4');
    });
  }
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Checkbox.sizer.large,
    label: 'Large Checkbox',
    defaultChecked: true,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the large sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-5');
    });
  }
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  args: {
    sizer: [Checkbox.sizer.small, Checkbox.sizer.smBase, Checkbox.sizer.mdLarge],
    label: 'Responsive Checkbox',
    defaultChecked: true,
    onChange: fn()
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Checkbox {...Unchecked.args} />
      <Checkbox {...Controlled.args} />
      <Checkbox {...Uncontrolled.args} />
      <Checkbox {...DisabledUnchecked.args} />
      <Checkbox {...DisabledChecked.args} />
    </div>
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline">
      <Checkbox {...Small.args} className="sm:flex-1" />
      <Checkbox {...Base.args} className="sm:flex-1" />
      <Checkbox {...Large.args} className="sm:flex-1" />
      <Checkbox {...Responsive.args} className="sm:flex-1" />
    </div>
}`,...y.parameters?.docs?.source}}};const B=["CheckedFieldLayout","Unchecked","Controlled","Uncontrolled","DisabledUnchecked","DisabledChecked","Small","Base","Large","Responsive","AllControlStates","AllSizes"],T=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:u,AllSizes:y,Base:C,CheckedFieldLayout:m,Controlled:i,DisabledChecked:g,DisabledUnchecked:k,Large:x,Responsive:p,Small:b,Unchecked:h,Uncontrolled:d,__namedExportsOrder:B,default:v},Symbol.toStringTag,{value:"Module"}));export{T as S};
