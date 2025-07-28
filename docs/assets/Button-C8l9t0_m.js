import{k as c}from"./index-9ojHIYZ1.js";import{r as l}from"./iframe-D7dEraYJ.js";import{a as K,u as B,c as F}from"./index-ua445rCL.js";const z=K({base:`
    text-nowrap
    appearance-none
    rounded-sm
    text-center
    select-none
    transition-all duration-8 ease-out
    outline-none

    bg-(--nickui-button-bg-color)
    text-(--nickui-button-text-color)
    hover:bg-(--nickui-button-hover-bg-color)
    active:bg-(--nickui-button-active-bg-color)
    focus:bg-(--nickui-button-focus-bg-color)

    pointer-coarse:bg-(--nickui-button-coarse-bg-color)
    pointer-coarse:hover:bg-(--nickui-button-coarse-bg-color)
    pointer-coarse:active:bg-(--nickui-button-coarse-bg-color)
    pointer-coarse:focus:bg-(--nickui-button-coarse-bg-color)

    [--nickui-button-hover-bg-color:var(--nickui-button-bg-color)]
    [--nickui-button-active-bg-color:var(--nickui-button-bg-color)]
    [--nickui-button-focus-bg-color:var(--nickui-button-bg-color)]
    [--nickui-button-coarse-bg-color:var(--nickui-button-bg-color)]
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
      `},flavor:{neutral:"",positive:"",negative:""},isSecondary:{false:"font-semibold",true:""},isKeyboardFocused:{true:"focus:shadow-xl/15 focus:-translate-y-0.5 focus:scale-102"},isKeyboardActivated:{true:`
        active:shadow-none active:translate-y-0.25 active:scale-99
        hover:shadow-none hover:translate-y-0.25 hover:scale-99
        focus:shadow-none focus:translate-y-0.25 focus:scale-99
      `},isTouchActivated:{true:`
        pointer-coarse:shadow-none pointer-coarse:hover:shadow-none pointer-coarse:focus:shadow-none
        pointer-coarse:translate-y-0.5 pointer-coarse:hover:translate-y-0.5 pointer-coarse:focus:translate-y-0.5
        pointer-coarse:scale-98 pointer-coarse:hover:scale-98 pointer-coarse:focus:scale-98
      `}},compoundVariants:[{isKeyboardFocused:!0,isKeyboardActivated:!0,isDisabled:!1,class:`
        focus:shadow-none focus:translate-y-0.25 focus:scale-99
        [--nickui-button-hover-bg-color:var(--nickui-button-active-bg-color)]
        [--nickui-button-focus-bg-color:var(--nickui-button-active-bg-color)]
      `},{isKeyboardFocused:!0,isKeyboardActivated:!1,isDisabled:!1,class:`
        [--nickui-button-focus-bg-color:var(--nickui-button-hover-bg-color)]
      `},{flavor:"neutral",isSecondary:!1,isDisabled:!1,class:`
        [--nickui-button-text-color:var(--color-white)]
        [--nickui-button-bg-color:var(--color-blue-600)]
        [--nickui-button-hover-bg-color:var(--color-blue-500)]
        [--nickui-button-active-bg-color:var(--color-blue-700)]
      `},{flavor:"neutral",isSecondary:!1,isTouchActivated:!0,isDisabled:!1,class:"[--nickui-button-coarse-bg-color:var(--color-blue-800)]"},{flavor:"neutral",isSecondary:!0,isDisabled:!1,class:`
        shadow-md/10
        [--nickui-button-text-color:var(--color-blue-950)]
        [--nickui-button-bg-color:var(--color-blue-200)]
        [--nickui-button-hover-bg-color:#c4e4ff]
        [--nickui-button-active-bg-color:var(--color-blue-300)]
      `},{flavor:"neutral",isSecondary:!0,isTouchActivated:!0,isDisabled:!1,class:"[--nickui-button-coarse-bg-color:var(--color-blue-400)]"},{flavor:"positive",isSecondary:!1,isDisabled:!1,class:`
        [--nickui-button-text-color:var(--color-white)]
        [--nickui-button-bg-color:var(--color-emerald-700)]
        [--nickui-button-hover-bg-color:var(--color-emerald-600)]
        [--nickui-button-active-bg-color:var(--color-emerald-800)]
      `},{flavor:"positive",isSecondary:!1,isTouchActivated:!0,isDisabled:!1,class:"[--nickui-button-coarse-bg-color:var(--color-emerald-900)]"},{flavor:"positive",isSecondary:!0,isDisabled:!1,class:`
        shadow-md/10
        [--nickui-button-text-color:var(--color-emerald-950)]
        [--nickui-button-bg-color:var(--color-emerald-200)]
        [--nickui-button-hover-bg-color:#bff2d9]
        [--nickui-button-active-bg-color:var(--color-emerald-300)]
      `},{flavor:"positive",isSecondary:!0,isTouchActivated:!0,isDisabled:!1,class:"[--nickui-button-coarse-bg-color:var(--color-emerald-400)]"},{flavor:"negative",isDisabled:!1,class:`
        [--nickui-button-text-color:var(--color-white)]
        [--nickui-button-bg-color:var(--color-rose-700)]
        [--nickui-button-hover-bg-color:var(--color-rose-600)]
        [--nickui-button-active-bg-color:var(--color-rose-800)]
      `},{flavor:"negative",isTouchActivated:!0,isDisabled:!1,class:"[--nickui-button-coarse-bg-color:var(--color-rose-900)]"},{flavor:"negative",isSecondary:!0,isDisabled:!1,class:`
        shadow-md/10
        [--nickui-button-text-color:var(--color-rose-950)]
        [--nickui-button-bg-color:var(--color-rose-200)]
        [--nickui-button-hover-bg-color:#ffdadd]
        [--nickui-button-active-bg-color:var(--color-rose-300)]
      `},{flavor:"negative",isSecondary:!0,isTouchActivated:!0,isDisabled:!1,class:"[--nickui-button-coarse-bg-color:var(--color-rose-400)]"}],defaultVariants:{sizer:"base",flavor:"neutral",isSecondary:!1,isDisabled:!1,isTouchActivated:!1,isKeyboardFocused:!1}});function q({className:d,type:f="button",disabled:a=!1,sizer:t,flavor:g,secondary:x=!1,onTouchStart:h,onTouchEnd:p,onTouchCancel:y,onMouseDown:k,onKeyDown:w,onKeyUp:T,onFocus:S,onBlur:A,...D}){const[s,u]=l.useState(!1),[r,v]=l.useState(!1),[n,b]=l.useState(!1),[o,i]=l.useState(!1),m=B(t),E=z({sizer:m,flavor:g,isSecondary:x,isDisabled:a,isKeyboardFocused:!a&&r&&!s&&!o,isKeyboardActivated:!a&&n,isTouchActivated:!a&&o});return l.createElement("button",{...D,className:F(E,d),disabled:a,type:f,onBlur:e=>{s&&u(!1),r&&v(!1),A?.(e)},onFocus:e=>{r||v(!0),S?.(e)},onKeyDown:e=>{console.log(c(e.nativeEvent)),n||(c(e.nativeEvent)==="enter"||e.nativeEvent.key==="Enter"||c(e.nativeEvent)==="space"||e.nativeEvent.key===" ")&&b(!0),w?.(e)},onKeyUp:e=>{n&&b(!1),T?.(e)},onMouseDown:e=>{s||u(!0),k?.(e)},onTouchStart:e=>{o||i(!0),h?.(e)},onTouchEnd:e=>{o&&i(!1),p?.(e)},onTouchCancel:e=>{o&&i(!1),y?.(e)},"data-nickui-sizer":Array.isArray(t)?t.join(","):t,"data-nickui-resolved-sizer":m})}q.__docgenInfo={description:`Buttons allow the user to trigger an action, such as submitting a form
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
| 'xl:xl'`,elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'sm:xs'"},{name:"literal",value:"'sm:sm'"},{name:"literal",value:"'sm:base'"},{name:"literal",value:"'sm:lg'"},{name:"literal",value:"'sm:xl'"},{name:"literal",value:"'md:xs'"},{name:"literal",value:"'md:sm'"},{name:"literal",value:"'md:base'"},{name:"literal",value:"'md:lg'"},{name:"literal",value:"'md:xl'"},{name:"literal",value:"'lg:xs'"},{name:"literal",value:"'lg:sm'"},{name:"literal",value:"'lg:base'"},{name:"literal",value:"'lg:lg'"},{name:"literal",value:"'lg:xl'"},{name:"literal",value:"'xl:xs'"},{name:"literal",value:"'xl:sm'"},{name:"literal",value:"'xl:base'"},{name:"literal",value:"'xl:lg'"},{name:"literal",value:"'xl:xl'"}]}],raw:"SizerType[]"}]},description:'Changes the size of the button ("sm", "base", "lg")'},flavor:{required:!1,tsType:{name:"union",raw:"'neutral' | 'positive' | 'negative'",elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"}]},description:'Changes the color of the button ("neutral", "secondary", "negative")'},secondary:{required:!1,tsType:{name:"boolean"},description:"Set to `true` to show the secondary style of the flavor",defaultValue:{value:"false",computed:!1}}}};export{q as B};
