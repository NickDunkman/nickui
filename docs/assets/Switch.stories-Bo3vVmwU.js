import{r as c}from"./iframe-D_dx4C3o.js";import{A as x}from"./AllSizersStoryWrapper-M2xuQLnL.js";import{g as B}from"./getStoryArgTypes-CvpAwH8w.js";import{S as o}from"./Switch-Tqtf75p6.js";const{expect:e,fn:l}=__STORYBOOK_MODULE_TEST__,f={title:"Form controls/Switch",component:o,argTypes:B({formControl:{isCheckable:!0,isDisableable:!0},isSizerable:!0})},m={tags:["field-layout"],args:{label:"A label",hint:"A hint",onChange:l()},play:async({args:a,canvas:s,step:n,userEvent:r})=>{const t=s.getByLabelText("A label");await n("Assert accessibility of layout elements",async()=>{e(t).toHaveRole("checkbox"),e(t).toHaveAccessibleDescription("A hint")}),await n("Assert initial unchecked state",async()=>{e(t).not.toBeChecked()}),await n("Toggle the Switch by clicking the label",async()=>{await r.click(s.getByText("A label")),e(t).toBeChecked(),e(a.onChange).toHaveBeenCalledOnce()}),await n("Toggle the Switch by clicking the hint",async()=>{await r.click(s.getByText("A hint")),e(t).not.toBeChecked(),e(a.onChange).toHaveBeenCalledTimes(2)})}},i={tags:["control-state"],args:{label:"Unchecked Switch",onChange:l()},play:async({canvas:a})=>{e(a.getByLabelText("Unchecked Switch")).not.toBeChecked()}},h={tags:["control-state"],args:{label:"Controlled Switch",checked:!0,onChange:l()},play:async({args:a,canvas:s,step:n,userEvent:r})=>{const t=s.getByLabelText("Controlled Switch");await n("Assert `checked` prop works",()=>{e(t).toBeChecked()}),await n("Try unchecking the Switch. `onChange` should fire, but the checked state is controlled, so it shouldn’t change",async()=>{await r.click(t),e(a.onChange).toHaveBeenCalled(),e(t).toBeChecked()})}},d={tags:["control-state"],args:{label:"Uncontrolled Switch",defaultChecked:!0,onChange:l()},play:async({args:a,canvas:s,step:n,userEvent:r})=>{const t=s.getByLabelText("Uncontrolled Switch");await n("Assert `defaultChecked` prop works",()=>{e(t).toBeChecked()}),await n("Clicking the Switch should toggle the checked state, since it’s uncontrolled",async()=>{await r.click(t),e(a.onChange).toHaveBeenCalled(),e(t).not.toBeChecked()}),await n("Reset to checked state",async()=>{await r.click(t),e(t).toBeChecked()})}},g={tags:["control-state"],args:{label:"Disabled & unchecked Switch",disabled:!0,onChange:l()},play:async({args:a,canvas:s,step:n,userEvent:r})=>{const t=s.getByLabelText("Disabled & unchecked Switch");await n("Assert disabled & unchecked state",async()=>{e(t).toBeDisabled(),e(t).not.toBeChecked(),e(s.getByTestId("indicator")).toHaveClass("bg-gray-300")}),await n("Clicking the Switch should have no effect",async()=>{await r.click(t),e(t).not.toBeChecked(),e(a.onChange).not.toHaveBeenCalled()})}},p={tags:["control-state"],args:{label:"Disabled & checked Switch",disabled:!0,defaultChecked:!0,onChange:l()},play:async({args:a,canvas:s,step:n,userEvent:r})=>{const t=s.getByLabelText("Disabled & checked Switch");await n("Assert disabled & checked state",async()=>{e(t).toBeDisabled(),e(t).toBeChecked(),e(s.getByTestId("indicator")).toHaveClass("bg-gray-300")}),await n("Clicking the Switch should have no effect",async()=>{await r.click(t),e(t).toBeChecked(),e(a.onChange).not.toHaveBeenCalled()})}},w={tags:["sizer"],args:{sizer:"xs",label:"Xs Switch",defaultChecked:!0,onChange:l()},play:async({canvas:a,step:s})=>{await s("Assert the the xs sizer style",async()=>{e(a.getByTestId("indicator")).toHaveClass("h-4")})}},y={tags:["sizer"],args:{sizer:"sm",label:"Sm Switch",defaultChecked:!0,onChange:l()},play:async({canvas:a,step:s})=>{await s("Assert the the sm sizer style",async()=>{e(a.getByTestId("indicator")).toHaveClass("h-5")})}},u={tags:["sizer"],args:{sizer:"base",label:"Base Switch",defaultChecked:!0,onChange:l()},play:async({canvas:a,step:s})=>{await s("Assert the the base sizer style",async()=>{e(a.getByTestId("indicator")).toHaveClass("h-6")})}},C={tags:["sizer"],args:{sizer:"lg",label:"Lg Switch",defaultChecked:!0,onChange:l()},play:async({canvas:a,step:s})=>{await s("Assert the the lg sizer style",async()=>{e(a.getByTestId("indicator")).toHaveClass("h-7")})}},k={tags:["sizer"],args:{sizer:"xl",label:"Xl Switch",defaultChecked:!0,onChange:l()},play:async({canvas:a,step:s})=>{await s("Assert the the xl sizer style",async()=>{e(a.getByTestId("indicator")).toHaveClass("h-8")})}},b={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],label:"Responsive Switch",defaultChecked:!0}},S={tags:["!dev","!test"],render:a=>c.createElement("div",{className:"flex flex-col gap-4 sm:flex-row sm:justify-between"},c.createElement(o,{...i.args}),c.createElement(o,{...h.args}),c.createElement(o,{...d.args}),c.createElement(o,{...g.args}),c.createElement(o,{...p.args}))},v={tags:["!dev","!test"],render:a=>c.createElement(x,{alignBaseline:!0},c.createElement(o,{...w.args}),c.createElement(o,{...y.args}),c.createElement(o,{...u.args}),c.createElement(o,{...C.args}),c.createElement(o,{...k.args}))};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
  tags: ['control-state'],
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
  tags: ['control-state'],
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
  tags: ['control-state'],
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
  tags: ['control-state'],
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
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
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
}`,...p.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'xs',
    label: 'Xs Switch',
    defaultChecked: true,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the the xs sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('h-4');
    });
  }
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'sm',
    label: 'Sm Switch',
    defaultChecked: true,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the the sm sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('h-5');
    });
  }
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'base',
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
}`,...u.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'lg',
    label: 'Lg Switch',
    defaultChecked: true,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the the lg sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('h-7');
    });
  }
}`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'xl',
    label: 'Xl Switch',
    defaultChecked: true,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the the xl sizer style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('h-8');
    });
  }
}`,...k.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive Switch',
    defaultChecked: true
  }
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
      <Switch {...unchecked.args} />
      <Switch {...controlled.args} />
      <Switch {...uncontrolled.args} />
      <Switch {...disabledUnchecked.args} />
      <Switch {...disabledChecked.args} />
    </div>
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper alignBaseline>
      <Switch {...xs.args} />
      <Switch {...sm.args} />
      <Switch {...base.args} />
      <Switch {...lg.args} />
      <Switch {...xl.args} />
    </AllSizersStoryWrapper>
}`,...v.parameters?.docs?.source}}};const T=["checkedFieldLayout","unchecked","controlled","uncontrolled","disabledUnchecked","disabledChecked","xs","sm","base","lg","xl","responsive","allControlStates","allSizers"],L=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:T,allControlStates:S,allSizers:v,base:u,checkedFieldLayout:m,controlled:h,default:f,disabledChecked:p,disabledUnchecked:g,lg:C,responsive:b,sm:y,unchecked:i,uncontrolled:d,xl:k,xs:w},Symbol.toStringTag,{value:"Module"}));export{L as s};
