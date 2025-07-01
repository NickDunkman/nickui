import{r as e}from"./iframe-Dcrhn4el.js";import{d as r}from"./TableOfContents-Dhm7B0is.js";import{F as a}from"./Fieldset-CBoLlTZQ.js";const L={title:"Forms/Fieldset",component:a},o={tags:["!dev","!test"],args:{children:[e.createElement(r,{key:"first",className:"mb-2"}),e.createElement(r,{key:"second"})],label:"A label for the fieldset",explainer:"An explanation about the fieldset",hint:"A hint about the fieldset’s values"}},s={args:{sizer:a.sizer.small,children:[e.createElement(r,{key:"first",className:"mb-2"}),e.createElement(r,{key:"second"})],label:"Small label",explainer:"Small explanation",hint:"Small hint"}},l={args:{sizer:a.sizer.medium,children:[e.createElement(r,{key:"first",className:"mb-2"}),e.createElement(r,{key:"second"})],label:"Medium label",explainer:"Medium explanation",hint:"Medium hint"}},t={args:{sizer:a.sizer.large,children:[e.createElement(r,{key:"first",className:"mb-2"}),e.createElement(r,{key:"second"})],label:"Large label",explainer:"Large explanation",hint:"Large hint"}},m={tags:["!dev","!test"],render:q=>e.createElement("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-baseline"},e.createElement(a,{...s.args,className:"sm:flex-1"}),e.createElement(a,{...l.args,className:"sm:flex-1"}),e.createElement(a,{...t.args,className:"sm:flex-1"}))},c={args:{children:[e.createElement(r,{key:"first",className:"mb-2"}),e.createElement(r,{key:"second"})],label:"Select some comparables",error:"These cannot be compared"}},i={args:{children:[e.createElement(r,{key:"first",className:"mb-2"}),e.createElement(r,{key:"second"})],label:"Your name",required:!0}};var n,d,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  args: {
    children: [<FormControlPlaceholder key="first" className="mb-2" />, <FormControlPlaceholder key="second" />],
    label: 'A label for the fieldset',
    explainer: 'An explanation about the fieldset',
    hint: 'A hint about the fieldset’s values'
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    sizer: Fieldset.sizer.small,
    children: [<FormControlPlaceholder key="first" className="mb-2" />, <FormControlPlaceholder key="second" />],
    label: 'Small label',
    explainer: 'Small explanation',
    hint: 'Small hint'
  }
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,f,x;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    sizer: Fieldset.sizer.medium,
    children: [<FormControlPlaceholder key="first" className="mb-2" />, <FormControlPlaceholder key="second" />],
    label: 'Medium label',
    explainer: 'Medium explanation',
    hint: 'Medium hint'
  }
}`,...(x=(f=l.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,k,S;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    sizer: Fieldset.sizer.large,
    children: [<FormControlPlaceholder key="first" className="mb-2" />, <FormControlPlaceholder key="second" />],
    label: 'Large label',
    explainer: 'Large explanation',
    hint: 'Large hint'
  }
}`,...(S=(k=t.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var F,E,N;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline">
      <Fieldset {...Small.args} className="sm:flex-1" />
      <Fieldset {...Medium.args} className="sm:flex-1" />
      <Fieldset {...Large.args} className="sm:flex-1" />
    </div>
}`,...(N=(E=m.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var z,P,C;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: [<FormControlPlaceholder key="first" className="mb-2" />, <FormControlPlaceholder key="second" />],
    label: 'Select some comparables',
    error: 'These cannot be compared'
  }
}`,...(C=(P=c.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var v,M,A;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: [<FormControlPlaceholder key="first" className="mb-2" />, <FormControlPlaceholder key="second" />],
    label: 'Your name',
    required: true
  }
}`,...(A=(M=i.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};const _=["Basic","Small","Medium","Large","AllSizes","Error","Required"],T=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:m,Basic:o,Error:c,Large:t,Medium:l,Required:i,Small:s,__namedExportsOrder:_,default:L},Symbol.toStringTag,{value:"Module"}));export{m as A,o as B,c as E,i as R,T as S};
