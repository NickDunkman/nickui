import{r}from"./iframe-ClCKDRnM.js";import{C as t}from"./CheckableFormControl-CN_kNOwB.js";import{r as o}from"./index-C9N6JpZ7.js";const i=o({slots:{root:"",input:"peer opacity-0 absolute -z-1",indicator:`
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
        `}}},defaultVariants:{sizer:"base",isDisabled:!1,isKeyboardFocused:!1}});function n(e){return r.createElement(t,{...e,type:"radio",styler:i,"data-nickui-component":"Radio"})}n.__docgenInfo={description:`A form control that allow users to choose one option from a set
@param props {@link RadioProps}`,methods:[],displayName:"Radio",props:{sizer:{required:!1,tsType:{name:"union",raw:"SizerType | SizerType[]",elements:[{name:"unknown[number]",raw:"(typeof SIZERS)[number]"},{name:"Array",elements:[{name:"unknown[number]",raw:"(typeof SIZERS)[number]"}],raw:"SizerType[]"}]},description:`Changes the size of the component. A sizer string, or an array of sizer
strings for responsive sizing.`},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the component"},label:{required:!1,tsType:{name:"DescriptorType"},description:"The main label to to the right of the form control, naming the field"},hint:{required:!1,tsType:{name:"DescriptorType"},description:"Additional detail about the field, placed directly below the label"},checked:{required:!1,tsType:{name:"boolean"},description:`Sets the checked state of the component when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultChecked:{required:!1,tsType:{name:"boolean"},description:`Sets the checked state of the component when using it as a uncontrolled
component`},name:{required:!1,tsType:{name:"string"},description:"The name of the field"}}};export{n as R};
