import{j as e,M as c,C as r}from"./blocks-mWruwjt_.js";import{useMDXComponents as l}from"./index-BaEI_hAM.js";import{D as o}from"./index-DX8L99Gr.js";import{s as i,T as p,a as m,f as d,d as x}from"./TextArea.stories-B-RTJC6r.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-BKZX7tvf.js";import"./index-COFK_g9j.js";import"./client-BE10jO-m.js";import"./index-zgBM_x_G.js";import"./Button-qFMTKZQ9.js";import"./index-CZcY-C3G.js";import"./AllSizersStoryWrapper-C8_pK2IB.js";import"./Field-Do7UQPvC.js";import"./useFieldA11yIds-DBRz3Mkj.js";import"./randomId-Dfhrkieu.js";function a(n){const t={code:"code",h2:"h2",p:"p",...l(),...n.components};return o||s("Docs",!1),o.ComponentHeading||s("Docs.ComponentHeading",!0),o.ControlStates||s("Docs.ControlStates",!0),o.FauxCanvas||s("Docs.FauxCanvas",!0),o.FormLibraryCompatibility||s("Docs.FormLibraryCompatibility",!0),o.Props||s("Docs.Props",!0),o.Sizers||s("Docs.Sizers",!0),o.TableOfContents||s("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(c,{of:i}),`
`,e.jsx(o.ComponentHeading,{of:"TextArea"}),`
`,e.jsx(t.p,{children:"A form control that allows users to enter & edit a mass of text."}),`
`,e.jsx(o.FauxCanvas,{children:e.jsx(p,{placeholder:"Type something!"})}),`
`,e.jsx(o.TableOfContents,{}),`
`,e.jsx(o.Props,{of:i,nativeBase:"textarea",wrapper:"Field"}),`
`,e.jsx(o.ControlStates,{of:i,valuable:!0}),`
`,e.jsx(t.h2,{id:"controlling-the-height",children:"Controlling the height"}),`
`,e.jsxs(t.p,{children:["Minimum vertical sizing of textareas is done via the ",e.jsx(t.code,{children:"minRows"}),` prop (the default
is 2 rows). The `,e.jsx(o,{of:"TextArea"}),` will automatically grow up to the
`,e.jsx(t.code,{children:"maxRows"}),` prop to accomodate the value (the default is 10 rows). For an
unbounded height, you can use `,e.jsx(t.code,{children:"maxRows={Infinity}"}),"."]}),`
`,e.jsx(r,{of:m,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:["For a fixed height, use the ",e.jsx(t.code,{children:"rows"})," prop."]}),`
`,e.jsx(r,{of:d,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:["To prevent the user from being able to resize the ",e.jsx(o,{of:"TextArea"}),`
manually, use the `,e.jsx(t.code,{children:"disableManualResize"})," prop."]}),`
`,e.jsx(r,{of:x,sourceState:"shown"}),`
`,e.jsx(o.Sizers,{of:i,wrapper:"Field"}),`
`,e.jsx(o.FormLibraryCompatibility,{of:i,fieldName:"ironSpecs",initialValue:`115x Dynamic Gold
7 iron: 37.5” finished
7 iron: 62.5° lie angle`,componentProps:{label:"Iron specs",hint:"Try editting me!"}})]})}function z(n={}){const{wrapper:t}={...l(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}function s(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{z as default};
