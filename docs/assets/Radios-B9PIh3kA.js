import{j as e,M as m,C as r,S as p}from"./blocks-BpftXKcU.js";import{useMDXComponents as d}from"./index-zWCGpBQ0.js";import{D as o}from"./index-G_WEO9Ec.js";import{R as n}from"./Radios-BEfaiNvg.js";import{S as t,a as c,C as u}from"./Radios.stories-CBf3oGnk.js";import"./iframe-LKk278Jc.js";import"./index-yyDsk73e.js";import"./clsw-D-KgF5mV.js";import"./Button-CFJt000I.js";import"./index-Czi7Upa3.js";import"./Radio-DuIcyK9v.js";import"./Checkbox-qXD-Kiym.js";import"./CheckedField-BTsbtSle.js";import"./randomId-Dfhrkieu.js";import"./Checkboxes-W10_M7zg.js";import"./Fieldset-D2iP-py2.js";function l(a){const i={code:"code",h2:"h2",p:"p",...d(),...a.components};return o||s("Docs",!1),o.ComponentHeading||s("Docs.ComponentHeading",!0),o.FauxCanvas||s("Docs.FauxCanvas",!0),o.FormLibraryCompatibility||s("Docs.FormLibraryCompatibility",!0),o.Props||s("Docs.Props",!0),o.Sizing||s("Docs.Sizing",!0),o.TableOfContents||s("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(m,{of:t}),`
`,e.jsx(o.ComponentHeading,{of:"Radios"}),`
`,e.jsx("div",{children:e.jsxs(i.p,{children:["Renders multiple ",e.jsx(o,{of:"Radio"})," that perform as one field in a"," ",`
`,e.jsx(o,{of:"Fieldset"}),"."]})}),`
`,e.jsx(o.FauxCanvas,{children:e.jsx(n,{label:"Quel numéro?",options:[{value:"un",label:"Un"},{value:"deux",label:"Deux"},{value:"trois",label:"Trois"}],sizer:n.sizer.medium})}),`
`,e.jsx(o.TableOfContents,{}),`
`,e.jsx(o.Props,{of:t,nativeBase:"input",wrapper:"Fieldset",exclude:["delimiter"]}),`
`,e.jsx(i.h2,{id:"adding-radios",children:"Adding radios"}),`
`,e.jsxs(i.p,{children:["For the standard look & feel, use the ",e.jsx(i.code,{children:"options"}),` prop to configure the individual
radios. `,e.jsx(o,{of:"Radios"})," will manage the interior layout."]}),`
`,e.jsx(r,{of:c,sourceState:"shown"}),`
`,e.jsxs(i.p,{children:[`To customize the radio controls, such as to use a different component for the
individual radios, call the props differently, or add other elements, you can
pass a `,e.jsx(i.code,{children:"render"})," function instead of using ",e.jsx(i.code,{children:"options"}),"."]}),`
`,e.jsx("strong",{children:e.jsx(i.p,{children:`As shown, it’s important to use the props callback provided for the field to
behave properly.`})}),`
`,e.jsx(r,{of:u,sourceState:"none"}),`
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
`,e.jsx(o.Sizing,{of:t,wrapper:"Fieldset"}),`
`,e.jsx(o.FormLibraryCompatibility,{of:t,fieldName:"pinPositionFormik",initialValue:"front",componentProps:{sizer:n.sizer.medium,label:"Today’s pin positioning",hint:"Starting from the first hole",options:[{value:"front",label:"front, middle, back"},{value:"middle",label:"middle, back, front"},{value:"back",label:"back, front, middle"}]}})]})}function N(a={}){const{wrapper:i}={...d(),...a.components};return i?e.jsx(i,{...a,children:e.jsx(l,{...a})}):l(a)}function s(a,i){throw new Error("Expected "+(i?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}export{N as default};
