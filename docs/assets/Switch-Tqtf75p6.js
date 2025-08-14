import{r as t}from"./iframe-D_dx4C3o.js";import{C as r}from"./CheckableFormControl-Du16gofu.js";import{r as a}from"./index-D1YO4riR.js";const o=a({slots:{root:"",input:"peer opacity-0 absolute -z-1",indicator:`
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
        `}}},defaultVariants:{sizer:"base",isDisabled:!1,isKeyboardFocused:!1}});function n(e){return t.createElement(r,{...e,type:"checkbox",styler:o,"data-nickui-component":"Switch"})}n.__docgenInfo={description:`A variation of the Checkbox component that has a more explict-feeling "off"
state. Whereas a group of co-located Checkbox fields feels more like multiple
options for one field, a group of Switch fields feels more like discrete fields
under a common category.
@props {@link SwitchProps}`,methods:[],displayName:"Switch",props:{sizer:{required:!1,tsType:{name:"union",raw:"SizerType | SizerType[]",elements:[{name:"unknown[number]",raw:"(typeof SIZERS)[number]"},{name:"Array",elements:[{name:"unknown[number]",raw:"(typeof SIZERS)[number]"}],raw:"SizerType[]"}]},description:`Changes the size of the component. A sizer string, or an array of sizer
strings for responsive sizing.`},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the component"},label:{required:!1,tsType:{name:"DescriptorType"},description:"The main label to to the right of the form control, naming the field"},hint:{required:!1,tsType:{name:"DescriptorType"},description:"Additional detail about the field, placed directly below the label"},checked:{required:!1,tsType:{name:"boolean"},description:`Sets the checked state of the component when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultChecked:{required:!1,tsType:{name:"boolean"},description:`Sets the checked state of the component when using it as a uncontrolled
component`},name:{required:!1,tsType:{name:"string"},description:"The name of the field"}}};export{n as S};
