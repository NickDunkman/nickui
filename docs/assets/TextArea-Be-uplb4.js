import{j as e,M as p,C as i}from"./blocks-Cu13-jSp.js";import{useMDXComponents as l}from"./index-CB6ZV6Kh.js";import{D as o}from"./index-NqWXr5SC.js";import{s as r,T as a,a as x,f as h,d as f}from"./TextArea.stories-DhMpR6PJ.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-D7K3DBLU.js";import"./index-DoG65Fal.js";import"./client-C1uJbZbB.js";import"./Button-CM4tt_cv.js";import"./index-BfBaVl6L.js";import"./index-69CadyKP.js";import"./AllSizersStoryWrapper-C7b1EBiS.js";import"./getStoryArgTypes-DAe_MfAd.js";import"./Field-CtUzKpbc.js";import"./fieldA11y-BMp6F0pm.js";import"./randomId-Dfhrkieu.js";function c(s){const t={code:"code",h2:"h2",p:"p",...l(),...s.components};return o||n("Docs",!1),o.ComponentHeading||n("Docs.ComponentHeading",!0),o.ControlStates||n("Docs.ControlStates",!0),o.FauxCanvas||n("Docs.FauxCanvas",!0),o.FormLibraryDemos||n("Docs.FormLibraryDemos",!0),o.KeyboardInteractions||n("Docs.KeyboardInteractions",!0),o.Props||n("Docs.Props",!0),o.Sizers||n("Docs.Sizers",!0),o.TableOfContents||n("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(p,{of:r}),`
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
7 iron: 62.5° lie angle`,children:({props:m,error:d})=>e.jsx(a,{...m,label:"Iron specs",hint:"Try editting me!",error:d})}),`
`,e.jsx(o.KeyboardInteractions,{keys:[["Tab",'Focuses/blurs the <ComponentName of="TextArea" />']]})]})}function H(s={}){const{wrapper:t}={...l(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(c,{...s})}):c(s)}function n(s,t){throw new Error("Expected "+(t?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{H as default};
