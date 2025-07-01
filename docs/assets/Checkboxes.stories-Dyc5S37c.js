import{r as e}from"./iframe-BOtqaFuv.js";import{C as m}from"./Checkbox-DIDftPo8.js";import{C as a}from"./Checkboxes-CyVie92U.js";const _={title:"Form controls/Checkboxes",component:a},r={tags:["!dev","!test"],args:{required:!0,label:"A label",hint:"A hint",error:"An error message",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]}},t={args:{label:"Please select some standards",defaultValue:"8601",options:[{value:"aquila",label:"Roman Aquila"},{value:"8601",label:"ISO 8601"},{value:"high-society",label:"High Society",disabled:!0}]}},n={args:{label:"Please select some customizations",defaultValue:"colorful,embiggened",render:c=>e.createElement("div",{className:"flex flex-row items-baseline gap-x-6"},e.createElement(m,{...c({value:"colorful"}),label:e.createElement("span",{className:"font-bold text-blue-500"},"Colorful"),className:"rounded-sm bg-rose-200 p-2"}),e.createElement(m,{...c({value:"embiggened"}),sizer:m.sizer.large,label:"Embiggened"}),e.createElement("div",null,e.createElement("input",{type:"checkbox",...c({value:"native"})})," Native"))}},l={args:{label:"Small label",hint:"Small hint",sizer:a.sizer.small,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]}},s={args:{label:"Medium label",hint:"Medium hint",sizer:a.sizer.medium,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]}},o={args:{label:"Large label",hint:"Large hint",sizer:a.sizer.large,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]}},i={tags:["!dev","!test"],render:c=>e.createElement("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center"},e.createElement(a,{...l.args,className:"sm:flex-1"}),e.createElement(a,{...s.args,className:"sm:flex-1"}),e.createElement(a,{...o.args,className:"sm:flex-1"}))};var u,d,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(d=r.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var p,g,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Please select some standards',
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
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,h,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Please select some customizations',
    defaultValue: 'colorful,embiggened',
    render: checkbox => <div className="flex flex-row items-baseline gap-x-6">
        <Checkbox {...checkbox({
        value: 'colorful'
      })} label={<span className="font-bold text-blue-500">Colorful</span>} className="rounded-sm bg-rose-200 p-2" />
        <Checkbox {...checkbox({
        value: 'embiggened'
      })} sizer={Checkbox.sizer.large} label="Embiggened" />
        <div>
          <input type="checkbox" {...checkbox({
          value: 'native'
        })} /> Native
        </div>
      </div>
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var S,z,O;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(O=(z=l.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var w,C,k;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(C=s.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var N,y,E;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(E=(y=o.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var L,A,M;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <Checkboxes {...Small.args} className="sm:flex-1" />
      <Checkboxes {...Medium.args} className="sm:flex-1" />
      <Checkboxes {...Large.args} className="sm:flex-1" />
    </div>
}`,...(M=(A=i.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};const q=["FieldsetLayout","StandardLayout","CustomLayout","Small","Medium","Large","AllSizes"],j=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:i,CustomLayout:n,FieldsetLayout:r,Large:o,Medium:s,Small:l,StandardLayout:t,__namedExportsOrder:q,default:_},Symbol.toStringTag,{value:"Module"}));export{n as C,j as S,t as a};
