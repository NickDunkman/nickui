import{j as e,M as c,C as h}from"./blocks-DlelVFUO.js";import{useMDXComponents as l}from"./index-5tR42_6A.js";import{D as o}from"./index-CpfaDKIC.js";import{C as r}from"./CheckedField-CdtC94Qi.js";import{S as i,B as d}from"./CheckedField.stories-BhEgBHYD.js";import"./iframe-DcTNfTrS.js";import"./index-PS2ocasz.js";import"./clsw-D-KgF5mV.js";import"./index-Czi7Upa3.js";function a(s){const n={code:"code",h1:"h1",h2:"h2",p:"p",...l(),...s.components};return o||t("Docs",!1),o.ComponentName||t("Docs.ComponentName",!0),o.FakeCanvas||t("Docs.FakeCanvas",!0),o.FormControlPlaceholder||t("Docs.FormControlPlaceholder",!0),o.Props||t("Docs.Props",!0),o.Sizing||t("Docs.Sizing",!0),o.TableOfContents||t("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(c,{of:i}),`
`,e.jsx(n.h1,{id:"",children:e.jsx(o.ComponentName,{of:"CheckedField"})}),`
`,e.jsx(n.p,{children:`Wraps a single checkable form control with a standard layout (label & explainer,
to the right of the control).`}),`
`,e.jsxs(n.p,{children:["This is simpler than the ",e.jsx(o,{of:"Field"}),` component. There’s no hint, since a
field with only 2 possible values is too simple for it. And there’s no error
message, since if one or both possible values is invalid, the field has no
purpose.`]}),`
`,e.jsx("div",{children:e.jsxs(n.p,{children:["Note: this layout is already built-into ",e.jsx(o,{of:"Checkbox"}),","," ",`
`,e.jsx(o,{of:"Radio"}),", and ",e.jsx(o,{of:"Switch"}),`. You can use this component to
create a custom form control that behaves the same way.`]})}),`
`,e.jsx(o.FakeCanvas,{children:e.jsx(r,{label:"A label",explainer:"An explainer",sizer:r.sizer.medium,children:e.jsx(o.FormControlPlaceholder,{tiny:!0})})}),`
`,e.jsx(o.TableOfContents,{}),`
`,e.jsx(o.Props,{of:i,nativeBase:"label"}),`
`,e.jsx(n.h2,{id:"basic-elements",children:"Basic elements"}),`
`,e.jsxs(n.p,{children:["These elements are controlled using the ",e.jsx(n.code,{children:"label"}),", ",e.jsx(n.code,{children:"explainer"}),", and ",e.jsx(n.code,{children:"hint"})," props."]}),`
`,e.jsx(h,{of:d,sourceState:"shown"}),`
`,e.jsx(o.Sizing,{of:i})]})}function v(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}function t(s,n){throw new Error("Expected "+(n?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{v as default};
