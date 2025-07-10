import{r as s}from"./iframe-B-Uinc_h.js";import{B as t}from"./Button-BdzfBpjT.js";const{expect:n,fn:Z}=__STORYBOOK_MODULE_TEST__,$={title:"Form controls/Button",component:t},r={args:{children:"Enabled Button",onClick:Z()},play:async({args:e,canvas:a,step:v,userEvent:B})=>{await v("Clicking the Button should trigger `onClick`",async()=>{await B.click(a.getByRole("button")),n(e.onClick).toHaveBeenCalled()})}},o={args:{children:"Disabled Button",disabled:!0,onClick:Z()},play:async({args:e,canvas:a,step:v,userEvent:B})=>{const b=a.getByRole("button");await v("Assert the disabled state",async()=>{await n(b).toBeDisabled()}),await v("Clicking the Button should have no effect",async()=>{await B.click(b),n(e.onClick).not.toHaveBeenCalled()})}},p={tags:["!dev","!test"],render:()=>s.createElement("div",{className:"flex gap-4"},s.createElement(t,{...r.args}),s.createElement(t,{...o.args}))},l={args:{sizer:t.sizer.small,children:"Small Button (default)"},play:async({canvas:e,step:a})=>{await a("Assert the small style",async()=>{n(e.getByRole("button")).toHaveClass("text-sm")})}},c={args:{sizer:t.sizer.medium,children:"Medium Button"},play:async({canvas:e,step:a})=>{await a("Assert the medium style",async()=>{n(e.getByRole("button")).toHaveClass("text-base")})}},i={args:{sizer:t.sizer.large,children:"Large Button"},play:async({canvas:e,step:a})=>{await a("Assert the large style",async()=>{n(e.getByRole("button")).toHaveClass("text-lg")})}},m={tags:["!dev","!test"],render:()=>s.createElement("div",{className:"flex flex-wrap items-baseline gap-4"},s.createElement(t,{...l.args}),s.createElement(t,{...c.args}),s.createElement(t,{...i.args}))},d={args:{children:"Primary Button (default)"},play:async({canvas:e,step:a})=>{await a("Assert the primary style",async()=>{await n(e.getByRole("button")).toHaveClass("bg-indigo-600")})}},u={args:{flavor:t.flavor.secondary,children:"Secondary Button"},play:async({canvas:e,step:a})=>{await a("Assert the secondary style",async()=>{n(e.getByRole("button")).toHaveClass("bg-gray-100")})}},g={args:{flavor:t.flavor.danger,children:"Danger Button"},play:async({canvas:e,step:a})=>{await a("Assert the secondary style",async()=>{n(e.getByRole("button")).toHaveClass("bg-rose-700")})}},y={tags:["!dev","!test"],render:()=>s.createElement("div",{className:"flex flex-wrap gap-4"},s.createElement(t,{...d.args}),s.createElement(t,{...u.args}),s.createElement(t,{...g.args}))};var h,f,C;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Enabled Button',
    onClick: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    await step('Clicking the Button should trigger \`onClick\`', async () => {
      await userEvent.click(canvas.getByRole('button'));
      expect(args.onClick).toHaveBeenCalled();
    });
  }
}`,...(C=(f=r.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var S,w,x;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    disabled: true,
    onClick: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const button = canvas.getByRole('button');
    await step('Assert the disabled state', async () => {
      await expect(button).toBeDisabled();
    });
    await step('Clicking the Button should have no effect', async () => {
      await userEvent.click(button);
      expect(args.onClick).not.toHaveBeenCalled();
    });
  }
}`,...(x=(w=o.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var E,A,k;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: () => <div className="flex gap-4">
      <Button {...Enabled.args} />
      <Button {...Disabled.args} />
    </div>
}`,...(k=(A=p.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var R,H,z;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    sizer: Button.sizer.small,
    children: 'Small Button (default)'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the small style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('text-sm');
    });
  }
}`,...(z=(H=l.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var D,_,M;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    sizer: Button.sizer.medium,
    children: 'Medium Button'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the medium style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('text-base');
    });
  }
}`,...(M=(_=c.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var O,L,N;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    sizer: Button.sizer.large,
    children: 'Large Button'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the large style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('text-lg');
    });
  }
}`,...(N=(L=i.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var P,T,F;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: () => <div className="flex flex-wrap items-baseline gap-4">
      <Button {...Small.args} />
      <Button {...Medium.args} />
      <Button {...Large.args} />
    </div>
}`,...(F=(T=m.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var j,K,U;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button (default)'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the primary style', async () => {
      await expect(canvas.getByRole('button')).toHaveClass('bg-indigo-600');
    });
  }
}`,...(U=(K=d.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var Y,q,G;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    flavor: Button.flavor.secondary,
    children: 'Secondary Button'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the secondary style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('bg-gray-100');
    });
  }
}`,...(G=(q=u.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var I,J,Q;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    flavor: Button.flavor.danger,
    children: 'Danger Button'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the secondary style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('bg-rose-700');
    });
  }
}`,...(Q=(J=g.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var V,W,X;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: () => <div className="flex flex-wrap gap-4">
      <Button {...Primary.args} />
      <Button {...Secondary.args} />
      <Button {...Danger.args} />
    </div>
}`,...(X=(W=y.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const ee=["Enabled","Disabled","AllControlStates","Small","Medium","Large","AllSizes","Primary","Secondary","Danger","AllFlavors"],se=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:p,AllFlavors:y,AllSizes:m,Danger:g,Disabled:o,Enabled:r,Large:i,Medium:c,Primary:d,Secondary:u,Small:l,__namedExportsOrder:ee,default:$},Symbol.toStringTag,{value:"Module"}));export{y as A,se as S};
