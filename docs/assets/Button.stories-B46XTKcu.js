import{r}from"./iframe-BOtqaFuv.js";import{B as e}from"./Button-CvW9Qwd1.js";const U={title:"Form controls/Button",component:e},a={args:{children:"Enabled Button"}},s={args:{children:"Disabled Button",disabled:!0}},m={tags:["!dev","!test"],render:g=>r.createElement("div",{className:"flex gap-4"},r.createElement(e,{...a.args}),r.createElement(e,{...s.args}))},t={args:{sizer:e.sizer.small,children:"Small Button (default)"}},o={args:{sizer:e.sizer.medium,children:"Medium Button"}},n={args:{sizer:e.sizer.large,children:"Large Button"}},i={tags:["!dev","!test"],render:g=>r.createElement("div",{className:"flex flex-wrap items-baseline gap-4"},r.createElement(e,{...t.args}),r.createElement(e,{...o.args}),r.createElement(e,{...n.args}))},c={args:{children:"Primary Button (default)"}},l={args:{flavor:e.flavor.secondary,children:"Secondary Button"}},d={args:{flavor:e.flavor.danger,children:"Danger Button"}},u={tags:["!dev","!test"],render:g=>r.createElement("div",{className:"flex flex-wrap gap-4"},r.createElement(e,{...c.args}),r.createElement(e,{...l.args}),r.createElement(e,{...d.args}))};var p,B,S;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Enabled Button'
  }
}`,...(S=(B=a.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var f,v,E;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    disabled: true
  }
}`,...(E=(v=s.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var b,h,z;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex gap-4">
      <Button {...Enabled.args} />
      <Button {...Disabled.args} />
    </div>
}`,...(z=(h=m.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};var y,x,_;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    sizer: Button.sizer.small,
    children: 'Small Button (default)'
  }
}`,...(_=(x=t.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var D,A,M;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    sizer: Button.sizer.medium,
    children: 'Medium Button'
  }
}`,...(M=(A=o.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var N,P,L;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    sizer: Button.sizer.large,
    children: 'Large Button'
  }
}`,...(L=(P=n.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var w,F,O;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-wrap items-baseline gap-4">
      <Button {...Small.args} />
      <Button {...Medium.args} />
      <Button {...Large.args} />
    </div>
}`,...(O=(F=i.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var j,C,T;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button (default)'
  }
}`,...(T=(C=c.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var k,q,G;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    flavor: Button.flavor.secondary,
    children: 'Secondary Button'
  }
}`,...(G=(q=l.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var H,I,J;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    flavor: Button.flavor.danger,
    children: 'Danger Button'
  }
}`,...(J=(I=d.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var K,Q,R;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-wrap gap-4">
      <Button {...Primary.args} />
      <Button {...Secondary.args} />
      <Button {...Danger.args} />
    </div>
}`,...(R=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};const V=["Enabled","Disabled","AllControlStates","Small","Medium","Large","AllSizes","Primary","Secondary","Danger","AllFlavors"],Y=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:m,AllFlavors:u,AllSizes:i,Danger:d,Disabled:s,Enabled:a,Large:n,Medium:o,Primary:c,Secondary:l,Small:t,__namedExportsOrder:V,default:U},Symbol.toStringTag,{value:"Module"}));export{u as A,Y as S};
