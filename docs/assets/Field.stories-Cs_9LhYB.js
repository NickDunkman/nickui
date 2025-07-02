import{r as e}from"./iframe-X96kWO4h.js";import{d as s}from"./TableOfContents-Bz5P9avz.js";import{F as r}from"./Field-DoANmJJ6.js";const C={title:"Field layouts/Field",component:r},o={tags:["!dev","!test"],args:{children:e.createElement(s,null),label:"A label for the field",explainer:"An explanation about the field",hint:"A hint about the field’s value",controlId:"basic-input"}},a={args:{sizer:r.sizer.small,children:e.createElement(s,null),label:"Small label",explainer:"Small explanation",hint:"Small hint",controlId:"small-input"}},l={args:{sizer:r.sizer.medium,children:e.createElement(s,null),label:"Medium label",explainer:"Medium explanation",hint:"Medium hint",controlId:"medium-input"}},n={args:{sizer:r.sizer.large,children:e.createElement(s,null),label:"Large label",explainer:"Large explanation",hint:"Large hint",controlId:"large-input"}},t={tags:["!dev","!test"],render:y=>e.createElement("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-baseline"},e.createElement(r,{...a.args,className:"sm:flex-1"}),e.createElement(r,{...l.args,className:"sm:flex-1"}),e.createElement(r,{...n.args,className:"sm:flex-1"}))},i={args:{children:e.createElement(s,null),label:"Phone number",error:"That is not a valid phone number",errorId:"error-message-id",controlId:"input-with-error"}},c={args:{children:e.createElement(s,null),label:"Necessary information",controlId:"required-input",required:!0}};var m,d,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  args: {
    children: <FormControlPlaceholder />,
    label: 'A label for the field',
    explainer: 'An explanation about the field',
    hint: 'A hint about the field’s value',
    controlId: 'basic-input'
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,g,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    sizer: Field.sizer.small,
    children: <FormControlPlaceholder />,
    label: 'Small label',
    explainer: 'Small explanation',
    hint: 'Small hint',
    controlId: 'small-input'
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,x,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    sizer: Field.sizer.medium,
    children: <FormControlPlaceholder />,
    label: 'Medium label',
    explainer: 'Medium explanation',
    hint: 'Medium hint',
    controlId: 'medium-input'
  }
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var S,F,z;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    sizer: Field.sizer.large,
    children: <FormControlPlaceholder />,
    label: 'Large label',
    explainer: 'Large explanation',
    hint: 'Large hint',
    controlId: 'large-input'
  }
}`,...(z=(F=n.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var E,I,v;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline">
      <Field {...Small.args} className="sm:flex-1" />
      <Field {...Medium.args} className="sm:flex-1" />
      <Field {...Large.args} className="sm:flex-1" />
    </div>
}`,...(v=(I=t.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var M,N,P;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    children: <FormControlPlaceholder />,
    label: 'Phone number',
    error: 'That is not a valid phone number',
    errorId: 'error-message-id',
    controlId: 'input-with-error'
  }
}`,...(P=(N=i.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var A,L,_;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: <FormControlPlaceholder />,
    label: 'Necessary information',
    controlId: 'required-input',
    required: true
  }
}`,...(_=(L=c.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const q=["Basic","Small","Medium","Large","AllSizes","Error","Required"],R=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:t,Basic:o,Error:i,Large:n,Medium:l,Required:c,Small:a,__namedExportsOrder:q,default:C},Symbol.toStringTag,{value:"Module"}));export{t as A,o as B,i as E,c as R,R as S};
