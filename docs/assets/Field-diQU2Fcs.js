import{j as e,M as d,A as c,C as i}from"./blocks-DxDjG57E.js";import{useMDXComponents as l}from"./index-Bsoww3nm.js";import{D as s}from"./index-BinAziky.js";import{F as t}from"./Field-DsMG-wVd.js";import{S as h,B as p,A as m,E as x,R as f}from"./Field.stories-C-lAlRM8.js";import"./iframe-DVoMRv_a.js";import"./index-C915q1-3.js";import"./clsw-D-KgF5mV.js";import"./index-Czi7Upa3.js";function a(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...l(),...n.components};return s||r("Docs",!1),s.FakeCanvas||r("Docs.FakeCanvas",!0),s.FormControlPlaceholder||r("Docs.FormControlPlaceholder",!0),s.Name||r("Docs.Name",!0),s.TableOfContents||r("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(d,{of:h}),`
`,e.jsx(o.h1,{id:"",children:e.jsx(s.Name,{of:"Field"})}),`
`,e.jsx(o.p,{children:`Wraps one form control in a standard field layout (label, hint, error message,
etc).`}),`
`,e.jsx("div",{children:e.jsxs(o.p,{children:["Note: this layout is already built-into ",e.jsx(s,{of:"Select"}),`,
`,e.jsx(s,{of:"Slider"}),", ",e.jsx(s,{of:"Text"}),", and ",e.jsx(s,{of:"Textarea"}),`. You can
use this component to create a custom form control that behaves the same way.`]})}),`
`,e.jsx(s.FakeCanvas,{children:e.jsx(t,{label:"A label",explainer:"An explainer",error:"An error message!",hint:"A hint",sizer:t.sizer.medium,children:e.jsx(s.FormControlPlaceholder,{})})}),`
`,e.jsx(s.TableOfContents,{}),`
`,e.jsx(o.h2,{id:"props",children:"Props"}),`
`,e.jsxs(o.p,{children:[`In addition to the commonly used props below, you can pass any prop accepted by
the `,e.jsx(o.a,{href:"htps://react.dev/reference/react-dom/components/common",children:"<div>"}),`
element, which will be applied to the Field's root div.`]}),`
`,e.jsx(c,{of:t,sort:"requiredFirst"}),`
`,e.jsx(o.h2,{id:"basic-elements",children:"Basic elements"}),`
`,e.jsxs(o.p,{children:["These elements are controlled using the ",e.jsx(o.code,{children:"label"}),", ",e.jsx(o.code,{children:"explainer"}),", and ",e.jsx(o.code,{children:"hint"})," props."]}),`
`,e.jsx(i,{of:p,sourceState:"shown"}),`
`,e.jsx(o.h2,{id:"sizing",children:"Sizing"}),`
`,e.jsxs(o.p,{children:["Sizing is done via the ",e.jsx(o.code,{children:"sizer"}),` prop. You can pass "small", "medium", or "large".
In keeping with the mobile-first philosophy of Tailwind, the default size is
"small".`]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(o.h2,{id:"errors",children:"Errors"}),`
`,e.jsxs(o.p,{children:["To add an error message, use the ",e.jsx(o.code,{children:"error"})," prop."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(o.h2,{id:"required-fields",children:"Required fields"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"required"})," prop is used to add an asterisk to the label."]}),`
`,e.jsx(i,{of:f})]})}function D(n={}){const{wrapper:o}={...l(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(a,{...n})}):a(n)}function r(n,o){throw new Error("Expected "+(o?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{D as default};
