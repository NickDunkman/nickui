import{j as e,M as a,a as l}from"./blocks-D46m_bFY.js";import{useMDXComponents as r}from"./index-D4sedzlQ.js";import{D as t}from"./index-B36UopcX.js";import"./iframe-Si2UkeX9.js";import"./index-hjKXlARp.js";import"./client-DbgNRuDz.js";import"./index-oXvcZMk4.js";import"./Button-DQJggatp.js";import"./index-DpvBQJGL.js";function i(o){const n={a:"a",code:"code",p:"p",strong:"strong",...r(),...o.components};return t||s("docs",!1),t.SourceLink||s("docs.SourceLink",!0),e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"About this project"}),`
`,e.jsxs("div",{className:"flex w-full items-baseline",children:[e.jsx("div",{children:e.jsx(l,{children:"# Welcome! 👋"})}),e.jsx("div",{style:{marginLeft:"auto"},children:e.jsx(t.SourceLink,{})})]}),`
`,e.jsxs("div",{className:"text-base",style:{fontSize:16},children:[e.jsx("div",{children:e.jsxs(n.p,{children:[`NickUI is a little component library I worked on after taking a gap year to
start coding again and rebuild some confidence. Along the way, I explored
some new technologies (like `,e.jsx(n.a,{href:"https://tailwindcss.com/",rel:"nofollow",children:"Tailwind"}),`,
`,e.jsx(n.a,{href:"https://vite.dev/",rel:"nofollow",children:"Vite"}),", ",e.jsx(n.a,{href:"https://vitest.dev/",rel:"nofollow",children:"Vitest"}),", ",e.jsx(n.a,{href:"https://www.react-hook-form.com/",rel:"nofollow",children:`React Hook
Form`}),", and ",e.jsx(n.a,{href:"https://nx.dev/",rel:"nofollow",children:"Nx"}),`) and went
a little deeper into frontend devops and
`,e.jsx(n.a,{href:"https://storybook.js.org/",rel:"nofollow",children:"Storybook"})," customization."]})}),e.jsx("div",{children:e.jsxs(n.p,{children:["The components here are an evolution of some of the work I did for my ",e.jsx(n.a,{href:"https://phenotypes.amino.com",rel:"nofollow",children:`last
startup’s design system`}),`. They’ve been rebuilt
from the ground up with these goals in mind:`]})}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Integration with Tailwind."}),` 100% of the styling is done with Tailwind,
and the component APIs aim to be Tailwind-esque where applicable, to make
them intuitive in an app that is using Tailwind. For example, the
component sizers use Tailwind sizing terms (`,e.jsx(n.code,{children:'"base"'}),` is the default size),
and they can be prefixed with Tailwind breakpoint prefixes (like
`,e.jsx(n.code,{children:'"xl:large"'}),`). With a little more work, this repo could publish a package
that is fully compatible with the consuming app's Tailwind overrides.`]})}),e.jsx("li",{children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Full accessibility."}),` All components are essentially extensions of the
appropriate native HTML elements. These elements are out-of-the-box
accessible with assistive devices when chosen correctly, and they come
with all kinds of neat props. Where visual, behavioral, or usability
flourishes have been added, care has been taken to ensure they don’t
inhibit users relying on assistive devices. Colors and contrast ratios
have been selected carefully for visual users. Keyboard interactivity is
intuitive and on-par with the corresponding native elements. All tests are
written using the accessibilty DOM. Check out the "accessibility" tab on
any story to see compliance!`]})}),e.jsx("li",{children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Developer ergonomics."}),` One of the joyful things about building
components is considering the tradeoffs between flexibility vs ensured
consistency, and where different concerns should lie. These components
have been designed to take the work of accessibility and look+feel out of
your hands by default. In general, you’re able to override any of these
aspects if you have a customization need, but then you’re responsible for
them. By removing these concerns from your application, you can write less
code (accessibility in particular often requires a ton of boilerplate
pipe-ery), and your application code can read more purely as business
logic (“this is the business-relevant language that should be used to
label this field”, “these are the options”, “this is what should happen
when the user makes a selection” ...).`]})})]}),e.jsx("div",{children:e.jsxs(n.p,{children:[`One thing I really enjoyed during this project was thinking of ways to make
my storybook docs more powerful, and cut down on the amount of boilerplate I
had to add to each component’s docs. If you’re inspired by anything you see,
feel free to peep the `,e.jsx(n.a,{href:"https://github.com/NickDunkman/nickui/tree/main/src/docs",rel:"nofollow",children:`custom "doc blocks" I
created`}),"!"]})})]})]})}function b(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}function s(o,n){throw new Error("Expected "+(n?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{b as default};
