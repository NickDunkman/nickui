import{r as e}from"./iframe-CFM7-Iva.js";import{D as i}from"./index-DMdxv1VE.js";import{F as r}from"./Field-CmxZFE2p.js";const m={title:"Field layouts/Field",component:r},o={tags:["!dev","!test"],args:{children:e.createElement(i.FormControlPlaceholder,null),label:"A label for the field",hint:"A hint about the field’s value",error:"An error message",required:!0}},l={args:{sizer:r.sizer.small,children:e.createElement(i.FormControlPlaceholder,null),label:"Small label",hint:"Small hint",error:"Small error",controlId:"small-input",required:!0}},a={args:{sizer:r.sizer.medium,children:e.createElement(i.FormControlPlaceholder,null),label:"Medium label",hint:"Medium hint",error:"Medium error",controlId:"medium-input",required:!0}},s={args:{sizer:r.sizer.large,children:e.createElement(i.FormControlPlaceholder,null),label:"Large label",hint:"Large hint",error:"Large error",controlId:"large-input",required:!0}},t={tags:["!dev","!test"],render:d=>e.createElement("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-baseline"},e.createElement(r,{...l.args,className:"sm:flex-1"}),e.createElement(r,{...a.args,className:"sm:flex-1"}),e.createElement(r,{...s.args,className:"sm:flex-1"}))},n={args:{children:e.createElement(i.FormControlPlaceholder,null),label:"Necessary information",controlId:"required-input",required:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  args: {
    children: <Docs.FormControlPlaceholder />,
    label: 'A label for the field',
    hint: 'A hint about the field’s value',
    error: 'An error message',
    required: true
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Field.sizer.small,
    children: <Docs.FormControlPlaceholder />,
    label: 'Small label',
    hint: 'Small hint',
    error: 'Small error',
    controlId: 'small-input',
    required: true
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Field.sizer.medium,
    children: <Docs.FormControlPlaceholder />,
    label: 'Medium label',
    hint: 'Medium hint',
    error: 'Medium error',
    controlId: 'medium-input',
    required: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Field.sizer.large,
    children: <Docs.FormControlPlaceholder />,
    label: 'Large label',
    hint: 'Large hint',
    error: 'Large error',
    controlId: 'large-input',
    required: true
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline">
      <Field {...Small.args} className="sm:flex-1" />
      <Field {...Medium.args} className="sm:flex-1" />
      <Field {...Large.args} className="sm:flex-1" />
    </div>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Docs.FormControlPlaceholder />,
    label: 'Necessary information',
    controlId: 'required-input',
    required: true
  }
}`,...n.parameters?.docs?.source}}};const c=["Basic","Small","Medium","Large","AllSizes","Required"],h=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:t,Basic:o,Large:s,Medium:a,Required:n,Small:l,__namedExportsOrder:c,default:m},Symbol.toStringTag,{value:"Module"}));export{o as B,n as R,h as S};
