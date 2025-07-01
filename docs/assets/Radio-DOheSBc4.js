import{r as t}from"./iframe-Cy2zHahl.js";import{c as p,F as e}from"./index-Czi7Upa3.js";import{C as m}from"./CheckedField-D1NCNH8j.js";const h=p({slots:{input:"peer opacity-0 absolute -z-1",indicator:`
      inline-flex justify-center items-center
      bg-white absolute
      border-2 border-black rounded-full
      pointer-events-none select-none
      peer-focus:border-indigo-800 peer-focus:shadow-[0_0_11px] peer-focus:shadow-indigo-300 peer-focus:outline-0 
      peer-checked:bg-black
      peer-checked:after:bg-white peer-checked:after:block peer-checked:after:rounded-full
      peer-focus:peer-checked:bg-indigo-800
      peer-disabled:bg-gray-100 peer-disabled:border-gray-300
      peer-disabled:peer-checked:bg-gray-400 peer-disabled:peer-checked:border-gray-400
    `},variants:{sizer:{[e.small]:{indicator:"size-3.5 top-0.25 peer-checked:after:size-1.5"},[e.medium]:{indicator:"size-4 top-0.75 peer-checked:after:size-1.5"},[e.large]:{indicator:"size-5 top-0.75 peer-checked:after:size-2"}}},defaultVariants:{sizer:e.small}});function i({className:s,label:c,explainer:d,sizer:a,disabled:r,...l}){const n=t.useRef(null),o=h({sizer:a});return t.createElement(m,{className:s,label:c,explainer:d,controlVisualRef:n,sizer:a,disabled:r},t.createElement("input",{type:"radio",className:o.input(),disabled:r,...l}),t.createElement("span",{ref:n,className:o.indicator()}))}i.sizer=e;i.__docgenInfo={description:`A form control that allow users to choose one option from a set
@param props {@link RadioProps} {@link CommonCheckedFieldProps}`,methods:[],displayName:"Radio",props:{checked:{required:!1,tsType:{name:"boolean"},description:`Sets the checked state of the Radio when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultChecked:{required:!1,tsType:{name:"boolean"},description:`Sets the checked state of the Radio when using it as a uncontrolled
component`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Called when the checked state changes"},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"FieldSizer"},description:'Changes the size of the field ("small", "medium", "large")'},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main label to to the right of the form control, naming the field"},explainer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`A more detailed label explaining the purpose of the field, placed
directly below the main label`},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};export{i as R};
