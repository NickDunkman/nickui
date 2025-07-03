import{r as e}from"./iframe-B7C3MqEt.js";import{R as c}from"./Radio-BJNR_lxP.js";import{R as a}from"./Radios-CdVOI9F5.js";const P={title:"Form controls/Radios",component:a},o={args:{label:"Please select a standard",defaultValue:"8601",options:[{value:"aquila",label:"Roman Aquila"},{value:"8601",label:"ISO 8601"},{value:"high-society",label:"High Society",disabled:!0}]}},r={args:{label:"How custom do you like it?",defaultValue:"pretty",children:m=>e.createElement("div",{className:"flex flex-row items-baseline gap-x-4"},e.createElement(c,{...m({value:"kinda"}),label:"A little custom"}),e.createElement("span",{className:"text-xs text-gray-500"},"or"),e.createElement(c,{...m({value:"pretty"}),label:e.createElement("div",{className:"font-bold text-blue-500"},"Pretty custom 👨‍🎨")}),e.createElement("span",{className:"text-xs text-gray-500"},"or"),e.createElement(c,{...m({value:"too",disabled:!0}),className:"-rotate-30",sizer:c.sizer.large,label:"Too custom"}))}},n={args:{label:"A label",explainer:"An explainer",error:"An error message",hint:"A hint",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]}},l={args:{label:"Small label",hint:"Small hint",sizer:a.sizer.small,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]}},t={args:{label:"Medium label",hint:"Medium hint",sizer:a.sizer.medium,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]}},s={args:{label:"Large label",hint:"Large hint",sizer:a.sizer.large,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]}},i={tags:["!dev","!test"],render:m=>e.createElement("div",{className:"flex flex-col gap-x-12 gap-y-8 sm:flex-row"},e.createElement("div",{className:"flex-1"},e.createElement(a,{...l.args})),e.createElement("div",{className:"flex-1"},e.createElement(a,{...t.args})),e.createElement("div",{className:"flex-1"},e.createElement(a,{...s.args})))};var d,u,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var b,g,v;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'How custom do you like it?',
    defaultValue: 'pretty',
    children: radio => <div className="flex flex-row items-baseline gap-x-4">
        <Radio {...radio({
        value: 'kinda'
      })} label="A little custom" />
        <span className="text-xs text-gray-500">or</span>
        <Radio {...radio({
        value: 'pretty'
      })} label={<div className="font-bold text-blue-500">Pretty custom 👨‍🎨</div>} />
        <span className="text-xs text-gray-500">or</span>
        <Radio {...radio({
        value: 'too',
        disabled: true
      })} className="-rotate-30" sizer={Radio.sizer.large} label="Too custom" />
      </div>
  }
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,f,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var S,h,w;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Small label',
    hint: 'Small hint',
    sizer: Radios.sizer.small,
    options: [{
      value: 'one',
      label: 'Option one'
    }, {
      value: 'two',
      label: 'Option two'
    }]
  }
}`,...(w=(h=l.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var O,z,N;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Medium label',
    hint: 'Medium hint',
    sizer: Radios.sizer.medium,
    options: [{
      value: 'one',
      label: 'Option one'
    }, {
      value: 'two',
      label: 'Option two'
    }]
  }
}`,...(N=(z=t.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var R,E,A;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Large label',
    hint: 'Large hint',
    sizer: Radios.sizer.large,
    options: [{
      value: 'one',
      label: 'Option one'
    }, {
      value: 'two',
      label: 'Option two'
    }]
  }
}`,...(A=(E=s.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var L,M,_;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-x-12 gap-y-8 sm:flex-row">
      <div className="flex-1">
        <Radios {...Small.args} />
      </div>
      <div className="flex-1">
        <Radios {...Medium.args} />
      </div>
      <div className="flex-1">
        <Radios {...Large.args} />
      </div>
    </div>
}`,...(_=(M=i.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};const k=["StandardLayout","CustomLayout","FieldsetLayout","Small","Medium","Large","AllSizes"],C=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:i,CustomLayout:r,FieldsetLayout:n,Large:s,Medium:t,Small:l,StandardLayout:o,__namedExportsOrder:k,default:P},Symbol.toStringTag,{value:"Module"}));export{r as C,C as S,o as a};
