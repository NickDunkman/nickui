import{j as e,M as d,A as c,C as i}from"./blocks-CiUhgXaD.js";import{useMDXComponents as a}from"./index-DVQ7ftJw.js";import{D as r}from"./index-DY58uIAq.js";import"./Radios-CdVOI9F5.js";import{F as t}from"./Fieldset-CVSGuKiQ.js";import{S as h,B as m,A as p,E as x,R as f}from"./Fieldset.stories-CaSE-rt9.js";import"./iframe-B7C3MqEt.js";import"./index-CepO98Pc.js";import"./clsw-D-KgF5mV.js";import"./Radio-BJNR_lxP.js";import"./Checkbox-CjBrTnpD.js";import"./CheckedField-BYZi5191.js";import"./index-Czi7Upa3.js";import"./Checkboxes-D-CA3s1k.js";import"./randomId-Dfhrkieu.js";function l(s){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...a(),...s.components};return r||n("Docs",!1),r.FakeCanvas||n("Docs.FakeCanvas",!0),r.FormControlPlaceholder||n("Docs.FormControlPlaceholder",!0),r.Name||n("Docs.Name",!0),r.TableOfContents||n("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(d,{of:h}),`
`,e.jsx(o.h1,{id:"",children:e.jsx(r.Name,{of:"Fieldset"})}),`
`,e.jsx(o.p,{children:`Wraps multiple form controls in a standard field layout (label, hint, error
message, etc).`}),`
`,e.jsx("div",{children:e.jsxs(o.p,{children:["Note: this layout is already built-into ",e.jsx(r,{of:"Checkboxes"}),`,
`,e.jsx(r,{of:"Radios"}),", and ",e.jsx(r,{of:"Switches"}),`. You can use this component
to create custom form controls that behave the same way.`]})}),`
`,e.jsx(r.FakeCanvas,{children:e.jsx(t,{label:"A label",explainer:"An explainer",error:"An error message!",hint:"A hint",sizer:t.sizer.medium,children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r.FormControlPlaceholder,{children:e.jsx(o.p,{children:"One form control"})}),e.jsx(r.FormControlPlaceholder,{children:e.jsx(o.p,{children:"Another form control"})}),e.jsx(r.FormControlPlaceholder,{children:"And so on ..."})]})})}),`
`,e.jsx(r.TableOfContents,{}),`
`,e.jsx(o.h2,{id:"props",children:"Props"}),`
`,e.jsxs(o.p,{children:[`In addition to the commonly used props below, you can pass any prop accepted by
the `,e.jsx(o.a,{href:"htps://react.dev/reference/react-dom/components/common",children:"<fieldset>"}),`
element, which will be applied to the Field's root element.`]}),`
`,e.jsx(c,{of:t,sort:"requiredFirst"}),`
`,e.jsx(o.h2,{id:"basic-elements",children:"Basic elements"}),`
`,e.jsxs(o.p,{children:["These elements are controlled using the ",e.jsx(o.code,{children:"label"}),", ",e.jsx(o.code,{children:"explainer"}),", and ",e.jsx(o.code,{children:"hint"})," props."]}),`
`,e.jsx(i,{of:m,sourceState:"shown"}),`
`,e.jsx(o.h2,{id:"sizing",children:"Sizing"}),`
`,e.jsxs(o.p,{children:["Sizing is done via the ",e.jsx(o.code,{children:"sizer"}),` prop. You can pass "small", "medium", or "large".
In keeping with the mobile-first philosophy of Tailwind, the default size is
"small".`]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(o.h2,{id:"errors",children:"Errors"}),`
`,e.jsxs(o.p,{children:["To add an error message, use the ",e.jsx(o.code,{children:"error"})," prop."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(o.h2,{id:"required-fields",children:"Required fields"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"required"})," prop is used to add an asterisk to the label."]}),`
`,e.jsx(i,{of:f})]})}function S(s={}){const{wrapper:o}={...a(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(l,{...s})}):l(s)}function n(s,o){throw new Error("Expected "+(o?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{S as default};
