import{r as o}from"./iframe-BC9w-kBM.js";import{C as s}from"./Checkbox-qikHsQil.js";const{expect:a,fn:p}=__STORYBOOK_MODULE_TEST__,$={title:"Form controls/Checkbox",component:s},x={args:{label:"A label",hint:"A hint"},play:async({canvas:e,userEvent:n})=>{const t=e.getByRole("checkbox");a(t).toHaveAccessibleName("A label"),a(t).toHaveAccessibleDescription("A hint"),a(t).not.toBeChecked();const c=e.getByText("A label");await n.click(c),a(t).toBeChecked();const u=e.getByText("A hint");await n.click(u),a(t).not.toBeChecked()}},r={args:{label:"Unchecked Checkbox"},play:({canvas:e})=>{const n=e.getByLabelText("Unchecked Checkbox");a(n).not.toBeChecked()}},l={args:{label:"Controlled Checkbox",checked:!0,onChange:p()},play:async({args:e,canvas:n,userEvent:t})=>{const c=n.getByLabelText("Controlled Checkbox");a(c).toBeChecked(),await t.click(c),a(e.onChange).toHaveBeenCalled(),a(c).toBeChecked()}},d={args:{label:"Uncontrolled Checkbox",defaultChecked:!0,onChange:p()},play:async({args:e,canvas:n,userEvent:t})=>{const c=n.getByLabelText("Uncontrolled Checkbox");a(c).toBeChecked(),await t.click(c),a(e.onChange).toHaveBeenCalled(),a(c).not.toBeChecked(),await t.click(c)}},i={args:{label:"Disabled Checkbox",disabled:!0,onChange:p()},play:async({args:e,canvas:n,userEvent:t})=>{const c=n.getByLabelText("Disabled Checkbox");a(c).toBeDisabled();const u=n.getByTestId("indicator");a(u).toHaveClass("bg-gray-100"),await t.click(c),a(e.onChange).not.toHaveBeenCalled()}},h={tags:["!test"],args:{label:"Disabled & checked Checkbox",disabled:!0,defaultChecked:!0}},C={tags:["!dev","!test"],render:e=>o.createElement("div",{className:"flex flex-col gap-4"},o.createElement(s,{...r.args}),o.createElement(s,{...l.args}),o.createElement(s,{...d.args}),o.createElement(s,{...i.args}),o.createElement(s,{...h.args}))},b={args:{sizer:s.sizer.small,label:"Small Checkbox (default)",defaultChecked:!0},play:({canvas:e})=>{a(e.getByTestId("indicator")).toHaveClass("size-3.5")}},k={args:{sizer:s.sizer.medium,label:"Medium Checkbox",defaultChecked:!0},play:({canvas:e})=>{a(e.getByTestId("indicator")).toHaveClass("size-4")}},g={args:{sizer:s.sizer.large,label:"Large Checkbox",defaultChecked:!0},play:({canvas:e})=>{a(e.getByTestId("indicator")).toHaveClass("size-5")}},m={tags:["!dev","!test"],render:e=>o.createElement("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-baseline"},o.createElement(s,{...b.args,className:"sm:flex-1"}),o.createElement(s,{...k.args,className:"sm:flex-1"}),o.createElement(s,{...g.args,className:"sm:flex-1"}))};var v,y,B;x.parameters={...x.parameters,docs:{...(v=x.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'A label',
    hint: 'A hint'
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const checkbox = canvas.getByRole('checkbox');
    expect(checkbox).toHaveAccessibleName('A label');
    expect(checkbox).toHaveAccessibleDescription('A hint');
    expect(checkbox).not.toBeChecked();

    // ensure that you can click the label & hint to toggle the checkbox

    const label = canvas.getByText('A label');
    await userEvent.click(label);
    expect(checkbox).toBeChecked();
    const hint = canvas.getByText('A hint');
    await userEvent.click(hint);
    expect(checkbox).not.toBeChecked();
  }
}`,...(B=(y=x.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var f,S,T;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Unchecked Checkbox'
  },
  play: ({
    canvas
  }) => {
    const checkbox = canvas.getByLabelText('Unchecked Checkbox');
    expect(checkbox).not.toBeChecked();
  }
}`,...(T=(S=r.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var E,z,A;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Controlled Checkbox',
    checked: true,
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const checkbox = canvas.getByLabelText('Controlled Checkbox');
    expect(checkbox).toBeChecked();

    // The Checkbox is controlled, and we don't have a wrapper setup to pass in
    // the new checked state, so while a change event should be fired, the
    // Checkbox should still be checked.
    await userEvent.click(checkbox);
    expect(args.onChange).toHaveBeenCalled();
    expect(checkbox).toBeChecked();
  }
}`,...(A=(z=l.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var w,D,H;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Uncontrolled Checkbox',
    defaultChecked: true,
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const checkbox = canvas.getByLabelText('Uncontrolled Checkbox');
    expect(checkbox).toBeChecked();

    // The Checkbox is uncontrolled, so clicking should cause the checked
    // state to change.
    await userEvent.click(checkbox);
    expect(args.onChange).toHaveBeenCalled();
    expect(checkbox).not.toBeChecked();

    // Reset back to checked
    await userEvent.click(checkbox);
  }
}`,...(H=(D=d.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var L,_,U;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const checkbox = canvas.getByLabelText('Disabled Checkbox');
    expect(checkbox).toBeDisabled();

    // Disabled style should be activated
    const indicator = canvas.getByTestId('indicator');
    expect(indicator).toHaveClass('bg-gray-100');

    // The Checkbox is uncontrolled, so clicking should cause the checked
    // state to change.
    await userEvent.click(checkbox);
    expect(args.onChange).not.toHaveBeenCalled();
  }
}`,...(U=(_=i.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var N,I,M;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!test'],
  args: {
    label: 'Disabled & checked Checkbox',
    disabled: true,
    defaultChecked: true
  }
}`,...(M=(I=h.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var O,R,F;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Checkbox {...Unchecked.args} />
      <Checkbox {...Controlled.args} />
      <Checkbox {...Uncontrolled.args} />
      <Checkbox {...Disabled.args} />
      <Checkbox {...DisabledChecked.args} />
    </div>
}`,...(F=(R=C.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var j,K,P;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    sizer: Checkbox.sizer.small,
    label: 'Small Checkbox (default)',
    defaultChecked: true
  },
  play: ({
    canvas
  }) => {
    // Small style should be activated
    expect(canvas.getByTestId('indicator')).toHaveClass('size-3.5');
  }
}`,...(P=(K=b.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Y,q,G;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    sizer: Checkbox.sizer.medium,
    label: 'Medium Checkbox',
    defaultChecked: true
  },
  play: ({
    canvas
  }) => {
    // Medium style should be activated
    expect(canvas.getByTestId('indicator')).toHaveClass('size-4');
  }
}`,...(G=(q=k.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,Q,V;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    sizer: Checkbox.sizer.large,
    label: 'Large Checkbox',
    defaultChecked: true
  },
  play: ({
    canvas
  }) => {
    // Large style should be activated
    expect(canvas.getByTestId('indicator')).toHaveClass('size-5');
  }
}`,...(V=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var W,X,Z;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline">
      <Checkbox {...Small.args} className="sm:flex-1" />
      <Checkbox {...Medium.args} className="sm:flex-1" />
      <Checkbox {...Large.args} className="sm:flex-1" />
    </div>
}`,...(Z=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const ee=["CheckedFieldLayout","Unchecked","Controlled","Uncontrolled","Disabled","DisabledChecked","AllControlStates","Small","Medium","Large","AllSizes"],te=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:C,AllSizes:m,CheckedFieldLayout:x,Controlled:l,Disabled:i,DisabledChecked:h,Large:g,Medium:k,Small:b,Unchecked:r,Uncontrolled:d,__namedExportsOrder:ee,default:$},Symbol.toStringTag,{value:"Module"}));export{te as S};
