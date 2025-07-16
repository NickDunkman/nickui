import{j as e,M as l,C as d}from"./blocks-DhjdD4uZ.js";import{useMDXComponents as c}from"./index-CcbRJECQ.js";import{D as o}from"./index-FA4gCsO7.js";import{C as r}from"./CheckedField-Cqbv05qx.js";import{S as i,B as h}from"./CheckedField.stories-DejoZVFD.js";import"./iframe-Jkut9fmw.js";import"./index-CsoY1d1Q.js";import"./client-BV2bxRU7.js";import"./index-BslxMl4d.js";import"./Button-DWGQpFnO.js";function a(t){const n={code:"code",h2:"h2",p:"p",...c(),...t.components};return o||s("Docs",!1),o.ComponentHeading||s("Docs.ComponentHeading",!0),o.FauxCanvas||s("Docs.FauxCanvas",!0),o.FormControlPlaceholder||s("Docs.FormControlPlaceholder",!0),o.Props||s("Docs.Props",!0),o.Sizing||s("Docs.Sizing",!0),o.TableOfContents||s("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(l,{of:i}),`
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
`,e.jsx(o.FauxCanvas,{children:e.jsx(r,{label:"A label",hint:"A hint",sizer:r.sizer.medium,children:e.jsx(o.FormControlPlaceholder,{tiny:!0})})}),`
`,e.jsx(o.TableOfContents,{}),`
`,e.jsx(o.Props,{of:i,nativeBase:"label"}),`
`,e.jsx(n.h2,{id:"basic-elements",children:"Basic elements"}),`
`,e.jsxs(n.p,{children:["These elements are controlled using the ",e.jsx(n.code,{children:"label"})," and ",e.jsx(n.code,{children:"hint"})," props."]}),`
`,e.jsx(d,{of:h,sourceState:"shown"}),`
`,e.jsx(o.Sizing,{of:i})]})}function v(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}function s(t,n){throw new Error("Expected "+(n?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{v as default};
