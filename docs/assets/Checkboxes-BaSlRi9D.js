import{r as a}from"./iframe-DzZ2548y.js";import{C as H}from"./Checkbox-DkyyvXiP.js";import{F as V}from"./Fieldset-6DZnlTGm.js";import{F as m}from"./index-C4eiBceS.js";import{c as j}from"./clsw-CBfrqCZ4.js";import{r as M}from"./randomId-Dfhrkieu.js";function C({delimiter:i=",",...t}){return a.createElement(N,{...t,delimiter:i,Checkable:H})}C.sizer=m;function N({className:i,sizer:t,label:n,hint:h,error:d,disabled:o,required:b,Checkable:q,name:T,value:f,defaultValue:R,options:c,render:P,onChange:E,onBlur:x,delimiter:u,...F}){const s=a.createRef(),[I]=a.useState(M()),[O,y]=a.useState(R),v=f!==void 0,l=v?f:O,g=!l||l===""?[]:u?l.split(u):[l];function S(e){let r;u?r=(e.target.checked?[...g,e.target.value]:g.filter(A=>A!==e.target.value)).sort(B(s)).join(u):r=e.target.checked?e.target.value:"",v||y(r);const k=p(s);k.value=r,E?.({...e,target:k})}function z(e){const r=p(s);x?.({...e,target:r})}function w({value:e,disabled:r=!1}){return{name:I,value:e,checked:g.includes(e),onChange:S,onBlur:z,disabled:o||r}}return a.useLayoutEffect(()=>{if(f===void 0&&R===void 0){const e=p(s);e.value&&y(e.value)}else if(l){const e=p(s);e.value=l}},[]),a.createElement(V,{className:i,sizer:t,label:n,hint:h,error:d,disabled:o,required:b},a.createElement("div",{ref:s,className:c&&j("flex flex-col",{"gap-y-2":!t||t===m.small,"gap-y-2.5":t===m.medium,"gap-y-3":t===m.large})},c&&a.createElement(a.Fragment,null,c.map(e=>a.createElement(q,{key:e.value?.toString(),sizer:t,...w({value:e.value,disabled:e.disabled}),label:e.label,hint:e.hint}))),!c&&P?.(w),a.createElement("input",{...F,name:T,type:"hidden",className:"the-hidden-input hidden",disabled:o,required:b,"data-testid":"the-hidden-input"})))}function B(i){const t=[...i.current?.getElementsByTagName("input")||[]].filter(n=>n.type==="checkbox"||n.type==="radio").map(n=>n.value);return(n,h)=>{const d=t.indexOf(n),o=t.indexOf(h);return o===-1?-1:d===-1?1:d-o}}function p(i){return[...i.current?.getElementsByClassName("the-hidden-input")||[]][0]}C.__docgenInfo={description:`Renders multiple checkboxes as one field in a Fieldset.

Form libraries like Formik rely on \`onChange\` events to trigger updates to
field values, and such events cannot have multiple targets. Therefore, to
function as one holistic field whose value represents all of the currently
checked checkboxes, the component's value is a single delimited-string that
is managed using a \`<input type="hidden">\`. Each checkbox represents a
substring that can be added to or removed from the delimited-string by
toggling the checked status.

@props {@link CheckablesProps} + {@link CommonFieldsetProps}`,methods:[],displayName:"Checkboxes",props:{name:{required:!1,tsType:{name:"string"},description:"The name for the field"},render:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  inputProps: (control: {
    value: string;
    disabled?: boolean;
  }) => React.ComponentProps<'input'>,
) => React.ReactNode`,signature:{arguments:[{type:{name:"signature",type:"function",raw:`(control: {
  value: string;
  disabled?: boolean;
}) => React.ComponentProps<'input'>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  value: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}},name:"control"}],return:{name:"ReactComponentProps",raw:"React.ComponentProps<'input'>",elements:[{name:"literal",value:"'input'"}]}}},name:"inputProps"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Render function used to render customized checkable inputs. Call the
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
}[]`},description:"Adds the controls in the standard layout"},onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Called when the value changes"},value:{required:!1,tsType:{name:"string"},description:`Sets the value when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"string"},description:"Sets the value when using it as an uncontrolled component"},delimiter:{required:!1,tsType:{name:"string"},description:`Optionally override the delimiter used to split the value into individual
checkable values`,defaultValue:{value:"','",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"FieldSizer"},description:'Changes the size of the field ("small", "medium", "large")'},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main label to show above the form control, naming the field"},hint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`A hint about what kind of value the control accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Error message to show along with the field"},required:{required:!1,tsType:{name:"boolean"},description:"Adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};N.__docgenInfo={description:`This component is the engine for the components that render multiple
checkables in a <Fieldset>, such as <Checkboxes>. It can handle both
multiValue behavior (such as when using checkboxes) and singleValue behavior
(such as when using radios).,`,methods:[],displayName:"Checkables",props:{name:{required:!1,tsType:{name:"string"},description:"The name for the field"},render:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  inputProps: (control: {
    value: string;
    disabled?: boolean;
  }) => React.ComponentProps<'input'>,
) => React.ReactNode`,signature:{arguments:[{type:{name:"signature",type:"function",raw:`(control: {
  value: string;
  disabled?: boolean;
}) => React.ComponentProps<'input'>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  value: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}},name:"control"}],return:{name:"ReactComponentProps",raw:"React.ComponentProps<'input'>",elements:[{name:"literal",value:"'input'"}]}}},name:"inputProps"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Render function used to render customized checkable inputs. Call the
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
}[]`},description:"Adds the controls in the standard layout"},onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Called when the value changes"},value:{required:!1,tsType:{name:"string"},description:`Sets the value when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"string"},description:"Sets the value when using it as an uncontrolled component"},delimiter:{required:!1,tsType:{name:"string"},description:`Optionally override the delimiter used to split the value into individual
checkable values`},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"FieldSizer"},description:'Changes the size of the field ("small", "medium", "large")'},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main label to show above the form control, naming the field"},hint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`A hint about what kind of value the control accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Error message to show along with the field"},required:{required:!1,tsType:{name:"boolean"},description:"Adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"},Checkable:{required:!0,tsType:{name:"ReactComponentType",raw:`React.ComponentType<
  React.ComponentProps<'input'> & CommonCheckedFieldProps
>`,elements:[{name:"intersection",raw:"React.ComponentProps<'input'> & CommonCheckedFieldProps",elements:[{name:"ReactComponentProps",raw:"React.ComponentProps<'input'>",elements:[{name:"literal",value:"'input'"}]},{name:"signature",type:"object",raw:`{
  /** Optionally add utility classes to the root element */
  className?: string;
  /** Changes the size of the field ("small", "medium", "large") */
  sizer?: FieldSizer;
  /** The main label to to the right of the form control, naming the field */
  label?: React.ReactNode;
  /** Additional detail about the field, placed directly below the label */
  hint?: React.ReactNode;
  /** Prevents the user from interacting with the control */
  disabled?: boolean;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1},description:"Optionally add utility classes to the root element"},{key:"sizer",value:{name:"FieldSizer",required:!1},description:'Changes the size of the field ("small", "medium", "large")'},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1},description:"The main label to to the right of the form control, naming the field"},{key:"hint",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1},description:"Additional detail about the field, placed directly below the label"},{key:"disabled",value:{name:"boolean",required:!1},description:"Prevents the user from interacting with the control"}]}}]}]},description:""}},composes:["Omit"]};export{C,N as a};
