import{j as e,M as d,C as l,S as a}from"./blocks-Du9aBEOj.js";import{useMDXComponents as c}from"./index-YzsNL2Pu.js";import{D as n}from"./index-CcB7iNqj.js";import{S as r,a as u,A as p}from"./Shout.stories-DK2M_54Z.js";import"./iframe-Cu56G6_x.js";import"./index-B3FxOEC8.js";import"./client-Dzx5Y50O.js";import"./index-kiPNViGW.js";import"./Button-whMqm6bc.js";import"./index-BiqwU_Yq.js";import"./AllSizersStoryWrapper-o0UCkeT9.js";function i(s){const o={code:"code",h2:"h2",p:"p",...c(),...s.components};return n||t("Docs",!1),n.ComponentHeading||t("Docs.ComponentHeading",!0),n.FauxCanvas||t("Docs.FauxCanvas",!0),n.Props||t("Docs.Props",!0),n.Sizers||t("Docs.Sizers",!0),n.TableOfContents||t("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(d,{of:r}),`
`,e.jsx(n.ComponentHeading,{of:"Shout"}),`
`,e.jsxs(o.p,{children:[`Displays an important notice to the user, such as an error message, warning, or
congratulatory message. For a less prominent notice, use `,e.jsx(n,{of:"Aside"}),"."]}),`
`,e.jsx(n.FauxCanvas,{children:e.jsx(u,{flavor:"nope",role:"alert","aria-live":"assertive",children:e.jsx(o.p,{children:"Fore!"})})}),`
`,e.jsx(n.TableOfContents,{}),`
`,e.jsx(n.Props,{of:r,nativeBase:"div"}),`
`,e.jsx(o.h2,{id:"flavors",children:"Flavors"}),`
`,e.jsxs(o.p,{children:["Coloring is done via the ",e.jsx(o.code,{children:"flavor"})," prop. You can pass ",e.jsx(o.code,{children:'"info"'}),` (the default),
`,e.jsx(o.code,{children:'"yep"'}),", ",e.jsx(o.code,{children:'"maybe"'})," or ",e.jsx(o.code,{children:'"nope"'}),"."]}),`
`,e.jsx(l,{of:p}),`
`,e.jsx(n.Sizers,{of:r}),`
`,e.jsx(o.h2,{id:"accessibility-considerations",children:"Accessibility considerations"}),`
`,e.jsxs(o.p,{children:[`Since Shouts are intended to be prominent messages & are often added to the page
after the user takes some kind of action, such as a success or error message
after a form submission, you should take care to use the `,e.jsx(o.code,{children:"role"})," and ",e.jsx(o.code,{children:"aria-live"}),`
props appropriately, so that your message is announced to the user in the right
way.`]}),`
`,e.jsx(o.p,{children:`When adding success message, you probably want it to be announced to the user,
but without yanking their attention if they’re busy with something else:`}),`
`,e.jsx(a,{dark:!0,language:"tsx",code:`
  <Shout
    role="status"
    aria-live="polite"
    flavor="yep"
  >
    Hey that was a good form submission 👍
  </Shout>
`}),`
`,e.jsx(o.p,{children:`When adding an error message, you probably want it to be announced in an urgent
way:`}),`
`,e.jsx(a,{dark:!0,language:"tsx",code:`
  <Shout
    role="alert"
    aria-live="assertive"
    flavor="nope"
  >
    There was a problem with your visa application submission. If you don’t
    fix and resubmit, you will be apprehended at the border.
  </Shout>
`})]})}function w(s={}){const{wrapper:o}={...c(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(i,{...s})}):i(s)}function t(s,o){throw new Error("Expected "+(o?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{w as default};
