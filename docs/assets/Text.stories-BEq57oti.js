import{r as e}from"./iframe-B7C3MqEt.js";import{F as ce}from"./Field-BhBoxO2S.js";import{c as me,F as c}from"./index-Czi7Upa3.js";import{r as x}from"./randomId-Dfhrkieu.js";const pe=me({base:`
    w-full
    border-2 rounded-sm
    placeholder:opacity-100 placeholder:text-gray-400
    focus:border-indigo-800 focus:shadow-[0_0_11px] focus:shadow-indigo-300 focus:outline-0 
    disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder:text-gray-300 disabled:cursor-not-allowed disabled:opacity-100
  `,variants:{sizer:{[c.small]:"text-sm py-1.5 px-2",[c.medium]:"text-base py-2.5 px-3.5",[c.large]:"text-lg py-3.5 px-4.5"},hasError:{true:"border-rose-800 focus:border-rose-800 focus:shadow-rose-300"}},defaultVariants:{sizer:c.small,hasError:!1}});function a({className:g,sizer:h,label:f,explainer:ae,hint:b,error:r,required:T,disabled:v,id:re,"aria-describedby":te,"aria-errormessage":le,"aria-invalid":y,...se}){const[oe]=e.useState(x()),E=re||(f?oe:void 0),[ne]=e.useState(x()),w=te||(b?ne:void 0),[ie]=e.useState(x()),S=le||(r&&r!==!0?ie:void 0),de=pe({sizer:h,hasError:!!r});return e.createElement(ce,{className:g,sizer:h,label:f,explainer:ae,controlId:E,hint:b,hintId:w,error:r!==!0?r:void 0,errorId:S,disabled:v,required:T},e.createElement("input",{...se,id:E,className:de,disabled:v,required:T,"aria-describedby":w,"aria-errormessage":S,"aria-invalid":y!==void 0?y:!!r}))}a.sizer=c;a.__docgenInfo={description:`A form control that allows users to enter & edit a single line of text
@param props {@link TextProps} + {@link CommonFieldProps}`,methods:[],displayName:"Text",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Called when the value of the Text changes"},placeholder:{required:!1,tsType:{name:"string"},description:`A string that contains a brief hint to the user as to what information is
expected in the field.`},type:{required:!1,tsType:{name:"union",raw:`| 'date'
| 'datetime'
| 'datetime-local'
| 'email'
| 'month'
| 'number'
| 'password'
| 'search'
| 'tel'
| 'text'
| 'time'
| 'url'
| 'week'`,elements:[{name:"literal",value:"'date'"},{name:"literal",value:"'datetime'"},{name:"literal",value:"'datetime-local'"},{name:"literal",value:"'email'"},{name:"literal",value:"'month'"},{name:"literal",value:"'number'"},{name:"literal",value:"'password'"},{name:"literal",value:"'search'"},{name:"literal",value:"'tel'"},{name:"literal",value:"'text'"},{name:"literal",value:"'time'"},{name:"literal",value:"'url'"},{name:"literal",value:"'week'"}]},description:`The input type to use (only textual types are allowed with Text).
See
[MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types)
for more details`},value:{required:!1,tsType:{name:"string"},description:`Sets the value of the Text when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"string"},description:"Sets the value of the Text when using it as an uncontrolled component"},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"FieldSizer"},description:'Changes the size of the field ("small", "medium", "large")'},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main label to show above the form control, naming the field"},explainer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`A more detailed label explaining the purpose of the field, placed
directly below the main label`},hint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`A hint about what kind of value the control accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"union",raw:"boolean | React.ReactNode",elements:[{name:"boolean"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}}};const ue={title:"Form controls/Text",component:a},t={args:{placeholder:"Empty Text","aria-label":"Empty Text with no set value"}},l={args:{value:"Controlled Text",onChange:()=>{},"aria-label":"Example Text with a controlled value"}},s={args:{defaultValue:"Uncontrolled Text","aria-label":"Example Text with an uncontrolled value"}},o={args:{defaultValue:"Disabled Text",disabled:!0,"aria-label":"Example disabled Text"}},m={tags:["!dev","!test"],render:g=>e.createElement("div",{className:"flex flex-col gap-4"},e.createElement(a,{...t.args}),e.createElement(a,{...l.args}),e.createElement(a,{...s.args}),e.createElement(a,{...o.args}))},p={args:{label:"A label",explainer:"An explainer",error:"An error message",hint:"A hint",defaultValue:"A problematic value"}},n={args:{sizer:a.sizer.small,placeholder:"Small Text (default)","aria-label":"Example small Text"}},i={args:{sizer:a.sizer.medium,placeholder:"Medium Text","aria-label":"Example medium Text"}},d={args:{sizer:a.sizer.large,placeholder:"Large Text","aria-label":"Example large Text"}},u={tags:["!dev","!test"],render:g=>e.createElement("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-baseline"},e.createElement(a,{...n.args,className:"sm:flex-1"}),e.createElement(a,{...i.args,className:"sm:flex-1"}),e.createElement(a,{...d.args,className:"sm:flex-1"}))};var N,z,A;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    placeholder: 'Empty Text',
    'aria-label': 'Empty Text with no set value'
  }
}`,...(A=(z=t.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var R,C,_;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    value: 'Controlled Text',
    onChange: () => {},
    'aria-label': 'Example Text with a controlled value'
  }
}`,...(_=(C=l.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var q,M,L;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Uncontrolled Text',
    'aria-label': 'Example Text with an uncontrolled value'
  }
}`,...(L=(M=s.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var F,D,I;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Disabled Text',
    disabled: true,
    'aria-label': 'Example disabled Text'
  }
}`,...(I=(D=o.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var V,k,U;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Text {...Empty.args} />
      <Text {...Controlled.args} />
      <Text {...Uncontrolled.args} />
      <Text {...Disabled.args} />
    </div>
}`,...(U=(k=m.parameters)==null?void 0:k.docs)==null?void 0:U.source}}};var H,O,P;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'A label',
    explainer: 'An explainer',
    error: 'An error message',
    hint: 'A hint',
    defaultValue: 'A problematic value'
  }
}`,...(P=(O=p.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var j,B,W;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    sizer: Text.sizer.small,
    placeholder: 'Small Text (default)',
    'aria-label': 'Example small Text'
  }
}`,...(W=(B=n.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var G,J,K;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    sizer: Text.sizer.medium,
    placeholder: 'Medium Text',
    'aria-label': 'Example medium Text'
  }
}`,...(K=(J=i.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    sizer: Text.sizer.large,
    placeholder: 'Large Text',
    'aria-label': 'Example large Text'
  }
}`,...(Y=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline">
      <Text {...Small.args} className="sm:flex-1" />
      <Text {...Medium.args} className="sm:flex-1" />
      <Text {...Large.args} className="sm:flex-1" />
    </div>
}`,...(ee=($=u.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const ge=["Empty","Controlled","Uncontrolled","Disabled","AllControlStates","FieldLayout","Small","Medium","Large","AllSizes"],Te=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:m,AllSizes:u,Controlled:l,Disabled:o,Empty:t,FieldLayout:p,Large:d,Medium:i,Small:n,Uncontrolled:s,__namedExportsOrder:ge,default:ue},Symbol.toStringTag,{value:"Module"}));export{m as A,Te as S,a as T};
