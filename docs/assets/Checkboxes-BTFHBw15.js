import{r as n}from"./iframe-DYxnnFe3.js";import{C as H}from"./Checkbox-miL9dw_Z.js";import{F as V}from"./Fieldset-B1tklyXX.js";import{F as h}from"./index-Czi7Upa3.js";import{c as j}from"./clsw-D-KgF5mV.js";import{r as M}from"./randomId-Dfhrkieu.js";function T({delimiter:i=",",...t}){return n.createElement(P,{...t,delimiter:i,Checkable:H})}T.sizer=h;function P({className:i,sizer:t,label:c,hint:r,error:f,disabled:o,required:d,Checkable:E,name:x,value:g,defaultValue:w,options:u,render:b,onChange:R,onBlur:y,delimiter:p,...F}){const s=n.createRef(),[I]=n.useState(M()),[O,k]=n.useState(w),N=g!==void 0,l=N?g:O,v=!l||l===""?[]:p?l.split(p):[l];function S(e){let a;p?a=(e.target.checked?[...v,e.target.value]:v.filter(A=>A!==e.target.value)).sort(L(s)).join(p):a=e.target.checked?e.target.value:"",N||k(a);const q=m(s);q.value=a,R==null||R({...e,target:q})}function z(e){const a=m(s);y==null||y({...e,target:a})}function C({value:e,disabled:a=!1}){return{name:I,value:e,checked:v.includes(e),onChange:S,onBlur:z,disabled:o||a}}return n.useLayoutEffect(()=>{if(g===void 0&&w===void 0){const e=m(s);e.value&&k(e.value)}else if(l){const e=m(s);e.value=l}},[]),n.createElement(V,{className:i,sizer:t,label:c,hint:r,error:f,disabled:o,required:d},n.createElement("div",{ref:s,className:u&&j("flex flex-col",{"gap-y-2":!t||t===h.small,"gap-y-2.5":t===h.medium,"gap-y-3":t===h.large})},u&&n.createElement(n.Fragment,null,u.map(e=>{var a;return n.createElement(E,{key:(a=e.value)==null?void 0:a.toString(),sizer:t,...C({value:e.value,disabled:e.disabled}),label:e.label,hint:e.hint})})),!u&&(b==null?void 0:b(C)),n.createElement("input",{...F,name:x,type:"hidden",className:"the-hidden-input hidden",disabled:o,required:d,"data-testid":"the-hidden-input"})))}function L(i){var c;const t=[...((c=i.current)==null?void 0:c.getElementsByTagName("input"))||[]].filter(r=>r.type==="checkbox"||r.type==="radio").map(r=>r.value);return(r,f)=>{const o=t.indexOf(r),d=t.indexOf(f);return d===-1?-1:o===-1?1:o-d}}function m(i){var t;return[...((t=i.current)==null?void 0:t.getElementsByClassName("the-hidden-input"))||[]][0]}T.__docgenInfo={description:`Renders multiple checkboxes as one field in a Fieldset.

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
number format`},error:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Error message to show along with the field"},required:{required:!1,tsType:{name:"boolean"},description:"Adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};P.__docgenInfo={description:`This component is the engine for the components that render multiple
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
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1},description:"Optionally add utility classes to the root element"},{key:"sizer",value:{name:"FieldSizer",required:!1},description:'Changes the size of the field ("small", "medium", "large")'},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1},description:"The main label to to the right of the form control, naming the field"},{key:"hint",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1},description:"Additional detail about the field, placed directly below the label"},{key:"disabled",value:{name:"boolean",required:!1},description:"Prevents the user from interacting with the control"}]}}]}]},description:""}},composes:["Omit"]};export{T as C,P as a};
