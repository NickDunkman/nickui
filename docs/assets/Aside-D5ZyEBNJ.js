import{j as e,M as c,S as l,C as h}from"./blocks-DHJpphBe.js";import{useMDXComponents as d}from"./index-FQKCrZxT.js";import{D as a}from"./index-B3uCnxGK.js";import{A as s,S as r,a as p}from"./Aside.stories-D9Rc1UTf.js";import"./iframe-BLM9_nYH.js";import"./index-tMucB5Yb.js";import"./client-Dfg0LslM.js";import"./index-BGW97fss.js";import"./Button-Czvkwuy9.js";import"./index-BPTtCm5M.js";import"./AllSizersStoryWrapper-DvGML2ek.js";function t(o){const n={code:"code",h2:"h2",p:"p",...d(),...o.components};return s||i("Aside",!1),s.Heading||i("Aside.Heading",!0),s.Paragraph||i("Aside.Paragraph",!0),a||i("Docs",!1),a.ComponentHeading||i("Docs.ComponentHeading",!0),a.FauxCanvas||i("Docs.FauxCanvas",!0),a.Props||i("Docs.Props",!0),a.Sizers||i("Docs.Sizers",!0),a.TableOfContents||i("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(c,{of:r}),`
`,e.jsx(a.ComponentHeading,{of:"Aside"}),`
`,e.jsx(n.p,{children:`Displays some secondary content, typically an "oh, by the way!" relative to the
main content.`}),`
`,e.jsx(a.FauxCanvas,{children:e.jsxs(s,{children:[e.jsx(s.Heading,{children:"The Presidio"}),e.jsx(s.Paragraph,{children:`
    The Presidio of San Francisco (originally, El Presidio Real de San
    Francisco or The Royal Fortress of Saint Francis) is a park and former
    U.S. Army post on the northern tip of the San Francisco Peninsula in San
    Francisco, California, and is part of the Golden Gate National Recreation
    Area.
  `}),e.jsx(s.Paragraph,{children:`
    It had been a fortified location since September 17, 1776, when New Spain
    established the presidio to gain a foothold in Alta California and the San
    Francisco Bay. It passed to Mexico in 1820, which in turn passed it to the
    United States in 1848. As part of a military reduction program under the
    Base Realignment and Closure (BRAC) process from 1988, Congress voted to
    end the Presidio's status as an active military installation of the U.S.
    Army. On October 1, 1994, it was transferred to the National Park Service,
    ending 219 years of military use and beginning its next phase of mixed
    commercial and public use.
  `})]})}),`
`,e.jsx(a.TableOfContents,{}),`
`,e.jsx(a.Props,{of:r,nativeBase:"aside"}),`
`,e.jsx(n.h2,{id:"adding-content",children:"Adding content"}),`
`,e.jsxs(n.p,{children:["You can pass arbitrary content via the ",e.jsx(n.code,{children:"children"}),` prop, but typically you’ll use
`,e.jsx(n.code,{children:"Aside.Heading"})," and ",e.jsx(n.code,{children:"Aside.Paragraph"}),`, which ensure accessibilty and a
consistent look and feel. Both accept `,e.jsx(n.code,{children:"className"}),` overrides, and the
`,e.jsx(n.code,{children:"Aside.Heading"})," allows you to override which heading tag is used (such as ",e.jsx(n.code,{children:"<h1>"}),`
or `,e.jsx(n.code,{children:"<h5>"}),")."]}),`
`,e.jsx(l,{dark:!0,language:"tsx",code:`
  <Aside sizer="lg" flavor="caution">
    <Aside.Heading level={4}>The heading</Aside.Heading>
    <Aside.Paragraph>A paragraph ...</Aside.Paragraph>
    <Aside.Paragraph className="text-red-800">
      Another paragraph, in red ...
    </Aside.Paragraph>
  </Aside>
`}),`
`,e.jsx(n.h2,{id:"flavors",children:"Flavors"}),`
`,e.jsxs(n.p,{children:["Coloring is done via the ",e.jsx(n.code,{children:"flavor"})," prop. You can pass ",e.jsx(n.code,{children:'"neutral"'}),` (the default),
`,e.jsx(n.code,{children:'"positive"'}),", ",e.jsx(n.code,{children:'"caution"'})," or ",e.jsx(n.code,{children:'"negative"'}),"."]}),`
`,e.jsx(h,{of:p}),`
`,e.jsx(a.Sizers,{of:r})]})}function P(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}function i(o,n){throw new Error("Expected "+(n?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{P as default};
