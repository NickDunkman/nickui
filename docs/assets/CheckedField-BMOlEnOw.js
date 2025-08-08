import{r as e}from"./iframe-C3OS0XiJ.js";import{a as g,u as v,c as h}from"./index-X5EXH7qk.js";import{u as p}from"./useElementBounds-D2MAHj_L.js";const b=g({slots:{container:"cursor-pointer flex relative",control:"absolute top-0 left-0",descriptors:"flex flex-col",hint:"text-gray-500"},variants:{sizer:{xs:{container:"gap-2 text-xs"},sm:{container:"gap-2.5 text-sm",hint:"text-xs"},base:{container:"gap-3 text-base",hint:"text-sm"},lg:{container:"gap-3.5 text-lg",hint:"text-base"},xl:{container:"gap-4 text-xl",hint:"text-lg"}},isDisabled:{true:{container:"cursor-not-allowed text-gray-400",hint:"text-gray-300"}}},defaultVariants:{sizer:"base",isDisabled:!1}});function f({children:r,className:m,label:t,labelId:o,hint:n,hintId:d,sizer:l,disabled:c,...u}){const s=e.useRef(null),x=p(s),i=v(l),a=b({sizer:i,isDisabled:c});return e.createElement("label",{"data-nickui-component":"CheckedField","data-nickui-sizer":Array.isArray(l)?l.join(","):l,"data-nickui-resolved-sizer":i,...u},e.createElement("div",{className:h(a.container(),m)},e.createElement("span",{style:{paddingLeft:x?.width||0},className:"relative"},e.createElement("div",{className:a.control(),ref:s},r),"​"),(t||n)&&e.createElement("div",{className:a.descriptors()},t&&e.createElement("div",{id:o},t),n&&e.createElement("div",{className:a.hint(),id:d},n))))}f.__docgenInfo={description:`Wraps a single checkable form control with a standard layout (label &
hint, to the right of the control).

This is simpler than the Field component. There’s no \`error\` message, since
if one or both possible values is invalid, the field has no purpose. And
there’s no \`required\` state, since that would make the unchecked state
invalid.

Note: this layout is already built-into Checkbox, Radio, and Switch—you can
use this component to create a custom form control with the same layout.`,methods:[],displayName:"CheckedField",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the form-control section of the Field"},labelId:{required:!1,tsType:{name:"string"},description:"For accessibility purposes: an id to set on the label element"},hintId:{required:!1,tsType:{name:"string"},description:"For accessibility purposes: an id to set on the hint element"},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"union",raw:"SizerType | SizerType[]",elements:[{name:"union",raw:`| 'xs'
| 'sm'
| 'base'
| 'lg'
| 'xl'
| 'sm:xs'
| 'sm:sm'
| 'sm:base'
| 'sm:lg'
| 'sm:xl'
| 'md:xs'
| 'md:sm'
| 'md:base'
| 'md:lg'
| 'md:xl'
| 'lg:xs'
| 'lg:sm'
| 'lg:base'
| 'lg:lg'
| 'lg:xl'
| 'xl:xs'
| 'xl:sm'
| 'xl:base'
| 'xl:lg'
| 'xl:xl'`,elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'sm:xs'"},{name:"literal",value:"'sm:sm'"},{name:"literal",value:"'sm:base'"},{name:"literal",value:"'sm:lg'"},{name:"literal",value:"'sm:xl'"},{name:"literal",value:"'md:xs'"},{name:"literal",value:"'md:sm'"},{name:"literal",value:"'md:base'"},{name:"literal",value:"'md:lg'"},{name:"literal",value:"'md:xl'"},{name:"literal",value:"'lg:xs'"},{name:"literal",value:"'lg:sm'"},{name:"literal",value:"'lg:base'"},{name:"literal",value:"'lg:lg'"},{name:"literal",value:"'lg:xl'"},{name:"literal",value:"'xl:xs'"},{name:"literal",value:"'xl:sm'"},{name:"literal",value:"'xl:base'"},{name:"literal",value:"'xl:lg'"},{name:"literal",value:"'xl:xl'"}]},{name:"Array",elements:[{name:"union",raw:`| 'xs'
| 'sm'
| 'base'
| 'lg'
| 'xl'
| 'sm:xs'
| 'sm:sm'
| 'sm:base'
| 'sm:lg'
| 'sm:xl'
| 'md:xs'
| 'md:sm'
| 'md:base'
| 'md:lg'
| 'md:xl'
| 'lg:xs'
| 'lg:sm'
| 'lg:base'
| 'lg:lg'
| 'lg:xl'
| 'xl:xs'
| 'xl:sm'
| 'xl:base'
| 'xl:lg'
| 'xl:xl'`,elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'sm:xs'"},{name:"literal",value:"'sm:sm'"},{name:"literal",value:"'sm:base'"},{name:"literal",value:"'sm:lg'"},{name:"literal",value:"'sm:xl'"},{name:"literal",value:"'md:xs'"},{name:"literal",value:"'md:sm'"},{name:"literal",value:"'md:base'"},{name:"literal",value:"'md:lg'"},{name:"literal",value:"'md:xl'"},{name:"literal",value:"'lg:xs'"},{name:"literal",value:"'lg:sm'"},{name:"literal",value:"'lg:base'"},{name:"literal",value:"'lg:lg'"},{name:"literal",value:"'lg:xl'"},{name:"literal",value:"'xl:xs'"},{name:"literal",value:"'xl:sm'"},{name:"literal",value:"'xl:base'"},{name:"literal",value:"'xl:lg'"},{name:"literal",value:"'xl:xl'"}]}],raw:"SizerType[]"}]},description:`Changes the size of the field ("xs", "sm", "base", "lg", "xl", "sm:base",
"lg:xl", etc)`},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main label to to the right of the form control, naming the field"},hint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Additional detail about the field, placed directly below the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}}};export{f as C};
