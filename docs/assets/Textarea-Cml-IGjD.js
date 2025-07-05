import{j as e,M as l,C as r}from"./blocks-DlelVFUO.js";import{useMDXComponents as c}from"./index-5tR42_6A.js";import{D as o}from"./index-CpfaDKIC.js";import{S as i,T as a,A as h,F as d,D as x}from"./Textarea.stories-D1CNMAjJ.js";import"./iframe-DcTNfTrS.js";import"./index-PS2ocasz.js";import"./clsw-D-KgF5mV.js";import"./Field-BbwG3304.js";import"./index-Czi7Upa3.js";import"./randomId-Dfhrkieu.js";function m(s){const t={code:"code",h1:"h1",h2:"h2",p:"p",...c(),...s.components};return o||n("Docs",!1),o.ComponentName||n("Docs.ComponentName",!0),o.ControlStates||n("Docs.ControlStates",!0),o.FakeCanvas||n("Docs.FakeCanvas",!0),o.FormikDemo||n("Docs.FormikDemo",!0),o.Props||n("Docs.Props",!0),o.ReactHookFormDemo||n("Docs.ReactHookFormDemo",!0),o.Sizing||n("Docs.Sizing",!0),o.TableOfContents||n("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(l,{of:i}),`
`,e.jsx(t.h1,{id:"",children:e.jsx(o.ComponentName,{of:"Textarea"})}),`
`,e.jsx(t.p,{children:"A form control that allows users to enter & edit a mass of text."}),`
`,e.jsx(o.FakeCanvas,{children:e.jsx(a,{placeholder:"Type something!",sizer:a.sizer.medium})}),`
`,e.jsx(o.TableOfContents,{}),`
`,e.jsx(o.Props,{of:i,nativeBase:"textarea",wrapper:"Field"}),`
`,e.jsx(o.ControlStates,{of:i}),`
`,e.jsx(t.h2,{id:"controlling-the-height",children:"Controlling the height"}),`
`,e.jsxs(t.p,{children:["Minimum vertical sizing of textareas is done via the ",e.jsx(t.code,{children:"rows"}),` prop (the default is
2 rows). The `,e.jsx(o,{of:"Textarea"})," will automatically grow up to the ",e.jsx(t.code,{children:"maxRows"}),`
prop to accomodate the value (the default is 10 rows). For an unbounded height,
you can use `,e.jsx(t.code,{children:"maxRows={Infinity}"}),"."]}),`
`,e.jsx(r,{of:h,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:["For a fixed height, use the same value for ",e.jsx(t.code,{children:"rows"})," and ",e.jsx(t.code,{children:"maxRows"}),"."]}),`
`,e.jsx(r,{of:d,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:["To prevent the user from being able to resize the ",e.jsx(o,{of:"Textarea"}),`
manually, use the `,e.jsx(t.code,{children:"disableManualResize"})," prop."]}),`
`,e.jsx(r,{of:x,sourceState:"shown"}),`
`,e.jsx(o.Sizing,{of:i,wrapper:"Field"}),`
`,e.jsx(o.ReactHookFormDemo,{of:i,fieldName:"aboutMe",initialValue:"I am Nick",componentProps:{label:"About me",hint:"Try editting me!"}}),`
`,e.jsx(o.FormikDemo,{of:i,fieldName:"aboutMe",initialValue:"I am Nick",componentProps:{label:"About me",hint:"Try editting me!"}})]})}function T(s={}){const{wrapper:t}={...c(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(m,{...s})}):m(s)}function n(s,t){throw new Error("Expected "+(t?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{T as default};
