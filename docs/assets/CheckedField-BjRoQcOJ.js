import{j as e,M as l,A as a,C as i}from"./blocks-DeQMV-F1.js";import{useMDXComponents as t}from"./index-BhQbZjFC.js";import{F as c,d,T as h}from"./TableOfContents-Bz5P9avz.js";import{C as o}from"./CheckedField-BmJ4XiQr.js";import{S as p,B as m,A as x}from"./CheckedField.stories-r3XTyQcK.js";import"./iframe-X96kWO4h.js";import"./index-C-j7dYre.js";import"./clsw-D-KgF5mV.js";import"./index-Czi7Upa3.js";function r(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:p}),`
`,e.jsx(s.h1,{id:"checkedfield",children:e.jsx(s.code,{children:"<CheckedField>"})}),`
`,e.jsx(s.p,{children:`Wraps a single checkable form control with a standard layout (label & explainer,
to the right of the control).`}),`
`,e.jsxs(s.p,{children:["This is simpler than the ",e.jsx(s.a,{href:"/docs/field-layouts-field--docs/",children:"Field"}),` component.
There’s no hint, since a field with only 2 possible values is too simple for it.
And there’s no error message, since if one or both possible values is invalid,
the field has no purpose.`]}),`
`,e.jsxs(s.p,{children:[`Note: this layout is already built-into
`,e.jsx(s.a,{href:"/docs/form-controls-checkbox--docs/",children:"Checkbox"}),`,
`,e.jsx(s.a,{href:"/docs/form-controls-radio--docs/",children:"Radio"}),`, and
`,e.jsx(s.a,{href:"/docs/form-controls-switch--docs/",children:"Switch"}),`—you can use this component to create
a custom form control that behaves the same way.`]}),`
`,e.jsx(c,{children:e.jsx(o,{label:"A label",explainer:"An explainer",sizer:o.sizer.medium,children:e.jsx(d,{tiny:!0})})}),`
`,e.jsx(h,{}),`
`,e.jsx(s.h2,{id:"props",children:"Props"}),`
`,e.jsxs(s.p,{children:[`In addition to the commonly used props below, you can pass any prop accepted by
the `,e.jsx(s.a,{href:"htps://react.dev/reference/react-dom/components/common",children:"<div>"}),`
element, which will be applied to the CheckedField's root div.`]}),`
`,e.jsx(a,{of:o,sort:"requiredFirst"}),`
`,e.jsx(s.h2,{id:"basic-elements",children:"Basic elements"}),`
`,e.jsxs(s.p,{children:["These elements are controlled using the ",e.jsx(s.code,{children:"label"}),", ",e.jsx(s.code,{children:"explainer"}),", and ",e.jsx(s.code,{children:"hint"})," props."]}),`
`,e.jsx(i,{of:m,sourceState:"shown"}),`
`,e.jsx(s.h2,{id:"sizing",children:"Sizing"}),`
`,e.jsxs(s.p,{children:["Sizing is done via the ",e.jsx(s.code,{children:"sizer"}),` prop. You can pass "small", "medium", or "large".
In keeping with the mobile-first philosophy of Tailwind, the default size is
"small".`]}),`
`,e.jsx(i,{of:x})]})}function k(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{k as default};
