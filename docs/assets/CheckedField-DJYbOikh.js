import{j as e,M as c,C as l}from"./blocks-DSSnWKN8.js";import{useMDXComponents as a}from"./index-CZmKWU2C.js";import{D as o}from"./index-Cps_OG6H.js";import{C as d}from"./CheckedField-DhMWk15-.js";import{S as r,B as h}from"./CheckedField.stories-ByLpbEAl.js";import"./iframe-CF7ggHrS.js";import"./index-TaaLLYVW.js";import"./client-CVCIO-hh.js";import"./index-DuZop_BC.js";import"./Button-D4awodiI.js";import"./index-C0cj4GDh.js";import"./AllSizersStoryWrapper-BaMaOcyL.js";function i(t){const n={code:"code",h2:"h2",p:"p",...a(),...t.components};return o||s("Docs",!1),o.ComponentHeading||s("Docs.ComponentHeading",!0),o.FauxCanvas||s("Docs.FauxCanvas",!0),o.FormControlPlaceholder||s("Docs.FormControlPlaceholder",!0),o.Props||s("Docs.Props",!0),o.Sizers||s("Docs.Sizers",!0),o.TableOfContents||s("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(c,{of:r}),`
`,e.jsx(o.ComponentHeading,{of:"CheckedField"}),`
`,e.jsx(n.p,{children:`Wraps a single checkable form control with a standard layout (label & hint, to
the right of the control).`}),`
`,e.jsxs(n.p,{children:["This is simpler than the ",e.jsx(o,{of:"Field"})," component. There’s no ",e.jsx(n.code,{children:"error"}),`
message, since if one or both possible values is invalid, the field has no
purpose. And there’s no `,e.jsx(n.code,{children:"required"}),` state, since that would make the unchecked
state invalid.`]}),`
`,e.jsx("div",{children:e.jsxs(n.p,{children:["Note: this layout is already built-into ",e.jsx(o,{of:"Checkbox"}),","," ",`
`,e.jsx(o,{of:"Radio"}),", and ",e.jsx(o,{of:"Switch"}),`. You can use this component to
create a custom form control that behaves the same way.`]})}),`
`,e.jsx(o.FauxCanvas,{children:e.jsx(d,{label:"A label",hint:"A hint",children:e.jsx(o.FormControlPlaceholder,{tiny:!0})})}),`
`,e.jsx(o.TableOfContents,{}),`
`,e.jsx(o.Props,{of:r,nativeBase:"label"}),`
`,e.jsx(n.h2,{id:"basic-elements",children:"Basic elements"}),`
`,e.jsxs(n.p,{children:["These elements are controlled using the ",e.jsx(n.code,{children:"label"})," and ",e.jsx(n.code,{children:"hint"})," props."]}),`
`,e.jsx(l,{of:h,sourceState:"shown"}),`
`,e.jsx(o.Sizers,{of:r})]})}function w(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}function s(t,n){throw new Error("Expected "+(n?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{w as default};
