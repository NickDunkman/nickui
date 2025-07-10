import{r as l}from"./iframe-DYxnnFe3.js";import{C as s}from"./Checkbox-miL9dw_Z.js";const{expect:e,fn:y}=__STORYBOOK_MODULE_TEST__,$={title:"Form controls/Checkbox",component:s},x={args:{label:"A label",hint:"A hint",onChange:y()},play:async({args:t,canvas:c,step:n,userEvent:o})=>{const a=c.getByLabelText("A label");await n("Assert accessibility of layout elements",async()=>{e(a).toHaveRole("checkbox"),e(a).toHaveAccessibleDescription("A hint")}),await n("Assert initial unchecked state",async()=>{e(a).not.toBeChecked()}),await n("Toggle the Checkbox by clicking the label",async()=>{await o.click(c.getByText("A label")),e(a).toBeChecked(),e(t.onChange).toHaveBeenCalledOnce()}),await n("Toggle the Checkbox by clicking the label",async()=>{await o.click(c.getByText("A hint")),e(a).not.toBeChecked(),e(t.onChange).toHaveBeenCalledTimes(2)})}},r={args:{label:"Unchecked Checkbox"},play:({canvas:t})=>{e(t.getByLabelText("Unchecked Checkbox")).not.toBeChecked()}},d={args:{label:"Controlled Checkbox",checked:!0,onChange:y()},play:async({args:t,canvas:c,step:n,userEvent:o})=>{const a=c.getByLabelText("Controlled Checkbox");await n("Assert `checked` prop works",()=>{e(a).toBeChecked()}),await n("Try unchecking the Checkbox. `onChange` should fire, but the checked state is controlled, so it shouldn’t change",async()=>{await o.click(a),e(t.onChange).toHaveBeenCalled(),e(a).toBeChecked()})}},h={args:{label:"Uncontrolled Checkbox",defaultChecked:!0,onChange:y()},play:async({args:t,canvas:c,step:n,userEvent:o})=>{const a=c.getByLabelText("Uncontrolled Checkbox");await n("Assert `defaultChecked` prop works",()=>{e(a).toBeChecked()}),await n("Clicking the Checkbox should toggle the checked state, since it’s uncontrolled",async()=>{await o.click(a),e(t.onChange).toHaveBeenCalled(),e(a).not.toBeChecked()}),await n("Reset to checked state",async()=>{await o.click(a),e(a).toBeChecked()})}},i={args:{label:"Disabled & unchecked Checkbox",disabled:!0,onChange:y()},play:async({args:t,canvas:c,step:n,userEvent:o})=>{const a=c.getByLabelText("Disabled & unchecked Checkbox");await n("Assert disabled & unchecked state",async()=>{e(a).toBeDisabled(),e(a).not.toBeChecked(),e(c.getByTestId("indicator")).toHaveClass("bg-gray-100")}),await n("Clicking the Checkbox should have no effect",async()=>{await o.click(a),e(a).not.toBeChecked(),e(t.onChange).not.toHaveBeenCalled()})}},k={args:{label:"Disabled & checked Checkbox",disabled:!0,defaultChecked:!0,onChange:y()},play:async({args:t,canvas:c,step:n,userEvent:o})=>{const a=c.getByLabelText("Disabled & checked Checkbox");await n("Assert disabled & checked state",async()=>{e(a).toBeDisabled(),e(a).toBeChecked(),e(c.getByTestId("indicator")).toHaveClass("bg-gray-100")}),await n("Clicking the Checkbox should have no effect",async()=>{await o.click(a),e(a).toBeChecked(),e(t.onChange).not.toHaveBeenCalled()})}},p={tags:["!dev","!test"],render:()=>l.createElement("div",{className:"flex flex-col gap-4"},l.createElement(s,{...r.args}),l.createElement(s,{...d.args}),l.createElement(s,{...h.args}),l.createElement(s,{...i.args}),l.createElement(s,{...k.args}))},b={args:{sizer:s.sizer.small,label:"Small Checkbox (default)",defaultChecked:!0},play:async({canvas:t,step:c})=>{await c("Assert the the small style",async()=>{e(t.getByTestId("indicator")).toHaveClass("size-3.5")})}},g={args:{sizer:s.sizer.medium,label:"Medium Checkbox",defaultChecked:!0},play:async({canvas:t,step:c})=>{await c("Assert the medium style",async()=>{e(t.getByTestId("indicator")).toHaveClass("size-4")})}},C={args:{sizer:s.sizer.large,label:"Large Checkbox",defaultChecked:!0},play:async({canvas:t,step:c})=>{await c("Assert the large style",async()=>{e(t.getByTestId("indicator")).toHaveClass("size-5")})}},u={tags:["!dev","!test"],render:()=>l.createElement("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-baseline"},l.createElement(s,{...b.args,className:"sm:flex-1"}),l.createElement(s,{...g.args,className:"sm:flex-1"}),l.createElement(s,{...C.args,className:"sm:flex-1"}))};var m,v,B;x.parameters={...x.parameters,docs:{...(m=x.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      await userEvent.click(canvas.getByText('A label'));
      expect(checkbox).toBeChecked();
      expect(args.onChange).toHaveBeenCalledOnce();
    });
    await step('Toggle the Checkbox by clicking the label', async () => {
      await userEvent.click(canvas.getByText('A hint'));
      expect(checkbox).not.toBeChecked();
      expect(args.onChange).toHaveBeenCalledTimes(2);
    });
  }
}`,...(B=(v=x.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var f,w,T;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Unchecked Checkbox'
  },
  play: ({
    canvas
  }) => {
    expect(canvas.getByLabelText('Unchecked Checkbox')).not.toBeChecked();
  }
}`,...(T=(w=r.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var A,H,S;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(S=(H=d.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var E,z,D;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(z=h.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var L,U,_;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(_=(U=i.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var I,N,O;k.parameters={...k.parameters,docs:{...(I=k.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(O=(N=k.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var M,R,F;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: () => <div className="flex flex-col gap-4">
      <Checkbox {...Unchecked.args} />
      <Checkbox {...Controlled.args} />
      <Checkbox {...Uncontrolled.args} />
      <Checkbox {...DisabledUnchecked.args} />
      <Checkbox {...DisabledChecked.args} />
    </div>
}`,...(F=(R=p.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var j,K,P;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(P=(K=b.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Y,q,G;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(G=(q=g.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,Q,V;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(V=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var W,X,Z;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: () => <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline">
      <Checkbox {...Small.args} className="sm:flex-1" />
      <Checkbox {...Medium.args} className="sm:flex-1" />
      <Checkbox {...Large.args} className="sm:flex-1" />
    </div>
}`,...(Z=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const ee=["CheckedFieldLayout","Unchecked","Controlled","Uncontrolled","DisabledUnchecked","DisabledChecked","AllControlStates","Small","Medium","Large","AllSizes"],te=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:p,AllSizes:u,CheckedFieldLayout:x,Controlled:d,DisabledChecked:k,DisabledUnchecked:i,Large:C,Medium:g,Small:b,Unchecked:r,Uncontrolled:h,__namedExportsOrder:ee,default:$},Symbol.toStringTag,{value:"Module"}));export{te as S};
