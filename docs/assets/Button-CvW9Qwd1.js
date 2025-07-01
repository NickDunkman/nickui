import{r as c}from"./iframe-BOtqaFuv.js";import{c as u,F as a}from"./index-Czi7Upa3.js";import{c as m}from"./clsw-D-KgF5mV.js";var t=(e=>(e.primary="primary",e.secondary="secondary",e.danger="danger",e))(t||{});const p=u({base:`
    appearance-none
    border-1 rounded-sm
    text-center
    cursor-pointer select-none
    shadow-md/15
    transition-all duration-8 ease-out

    disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-600 disabled:opacity-100 disabled:cursor-not-allowed disabled:shadow-none


    hover:shadow-xl/15 hover:-translate-y-0.5 hover:scale-101.5
    focus:shadow-xl/15 focus:-translate-y-0.5 focus:scale-101.5

    active:shadow-md/15 active:translate-y-0 active:scale-100
    pointer-coarse:hover:shadow-md/15 pointer-coarse:translate-y-0 pointer-coarse:scale-100
    disabled:hover:shadow-none disabled:hover:translate-y-0 disabled:hover:scale-100
  `,variants:{sizer:{[a.small]:"text-sm py-1.75 px-3",[a.medium]:"text-base py-2.75 px-4.5",[a.large]:"text-lg py-3.75 px-5.5"},flavor:{[t.primary]:"bg-indigo-600 border-indigo-600 text-white font-medium",[t.secondary]:"border-gray-500 bg-gray-100 shadow-md/8",[t.danger]:"bg-rose-700 border-rose-700 text-white font-medium"}},defaultVariants:{sizer:a.small,flavor:t.primary}});function r({className:e,type:s="button",disabled:o=!1,sizer:n,flavor:i,...l}){const d=p({sizer:n,flavor:i});return c.createElement("button",{...l,className:m(d,e),disabled:o,type:s})}r.flavor=t;r.sizer=a;r.__docgenInfo={description:`Buttons allow the user to trigger an action, such as submitting a form
@param props {@link ButtonProps}`,methods:[],displayName:"Button",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The inner content shown in the Button"},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the Button",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:"Called when Button is pressed"},type:{required:!1,tsType:{name:"union",raw:"'button' | 'reset' | 'submit'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'reset'"},{name:"literal",value:"'submit'"}]},description:"Controls the behavior of the button",defaultValue:{value:"'button'",computed:!1}},sizer:{required:!1,tsType:{name:"FieldSizer"},description:'Changes the size of the button ("small", "medium", "large")'},flavor:{required:!1,tsType:{name:"ButtonFlavor"},description:'Changes the color of the button ("primary", "secondary", "danger")'}}};export{r as B};
