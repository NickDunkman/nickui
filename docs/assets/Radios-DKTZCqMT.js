import{j as e,M as d,C as n,S as p}from"./blocks-BuXEWWop.js";import{useMDXComponents as l}from"./index-D-a3m7UK.js";import{D as o}from"./index-BTuGJbMf.js";import{R as c}from"./Radios-Bj68P6dd.js";import{S as s,a as m,C as u}from"./Radios.stories-BMiFQj5L.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-CcNznxni.js";import"./index-KByXHHQU.js";import"./client-BaPT5EsZ.js";import"./index-X7_sODO6.js";import"./Button-Ectrx1ay.js";import"./index-DOTJdoPb.js";import"./Radio-CMgt56Kr.js";import"./Checkbox-GBA6DXEi.js";import"./CheckedField-BwbKD821.js";import"./useElementBounds-DD431J3L.js";import"./useFieldA11yIds-DeeCjDg0.js";import"./randomId-Dfhrkieu.js";import"./Checkboxes-_G5B0sFu.js";import"./Fieldset-PdS1qqyW.js";import"./AllSizersStoryWrapper-DDwmy6Ql.js";function r(a){const t={code:"code",h2:"h2",p:"p",...l(),...a.components};return o||i("Docs",!1),o.ComponentHeading||i("Docs.ComponentHeading",!0),o.ControlStates||i("Docs.ControlStates",!0),o.FauxCanvas||i("Docs.FauxCanvas",!0),o.FormLibraryCompatibility||i("Docs.FormLibraryCompatibility",!0),o.Props||i("Docs.Props",!0),o.Sizers||i("Docs.Sizers",!0),o.TableOfContents||i("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(d,{of:s}),`
`,e.jsx(o.ComponentHeading,{of:"Radios"}),`
`,e.jsx("div",{children:e.jsxs(t.p,{children:["Renders multiple ",e.jsx(o,{of:"Radio"})," that perform as one field in a"," ",`
`,e.jsx(o,{of:"Fieldset"}),"."]})}),`
`,e.jsx(o.FauxCanvas,{children:e.jsx(c,{label:"Quel numéro?",options:[{value:"un",label:"Un"},{value:"deux",label:"Deux"},{value:"trois",label:"Trois"}]})}),`
`,e.jsx(o.TableOfContents,{}),`
`,e.jsx(o.Props,{of:s,nativeBase:"input",wrapper:"Fieldset",exclude:["delimiter"]}),`
`,e.jsx(o.ControlStates,{of:s,valuable:!0,sourceState:"hidden",note:"Note: while you can disable individual radios as shown in sections below, using `disabled={true}` will disable the entire field by forcing all child radios to be disabled."}),`
`,e.jsx(t.h2,{id:"adding-radios",children:"Adding radios"}),`
`,e.jsxs(t.p,{children:["For the standard look & feel, use the ",e.jsx(t.code,{children:"options"}),` prop to configure the individual
radios. `,e.jsx(o,{of:"Radios"})," will manage the interior layout."]}),`
`,e.jsx(n,{of:m,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:[`To customize the radio controls, such as to use a different component for the
individual radios, call the props differently, or add other elements, you can
pass a `,e.jsx(t.code,{children:"render"})," function instead of using ",e.jsx(t.code,{children:"options"}),"."]}),`
`,e.jsx("strong",{children:e.jsx(t.p,{children:`As shown, it’s important to use the props callback provided for the field to
behave properly.`})}),`
`,e.jsx(n,{of:u,sourceState:"none"}),`
`,e.jsx(p,{dark:!0,language:"tsx",code:`
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
          label={
            <div className="font-bold">
              👨‍🎨 <span className="text-blue-600">Nice</span>{' '}
              <span className="text-emerald-700">and</span>{' '}
              <span className="text-rose-600">custom</span>
            </div>
          }
        />
        <span className="text-xs text-gray-500">or</span>
        <Radio
          {...radio({ value: 'too', disabled: true })}
          className="-rotate-30"
          sizer="lg"
          label="Too custom"
        />
      </div>
    )}
  />
`}),`
`,e.jsx(o.Sizers,{of:s,wrapper:"Fieldset"}),`
`,e.jsx(o.FormLibraryCompatibility,{of:s,fieldName:"pinPositionFormik",initialValue:"front",componentProps:{label:"Today’s pin positioning",hint:"Starting from the first hole",options:[{value:"front",label:"front, middle, back"},{value:"middle",label:"middle, back, front"},{value:"back",label:"back, front, middle"}]}})]})}function H(a={}){const{wrapper:t}={...l(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(r,{...a})}):r(a)}function i(a,t){throw new Error("Expected "+(t?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}export{H as default};
