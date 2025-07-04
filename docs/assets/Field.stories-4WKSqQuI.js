import{r as e}from"./iframe-TzZJGsUu.js";import{D as i}from"./index-WW582XCB.js";import{F as r}from"./Field-LBrm6X-Q.js";const M={title:"Field layouts/Field",component:r},s={tags:["!dev","!test"],args:{children:e.createElement(i.FormControlPlaceholder,null),label:"A label for the field",explainer:"An explanation about the field",error:"An error message",hint:"A hint about the field’s value"}},a={args:{sizer:r.sizer.small,children:e.createElement(i.FormControlPlaceholder,null),label:"Small label",explainer:"Small explanation",hint:"Small hint",controlId:"small-input"}},l={args:{sizer:r.sizer.medium,children:e.createElement(i.FormControlPlaceholder,null),label:"Medium label",explainer:"Medium explanation",hint:"Medium hint",controlId:"medium-input"}},n={args:{sizer:r.sizer.large,children:e.createElement(i.FormControlPlaceholder,null),label:"Large label",explainer:"Large explanation",hint:"Large hint",controlId:"large-input"}},o={tags:["!dev","!test"],render:L=>e.createElement("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-baseline"},e.createElement(r,{...a.args,className:"sm:flex-1"}),e.createElement(r,{...l.args,className:"sm:flex-1"}),e.createElement(r,{...n.args,className:"sm:flex-1"}))},t={args:{children:e.createElement(i.FormControlPlaceholder,null),label:"Necessary information",controlId:"required-input",required:!0}};var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  args: {
    children: <Docs.FormControlPlaceholder />,
    label: 'A label for the field',
    explainer: 'An explanation about the field',
    error: 'An error message',
    hint: 'A hint about the field’s value'
  }
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,p,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    sizer: Field.sizer.small,
    children: <Docs.FormControlPlaceholder />,
    label: 'Small label',
    explainer: 'Small explanation',
    hint: 'Small hint',
    controlId: 'small-input'
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,x,f;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    sizer: Field.sizer.medium,
    children: <Docs.FormControlPlaceholder />,
    label: 'Medium label',
    explainer: 'Medium explanation',
    hint: 'Medium hint',
    controlId: 'medium-input'
  }
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var b,S,F;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    sizer: Field.sizer.large,
    children: <Docs.FormControlPlaceholder />,
    label: 'Large label',
    explainer: 'Large explanation',
    hint: 'Large hint',
    controlId: 'large-input'
  }
}`,...(F=(S=n.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var z,E,P;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline">
      <Field {...Small.args} className="sm:flex-1" />
      <Field {...Medium.args} className="sm:flex-1" />
      <Field {...Large.args} className="sm:flex-1" />
    </div>
}`,...(P=(E=o.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var v,A,C;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: <Docs.FormControlPlaceholder />,
    label: 'Necessary information',
    controlId: 'required-input',
    required: true
  }
}`,...(C=(A=t.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};const N=["Basic","Small","Medium","Large","AllSizes","Required"],q=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:o,Basic:s,Large:n,Medium:l,Required:t,Small:a,__namedExportsOrder:N,default:M},Symbol.toStringTag,{value:"Module"}));export{s as B,t as R,q as S};
