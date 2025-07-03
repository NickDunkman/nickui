import{r as e}from"./iframe-B7C3MqEt.js";import{D as n}from"./index-DY58uIAq.js";import{C as a}from"./CheckedField-BYZi5191.js";const y={title:"Field layouts/CheckedField",component:a},o={tags:["!dev","!test"],args:{children:e.createElement(n.FormControlPlaceholder,{tiny:!0}),label:"A label for the field",explainer:"An explanation about the field"}},r={args:{sizer:a.sizer.small,children:e.createElement(n.FormControlPlaceholder,{tiny:!0}),label:"Small label",explainer:"Small explanation"}},l={args:{sizer:a.sizer.medium,children:e.createElement(n.FormControlPlaceholder,{tiny:!0}),label:"Medium label",explainer:"Medium explanation"}},s={args:{sizer:a.sizer.large,children:e.createElement(n.FormControlPlaceholder,{tiny:!0}),label:"Large label",explainer:"Large explanation"}},t={tags:["!dev","!test"],render:P=>e.createElement("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-baseline"},e.createElement(a,{...r.args,className:"sm:flex-1"}),e.createElement(a,{...l.args,className:"sm:flex-1"}),e.createElement(a,{...s.args,className:"sm:flex-1"}))};var i,c,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  args: {
    children: <Docs.FormControlPlaceholder tiny />,
    label: 'A label for the field',
    explainer: 'An explanation about the field'
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,p,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    sizer: CheckedField.sizer.small,
    children: <Docs.FormControlPlaceholder tiny />,
    label: 'Small label',
    explainer: 'Small explanation'
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,x,h;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    sizer: CheckedField.sizer.medium,
    children: <Docs.FormControlPlaceholder tiny />,
    label: 'Medium label',
    explainer: 'Medium explanation'
  }
}`,...(h=(x=l.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var f,b,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    sizer: CheckedField.sizer.large,
    children: <Docs.FormControlPlaceholder tiny />,
    label: 'Large label',
    explainer: 'Large explanation'
  }
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var C,F,z;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline">
      <CheckedField {...Small.args} className="sm:flex-1" />
      <CheckedField {...Medium.args} className="sm:flex-1" />
      <CheckedField {...Large.args} className="sm:flex-1" />
    </div>
}`,...(z=(F=t.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};const E=["Basic","Small","Medium","Large","AllSizes"],N=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:t,Basic:o,Large:s,Medium:l,Small:r,__namedExportsOrder:E,default:y},Symbol.toStringTag,{value:"Module"}));export{t as A,o as B,N as S};
