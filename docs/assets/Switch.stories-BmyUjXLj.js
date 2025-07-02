import{r as a}from"./iframe-X96kWO4h.js";import{a as W}from"./Checkbox-BxTMRc2h.js";import{c as B,F as d}from"./index-Czi7Upa3.js";const G=B({slots:{root:"pt-0.5",input:"peer opacity-0 absolute -z-1",indicator:`
      relative rounded-l-full rounded-r-full bg-gray-300
      peer-checked:bg-emerald-500
      transition-colors duration-100 east-out
      after:border-transparent
      pointer-events-none

      after:bg-white after:rounded-full after:absolute after:m-0.5
      after:transition-transform after:duration-100 after:east-out
      after:shadow-md/15
    `},variants:{sizer:{[d.small]:{root:"min-h-5",indicator:"w-8 h-5 after:size-4 after:border-5 peer-checked:after:translate-x-3"},[d.medium]:{root:"min-h-6",indicator:"w-10 h-6 after:size-5 after:border-6 peer-checked:after:translate-x-4"},[d.large]:{root:"min-h-7",indicator:"w-12 h-7 after:size-6 after:border-7 peer-checked:after:translate-x-5"}},isDisabled:{true:{indicator:"bg-gray-300 after:bg-gray-100 peer-checked:bg-gray-300 after:shadow-none"}},isFocused:{true:{indicator:`
          after:bg-indigo-600 after:border-white
        `}}},defaultVariants:{sizer:d.small,isDisabled:!1,isFocused:!1}});function e(u){return a.createElement(W,{...u,type:"checkbox",styler:G})}e.sizer=d;e.__docgenInfo={description:`A variation of the Checkbox component that has a more explict-feeling "off"
state. Whereas a group of co-located Checkbox fields feels more like multiple
options for one field, a group of Switch fields feels more like discrete fields
under a common category.
@props {@link SwitchProps}`,methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:`Sets the checked state of the Checkbox when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultChecked:{required:!1,tsType:{name:"boolean"},description:`Sets the checked state of the Checkbox when using it as a uncontrolled
component`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Called when the checked state changes"},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"FieldSizer"},description:'Changes the size of the field ("small", "medium", "large")'},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main label to to the right of the form control, naming the field"},explainer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`A more detailed label explaining the purpose of the field, placed
directly below the main label`},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};const J={title:"Form controls/Switch",component:e},r={args:{label:"Unchecked Switch"}},t={args:{label:"Controlled Switch",checked:!0,onChange:()=>{}}},s={args:{label:"Uncontrolled Switch",defaultChecked:!0}},l={args:{label:"Disabled Switch",disabled:!0}},n={args:{label:"Disabled & checked Switch",disabled:!0,defaultChecked:!0}},m={tags:["!dev","!test"],render:u=>a.createElement("div",{className:"flex flex-col gap-4"},a.createElement(e,{...r.args}),a.createElement(e,{...t.args}),a.createElement(e,{...s.args}),a.createElement(e,{...l.args}),a.createElement(e,{...n.args}))},o={args:{label:"Small Switch (default)",explainer:"Optional explainer",defaultChecked:!0}},c={args:{sizer:e.sizer.medium,label:"Medium Switch",explainer:"Optional explainer",defaultChecked:!0}},i={args:{sizer:e.sizer.large,label:"Large Switch",explainer:"Optional explainer",defaultChecked:!0}},p={tags:["!dev","!test"],render:u=>a.createElement("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-baseline"},a.createElement(e,{...o.args,className:"sm:flex-1"}),a.createElement(e,{...c.args,className:"sm:flex-1"}),a.createElement(e,{...i.args,className:"sm:flex-1"}))};var h,g,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Unchecked Switch'
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,S,w;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Controlled Switch',
    checked: true,
    onChange: () => {}
  }
}`,...(w=(S=t.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var x,k,C;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Uncontrolled Switch',
    defaultChecked: true
  }
}`,...(C=(k=s.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var v,y,z;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Switch',
    disabled: true
  }
}`,...(z=(y=l.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var E,N,T;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Disabled & checked Switch',
    disabled: true,
    defaultChecked: true
  }
}`,...(T=(N=n.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var D,_,O;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Switch {...Unchecked.args} />
      <Switch {...Controlled.args} />
      <Switch {...Uncontrolled.args} />
      <Switch {...Disabled.args} />
      <Switch {...DisabledChecked.args} />
    </div>
}`,...(O=(_=m.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var R,U,M;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Small Switch (default)',
    explainer: 'Optional explainer',
    defaultChecked: true
  }
}`,...(M=(U=o.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var q,L,A;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    sizer: Switch.sizer.medium,
    label: 'Medium Switch',
    explainer: 'Optional explainer',
    defaultChecked: true
  }
}`,...(A=(L=c.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var F,I,H;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    sizer: Switch.sizer.large,
    label: 'Large Switch',
    explainer: 'Optional explainer',
    defaultChecked: true
  }
}`,...(H=(I=i.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var P,j,V;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline">
      <Switch {...Small.args} className="sm:flex-1" />
      <Switch {...Medium.args} className="sm:flex-1" />
      <Switch {...Large.args} className="sm:flex-1" />
    </div>
}`,...(V=(j=p.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};const K=["Unchecked","Controlled","Uncontrolled","Disabled","DisabledChecked","AllControlStates","Small","Medium","Large","AllSizes"],Z=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:m,AllSizes:p,Controlled:t,Disabled:l,DisabledChecked:n,Large:i,Medium:c,Small:o,Unchecked:r,Uncontrolled:s,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{m as A,Z as S,e as a};
