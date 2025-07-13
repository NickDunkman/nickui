import{j as e,M as c,C as r,S as u}from"./blocks-CRgQkwTs.js";import{useMDXComponents as d}from"./index-BOS4qjoI.js";import{D as o}from"./index-BZFlQj2E.js";import{R as n}from"./Radios-BK3VeRTM.js";import{S as s,a as m,C as p}from"./Radios.stories-DKr9C6WF.js";import"./iframe-DzZ2548y.js";import"./index-B9m-O1jy.js";import"./clsw-CBfrqCZ4.js";import"./Button-LGCp3pe5.js";import"./index-C4eiBceS.js";import"./Radio-C5T00fGX.js";import"./Checkbox-DkyyvXiP.js";import"./CheckedField-B62_0hA1.js";import"./randomId-Dfhrkieu.js";import"./Checkboxes-BaSlRi9D.js";import"./Fieldset-6DZnlTGm.js";function l(t){const i={code:"code",h2:"h2",p:"p",...d(),...t.components};return o||a("Docs",!1),o.ComponentHeading||a("Docs.ComponentHeading",!0),o.ControlStates||a("Docs.ControlStates",!0),o.FauxCanvas||a("Docs.FauxCanvas",!0),o.FormLibraryCompatibility||a("Docs.FormLibraryCompatibility",!0),o.Props||a("Docs.Props",!0),o.Sizing||a("Docs.Sizing",!0),o.TableOfContents||a("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(c,{of:s}),`
`,e.jsx(o.ComponentHeading,{of:"Radios"}),`
`,e.jsx("div",{children:e.jsxs(i.p,{children:["Renders multiple ",e.jsx(o,{of:"Radio"})," that perform as one field in a"," ",`
`,e.jsx(o,{of:"Fieldset"}),"."]})}),`
`,e.jsx(o.FauxCanvas,{children:e.jsx(n,{label:"Quel numéro?",options:[{value:"un",label:"Un"},{value:"deux",label:"Deux"},{value:"trois",label:"Trois"}],sizer:n.sizer.medium})}),`
`,e.jsx(o.TableOfContents,{}),`
`,e.jsx(o.Props,{of:s,nativeBase:"input",wrapper:"Fieldset",exclude:["delimiter"]}),`
`,e.jsx(o.ControlStates,{of:s,valuable:!0,sourceState:"hidden",note:"Note: while you can disable individual radios as shown in sections below, using `disabled={true}` will disable the entire field by forcing all child radios to be disabled."}),`
`,e.jsx(i.h2,{id:"adding-radios",children:"Adding radios"}),`
`,e.jsxs(i.p,{children:["For the standard look & feel, use the ",e.jsx(i.code,{children:"options"}),` prop to configure the individual
radios. `,e.jsx(o,{of:"Radios"})," will manage the interior layout."]}),`
`,e.jsx(r,{of:m,sourceState:"shown"}),`
`,e.jsxs(i.p,{children:[`To customize the radio controls, such as to use a different component for the
individual radios, call the props differently, or add other elements, you can
pass a `,e.jsx(i.code,{children:"render"})," function instead of using ",e.jsx(i.code,{children:"options"}),"."]}),`
`,e.jsx("strong",{children:e.jsx(i.p,{children:`As shown, it’s important to use the props callback provided for the field to
behave properly.`})}),`
`,e.jsx(r,{of:p,sourceState:"none"}),`
`,e.jsx(u,{dark:!0,language:"tsx",code:`
  <Radios
    name="how-custom"
    label="How custom do you like it?"
    defaultValue="nice-and-custom"
    render={(radio) => (
      <div className="flex items-baseline gap-4">
        <Radio {...radio({ value: 'plain' })} label="Just plain" />
        <span className="text-xs text-gray-500">or</span>
        <Radio
          {...radio({ value: 'nice-and-custom' })}
          sizer={Radio.sizer.medium}
          label={
            <div className="font-bold">
              👨‍🎨 <span className="text-blue-600">Nice</span>{' '}
              <span className="text-green-700">and</span>{' '}
              <span className="text-rose-600">custom</span>
            </div>
          }
        />
        <span className="text-xs text-gray-500">or</span>
        <Radio
          {...radio({ value: 'too', disabled: true })}
          className="-rotate-30"
          sizer={Radio.sizer.large}
          label="Too custom"
        />
      </div>
    )}
  />
`}),`
`,e.jsx(o.Sizing,{of:s,wrapper:"Fieldset"}),`
`,e.jsx(o.FormLibraryCompatibility,{of:s,fieldName:"pinPositionFormik",initialValue:"front",componentProps:{sizer:n.sizer.medium,label:"Today’s pin positioning",hint:"Starting from the first hole",options:[{value:"front",label:"front, middle, back"},{value:"middle",label:"middle, back, front"},{value:"back",label:"back, front, middle"}]}})]})}function k(t={}){const{wrapper:i}={...d(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(l,{...t})}):l(t)}function a(t,i){throw new Error("Expected "+(i?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{k as default};
