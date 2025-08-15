import{k as d}from"./index-Bcc7r1sS.js";import{r as t}from"./iframe-ClCKDRnM.js";import{r as K,u as z,c as F}from"./index-C9N6JpZ7.js";const B=K({base:`
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
      `}],defaultVariants:{sizer:"base",flavor:"neutral",isSecondary:!1,isDisabled:!1,isTouchActivated:!1,isKeyboardFocused:!1}}),M=["button","reset","submit"];function R({className:f,type:k,disabled:r,sizer:c,flavor:h,secondary:y,onTouchStart:g,onTouchEnd:p,onTouchCancel:m,onMouseDown:w,onKeyDown:S,onKeyUp:x,onFocus:T,onBlur:A,...D}){const[a,l]=t.useState(!1),[i,u]=t.useState(!1),[n,b]=t.useState(!1),[e,s]=t.useState(!1),v=z(c),E=B({sizer:v,flavor:h,isSecondary:y,isDisabled:r,isKeyboardFocused:!r&&i&&!a&&!e,isKeyboardActivated:!r&&n,isTouchActivated:!r&&e});return t.createElement("button",{...D,className:F(E,f),disabled:r,type:k,onBlur:o=>{a&&l(!1),i&&u(!1),A?.(o)},onFocus:o=>{i||u(!0),T?.(o)},onKeyDown:o=>{n||(d(o.nativeEvent)==="enter"||o.nativeEvent.key==="Enter"||d(o.nativeEvent)==="space"||o.nativeEvent.key===" ")&&b(!0),S?.(o)},onKeyUp:o=>{n&&b(!1),x?.(o)},onMouseDown:o=>{a||l(!0),w?.(o)},onTouchStart:o=>{e||s(!0),g?.(o)},onTouchEnd:o=>{e&&s(!1),p?.(o)},onTouchCancel:o=>{e&&s(!1),m?.(o)},"data-nickui-sizer":Array.isArray(c)?c.join(","):c,"data-nickui-resolved-sizer":v})}R.__docgenInfo={description:`Buttons allow the user to trigger an action, such as submitting a form
@param props {@link ButtonProps}`,methods:[],displayName:"Button",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the component"},flavor:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof FLAVORS)[number]"},description:"Changes the color of the component"},secondary:{required:!1,tsType:{name:"boolean"},description:"Set to `true` to use the secondary style of the flavor"},sizer:{required:!1,tsType:{name:"union",raw:"SizerType | SizerType[]",elements:[{name:"unknown[number]",raw:"(typeof SIZERS)[number]"},{name:"Array",elements:[{name:"unknown[number]",raw:"(typeof SIZERS)[number]"}],raw:"SizerType[]"}]},description:`Changes the size of the component. A sizer string, or an array of sizer
strings for responsive sizing.`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The inner content shown in the Button"},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:"Called when Button is activated"},type:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof ALLOWED_TYPES)[number]"},description:"Controls the behavior of the button"}}};export{M as A,R as B};
