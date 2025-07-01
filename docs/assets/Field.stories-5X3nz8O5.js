import{r as e}from"./iframe-Cy2zHahl.js";import{d as t}from"./TableOfContents-DHBIliVF.js";import{F as r}from"./Field-O_5kGT2f.js";const C={title:"Forms/Field",component:r},o={tags:["!dev","!test"],args:{children:e.createElement(t,null),label:"A label for the field",explainer:"An explanation about the field",hint:"A hint about the field’s value",controlId:"basic-input"}},a={args:{sizer:r.sizer.small,children:e.createElement(t,null),label:"Small label",explainer:"Small explanation",hint:"Small hint",controlId:"small-input"}},l={args:{sizer:r.sizer.medium,children:e.createElement(t,null),label:"Medium label",explainer:"Medium explanation",hint:"Medium hint",controlId:"medium-input"}},n={args:{sizer:r.sizer.large,children:e.createElement(t,null),label:"Large label",explainer:"Large explanation",hint:"Large hint",controlId:"large-input"}},s={tags:["!dev","!test"],render:w=>e.createElement("div",{className:"flex flex-col gap-5 md:flex-row"},e.createElement("div",{className:"flex-1"},e.createElement(r,{...a.args})),e.createElement("div",{className:"flex-1"},e.createElement(r,{...l.args})),e.createElement("div",{className:"flex-1"},e.createElement(r,{...n.args})))},i={args:{children:e.createElement(t,null),label:"Phone number",error:"That is not a valid phone number",errorId:"error-message-id",controlId:"input-with-error"}},d={args:{children:e.createElement(t,null),label:"Necessary information",controlId:"required-input",required:!0}};var c,m,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  args: {
    children: <FormControlPlaceholder />,
    label: 'A label for the field',
    explainer: 'An explanation about the field',
    hint: 'A hint about the field’s value',
    controlId: 'basic-input'
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var S,v,E;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    sizer: Field.sizer.large,
    children: <FormControlPlaceholder />,
    label: 'Large label',
    explainer: 'Large explanation',
    hint: 'Large hint',
    controlId: 'large-input'
  }
}`,...(E=(v=n.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var F,z,I;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-5 md:flex-row">
      <div className="flex-1">
        <Field {...Small.args} />
      </div>
      <div className="flex-1">
        <Field {...Medium.args} />
      </div>
      <div className="flex-1">
        <Field {...Large.args} />
      </div>
    </div>
}`,...(I=(z=s.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var M,N,P;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    children: <FormControlPlaceholder />,
    label: 'Phone number',
    error: 'That is not a valid phone number',
    errorId: 'error-message-id',
    controlId: 'input-with-error'
  }
}`,...(P=(N=i.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var A,L,_;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: <FormControlPlaceholder />,
    label: 'Necessary information',
    controlId: 'required-input',
    required: true
  }
}`,...(_=(L=d.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const q=["Basic","Small","Medium","Large","AllSizes","Error","Required"],R=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:s,Basic:o,Error:i,Large:n,Medium:l,Required:d,Small:a,__namedExportsOrder:q,default:C},Symbol.toStringTag,{value:"Module"}));export{s as A,o as B,i as E,d as R,R as S};
