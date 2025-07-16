import{r as e}from"./iframe-fqey7XDt.js";import{D as n}from"./index-fdQJjN6u.js";import{F as r}from"./Field-DwUnx4Sz.js";const c={title:"Field layouts/Field",component:r},t={tags:["!dev","!test"],args:{children:e.createElement(n.FormControlPlaceholder,null),label:"A label for the field",hint:"A hint about the field’s value",error:"An error message",required:!0}},s={args:{sizer:r.sizer.small,children:e.createElement(n.FormControlPlaceholder,null),label:"Small label",hint:"Small hint",error:"Small error",required:!0}},a={args:{sizer:r.sizer.medium,children:e.createElement(n.FormControlPlaceholder,null),label:"Medium label",hint:"Medium hint",error:"Medium error",required:!0}},l={args:{sizer:r.sizer.large,children:e.createElement(n.FormControlPlaceholder,null),label:"Large label",hint:"Large hint",error:"Large error",required:!0}},o={tags:["!test"],args:{sizer:[r.sizer.smMedium,r.sizer.mdLarge],children:e.createElement(n.FormControlPlaceholder,null),label:"Responsive label",hint:"Responsive hint",error:"Responsive error",required:!0}},i={args:{children:e.createElement(n.FormControlPlaceholder,null),label:"Necessary information",controlId:"required-input",required:!0}},m={tags:["!dev","!test"],render:u=>e.createElement("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-baseline"},e.createElement(r,{...s.args,className:"sm:flex-1"}),e.createElement(r,{...a.args,className:"sm:flex-1"}),e.createElement(r,{...l.args,className:"sm:flex-1"}),e.createElement(r,{...o.args,className:"sm:flex-1"}))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  args: {
    children: <Docs.FormControlPlaceholder />,
    label: 'A label for the field',
    hint: 'A hint about the field’s value',
    error: 'An error message',
    required: true
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Field.sizer.small,
    children: <Docs.FormControlPlaceholder />,
    label: 'Small label',
    hint: 'Small hint',
    error: 'Small error',
    required: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Field.sizer.medium,
    children: <Docs.FormControlPlaceholder />,
    label: 'Medium label',
    hint: 'Medium hint',
    error: 'Medium error',
    required: true
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Field.sizer.large,
    children: <Docs.FormControlPlaceholder />,
    label: 'Large label',
    hint: 'Large hint',
    error: 'Large error',
    required: true
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  args: {
    sizer: [Field.sizer.smMedium, Field.sizer.mdLarge],
    children: <Docs.FormControlPlaceholder />,
    label: 'Responsive label',
    hint: 'Responsive hint',
    error: 'Responsive error',
    required: true
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Docs.FormControlPlaceholder />,
    label: 'Necessary information',
    controlId: 'required-input',
    required: true
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline">
      <Field {...Small.args} className="sm:flex-1" />
      <Field {...Medium.args} className="sm:flex-1" />
      <Field {...Large.args} className="sm:flex-1" />
      <Field {...Responsive.args} className="sm:flex-1" />
    </div>
}`,...m.parameters?.docs?.source}}};const d=["Basic","Small","Medium","Large","Responsive","Required","AllSizes"],b=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:m,Basic:t,Large:l,Medium:a,Required:i,Responsive:o,Small:s,__namedExportsOrder:d,default:c},Symbol.toStringTag,{value:"Module"}));export{t as B,i as R,b as S};
