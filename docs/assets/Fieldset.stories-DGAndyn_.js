import{r as e}from"./iframe-CFM7-Iva.js";import{D as r}from"./index-DMdxv1VE.js";import{F as s}from"./Fieldset-9K3DkLxl.js";const i={title:"Field layouts/Fieldset",component:s},t={tags:["!dev","!test"],args:{children:[e.createElement(r.FormControlPlaceholder,{key:"first",className:"mb-2"}),e.createElement(r.FormControlPlaceholder,{key:"second"})],label:"A label for the fieldset",hint:"A hint about the fieldset’s values",error:"An error message",required:!0}},a={args:{sizer:s.sizer.small,children:[e.createElement(r.FormControlPlaceholder,{key:"first",className:"mb-2"}),e.createElement(r.FormControlPlaceholder,{key:"second"})],label:"Small label",hint:"Small hint",error:"Small error",required:!0}},l={args:{sizer:s.sizer.medium,children:[e.createElement(r.FormControlPlaceholder,{key:"first",className:"mb-2"}),e.createElement(r.FormControlPlaceholder,{key:"second"})],label:"Medium label",hint:"Medium hint",error:"Medium error",required:!0}},o={args:{sizer:s.sizer.large,children:[e.createElement(r.FormControlPlaceholder,{key:"first",className:"mb-2"}),e.createElement(r.FormControlPlaceholder,{key:"second"})],label:"Large label",hint:"Large hint",error:"Large error",required:!0}},c={tags:["!dev","!test"],render:u=>e.createElement("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-baseline"},e.createElement(s,{...a.args,className:"sm:flex-1"}),e.createElement(s,{...l.args,className:"sm:flex-1"}),e.createElement(s,{...o.args,className:"sm:flex-1"}))},m={args:{children:[e.createElement(r.FormControlPlaceholder,{key:"first",className:"mb-2"}),e.createElement(r.FormControlPlaceholder,{key:"second"})],label:"Select some comparables",error:"These cannot be compared"}},d={args:{children:[e.createElement(r.FormControlPlaceholder,{key:"first",className:"mb-2"}),e.createElement(r.FormControlPlaceholder,{key:"second"})],label:"Your name",required:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  args: {
    children: [<Docs.FormControlPlaceholder key="first" className="mb-2" />, <Docs.FormControlPlaceholder key="second" />],
    label: 'A label for the fieldset',
    hint: 'A hint about the fieldset’s values',
    error: 'An error message',
    required: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Fieldset.sizer.small,
    children: [<Docs.FormControlPlaceholder key="first" className="mb-2" />, <Docs.FormControlPlaceholder key="second" />],
    label: 'Small label',
    hint: 'Small hint',
    error: 'Small error',
    required: true
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Fieldset.sizer.medium,
    children: [<Docs.FormControlPlaceholder key="first" className="mb-2" />, <Docs.FormControlPlaceholder key="second" />],
    label: 'Medium label',
    hint: 'Medium hint',
    error: 'Medium error',
    required: true
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Fieldset.sizer.large,
    children: [<Docs.FormControlPlaceholder key="first" className="mb-2" />, <Docs.FormControlPlaceholder key="second" />],
    label: 'Large label',
    hint: 'Large hint',
    error: 'Large error',
    required: true
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline">
      <Fieldset {...Small.args} className="sm:flex-1" />
      <Fieldset {...Medium.args} className="sm:flex-1" />
      <Fieldset {...Large.args} className="sm:flex-1" />
    </div>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Docs.FormControlPlaceholder key="first" className="mb-2" />, <Docs.FormControlPlaceholder key="second" />],
    label: 'Select some comparables',
    error: 'These cannot be compared'
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Docs.FormControlPlaceholder key="first" className="mb-2" />, <Docs.FormControlPlaceholder key="second" />],
    label: 'Your name',
    required: true
  }
}`,...d.parameters?.docs?.source}}};const n=["Basic","Small","Medium","Large","AllSizes","Error","Required"],p=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:c,Basic:t,Error:m,Large:o,Medium:l,Required:d,Small:a,__namedExportsOrder:n,default:i},Symbol.toStringTag,{value:"Module"}));export{t as B,d as R,p as S};
