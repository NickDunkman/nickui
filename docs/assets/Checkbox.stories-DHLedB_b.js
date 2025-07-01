import{r as c}from"./iframe-D_OX4RS-.js";import{A as f}from"./AllSizersStoryWrapper-Djlh-4yQ.js";import{g as w}from"./getStoryArgTypes-CB50-RjO.js";import{C as l}from"./Checkbox-WodopptC.js";const{expect:e,fn:o}=__STORYBOOK_MODULE_TEST__,z={title:"Form controls/Checkbox",component:l,argTypes:w({formControl:{isCheckable:!0,isDisableable:!0},isSizerable:!0})},y={tags:["field-layout"],args:{label:"A label",hint:"A hint",onChange:o()},play:async({args:t,canvas:s,step:n,userEvent:r})=>{const a=s.getByLabelText("A label");await n("Assert accessibility of layout elements",async()=>{e(a).toHaveRole("checkbox"),e(a).toHaveAccessibleDescription("A hint")}),await n("Assert initial unchecked state",async()=>{e(a).not.toBeChecked()}),await n("Toggle the Checkbox by clicking the label",async()=>{await r.click(a),e(a).toBeChecked(),e(t.onChange).toHaveBeenCalledOnce()}),await n("Toggle the Checkbox by clicking the hint",async()=>{await r.click(s.getByText("A hint")),e(a).not.toBeChecked(),e(t.onChange).toHaveBeenCalledTimes(2)})}},i={tags:["control-state"],args:{label:"Unchecked Checkbox",onChange:o()},play:({canvas:t})=>{e(t.getByLabelText("Unchecked Checkbox")).not.toBeChecked()}},h={tags:["control-state"],args:{label:"Controlled Checkbox",checked:!0,onChange:o()},play:async({args:t,canvas:s,step:n,userEvent:r})=>{const a=s.getByLabelText("Controlled Checkbox");await n("Assert `checked` prop works",()=>{e(a).toBeChecked()}),await n("Try unchecking the Checkbox. `onChange` should fire, but the checked state is controlled, so it shouldn’t change",async()=>{await r.click(a),e(t.onChange).toHaveBeenCalled(),e(a).toBeChecked()})}},d={tags:["control-state"],args:{label:"Uncontrolled Checkbox",defaultChecked:!0,onChange:o()},play:async({args:t,canvas:s,step:n,userEvent:r})=>{const a=s.getByLabelText("Uncontrolled Checkbox");await n("Assert `defaultChecked` prop works",()=>{e(a).toBeChecked()}),await n("Clicking the Checkbox should toggle the checked state, since it’s uncontrolled",async()=>{await r.click(a),e(t.onChange).toHaveBeenCalled(),e(a).not.toBeChecked()}),await n("Reset to checked state",async()=>{await r.click(a),e(a).toBeChecked()})}},g={tags:["control-state"],args:{label:"Disabled & unchecked Checkbox",disabled:!0,onChange:o()},play:async({args:t,canvas:s,step:n,userEvent:r})=>{const a=s.getByLabelText("Disabled & unchecked Checkbox");await n("Assert disabled & unchecked state",async()=>{e(a).toBeDisabled(),e(a).not.toBeChecked(),e(s.getByTestId("indicator")).toHaveClass("bg-gray-100")}),await n("Clicking the Checkbox should have no effect",async()=>{await r.click(a),e(a).not.toBeChecked(),e(t.onChange).not.toHaveBeenCalled()})}},k={tags:["control-state"],args:{label:"Disabled & checked Checkbox",disabled:!0,defaultChecked:!0,onChange:o()},play:async({args:t,canvas:s,step:n,userEvent:r})=>{const a=s.getByLabelText("Disabled & checked Checkbox");await n("Assert disabled & checked state",async()=>{e(a).toBeDisabled(),e(a).toBeChecked(),e(s.getByTestId("indicator")).toHaveClass("bg-gray-100")}),await n("Clicking the Checkbox should have no effect",async()=>{await r.click(a),e(a).toBeChecked(),e(t.onChange).not.toHaveBeenCalled()})}},b={tags:["sizer"],args:{sizer:"xs",label:"Xs Checkbox",defaultChecked:!0,onChange:o()},play:async({canvas:t,step:s})=>{await s("Assert the the xs sizer style",async()=>{e(t.getByTestId("indicator")).toHaveClass("size-3.5")})}},C={tags:["sizer"],args:{sizer:"sm",label:"Sm Checkbox",defaultChecked:!0,onChange:o()},play:async({canvas:t,step:s})=>{await s("Assert the the sm sizer style",async()=>{e(t.getByTestId("indicator")).toHaveClass("size-4")})}},x={tags:["sizer"],args:{sizer:"base",label:"Base Checkbox",defaultChecked:!0,onChange:o()},play:async({canvas:t,step:s})=>{await s("Assert the base sizer style",async()=>{e(t.getByTestId("indicator")).toHaveClass("size-4.75")})}},p={tags:["sizer"],args:{sizer:"lg",label:"Lg Checkbox",defaultChecked:!0,onChange:o()},play:async({canvas:t,step:s})=>{await s("Assert the lg sizer style",async()=>{e(t.getByTestId("indicator")).toHaveClass("size-5.5")})}},u={tags:["sizer"],args:{sizer:"xl",label:"Xl Checkbox",defaultChecked:!0,onChange:o()},play:async({canvas:t,step:s})=>{await s("Assert the xl sizer style",async()=>{e(t.getByTestId("indicator")).toHaveClass("size-6")})}},m={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],label:"Responsive Checkbox",defaultChecked:!0,onChange:o()}},v={tags:["!dev","!test"],render:t=>c.createElement("div",{className:"flex flex-col gap-4 sm:flex-row sm:justify-between"},c.createElement(l,{...i.args}),c.createElement(l,{...h.args}),c.createElement(l,{...d.args}),c.createElement(l,{...g.args}),c.createElement(l,{...k.args}))},B={tags:["!dev","!test"],render:t=>c.createElement(f,{alignBaseline:!0},c.createElement(l,{...b.args}),c.createElement(l,{...C.args}),c.createElement(l,{...x.args}),c.createElement(l,{...p.args}),c.createElement(l,{...u.args}))};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    label: 'Unchecked Checkbox',
    onChange: fn()
  },
  play: ({
    canvas
  }) => {
    expect(canvas.getByLabelText('Unchecked Checkbox')).not.toBeChecked();
  }
}`,...i.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
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
}`,...h.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
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
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
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
}`,...g.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
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
}`,...k.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'xs',
    label: 'Xs Checkbox',
    defaultChecked: true,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the the xs sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-3.5');
    });
  }
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'sm',
    label: 'Sm Checkbox',
    defaultChecked: true,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the the sm sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-4');
    });
  }
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'base',
    label: 'Base Checkbox',
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
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'lg',
    label: 'Lg Checkbox',
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'xl',
    label: 'Xl Checkbox',
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive Checkbox',
    defaultChecked: true,
    onChange: fn()
  }
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
      <Checkbox {...unchecked.args} />
      <Checkbox {...controlled.args} />
      <Checkbox {...uncontrolled.args} />
      <Checkbox {...disabledUnchecked.args} />
      <Checkbox {...disabledChecked.args} />
    </div>
}`,...v.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper alignBaseline>
      <Checkbox {...xs.args} />
      <Checkbox {...sm.args} />
      <Checkbox {...base.args} />
      <Checkbox {...lg.args} />
      <Checkbox {...xl.args} />
    </AllSizersStoryWrapper>
}`,...B.parameters?.docs?.source}}};const T=["checkedFieldLayout","unchecked","controlled","uncontrolled","disabledUnchecked","disabledChecked","xs","sm","base","lg","xl","responsive","allControlStates","allSizers"],L=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:T,allControlStates:v,allSizers:B,base:x,checkedFieldLayout:y,controlled:h,default:z,disabledChecked:k,disabledUnchecked:g,lg:p,responsive:m,sm:C,unchecked:i,uncontrolled:d,xl:u,xs:b},Symbol.toStringTag,{value:"Module"}));export{L as s};
