import{j as e,M as u}from"./blocks-R-MRhTR5.js";import{useMDXComponents as d}from"./index-B55W4IUd.js";import{D as i}from"./index-vQz8d2-S.js";import{r as p}from"./iframe-C0VeZLsT.js";import{A as o}from"./Aside-Cp2syeZA.js";import{s as m,M as h}from"./Money.stories-8PSBzLfi.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BjBQ9-e5.js";import"./client-DNYhGbiH.js";import"./Button-Ux8cbQnl.js";import"./index-DqLhOWtd.js";import"./index-V48DHmLJ.js";import"./AllSizersStoryWrapper-BxMOK3L_.js";import"./getStoryArgTypes-xnGM9Mjx.js";import"./Field-CtUsfE6J.js";import"./styles-joATh96y.js";import"./fieldA11y-IXtqdaYQ.js";import"./randomId-Dfhrkieu.js";import"./useElementBounds-BkKfoHSo.js";import"./fireInputChange-BU1kNzof.js";function f({children:t,defaultValue:n}){const[a,r]=p.useState(n);return t(a,r)}function c(t){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...t.components};return o||s("Aside",!1),o.Paragraph||s("Aside.Paragraph",!0),i||s("Docs",!1),i.TableOfContents||s("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(u,{of:m,name:"How it works"}),`
`,e.jsxs(n.h1,{id:"how-the--component-works-",children:["How the ",e.jsx(i,{of:"Money"})," component works 🤓"]}),`
`,e.jsx(i.TableOfContents,{}),`
`,e.jsx(n.h2,{id:"observations-and-ideas",children:"Observations and ideas"}),`
`,e.jsx(n.p,{children:`I wanted to build a currency input component that was delightful to use for both
the user & the developer, so I started by thinking about what would I would need
to solve for.`}),`
`,e.jsx(n.h3,{id:"currency-inputs-are-used-in-high-impact-situations",children:"Currency inputs are used in high-impact situations"}),`
`,e.jsx(n.p,{children:"... relative to other form controls."}),`
`,e.jsx(n.p,{children:`Whether you’re filling out a banking form (withdrawal, transfer, wire, ...),
e-commerce form (pricing backend, tipping), HR form (salaries, paycheck
deductions...), or in a forecasting tool—entering the wrong amount just once can
lead to major headaches, reputational damage, or even prison time! Therefore,
this component has a role to play in getting the user focused and in preventing
mistakes.`}),`
`,e.jsx(n.h3,{id:"currency-formatting-is-very-helpful-and-snazzy",children:"Currency formatting is very helpful, and snazzy!"}),`
`,e.jsx("div",{className:"sb-unstyled sm:float-right sm:mt-3 sm:mb-3 sm:ml-6 sm:max-w-75",children:e.jsxs(o,{sizer:"sm",children:[e.jsx(o.Paragraph,{children:"Currency symbols are so cool. Just look at these guys!"}),e.jsx(o.Paragraph,{className:"text-lg font-bold tracking-widest",children:"฿ £ ƒ ₩ ¥ ₡ ₱ € ₫ ₼ ៛"})]})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:`Currency symbols are very effective at hinting that the field is monetary and
important.`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:`“Thousands separators” (e.g. commas) are helpful for comprehending larger
numbers. They may also be the difference between submitting a devestatingly
wrong amount, and fixing it first. If I ever see a comma while I’m entering a
tip amount, I’ll be on high alert!`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[`As an American, numbers presented in the European format can be confusing.
`,e.jsx(n.code,{children:"1.234,56"})," is 😯, ",e.jsx(n.code,{children:"4,56"})," is 🤨, and ",e.jsx(n.code,{children:"1.234"}),` is 😰—is that a “one thousand two
hundred thirty four” or have they pre-converted it for me as “one point two
three four”? I have to imagine that users across cultures have similar
experiences, so presenting the appropriate currency format is both a
friendlier user experience, and more likely to produce accurate values.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[`I like input placeholders a lot; they’re like the “self-documenting code” of
form controls. And anytime I see a number with two decimal places, especially
when padded with trailing zeros (which are unnecessary in most other
situations), I’m likely to interpret it as a currency amount. So showing
`,e.jsx(n.code,{children:"0.00"})," as a placeholder in a US$ currency input (or ",e.jsx(n.code,{children:"0.00000000"}),` for ₿itcoin)
is another opportunity to create some intuition about the field type &
importance.`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"reformatting-the-value-as-youre-typing-is-disorienting",children:["Reformatting the value ",e.jsx(n.em,{children:"as you’re typing"})," is disorienting"]}),`
`,e.jsxs(n.p,{children:["I’ve used currency inputs that automatically add the thousands separators ",e.jsx(n.em,{children:`as
you type`}),`. In my opinion, this is better than not adding them at all, for the
reasons outlined above, but if you type with any kind of speed, it feels so
chaotic that it can become befuddling!`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:`By default, the browser will automatically move the cursor to the end of the
input value whenever it is programatically changed (such as to slot in
thousands separators). This means that if you add a digit to the middle of the
number, your cursor may be yanked over to the end of the number.`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"You can"}),` programatically reposition the cursor into the right place after
programatically updating the value, but even if you get it right, it’s still
chaotic: the existing commas can flop around (`,e.jsx(n.code,{children:"1,234,567|.00"}),` ->
`,e.jsx(n.code,{children:"12,345,678|.00"}),`), and the addition/removal of commas causes the cursor to
shift by an unexpected amount. And now you’ve got a `,e.jsx(n.em,{children:"ton"}),` of gritty code to
maintain, because there are many, many edge cases. I went down this path, but
it still wasn’t a good user experience after I solved every possible edge
case.`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"preventing-invalid-input-is-helpfulto-an-extent",children:"Preventing invalid input is helpful—to an extent"}),`
`,e.jsxs(n.p,{children:[`For accessibility & usability purposes (and to reduce the amount of code I have
to write), I always build off of the appropriate native elements, but the
`,e.jsx(n.code,{children:'<input type="number">'}),` control does not display commas. So I'd have to drop
down to using an `,e.jsx(n.code,{children:'<input type="text">'}),`, and then layer on my own logic for
blocking non-numerical input. Obviously, I can block letters (unless, for
example, the user is holding `,e.jsx(n.code,{children:"command"})," while typing ",e.jsx(n.code,{children:"c"}),` to copy the value).
Beyond that, as a user of forms, my experience is that having my keystrokes
blocked is frustrating unless I'm expecting it, since it’s unclear whether it’s
blocked on purpose, or if my browser is malfunctioning.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Blocking a second decimal point is probably ok since it’s reasonable to expect
that it’s not allowed.`}),`
`,e.jsx(n.li,{children:"Negative signs can be restricted to the first character."}),`
`,e.jsxs(n.li,{children:[`Blocking keystrokes based on having a minimum / maximum value for the field is
not ideal. For example, if field has a maximum allowed value of `,e.jsx(n.code,{children:"1000"}),`, and
the current value is `,e.jsx(n.code,{children:"999"}),`, I could theoretically block adding an additional
non-decimal digit, since that would push the value over `,e.jsx(n.code,{children:"1000"}),`. However, I
don’t think there is a sufficiently good way to pre-educate the user on an
allowed numeric range before they start typing, since they generally don’t
read fine print. As a result, I’ve opted-out of having min/max options, and
recommend presenting error messages to the user when they go outside of an
allowed range.`]}),`
`,e.jsxs(n.li,{children:[`With one exception: in most situations, I think the concept of "negative
money" is not intuitive. For example, if you have a withdrawal form, you’ll
probably ask the user to a enter a “positive amount to withdraw”, rather than
a “negative amount to add to your account.” So `,e.jsx(i,{of:"Money"}),` blocks
negatives by default, but offers an option to allow them.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"currency-formatting-is-tedious",children:"Currency formatting is tedious"}),`
`,e.jsxs(n.p,{children:[`In order to be as useful as possible for developers, the component should
consider how data arrives at its front door, and where it’s going / how it’ll be
used when exiting via the `,e.jsx(n.code,{children:"onChange"}),` handler. As a developer who worked on this
component, I know that the work of formatting, and deformatting, especially when
the currency format might be "dynamic" within your application if you serve
users in different countries, is really tiresome. So the component should handle
it all for you!`]}),`
`,e.jsxs(n.p,{children:["If you’re pre-filling the field with a ",e.jsx(n.code,{children:"value"})," (or ",e.jsx(n.code,{children:"defaultValue"}),`), you should
be able to just "pass through" the data you get from any of these sources
without any intervention:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["a database (where it’s probably stored as a ",e.jsx(n.code,{children:"float"})," or ",e.jsx(n.code,{children:"decimal"}),` type, and may
be `,e.jsx(n.code,{children:"null"})," if it’s an optional column)"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["a JSON response from some API, where it’ll be a ",e.jsx(n.code,{children:"string"})," or ",e.jsx(n.code,{children:"number"}),`, and if
unset, will be `,e.jsx(n.code,{children:"null"})," or an empty ",e.jsx(n.code,{children:"string"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[`some hardcoded value in your javascript codebase, where it may also be
`,e.jsx(n.code,{children:"undefined"}),"."]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:`When the user changes the value, there is a very high probability that you will
need to deformat it before storing it or using it within javascript. So the
component should deformat the new value before passing it back.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:`As far as I know, most databases do not internationalize their data types.
Values with thousands separators or a character other than "." for the decimal
point are rejected by numeric table columns.`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[`Within javascript, you might want to perform some calculation off of the new
value, so you’ll need to parse it as a `,e.jsx(n.code,{children:"Number()"}),`. While a French user will
intuitively understand `,e.jsx(n.code,{children:"1.234,56"})," as a number, javascript won’t."]}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["NickUI provides a ",e.jsx(n.code,{children:"formatMoney"})," function for the case where you ",e.jsx(n.em,{children:"do"}),` want to
have a value formatted in the same way the `,e.jsx(i,{of:"Money"})," component would."]}),`
`,e.jsx(n.h2,{id:"architecture",children:"Architecture"}),`
`,e.jsx(n.h3,{id:"formatting-options",children:"Formatting options"}),`
`,e.jsx(n.p,{children:`After concluding the thought exercise outlined above, these are the options I
landed on supporting.`}),`
`,e.jsxs(n.p,{children:[`Instead of breaking these out into separate options, I could have taken a single
prop like `,e.jsx(n.code,{children:"currencyType: 'usd' | 'eur' | ..."}),`, but then my component would have
to know every existing (& imaginary) currency format out there, and it would be
far less flexible.`]}),`
`,e.jsx(n.p,{children:`I used US$ defaults for these (+ disallowing negatives), since I might as well
make these props unnecessary for some developers!`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`/** The <Money> component’s formatting-related props */
type MoneyFormatProps = {
  /** The currency symbol shown at the front of the input, typically "$" */
  currencySymbol?: React.ReactNode;
  /**
   * The character separating the whole part from the decimal part, typically
   * "." Needs to be a string rather than ReactNode, since it will be included
   * within the input value.
   */
  decimalPoint?: string;
  /**
   * The character to use to separate every three digits in the whole part,
   * typically ",". Needs to be a string rather than ReactNode, since it will
   * be included within the input value.
   */
  thousandsSeparator?: string;
  /**
   * Controls how many decimal places the user is allowed to add, and how many
   * will always be included on the value emitted via the onChange handler.
   * Typically 2.
   */
  decimalPlaces?: number;
  /** Set to \`true\` to allow the user to enter negative values */
  allowNegatives?: boolean;
};
`})}),`
`,e.jsx(n.p,{children:`There are many moving parts within the system which depend on some subset of the
formatting options, & lots of complex re-rendering patterns. So to make the code
simpler, more predictable, & more performant, I wrapped the options into a
standard object type that I could memoize at the top layer & then drill down
through the various utilities & hooks.`}),`
`,e.jsxs(n.p,{children:[`Additionally, there is a little more nuance to the formatting options used
`,e.jsx(n.em,{children:"internally"}),`. For example, sometimes I need to allow the user to be "working
towards" typing the full number of decimal places, and other times, I need to
display the value w/ all of the decimal places “padded on”.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`/**
 * The standard format object <Money> drills down through its children &
 * grandchildren
 */
type MoneyFormatType = Required<Omit<MoneyFormatType, 'decimalPlaces'>> & {
  minDecimalPlaces: number;
  maxDecimalPlaces: number;
  /**
   * Whether to allow the string to have a trailing decimal point, which is
   * necessary on the input the user is typing in, since you have to type a
   * decimal point before you can type the decimal places. But the value ejected
   * via the onChange handler should never have a trailing decimal point.
   */
  allowWorkingDecimalPoint?: boolean;
  /**
   * Whether to all the negative sign to exist on its own. Necessary for the
   * input the user is typing in, since often, the user will type the negative
   * sign first before typing the rest of the negative number. However, the
   * value ejected via the onChange handler should never just be "-".
   */
  allowWorkingNegativeSign?: boolean;
};
`})}),`
`,e.jsxs(n.h3,{id:"three-separate-input-elements",children:["Three separate ",e.jsx(n.code,{children:"<input>"})," elements"]}),`
`,e.jsxs(n.p,{children:["When you interact with the ",e.jsx(i,{of:"Money"}),` component, you’re actually
interacting with one of three `,e.jsx(n.code,{children:"<input>"}),` elements. In addition to the interactive
("working") input, there are two others: one shows the placeholder value, and
the other is normally hidden & actually drives the form behavior.`]}),`
`,e.jsx(n.p,{children:`Normally, they are collapsed together via overlapping & hiding, so you (& the
screen reader) perceive a single control. This demo shows the three inputs
separated out.`}),`
`,e.jsx(f,{defaultValue:"",children:(a,r)=>e.jsxs("div",{className:"sb-unstyled flex flex-col sm:flex-row sm:items-stretch sm:gap-4",children:[e.jsx("div",{className:"flex-1",children:e.jsx(i.FauxCanvas,{children:e.jsx(h,{label:"Separated out",hint:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"top: placeholder input"}),e.jsx("div",{children:"middle: working input (overlaps the placholder)"}),e.jsx("div",{children:"bottom: form input (hidden)"})]}),value:a,onChange:l=>r(l.target.value),docsMeta:{spread:!0},allowNegatives:!0})})}),e.jsx("div",{className:"-mt-10 flex-1 sm:mt-0",children:e.jsx(i.FauxCanvas,{children:e.jsx(h,{label:"Collapsed together",value:a,onChange:l=>r(l.target.value),allowNegatives:!0})})})]})}),`
`,e.jsxs(n.h4,{id:"the-working-input",children:["The working ",e.jsx(n.code,{children:"<input>"})]}),`
`,e.jsxs(n.p,{children:["Obviously, there needs to be an ",e.jsx(n.code,{children:"<input>"}),` that the user interacts with to modify
the field’s value. And to support showing commas in its value, it needs to be an
`,e.jsx(n.code,{children:'<input type="text">'}),". In my system, I call this the ",e.jsx(n.strong,{children:'"working input"'}),` (where
the user works on the value). The user needs to be able to be "working towards"
typing out a valid monetary value, so it allows temporarily trailing decimal
points, temporarily lone negative signs, and temporarily fewer than the required
decimal places.`]}),`
`,e.jsxs(n.h4,{id:"the-form-input",children:["The form ",e.jsx(n.code,{children:"<input>"})]}),`
`,e.jsxs(n.p,{children:["There is a second, hidden ",e.jsx(n.code,{children:"<input>"})," which I call the ",e.jsx(n.strong,{children:'"form input"'}),`. It is
what form libraries attach to (via the `,e.jsx(n.code,{children:"ref"}),", ",e.jsx(n.code,{children:"name"}),", ",e.jsx(n.code,{children:"onChange"}),", ",e.jsx(n.code,{children:"onBlur"}),` etc.
props).`]}),`
`,e.jsxs(n.p,{children:["I don’t want the ",e.jsx(n.code,{children:"onChange"})," callback to fire unless there is a ",e.jsx(n.em,{children:"numerical"}),`
change to the value. For example, if I progammatically update the value to
add/remove/adjust the commas, I don’t think that `,e.jsx(n.code,{children:"<Money>"}),`’s parent should be
concerned with that change—it really only cares when there is a new
monetarily/numerically different value. For the parent’s intents & purposes (&
performance), situations like these should be considered equivalent:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"1"}),", ",e.jsx(n.code,{children:"1."}),", ",e.jsx(n.code,{children:"1.0"}),", and ",e.jsx(n.code,{children:"1.00"}),` (the parent is only notified on the initial
keystroke in that sequence)`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"1234"})," (before I progmatically add the comma) & ",e.jsx(n.code,{children:"1,234"})," (after)"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Note: “unset” should be different than zero, so while ",e.jsx(n.code,{children:"0"}),", ",e.jsx(n.code,{children:"0."}),", ",e.jsx(n.code,{children:"0.0"}),", ",e.jsx(n.code,{children:"-0.0"}),`,
etc. are all equivalent, they are considered a change from when the value is
empty, and vice versa.`]}),`
`,e.jsxs(n.p,{children:["Rather than having a single ",e.jsx(n.code,{children:"<input>"}),` where I "intercept" changes and choose
when to block them vs. propogate them up to the parent, it’s better to just have
a separate, hidden `,e.jsx(n.code,{children:"<input>"}),` which only tracks the numerical representation of
the current value. When there is a `,e.jsx(n.em,{children:"numerical"}),` change to the working input, I
progammatically trigger an `,e.jsx(n.code,{children:"'input'"}),` event to the form input, which causes its
`,e.jsx(n.code,{children:"onChange"}),` handler to fire with the numerically-parseable form of the value. For
example, if the working input receives `,e.jsx(n.code,{children:'"1.234,56"'}),`, the form input’s onChange
handler will fire with `,e.jsx(n.code,{children:'"1234.56"'}),"."]}),`
`,e.jsx(n.p,{children:`This is particularly important for making the component compatible with the
various current & future form libraries out there, since they set values &
observe changes in different ways. We don’t want those libraries overwriting our
formatting, and we only want them to pay attention to numerical changes.`}),`
`,e.jsxs(n.h4,{id:"the-placeholder-input",children:["The placeholder ",e.jsx(n.code,{children:"<input>"})]}),`
`,e.jsxs(n.p,{children:["Finally, there is a third ",e.jsx(n.code,{children:"<input>"})," I call the ",e.jsx(n.strong,{children:'"placeholder input"'}),`, which is
responsible for showing the placeholder value. I concluded earlier that always
showing the full number of available decimal places is important, so in addition
to showing a placeholder like `,e.jsx(n.code,{children:"0.00"}),` when the field is empty, we also want to
show the remaining available decimal places as zeros as the user is filling the
field out.`]}),`
`,e.jsxs(n.p,{children:["Normally, you can just use the ",e.jsx(n.code,{children:"placeholder"}),` attribute to do this for you, like
`,e.jsx(n.code,{children:'<input placeholder="0.00">'}),`. However, as soon as you start typing, it won’t
show the placeholder at all, which doesn’t allow us to show the remaining
decimal places. So my solution was to have this separate input that is placed
directly `,e.jsx(n.em,{children:"behind"}),` the working input. It uses the same styles, and I’ve "cloned"
the scroll position of one to the other using a
`,e.jsx(n.a,{href:"https://github.com/NickDunkman/nickui/blob/main/src/components/Money/Money.tsx#L45",rel:"nofollow",children:"custom hook I built"}),`,
so the text is always precisely aligned, and you only see the trailing zeros.`]}),`
`,e.jsx(n.h3,{id:"value-state-reducer",children:"Value state reducer"}),`
`,e.jsx(n.p,{children:`The internal "value state" of this component is very complex, especially when
you consider the many ways the value might be updated, and the nuanced changes
each update method has on the state.`}),`
`,e.jsxs(n.p,{children:[`At any given time, the component needs to track all of these pieces, and they
need to be in sync with eachother to prevent inconsistent state and duplicate
calls to the `,e.jsx(n.code,{children:"onChange"})," handler:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:['the "controlled value" received from the parent component via the ',e.jsx(n.code,{children:"value"}),`
prop, so the component knows whether a change came from that prop.`]}),`
`,e.jsx(n.li,{children:`the "working value" for the working input, which is formatted & can be
incomplete`}),`
`,e.jsx(n.li,{children:`the "placeholder value" for the placeholder input, which is formatted and
should have the complete number of decimal places`}),`
`,e.jsxs(n.li,{children:['the "numerish value" for the form input, which is ',e.jsx(n.em,{children:"not formatted"}),` and must be
parseable as a javascript number (or empty).`]}),`
`,e.jsx(n.li,{children:`the formatting options that were present when all of the above formatting
occurred, in case we need to perform operations on these numbers in later
render cycles.`}),`
`,e.jsx(n.li,{children:"a enum representation of what source of the lastest mutation was"}),`
`]}),`
`,e.jsx(n.p,{children:`And each of the ways the value might be updated can cascade changes to these
different pieces in different ways!`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["When the controlled ",e.jsx(n.code,{children:"value"})," prop changes & it’s ",e.jsx(n.em,{children:"numerically"}),` different from
our current value, we should update all variations of the value`]}),`
`,e.jsxs(n.li,{children:["The controlled ",e.jsx(n.code,{children:"value"}),` prop can also change as a result of us calling the
`,e.jsx(n.code,{children:"onChange"}),` handler, which shouldn’t clobber the working input’s "partial
value" progress.`]}),`
`,e.jsx(n.li,{children:`When the working input value changes, we update the formatted variations, and
trigger a form value update if there is a numerical change.`}),`
`,e.jsx(n.li,{children:`When incrementing using the up/down arrows, there is different logic for
keeping the cursor in the right place.`}),`
`,e.jsx(n.li,{children:"etc. etc. etc."}),`
`]}),`
`,e.jsxs(n.p,{children:["Luckily, ",e.jsx(n.code,{children:"React.useReducer"}),` was created to make sense of situations like this.
If you peak into the implementation of `,e.jsx(i,{of:"Money"}),`, you’ll find a hook
call chain which ultimately relies on `,e.jsx(n.code,{children:"React.useReducer"}),` to manage a versioned
history of changes to the value.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useValueStateReducer()"})," uses ",e.jsx(n.code,{children:"React.useReducer"}),` to manage a "value state"
object`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useValueState()"})," wraps ",e.jsx(n.code,{children:"useValueStateReducer"}),` and adds some functions for
making changes`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useValueElementsProps()"}),` encapsulates all of that and provides props for all
of the sub-elements that depend on the value state (such as to display the
value, or make changes).`]}),`
`]})]})}function D(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(c,{...t})}):c(t)}function s(t,n){throw new Error("Expected "+(n?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{D as default};
