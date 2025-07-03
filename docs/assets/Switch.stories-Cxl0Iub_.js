import{r as a}from"./iframe-B7C3MqEt.js";import{a as K}from"./Checkbox-CjBrTnpD.js";import{c as Q,F as d}from"./index-Czi7Upa3.js";const X=Q({slots:{root:"pt-0.5",input:"peer opacity-0 absolute -z-1",indicator:`
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
        `}}},defaultVariants:{sizer:d.small,isDisabled:!1,isFocused:!1}});function e(h){return a.createElement(K,{...h,type:"checkbox",styler:X})}e.sizer=d;e.__docgenInfo={description:`A variation of the Checkbox component that has a more explict-feeling "off"
state. Whereas a group of co-located Checkbox fields feels more like multiple
options for one field, a group of Switch fields feels more like discrete fields
under a common category.
@props {@link SwitchProps}`,methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:`Sets the checked state of the Checkbox when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultChecked:{required:!1,tsType:{name:"boolean"},description:`Sets the checked state of the Checkbox when using it as a uncontrolled
component`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Called when the checked state changes"},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"FieldSizer"},description:'Changes the size of the field ("small", "medium", "large")'},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main label to to the right of the form control, naming the field"},explainer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`A more detailed label explaining the purpose of the field, placed
directly below the main label`},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};const Y={title:"Form controls/Switch",component:e},m={tags:["!dev","!test"],args:{label:"A label",explainer:"An explainer"}},r={args:{label:"Unchecked Switch"}},t={args:{label:"Controlled Switch",checked:!0,onChange:()=>{}}},s={args:{label:"Uncontrolled Switch",defaultChecked:!0}},o={args:{label:"Disabled Switch",disabled:!0}},l={args:{label:"Disabled & checked Switch",disabled:!0,defaultChecked:!0}},u={tags:["!dev","!test"],render:h=>a.createElement("div",{className:"flex flex-col gap-4"},a.createElement(e,{...r.args}),a.createElement(e,{...t.args}),a.createElement(e,{...s.args}),a.createElement(e,{...o.args}),a.createElement(e,{...l.args}))},n={args:{label:"Small Switch (default)",defaultChecked:!0}},c={args:{sizer:e.sizer.medium,label:"Medium Switch",defaultChecked:!0}},i={args:{sizer:e.sizer.large,label:"Large Switch",defaultChecked:!0}},p={tags:["!dev","!test"],render:h=>a.createElement("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-baseline"},a.createElement(e,{...n.args,className:"sm:flex-1"}),a.createElement(e,{...c.args,className:"sm:flex-1"}),a.createElement(e,{...i.args,className:"sm:flex-1"}))};var g,f,b;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  args: {
    label: 'A label',
    explainer: 'An explainer'
  }
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var S,w,k;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Unchecked Switch'
  }
}`,...(k=(w=r.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var C,x,v;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Controlled Switch',
    checked: true,
    onChange: () => {}
  }
}`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var y,z,E;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Uncontrolled Switch',
    defaultChecked: true
  }
}`,...(E=(z=s.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var N,T,D;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Switch',
    disabled: true
  }
}`,...(D=(T=o.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var _,A,R;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Disabled & checked Switch',
    disabled: true,
    defaultChecked: true
  }
}`,...(R=(A=l.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var L,U,M;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Switch {...Unchecked.args} />
      <Switch {...Controlled.args} />
      <Switch {...Uncontrolled.args} />
      <Switch {...Disabled.args} />
      <Switch {...DisabledChecked.args} />
    </div>
}`,...(M=(U=u.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var q,F,O;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Small Switch (default)',
    defaultChecked: true
  }
}`,...(O=(F=n.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var I,H,P;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    sizer: Switch.sizer.medium,
    label: 'Medium Switch',
    defaultChecked: true
  }
}`,...(P=(H=c.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var j,V,W;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    sizer: Switch.sizer.large,
    label: 'Large Switch',
    defaultChecked: true
  }
}`,...(W=(V=i.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var B,G,J;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline">
      <Switch {...Small.args} className="sm:flex-1" />
      <Switch {...Medium.args} className="sm:flex-1" />
      <Switch {...Large.args} className="sm:flex-1" />
    </div>
}`,...(J=(G=p.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const Z=["CheckedFieldLayout","Unchecked","Controlled","Uncontrolled","Disabled","DisabledChecked","AllControlStates","Small","Medium","Large","AllSizes"],re=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:u,AllSizes:p,CheckedFieldLayout:m,Controlled:t,Disabled:o,DisabledChecked:l,Large:i,Medium:c,Small:n,Unchecked:r,Uncontrolled:s,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{u as A,re as S,e as a};
