import{k as u}from"./index-DYocaE6X.js";import{r as t}from"./iframe-CjsTI3bz.js";import{a as B,S as i,u as q,c as M}from"./index-DrqyF3cy.js";var r=(o=>(o.primary="primary",o.secondary="secondary",o.danger="danger",o))(r||{});const R=B({base:`
    appearance-none
    border-1 rounded-sm
    text-center
    select-none
    transition-all duration-8 ease-out
    outline-none
  `,variants:{sizer:{[i.small]:"text-sm py-1.75 px-3",[i.base]:"text-base py-2.75 px-4.5",[i.large]:"text-lg py-3.75 px-5.5"},isDisabled:{false:`
        cursor-pointer 
        shadow-md/15
        hover:shadow-xl/15 hover:-translate-y-0.5 hover:scale-102
        active:shadow-none active:translate-y-0.25 active:scale-99
        pointer-coarse:hover:shadow-md/15 pointer-coarse:hover:translate-y-0 pointer-coarse:hover:scale-100
        pointer-coarse:focus:shadow-md/15 pointer-coarse:focus:translate-y-0 pointer-coarse:focus:scale-100
      `,true:`
        bg-gray-300 border-gray-300 text-gray-600 cursor-not-allowed shadow-none
        hover:shadow-none hover:translate-y-0 hover:scale-100
        disabled:opacity-100
      `},flavor:{[r.primary]:"font-medium",[r.secondary]:"",[r.danger]:"font-medium"},isKeyboardFocused:{true:"focus:shadow-xl/15 focus:-translate-y-0.5 focus:scale-102"},isKeyboardActivated:{true:`
        active:shadow-none active:translate-y-0.25 active:scale-99
        hover:shadow-none hover:translate-y-0.25 hover:scale-99
        focus:shadow-none focus:translate-y-0.25 focus:scale-99
      `},isTouched:{true:`
        pointer-coarse:shadow-none pointer-coarse:hover:shadow-none pointer-coarse:focus:shadow-none
        pointer-coarse:translate-y-0.5 pointer-coarse:hover:translate-y-0.5 pointer-coarse:focus:translate-y-0.5
        pointer-coarse:scale-98 pointer-coarse:hover:scale-98 pointer-coarse:focus:scale-98
      `}},compoundVariants:[{flavor:r.primary,isDisabled:!1,class:`
        text-white
        bg-indigo-600 border-indigo-600
        hover:bg-indigo-500 hover:border-indigo-500
        active:bg-indigo-700 active:border-indigo-700
        pointer-coarse:hover:bg-indigo-600  pointer-coarse:hover:border-indigo-600
        pointer-coarse:active:bg-indigo-600  pointer-coarse:active:border-indigo-600
      `},{flavor:r.secondary,isDisabled:!1,class:`
        shadow-md/8
        bg-gray-100 border-gray-500 
        hover:bg-gray-50 hover:border-gray-400
        active:bg-gray-200 active:border-gray-600
        pointer-coarse:hover:bg-gray-100  pointer-coarse:hover:border-gray-500
        pointer-coarse:active:bg-gray-100  pointer-coarse:active:border-gray-500
      `},{flavor:r.danger,isDisabled:!1,class:`
        text-white
        bg-rose-700 border-rose-700 
        hover:bg-rose-600 hover:border-rose-600
        active:bg-rose-800 active:border-rose-800
        pointer-coarse:hover:bg-rose-700  pointer-coarse:hover:border-rose-700
        pointer-coarse:active:bg-rose-700  pointer-coarse:active:border-rose-700
      `},{flavor:r.primary,isKeyboardActivated:!0,isDisabled:!1,class:`
        active:bg-indigo-700 active:border-indigo-700
        focus:bg-indigo-700 focus:border-indigo-700
        hover:bg-indigo-700 hover:border-indigo-700
      `},{flavor:r.primary,isTouched:!0,isDisabled:!1,class:`
        pointer-coarse:bg-indigo-800 pointer-coarse:border-indigo-800
        pointer-coarse:active:bg-indigo-800  pointer-coarse:active:border-indigo-800
        pointer-coarse:hover:bg-indigo-800  pointer-coarse:hover:border-indigo-800
        pointer-coarse:focus:bg-indigo-800  pointer-coarse:focus:border-indigo-800
      `},{flavor:r.primary,isKeyboardFocused:!0,isKeyboardActivated:!1,isDisabled:!1,class:"focus:bg-indigo-500 focus:border-indigo-500"},{flavor:r.secondary,isKeyboardActivated:!0,isDisabled:!1,class:`
        active:bg-gray-200 active:border-gray-600
        focus:bg-gray-200 focus:border-gray-600
        hover:bg-gray-200 hover:border-gray-600
      `},{flavor:r.secondary,isTouched:!0,isDisabled:!1,class:`
        pointer-coarse:bg-gray-300 pointer-coarse:border-gray-700
        pointer-coarse:active:bg-gray-300  pointer-coarse:active:border-gray-700
        pointer-coarse:hover:bg-gray-300  pointer-coarse:hover:border-gray-700
        pointer-coarse:focus:bg-gray-300  pointer-coarse:focus:border-gray-700
      `},{flavor:r.secondary,isKeyboardFocused:!0,isKeyboardActivated:!1,isDisabled:!1,class:"focus:bg-gray-50 focus:border-gray-400"},{flavor:r.danger,isKeyboardActivated:!0,isDisabled:!1,class:`
        active:bg-rose-800 active:border-rose-800
        focus:bg-rose-800 focus:border-rose-800
        hover:bg-rose-800 hover:border-rose-800
      `},{flavor:r.danger,isTouched:!0,isDisabled:!1,class:`
        pointer-coarse:bg-rose-900 pointer-coarse:border-rose-900
        pointer-coarse:active:bg-rose-900  pointer-coarse:active:border-rose-900
        pointer-coarse:hover:bg-rose-900  pointer-coarse:hover:border-rose-900
        pointer-coarse:focus:bg-rose-900  pointer-coarse:focus:border-rose-900
      `},{flavor:r.danger,isKeyboardFocused:!0,isKeyboardActivated:!1,isDisabled:!1,class:"focus:bg-rose-600 focus:border-rose-600"},{isKeyboardFocused:!0,isKeyboardActivated:!0,isDisabled:!1,class:"focus:shadow-none focus:translate-y-0.25 focus:scale-99"}],defaultVariants:{sizer:i.base,flavor:r.primary,isDisabled:!1,isTouched:!1,isKeyboardFocused:!1}});function b({className:o,type:p="button",disabled:a=!1,sizer:y,flavor:h,onTouchStart:m,onTouchEnd:w,onTouchCancel:T,onMouseDown:K,onKeyDown:D,onKeyUp:x,onFocus:z,onBlur:S,...E}){const[n,g]=t.useState(!1),[c,f]=t.useState(!1),[s,d]=t.useState(!1),[l,v]=t.useState(!1),A=q(y),F=R({sizer:A,flavor:h,isDisabled:a,isTouched:!a&&s,isKeyboardFocused:!a&&c&&!n&&!s,isKeyboardActivated:!a&&l});return t.createElement("button",{...E,className:M(F,o),disabled:a,type:p,onBlur:e=>{n&&g(!1),c&&f(!1),S?.(e)},onFocus:e=>{c||f(!0),z?.(e)},onKeyDown:e=>{console.log(u(e.nativeEvent)),l||(u(e.nativeEvent)==="enter"||e.nativeEvent.key==="Enter"||u(e.nativeEvent)==="space"||e.nativeEvent.key===" ")&&v(!0),D?.(e)},onKeyUp:e=>{l&&v(!1),x?.(e)},onMouseDown:e=>{n||g(!0),K?.(e)},onTouchStart:e=>{s||d(!0),m?.(e)},onTouchEnd:e=>{s&&d(!1),w?.(e)},onTouchCancel:e=>{s&&d(!1),T?.(e)}})}b.flavor=r;b.sizer=i;b.__docgenInfo={description:`Buttons allow the user to trigger an action, such as submitting a form
@param props {@link ButtonProps}`,methods:[],displayName:"Button",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The inner content shown in the Button"},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the Button",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:"Called when Button is pressed"},type:{required:!1,tsType:{name:"union",raw:"'button' | 'reset' | 'submit'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'reset'"},{name:"literal",value:"'submit'"}]},description:"Controls the behavior of the button",defaultValue:{value:"'button'",computed:!1}},sizer:{required:!1,tsType:{name:"union",raw:"Sizer | Sizer[]",elements:[{name:"Sizer"},{name:"Array",elements:[{name:"Sizer"}],raw:"Sizer[]"}]},description:'Changes the size of the button ("small", "base", "large")'},flavor:{required:!1,tsType:{name:"ButtonFlavor"},description:'Changes the color of the button ("primary", "secondary", "danger")'}}};export{b as B};
