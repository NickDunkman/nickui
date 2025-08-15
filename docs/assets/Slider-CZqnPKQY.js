import{j as e,M as p,C as u}from"./blocks-PKCbohlt.js";import{useMDXComponents as m}from"./index-fc7BlWeI.js";import{D as o}from"./index-ktqa3Tgo.js";import{s as i,S as a,c as f}from"./Slider.stories-CEV6PpAS.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-tLceCB4s.js";import"./index-BdmRxr0M.js";import"./client-DTCZKxfX.js";import"./Button-Lstuz-sG.js";import"./index-Dgyi2xpV.js";import"./index-DVQLTMkD.js";import"./AllSizersStoryWrapper-BLGIkJkb.js";import"./getStoryArgTypes-C7SE4Oe8.js";import"./Field-Cjc1ukvx.js";import"./fieldA11y-DqObeeAK.js";import"./randomId-Dfhrkieu.js";import"./fireInputChange-BU1kNzof.js";function c(n){const t={code:"code",h2:"h2",p:"p",...m(),...n.components};return o||r("Docs",!1),o.ComponentHeading||r("Docs.ComponentHeading",!0),o.ControlStates||r("Docs.ControlStates",!0),o.FauxCanvas||r("Docs.FauxCanvas",!0),o.FormLibraryDemos||r("Docs.FormLibraryDemos",!0),o.Props||r("Docs.Props",!0),o.Sizers||r("Docs.Sizers",!0),o.TableOfContents||r("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(p,{of:i}),`
`,e.jsx(o.ComponentHeading,{of:"Slider"}),`
`,e.jsx(t.p,{children:"A form control that allows users to choose a number within a range."}),`
`,e.jsx(o.FauxCanvas,{children:e.jsx(a,{defaultValue:50})}),`
`,e.jsx(o.TableOfContents,{}),`
`,e.jsx(o.Props,{of:i,nativeBase:"div",wrapper:"Field",exclude:["ref","onBlur"]}),`
`,e.jsx(o.ControlStates,{of:i,valuable:!0}),`
`,e.jsx(t.h2,{id:"customizing-the-value-range",children:"Customizing the value range"}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"min"}),", ",e.jsx(t.code,{children:"max"}),", and ",e.jsx(t.code,{children:"step"}),` props to customize the bounds of the range, and
the granularity of values within it. You can also use `,e.jsx(t.code,{children:"shiftSteps"}),` to control
how many steps are moved when the user is holding the shift key while using the
keyboard to interact with the `,e.jsx(o,{of:"Slider"}),"."]}),`
`,e.jsx(u,{of:f,sourceState:"shown"}),`
`,e.jsx(o.Sizers,{of:i,wrapper:"Field"}),`
`,e.jsx(o.FormLibraryDemos,{of:"Slider",fieldName:"index",initialValue:"8.9",children:({props:d,error:l})=>e.jsx(a,{...d,label:"Handicap index",hint:({value:s})=>s===0?"scratch":s<0?`+${s*-1}`:s,error:l,min:-11.1,max:54,step:.1})})]})}function E(n={}){const{wrapper:t}={...m(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(c,{...n})}):c(n)}function r(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{E as default};
