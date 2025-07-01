import{k as u}from"./index-BiqwU_Yq.js";import{r as l}from"./iframe-Cu56G6_x.js";import{a as F,u as B,c as S}from"./index-kiPNViGW.js";const z=F({base:`
    text-nowrap
    appearance-none
    rounded-sm
    text-center
    select-none
    transition-all duration-8 ease-out
    outline-none
  `,variants:{sizer:{xs:"text-xs py-1.75 px-2.25",sm:"text-sm py-2 px-3",base:"text-base py-3 px-4.5",lg:"text-lg py-4 px-5.5",xl:"text-xl py-5 px-6.5"},isDisabled:{false:`
        cursor-pointer 
        shadow-md/15
        hover:shadow-xl/15 hover:-translate-y-0.5 hover:scale-102
        active:shadow-none active:translate-y-0.25 active:scale-99
        pointer-coarse:hover:shadow-md/15 pointer-coarse:hover:translate-y-0 pointer-coarse:hover:scale-100
        pointer-coarse:focus:shadow-md/15 pointer-coarse:focus:translate-y-0 pointer-coarse:focus:scale-100
      `,true:`
        bg-gray-300 text-gray-600 cursor-not-allowed shadow-none
        hover:shadow-none hover:translate-y-0 hover:scale-100
        disabled:opacity-100
      `},flavor:{primary:"font-medium",secondary:"",danger:"font-medium"},isKeyboardFocused:{true:"focus:shadow-xl/15 focus:-translate-y-0.5 focus:scale-102"},isKeyboardActivated:{true:`
        active:shadow-none active:translate-y-0.25 active:scale-99
        hover:shadow-none hover:translate-y-0.25 hover:scale-99
        focus:shadow-none focus:translate-y-0.25 focus:scale-99
      `},isTouched:{true:`
        pointer-coarse:shadow-none pointer-coarse:hover:shadow-none pointer-coarse:focus:shadow-none
        pointer-coarse:translate-y-0.5 pointer-coarse:hover:translate-y-0.5 pointer-coarse:focus:translate-y-0.5
        pointer-coarse:scale-98 pointer-coarse:hover:scale-98 pointer-coarse:focus:scale-98
      `}},compoundVariants:[{flavor:"primary",isDisabled:!1,class:`
        bg-blue-600 text-white
        hover:bg-blue-500
        active:bg-blue-700
        pointer-coarse:hover:bg-blue-600 pointer-coarse:active:bg-blue-600
      `},{flavor:"secondary",isDisabled:!1,class:`
        shadow-md/10
        text-blue-950
        bg-blue-200 
        hover:bg-[#c4e4ff]
        active:bg-blue-300 
        pointer-coarse:hover:bg-blue-200  
        pointer-coarse:active:bg-blue-200  
      `},{flavor:"danger",isDisabled:!1,class:`
        bg-rose-700 text-white
        hover:bg-rose-600
        active:bg-rose-800
        pointer-coarse:hover:bg-rose-700 pointer-coarse:active:bg-rose-700
      `},{flavor:"primary",isKeyboardActivated:!0,isDisabled:!1,class:"active:bg-blue-700 focus:bg-blue-700 hover:bg-blue-700"},{flavor:"primary",isTouched:!0,isDisabled:!1,class:`
        pointer-coarse:bg-blue-800 pointer-coarse:active:bg-blue-800
        pointer-coarse:hover:bg-blue-800 pointer-coarse:focus:bg-blue-800
      `},{flavor:"primary",isKeyboardFocused:!0,isKeyboardActivated:!1,isDisabled:!1,class:"focus:bg-blue-500"},{flavor:"secondary",isKeyboardActivated:!0,isDisabled:!1,class:"active:bg-blue-300 focus:bg-blue-300 hover:bg-blue-300"},{flavor:"secondary",isTouched:!0,isDisabled:!1,class:`
        pointer-coarse:bg-blue-400 pointer-coarse:active:bg-blue-400
        pointer-coarse:hover:bg-blue-400 pointer-coarse:focus:bg-blue-400
      `},{flavor:"secondary",isKeyboardFocused:!0,isKeyboardActivated:!1,isDisabled:!1,class:"focus:bg-[#c4e4ff]"},{flavor:"danger",isKeyboardActivated:!0,isDisabled:!1,class:"active:bg-rose-800 focus:bg-rose-800 hover:bg-rose-800"},{flavor:"danger",isTouched:!0,isDisabled:!1,class:`
        pointer-coarse:bg-rose-900 pointer-coarse:active:bg-rose-900
        pointer-coarse:hover:bg-rose-900 pointer-coarse:focus:bg-rose-900
      `},{flavor:"danger",isKeyboardFocused:!0,isKeyboardActivated:!1,isDisabled:!1,class:"focus:bg-rose-600"},{isKeyboardFocused:!0,isKeyboardActivated:!0,isDisabled:!1,class:"focus:shadow-none focus:translate-y-0.25 focus:scale-99"}],defaultVariants:{sizer:"base",flavor:"primary",isDisabled:!1,isTouched:!1,isKeyboardFocused:!1}});function k({className:b,type:f="button",disabled:a=!1,sizer:r,flavor:g,onTouchStart:p,onTouchEnd:x,onTouchCancel:y,onMouseDown:h,onKeyDown:w,onKeyUp:T,onFocus:K,onBlur:D,...A}){const[t,c]=l.useState(!1),[o,m]=l.useState(!1),[s,n]=l.useState(!1),[i,d]=l.useState(!1),v=B(r),E=z({sizer:v,flavor:g,isDisabled:a,isTouched:!a&&s,isKeyboardFocused:!a&&o&&!t&&!s,isKeyboardActivated:!a&&i});return l.createElement("button",{...A,className:S(E,b),disabled:a,type:f,onBlur:e=>{t&&c(!1),o&&m(!1),D?.(e)},onFocus:e=>{o||m(!0),K?.(e)},onKeyDown:e=>{console.log(u(e.nativeEvent)),i||(u(e.nativeEvent)==="enter"||e.nativeEvent.key==="Enter"||u(e.nativeEvent)==="space"||e.nativeEvent.key===" ")&&d(!0),w?.(e)},onKeyUp:e=>{i&&d(!1),T?.(e)},onMouseDown:e=>{t||c(!0),h?.(e)},onTouchStart:e=>{s||n(!0),p?.(e)},onTouchEnd:e=>{s&&n(!1),x?.(e)},onTouchCancel:e=>{s&&n(!1),y?.(e)},"data-nickui-sizer":Array.isArray(r)?r.join(","):r,"data-nickui-resolved-sizer":v})}k.__docgenInfo={description:`Buttons allow the user to trigger an action, such as submitting a form
@param props {@link ButtonProps}`,methods:[],displayName:"Button",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The inner content shown in the Button"},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the Button",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:"Called when Button is pressed"},type:{required:!1,tsType:{name:"union",raw:"'button' | 'reset' | 'submit'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'reset'"},{name:"literal",value:"'submit'"}]},description:"Controls the behavior of the button",defaultValue:{value:"'button'",computed:!1}},sizer:{required:!1,tsType:{name:"union",raw:"SizerType | SizerType[]",elements:[{name:"union",raw:`| 'xs'
| 'sm'
| 'base'
| 'lg'
| 'xl'
| 'sm:xs'
| 'sm:sm'
| 'sm:base'
| 'sm:lg'
| 'sm:xl'
| 'md:xs'
| 'md:sm'
| 'md:base'
| 'md:lg'
| 'md:xl'
| 'lg:xs'
| 'lg:sm'
| 'lg:base'
| 'lg:lg'
| 'lg:xl'
| 'xl:xs'
| 'xl:sm'
| 'xl:base'
| 'xl:lg'
| 'xl:xl'`,elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'sm:xs'"},{name:"literal",value:"'sm:sm'"},{name:"literal",value:"'sm:base'"},{name:"literal",value:"'sm:lg'"},{name:"literal",value:"'sm:xl'"},{name:"literal",value:"'md:xs'"},{name:"literal",value:"'md:sm'"},{name:"literal",value:"'md:base'"},{name:"literal",value:"'md:lg'"},{name:"literal",value:"'md:xl'"},{name:"literal",value:"'lg:xs'"},{name:"literal",value:"'lg:sm'"},{name:"literal",value:"'lg:base'"},{name:"literal",value:"'lg:lg'"},{name:"literal",value:"'lg:xl'"},{name:"literal",value:"'xl:xs'"},{name:"literal",value:"'xl:sm'"},{name:"literal",value:"'xl:base'"},{name:"literal",value:"'xl:lg'"},{name:"literal",value:"'xl:xl'"}]},{name:"Array",elements:[{name:"union",raw:`| 'xs'
| 'sm'
| 'base'
| 'lg'
| 'xl'
| 'sm:xs'
| 'sm:sm'
| 'sm:base'
| 'sm:lg'
| 'sm:xl'
| 'md:xs'
| 'md:sm'
| 'md:base'
| 'md:lg'
| 'md:xl'
| 'lg:xs'
| 'lg:sm'
| 'lg:base'
| 'lg:lg'
| 'lg:xl'
| 'xl:xs'
| 'xl:sm'
| 'xl:base'
| 'xl:lg'
| 'xl:xl'`,elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'sm:xs'"},{name:"literal",value:"'sm:sm'"},{name:"literal",value:"'sm:base'"},{name:"literal",value:"'sm:lg'"},{name:"literal",value:"'sm:xl'"},{name:"literal",value:"'md:xs'"},{name:"literal",value:"'md:sm'"},{name:"literal",value:"'md:base'"},{name:"literal",value:"'md:lg'"},{name:"literal",value:"'md:xl'"},{name:"literal",value:"'lg:xs'"},{name:"literal",value:"'lg:sm'"},{name:"literal",value:"'lg:base'"},{name:"literal",value:"'lg:lg'"},{name:"literal",value:"'lg:xl'"},{name:"literal",value:"'xl:xs'"},{name:"literal",value:"'xl:sm'"},{name:"literal",value:"'xl:base'"},{name:"literal",value:"'xl:lg'"},{name:"literal",value:"'xl:xl'"}]}],raw:"SizerType[]"}]},description:'Changes the size of the button ("sm", "base", "lg")'},flavor:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'danger'"}]},description:'Changes the color of the button ("primary", "secondary", "danger")'}}};export{k as B};
