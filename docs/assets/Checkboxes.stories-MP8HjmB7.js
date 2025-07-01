import{r as e}from"./iframe-Dcrhn4el.js";import{C as p}from"./Checkbox-DYUkxDbh.js";import{F as ue}from"./Fieldset-CBoLlTZQ.js";import{F as k}from"./index-Czi7Upa3.js";import{c as me}from"./clsw-D-KgF5mV.js";import{r as pe}from"./randomId-Dfhrkieu.js";function r({className:n,sizer:t,label:v,explainer:o,hint:w,error:x,disabled:s,required:q,name:re,value:E,defaultValue:T,options:y,children:R,onChange:N,onBlur:C,delimiter:z=",",...oe}){const u=e.createRef(),[le]=e.useState(pe()),[se,A]=e.useState(T),P=E!==void 0,m=P?E:se,S=m===""?[]:(m==null?void 0:m.split(z))||[];function ie(a){const F=(a.target.checked?[...S,a.target.value]:S.filter(de=>de!==a.target.value)).sort(be(u)).join(z);P||A(F);const I=O(u);I.value=F,N==null||N({...a,target:I})}function ce(a){const l=O(u);C==null||C({...a,target:l})}function L({value:a,disabled:l=!1}){return{name:le,value:a,checked:S.includes(a),onChange:ie,onBlur:ce,disabled:s||l}}return e.useLayoutEffect(()=>{if(m===void 0&&T===void 0){const a=O(u);a.value&&A(a.value)}},[]),e.createElement(ue,{className:n,sizer:t,label:v,explainer:o,hint:w,error:x,disabled:s,required:q},e.createElement("div",{ref:u,className:y&&me("flex flex-col",{"gap-y-2":!t||t===k.small,"gap-y-2.5":t===k.medium,"gap-y-3":t===k.large})},y&&e.createElement(e.Fragment,null,y.map(a=>{var l;return e.createElement(p,{key:(l=a.value)==null?void 0:l.toString(),sizer:t,...L({value:a.value,disabled:a.disabled}),label:a.label,explainer:a.explainer})})),!y&&(R==null?void 0:R(L)),e.createElement("input",{name:re,type:"hidden",className:"the-hidden-checkboxes-input hidden",disabled:s,required:q,...oe})))}r.sizer=k;function be(n){var v;const t=[...((v=n.current)==null?void 0:v.getElementsByTagName("input"))||[]].filter(o=>o.type==="checkbox").map(o=>o.value);return(o,w)=>{const x=t.indexOf(o),s=t.indexOf(w);return s===-1?-1:x===-1?1:x-s}}function O(n){var t;return[...((t=n.current)==null?void 0:t.getElementsByClassName("the-hidden-checkboxes-input"))||[]][0]}r.__docgenInfo={description:`Renders multiple checkboxes as one field in a Fieldset.

Form libraries like Formik rely on \`onChange\` events to trigger updates to
field values, and such events cannot have multiple targets. Therefore, to
function as one holistic field whose value represents all of the currently
checked checkboxes, the component's value is a single delimited-string that
is managed using a \`<input type="hidden">\`. Each checkbox represents a
substring that can be added to or removed from the delimited-string by
toggling the checked status.

@props {@link CheckboxesProps} + {@link CommonFieldProps}`,methods:[],displayName:"Checkboxes",props:{name:{required:!1,tsType:{name:"ReactComponentProps['name']",raw:"React.ComponentProps<'input'>['name']"},description:"The name fot the field"},children:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  checkbox: (checkbox: {
    value: string;
    disabled?: boolean;
  }) => React.ComponentProps<'input'>,
) => React.ReactNode`,signature:{arguments:[{type:{name:"signature",type:"function",raw:`(checkbox: {
  value: string;
  disabled?: boolean;
}) => React.ComponentProps<'input'>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  value: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}},name:"checkbox"}],return:{name:"ReactComponentProps",raw:"React.ComponentProps<'input'>",elements:[{name:"literal",value:"'input'"}]}}},name:"checkbox"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Render function used to render customized checkboxes. Call the provided
callback to get props to pass down to each checkbox.`},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: React.ReactNode;
  explainer?: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"explainer",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:`{
  value: string;
  label: React.ReactNode;
  explainer?: React.ReactNode;
  disabled?: boolean;
}[]`},description:"Adds checkboxes in the standard layout"},onChange:{required:!1,tsType:{name:"ReactComponentProps['onChange']",raw:"React.ComponentProps<'input'>['onChange']"},description:"Called when the value changes"},value:{required:!1,tsType:{name:"string"},description:`Sets the value when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"string"},description:"Sets the value when using it as an uncontrolled component"},delimiter:{required:!1,tsType:{name:"string"},description:`Optionally override the delimiter used to split the value into individual
checkbox values`,defaultValue:{value:"','",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"FieldSizer"},description:'Changes the size of the field ("small", "medium", "large")'},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main label to show above the form control, naming the field"},explainer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`A more detailed label explaining the purpose of the field, placed
directly below the main label`},hint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`A hint about what kind of value the control accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"union",raw:"boolean | React.ReactNode",elements:[{name:"boolean"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};const he={title:"Forms/Checkboxes",component:r},b={args:{label:"Please select a standard",defaultValue:"8601",options:[{value:"aquila",label:"Roman Aquila"},{value:"8601",label:"ISO 8601"},{value:"high-society",label:"High Society",disabled:!0}]}},h={args:{label:"How custom do you like it?",defaultValue:"pretty",children:n=>e.createElement("div",{className:"flex flex-row items-baseline gap-x-4"},e.createElement(p,{...n({value:"kinda"}),label:"A little custom"}),e.createElement("span",{className:"text-xs text-gray-500"},"or"),e.createElement(p,{...n({value:"pretty"}),label:e.createElement("div",{className:"font-bold text-blue-500"},"Pretty custom 👨‍🎨")}),e.createElement("span",{className:"text-xs text-gray-500"},"or"),e.createElement(p,{...n({value:"too",disabled:!0}),className:"-rotate-30",sizer:p.sizer.large,label:"Too custom"}))}},g={args:{label:"A label",explainer:"An explainer",error:"An error message",hint:"A hint",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]}},i={args:{label:"Small label",hint:"Small hint",sizer:r.sizer.small,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]}},c={args:{label:"Medium label",hint:"Medium hint",sizer:r.sizer.medium,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]}},d={args:{label:"Large label",hint:"Large hint",sizer:r.sizer.large,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]}},f={tags:["!dev","!test"],render:n=>e.createElement("div",{className:"flex flex-col gap-x-12 gap-y-8 md:flex-row"},e.createElement(r,{...i.args}),e.createElement(r,{...c.args}),e.createElement(r,{...d.args}))};var M,_,V;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(V=(_=b.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var j,H,D;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(D=(H=h.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var B,U,W;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(W=(U=g.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var G,J,K;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(K=(J=i.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=c.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=d.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,te,ne;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-x-12 gap-y-8 md:flex-row">
      <Checkboxes {...Small.args} />
      <Checkboxes {...Medium.args} />
      <Checkboxes {...Large.args} />
    </div>
}`,...(ne=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const ge=["StandardLayout","CustomLayout","FieldsetLayout","Small","Medium","Large","AllSizes"],Re=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:f,CustomLayout:h,FieldsetLayout:g,Large:d,Medium:c,Small:i,StandardLayout:b,__namedExportsOrder:ge,default:he},Symbol.toStringTag,{value:"Module"}));export{r as C,Re as S,b as a,h as b};
