import{r as t}from"./iframe-LKk278Jc.js";import{B as a}from"./Button-CFJt000I.js";const{expect:n,fn:X}=__STORYBOOK_MODULE_TEST__,Z={title:"Form controls/Button",component:a},s={args:{children:"Enabled Button",onClick:X()},play:async({args:e,canvas:v,userEvent:B})=>{const r=v.getByRole("button");await n(r).toBeInTheDocument(),await B.click(r),await n(e.onClick).toHaveBeenCalled()}},o={args:{children:"Disabled Button",disabled:!0,onClick:X()},play:async({args:e,canvas:v,userEvent:B})=>{const r=v.getByRole("button");await n(r).toBeInTheDocument(),await n(r).toBeDisabled(),await B.click(r),await n(e.onClick).not.toHaveBeenCalled()}},m={tags:["!dev","!test"],render:e=>t.createElement("div",{className:"flex gap-4"},t.createElement(a,{...s.args}),t.createElement(a,{...o.args}))},c={args:{sizer:a.sizer.small,children:"Small Button (default)"},play:async({canvas:e})=>{await n(e.getByRole("button")).toHaveClass("text-sm")}},l={args:{sizer:a.sizer.medium,children:"Medium Button"},play:async({canvas:e})=>{await n(e.getByRole("button")).toHaveClass("text-base")}},i={args:{sizer:a.sizer.large,children:"Large Button"},play:async({canvas:e})=>{await n(e.getByRole("button")).toHaveClass("text-lg")}},p={tags:["!dev","!test"],render:e=>t.createElement("div",{className:"flex flex-wrap items-baseline gap-4"},t.createElement(a,{...c.args}),t.createElement(a,{...l.args}),t.createElement(a,{...i.args}))},d={args:{children:"Primary Button (default)"},play:async({canvas:e})=>{await n(e.getByRole("button")).toHaveClass("bg-indigo-600")}},u={args:{flavor:a.flavor.secondary,children:"Secondary Button"},play:async({canvas:e})=>{await n(e.getByRole("button")).toHaveClass("bg-gray-100")}},g={args:{flavor:a.flavor.danger,children:"Danger Button"},play:async({canvas:e})=>{await n(e.getByRole("button")).toHaveClass("bg-rose-700")}},y={tags:["!dev","!test"],render:e=>t.createElement("div",{className:"flex flex-wrap gap-4"},t.createElement(a,{...d.args}),t.createElement(a,{...u.args}),t.createElement(a,{...g.args}))};var b,x,S;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Enabled Button',
    onClick: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  }
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var f,w,C;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    disabled: true,
    onClick: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(button).toBeDisabled();
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  }
}`,...(C=(w=o.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var E,h,_;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex gap-4">
      <Button {...Enabled.args} />
      <Button {...Disabled.args} />
    </div>
}`,...(_=(h=m.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var D,R,H;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    sizer: Button.sizer.small,
    children: 'Small Button (default)'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('button')).toHaveClass('text-sm');
  }
}`,...(H=(R=c.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var z,k,T;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    sizer: Button.sizer.medium,
    children: 'Medium Button'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('button')).toHaveClass('text-base');
  }
}`,...(T=(k=l.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var A,M,O;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    sizer: Button.sizer.large,
    children: 'Large Button'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('button')).toHaveClass('text-lg');
  }
}`,...(O=(M=i.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var L,N,P;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-wrap items-baseline gap-4">
      <Button {...Small.args} />
      <Button {...Medium.args} />
      <Button {...Large.args} />
    </div>
}`,...(P=(N=p.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var I,F,j;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button (default)'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('button')).toHaveClass('bg-indigo-600');
  }
}`,...(j=(F=d.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var K,U,Y;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    flavor: Button.flavor.secondary,
    children: 'Secondary Button'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('button')).toHaveClass('bg-gray-100');
  }
}`,...(Y=(U=u.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var q,G,J;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    flavor: Button.flavor.danger,
    children: 'Danger Button'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('button')).toHaveClass('bg-rose-700');
  }
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,V,W;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-wrap gap-4">
      <Button {...Primary.args} />
      <Button {...Secondary.args} />
      <Button {...Danger.args} />
    </div>
}`,...(W=(V=y.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const $=["Enabled","Disabled","AllControlStates","Small","Medium","Large","AllSizes","Primary","Secondary","Danger","AllFlavors"],te=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:m,AllFlavors:y,AllSizes:p,Danger:g,Disabled:o,Enabled:s,Large:i,Medium:l,Primary:d,Secondary:u,Small:c,__namedExportsOrder:$,default:Z},Symbol.toStringTag,{value:"Module"}));export{y as A,te as S};
