import{r as e}from"./iframe-X96kWO4h.js";import{C as m}from"./Checkbox-BxTMRc2h.js";import{C as a}from"./Checkboxes-DzOhjrpm.js";const _={title:"Form controls/Checkboxes",component:a},r={args:{label:"Please select a standard",defaultValue:"8601",options:[{value:"aquila",label:"Roman Aquila"},{value:"8601",label:"ISO 8601"},{value:"high-society",label:"High Society",disabled:!0}]}},s={args:{label:"How custom do you like it?",defaultValue:"pretty",children:c=>e.createElement("div",{className:"flex flex-row items-baseline gap-x-4"},e.createElement(m,{...c({value:"kinda"}),label:"A little custom"}),e.createElement("span",{className:"text-xs text-gray-500"},"or"),e.createElement(m,{...c({value:"pretty"}),label:e.createElement("div",{className:"font-bold text-blue-500"},"Pretty custom 👨‍🎨")}),e.createElement("span",{className:"text-xs text-gray-500"},"or"),e.createElement(m,{...c({value:"too",disabled:!0}),className:"-rotate-30",sizer:m.sizer.large,label:"Too custom"}))}},n={args:{label:"A label",explainer:"An explainer",error:"An error message",hint:"A hint",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]}},l={args:{label:"Small label",hint:"Small hint",sizer:a.sizer.small,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]}},t={args:{label:"Medium label",hint:"Medium hint",sizer:a.sizer.medium,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]}},o={args:{label:"Large label",hint:"Large hint",sizer:a.sizer.large,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]}},i={tags:["!dev","!test"],render:c=>e.createElement("div",{className:"flex flex-col gap-x-12 gap-y-8 md:flex-row"},e.createElement(a,{...l.args}),e.createElement(a,{...t.args}),e.createElement(a,{...o.args}))};var u,p,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Please select a standard',
    defaultValue: '8601',
    options: [{
      value: 'aquila',
      label: 'Roman Aquila'
    }, {
      value: '8601',
      label: 'ISO 8601'
    }, {
      value: 'high-society',
      label: 'High Society',
      disabled: true
    }]
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var b,g,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'How custom do you like it?',
    defaultValue: 'pretty',
    children: checkbox => <div className="flex flex-row items-baseline gap-x-4">
        <Checkbox {...checkbox({
        value: 'kinda'
      })} label="A little custom" />
        <span className="text-xs text-gray-500">or</span>
        <Checkbox {...checkbox({
        value: 'pretty'
      })} label={<div className="font-bold text-blue-500">Pretty custom 👨‍🎨</div>} />
        <span className="text-xs text-gray-500">or</span>
        <Checkbox {...checkbox({
        value: 'too',
        disabled: true
      })} className="-rotate-30" sizer={Checkbox.sizer.large} label="Too custom" />
      </div>
  }
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var v,h,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'A label',
    explainer: 'An explainer',
    error: 'An error message',
    hint: 'A hint',
    options: [{
      value: 'one',
      label: 'Option one'
    }, {
      value: 'two',
      label: 'Option two'
    }]
  }
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var S,f,w;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Small label',
    hint: 'Small hint',
    sizer: Checkboxes.sizer.small,
    options: [{
      value: 'one',
      label: 'Option one'
    }, {
      value: 'two',
      label: 'Option two'
    }]
  }
}`,...(w=(f=l.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var O,k,z;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Medium label',
    hint: 'Medium hint',
    sizer: Checkboxes.sizer.medium,
    options: [{
      value: 'one',
      label: 'Option one'
    }, {
      value: 'two',
      label: 'Option two'
    }]
  }
}`,...(z=(k=t.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var C,A,E;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Large label',
    hint: 'Large hint',
    sizer: Checkboxes.sizer.large,
    options: [{
      value: 'one',
      label: 'Option one'
    }, {
      value: 'two',
      label: 'Option two'
    }]
  }
}`,...(E=(A=o.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var L,N,M;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-x-12 gap-y-8 md:flex-row">
      <Checkboxes {...Small.args} />
      <Checkboxes {...Medium.args} />
      <Checkboxes {...Large.args} />
    </div>
}`,...(M=(N=i.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};const P=["StandardLayout","CustomLayout","FieldsetLayout","Small","Medium","Large","AllSizes"],F=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:i,CustomLayout:s,FieldsetLayout:n,Large:o,Medium:t,Small:l,StandardLayout:r,__namedExportsOrder:P,default:_},Symbol.toStringTag,{value:"Module"}));export{s as C,F as S,r as a};
