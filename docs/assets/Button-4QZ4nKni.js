import{r as i}from"./iframe-BgSCrXib.js";import{a as v,S as o,u as y,c as w}from"./index-BaQko9xu.js";var e=(r=>(r.primary="primary",r.secondary="secondary",r.danger="danger",r))(e||{});const T=v({base:`
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
  `,variants:{sizer:{[o.small]:"text-sm py-1.75 px-3",[o.medium]:"text-base py-2.75 px-4.5",[o.large]:"text-lg py-3.75 px-5.5"},flavor:{[e.primary]:`
        text-white font-medium
        bg-indigo-600 border-indigo-600
        hover:bg-indigo-800 hover:border-indigo-800
        active:bg-indigo-950 active:border-indigo-950
        pointer-coarse:hover:bg-indigo-600  pointer-coarse:hover:border-indigo-600
        pointer-coarse:active:bg-indigo-600  pointer-coarse:active:border-indigo-600
      `,[e.secondary]:"border-gray-500 bg-gray-100 shadow-md/8",[e.danger]:"bg-rose-700 border-rose-700 text-white font-medium"},isTouched:{true:`
        pointer-coarse:shadow-none pointer-coarse:hover:shadow-none
        pointer-coarse:translate-y-0.5 pointer-coarse:hover:translate-y-0.5 pointer-coarse:focus:translate-y-0.5
        pointer-coarse:scale-98 pointer-coarse:hover:scale-98 pointer-coarse:focus:scale-98
      `}},compoundVariants:[{flavor:e.primary,isTouched:!0,class:`
        pointer-coarse:bg-indigo-950 pointer-coarse:border-indigo-950
        pointer-coarse:active:bg-indigo-950  pointer-coarse:active:border-indigo-950
      `}],defaultVariants:{sizer:o.small,flavor:e.primary}});function n({className:r,type:d="button",disabled:l=!1,sizer:c,flavor:u,onTouchStart:p,onTouchEnd:m,onTouchCancel:h,...b}){const[t,s]=i.useState(!1),f=y(c),g=T({sizer:f,flavor:u,isTouched:t});return i.createElement("button",{...b,className:w(g,r),disabled:l,type:d,onTouchStart:a=>{t||s(!0),p?.(a)},onTouchEnd:a=>{t&&s(!1),m?.(a)},onTouchCancel:a=>{t&&s(!1),h?.(a)}})}n.flavor=e;n.sizer=o;n.__docgenInfo={description:`Buttons allow the user to trigger an action, such as submitting a form
@param props {@link ButtonProps}`,methods:[],displayName:"Button",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The inner content shown in the Button"},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the Button",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:"Called when Button is pressed"},type:{required:!1,tsType:{name:"union",raw:"'button' | 'reset' | 'submit'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'reset'"},{name:"literal",value:"'submit'"}]},description:"Controls the behavior of the button",defaultValue:{value:"'button'",computed:!1}},sizer:{required:!1,tsType:{name:"union",raw:"Sizer | Sizer[]",elements:[{name:"Sizer"},{name:"Array",elements:[{name:"Sizer"}],raw:"Sizer[]"}]},description:'Changes the size of the button ("small", "medium", "large")'},flavor:{required:!1,tsType:{name:"ButtonFlavor"},description:'Changes the color of the button ("primary", "secondary", "danger")'}}};export{n as B};
