import{r as e}from"./iframe-D_dx4C3o.js";import{A as m}from"./AllSizersStoryWrapper-M2xuQLnL.js";import{F as r}from"./FormControlPlaceholder-u8639Ebu.js";import{C as s}from"./CheckedField-8hUungCo.js";const g={title:"Field layouts/CheckedField",component:s},o={tags:["!dev","!test","field-layout"],args:{children:e.createElement(r,{tiny:!0}),label:"A label for the field",hint:"A hint for the field"}},a={tags:["sizer"],args:{sizer:"xs",children:e.createElement(r,{tiny:!0}),label:"Xs label",hint:"Xs hint"}},t={tags:["sizer"],args:{sizer:"sm",children:e.createElement(r,{tiny:!0}),label:"Sm label",hint:"Sm hint"}},n={tags:["sizer"],args:{sizer:"base",children:e.createElement(r,{tiny:!0}),label:"Base label",hint:"Base hint"}},l={tags:["sizer"],args:{sizer:"lg",children:e.createElement(r,{tiny:!0}),label:"Lg label",hint:"Lg hint"}},i={tags:["sizer"],args:{sizer:"xl",children:e.createElement(r,{tiny:!0}),label:"Xl label",hint:"Xl hint"}},c={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],children:e.createElement(r,{tiny:!0}),label:"Responsive label",hint:"Responsive hint"}},d={tags:["!dev","!test"],render:p=>e.createElement(m,{alignBaseline:!0},e.createElement(s,{...a.args}),e.createElement(s,{...t.args}),e.createElement(s,{...n.args}),e.createElement(s,{...l.args}),e.createElement(s,{...i.args}))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test', 'field-layout'],
  args: {
    children: <FormControlPlaceholder tiny />,
    label: 'A label for the field',
    hint: 'A hint for the field'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'xs',
    children: <FormControlPlaceholder tiny />,
    label: 'Xs label',
    hint: 'Xs hint'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'sm',
    children: <FormControlPlaceholder tiny />,
    label: 'Sm label',
    hint: 'Sm hint'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'base',
    children: <FormControlPlaceholder tiny />,
    label: 'Base label',
    hint: 'Base hint'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'lg',
    children: <FormControlPlaceholder tiny />,
    label: 'Lg label',
    hint: 'Lg hint'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'xl',
    children: <FormControlPlaceholder tiny />,
    label: 'Xl label',
    hint: 'Xl hint'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    children: <FormControlPlaceholder tiny />,
    label: 'Responsive label',
    hint: 'Responsive hint'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper alignBaseline>
      <CheckedField {...xs.args} />
      <CheckedField {...sm.args} />
      <CheckedField {...base.args} />
      <CheckedField {...lg.args} />
      <CheckedField {...xl.args} />
    </AllSizersStoryWrapper>
}`,...d.parameters?.docs?.source}}};const h=["basic","xs","sm","base","lg","xl","responsive","allSizers"],S=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:h,allSizers:d,base:n,basic:o,default:g,lg:l,responsive:c,sm:t,xl:i,xs:a},Symbol.toStringTag,{value:"Module"}));export{o as b,S as s};
