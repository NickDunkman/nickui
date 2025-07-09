import{r as e}from"./iframe-BC9w-kBM.js";import{D as r}from"./index-D6hw1hnd.js";import{F as s}from"./Fieldset-BmeCMPfT.js";const M={title:"Field layouts/Fieldset",component:s},t={tags:["!dev","!test"],args:{children:[e.createElement(r.FormControlPlaceholder,{key:"first",className:"mb-2"}),e.createElement(r.FormControlPlaceholder,{key:"second"})],label:"A label for the fieldset",hint:"A hint about the fieldset’s values",error:"An error message",required:!0}},a={args:{sizer:s.sizer.small,children:[e.createElement(r.FormControlPlaceholder,{key:"first",className:"mb-2"}),e.createElement(r.FormControlPlaceholder,{key:"second"})],label:"Small label",hint:"Small hint",error:"Small error",required:!0}},l={args:{sizer:s.sizer.medium,children:[e.createElement(r.FormControlPlaceholder,{key:"first",className:"mb-2"}),e.createElement(r.FormControlPlaceholder,{key:"second"})],label:"Medium label",hint:"Medium hint",error:"Medium error",required:!0}},o={args:{sizer:s.sizer.large,children:[e.createElement(r.FormControlPlaceholder,{key:"first",className:"mb-2"}),e.createElement(r.FormControlPlaceholder,{key:"second"})],label:"Large label",hint:"Large hint",error:"Large error",required:!0}},c={tags:["!dev","!test"],render:A=>e.createElement("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-baseline"},e.createElement(s,{...a.args,className:"sm:flex-1"}),e.createElement(s,{...l.args,className:"sm:flex-1"}),e.createElement(s,{...o.args,className:"sm:flex-1"}))},m={args:{children:[e.createElement(r.FormControlPlaceholder,{key:"first",className:"mb-2"}),e.createElement(r.FormControlPlaceholder,{key:"second"})],label:"Select some comparables",error:"These cannot be compared"}},d={args:{children:[e.createElement(r.FormControlPlaceholder,{key:"first",className:"mb-2"}),e.createElement(r.FormControlPlaceholder,{key:"second"})],label:"Your name",required:!0}};var i,n,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  args: {
    children: [<Docs.FormControlPlaceholder key="first" className="mb-2" />, <Docs.FormControlPlaceholder key="second" />],
    label: 'A label for the fieldset',
    hint: 'A hint about the fieldset’s values',
    error: 'An error message',
    required: true
  }
}`,...(u=(n=t.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};var h,g,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    sizer: Fieldset.sizer.small,
    children: [<Docs.FormControlPlaceholder key="first" className="mb-2" />, <Docs.FormControlPlaceholder key="second" />],
    label: 'Small label',
    hint: 'Small hint',
    error: 'Small error',
    required: true
  }
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var p,f,F;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    sizer: Fieldset.sizer.medium,
    children: [<Docs.FormControlPlaceholder key="first" className="mb-2" />, <Docs.FormControlPlaceholder key="second" />],
    label: 'Medium label',
    hint: 'Medium hint',
    error: 'Medium error',
    required: true
  }
}`,...(F=(f=l.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var y,P,k;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    sizer: Fieldset.sizer.large,
    children: [<Docs.FormControlPlaceholder key="first" className="mb-2" />, <Docs.FormControlPlaceholder key="second" />],
    label: 'Large label',
    hint: 'Large hint',
    error: 'Large error',
    required: true
  }
}`,...(k=(P=o.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var C,S,E;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline">
      <Fieldset {...Small.args} className="sm:flex-1" />
      <Fieldset {...Medium.args} className="sm:flex-1" />
      <Fieldset {...Large.args} className="sm:flex-1" />
    </div>
}`,...(E=(S=c.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var N,x,z;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: [<Docs.FormControlPlaceholder key="first" className="mb-2" />, <Docs.FormControlPlaceholder key="second" />],
    label: 'Select some comparables',
    error: 'These cannot be compared'
  }
}`,...(z=(x=m.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var D,q,v;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: [<Docs.FormControlPlaceholder key="first" className="mb-2" />, <Docs.FormControlPlaceholder key="second" />],
    label: 'Your name',
    required: true
  }
}`,...(v=(q=d.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};const L=["Basic","Small","Medium","Large","AllSizes","Error","Required"],R=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:c,Basic:t,Error:m,Large:o,Medium:l,Required:d,Small:a,__namedExportsOrder:L,default:M},Symbol.toStringTag,{value:"Module"}));export{t as B,d as R,R as S};
