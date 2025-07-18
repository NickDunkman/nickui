import{r as e}from"./iframe-D0vVQOb0.js";import{D as i}from"./index-D6ddxMym.js";import{C as r}from"./CheckedField-BcldtJ2D.js";const c={title:"Field layouts/CheckedField",component:r},o={tags:["!dev","!test"],args:{children:e.createElement(i.FormControlPlaceholder,{tiny:!0}),label:"A label for the field",hint:"A hint for the field"}},s={args:{sizer:r.sizer.small,children:e.createElement(i.FormControlPlaceholder,{tiny:!0}),label:"Small label",hint:"Small hint"}},a={args:{sizer:r.sizer.base,children:e.createElement(i.FormControlPlaceholder,{tiny:!0}),label:"Base label",hint:"Base hint"}},l={args:{sizer:r.sizer.large,children:e.createElement(i.FormControlPlaceholder,{tiny:!0}),label:"Large label",hint:"Large hint"}},t={tags:["!test"],args:{sizer:[r.sizer.smBase,r.sizer.mdLarge],children:e.createElement(i.FormControlPlaceholder,{tiny:!0}),label:"Responsive label",hint:"Responsive hint"}},n={tags:["!dev","!test"],render:d=>e.createElement("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-baseline"},e.createElement(r,{...s.args,className:"sm:flex-1"}),e.createElement(r,{...a.args,className:"sm:flex-1"}),e.createElement(r,{...l.args,className:"sm:flex-1"}),e.createElement(r,{...t.args,className:"sm:flex-1"}))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  args: {
    children: <Docs.FormControlPlaceholder tiny />,
    label: 'A label for the field',
    hint: 'A hint for the field'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: CheckedField.sizer.small,
    children: <Docs.FormControlPlaceholder tiny />,
    label: 'Small label',
    hint: 'Small hint'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: CheckedField.sizer.base,
    children: <Docs.FormControlPlaceholder tiny />,
    label: 'Base label',
    hint: 'Base hint'
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: CheckedField.sizer.large,
    children: <Docs.FormControlPlaceholder tiny />,
    label: 'Large label',
    hint: 'Large hint'
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  args: {
    sizer: [CheckedField.sizer.smBase, CheckedField.sizer.mdLarge],
    children: <Docs.FormControlPlaceholder tiny />,
    label: 'Responsive label',
    hint: 'Responsive hint'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline">
      <CheckedField {...Small.args} className="sm:flex-1" />
      <CheckedField {...Base.args} className="sm:flex-1" />
      <CheckedField {...Large.args} className="sm:flex-1" />
      <CheckedField {...Responsive.args} className="sm:flex-1" />
    </div>
}`,...n.parameters?.docs?.source}}};const m=["Basic","Small","Base","Large","Responsive","AllSizes"],f=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:n,Base:a,Basic:o,Large:l,Responsive:t,Small:s,__namedExportsOrder:m,default:c},Symbol.toStringTag,{value:"Module"}));export{o as B,f as S};
