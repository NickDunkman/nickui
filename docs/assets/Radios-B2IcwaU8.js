import{j as e,M as m,C as n,S as u}from"./blocks-DILD-YPA.js";import{useMDXComponents as d}from"./index-BSWXvihS.js";import{D as o}from"./index-BO77VyQa.js";import{R as r}from"./Radios-DYCSzfdo.js";import{s as i,a as f,c as x}from"./Radios.stories-CxGwW7lC.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-D_dx4C3o.js";import"./index-MwUvjmfi.js";import"./client-CNIK_tGj.js";import"./Button-DymO3C48.js";import"./index-Bl3bBT5F.js";import"./index-D1YO4riR.js";import"./CheckableFormControls-pIhlWsOU.js";import"./Fieldset-CO3gD1K6.js";import"./randomId-Dfhrkieu.js";import"./Radio-Y6VMkMKI.js";import"./CheckableFormControl-Du16gofu.js";import"./fieldA11y-C3gyBWsB.js";import"./CheckedField-8hUungCo.js";import"./useElementBounds-D-KkDKt4.js";import"./AllSizersStoryWrapper-M2xuQLnL.js";import"./getStoryArgTypes-CvpAwH8w.js";function l(t){const s={code:"code",h2:"h2",p:"p",...d(),...t.components};return o||a("Docs",!1),o.ComponentHeading||a("Docs.ComponentHeading",!0),o.ControlStates||a("Docs.ControlStates",!0),o.FauxCanvas||a("Docs.FauxCanvas",!0),o.FormLibraryDemos||a("Docs.FormLibraryDemos",!0),o.Props||a("Docs.Props",!0),o.Sizers||a("Docs.Sizers",!0),o.TableOfContents||a("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(m,{of:i}),`
`,e.jsx(o.ComponentHeading,{of:"Radios"}),`
`,e.jsx("div",{children:e.jsxs(s.p,{children:["Renders multiple ",e.jsx(o,{of:"Radio"})," that perform as one field in a"," ",`
`,e.jsx(o,{of:"Fieldset"}),"."]})}),`
`,e.jsx(o.FauxCanvas,{children:e.jsx(r,{label:"Quel numéro?",options:[{value:"un",label:"Un"},{value:"deux",label:"Deux"},{value:"trois",label:"Trois"}]})}),`
`,e.jsx(o.TableOfContents,{}),`
`,e.jsx(o.Props,{of:i,nativeBase:"input",wrapper:"Fieldset",exclude:["delimiter"]}),`
`,e.jsx(o.ControlStates,{of:i,valuable:!0,sourceState:"hidden",note:"Note: while you can disable individual radios as shown in sections below, using `disabled={true}` will disable the entire field by forcing all child radios to be disabled."}),`
`,e.jsx(s.h2,{id:"adding-radios",children:"Adding radios"}),`
`,e.jsxs(s.p,{children:["For the standard look & feel, use the ",e.jsx(s.code,{children:"options"}),` prop to configure the individual
radios. `,e.jsx(o,{of:"Radios"})," will manage the interior layout."]}),`
`,e.jsx(n,{of:f,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[`To customize the radio controls, such as to use a different component for the
individual radios, call the props differently, or add other elements, you can
pass a `,e.jsx(s.code,{children:"render"})," function instead of using ",e.jsx(s.code,{children:"options"}),"."]}),`
`,e.jsx("strong",{children:e.jsx(s.p,{children:`As shown, it’s important to use the props callback provided for the field to
behave properly.`})}),`
`,e.jsx(n,{of:x,sourceState:"none"}),`
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
`,e.jsx(o.Sizers,{of:i,wrapper:"Fieldset"}),`
`,e.jsx(o.FormLibraryDemos,{of:"Radios",fieldName:"pinPosition",initialValue:"front",children:({props:c,error:p})=>e.jsx(r,{...c,label:"Today’s pin positioning",hint:"Starting from the first hole",error:p,options:[{value:"front",label:"front, middle, back ..."},{value:"middle",label:"middle, back, front ..."},{value:"back",label:"back, front, middle ..."}]})})]})}function X(t={}){const{wrapper:s}={...d(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(l,{...t})}):l(t)}function a(t,s){throw new Error("Expected "+(s?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{X as default};
