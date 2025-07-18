import{r}from"./iframe-D0vVQOb0.js";import{a as o}from"./Checkbox-Y-DNF4m1.js";import{a as n,S as e}from"./index-BJKEptQa.js";const i=n({slots:{root:"",labelWithOffset:"",input:"peer opacity-0 absolute -z-1",indicator:`
      flex justify-center items-center
      bg-white relative
      border-2 border-black rounded-full
      pointer-events-none select-none
      peer-checked:bg-black
      peer-checked:after:bg-white peer-checked:after:block peer-checked:after:rounded-full
    `},variants:{sizer:{[e.small]:{indicator:"size-3.5 top-0.25 peer-checked:after:size-1.5"},[e.base]:{indicator:"size-4 top-0.75 peer-checked:after:size-1.5"},[e.large]:{indicator:"size-5 top-0.75 peer-checked:after:size-2"}},isDisabled:{true:{indicator:`
          bg-gray-100 border-gray-300
          peer-checked:bg-gray-400 peer-checked:border-gray-400
        `}},isKeyboardFocused:{true:{indicator:`
          border-blue-800 shadow-[0_0_11px] shadow-blue-300 outline-0 
          peer-checked:bg-blue-800
        `}}},defaultVariants:{sizer:e.base,isDisabled:!1,isKeyboardFocused:!1}});function t(a){return r.createElement(o,{...a,type:"radio",styler:i})}t.sizer=e;t.__docgenInfo={description:`A form control that allow users to choose one option from a set
@param props {@link RadioProps} {@link CommonCheckedFieldProps}`,methods:[],displayName:"Radio",props:{checked:{required:!1,tsType:{name:"boolean"},description:`Sets the checked state of the Radio when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultChecked:{required:!1,tsType:{name:"boolean"},description:`Sets the checked state of the Radio when using it as a uncontrolled
component`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Called when the checked state changes"},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"union",raw:"Sizer | Sizer[]",elements:[{name:"Sizer"},{name:"Array",elements:[{name:"Sizer"}],raw:"Sizer[]"}]},description:'Changes the size of the field ("small", "base", "large")'},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main label to to the right of the form control, naming the field"},hint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Additional detail about the field, placed directly below the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};export{t as R};
