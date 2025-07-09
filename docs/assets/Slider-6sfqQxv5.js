import{j as e,M as d,C as l}from"./blocks-DKelQ_k2.js";import{useMDXComponents as m}from"./index-lDr7cKM0.js";import{D as o}from"./index-D6hw1hnd.js";import{S as s,a,C as p}from"./Slider.stories-Cdh1Z4Uz.js";import"./iframe-BC9w-kBM.js";import"./index-puq_03a8.js";import"./clsw-D-KgF5mV.js";import"./Button-D-j0Y_fo.js";import"./index-Czi7Upa3.js";import"./Field-o4IO6i2N.js";import"./randomId-Dfhrkieu.js";function c(n){const t={code:"code",h2:"h2",p:"p",...m(),...n.components};return o||i("Docs",!1),o.ComponentHeading||i("Docs.ComponentHeading",!0),o.ControlStates||i("Docs.ControlStates",!0),o.FauxCanvas||i("Docs.FauxCanvas",!0),o.FormLibraryCompatibility||i("Docs.FormLibraryCompatibility",!0),o.Props||i("Docs.Props",!0),o.Sizing||i("Docs.Sizing",!0),o.TableOfContents||i("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(d,{of:s}),`
`,e.jsx(o.ComponentHeading,{of:"Slider"}),`
`,e.jsx(t.p,{children:"A form control that allows users to enter & edit a single line of text."}),`
`,e.jsx(o.FauxCanvas,{children:e.jsx(a,{defaultValue:50,sizer:a.sizer.medium})}),`
`,e.jsx(o.TableOfContents,{}),`
`,e.jsx(o.Props,{of:s,nativeBase:"div",wrapper:"Field",exclude:["ref","onBlur"]}),`
`,e.jsx(o.ControlStates,{of:s}),`
`,e.jsx(t.h2,{id:"customizing-the-value-range",children:"Customizing the value range"}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"min"}),", ",e.jsx(t.code,{children:"max"}),", and ",e.jsx(t.code,{children:"step"}),` props to customize the bounds of the range, and
the granularity of values within it. You can also use `,e.jsx(t.code,{children:"shiftSteps"}),` to control
how many steps are moved when the user is holding the shift key while using the
keyboard to interact with the `,e.jsx(o,{of:"Slider"}),"."]}),`
`,e.jsx(l,{of:p,sourceState:"shown"}),`
`,e.jsx(o.Sizing,{of:s,wrapper:"Field"}),`
`,e.jsx(o.FormLibraryCompatibility,{of:s,fieldName:"index",initialValue:"8.9",componentProps:{label:"Handicap index",hint:({value:r})=>r===0?"scratch":r<0?`+${r*-1}`:r,min:-11.1,max:54,step:.1}})]})}function w(n={}){const{wrapper:t}={...m(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(c,{...n})}):c(n)}function i(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{w as default};
