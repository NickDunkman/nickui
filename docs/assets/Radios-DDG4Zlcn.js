import{j as e,M as p,C as n,S as m}from"./blocks-CSYGevDn.js";import{useMDXComponents as l}from"./index-ChQMZ8L2.js";import{D as o}from"./index-BYnkfXks.js";import{R as r}from"./Radios-XHuNEZH0.js";import{s as i,a as f,c as x}from"./Radios.stories-BJOiOwbL.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-m3ARp835.js";import"./index-CpQ98Ntj.js";import"./client--W-99Z1i.js";import"./Button-SnuB6XX-.js";import"./index-XybfoPcz.js";import"./index-DM2Rz7DM.js";import"./CheckableFormControls-BGengjw_.js";import"./Fieldset-R7Y6tlF2.js";import"./randomId-Dfhrkieu.js";import"./Radio-ydxYx22I.js";import"./CheckableFormControl-C5Ezlkd3.js";import"./fieldA11y-CwFZMBjx.js";import"./CheckedField-D4PV6oKB.js";import"./useElementBounds-CE6a5ktT.js";import"./AllSizersStoryWrapper-zl3vKeFP.js";import"./getStoryArgTypes-zAxgZkbZ.js";function d(a){const s={code:"code",h2:"h2",p:"p",...l(),...a.components};return o||t("Docs",!1),o.ComponentHeading||t("Docs.ComponentHeading",!0),o.ControlStates||t("Docs.ControlStates",!0),o.FauxCanvas||t("Docs.FauxCanvas",!0),o.FormLibraryDemos||t("Docs.FormLibraryDemos",!0),o.KeyboardInteractions||t("Docs.KeyboardInteractions",!0),o.Props||t("Docs.Props",!0),o.Sizers||t("Docs.Sizers",!0),o.TableOfContents||t("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(p,{of:i}),`
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
`,e.jsx(m,{dark:!0,language:"tsx",code:`
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
`,e.jsx(o.FormLibraryDemos,{of:"Radios",fieldName:"pinPosition",initialValue:"front",children:({props:c,error:u})=>e.jsx(r,{...c,label:"Today’s pin positioning",hint:"Starting from the first hole",error:u,options:[{value:"front",label:"front, middle, back ..."},{value:"middle",label:"middle, back, front ..."},{value:"back",label:"back, front, middle ..."}]})}),`
`,e.jsx(o.KeyboardInteractions,{keys:[["Tab",'Focuses/blurs the <ComponentName of="Radios" />'],[["↓","→"],"Moves focus to and checks the next radio"],[["↑","←"],"Moves focus to and checks the previous radio"],["Space","Checks the focused radio"]]})]})}function K(a={}){const{wrapper:s}={...l(),...a.components};return s?e.jsx(s,{...a,children:e.jsx(d,{...a})}):d(a)}function t(a,s){throw new Error("Expected "+(s?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}export{K as default};
