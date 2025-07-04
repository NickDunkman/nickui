import{r}from"./iframe-CNIcN4QC.js";import{C as e}from"./Checkbox-czKpVfd3.js";const R={title:"Form controls/Checkbox",component:e},m={tags:["!dev","!test"],args:{label:"A label",explainer:"An explainer"}},a={args:{label:"Unchecked Checkbox"}},s={args:{label:"Controlled Checkbox",checked:!0,onChange:()=>{}}},l={args:{label:"Uncontrolled Checkbox",defaultChecked:!0}},c={args:{label:"Disabled Checkbox",disabled:!0}},o={args:{label:"Disabled & checked Checkbox",disabled:!0,defaultChecked:!0}},i={tags:["!dev","!test"],render:Q=>r.createElement("div",{className:"flex flex-col gap-4"},r.createElement(e,{...a.args}),r.createElement(e,{...s.args}),r.createElement(e,{...l.args}),r.createElement(e,{...c.args}),r.createElement(e,{...o.args}))},t={args:{sizer:e.sizer.small,label:"Small Checkbox (default)",defaultChecked:!0}},n={args:{sizer:e.sizer.medium,label:"Medium Checkbox",defaultChecked:!0}},d={args:{sizer:e.sizer.large,label:"Large Checkbox",defaultChecked:!0}},u={tags:["!dev","!test"],render:Q=>r.createElement("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-baseline"},r.createElement(e,{...t.args,className:"sm:flex-1"}),r.createElement(e,{...n.args,className:"sm:flex-1"}),r.createElement(e,{...d.args,className:"sm:flex-1"}))};var g,b,p;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  args: {
    label: 'A label',
    explainer: 'An explainer'
  }
}`,...(p=(b=m.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var h,C,k;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Unchecked Checkbox'
  }
}`,...(k=(C=a.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var x,f,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Controlled Checkbox',
    checked: true,
    onChange: () => {}
  }
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var z,v,E;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Uncontrolled Checkbox',
    defaultChecked: true
  }
}`,...(E=(v=l.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var D,N,U;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Checkbox',
    disabled: true
  }
}`,...(U=(N=c.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var _,A,L;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Disabled & checked Checkbox',
    disabled: true,
    defaultChecked: true
  }
}`,...(L=(A=o.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var M,y,F;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Checkbox {...Unchecked.args} />
      <Checkbox {...Controlled.args} />
      <Checkbox {...Uncontrolled.args} />
      <Checkbox {...Disabled.args} />
      <Checkbox {...DisabledChecked.args} />
    </div>
}`,...(F=(y=i.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var O,j,w;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    sizer: Checkbox.sizer.small,
    label: 'Small Checkbox (default)',
    defaultChecked: true
  }
}`,...(w=(j=t.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var P,T,q;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    sizer: Checkbox.sizer.medium,
    label: 'Medium Checkbox',
    defaultChecked: true
  }
}`,...(q=(T=n.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var B,G,H;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    sizer: Checkbox.sizer.large,
    label: 'Large Checkbox',
    defaultChecked: true
  }
}`,...(H=(G=d.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var I,J,K;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline">
      <Checkbox {...Small.args} className="sm:flex-1" />
      <Checkbox {...Medium.args} className="sm:flex-1" />
      <Checkbox {...Large.args} className="sm:flex-1" />
    </div>
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const V=["CheckedFieldLayout","Unchecked","Controlled","Uncontrolled","Disabled","DisabledChecked","AllControlStates","Small","Medium","Large","AllSizes"],Y=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:i,AllSizes:u,CheckedFieldLayout:m,Controlled:s,Disabled:c,DisabledChecked:o,Large:d,Medium:n,Small:t,Unchecked:a,Uncontrolled:l,__namedExportsOrder:V,default:R},Symbol.toStringTag,{value:"Module"}));export{Y as S};
