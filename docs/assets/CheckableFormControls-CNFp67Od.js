import{r as n}from"./iframe-C0VeZLsT.js";import{F as O}from"./Fieldset-Hw3SFM8V.js";import{u as A,c as B}from"./index-V48DHmLJ.js";import{r as D}from"./randomId-Dfhrkieu.js";function j({className:l,sizer:r,label:t,hint:h,error:c,disabled:o,required:b,Checkable:C,name:T,value:f,defaultValue:y,options:d,render:q,onChange:N,onBlur:P,delimiter:p,"data-nickui-component":S,...x}){const s=n.createRef(),[I]=n.useState(D()),[E,v]=n.useState(y),R=f!==void 0,i=R?f:E,g=!i||i===""?[]:p?i.split(p):[i];function z(e){let a;p?a=(e.target.checked?[...g,e.target.value]:g.filter(V=>V!==e.target.value)).sort(M(s)).join(p):a=e.target.checked?e.target.value:"",R||v(a);const k=m(s);k.value=a,N?.({...e,target:k})}function F(e){const a=m(s);P?.({...e,target:a})}function w({value:e,disabled:a=!1}){return{name:I,value:e,checked:g.includes(e),onChange:z,onBlur:F,disabled:o||a}}n.useLayoutEffect(()=>{if(f===void 0&&y===void 0){const e=m(s);e.value&&v(e.value)}else if(i){const e=m(s);e.value=i}},[]);const u=A(r);return n.createElement(O,{className:l,sizer:r,label:t,hint:h,error:c,disabled:o,required:b,"data-nickui-component":S},n.createElement("div",{ref:s,className:d&&B("flex flex-col",{"gap-y-1.5":u==="xs","gap-y-1.75":u==="sm","gap-y-2":u==="base","gap-y-2.25":u==="lg","gap-y-2.5":u==="xl"})},d&&n.createElement(n.Fragment,null,d.map(e=>n.createElement(C,{key:e.value?.toString(),sizer:r,...w({value:e.value,disabled:e.disabled}),label:e.label,hint:e.hint}))),!d&&q?.(w),n.createElement("input",{...x,name:T,type:"hidden",className:"the-hidden-input hidden",disabled:o,required:b,"data-testid":"the-hidden-input"})))}function M(l){const r=[...l.current?.getElementsByTagName("input")||[]].filter(t=>t.type==="checkbox"||t.type==="radio").map(t=>t.value);return(t,h)=>{const c=r.indexOf(t),o=r.indexOf(h);return o===-1?-1:c===-1?1:c-o}}function m(l){return[...l.current?.getElementsByClassName("the-hidden-input")||[]][0]}j.__docgenInfo={description:`This component is the engine for the components that render multiple
checkables in a <Fieldset>, such as <Checkboxes>. It can handle both
multiValue behavior (such as when using checkboxes) and singleValue behavior
(such as when using radios).,`,methods:[],displayName:"CheckableFormControls",props:{sizer:{required:!1,tsType:{name:"union",raw:"SizerType | SizerType[]",elements:[{name:"unknown[number]",raw:"(typeof SIZERS)[number]"},{name:"Array",elements:[{name:"unknown[number]",raw:"(typeof SIZERS)[number]"}],raw:"SizerType[]"}]},description:`Changes the size of the component. A sizer string, or an array of sizer
strings for responsive sizing.`},label:{required:!1,tsType:{name:"DescriptorType"},description:"The main label to show above the form control(s), naming the field"},hint:{required:!1,tsType:{name:"DescriptorType"},description:`A hint about what kind of value the field accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"DescriptorType"},description:"Error message to show beneath the form control(s), or just `true` to\ntrigger the error style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the component"},value:{required:!1,tsType:{name:"ValueType"},description:`Sets the value of the component when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"ValueType"},description:"Sets the value of the component when using it as an uncontrolled component"},name:{required:!1,tsType:{name:"string"},description:"The name of the field"},render:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  inputProps: (config: {
    value: string;
    disabled?: boolean;
  }) => React.ComponentProps<'input'>,
) => React.ReactNode`,signature:{arguments:[{type:{name:"signature",type:"function",raw:`(config: {
  value: string;
  disabled?: boolean;
}) => React.ComponentProps<'input'>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  value: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}},name:"config"}],return:{name:"ReactComponentProps",raw:"React.ComponentProps<'input'>",elements:[{name:"literal",value:"'input'"}]}}},name:"inputProps"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Render function used to render customized checkable inputs. Call the
provided callback to get props to pass down to each input.`},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: React.ReactNode;
  hint?: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"hint",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:`{
  value: string;
  label: React.ReactNode;
  hint?: React.ReactNode;
  disabled?: boolean;
}[]`},description:"Adds the controls in the standard layout"},delimiter:{required:!1,tsType:{name:"string"},description:`Optionally override the delimiter used to split the value into individual
checkable values`},Checkable:{required:!0,tsType:{name:"ReactComponentType",raw:`React.ComponentType<
  React.ComponentProps<'input'> & CheckedFieldableProps
>`,elements:[{name:"intersection",raw:"React.ComponentProps<'input'> & CheckedFieldableProps",elements:[{name:"ReactComponentProps",raw:"React.ComponentProps<'input'>",elements:[{name:"literal",value:"'input'"}]},{name:"CheckedFieldableProps"}]}]},description:""},"data-nickui-component":{required:!1,tsType:{name:"string"},description:""}}};export{j as C};
