import{r as e}from"./iframe-Cy2zHahl.js";import{d as r}from"./TableOfContents-DHBIliVF.js";import{F as a}from"./Fieldset-BxKXxuuY.js";const L={title:"Forms/Fieldset",component:a},o={tags:["!dev","!test"],args:{children:[e.createElement(r,{key:"first",className:"mb-2"}),e.createElement(r,{key:"second"})],label:"A label for the fieldset",explainer:"An explanation about the fieldset",hint:"A hint about the fieldset’s values"}},l={args:{sizer:a.sizer.small,children:[e.createElement(r,{key:"first",className:"mb-2"}),e.createElement(r,{key:"second"})],label:"Small label",explainer:"Small explanation",hint:"Small hint"}},s={args:{sizer:a.sizer.medium,children:[e.createElement(r,{key:"first",className:"mb-2"}),e.createElement(r,{key:"second"})],label:"Medium label",explainer:"Medium explanation",hint:"Medium hint"}},t={args:{sizer:a.sizer.large,children:[e.createElement(r,{key:"first",className:"mb-2"}),e.createElement(r,{key:"second"})],label:"Large label",explainer:"Large explanation",hint:"Large hint"}},c={tags:["!dev","!test"],render:q=>e.createElement("div",{className:"flex flex-col gap-5 md:flex-row"},e.createElement("div",{className:"flex-1"},e.createElement(a,{...l.args})),e.createElement("div",{className:"flex-1"},e.createElement(a,{...s.args})),e.createElement("div",{className:"flex-1"},e.createElement(a,{...t.args})))},m={args:{children:[e.createElement(r,{key:"first",className:"mb-2"}),e.createElement(r,{key:"second"})],label:"Select some comparables",error:"These cannot be compared"}},i={args:{children:[e.createElement(r,{key:"first",className:"mb-2"}),e.createElement(r,{key:"second"})],label:"Your name",required:!0}};var n,d,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  args: {
    children: [<FormControlPlaceholder key="first" className="mb-2" />, <FormControlPlaceholder key="second" />],
    label: 'A label for the fieldset',
    explainer: 'An explanation about the fieldset',
    hint: 'A hint about the fieldset’s values'
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,h,g;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    sizer: Fieldset.sizer.small,
    children: [<FormControlPlaceholder key="first" className="mb-2" />, <FormControlPlaceholder key="second" />],
    label: 'Small label',
    explainer: 'Small explanation',
    hint: 'Small hint'
  }
}`,...(g=(h=l.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,f,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    sizer: Fieldset.sizer.medium,
    children: [<FormControlPlaceholder key="first" className="mb-2" />, <FormControlPlaceholder key="second" />],
    label: 'Medium label',
    explainer: 'Medium explanation',
    hint: 'Medium hint'
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,k,E;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    sizer: Fieldset.sizer.large,
    children: [<FormControlPlaceholder key="first" className="mb-2" />, <FormControlPlaceholder key="second" />],
    label: 'Large label',
    explainer: 'Large explanation',
    hint: 'Large hint'
  }
}`,...(E=(k=t.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var S,F,N;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-5 md:flex-row">
      <div className="flex-1">
        <Fieldset {...Small.args} />
      </div>
      <div className="flex-1">
        <Fieldset {...Medium.args} />
      </div>
      <div className="flex-1">
        <Fieldset {...Large.args} />
      </div>
    </div>
}`,...(N=(F=c.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var v,z,P;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: [<FormControlPlaceholder key="first" className="mb-2" />, <FormControlPlaceholder key="second" />],
    label: 'Select some comparables',
    error: 'These cannot be compared'
  }
}`,...(P=(z=m.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var C,M,A;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: [<FormControlPlaceholder key="first" className="mb-2" />, <FormControlPlaceholder key="second" />],
    label: 'Your name',
    required: true
  }
}`,...(A=(M=i.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};const _=["Basic","Small","Medium","Large","AllSizes","Error","Required"],T=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:c,Basic:o,Error:m,Large:t,Medium:s,Required:i,Small:l,__namedExportsOrder:_,default:L},Symbol.toStringTag,{value:"Module"}));export{c as A,o as B,m as E,i as R,T as S};
