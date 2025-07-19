import{r as e}from"./iframe-Si2UkeX9.js";import{D as r}from"./index-B36UopcX.js";import{F as s}from"./Fieldset-CwaS_y58.js";const d={title:"Field layouts/Fieldset",component:s},c={tags:["!dev","!test"],args:{children:[e.createElement(r.FormControlPlaceholder,{key:"first",className:"mb-2"}),e.createElement(r.FormControlPlaceholder,{key:"second"})],label:"A label for the fieldset",hint:"A hint about the fieldset’s values",error:"An error message",required:!0}},a={args:{sizer:s.sizer.small,children:[e.createElement(r.FormControlPlaceholder,{key:"first",className:"mb-2"}),e.createElement(r.FormControlPlaceholder,{key:"second"})],label:"Small label",hint:"Small hint",error:"Small error",required:!0}},l={args:{sizer:s.sizer.base,children:[e.createElement(r.FormControlPlaceholder,{key:"first",className:"mb-2"}),e.createElement(r.FormControlPlaceholder,{key:"second"})],label:"Base label",hint:"Base hint",error:"Base error",required:!0}},o={args:{sizer:s.sizer.large,children:[e.createElement(r.FormControlPlaceholder,{key:"first",className:"mb-2"}),e.createElement(r.FormControlPlaceholder,{key:"second"})],label:"Large label",hint:"Large hint",error:"Large error",required:!0}},t={args:{sizer:[s.sizer.small,s.sizer.smBase,s.sizer.mdLarge],children:[e.createElement(r.FormControlPlaceholder,{key:"first",className:"mb-2"}),e.createElement(r.FormControlPlaceholder,{key:"second"})],label:"Responsive label",hint:"Responsive hint",error:"Responsive error",required:!0}},m={tags:["!dev","!test"],render:u=>e.createElement("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-baseline"},e.createElement(s,{...a.args,className:"sm:flex-1"}),e.createElement(s,{...l.args,className:"sm:flex-1"}),e.createElement(s,{...o.args,className:"sm:flex-1"}),e.createElement(s,{...t.args,className:"sm:flex-1"}))},i={args:{children:[e.createElement(r.FormControlPlaceholder,{key:"first",className:"mb-2"}),e.createElement(r.FormControlPlaceholder,{key:"second"})],label:"Select some comparables",error:"These cannot be compared"}},n={args:{children:[e.createElement(r.FormControlPlaceholder,{key:"first",className:"mb-2"}),e.createElement(r.FormControlPlaceholder,{key:"second"})],label:"Your name",required:!0}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  args: {
    children: [<Docs.FormControlPlaceholder key="first" className="mb-2" />, <Docs.FormControlPlaceholder key="second" />],
    label: 'A label for the fieldset',
    hint: 'A hint about the fieldset’s values',
    error: 'An error message',
    required: true
  }
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    sizer: Fieldset.sizer.base,
    children: [<Docs.FormControlPlaceholder key="first" className="mb-2" />, <Docs.FormControlPlaceholder key="second" />],
    label: 'Base label',
    hint: 'Base hint',
    error: 'Base error',
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: [Fieldset.sizer.small, Fieldset.sizer.smBase, Fieldset.sizer.mdLarge],
    children: [<Docs.FormControlPlaceholder key="first" className="mb-2" />, <Docs.FormControlPlaceholder key="second" />],
    label: 'Responsive label',
    hint: 'Responsive hint',
    error: 'Responsive error',
    required: true
  }
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline">
      <Fieldset {...Small.args} className="sm:flex-1" />
      <Fieldset {...Base.args} className="sm:flex-1" />
      <Fieldset {...Large.args} className="sm:flex-1" />
      <Fieldset {...Responsive.args} className="sm:flex-1" />
    </div>
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Docs.FormControlPlaceholder key="first" className="mb-2" />, <Docs.FormControlPlaceholder key="second" />],
    label: 'Select some comparables',
    error: 'These cannot be compared'
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Docs.FormControlPlaceholder key="first" className="mb-2" />, <Docs.FormControlPlaceholder key="second" />],
    label: 'Your name',
    required: true
  }
}`,...n.parameters?.docs?.source}}};const h=["Basic","Small","Base","Large","Responsive","AllSizes","Error","Required"],F=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:m,Base:l,Basic:c,Error:i,Large:o,Required:n,Responsive:t,Small:a,__namedExportsOrder:h,default:d},Symbol.toStringTag,{value:"Module"}));export{c as B,n as R,F as S};
