import{j as e,M as d,C as r}from"./blocks-BpftXKcU.js";import{useMDXComponents as c}from"./index-zWCGpBQ0.js";import{D as o}from"./index-G_WEO9Ec.js";import{S as s,T as a,A as m,F as p,D as x}from"./Textarea.stories-Bm5RzURv.js";import"./iframe-LKk278Jc.js";import"./index-yyDsk73e.js";import"./clsw-D-KgF5mV.js";import"./Button-CFJt000I.js";import"./index-Czi7Upa3.js";import"./Field-DUiOyyff.js";import"./randomId-Dfhrkieu.js";function l(n){const t={code:"code",h2:"h2",p:"p",...c(),...n.components};return o||i("Docs",!1),o.ComponentHeading||i("Docs.ComponentHeading",!0),o.ControlStates||i("Docs.ControlStates",!0),o.FauxCanvas||i("Docs.FauxCanvas",!0),o.FormLibraryCompatibility||i("Docs.FormLibraryCompatibility",!0),o.Props||i("Docs.Props",!0),o.Sizing||i("Docs.Sizing",!0),o.TableOfContents||i("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(d,{of:s}),`
`,e.jsx(o.ComponentHeading,{of:"Textarea"}),`
`,e.jsx(t.p,{children:"A form control that allows users to enter & edit a mass of text."}),`
`,e.jsx(o.FauxCanvas,{children:e.jsx(a,{placeholder:"Type something!",sizer:a.sizer.medium})}),`
`,e.jsx(o.TableOfContents,{}),`
`,e.jsx(o.Props,{of:s,nativeBase:"textarea",wrapper:"Field"}),`
`,e.jsx(o.ControlStates,{of:s,valuable:!0}),`
`,e.jsx(t.h2,{id:"controlling-the-height",children:"Controlling the height"}),`
`,e.jsxs(t.p,{children:["Minimum vertical sizing of textareas is done via the ",e.jsx(t.code,{children:"rows"}),` prop (the default is
2 rows). The `,e.jsx(o,{of:"Textarea"})," will automatically grow up to the ",e.jsx(t.code,{children:"maxRows"}),`
prop to accomodate the value (the default is 10 rows). For an unbounded height,
you can use `,e.jsx(t.code,{children:"maxRows={Infinity}"}),"."]}),`
`,e.jsx(r,{of:m,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:["For a fixed height, use the same value for ",e.jsx(t.code,{children:"rows"})," and ",e.jsx(t.code,{children:"maxRows"}),"."]}),`
`,e.jsx(r,{of:p,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:["To prevent the user from being able to resize the ",e.jsx(o,{of:"Textarea"}),`
manually, use the `,e.jsx(t.code,{children:"disableManualResize"})," prop."]}),`
`,e.jsx(r,{of:x,sourceState:"shown"}),`
`,e.jsx(o.Sizing,{of:s,wrapper:"Field"}),`
`,e.jsx(o.FormLibraryCompatibility,{of:s,fieldName:"ironSpecs",initialValue:`115x Dynamic Gold
7 iron: 37.5 finished
7 iron: 62.5 lie angle`,componentProps:{label:"Iron specs",hint:"Try editting me!"}})]})}function v(n={}){const{wrapper:t}={...c(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}function i(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{v as default};
