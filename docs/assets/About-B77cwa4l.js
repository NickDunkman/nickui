import{j as e,M as l,a}from"./blocks-DILD-YPA.js";import{useMDXComponents as r}from"./index-BSWXvihS.js";import{D as t}from"./index-BO77VyQa.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-D_dx4C3o.js";import"./index-MwUvjmfi.js";import"./client-CNIK_tGj.js";import"./Button-DymO3C48.js";import"./index-Bl3bBT5F.js";import"./index-D1YO4riR.js";function s(i){const n={a:"a",code:"code",img:"img",p:"p",strong:"strong",...r(),...i.components};return t||o("docs",!1),t.SourceLink||o("docs.SourceLink",!0),e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"About this project"}),`
`,e.jsxs("div",{className:"sb-unstyled -mt-2.5 mb-10 flex items-start gap-6 rounded-sm border-1 border-blue-200 bg-blue-50 p-3",children:[e.jsxs("div",{className:"sb-unstyled flex flex-1 flex-wrap gap-3",children:[e.jsx("div",{className:"h-5 min-w-25",children:e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/NickDunkman/nickui/actions/workflows/vitest.yml",rel:"nofollow",children:e.jsx(n.img,{src:"https://github.com/NickDunkman/nickui/actions/workflows/vitest.yml/badge.svg?kill_cache=1",alt:`vitest
status`})})})}),e.jsx("div",{className:"h-5 min-w-25",children:e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/NickDunkman/nickui/actions/workflows/eslint.yml",rel:"nofollow",children:e.jsx(n.img,{src:"https://github.com/NickDunkman/nickui/actions/workflows/eslint.yml/badge.svg?kill_cache=1",alt:`eslint
status`})})})}),e.jsx("div",{className:"h-5 min-w-25",children:e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/NickDunkman/nickui/actions/workflows/tsc.yml",rel:"nofollow",children:e.jsx(n.img,{src:"https://github.com/NickDunkman/nickui/actions/workflows/tsc.yml/badge.svg?kill_cache=1",alt:`tsc
status`})})})}),e.jsx("div",{className:"h-5 min-w-25",children:e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/NickDunkman/nickui/actions/workflows/prettier.yml",rel:"nofollow",children:e.jsx(n.img,{src:"https://github.com/NickDunkman/nickui/actions/workflows/prettier.yml/badge.svg?kill_cache=1",alt:`prettier
status`})})})})]}),e.jsx("div",{className:"relative ml-auto w-6",children:e.jsx("div",{className:"absolute -top-0.5 bottom-0 left-0 size-6",children:e.jsx(t.SourceLink,{markOnly:!0})})})]}),`
`,e.jsx("div",{style:{marginBottom:40},children:e.jsx(a,{children:"# Welcome! 👋"})}),`
`,e.jsxs("div",{className:"text-base",style:{fontSize:16},children:[e.jsxs("div",{children:[e.jsx("img",{src:"./nickui.svg",alt:"NickUI",width:"100",className:"float-left -mt-1.25 mr-0.5"})," ",e.jsxs(n.p,{children:[`is a little component library I worked on after taking a gap year to start
coding again and rebuild some confidence. Along the way, I explored some new
technologies (like `,e.jsx(n.a,{href:"https://tailwindcss.com/",rel:"nofollow",children:"Tailwind"}),`,
`,e.jsx(n.a,{href:"https://vite.dev/",rel:"nofollow",children:"Vite"}),", ",e.jsx(n.a,{href:"https://vitest.dev/",rel:"nofollow",children:"Vitest"}),", ",e.jsx(n.a,{href:"https://www.react-hook-form.com/",rel:"nofollow",children:`React Hook
Form`}),", and ",e.jsx(n.a,{href:"https://nx.dev/",rel:"nofollow",children:"Nx"}),`) and went
a little deeper into frontend devops and
`,e.jsx(n.a,{href:"https://storybook.js.org/",rel:"nofollow",children:"Storybook"})," customization."]})]}),e.jsx("div",{children:e.jsxs(n.p,{children:["The components here are an evolution of some of the work I did for my ",e.jsx(n.a,{href:"https://phenotypes.amino.com",rel:"nofollow",children:`last
startup’s design system`}),`. They’ve been rebuilt
from the ground up with these goals in mind:`]})}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Integration with Tailwind."}),` 100% of the styling is done with Tailwind,
and the component APIs aim to be Tailwind-esque where applicable, to make
them intuitive in an app that is using Tailwind. For example, the
component sizers use Tailwind sizing terms (`,e.jsx(n.code,{children:'"base"'}),` is the default size),
and they can be prefixed with Tailwind breakpoint prefixes (like
`,e.jsx(n.code,{children:'"sm:base"'}),`). With a little more work, this repo could publish a package
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
label this field”, “these are the options”, “this is what business action
should occur when the user makes a selection” ...).`]})})]}),e.jsx("div",{children:e.jsxs(n.p,{children:[`One thing I really enjoyed during this project was thinking of ways to make
my storybook more powerful, and cut down on the amount of boilerplate I had
to add for each new component. If you’re inspired by anything you see, feel
free to peep the `,e.jsx(n.a,{href:"https://github.com/NickDunkman/nickui/tree/main/src/dev/docBlocks",rel:"nofollow",children:`custom "doc blocks" I
created`}),"!"]})})]})]})}function k(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}function o(i,n){throw new Error("Expected "+(n?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{k as default};
