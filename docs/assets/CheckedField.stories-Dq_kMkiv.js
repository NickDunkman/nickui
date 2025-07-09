import{r as e}from"./iframe-BC9w-kBM.js";import{D as n}from"./index-D6hw1hnd.js";import{C as r}from"./CheckedField-LfrKJ4zx.js";const y={title:"Field layouts/CheckedField",component:r},t={tags:["!dev","!test"],args:{children:e.createElement(n.FormControlPlaceholder,{tiny:!0}),label:"A label for the field",hint:"A hint for the field"}},a={args:{sizer:r.sizer.small,children:e.createElement(n.FormControlPlaceholder,{tiny:!0}),label:"Small label",hint:"Small hint"}},l={args:{sizer:r.sizer.medium,children:e.createElement(n.FormControlPlaceholder,{tiny:!0}),label:"Medium label",hint:"Medium hint"}},s={args:{sizer:r.sizer.large,children:e.createElement(n.FormControlPlaceholder,{tiny:!0}),label:"Large label",hint:"Large hint"}},o={tags:["!dev","!test"],render:P=>e.createElement("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-baseline"},e.createElement(r,{...a.args,className:"sm:flex-1"}),e.createElement(r,{...l.args,className:"sm:flex-1"}),e.createElement(r,{...s.args,className:"sm:flex-1"}))};var i,c,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  args: {
    children: <Docs.FormControlPlaceholder tiny />,
    label: 'A label for the field',
    hint: 'A hint for the field'
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,h,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    sizer: CheckedField.sizer.small,
    children: <Docs.FormControlPlaceholder tiny />,
    label: 'Small label',
    hint: 'Small hint'
  }
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,p,f;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    sizer: CheckedField.sizer.medium,
    children: <Docs.FormControlPlaceholder tiny />,
    label: 'Medium label',
    hint: 'Medium hint'
  }
}`,...(f=(p=l.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var b,S,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    sizer: CheckedField.sizer.large,
    children: <Docs.FormControlPlaceholder tiny />,
    label: 'Large label',
    hint: 'Large hint'
  }
}`,...(C=(S=s.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var F,x,z;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline">
      <CheckedField {...Small.args} className="sm:flex-1" />
      <CheckedField {...Medium.args} className="sm:flex-1" />
      <CheckedField {...Large.args} className="sm:flex-1" />
    </div>
}`,...(z=(x=o.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};const E=["Basic","Small","Medium","Large","AllSizes"],N=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:o,Basic:t,Large:s,Medium:l,Small:a,__namedExportsOrder:E,default:y},Symbol.toStringTag,{value:"Module"}));export{t as B,N as S};
