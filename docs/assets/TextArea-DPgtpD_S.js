import{j as e,M as d,C as i}from"./blocks-R-MRhTR5.js";import{useMDXComponents as c}from"./index-B55W4IUd.js";import{D as o}from"./index-vQz8d2-S.js";import{s as r,T as a,a as x,f as h,d as f}from"./TextArea.stories-aDNoMTAM.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-C0VeZLsT.js";import"./index-BjBQ9-e5.js";import"./client-DNYhGbiH.js";import"./Button-Ux8cbQnl.js";import"./index-DqLhOWtd.js";import"./index-V48DHmLJ.js";import"./AllSizersStoryWrapper-BxMOK3L_.js";import"./getStoryArgTypes-xnGM9Mjx.js";import"./Field-CtUsfE6J.js";import"./fieldA11y-IXtqdaYQ.js";import"./randomId-Dfhrkieu.js";function l(n){const t={code:"code",h2:"h2",p:"p",...c(),...n.components};return o||s("Docs",!1),o.ComponentHeading||s("Docs.ComponentHeading",!0),o.ControlStates||s("Docs.ControlStates",!0),o.FauxCanvas||s("Docs.FauxCanvas",!0),o.FormLibraryDemos||s("Docs.FormLibraryDemos",!0),o.Props||s("Docs.Props",!0),o.Sizers||s("Docs.Sizers",!0),o.TableOfContents||s("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(d,{of:r}),`
`,e.jsx(o.ComponentHeading,{of:"TextArea"}),`
`,e.jsx(t.p,{children:"A form control that allows users to enter & edit a mass of text."}),`
`,e.jsx(o.FauxCanvas,{children:e.jsx(a,{placeholder:"Type something!"})}),`
`,e.jsx(o.TableOfContents,{}),`
`,e.jsx(o.Props,{of:r,nativeBase:"textarea",wrapper:"Field"}),`
`,e.jsx(o.ControlStates,{of:r,valuable:!0}),`
`,e.jsx(t.h2,{id:"controlling-the-height",children:"Controlling the height"}),`
`,e.jsxs(t.p,{children:["Minimum vertical sizing of textareas is done via the ",e.jsx(t.code,{children:"minRows"}),` prop (the default
is 2 rows). The `,e.jsx(o,{of:"TextArea"}),` will automatically grow up to the
`,e.jsx(t.code,{children:"maxRows"}),` prop to accomodate the value (the default is 10 rows). For an
unbounded height, you can use `,e.jsx(t.code,{children:"maxRows={Infinity}"}),"."]}),`
`,e.jsx(i,{of:x,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:["For a fixed height, use the ",e.jsx(t.code,{children:"rows"})," prop."]}),`
`,e.jsx(i,{of:h,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:["To prevent the user from being able to resize the ",e.jsx(o,{of:"TextArea"}),`
manually, use the `,e.jsx(t.code,{children:"disableManualResize"})," prop."]}),`
`,e.jsx(i,{of:f,sourceState:"shown"}),`
`,e.jsx(o.Sizers,{of:r,wrapper:"Field"}),`
`,e.jsx(o.FormLibraryDemos,{of:"TextArea",fieldName:"ironSpecs",initialValue:`115x Dynamic Gold
7 iron: 37.5” finished
7 iron: 62.5° lie angle`,children:({props:m,error:p})=>e.jsx(a,{...m,label:"Iron specs",hint:"Try editting me!",error:p})})]})}function H(n={}){const{wrapper:t}={...c(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}function s(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{H as default};
