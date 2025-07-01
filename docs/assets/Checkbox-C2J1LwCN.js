import{r as e}from"./iframe-Cy2zHahl.js";import{C}from"./CheckedField-D1NCNH8j.js";import{c as z,F as n}from"./index-Czi7Upa3.js";import{c as R}from"./clsw-D-KgF5mV.js";const T=`peer-checked:bg-[url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2010%209'%3E%3Cpolygon%20fill='%23fff'%20fill-opacity='1'%20points='3.5%205.45%201.5%203.45%200%204.95%203.5%208.45%2010%201.95%208.5%20.45'/%3E%3C/svg%3E%0A")]`,E=z({slots:{root:"",input:"peer opacity-0 absolute -z-1",indicator:`
      bg-white relative
      border-2 border-black rounded-[3px]
      bg-no-repeat bg-center
      pointer-events-none select-none
      peer-checked:bg-black ${T}
      peer-disabled:bg-gray-100 peer-disabled:border-gray-300
      peer-disabled:peer-checked:bg-gray-400 peer-disabled:peer-checked:border-gray-400
    `},variants:{sizer:{[n.small]:{indicator:"size-3.5 top-0.25 bg-size-[8px_8px]"},[n.medium]:{indicator:"size-4 top-0.75 bg-size-[10px_10px]"},[n.large]:{indicator:"size-5 top-0.75 bg-size-[13px_13px]"}},isDisabled:{true:{indicator:`
          bg-gray-100 border-gray-300
          peer-checked:bg-gray-400 peer-checked:border-gray-400
        `}},isFocused:{true:{indicator:`
          border-indigo-800 shadow-[0_0_11px] shadow-indigo-300 outline-0 
          peer-checked:bg-indigo-800
        `}}},defaultVariants:{sizer:n.small,isDisabled:!1,isFocused:!1}});function u(i){return e.createElement(g,{...i})}u.sizer=n;function g({className:i,sizer:l,label:f,explainer:b,disabled:a,styler:y=E,onBlur:r,onFocus:o,...k}){const p=e.useRef(null),[s,h]=e.useState(!1),[c,m]=e.useState(!1);function w(t){t.preventDefault(),s||h(!0)}function x(t){o==null||o(t),c||m(!0)}function v(t){r==null||r(t),c&&m(!1),s&&h(!1)}const d=y({sizer:l,isDisabled:!!a,isFocused:c&&!a&&!s});return e.createElement(C,{className:R(d.root(),i),label:f,explainer:b,controlVisualRef:p,sizer:l,disabled:a,onMouseDown:w},e.createElement("input",{type:"checkbox",className:d.input(),disabled:a,onFocus:x,onBlur:v,...k}),e.createElement("div",{ref:p,className:d.indicator()}))}u.__docgenInfo={description:`A form control that allow users to choose zero to many options from a set
@param props {@link CheckboxProps} {@link CommonCheckedFieldProps}`,methods:[],displayName:"Checkbox",props:{checked:{required:!1,tsType:{name:"boolean"},description:`Sets the checked state of the Checkbox when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultChecked:{required:!1,tsType:{name:"boolean"},description:`Sets the checked state of the Checkbox when using it as a uncontrolled
component`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Called when the checked state changes"},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"FieldSizer"},description:'Changes the size of the field ("small", "medium", "large")'},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main label to to the right of the form control, naming the field"},explainer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`A more detailed label explaining the purpose of the field, placed
directly below the main label`},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};g.__docgenInfo={description:`This component is the engine of the Checkbox component. You can pass in
alternate styles if you want the control to look different (such as for
the Switch component!)`,methods:[],displayName:"CheckboxBase",props:{checked:{required:!1,tsType:{name:"boolean"},description:`Sets the checked state of the Checkbox when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultChecked:{required:!1,tsType:{name:"boolean"},description:`Sets the checked state of the Checkbox when using it as a uncontrolled
component`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Called when the checked state changes"},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"FieldSizer"},description:'Changes the size of the field ("small", "medium", "large")'},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main label to to the right of the form control, naming the field"},explainer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`A more detailed label explaining the purpose of the field, placed
directly below the main label`},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"},styler:{required:!1,tsType:{name:"any"},description:"",defaultValue:{value:`tv({
  slots: {
    root: '',
    input: 'peer opacity-0 absolute -z-1',
    indicator: \`
      bg-white relative
      border-2 border-black rounded-[3px]
      bg-no-repeat bg-center
      pointer-events-none select-none
      peer-checked:bg-black \${checkedBg}
      peer-disabled:bg-gray-100 peer-disabled:border-gray-300
      peer-disabled:peer-checked:bg-gray-400 peer-disabled:peer-checked:border-gray-400
    \`,
  },
  variants: {
    sizer: {
      [FieldSizer.small]: {
        indicator: 'size-3.5 top-0.25 bg-size-[8px_8px]',
      },
      [FieldSizer.medium]: {
        indicator: 'size-4 top-0.75 bg-size-[10px_10px]',
      },
      [FieldSizer.large]: {
        indicator: 'size-5 top-0.75 bg-size-[13px_13px]',
      },
    },
    isDisabled: {
      true: {
        indicator: \`
          bg-gray-100 border-gray-300
          peer-checked:bg-gray-400 peer-checked:border-gray-400
        \`,
      },
    },
    isFocused: {
      true: {
        indicator: \`
          border-indigo-800 shadow-[0_0_11px] shadow-indigo-300 outline-0 
          peer-checked:bg-indigo-800
        \`,
      },
    },
  },
  defaultVariants: {
    sizer: FieldSizer.small,
    isDisabled: false,
    isFocused: false,
  },
})`,computed:!0}}},composes:["Omit"]};export{u as C,g as a};
