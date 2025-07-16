import{r as t}from"./iframe-D9ZoAjjD.js";import{a as B,S as s,u as F,c as C}from"./index-B824ghBp.js";var e=(o=>(o.primary="primary",o.secondary="secondary",o.danger="danger",o))(e||{});const q=B({base:`
    appearance-none
    border-1 rounded-sm
    text-center
    cursor-pointer select-none
    shadow-md/15
    transition-all duration-8 ease-out

    hover:shadow-xl/15 hover:-translate-y-0.5 hover:scale-102
    active:shadow-none active:translate-y-0.25 active:scale-99

    disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-600 disabled:opacity-100 disabled:cursor-not-allowed disabled:shadow-none
    disabled:hover:shadow-none disabled:hover:translate-y-0 disabled:hover:scale-100

    pointer-coarse:hover:shadow-md/15 pointer-coarse:hover:translate-y-0 pointer-coarse:hover:scale-100
    pointer-coarse:focus:shadow-md/15 pointer-coarse:focus:translate-y-0 pointer-coarse:focus:scale-100
  `,variants:{sizer:{[s.small]:"text-sm py-1.75 px-3",[s.medium]:"text-base py-2.75 px-4.5",[s.large]:"text-lg py-3.75 px-5.5"},flavor:{[e.primary]:`
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
      `},isKeyboardFocused:{true:"focus:shadow-xl/15 focus:-translate-y-0.5 focus:scale-102"},isTouched:{true:`
        pointer-coarse:shadow-none pointer-coarse:hover:shadow-none pointer-coarse:focus:shadow-none
        pointer-coarse:translate-y-0.5 pointer-coarse:hover:translate-y-0.5 pointer-coarse:focus:translate-y-0.5
        pointer-coarse:scale-98 pointer-coarse:hover:scale-98 pointer-coarse:focus:scale-98
      `}},compoundVariants:[{flavor:e.primary,isTouched:!0,class:`
        pointer-coarse:bg-indigo-950 pointer-coarse:border-indigo-950
        pointer-coarse:active:bg-indigo-950  pointer-coarse:active:border-indigo-950
        pointer-coarse:hover:bg-indigo-950  pointer-coarse:hover:border-indigo-950
        pointer-coarse:focus:bg-indigo-950  pointer-coarse:focus:border-indigo-950
      `},{flavor:e.primary,isKeyboardFocused:!0,class:"focus:bg-indigo-800 focus:border-indigo-800"},{flavor:e.secondary,isTouched:!0,class:`
        pointer-coarse:bg-gray-300 pointer-coarse:border-gray-700
        pointer-coarse:active:bg-gray-300  pointer-coarse:active:border-gray-700
        pointer-coarse:hover:bg-gray-300  pointer-coarse:hover:border-gray-700
        pointer-coarse:focus:bg-gray-300  pointer-coarse:focus:border-gray-700
      `},{flavor:e.secondary,isKeyboardFocused:!0,class:"focus:bg-gray-200 focus:border-gray-600"},{flavor:e.danger,isTouched:!0,class:`
        pointer-coarse:bg-rose-950 pointer-coarse:border-rose-950
        pointer-coarse:active:bg-rose-950  pointer-coarse:active:border-rose-950
        pointer-coarse:hover:bg-rose-950  pointer-coarse:hover:border-rose-950
        pointer-coarse:focus:bg-rose-950  pointer-coarse:focus:border-rose-950
      `},{flavor:e.danger,isKeyboardFocused:!0,class:"focus:bg-rose-800 focus:border-rose-800"}],defaultVariants:{sizer:s.small,flavor:e.primary,isTouched:!1,isKeyboardFocused:!1}});function d({className:o,type:b="button",disabled:l=!1,sizer:g,flavor:h,onTouchStart:v,onTouchEnd:f,onTouchCancel:y,onMouseDown:m,onFocus:w,onBlur:T,...x}){const[i,u]=t.useState(!1),[n,p]=t.useState(!1),[a,c]=t.useState(!1),z=F(g),S=q({sizer:z,flavor:h,isTouched:a,isKeyboardFocused:n&&!l&&!i&&!a});return t.createElement("button",{...x,className:C(S,o),disabled:l,type:b,onBlur:r=>{i&&u(!1),n&&p(!1),T?.(r)},onFocus:r=>{n||p(!0),w?.(r)},onMouseDown:r=>{i||u(!0),m?.(r)},onTouchStart:r=>{a||c(!0),v?.(r)},onTouchEnd:r=>{a&&c(!1),f?.(r)},onTouchCancel:r=>{a&&c(!1),y?.(r)}})}d.flavor=e;d.sizer=s;d.__docgenInfo={description:`Buttons allow the user to trigger an action, such as submitting a form
@param props {@link ButtonProps}`,methods:[],displayName:"Button",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The inner content shown in the Button"},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the Button",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:"Called when Button is pressed"},type:{required:!1,tsType:{name:"union",raw:"'button' | 'reset' | 'submit'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'reset'"},{name:"literal",value:"'submit'"}]},description:"Controls the behavior of the button",defaultValue:{value:"'button'",computed:!1}},sizer:{required:!1,tsType:{name:"union",raw:"Sizer | Sizer[]",elements:[{name:"Sizer"},{name:"Array",elements:[{name:"Sizer"}],raw:"Sizer[]"}]},description:'Changes the size of the button ("small", "medium", "large")'},flavor:{required:!1,tsType:{name:"ButtonFlavor"},description:'Changes the color of the button ("primary", "secondary", "danger")'}}};export{d as B};
