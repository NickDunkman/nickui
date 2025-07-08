import{r as e}from"./iframe-BCtXYBx8.js";import{D as i}from"./index-BtRx1SY2.js";import{F as r}from"./Field-G2cuWQTP.js";const M={title:"Field layouts/Field",component:r},o={tags:["!dev","!test"],args:{children:e.createElement(i.FormControlPlaceholder,null),label:"A label for the field",hint:"A hint about the field’s value",error:"An error message",required:!0}},l={args:{sizer:r.sizer.small,children:e.createElement(i.FormControlPlaceholder,null),label:"Small label",hint:"Small hint",error:"Small error",controlId:"small-input",required:!0}},a={args:{sizer:r.sizer.medium,children:e.createElement(i.FormControlPlaceholder,null),label:"Medium label",hint:"Medium hint",error:"Medium error",controlId:"medium-input",required:!0}},s={args:{sizer:r.sizer.large,children:e.createElement(i.FormControlPlaceholder,null),label:"Large label",hint:"Large hint",error:"Large error",controlId:"large-input",required:!0}},t={tags:["!dev","!test"],render:L=>e.createElement("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-baseline"},e.createElement(r,{...l.args,className:"sm:flex-1"}),e.createElement(r,{...a.args,className:"sm:flex-1"}),e.createElement(r,{...s.args,className:"sm:flex-1"}))},n={args:{children:e.createElement(i.FormControlPlaceholder,null),label:"Necessary information",controlId:"required-input",required:!0}};var m,c,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  args: {
    children: <Docs.FormControlPlaceholder />,
    label: 'A label for the field',
    hint: 'A hint about the field’s value',
    error: 'An error message',
    required: true
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,g,p;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    sizer: Field.sizer.small,
    children: <Docs.FormControlPlaceholder />,
    label: 'Small label',
    hint: 'Small hint',
    error: 'Small error',
    controlId: 'small-input',
    required: true
  }
}`,...(p=(g=l.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var h,f,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    sizer: Field.sizer.medium,
    children: <Docs.FormControlPlaceholder />,
    label: 'Medium label',
    hint: 'Medium hint',
    error: 'Medium error',
    controlId: 'medium-input',
    required: true
  }
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var S,F,x;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    sizer: Field.sizer.large,
    children: <Docs.FormControlPlaceholder />,
    label: 'Large label',
    hint: 'Large hint',
    error: 'Large error',
    controlId: 'large-input',
    required: true
  }
}`,...(x=(F=s.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};var z,q,E;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline">
      <Field {...Small.args} className="sm:flex-1" />
      <Field {...Medium.args} className="sm:flex-1" />
      <Field {...Large.args} className="sm:flex-1" />
    </div>
}`,...(E=(q=t.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var P,v,C;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: <Docs.FormControlPlaceholder />,
    label: 'Necessary information',
    controlId: 'required-input',
    required: true
  }
}`,...(C=(v=n.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};const N=["Basic","Small","Medium","Large","AllSizes","Required"],D=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:t,Basic:o,Large:s,Medium:a,Required:n,Small:l,__namedExportsOrder:N,default:M},Symbol.toStringTag,{value:"Module"}));export{o as B,n as R,D as S};
