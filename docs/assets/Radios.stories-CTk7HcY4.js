import{r as e}from"./iframe-BCtXYBx8.js";import{R as r}from"./Radio-Cxoy8dQu.js";import{R as a}from"./Radios-BhE9WZc3.js";const q={title:"Form controls/Radios",component:a},o={tags:["!dev","!test"],args:{required:!0,label:"A label",hint:"A hint",error:"An error message",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]}},n={args:{name:"standard",label:"Please select a standard",defaultValue:"8601",options:[{value:"aquila",label:"Roman Aquila"},{value:"8601",label:"ISO 8601"},{value:"high-society",label:"High Society",disabled:!0}]}},i={args:{name:"how-custom",label:"How custom do you like it?",defaultValue:"nice-and-custom",render:c=>e.createElement("div",{className:"flex items-baseline gap-4"},e.createElement(r,{...c({value:"plain"}),label:"Just plain"}),e.createElement("span",{className:"text-xs text-gray-500"},"or"),e.createElement(r,{...c({value:"nice-and-custom"}),sizer:r.sizer.medium,label:e.createElement("div",{className:"font-bold"},"👨‍🎨 ",e.createElement("span",{className:"text-blue-600"},"Nice")," ",e.createElement("span",{className:"text-green-700"},"and")," ",e.createElement("span",{className:"text-rose-600"},"custom"))}),e.createElement("span",{className:"text-xs text-gray-500"},"or"),e.createElement(r,{...c({value:"too",disabled:!0}),className:"-rotate-30",sizer:r.sizer.large,label:"Too custom"}))}},s={args:{label:"Small label",hint:"Small hint",sizer:a.sizer.small,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]}},l={args:{label:"Medium label",hint:"Medium hint",sizer:a.sizer.medium,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]}},t={args:{label:"Large label",hint:"Large hint",sizer:a.sizer.large,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]}},m={tags:["!dev","!test"],render:c=>e.createElement("div",{className:"flex flex-col gap-x-12 gap-y-8 sm:flex-row"},e.createElement("div",{className:"flex-1"},e.createElement(a,{...s.args})),e.createElement("div",{className:"flex-1"},e.createElement(a,{...l.args})),e.createElement("div",{className:"flex-1"},e.createElement(a,{...t.args})))};var d,u,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  args: {
    required: true,
    label: 'A label',
    hint: 'A hint',
    error: 'An error message',
    options: [{
      value: 'one',
      label: 'Option one'
    }, {
      value: 'two',
      label: 'Option two'
    }]
  }
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,b,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'standard',
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
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,f,N;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: 'how-custom',
    label: 'How custom do you like it?',
    defaultValue: 'nice-and-custom',
    render: radio => <div className="flex items-baseline gap-4">
        <Radio {...radio({
        value: 'plain'
      })} label="Just plain" />
        <span className="text-xs text-gray-500">or</span>
        <Radio {...radio({
        value: 'nice-and-custom'
      })} sizer={Radio.sizer.medium} label={<div className="font-bold">
              👨‍🎨 <span className="text-blue-600">Nice</span>{' '}
              <span className="text-green-700">and</span>{' '}
              <span className="text-rose-600">custom</span>
            </div>} />
        <span className="text-xs text-gray-500">or</span>
        <Radio {...radio({
        value: 'too',
        disabled: true
      })} className="-rotate-30" sizer={Radio.sizer.large} label="Too custom" />
      </div>
  }
}`,...(N=(f=i.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var S,h,z;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(z=(h=s.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};var w,O,y;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(y=(O=l.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};var E,R,L;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(L=(R=t.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var A,M,_;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(_=(M=m.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};const H=["FieldsetLayout","StandardLayout","CustomLayout","Small","Medium","Large","AllSizes"],P=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:m,CustomLayout:i,FieldsetLayout:o,Large:t,Medium:l,Small:s,StandardLayout:n,__namedExportsOrder:H,default:q},Symbol.toStringTag,{value:"Module"}));export{i as C,P as S,n as a};
