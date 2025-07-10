import{r}from"./iframe-DYxnnFe3.js";import{R as c}from"./Radio-Bc92SRzE.js";const{expect:a,fn:C}=__STORYBOOK_MODULE_TEST__,ee={title:"Form controls/Radio",component:c};async function x(e,t){await t("Programmatically resetting the radio to unchecked",async()=>{e.checked=!1,a(e).not.toBeChecked()})}const y={args:{label:"A label",hint:"A hint",onChange:C()},play:async({args:e,canvas:t,step:s,userEvent:b})=>{const n=t.getByLabelText("A label");await s("Assert accessibility of layout elements",async()=>{a(n).toHaveRole("radio"),a(n).toHaveAccessibleDescription("A hint")}),await s("Assert initial unchecked state",async()=>{a(n).not.toBeChecked()}),await s("Toggle the Radio by clicking the label",async()=>{await b.click(t.getByText("A label")),a(n).toBeChecked(),a(e.onChange).toHaveBeenCalledOnce()}),await x(n,s),await s("Toggle the Radio by clicking the hint",async()=>{await b.click(t.getByText("A hint")),a(n).toBeChecked(),a(e.onChange).toHaveBeenCalledTimes(2)}),await x(n,s)}},o={args:{label:"Unchecked Radio"},play:({canvas:e})=>{a(e.getByLabelText("Unchecked Radio")).not.toBeChecked()}},l={args:{label:"Controlled Radio",checked:!0,onChange:()=>{}},play:async({canvas:e,step:t})=>{await t("Assert `checked` prop works",async()=>{a(e.getByLabelText("Controlled Radio")).toBeChecked()})}},d={args:{label:"Uncontrolled Radio",defaultChecked:!0},play:async({canvas:e,step:t})=>{await t("Assert `defaultChecked` prop works",async()=>{a(e.getByLabelText("Uncontrolled Radio")).toBeChecked()})}},i={args:{label:"Disabled & unchecked Radio",disabled:!0,onChange:C()},play:async({args:e,canvas:t,step:s,userEvent:b})=>{const n=t.getByLabelText("Disabled & unchecked Radio");await s("Assert disabled & unchecked state",async()=>{a(n).toBeDisabled(),a(n).not.toBeChecked(),a(t.getByTestId("indicator")).toHaveClass("bg-gray-100")}),await s("Clicking the Radio should have no effect",async()=>{await b.click(n),a(n).not.toBeChecked(),a(e.onChange).not.toHaveBeenCalled()})}},g={args:{label:"Disabled & checked Radio",disabled:!0,defaultChecked:!0,onChange:C()},play:async({canvas:e,step:t})=>{const s=e.getByLabelText("Disabled & checked Radio");await t("Assert the disabled & checked state",async()=>{a(s).toBeDisabled(),a(s).toBeChecked(),a(e.getByTestId("indicator")).toHaveClass("bg-gray-100")})}},u={tags:["!dev","!test"],render:()=>r.createElement("div",{className:"flex flex-col gap-4"},r.createElement(c,{...o.args}),r.createElement(c,{...l.args}),r.createElement(c,{...d.args}),r.createElement(c,{...i.args}),r.createElement(c,{...g.args}))},p={args:{label:"Small Radio (default)",defaultChecked:!0},play:async({canvas:e,step:t})=>{await t("Assert the small style",async()=>{a(e.getByTestId("indicator")).toHaveClass("size-3.5")})}},h={args:{sizer:c.sizer.medium,label:"Medium Radio",defaultChecked:!0},play:async({canvas:e,step:t})=>{await t("Assert the medium style",async()=>{a(e.getByTestId("indicator")).toHaveClass("size-4")})}},m={args:{sizer:c.sizer.large,label:"Large Radio",defaultChecked:!0},play:async({canvas:e,step:t})=>{await t("Assert the large style",async()=>{a(e.getByTestId("indicator")).toHaveClass("size-5")})}},k={tags:["!dev","!test"],render:()=>r.createElement("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-baseline"},r.createElement(c,{...p.args,className:"sm:flex-1"}),r.createElement(c,{...h.args,className:"sm:flex-1"}),r.createElement(c,{...m.args,className:"sm:flex-1"}))};var B,v,R;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(R=(v=y.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var f,w,A;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Unchecked Radio'
  },
  play: ({
    canvas
  }) => {
    expect(canvas.getByLabelText('Unchecked Radio')).not.toBeChecked();
  }
}`,...(A=(w=o.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var T,S,D;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Controlled Radio',
    checked: true,
    onChange: () => {}
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert \`checked\` prop works', async () => {
      expect(canvas.getByLabelText('Controlled Radio')).toBeChecked();
    });
  }
}`,...(D=(S=l.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var H,L,E;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Uncontrolled Radio',
    defaultChecked: true
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert \`defaultChecked\` prop works', async () => {
      expect(canvas.getByLabelText('Uncontrolled Radio')).toBeChecked();
    });
  }
}`,...(E=(L=d.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var U,z,_;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(_=(z=i.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var I,N,O;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(O=(N=g.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var M,F,j;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: () => <div className="flex flex-col gap-4">
      <Radio {...Unchecked.args} />
      <Radio {...Controlled.args} />
      <Radio {...Uncontrolled.args} />
      <Radio {...DisabledUnchecked.args} />
      <Radio {...DisabledChecked.args} />
    </div>
}`,...(j=(F=u.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var P,K,Y;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Small Radio (default)',
    defaultChecked: true
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the small style', async () => {
      expect(canvas.getByTestId('indicator')).toHaveClass('size-3.5');
    });
  }
}`,...(Y=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var q,G,J;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    sizer: Radio.sizer.medium,
    label: 'Medium Radio',
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
}`,...(J=(G=h.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,V,W;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    sizer: Radio.sizer.large,
    label: 'Large Radio',
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
}`,...(W=(V=m.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var X,Z,$;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: () => <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline">
      <Radio {...Small.args} className="sm:flex-1" />
      <Radio {...Medium.args} className="sm:flex-1" />
      <Radio {...Large.args} className="sm:flex-1" />
    </div>
}`,...($=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const ae=["CheckedFieldLayout","Unchecked","Controlled","Uncontrolled","DisabledUnchecked","DisabledChecked","AllControlStates","Small","Medium","Large","AllSizes"],ne=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:u,AllSizes:k,CheckedFieldLayout:y,Controlled:l,DisabledChecked:g,DisabledUnchecked:i,Large:m,Medium:h,Small:p,Unchecked:o,Uncontrolled:d,__namedExportsOrder:ae,default:ee},Symbol.toStringTag,{value:"Module"}));export{ne as S};
