import{r as n}from"./iframe-92EMvrbT.js";import{a as y,S as a,u as f,c as w}from"./index-Ctt-BrFO.js";var e=(r=>(r.primary="primary",r.secondary="secondary",r.danger="danger",r))(e||{});const T=y({base:`
    appearance-none
    border-1 rounded-sm
    text-center
    cursor-pointer select-none
    shadow-md/15
    transition-all duration-8 ease-out

    disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-600 disabled:opacity-100 disabled:cursor-not-allowed disabled:shadow-none


    hover:shadow-xl/15 hover:-translate-y-0.5 hover:scale-102
    focus:shadow-xl/15 focus:-translate-y-0.5 focus:scale-102

    active:shadow-none active:translate-y-0.25 active:scale-99
    disabled:hover:shadow-none disabled:hover:translate-y-0 disabled:hover:scale-100

    pointer-coarse:hover:shadow-md/15 pointer-coarse:hover:translate-y-0 pointer-coarse:hover:scale-100
    pointer-coarse:focus:shadow-md/15 pointer-coarse:focus:translate-y-0 pointer-coarse:focus:scale-100
  `,variants:{sizer:{[a.small]:"text-sm py-1.75 px-3",[a.medium]:"text-base py-2.75 px-4.5",[a.large]:"text-lg py-3.75 px-5.5"},flavor:{[e.primary]:`
        text-white font-medium
        bg-indigo-600 border-indigo-600
        hover:bg-indigo-800 hover:border-indigo-800
        active:bg-indigo-950 active:border-indigo-950
        pointer-coarse:hover:bg-indigo-600  pointer-coarse:hover:border-indigo-600
        pointer-coarse:active:bg-indigo-600  pointer-coarse:active:border-indigo-600
      `,[e.secondary]:`
        shadow-md/8
        bg-gray-100 border-gray-500 
        hover:bg-gray-200 hover:border-gray-600
        active:bg-gray-300 active:border-gray-700
        pointer-coarse:hover:bg-gray-100  pointer-coarse:hover:border-gray-500
        pointer-coarse:active:bg-gray-100  pointer-coarse:active:border-gray-500
      `,[e.danger]:`
        text-white font-medium
        bg-rose-700 border-rose-700 
        hover:bg-rose-800 hover:border-rose-800
        active:bg-rose-950 active:border-rose-950
        pointer-coarse:hover:bg-rose-700  pointer-coarse:hover:border-rose-700
        pointer-coarse:active:bg-rose-700  pointer-coarse:active:border-rose-700
      `},isTouched:{true:`
        pointer-coarse:shadow-none pointer-coarse:hover:shadow-none pointer-coarse:focus:shadow-none
        pointer-coarse:translate-y-0.5 pointer-coarse:hover:translate-y-0.5 pointer-coarse:focus:translate-y-0.5
        pointer-coarse:scale-98 pointer-coarse:hover:scale-98 pointer-coarse:focus:scale-98
      `}},compoundVariants:[{flavor:e.primary,isTouched:!0,class:`
        pointer-coarse:bg-indigo-950 pointer-coarse:border-indigo-950
        pointer-coarse:active:bg-indigo-950  pointer-coarse:active:border-indigo-950
        pointer-coarse:hover:bg-indigo-950  pointer-coarse:hover:border-indigo-950
        pointer-coarse:focus:bg-indigo-950  pointer-coarse:focus:border-indigo-950
      `},{flavor:e.secondary,isTouched:!0,class:`
        pointer-coarse:bg-gray-300 pointer-coarse:border-gray-700
        pointer-coarse:active:bg-gray-300  pointer-coarse:active:border-gray-700
        pointer-coarse:hover:bg-gray-300  pointer-coarse:hover:border-gray-700
        pointer-coarse:focus:bg-gray-300  pointer-coarse:focus:border-gray-700
      `},{flavor:e.danger,isTouched:!0,class:`
        pointer-coarse:bg-rose-950 pointer-coarse:border-rose-950
        pointer-coarse:active:bg-rose-950  pointer-coarse:active:border-rose-950
        pointer-coarse:hover:bg-rose-950  pointer-coarse:hover:border-rose-950
        pointer-coarse:focus:bg-rose-950  pointer-coarse:focus:border-rose-950
      `}],defaultVariants:{sizer:a.small,flavor:e.primary}});function i({className:r,type:c="button",disabled:d=!1,sizer:l,flavor:p,onTouchStart:u,onTouchEnd:g,onTouchCancel:b,...h}){const[s,t]=n.useState(!1),v=f(l),m=T({sizer:v,flavor:p,isTouched:s});return n.createElement("button",{...h,className:w(m,r),disabled:d,type:c,onTouchStart:o=>{s||t(!0),u?.(o)},onTouchEnd:o=>{s&&t(!1),g?.(o)},onTouchCancel:o=>{s&&t(!1),b?.(o)}})}i.flavor=e;i.sizer=a;i.__docgenInfo={description:`Buttons allow the user to trigger an action, such as submitting a form
@param props {@link ButtonProps}`,methods:[],displayName:"Button",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The inner content shown in the Button"},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the Button",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:"Called when Button is pressed"},type:{required:!1,tsType:{name:"union",raw:"'button' | 'reset' | 'submit'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'reset'"},{name:"literal",value:"'submit'"}]},description:"Controls the behavior of the button",defaultValue:{value:"'button'",computed:!1}},sizer:{required:!1,tsType:{name:"union",raw:"Sizer | Sizer[]",elements:[{name:"Sizer"},{name:"Array",elements:[{name:"Sizer"}],raw:"Sizer[]"}]},description:'Changes the size of the button ("small", "medium", "large")'},flavor:{required:!1,tsType:{name:"ButtonFlavor"},description:'Changes the color of the button ("primary", "secondary", "danger")'}}};export{i as B};
