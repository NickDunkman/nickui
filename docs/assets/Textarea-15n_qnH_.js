import{j as e,M as m,C as a}from"./blocks-DxDjG57E.js";import{useMDXComponents as l}from"./index-Bsoww3nm.js";import{D as t}from"./index-BinAziky.js";import{S as r,T as i,A as d,a as h,F as x,D as u}from"./Textarea.stories-qZxn1MMt.js";import"./iframe-DVoMRv_a.js";import"./index-C915q1-3.js";import"./clsw-D-KgF5mV.js";import"./Field-DsMG-wVd.js";import"./index-Czi7Upa3.js";import"./randomId-Dfhrkieu.js";function c(s){const o={code:"code",h1:"h1",h2:"h2",p:"p",...l(),...s.components};return t||n("Docs",!1),t.FakeCanvas||n("Docs.FakeCanvas",!0),t.FormikDemo||n("Docs.FormikDemo",!0),t.Name||n("Docs.Name",!0),t.Props||n("Docs.Props",!0),t.ReactHookFormDemo||n("Docs.ReactHookFormDemo",!0),t.Sizing||n("Docs.Sizing",!0),t.TableOfContents||n("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
`,e.jsx(o.h1,{id:"",children:e.jsx(t.Name,{of:"Textarea"})}),`
`,e.jsx(o.p,{children:"A form control that allows users to enter & edit a mass of text."}),`
`,e.jsx(t.FakeCanvas,{children:e.jsx(i,{placeholder:"Type something!",sizer:i.sizer.medium})}),`
`,e.jsx(t.TableOfContents,{}),`
`,e.jsx(t.Props,{of:r,nativeBase:"textarea",wrapper:"Field"}),`
`,e.jsx(o.h2,{id:"control-states",children:"Control states"}),`
`,e.jsxs(o.p,{children:["These are handled via the ",e.jsx(o.code,{children:"value"}),", ",e.jsx(o.code,{children:"defaultValue"}),", & ",e.jsx(o.code,{children:"disabled"})," props."]}),`
`,e.jsx(a,{of:d,sourceState:"shown"}),`
`,e.jsx(o.h2,{id:"controlling-the-height",children:"Controlling the height"}),`
`,e.jsxs(o.p,{children:["Minimum vertical sizing of textareas is done via the ",e.jsx(o.code,{children:"rows"}),` prop (the default is
2 rows). The `,e.jsx(t.Name,{of:"Textarea"}),` will automatically grow up to the
`,e.jsx(o.code,{children:"maxRows"}),` prop to accomodate the value (the default is 10 rows). For an
unbounded height, you can use `,e.jsx(o.code,{children:"maxRows={Infinity}"}),"."]}),`
`,e.jsx(a,{of:h,sourceState:"shown"}),`
`,e.jsxs(o.p,{children:["For a fixed height, use the same value for ",e.jsx(o.code,{children:"rows"})," and ",e.jsx(o.code,{children:"maxRows"}),"."]}),`
`,e.jsx(a,{of:x,sourceState:"shown"}),`
`,e.jsxs(o.p,{children:["To prevent the user from being able to resize the ",e.jsx(t.Name,{of:"Textarea"}),`
manually, use the `,e.jsx(o.code,{children:"disableManualResize"})," prop."]}),`
`,e.jsx(a,{of:u,sourceState:"shown"}),`
`,e.jsx(t.Sizing,{of:r,wrapper:"Field"}),`
`,e.jsx(t.ReactHookFormDemo,{fieldName:"aboutMe",initialValue:"I am Nick",component:i,componentProps:{label:"About me",hint:"Try editting me!"}}),`
`,e.jsx(t.FormikDemo,{fieldName:"aboutMe",initialValue:"I am Nick",component:i,componentProps:{label:"About me",hint:"Try editting me!"}})]})}function v(s={}){const{wrapper:o}={...l(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(c,{...s})}):c(s)}function n(s,o){throw new Error("Expected "+(o?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{v as default};
