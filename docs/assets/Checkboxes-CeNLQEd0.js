import{j as e,M as c,C as r,S as i}from"./blocks-DBr30-ap.js";import{useMDXComponents as u}from"./index-CEMGcb-5.js";import{D as o}from"./index-CAnEMMik.js";import{C as d}from"./Checkboxes-CRsDkzTn.js";import{S as a,a as p,C as h}from"./Checkboxes.stories-sAfkI6d6.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-DE7SLDRw.js";import"./index-DupxANci.js";import"./client-BT6rvIpU.js";import"./index-FP35bGqQ.js";import"./Button-BmpE0f1A.js";import"./index-Dpdbbera.js";import"./Checkbox-BsVX81q6.js";import"./CheckedField-jE0cHMbV.js";import"./useElementBounds-Bxy4G_JT.js";import"./useFieldA11yIds-Ys2uElhD.js";import"./randomId-Dfhrkieu.js";import"./Fieldset-OLBNuuaj.js";import"./AllSizersStoryWrapper-BecDCcn2.js";function l(n){const t={code:"code",h2:"h2",p:"p",...u(),...n.components};return o||s("Docs",!1),o.ComponentHeading||s("Docs.ComponentHeading",!0),o.ControlStates||s("Docs.ControlStates",!0),o.FauxCanvas||s("Docs.FauxCanvas",!0),o.FormLibraryCompatibility||s("Docs.FormLibraryCompatibility",!0),o.Props||s("Docs.Props",!0),o.Sizers||s("Docs.Sizers",!0),o.TableOfContents||s("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(c,{of:a}),`
`,e.jsx(o.ComponentHeading,{of:"Checkboxes"}),`
`,e.jsx("div",{children:e.jsxs(t.p,{children:["Renders multiple ",e.jsx(o,{of:"Checkbox"})," that perform as one field in a"," ",`
`,e.jsx(o,{of:"Fieldset"}),"."]})}),`
`,e.jsx(o.FauxCanvas,{children:e.jsx(d,{label:"Add some toppings to your Burgerdog",defaultValue:"sauerkraut,mustard",options:[{value:"sauerkraut",label:"Sauerkraut"},{value:"relish",label:"Relish"},{value:"onions",label:"Onions"},{value:"mustard",label:"Mustard"},{value:"grey-poupon",label:"Grey Poupon 🥸"}]})}),`
`,e.jsx(o.TableOfContents,{}),`
`,e.jsx(o.Props,{of:a,nativeBase:"input",wrapper:"Fieldset"}),`
`,e.jsx(o.ControlStates,{of:a,valuable:!0,sourceState:"hidden",note:"Note: while you can disable individual checkboxes as shown in sections below, using `disabled={true}` will disable the entire field by forcing all child checkboxes to be disabled."}),`
`,e.jsx(t.h2,{id:"adding-checkboxes",children:"Adding checkboxes"}),`
`,e.jsxs(t.p,{children:["For the standard look & feel, use the ",e.jsx(t.code,{children:"options"}),` prop to configure the individual
checkboxes. `,e.jsx(o,{of:"Checkboxes"})," will manage the interior layout."]}),`
`,e.jsx(r,{of:p,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:[`To customize the checkbox controls, such as to use a different component for the
individual checkboxes, call the props differently, or add other elements, you
can pass a `,e.jsx(t.code,{children:"render"})," function instead of using ",e.jsx(t.code,{children:"options"}),"."]}),`
`,e.jsx("strong",{children:e.jsx(t.p,{children:`As shown, it’s important to use the props callback provided for the field to
behave properly.`})}),`
`,e.jsx(r,{of:h,sourceState:"none"}),`
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
`,e.jsx(o.FormLibraryCompatibility,{of:a,fieldName:"courseFeatures",initialValue:"pot-bunkers,undulated-greens",componentProps:{label:"Course features",hint:"Try editting me!",options:[{value:"pot-bunkers",label:"Pot bunkers"},{value:"water",label:"Water hazards"},{value:"undulated-greens",label:"Undulated greens"}]}})]})}function R(n={}){const{wrapper:t}={...u(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}function s(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{R as default};
