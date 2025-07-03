import{r as e}from"./iframe-B7C3MqEt.js";import{D as o}from"./index-DY58uIAq.js";import{F as r}from"./Field-BhBoxO2S.js";const D={title:"Field layouts/Field",component:r},s={tags:["!dev","!test"],args:{children:e.createElement(o.FormControlPlaceholder,null),label:"A label for the field",explainer:"An explanation about the field",hint:"A hint about the field’s value",controlId:"basic-input"}},a={args:{sizer:r.sizer.small,children:e.createElement(o.FormControlPlaceholder,null),label:"Small label",explainer:"Small explanation",hint:"Small hint",controlId:"small-input"}},l={args:{sizer:r.sizer.medium,children:e.createElement(o.FormControlPlaceholder,null),label:"Medium label",explainer:"Medium explanation",hint:"Medium hint",controlId:"medium-input"}},n={args:{sizer:r.sizer.large,children:e.createElement(o.FormControlPlaceholder,null),label:"Large label",explainer:"Large explanation",hint:"Large hint",controlId:"large-input"}},t={tags:["!dev","!test"],render:q=>e.createElement("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-baseline"},e.createElement(r,{...a.args,className:"sm:flex-1"}),e.createElement(r,{...l.args,className:"sm:flex-1"}),e.createElement(r,{...n.args,className:"sm:flex-1"}))},i={args:{children:e.createElement(o.FormControlPlaceholder,null),label:"Phone number",error:"That is not a valid phone number",errorId:"error-message-id",controlId:"input-with-error"}},c={args:{children:e.createElement(o.FormControlPlaceholder,null),label:"Necessary information",controlId:"required-input",required:!0}};var m,d,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  args: {
    children: <Docs.FormControlPlaceholder />,
    label: 'A label for the field',
    explainer: 'An explanation about the field',
    hint: 'A hint about the field’s value',
    controlId: 'basic-input'
  }
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,h,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    sizer: Field.sizer.small,
    children: <Docs.FormControlPlaceholder />,
    label: 'Small label',
    explainer: 'Small explanation',
    hint: 'Small hint',
    controlId: 'small-input'
  }
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,x,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    sizer: Field.sizer.medium,
    children: <Docs.FormControlPlaceholder />,
    label: 'Medium label',
    explainer: 'Medium explanation',
    hint: 'Medium hint',
    controlId: 'medium-input'
  }
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var F,S,z;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    sizer: Field.sizer.large,
    children: <Docs.FormControlPlaceholder />,
    label: 'Large label',
    explainer: 'Large explanation',
    hint: 'Large hint',
    controlId: 'large-input'
  }
}`,...(z=(S=n.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var E,P,I;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline">
      <Field {...Small.args} className="sm:flex-1" />
      <Field {...Medium.args} className="sm:flex-1" />
      <Field {...Large.args} className="sm:flex-1" />
    </div>
}`,...(I=(P=t.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var v,C,M;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: <Docs.FormControlPlaceholder />,
    label: 'Phone number',
    error: 'That is not a valid phone number',
    errorId: 'error-message-id',
    controlId: 'input-with-error'
  }
}`,...(M=(C=i.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var N,A,L;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: <Docs.FormControlPlaceholder />,
    label: 'Necessary information',
    controlId: 'required-input',
    required: true
  }
}`,...(L=(A=c.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};const _=["Basic","Small","Medium","Large","AllSizes","Error","Required"],O=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:t,Basic:s,Error:i,Large:n,Medium:l,Required:c,Small:a,__namedExportsOrder:_,default:D},Symbol.toStringTag,{value:"Module"}));export{t as A,s as B,i as E,c as R,O as S};
