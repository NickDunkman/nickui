import{j as e,M as c,C as r}from"./blocks-XpvmKMDK.js";import{useMDXComponents as l}from"./index-yPopebP0.js";import{D as o}from"./index-EWLpJ8Z8.js";import{S as s,T as p,A as d,F as m,D as x}from"./Textarea.stories-ByC1VCaq.js";import"./iframe-CJWqI_sH.js";import"./index-CJuSvGwf.js";import"./client-zryi-VIP.js";import"./index-DC3BbHJo.js";import"./Button-DNsdbN_b.js";import"./index-BBfbCM54.js";import"./Field-DTDJHLTn.js";import"./randomId-Dfhrkieu.js";function a(n){const t={code:"code",h2:"h2",p:"p",...l(),...n.components};return o||i("Docs",!1),o.ComponentHeading||i("Docs.ComponentHeading",!0),o.ControlStates||i("Docs.ControlStates",!0),o.FauxCanvas||i("Docs.FauxCanvas",!0),o.FormLibraryCompatibility||i("Docs.FormLibraryCompatibility",!0),o.Props||i("Docs.Props",!0),o.Sizing||i("Docs.Sizing",!0),o.TableOfContents||i("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(c,{of:s}),`
`,e.jsx(o.ComponentHeading,{of:"Textarea"}),`
`,e.jsx(t.p,{children:"A form control that allows users to enter & edit a mass of text."}),`
`,e.jsx(o.FauxCanvas,{children:e.jsx(p,{placeholder:"Type something!"})}),`
`,e.jsx(o.TableOfContents,{}),`
`,e.jsx(o.Props,{of:s,nativeBase:"textarea",wrapper:"Field"}),`
`,e.jsx(o.ControlStates,{of:s,valuable:!0}),`
`,e.jsx(t.h2,{id:"controlling-the-height",children:"Controlling the height"}),`
`,e.jsxs(t.p,{children:["Minimum vertical sizing of textareas is done via the ",e.jsx(t.code,{children:"rows"}),` prop (the default is
2 rows). The `,e.jsx(o,{of:"Textarea"})," will automatically grow up to the ",e.jsx(t.code,{children:"maxRows"}),`
prop to accomodate the value (the default is 10 rows). For an unbounded height,
you can use `,e.jsx(t.code,{children:"maxRows={Infinity}"}),"."]}),`
`,e.jsx(r,{of:d,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:["For a fixed height, use the same value for ",e.jsx(t.code,{children:"rows"})," and ",e.jsx(t.code,{children:"maxRows"}),"."]}),`
`,e.jsx(r,{of:m,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:["To prevent the user from being able to resize the ",e.jsx(o,{of:"Textarea"}),`
manually, use the `,e.jsx(t.code,{children:"disableManualResize"})," prop."]}),`
`,e.jsx(r,{of:x,sourceState:"shown"}),`
`,e.jsx(o.Sizing,{of:s,wrapper:"Field"}),`
`,e.jsx(o.FormLibraryCompatibility,{of:s,fieldName:"ironSpecs",initialValue:`115x Dynamic Gold
7 iron: 37.5” finished
7 iron: 62.5° lie angle`,componentProps:{label:"Iron specs",hint:"Try editting me!"}})]})}function S(n={}){const{wrapper:t}={...l(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}function i(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{S as default};
