import{r as t}from"./iframe-C0VeZLsT.js";import{C as o}from"./CheckableFormControl-B9_vkbgP.js";import{r}from"./index-V48DHmLJ.js";const n=`peer-checked:bg-[url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2010%2010'%3E%3Cpolygon%20fill='%23fff'%20fill-opacity='1'%20points='3.5%205.45%201.5%203.45%200%204.95%203.5%208.45%2010%201.95%208.5%20.45'/%3E%3C/svg%3E%0A")]`,i=r({slots:{root:"",input:"peer opacity-0 absolute -z-1",indicator:`
      relative
      border-2 border-black rounded-[3px]
      bg-white peer-checked:bg-black 
      pointer-events-none select-none
      ${n} bg-no-repeat
    `},variants:{sizer:{xs:{indicator:"size-3.5 top-0.25 bg-size-[8px]"},sm:{indicator:"size-4 top-[2.5px] bg-size-[10px]"},base:{indicator:"size-4.75 top-0.75 bg-size-[12px]"},lg:{indicator:"size-5.5 top-[3.5px] bg-size-[14px]"},xl:{indicator:"size-6 top-0.75 bg-size-[16px]"}},isDisabled:{true:{indicator:`
          bg-gray-100 border-gray-300
          peer-checked:bg-gray-400 peer-checked:border-gray-400
        `}},isKeyboardFocused:{true:{indicator:`
          border-blue-800 shadow-[0_0_11px] shadow-blue-300 outline-0 
          peer-checked:bg-blue-800
        `}}},defaultVariants:{sizer:"base",isDisabled:!1,isKeyboardFocused:!1}});function s(e){return t.createElement(o,{...e,type:"checkbox",styler:i,"data-nickui-component":"Checkbox"})}s.__docgenInfo={description:`A form control that allow users to choose zero to many options from a set
@param props {@link CheckboxProps}`,methods:[],displayName:"Checkbox",props:{sizer:{required:!1,tsType:{name:"union",raw:"SizerType | SizerType[]",elements:[{name:"unknown[number]",raw:"(typeof SIZERS)[number]"},{name:"Array",elements:[{name:"unknown[number]",raw:"(typeof SIZERS)[number]"}],raw:"SizerType[]"}]},description:`Changes the size of the component. A sizer string, or an array of sizer
strings for responsive sizing.`},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the component"},label:{required:!1,tsType:{name:"DescriptorType"},description:"The main label to to the right of the form control, naming the field"},hint:{required:!1,tsType:{name:"DescriptorType"},description:"Additional detail about the field, placed directly below the label"},checked:{required:!1,tsType:{name:"boolean"},description:`Sets the checked state of the component when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultChecked:{required:!1,tsType:{name:"boolean"},description:`Sets the checked state of the component when using it as a uncontrolled
component`},name:{required:!1,tsType:{name:"string"},description:"The name of the field"}}};export{s as C};
