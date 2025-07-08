import{r}from"./iframe-BCtXYBx8.js";import{a as o}from"./Checkbox-CRcWqlGi.js";import{c as n,F as e}from"./index-Czi7Upa3.js";const i=n({slots:{root:"",labelWithOffset:"pt-0.5",input:"peer opacity-0 absolute -z-1",indicator:`
      relative rounded-l-full rounded-r-full bg-gray-300
      peer-checked:bg-emerald-500
      transition-colors duration-100 east-out
      after:border-transparent
      pointer-events-none

      after:bg-white after:rounded-full after:absolute after:m-0.5
      after:transition-transform after:duration-100 after:east-out
      after:shadow-md/15
    `},variants:{sizer:{[e.small]:{root:"min-h-5",indicator:"w-8 h-5 after:size-4 after:border-5 peer-checked:after:translate-x-3"},[e.medium]:{root:"min-h-6",indicator:"w-10 h-6 after:size-5 after:border-6 peer-checked:after:translate-x-4"},[e.large]:{root:"min-h-7",indicator:"w-12 h-7 after:size-6 after:border-7 peer-checked:after:translate-x-5"}},isDisabled:{true:{indicator:"bg-gray-300 after:bg-gray-100 peer-checked:bg-gray-300 after:shadow-none"}},isFocused:{true:{indicator:`
          after:bg-indigo-600 after:border-white
        `}}},defaultVariants:{sizer:e.small,isDisabled:!1,isFocused:!1}});function t(a){return r.createElement(o,{...a,type:"checkbox",styler:i})}t.sizer=e;t.__docgenInfo={description:`A variation of the Checkbox component that has a more explict-feeling "off"
state. Whereas a group of co-located Checkbox fields feels more like multiple
options for one field, a group of Switch fields feels more like discrete fields
under a common category.
@props {@link SwitchProps}`,methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:`Sets the checked state of the Checkbox when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultChecked:{required:!1,tsType:{name:"boolean"},description:`Sets the checked state of the Checkbox when using it as a uncontrolled
component`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Called when the checked state changes"},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"FieldSizer"},description:'Changes the size of the field ("small", "medium", "large")'},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main label to to the right of the form control, naming the field"},hint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Additional detail about the field, placed directly below the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};export{t as S};
