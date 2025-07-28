import{j as e,M as d,C as l,S as a}from"./blocks-DHJpphBe.js";import{useMDXComponents as c}from"./index-FQKCrZxT.js";import{D as s}from"./index-B3uCnxGK.js";import{S as r,a as u,A as h}from"./Shout.stories-yNfiP_pJ.js";import"./iframe-BLM9_nYH.js";import"./index-tMucB5Yb.js";import"./client-Dfg0LslM.js";import"./index-BGW97fss.js";import"./Button-Czvkwuy9.js";import"./index-BPTtCm5M.js";import"./AllSizersStoryWrapper-DvGML2ek.js";function i(n){const o={code:"code",h2:"h2",p:"p",...c(),...n.components};return s||t("Docs",!1),s.ComponentHeading||t("Docs.ComponentHeading",!0),s.FauxCanvas||t("Docs.FauxCanvas",!0),s.Props||t("Docs.Props",!0),s.Sizers||t("Docs.Sizers",!0),s.TableOfContents||t("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(d,{of:r}),`
`,e.jsx(s.ComponentHeading,{of:"Shout"}),`
`,e.jsxs(o.p,{children:[`Displays an important notice to the user, such as an error message, warning, or
congratulatory message. For a less prominent notice, use `,e.jsx(s,{of:"Aside"}),"."]}),`
`,e.jsx(s.FauxCanvas,{children:e.jsx(u,{flavor:"negative",role:"alert","aria-live":"assertive",children:e.jsx(o.p,{children:"Fore!"})})}),`
`,e.jsx(s.TableOfContents,{}),`
`,e.jsx(s.Props,{of:r,nativeBase:"div"}),`
`,e.jsx(o.h2,{id:"flavors",children:"Flavors"}),`
`,e.jsxs(o.p,{children:["Coloring is done via the ",e.jsx(o.code,{children:"flavor"})," prop. You can pass ",e.jsx(o.code,{children:'"neutral"'}),` (the default),
`,e.jsx(o.code,{children:'"positive"'}),", ",e.jsx(o.code,{children:'"caution"'})," or ",e.jsx(o.code,{children:'"negative"'}),"."]}),`
`,e.jsx(l,{of:h}),`
`,e.jsx(s.Sizers,{of:r}),`
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
    flavor="positive"
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
    flavor="negative"
  >
    There was a problem with your visa application submission. If you don’t
    fix and resubmit, you will be apprehended at the border.
  </Shout>
`})]})}function w(n={}){const{wrapper:o}={...c(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(i,{...n})}):i(n)}function t(n,o){throw new Error("Expected "+(o?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{w as default};
