import{k as d}from"./index-DtECKpfQ.js";import{r as a}from"./iframe-yGhCdJix.js";import{a as E,u as B,c as F}from"./index-BvyJpxie.js";const z=E({base:`
    text-nowrap
    appearance-none
    rounded-sm
    text-center
    select-none
    transition-all duration-8 ease-out
    outline-none
    border-1

    text-(--nickui-button-text-color)

    bg-(--nickui-button-bg-color)
    border-(--nickui-button-border-color)

    hover:bg-(--nickui-button-hover-bg-color)
    hover:border-(--nickui-button-hover-border-color)

    active:bg-(--nickui-button-active-bg-color)
    active:border-(--nickui-button-active-border-color)

    focus:bg-(--nickui-button-focus-bg-color)
    focus:border-(--nickui-button-focus-border-color)

    pointer-coarse:bg-(--nickui-button-coarse-bg-color)
    pointer-coarse:hover:bg-(--nickui-button-coarse-bg-color)
    pointer-coarse:active:bg-(--nickui-button-coarse-bg-color)
    pointer-coarse:focus:bg-(--nickui-button-coarse-bg-color)

    pointer-coarse:border-(--nickui-button-coarse-border-color)
    pointer-coarse:hover:border-(--nickui-button-coarse-border-color)
    pointer-coarse:active:border-(--nickui-button-coarse-border-color)
    pointer-coarse:focus:border-(--nickui-button-coarse-border-color)

    [--nickui-button-hover-bg-color:var(--nickui-button-bg-color)]
    [--nickui-button-active-bg-color:var(--nickui-button-bg-color)]
    [--nickui-button-focus-bg-color:var(--nickui-button-bg-color)]
    [--nickui-button-coarse-bg-color:var(--nickui-button-bg-color)]

    [--nickui-button-border-color:var(--nickui-button-bg-color)]
    [--nickui-button-hover-border-color:var(--nickui-button-hover-bg-color)]
    [--nickui-button-active-border-color:var(--nickui-button-active-bg-color)]
    [--nickui-button-focus-border-color:var(--nickui-button-focus-bg-color)]
    [--nickui-button-coarse-border-color:var(--nickui-button-coarse-bg-color)]
  `,variants:{sizer:{xs:"text-xs py-1.5 px-2",sm:"text-sm py-1.75 px-2.75",base:"text-base py-2.75 px-4.25",lg:"text-lg py-3.75 px-5.25",xl:"text-xl py-4.75 px-6.25"},isDisabled:{false:`
        cursor-pointer 
        shadow-md/15
        hover:shadow-xl/15 hover:-translate-y-0.5 hover:scale-102
        active:shadow-none active:translate-y-0.25 active:scale-99
        pointer-coarse:hover:shadow-md/15 pointer-coarse:hover:translate-y-0 pointer-coarse:hover:scale-100
        pointer-coarse:focus:shadow-md/15 pointer-coarse:focus:translate-y-0 pointer-coarse:focus:scale-100
      `,true:`
        cursor-not-allowed shadow-none
        hover:shadow-none hover:translate-y-0 hover:scale-100
        disabled:opacity-100
        [--nickui-button-text-color:var(--color-gray-600)]
        [--nickui-button-bg-color:var(--color-gray-300)]
      `},flavor:{neutral:"",positive:"",caution:"",negative:""},isSecondary:{false:"font-semibold",true:""},isKeyboardFocused:{true:"focus:shadow-xl/15 focus:-translate-y-0.5 focus:scale-102"},isKeyboardActivated:{true:`
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
        [--nickui-button-hover-border-color:var(--nickui-button-active-border-color)]
        [--nickui-button-focus-bg-color:var(--nickui-button-active-bg-color)]
        [--nickui-button-focus-border-color:var(--nickui-button-active-border-color)]
      `},{isKeyboardFocused:!0,isKeyboardActivated:!1,isDisabled:!1,class:`
        [--nickui-button-focus-bg-color:var(--nickui-button-hover-bg-color)]
        [--nickui-button-focus-border-color:var(--nickui-button-hover-border-color)]
      `},{flavor:"neutral",isSecondary:!1,isDisabled:!1,class:`
        [--nickui-button-text-color:var(--color-white)]
        [--nickui-button-bg-color:var(--color-blue-600)]
        [--nickui-button-hover-bg-color:var(--color-blue-500)]
        [--nickui-button-active-bg-color:var(--color-blue-700)]
      `},{flavor:"neutral",isSecondary:!1,isTouchActivated:!0,isDisabled:!1,class:"[--nickui-button-coarse-bg-color:var(--color-blue-800)]"},{flavor:"neutral",isSecondary:!0,isDisabled:!1,class:`
        shadow-md/10
        [--nickui-button-text-color:var(--color-blue-950)]

        [--nickui-button-bg-color:var(--color-blue-50)]
        [--nickui-button-border-color:var(--color-blue-900)]
        [--nickui-button-focus-border-color:var(--color-blue-900)]
        [--nickui-button-coarse-border-color:var(--color-blue-900)]

        [--nickui-button-hover-bg-color:#f2f7fc]
        [--nickui-button-hover-border-color:var(--color-blue-800)]

        [--nickui-button-active-bg-color:var(--color-blue-100)]
        [--nickui-button-active-border-color:var(--color-blue-950)]
      `},{flavor:"neutral",isSecondary:!0,isTouchActivated:!0,isDisabled:!1,class:`
        [--nickui-button-coarse-bg-color:var(--color-blue-200)]
        [--nickui-button-coarse-border-color:var(--color-blue-950)]
      `},{flavor:"positive",isSecondary:!1,isDisabled:!1,class:`
        [--nickui-button-text-color:var(--color-white)]
        [--nickui-button-bg-color:var(--color-emerald-700)]
        [--nickui-button-hover-bg-color:var(--color-emerald-600)]
        [--nickui-button-active-bg-color:var(--color-emerald-800)]
      `},{flavor:"positive",isSecondary:!1,isTouchActivated:!0,isDisabled:!1,class:"[--nickui-button-coarse-bg-color:var(--color-emerald-900)]"},{flavor:"positive",isSecondary:!0,isDisabled:!1,class:`
        shadow-md/10
        [--nickui-button-text-color:var(--color-emerald-950)]

        [--nickui-button-bg-color:var(--color-emerald-50)]
        [--nickui-button-border-color:var(--color-emerald-900)]
        [--nickui-button-focus-border-color:var(--color-emerald-900)]
        [--nickui-button-coarse-border-color:var(--color-emerald-900)]

        [--nickui-button-hover-bg-color:#f2fcf8]
        [--nickui-button-hover-border-color:var(--color-emerald-800)]

        [--nickui-button-active-bg-color:var(--color-emerald-100)]
        [--nickui-button-active-border-color:var(--color-emerald-950)]
      `},{flavor:"positive",isSecondary:!0,isTouchActivated:!0,isDisabled:!1,class:`
        [--nickui-button-coarse-bg-color:var(--color-emerald-200)]
        [--nickui-button-coarse-border-color:var(--color-emerald-950)]
      `},{flavor:"caution",isSecondary:!1,isDisabled:!1,class:`
        [--nickui-button-text-color:var(--color-yellow-950)]
        [--nickui-button-bg-color:var(--color-yellow-500)]
        [--nickui-button-hover-bg-color:var(--color-yellow-400)]
        [--nickui-button-active-bg-color:var(--color-yellow-600)]
      `},{flavor:"caution",isSecondary:!1,isTouchActivated:!0,isDisabled:!1,class:"[--nickui-button-coarse-bg-color:var(--color-yellow-600)]"},{flavor:"caution",isSecondary:!0,isDisabled:!1,class:`
        shadow-md/10
        [--nickui-button-text-color:var(--color-yellow-950)]

        [--nickui-button-bg-color:var(--color-yellow-50)]
        [--nickui-button-border-color:var(--color-yellow-900)]
        [--nickui-button-focus-border-color:var(--color-yellow-900)]
        [--nickui-button-coarse-border-color:var(--color-yellow-900)]

        [--nickui-button-hover-bg-color:#fffef3]
        [--nickui-button-hover-border-color:var(--color-yellow-800)]

        [--nickui-button-active-bg-color:var(--color-yellow-100)]
        [--nickui-button-active-border-color:var(--color-yellow-950)]
      `},{flavor:"caution",isSecondary:!0,isTouchActivated:!0,isDisabled:!1,class:`
        [--nickui-button-coarse-bg-color:var(--color-yellow-200)]
        [--nickui-button-coarse-border-color:var(--color-yellow-950)]
      `},{flavor:"negative",isDisabled:!1,class:`
        [--nickui-button-text-color:var(--color-white)]
        [--nickui-button-bg-color:var(--color-rose-700)]
        [--nickui-button-hover-bg-color:var(--color-rose-600)]
        [--nickui-button-active-bg-color:var(--color-rose-800)]
      `},{flavor:"negative",isTouchActivated:!0,isDisabled:!1,class:"[--nickui-button-coarse-bg-color:var(--color-rose-900)]"},{flavor:"negative",isSecondary:!0,isDisabled:!1,class:`
        shadow-md/10
        [--nickui-button-text-color:var(--color-rose-950)]

        [--nickui-button-bg-color:var(--color-rose-50)]
        [--nickui-button-border-color:var(--color-rose-900)]
        [--nickui-button-focus-border-color:var(--color-rose-900)]
        [--nickui-button-coarse-border-color:var(--color-rose-900)]

        [--nickui-button-hover-bg-color:#fcf2f3]
        [--nickui-button-hover-border-color:var(--color-rose-800)]

        [--nickui-button-active-bg-color:var(--color-rose-100)]
        [--nickui-button-active-border-color:var(--color-rose-950)]
      `},{flavor:"negative",isSecondary:!0,isTouchActivated:!0,isDisabled:!1,class:`
        [--nickui-button-coarse-bg-color:var(--color-rose-200)]
        [--nickui-button-coarse-border-color:var(--color-rose-950)]
      `}],defaultVariants:{sizer:"base",flavor:"neutral",isSecondary:!1,isDisabled:!1,isTouchActivated:!1,isKeyboardFocused:!1}});function q({className:m,type:f="button",disabled:e=!1,sizer:l,flavor:g,secondary:k=!1,onTouchStart:h,onTouchEnd:y,onTouchCancel:x,onMouseDown:p,onKeyDown:w,onKeyUp:T,onFocus:S,onBlur:D,...A}){const[t,s]=a.useState(!1),[n,u]=a.useState(!1),[i,b]=a.useState(!1),[r,c]=a.useState(!1),v=B(l),K=z({sizer:v,flavor:g,isSecondary:k,isDisabled:e,isKeyboardFocused:!e&&n&&!t&&!r,isKeyboardActivated:!e&&i,isTouchActivated:!e&&r});return a.createElement("button",{...A,className:F(K,m),disabled:e,type:f,onBlur:o=>{t&&s(!1),n&&u(!1),D?.(o)},onFocus:o=>{n||u(!0),S?.(o)},onKeyDown:o=>{i||(d(o.nativeEvent)==="enter"||o.nativeEvent.key==="Enter"||d(o.nativeEvent)==="space"||o.nativeEvent.key===" ")&&b(!0),w?.(o)},onKeyUp:o=>{i&&b(!1),T?.(o)},onMouseDown:o=>{t||s(!0),p?.(o)},onTouchStart:o=>{r||c(!0),h?.(o)},onTouchEnd:o=>{r&&c(!1),y?.(o)},onTouchCancel:o=>{r&&c(!1),x?.(o)},"data-nickui-sizer":Array.isArray(l)?l.join(","):l,"data-nickui-resolved-sizer":v})}q.__docgenInfo={description:`Buttons allow the user to trigger an action, such as submitting a form
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
| 'xl:xl'`,elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'sm:xs'"},{name:"literal",value:"'sm:sm'"},{name:"literal",value:"'sm:base'"},{name:"literal",value:"'sm:lg'"},{name:"literal",value:"'sm:xl'"},{name:"literal",value:"'md:xs'"},{name:"literal",value:"'md:sm'"},{name:"literal",value:"'md:base'"},{name:"literal",value:"'md:lg'"},{name:"literal",value:"'md:xl'"},{name:"literal",value:"'lg:xs'"},{name:"literal",value:"'lg:sm'"},{name:"literal",value:"'lg:base'"},{name:"literal",value:"'lg:lg'"},{name:"literal",value:"'lg:xl'"},{name:"literal",value:"'xl:xs'"},{name:"literal",value:"'xl:sm'"},{name:"literal",value:"'xl:base'"},{name:"literal",value:"'xl:lg'"},{name:"literal",value:"'xl:xl'"}]}],raw:"SizerType[]"}]},description:'Changes the size of the button ("sm", "base", "lg")'},flavor:{required:!1,tsType:{name:"union",raw:"'neutral' | 'positive' | 'caution' | 'negative'",elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'caution'"},{name:"literal",value:"'negative'"}]},description:`Changes the color of the button ("neutral", "positive", "caution",
"negative")`},secondary:{required:!1,tsType:{name:"boolean"},description:"Set to `true` to show the secondary style of the flavor",defaultValue:{value:"false",computed:!1}}}};export{q as B};
