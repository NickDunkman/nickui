import{r as a}from"./iframe-DwiZhhBp.js";import{a as l}from"./Checkbox-lYNOyRPg.js";import{a as n}from"./index-BTldlRDU.js";const t=n({slots:{root:"",input:"peer opacity-0 absolute -z-1",indicator:`
      flex justify-center items-center
      bg-white relative
      border-2 border-black rounded-full
      pointer-events-none select-none
      peer-checked:bg-black
      peer-checked:after:bg-white peer-checked:after:block peer-checked:after:rounded-full
    `},variants:{sizer:{xs:{indicator:"size-3.5 top-0.25 peer-checked:after:size-1.25"},sm:{indicator:"size-4 top-[2.5px] peer-checked:after:size-1.5"},base:{indicator:"size-4.75 top-0.75 peer-checked:after:size-1.75"},lg:{indicator:"size-5.5 top-[3.5px] peer-checked:after:size-2"},xl:{indicator:"size-6 top-0.75 peer-checked:after:size-2.25"}},isDisabled:{true:{indicator:`
          bg-gray-100 border-gray-300
          peer-checked:bg-gray-400 peer-checked:border-gray-400
        `}},isKeyboardFocused:{true:{indicator:`
          border-blue-800 shadow-[0_0_11px] shadow-blue-300 outline-0 
          peer-checked:bg-blue-800
        `}}},defaultVariants:{sizer:"base",isDisabled:!1,isKeyboardFocused:!1}});function s(e){return a.createElement(l,{...e,type:"radio",styler:t,"data-nickui-component":"Radio"})}s.__docgenInfo={description:`A form control that allow users to choose one option from a set
@param props {@link RadioProps} {@link CommonCheckedFieldProps}`,methods:[],displayName:"Radio",props:{checked:{required:!1,tsType:{name:"boolean"},description:`Sets the checked state of the Radio when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultChecked:{required:!1,tsType:{name:"boolean"},description:`Sets the checked state of the Radio when using it as a uncontrolled
component`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Called when the checked state changes"},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"union",raw:"SizerType | SizerType[]",elements:[{name:"union",raw:`| 'xs'
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
"lg:xl", etc)`},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main label to to the right of the form control, naming the field"},hint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Additional detail about the field, placed directly below the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};export{s as R};
