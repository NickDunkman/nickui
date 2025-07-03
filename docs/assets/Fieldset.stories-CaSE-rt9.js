import{r as e}from"./iframe-B7C3MqEt.js";import{D as r}from"./index-DY58uIAq.js";import{F as a}from"./Fieldset-CVSGuKiQ.js";const A={title:"Field layouts/Fieldset",component:a},t={tags:["!dev","!test"],args:{children:[e.createElement(r.FormControlPlaceholder,{key:"first",className:"mb-2"}),e.createElement(r.FormControlPlaceholder,{key:"second"})],label:"A label for the fieldset",explainer:"An explanation about the fieldset",hint:"A hint about the fieldset’s values"}},l={args:{sizer:a.sizer.small,children:[e.createElement(r.FormControlPlaceholder,{key:"first",className:"mb-2"}),e.createElement(r.FormControlPlaceholder,{key:"second"})],label:"Small label",explainer:"Small explanation",hint:"Small hint"}},s={args:{sizer:a.sizer.medium,children:[e.createElement(r.FormControlPlaceholder,{key:"first",className:"mb-2"}),e.createElement(r.FormControlPlaceholder,{key:"second"})],label:"Medium label",explainer:"Medium explanation",hint:"Medium hint"}},o={args:{sizer:a.sizer.large,children:[e.createElement(r.FormControlPlaceholder,{key:"first",className:"mb-2"}),e.createElement(r.FormControlPlaceholder,{key:"second"})],label:"Large label",explainer:"Large explanation",hint:"Large hint"}},c={tags:["!dev","!test"],render:_=>e.createElement("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-baseline"},e.createElement(a,{...l.args,className:"sm:flex-1"}),e.createElement(a,{...s.args,className:"sm:flex-1"}),e.createElement(a,{...o.args,className:"sm:flex-1"}))},m={args:{children:[e.createElement(r.FormControlPlaceholder,{key:"first",className:"mb-2"}),e.createElement(r.FormControlPlaceholder,{key:"second"})],label:"Select some comparables",error:"These cannot be compared"}},n={args:{children:[e.createElement(r.FormControlPlaceholder,{key:"first",className:"mb-2"}),e.createElement(r.FormControlPlaceholder,{key:"second"})],label:"Your name",required:!0}};var i,d,h;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  args: {
    children: [<Docs.FormControlPlaceholder key="first" className="mb-2" />, <Docs.FormControlPlaceholder key="second" />],
    label: 'A label for the fieldset',
    explainer: 'An explanation about the fieldset',
    hint: 'A hint about the fieldset’s values'
  }
}`,...(h=(d=t.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var p,u,g;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    sizer: Fieldset.sizer.small,
    children: [<Docs.FormControlPlaceholder key="first" className="mb-2" />, <Docs.FormControlPlaceholder key="second" />],
    label: 'Small label',
    explainer: 'Small explanation',
    hint: 'Small hint'
  }
}`,...(g=(u=l.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,f,F;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    sizer: Fieldset.sizer.medium,
    children: [<Docs.FormControlPlaceholder key="first" className="mb-2" />, <Docs.FormControlPlaceholder key="second" />],
    label: 'Medium label',
    explainer: 'Medium explanation',
    hint: 'Medium hint'
  }
}`,...(F=(f=s.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var x,y,P;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    sizer: Fieldset.sizer.large,
    children: [<Docs.FormControlPlaceholder key="first" className="mb-2" />, <Docs.FormControlPlaceholder key="second" />],
    label: 'Large label',
    explainer: 'Large explanation',
    hint: 'Large hint'
  }
}`,...(P=(y=o.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var k,C,S;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline">
      <Fieldset {...Small.args} className="sm:flex-1" />
      <Fieldset {...Medium.args} className="sm:flex-1" />
      <Fieldset {...Large.args} className="sm:flex-1" />
    </div>
}`,...(S=(C=c.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var E,N,z;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: [<Docs.FormControlPlaceholder key="first" className="mb-2" />, <Docs.FormControlPlaceholder key="second" />],
    label: 'Select some comparables',
    error: 'These cannot be compared'
  }
}`,...(z=(N=m.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var D,v,M;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: [<Docs.FormControlPlaceholder key="first" className="mb-2" />, <Docs.FormControlPlaceholder key="second" />],
    label: 'Your name',
    required: true
  }
}`,...(M=(v=n.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};const L=["Basic","Small","Medium","Large","AllSizes","Error","Required"],R=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:c,Basic:t,Error:m,Large:o,Medium:s,Required:n,Small:l,__namedExportsOrder:L,default:A},Symbol.toStringTag,{value:"Module"}));export{c as A,t as B,m as E,n as R,R as S};
