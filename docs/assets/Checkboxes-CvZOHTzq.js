import{r as t}from"./iframe-DOqKYI6o.js";import{C as V}from"./Checkbox-DPJbGJ0p.js";import{F as j}from"./Fieldset-TrMugLKy.js";import{u as M,c as B,S as h}from"./index-D3vd8min.js";import{r as L}from"./randomId-Dfhrkieu.js";function N({delimiter:i=",",...a}){return t.createElement(q,{...a,delimiter:i,Checkable:V})}N.sizer=h;function q({className:i,sizer:a,label:n,hint:g,error:d,disabled:o,required:R,Checkable:T,name:z,value:f,defaultValue:y,options:c,render:S,onChange:P,onBlur:E,delimiter:u,...x}){const s=t.createRef(),[I]=t.useState(L()),[A,v]=t.useState(y),w=f!==void 0,l=w?f:A,b=!l||l===""?[]:u?l.split(u):[l];function O(e){let r;u?r=(e.target.checked?[...b,e.target.value]:b.filter(H=>H!==e.target.value)).sort(_(s)).join(u):r=e.target.checked?e.target.value:"",w||v(r);const C=p(s);C.value=r,P?.({...e,target:C})}function F(e){const r=p(s);E?.({...e,target:r})}function k({value:e,disabled:r=!1}){return{name:I,value:e,checked:b.includes(e),onChange:O,onBlur:F,disabled:o||r}}t.useLayoutEffect(()=>{if(f===void 0&&y===void 0){const e=p(s);e.value&&v(e.value)}else if(l){const e=p(s);e.value=l}},[]);const m=M(a);return t.createElement(j,{className:i,sizer:a,label:n,hint:g,error:d,disabled:o,required:R},t.createElement("div",{ref:s,className:c&&B("flex flex-col",{"gap-y-2":!m||m===h.small,"gap-y-2.5":m===h.medium,"gap-y-3":m===h.large})},c&&t.createElement(t.Fragment,null,c.map(e=>t.createElement(T,{key:e.value?.toString(),sizer:a,...k({value:e.value,disabled:e.disabled}),label:e.label,hint:e.hint}))),!c&&S?.(k),t.createElement("input",{...x,name:z,type:"hidden",className:"the-hidden-input hidden",disabled:o,required:R,"data-testid":"the-hidden-input"})))}function _(i){const a=[...i.current?.getElementsByTagName("input")||[]].filter(n=>n.type==="checkbox"||n.type==="radio").map(n=>n.value);return(n,g)=>{const d=a.indexOf(n),o=a.indexOf(g);return o===-1?-1:d===-1?1:d-o}}function p(i){return[...i.current?.getElementsByClassName("the-hidden-input")||[]][0]}N.__docgenInfo={description:`Renders multiple checkboxes as one field in a Fieldset.

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
checkable values`,defaultValue:{value:"','",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"union",raw:"Sizer | Sizer[]",elements:[{name:"Sizer"},{name:"Array",elements:[{name:"Sizer"}],raw:"Sizer[]"}]},description:`Changes the size of the field ("small", "medium", "large", "sm:small",
"md:large", etc)`},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main label to show above the form control, naming the field"},hint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`A hint about what kind of value the control accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Error message to show along with the field"},required:{required:!1,tsType:{name:"boolean"},description:"Adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};q.__docgenInfo={description:`This component is the engine for the components that render multiple
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
checkable values`},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"union",raw:"Sizer | Sizer[]",elements:[{name:"Sizer"},{name:"Array",elements:[{name:"Sizer"}],raw:"Sizer[]"}]},description:`Changes the size of the field ("small", "medium", "large", "sm:small",
"md:large", etc)`},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main label to show above the form control, naming the field"},hint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`A hint about what kind of value the control accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Error message to show along with the field"},required:{required:!1,tsType:{name:"boolean"},description:"Adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"},Checkable:{required:!0,tsType:{name:"ReactComponentType",raw:`React.ComponentType<
  React.ComponentProps<'input'> & CommonCheckedFieldProps
>`,elements:[{name:"intersection",raw:"React.ComponentProps<'input'> & CommonCheckedFieldProps",elements:[{name:"ReactComponentProps",raw:"React.ComponentProps<'input'>",elements:[{name:"literal",value:"'input'"}]},{name:"signature",type:"object",raw:`{
  /** Optionally add utility classes to the root element */
  className?: string;
  /** Changes the size of the field ("small", "medium", "large") */
  sizer?: Sizer | Sizer[];
  /** The main label to to the right of the form control, naming the field */
  label?: React.ReactNode;
  /** Additional detail about the field, placed directly below the label */
  hint?: React.ReactNode;
  /** Prevents the user from interacting with the control */
  disabled?: boolean;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1},description:"Optionally add utility classes to the root element"},{key:"sizer",value:{name:"union",raw:"Sizer | Sizer[]",elements:[{name:"Sizer"},{name:"Array",elements:[{name:"Sizer"}],raw:"Sizer[]"}],required:!1},description:'Changes the size of the field ("small", "medium", "large")'},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1},description:"The main label to to the right of the form control, naming the field"},{key:"hint",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1},description:"Additional detail about the field, placed directly below the label"},{key:"disabled",value:{name:"boolean",required:!1},description:"Prevents the user from interacting with the control"}]}}]}]},description:""}},composes:["Omit"]};export{N as C,q as a};
