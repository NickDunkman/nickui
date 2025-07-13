import{r as e}from"./iframe-DzZ2548y.js";import{D as n}from"./index-BZFlQj2E.js";import{C as r}from"./CheckedField-B62_0hA1.js";const i={title:"Field layouts/CheckedField",component:r},t={tags:["!dev","!test"],args:{children:e.createElement(n.FormControlPlaceholder,{tiny:!0}),label:"A label for the field",hint:"A hint for the field"}},a={args:{sizer:r.sizer.small,children:e.createElement(n.FormControlPlaceholder,{tiny:!0}),label:"Small label",hint:"Small hint"}},l={args:{sizer:r.sizer.medium,children:e.createElement(n.FormControlPlaceholder,{tiny:!0}),label:"Medium label",hint:"Medium hint"}},s={args:{sizer:r.sizer.large,children:e.createElement(n.FormControlPlaceholder,{tiny:!0}),label:"Large label",hint:"Large hint"}},o={tags:["!dev","!test"],render:m=>e.createElement("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-baseline"},e.createElement(r,{...a.args,className:"sm:flex-1"}),e.createElement(r,{...l.args,className:"sm:flex-1"}),e.createElement(r,{...s.args,className:"sm:flex-1"}))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  args: {
    children: <Docs.FormControlPlaceholder tiny />,
    label: 'A label for the field',
    hint: 'A hint for the field'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: CheckedField.sizer.small,
    children: <Docs.FormControlPlaceholder tiny />,
    label: 'Small label',
    hint: 'Small hint'
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: CheckedField.sizer.medium,
    children: <Docs.FormControlPlaceholder tiny />,
    label: 'Medium label',
    hint: 'Medium hint'
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: CheckedField.sizer.large,
    children: <Docs.FormControlPlaceholder tiny />,
    label: 'Large label',
    hint: 'Large hint'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline">
      <CheckedField {...Small.args} className="sm:flex-1" />
      <CheckedField {...Medium.args} className="sm:flex-1" />
      <CheckedField {...Large.args} className="sm:flex-1" />
    </div>
}`,...o.parameters?.docs?.source}}};const c=["Basic","Small","Medium","Large","AllSizes"],u=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:o,Basic:t,Large:s,Medium:l,Small:a,__namedExportsOrder:c,default:i},Symbol.toStringTag,{value:"Module"}));export{t as B,u as S};
