import{k as l}from"./index-CSQyv-A0.js";import{r as s}from"./iframe-DaeU9_BK.js";import{a as k,S as t,u as C,c as q}from"./index-jBIs28Mi.js";var r=(o=>(o.primary="primary",o.secondary="secondary",o.danger="danger",o))(r||{});const R=k({base:`
    appearance-none
    border-1 rounded-sm
    text-center
    cursor-pointer select-none
    shadow-md/15
    transition-all duration-8 ease-out
    outline-none

    hover:shadow-xl/15 hover:-translate-y-0.5 hover:scale-102
    active:shadow-none active:translate-y-0.25 active:scale-99

    disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-600 disabled:opacity-100 disabled:cursor-not-allowed disabled:shadow-none
    disabled:hover:shadow-none disabled:hover:translate-y-0 disabled:hover:scale-100

    pointer-coarse:hover:shadow-md/15 pointer-coarse:hover:translate-y-0 pointer-coarse:hover:scale-100
    pointer-coarse:focus:shadow-md/15 pointer-coarse:focus:translate-y-0 pointer-coarse:focus:scale-100
  `,variants:{sizer:{[t.small]:"text-sm py-1.75 px-3",[t.medium]:"text-base py-2.75 px-4.5",[t.large]:"text-lg py-3.75 px-5.5"},flavor:{[r.primary]:`
        text-white font-medium
        bg-indigo-600 border-indigo-600
        hover:bg-indigo-800 hover:border-indigo-800
        active:bg-indigo-950 active:border-indigo-950
        pointer-coarse:hover:bg-indigo-600  pointer-coarse:hover:border-indigo-600
        pointer-coarse:active:bg-indigo-600  pointer-coarse:active:border-indigo-600
      `,[r.secondary]:`
        shadow-md/8
        bg-gray-100 border-gray-500 
        hover:bg-gray-200 hover:border-gray-600
        active:bg-gray-300 active:border-gray-700
        pointer-coarse:hover:bg-gray-100  pointer-coarse:hover:border-gray-500
        pointer-coarse:active:bg-gray-100  pointer-coarse:active:border-gray-500
      `,[r.danger]:`
        text-white font-medium
        bg-rose-700 border-rose-700 
        hover:bg-rose-800 hover:border-rose-800
        active:bg-rose-950 active:border-rose-950
        pointer-coarse:hover:bg-rose-700  pointer-coarse:hover:border-rose-700
        pointer-coarse:active:bg-rose-700  pointer-coarse:active:border-rose-700
      `},isKeyboardFocused:{true:"focus:shadow-xl/15 focus:-translate-y-0.5 focus:scale-102"},isKeyboardActivated:{true:`
        active:shadow-none active:translate-y-0.25 active:scale-99
        hover:shadow-none hover:translate-y-0.25 hover:scale-99
        focus:shadow-none focus:translate-y-0.25 focus:scale-99
      `},isTouched:{true:`
        pointer-coarse:shadow-none pointer-coarse:hover:shadow-none pointer-coarse:focus:shadow-none
        pointer-coarse:translate-y-0.5 pointer-coarse:hover:translate-y-0.5 pointer-coarse:focus:translate-y-0.5
        pointer-coarse:scale-98 pointer-coarse:hover:scale-98 pointer-coarse:focus:scale-98
      `}},compoundVariants:[{flavor:r.primary,isKeyboardActivated:!0,class:`
        active:bg-indigo-950 active:border-indigo-950
        focus:bg-indigo-950 focus:border-indigo-950
        hover:bg-indigo-950 hover:border-indigo-950
      `},{flavor:r.primary,isTouched:!0,class:`
        pointer-coarse:bg-indigo-950 pointer-coarse:border-indigo-950
        pointer-coarse:active:bg-indigo-950  pointer-coarse:active:border-indigo-950
        pointer-coarse:hover:bg-indigo-950  pointer-coarse:hover:border-indigo-950
        pointer-coarse:focus:bg-indigo-950  pointer-coarse:focus:border-indigo-950
      `},{flavor:r.primary,isKeyboardFocused:!0,isKeyboardActivated:!1,class:"focus:bg-indigo-800 focus:border-indigo-800"},{flavor:r.secondary,isKeyboardActivated:!0,class:`
        active:bg-gray-300 active:border-gray-700
        focus:bg-gray-300 focus:border-gray-700
        hover:bg-gray-300 hover:border-gray-700
      `},{flavor:r.secondary,isTouched:!0,class:`
        pointer-coarse:bg-gray-300 pointer-coarse:border-gray-700
        pointer-coarse:active:bg-gray-300  pointer-coarse:active:border-gray-700
        pointer-coarse:hover:bg-gray-300  pointer-coarse:hover:border-gray-700
        pointer-coarse:focus:bg-gray-300  pointer-coarse:focus:border-gray-700
      `},{flavor:r.secondary,isKeyboardFocused:!0,isKeyboardActivated:!1,class:"focus:bg-gray-200 focus:border-gray-600"},{flavor:r.danger,isKeyboardActivated:!0,class:`
        active:bg-rose-950 active:border-rose-950
        focus:bg-rose-950 focus:border-rose-950
        hover:bg-rose-950 hover:border-rose-950
      `},{flavor:r.danger,isTouched:!0,class:`
        pointer-coarse:bg-rose-950 pointer-coarse:border-rose-950
        pointer-coarse:active:bg-rose-950  pointer-coarse:active:border-rose-950
        pointer-coarse:hover:bg-rose-950  pointer-coarse:hover:border-rose-950
        pointer-coarse:focus:bg-rose-950  pointer-coarse:focus:border-rose-950
      `},{flavor:r.danger,isKeyboardFocused:!0,isKeyboardActivated:!1,class:"focus:bg-rose-800 focus:border-rose-800"},{isKeyboardFocused:!0,isKeyboardActivated:!0,class:"focus:shadow-none focus:translate-y-0.25 focus:scale-99"}],defaultVariants:{sizer:t.small,flavor:r.primary,isTouched:!1,isKeyboardFocused:!1}});function u({className:o,type:f="button",disabled:b=!1,sizer:y,flavor:h,onTouchStart:m,onTouchEnd:w,onTouchCancel:T,onMouseDown:K,onKeyDown:x,onKeyUp:z,onFocus:S,onBlur:E,...A}){const[i,g]=s.useState(!1),[n,v]=s.useState(!1),[a,c]=s.useState(!1),[d,p]=s.useState(!1),F=C(y),B=R({sizer:F,flavor:h,isTouched:a,isKeyboardFocused:n&&!b&&!i&&!a,isKeyboardActivated:d});return s.createElement("button",{...A,className:q(B,o),disabled:b,type:f,onBlur:e=>{i&&g(!1),n&&v(!1),E?.(e)},onFocus:e=>{n||v(!0),S?.(e)},onKeyDown:e=>{console.log(l(e.nativeEvent)),d||(l(e.nativeEvent)==="enter"||e.nativeEvent.key==="Enter"||l(e.nativeEvent)==="space"||e.nativeEvent.key===" ")&&p(!0),x?.(e)},onKeyUp:e=>{d&&p(!1),z?.(e)},onMouseDown:e=>{i||g(!0),K?.(e)},onTouchStart:e=>{a||c(!0),m?.(e)},onTouchEnd:e=>{a&&c(!1),w?.(e)},onTouchCancel:e=>{a&&c(!1),T?.(e)}})}u.flavor=r;u.sizer=t;u.__docgenInfo={description:`Buttons allow the user to trigger an action, such as submitting a form
@param props {@link ButtonProps}`,methods:[],displayName:"Button",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The inner content shown in the Button"},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the Button",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:"Called when Button is pressed"},type:{required:!1,tsType:{name:"union",raw:"'button' | 'reset' | 'submit'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'reset'"},{name:"literal",value:"'submit'"}]},description:"Controls the behavior of the button",defaultValue:{value:"'button'",computed:!1}},sizer:{required:!1,tsType:{name:"union",raw:"Sizer | Sizer[]",elements:[{name:"Sizer"},{name:"Array",elements:[{name:"Sizer"}],raw:"Sizer[]"}]},description:'Changes the size of the button ("small", "medium", "large")'},flavor:{required:!1,tsType:{name:"ButtonFlavor"},description:'Changes the color of the button ("primary", "secondary", "danger")'}}};export{u as B};
