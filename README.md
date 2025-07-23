<h1 alt="NickUI"><img src="/.storybook/assets/nickui.svg" width="250" alt="NickUI" /></h1>

[![vitest status](https://github.com/NickDunkman/nickui/actions/workflows/vitest.yml/badge.svg?kill_cache=1)](https://github.com/NickDunkman/nickui/actions/workflows/vitest.yml)
[![eslint status](https://github.com/NickDunkman/nickui/actions/workflows/eslint.yml/badge.svg?kill_cache=1)](https://github.com/NickDunkman/nickui/actions/workflows/eslint.yml)
[![tsc status](https://github.com/NickDunkman/nickui/actions/workflows/tsc.yml/badge.svg?kill_cache=1)](https://github.com/NickDunkman/nickui/actions/workflows/tsc.yml)
[![prettier status](https://github.com/NickDunkman/nickui/actions/workflows/prettier.yml/badge.svg?kill_cache=1)](https://github.com/NickDunkman/nickui/actions/workflows/prettier.yml)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://nickdunkman.github.io/nickui)

Docs: https://nickdunkman.github.io/nickui

## 👋 Welcome!

NickUI is a little component library I worked on after taking a gap year to
start coding again and rebuild some confidence. Along the way, I explored some
new technologies (like [Tailwind](https://tailwindcss.com/),
[Vite](https://vite.dev/), [Vitest](https://vitest.dev/),
[React Hook Form](https://www.react-hook-form.com/), and [Nx](https://nx.dev/))
and went a little deeper into frontend devops and
[Storybook](https://storybook.js.org/) customization.

The components here are an evolution of some of the work I did for my
[last startup’s design system](https://phenotypes.amino.com). They’ve been
rebuilt from the ground up with these goals in mind:

- **Integration with Tailwind.** 100% of the styling is done with Tailwind, and
  the component APIs aim to be Tailwind-esque where applicable, to make them
  intuitive in an app that is using Tailwind. For example, the component sizers
  use Tailwind sizing terms (`"base"` is the default size), and they can be
  prefixed with Tailwind breakpoint prefixes (like `"sm:base"`). With a little
  more work, this repo could publish a package that is fully compatible with the
  consuming app's Tailwind overrides.

- **Full accessibility.** All components are essentially extensions of the
  appropriate native HTML elements. These elements are out-of-the-box accessible
  with assistive devices when chosen correctly, and they come with all kinds of
  neat props. Where visual, behavioral, or usability flourishes have been added,
  care has been taken to ensure they don’t inhibit users relying on assistive
  devices. Colors and contrast ratios have been selected carefully for visual
  users. Keyboard interactivity is intuitive and on-par with the corresponding
  native elements. All tests are written using the accessibilty DOM. Check out
  the "accessibility" tab onany story to see compliance!

- **Developer ergonomics.** One of the joyful things about building components
  is considering the tradeoffs between flexibility vs ensured consistency, and
  where different concerns should lie. These components have been designed to
  take the work of accessibility and look+feel out of your hands by default. In
  general, you’re able to override any of these aspects if you have a
  customization need, but then you’re responsible for them. By removing these
  concerns from your application, you can write less code (accessibility in
  particular often requires a ton of boilerplate pipe-ery), and your application
  code can read more purely as business logic (“this is the business-relevant
  language that should be used to label this field”, “these are the options”,
  “this is what should happen when the user makes a selection” ...).

One thing I really enjoyed during this project was thinking of ways to make my
storybook docs more powerful, and cut down on the amount of boilerplate I had to
add to each component’s docs. If you’re inspired by anything you see, feel free
to peep the
[custom "doc blocks" I created](https://github.com/NickDunkman/nickui/tree/main/src/docs)!

---

## 👷 Development

### Getting started

TODO

### Running Storybook in development mode

TODO

### Configuring Cursor or VS Code

TODO

### Running the checks

TODO

---

## 📚 Updating the docs site

TODO
