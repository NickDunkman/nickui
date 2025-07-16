import{r as i}from"./iframe-NaSjnDkB.js";import{a as g,S as r,u as v,c as w}from"./index-Cz90qybE.js";var a=(e=>(e.primary="primary",e.secondary="secondary",e.danger="danger",e))(a||{});const T=g({base:`
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
  `,variants:{sizer:{[r.small]:"text-sm py-1.75 px-3",[r.medium]:"text-base py-2.75 px-4.5",[r.large]:"text-lg py-3.75 px-5.5"},flavor:{[a.primary]:"bg-indigo-600 border-indigo-600 text-white font-medium",[a.secondary]:"border-gray-500 bg-gray-100 shadow-md/8",[a.danger]:"bg-rose-700 border-rose-700 text-white font-medium"},isTouched:{true:`
        bg-amber-500
        pointer-coarse:shadow-md/15 pointer-coarse:translate-y-0 pointer-coarse:scale-100
        pointer-coarse:bg-black
      `}},defaultVariants:{sizer:r.small,flavor:a.primary}});function n({className:e,type:l="button",disabled:d=!1,sizer:c,flavor:u,onTouchStart:m,onTouchEnd:p,onTouchCancel:h,...b}){const[s,o]=i.useState(!1),f=v(c),y=T({sizer:f,flavor:u,isTouched:s});return i.createElement("button",{...b,className:w(y,e),disabled:d,type:l,onTouchStart:t=>{s||o(!0),m?.(t)},onTouchEnd:t=>{s&&o(!1),p?.(t)},onTouchCancel:t=>{s&&o(!1),h?.(t)}})}n.flavor=a;n.sizer=r;n.__docgenInfo={description:`Buttons allow the user to trigger an action, such as submitting a form
@param props {@link ButtonProps}`,methods:[],displayName:"Button",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The inner content shown in the Button"},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the Button",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:"Called when Button is pressed"},type:{required:!1,tsType:{name:"union",raw:"'button' | 'reset' | 'submit'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'reset'"},{name:"literal",value:"'submit'"}]},description:"Controls the behavior of the button",defaultValue:{value:"'button'",computed:!1}},sizer:{required:!1,tsType:{name:"union",raw:"Sizer | Sizer[]",elements:[{name:"Sizer"},{name:"Array",elements:[{name:"Sizer"}],raw:"Sizer[]"}]},description:'Changes the size of the button ("small", "medium", "large")'},flavor:{required:!1,tsType:{name:"ButtonFlavor"},description:'Changes the color of the button ("primary", "secondary", "danger")'}}};export{n as B};
