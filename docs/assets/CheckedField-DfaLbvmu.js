import{j as e,M as c,A as d,C as r}from"./blocks-D2F_NW0t.js";import{useMDXComponents as l}from"./index-DwXBoJ7S.js";import{D as n}from"./index-DiemKipG.js";import{C as t}from"./CheckedField-CFqLPZQ9.js";import{S as h,B as p,A as m}from"./CheckedField.stories-fqnIdzBw.js";import"./iframe-B-MmJHH3.js";import"./index-DR5r5e_J.js";import"./clsw-D-KgF5mV.js";import"./index-Czi7Upa3.js";function a(s){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...l(),...s.components};return n||i("Docs",!1),n.FakeCanvas||i("Docs.FakeCanvas",!0),n.FormControlPlaceholder||i("Docs.FormControlPlaceholder",!0),n.Name||i("Docs.Name",!0),n.TableOfContents||i("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(c,{of:h}),`
`,e.jsx(o.h1,{id:"",children:e.jsx(n.Name,{of:"CheckedField"})}),`
`,e.jsx(o.p,{children:`Wraps a single checkable form control with a standard layout (label & explainer,
to the right of the control).`}),`
`,e.jsxs(o.p,{children:["This is simpler than the ",e.jsx(n,{of:"Field"}),` component. There’s no hint, since a
field with only 2 possible values is too simple for it. And there’s no error
message, since if one or both possible values is invalid, the field has no
purpose.`]}),`
`,e.jsx("div",{children:e.jsxs(o.p,{children:["Note: this layout is already built-into ",e.jsx(n,{of:"Checkbox"}),","," ",`
`,e.jsx(n,{of:"Radio"}),", and ",e.jsx(n,{of:"Switch"}),`. You can use this component to
create a custom form control that behaves the same way.`]})}),`
`,e.jsx(n.FakeCanvas,{children:e.jsx(t,{label:"A label",explainer:"An explainer",sizer:t.sizer.medium,children:e.jsx(n.FormControlPlaceholder,{tiny:!0})})}),`
`,e.jsx(n.TableOfContents,{}),`
`,e.jsx(o.h2,{id:"props",children:"Props"}),`
`,e.jsxs(o.p,{children:[`In addition to the commonly used props below, you can pass any prop accepted by
the `,e.jsx(o.a,{href:"htps://react.dev/reference/react-dom/components/common",children:"<div>"}),`
element, which will be applied to the CheckedField's root div.`]}),`
`,e.jsx(d,{of:t,sort:"requiredFirst"}),`
`,e.jsx(o.h2,{id:"basic-elements",children:"Basic elements"}),`
`,e.jsxs(o.p,{children:["These elements are controlled using the ",e.jsx(o.code,{children:"label"}),", ",e.jsx(o.code,{children:"explainer"}),", and ",e.jsx(o.code,{children:"hint"})," props."]}),`
`,e.jsx(r,{of:p,sourceState:"shown"}),`
`,e.jsx(o.h2,{id:"sizing",children:"Sizing"}),`
`,e.jsxs(o.p,{children:["Sizing is done via the ",e.jsx(o.code,{children:"sizer"}),` prop. You can pass "small", "medium", or "large".
In keeping with the mobile-first philosophy of Tailwind, the default size is
"small".`]}),`
`,e.jsx(r,{of:m})]})}function w(s={}){const{wrapper:o}={...l(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(a,{...s})}):a(s)}function i(s,o){throw new Error("Expected "+(o?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{w as default};
