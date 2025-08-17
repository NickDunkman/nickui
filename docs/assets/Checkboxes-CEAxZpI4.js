import{j as e,M as p,C as r,S as i}from"./blocks-CSYGevDn.js";import{useMDXComponents as u}from"./index-ChQMZ8L2.js";import{D as o}from"./index-BYnkfXks.js";import{s as a,C as l,a as b,c as m}from"./Checkboxes.stories-BzPw0o4d.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-m3ARp835.js";import"./index-CpQ98Ntj.js";import"./client--W-99Z1i.js";import"./Button-SnuB6XX-.js";import"./index-XybfoPcz.js";import"./index-DM2Rz7DM.js";import"./Checkbox-PdKFgWe2.js";import"./CheckableFormControl-C5Ezlkd3.js";import"./fieldA11y-CwFZMBjx.js";import"./randomId-Dfhrkieu.js";import"./CheckedField-D4PV6oKB.js";import"./useElementBounds-CE6a5ktT.js";import"./AllSizersStoryWrapper-zl3vKeFP.js";import"./getStoryArgTypes-zAxgZkbZ.js";import"./CheckableFormControls-BGengjw_.js";import"./Fieldset-R7Y6tlF2.js";function c(n){const t={code:"code",h2:"h2",p:"p",...u(),...n.components};return o||s("Docs",!1),o.ComponentHeading||s("Docs.ComponentHeading",!0),o.ControlStates||s("Docs.ControlStates",!0),o.FauxCanvas||s("Docs.FauxCanvas",!0),o.FormLibraryDemos||s("Docs.FormLibraryDemos",!0),o.KeyboardInteractions||s("Docs.KeyboardInteractions",!0),o.Props||s("Docs.Props",!0),o.Sizers||s("Docs.Sizers",!0),o.TableOfContents||s("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(p,{of:a}),`
`,e.jsx(o.ComponentHeading,{of:"Checkboxes"}),`
`,e.jsx("div",{children:e.jsxs(t.p,{children:["Renders multiple ",e.jsx(o,{of:"Checkbox"})," that perform as one field in a"," ",`
`,e.jsx(o,{of:"Fieldset"}),"."]})}),`
`,e.jsx(o.FauxCanvas,{children:e.jsx(l,{label:"Add some toppings to your Burgerdog",defaultValue:"sauerkraut,mustard",options:[{value:"sauerkraut",label:"Sauerkraut"},{value:"relish",label:"Relish"},{value:"onions",label:"Onions"},{value:"mustard",label:"Mustard"},{value:"grey-poupon",label:"Grey Poupon 🥸"}]})}),`
`,e.jsx(o.TableOfContents,{}),`
`,e.jsx(o.Props,{of:a,nativeBase:"input",wrapper:"Fieldset"}),`
`,e.jsx(o.ControlStates,{of:a,valuable:!0,sourceState:"hidden",note:"Note: while you can disable individual checkboxes as shown in sections below, using `disabled={true}` will disable the entire field by forcing all child checkboxes to be disabled."}),`
`,e.jsx(t.h2,{id:"adding-checkboxes",children:"Adding checkboxes"}),`
`,e.jsxs(t.p,{children:["For the standard look & feel, use the ",e.jsx(t.code,{children:"options"}),` prop to configure the individual
checkboxes. `,e.jsx(o,{of:"Checkboxes"})," will manage the interior layout."]}),`
`,e.jsx(r,{of:b,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:[`To customize the checkbox controls, such as to use a different component for the
individual checkboxes, call the props differently, or add other elements, you
can pass a `,e.jsx(t.code,{children:"render"})," function instead of using ",e.jsx(t.code,{children:"options"}),"."]}),`
`,e.jsx("strong",{children:e.jsx(t.p,{children:`As shown, it’s important to use the props callback provided for the field to
behave properly.`})}),`
`,e.jsx(r,{of:m,sourceState:"none"}),`
`,e.jsx(i,{dark:!0,language:"tsx",code:`
  <Checkboxes
    label="How custom do you like it?"
    defaultValue="colorful,embiggened"
    render={(checkbox) => (
      <div className="flex flex-row items-baseline gap-x-6">
        <Checkbox
          {...checkbox({ value: 'colorful' })}
          label={<span className="text-blue-700 font-bold">Colorful</span>}
          className="rounded-sm bg-rose-200 p-2"
        />
        <Checkbox
          {...checkbox({ value: 'embiggened' })}
          sizer="lg"
          label="Embiggened"
        />
        <label>
          <input type="checkbox" {...checkbox({ value: 'native' })} /> Native
        </label>
      </div>
    )}
  />
`}),`
`,e.jsx(t.h2,{id:"working-with-the-value",children:"Working with the value"}),`
`,e.jsx(t.p,{children:`The purpose of this component is to make it as easy as possible to have a
consistent look & feel for fields with multiple checkboxes. In order to simplify
the boilerplate needed for libraries like Formik and React Hook Form, the
component’s value is a single delimited-string, & toggling each individual
checkbox adds or removes a particular substring.`}),`
`,e.jsx(t.p,{children:`If you want to work with an array of strings instead of a combined string, you
can convert to/from an array somewhere higher up the tree, as shown in this
example:`}),`
`,e.jsx(i,{dark:!0,language:"tsx",code:`
  const [value, setValue] = React.useState<string[]>(['a', 'c']);
  //...
  <Checkboxes
    options={[
      { value: 'a', label: 'A' },
      { value: 'b', label: 'B' },
      { value: 'c', label: 'D' },
    ]}
    value={value.join(',')}
    onChange={(event) => {
      setValue(event.target.value.split(','));
    }}
  />
`}),`
`,e.jsx(o.Sizers,{of:a,wrapper:"Fieldset"}),`
`,e.jsx(o.FormLibraryDemos,{of:"Checkboxes",fieldName:"courseFeatures",initialValue:"pot-bunkers,undulated-greens",children:({props:d,error:h})=>e.jsx(l,{...d,label:"Course features",hint:"Try editting me!",error:h,options:[{value:"pot-bunkers",label:"Pot bunkers"},{value:"water",label:"Water hazards"},{value:"undulated-greens",label:"Undulated greens"}]})}),`
`,e.jsx(o.KeyboardInteractions,{keys:[["Tab","Cycles focus between the individual checkboxes"],["Space","Toggles the checked state of the focused checkbox"]]})]})}function V(n={}){const{wrapper:t}={...u(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(c,{...n})}):c(n)}function s(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{V as default};
