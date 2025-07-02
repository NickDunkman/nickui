import{r as e}from"./iframe-X96kWO4h.js";import{d as o}from"./TableOfContents-Bz5P9avz.js";import{C as a}from"./CheckedField-BmJ4XiQr.js";const y={title:"Field layouts/CheckedField",component:a},t={tags:["!dev","!test"],args:{children:e.createElement(o,{tiny:!0}),label:"A label for the field",explainer:"An explanation about the field"}},r={args:{sizer:a.sizer.small,children:e.createElement(o,{tiny:!0}),label:"Small label",explainer:"Small explanation"}},l={args:{sizer:a.sizer.medium,children:e.createElement(o,{tiny:!0}),label:"Medium label",explainer:"Medium explanation"}},s={args:{sizer:a.sizer.large,children:e.createElement(o,{tiny:!0}),label:"Large label",explainer:"Large explanation"}},n={tags:["!dev","!test"],render:k=>e.createElement("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-baseline"},e.createElement(a,{...r.args,className:"sm:flex-1"}),e.createElement(a,{...l.args,className:"sm:flex-1"}),e.createElement(a,{...s.args,className:"sm:flex-1"}))};var i,c,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  args: {
    children: <FormControlPlaceholder tiny />,
    label: 'A label for the field',
    explainer: 'An explanation about the field'
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,p,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    sizer: CheckedField.sizer.small,
    children: <FormControlPlaceholder tiny />,
    label: 'Small label',
    explainer: 'Small explanation'
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,x,h;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    sizer: CheckedField.sizer.medium,
    children: <FormControlPlaceholder tiny />,
    label: 'Medium label',
    explainer: 'Medium explanation'
  }
}`,...(h=(x=l.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var f,b,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    sizer: CheckedField.sizer.large,
    children: <FormControlPlaceholder tiny />,
    label: 'Large label',
    explainer: 'Large explanation'
  }
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var z,C,F;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline">
      <CheckedField {...Small.args} className="sm:flex-1" />
      <CheckedField {...Medium.args} className="sm:flex-1" />
      <CheckedField {...Large.args} className="sm:flex-1" />
    </div>
}`,...(F=(C=n.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const E=["Basic","Small","Medium","Large","AllSizes"],_=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:n,Basic:t,Large:s,Medium:l,Small:r,__namedExportsOrder:E,default:y},Symbol.toStringTag,{value:"Module"}));export{n as A,t as B,_ as S};
