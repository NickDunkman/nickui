import{j as e,M as p,C as s}from"./blocks-BOY4E8NR.js";import{useMDXComponents as l}from"./index-BMLRhixw.js";import{D as o}from"./index-BaJMzWci.js";import{S as r,T as c,A as m,F as d,D as x}from"./TextArea.stories-B5Ih0gGi.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-DKZEa4Ck.js";import"./index-Dh-2ttH4.js";import"./client-B5izZOM2.js";import"./index-9iGa6NbW.js";import"./Button-Dp7bQ2Tp.js";import"./index-DdRpch8n.js";import"./PrettyPrint-ClJ9eSXk.js";import"./AllSizersStoryWrapper-D3CQH3gX.js";import"./Field-BpDm7nrL.js";import"./useFieldA11yIds-3nNG8woo.js";import"./randomId-Dfhrkieu.js";function a(n){const t={code:"code",h2:"h2",p:"p",...l(),...n.components};return o||i("Docs",!1),o.ComponentHeading||i("Docs.ComponentHeading",!0),o.ControlStates||i("Docs.ControlStates",!0),o.FauxCanvas||i("Docs.FauxCanvas",!0),o.FormLibraryCompatibility||i("Docs.FormLibraryCompatibility",!0),o.Props||i("Docs.Props",!0),o.Sizers||i("Docs.Sizers",!0),o.TableOfContents||i("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(p,{of:r}),`
`,e.jsx(o.ComponentHeading,{of:"TextArea"}),`
`,e.jsx(t.p,{children:"A form control that allows users to enter & edit a mass of text."}),`
`,e.jsx(o.FauxCanvas,{children:e.jsx(c,{placeholder:"Type something!"})}),`
`,e.jsx(o.TableOfContents,{}),`
`,e.jsx(o.Props,{of:r,nativeBase:"textarea",wrapper:"Field"}),`
`,e.jsx(o.ControlStates,{of:r,valuable:!0}),`
`,e.jsx(t.h2,{id:"controlling-the-height",children:"Controlling the height"}),`
`,e.jsxs(t.p,{children:["Minimum vertical sizing of textareas is done via the ",e.jsx(t.code,{children:"minRows"}),` prop (the default
is 2 rows). The `,e.jsx(o,{of:"TextArea"}),` will automatically grow up to the
`,e.jsx(t.code,{children:"maxRows"}),` prop to accomodate the value (the default is 10 rows). For an
unbounded height, you can use `,e.jsx(t.code,{children:"maxRows={Infinity}"}),"."]}),`
`,e.jsx(s,{of:m,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:["For a fixed height, use the ",e.jsx(t.code,{children:"rows"})," prop."]}),`
`,e.jsx(s,{of:d,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:["To prevent the user from being able to resize the ",e.jsx(o,{of:"TextArea"}),`
manually, use the `,e.jsx(t.code,{children:"disableManualResize"})," prop."]}),`
`,e.jsx(s,{of:x,sourceState:"shown"}),`
`,e.jsx(o.Sizers,{of:r,wrapper:"Field"}),`
`,e.jsx(o.FormLibraryCompatibility,{of:r,fieldName:"ironSpecs",initialValue:`115x Dynamic Gold
7 iron: 37.5” finished
7 iron: 62.5° lie angle`,componentProps:{label:"Iron specs",hint:"Try editting me!"}})]})}function R(n={}){const{wrapper:t}={...l(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}function i(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{R as default};
