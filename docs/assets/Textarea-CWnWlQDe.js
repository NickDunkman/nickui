import{j as e,M as l,C as n}from"./blocks-BA1a2dVG.js";import{useMDXComponents as r}from"./index-BXt_MkKP.js";import{F as d,T as c,b as h,a as m,R as x,c as p}from"./TableOfContents-Dhm7B0is.js";import{S as a,T as s,A as u,a as j,F as f,D as g}from"./Textarea.stories-B-iwF2Va.js";import"./iframe-Dcrhn4el.js";import"./index-CnbiPRYk.js";import"./clsw-D-KgF5mV.js";import"./Field--XSLElry.js";import"./index-Czi7Upa3.js";import"./randomId-Dfhrkieu.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:a}),`
`,e.jsx(o.h1,{id:"textarea",children:e.jsx(o.code,{children:"<Textarea>"})}),`
`,e.jsx(o.p,{children:"A form control that allows users to enter & edit a mass of text."}),`
`,e.jsx(d,{children:e.jsx(s,{placeholder:"Type something!",sizer:s.sizer.medium})}),`
`,e.jsx(c,{}),`
`,e.jsx(h,{of:s,reactDocs:"textarea",wrapper:"Field"}),`
`,e.jsx(o.h2,{id:"control-states",children:"Control states"}),`
`,e.jsxs(o.p,{children:["These are handled via the ",e.jsx(o.code,{children:"value"}),", ",e.jsx(o.code,{children:"defaultValue"}),", & ",e.jsx(o.code,{children:"disabled"})," props."]}),`
`,e.jsx(n,{of:u,sourceState:"shown"}),`
`,e.jsx(o.h2,{id:"controlling-the-height",children:"Controlling the height"}),`
`,e.jsxs(o.p,{children:["Minimum vertical sizing of textareas is done via the ",e.jsx(o.code,{children:"rows"}),` prop (the default is
2 rows). The Textarea will automatically grow up to the `,e.jsx(o.code,{children:"maxRows"}),` prop to
accomodate the value (the default is 10 rows). For an unbounded height, you can
use `,e.jsx(o.code,{children:"maxRows={Infinity}"}),"."]}),`
`,e.jsx(n,{of:j,sourceState:"shown"}),`
`,e.jsxs(o.p,{children:["For a fixed height, use the same value for ",e.jsx(o.code,{children:"rows"})," and ",e.jsx(o.code,{children:"maxRows"}),"."]}),`
`,e.jsx(n,{of:f,sourceState:"shown"}),`
`,e.jsxs(o.p,{children:[`To prevent the user from being able to resize the Textarea manually, use the
`,e.jsx(o.code,{children:"disableManualResize"})," prop."]}),`
`,e.jsx(n,{of:g,sourceState:"shown"}),`
`,e.jsx(m,{of:s,wrapper:"Field",stories:a}),`
`,e.jsx(x,{fieldName:"aboutMe",initialValue:"I am Nick",component:s,componentProps:{label:"About me",hint:"Try editting me!"}}),`
`,e.jsx(p,{fieldName:"aboutMe",initialValue:"I am Nick",component:s,componentProps:{label:"About me",hint:"Try editting me!"}})]})}function A(t={}){const{wrapper:o}={...r(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{A as default};
