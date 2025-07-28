import{r as a}from"./iframe-BuPrAHyZ.js";import{a as l}from"./Checkbox-CG00TjkV.js";import{a as t}from"./index-BKq8PzBJ.js";const n=t({slots:{root:"",input:"peer opacity-0 absolute -z-1",indicator:`
      relative rounded-l-full rounded-r-full bg-gray-300
      peer-checked:bg-emerald-500
      transition-colors duration-100 east-out
      after:border-transparent
      pointer-events-none

      after:bg-white after:rounded-full after:absolute 
      after:transition-transform after:duration-100 after:east-out
      after:shadow-md/15
    `},variants:{sizer:{xs:{root:"min-h-4",indicator:"w-6 h-4 after:size-3 after:border-[3.5px] peer-checked:after:translate-x-2 after:m-0.5"},sm:{root:"min-h-5",indicator:"w-7.5 h-5 after:size-3.75 after:border-[4.5px] peer-checked:after:translate-x-2.5 after:m-[2.5px]"},base:{root:"min-h-6",indicator:"w-9 h-6 after:size-4.5 after:border-[5.5px] peer-checked:after:translate-x-3 after:m-0.75"},lg:{root:"min-h-7",indicator:"w-10.5 h-7 after:size-5.25 after:border-[6.5px] peer-checked:after:translate-x-3.5 after:m-[3.5px]"},xl:{root:"min-h-8 pt-0.5",indicator:"w-12 h-8 after:size-6 after:border-[7.5px] peer-checked:after:translate-x-4 after:m-1"}},isDisabled:{true:{indicator:"bg-gray-300 after:bg-gray-100 peer-checked:bg-gray-300 after:shadow-none"}},isKeyboardFocused:{true:{indicator:`
          after:bg-blue-600 after:border-white
        `}}},defaultVariants:{sizer:"base",isDisabled:!1,isKeyboardFocused:!1}});function r(e){return a.createElement(l,{...e,type:"checkbox",styler:n})}r.__docgenInfo={description:`A variation of the Checkbox component that has a more explict-feeling "off"
state. Whereas a group of co-located Checkbox fields feels more like multiple
options for one field, a group of Switch fields feels more like discrete fields
under a common category.
@props {@link SwitchProps}`,methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:`Sets the checked state of the Checkbox when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultChecked:{required:!1,tsType:{name:"boolean"},description:`Sets the checked state of the Checkbox when using it as a uncontrolled
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
"lg:xl", etc)`},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main label to to the right of the form control, naming the field"},hint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Additional detail about the field, placed directly below the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};export{r as S};
