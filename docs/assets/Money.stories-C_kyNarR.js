import{r as l}from"./iframe-DKZEa4Ck.js";import{P as X}from"./PrettyPrint-ClJ9eSXk.js";import{A as G}from"./AllSizersStoryWrapper-D3CQH3gX.js";import{F as J}from"./Field-BpDm7nrL.js";import{t as Q}from"./styles-0tT-pu7E.js";import{a as Z,f as ee,u as ae,c as N}from"./index-9iGa6NbW.js";import{u as te}from"./useElementBounds-CAPzecjg.js";import{u as ne}from"./useFieldA11yIds-3nNG8woo.js";import{f as le}from"./fireInputChange-BU1kNzof.js";function re(e,a){const t=l.useRef(null),n=e||t,r=l.useRef(null),s=a||r;return l.useEffect(()=>{const o=n.current,i=s.current;if(o&&i){let g=function(){$(o,i)};return $(o,i),o.addEventListener("scroll",g),()=>{o.removeEventListener("scroll",g)}}},[n,s]),[n,s]}function $(e,a){e&&a&&a.scroll(e.scrollLeft,e.scrollTop)}const se=Z({slots:{visibleInputsContainer:"relative",placeholderInput:`
      select-none pointer-events-none
      text-gray-400 disabled:text-gray-400 !border-transparent
    `,workingInput:"peer absolute top-0 right-0 left-0 !bg-transparent",hiddenInput:"hidden",currencySymbol:`
      absolute top-0 bottom-0 left-0.5
      flex items-center  
      select-none pointer-events-none
      text-black
      peer-placeholder-shown:text-gray-400 
      peer-disabled:text-gray-400 
      font-medium
    `},variants:{sizer:{xs:{currencySymbol:"text-xs pl-2 pr-1"},sm:{currencySymbol:"text-sm pl-2.25 pr-1.5"},base:{currencySymbol:"text-base pl-3 pr-2"},lg:{currencySymbol:"text-lg pl-4 pr-2"},xl:{currencySymbol:"text-xl pl-4.5 pr-2.5"}},hasError:{true:{currencySymbol:"text-rose-800 peer-placeholder-shown:text-rose-800"}},hasSpacingApplied:{false:{placeholderInput:"text-transparent disabled:text-transparent",workingInput:"text-transparent disabled:text-transparent",currencySymbol:"text-transparent"}}},defaultVariants:{sizer:"base",hasError:!1,hasValue:!1,hasSpacingApplied:!0}});function oe({allowNegatives:e,decimalPlaces:a,decimalPoint:t}){return l.useCallback(n=>{if(n.metaKey)return!1;if(![...q,t,...e?["-"]:[],"ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ArrowRight","Tab","Enter","Backspace","Delete"].includes(n.key)&&n.key!==t)return!0;const r=n.currentTarget.value,s=n.currentTarget.selectionStart||0,o=(n.currentTarget.selectionEnd||0)!==s;if(n.key===t&&r.indexOf(t)!==-1||n.key==="-"&&(s>0||r.indexOf("-")!==-1))return!0;if(q.includes(n.key)&&!o){const i=r.indexOf(t);if(i!==-1&&s>i&&r.length-(i+1)>=a)return!0}},[e,a,t])}const q=Object.freeze(["0","1","2","3","4","5","6","7","8","9"]);function D(e,a){let t=e?.toString().replace(/[^0-9.-]/g,"")||"";if(t.indexOf("-")>0||L(t,"-")>(a.allowNegatives?1:0)||L(t,".")>1)return"";const n=t.match(/^(-?)0+(([1-9][0-9]*)|0)(\.[0-9]*)?$/);if(n&&(t=(n[1]||"")+(n[2]||"")+(n[4]||"")),t[0]==="."?t=`0${t}`:t.slice(0,2)==="-."&&(t=`-0${t.slice(1)}`),!a?.allowTrailingDecimalPoint&&t[t.length-1]==="."&&(t=t.slice(0,-1)),t&&a.minDecimalPlaces>0){let[r,s]=t.split(".");t=`${r||"0"}.${(s||"").padEnd(a.minDecimalPlaces,"0")}`}if(t&&a.maxDecimalPlaces===0){let[r]=t.split(".");t=r}else{let[r,s]=t.split(".");s&&s.length>a.maxDecimalPlaces&&([r,s]=(Math.round(+`${r}.${s}`*Math.pow(10,a.maxDecimalPlaces))/Math.pow(10,a.maxDecimalPlaces)).toString().split("."),t=`${r}.${(s||"").padEnd(a.maxDecimalPlaces,"0")}`)}return t}function U(e,a){const t=D(e,a);if(t==="")return"";const[n,r]=t.split("."),s=t.indexOf(".")!==-1,o=3,i=Math.ceil(n.length/o),g=n.length%o||o,c=[n.substring(0,g)];for(var f=0;f<i-1;f++)c.push(n.substring(g+f*o,g+(f+1)*o));return`${c.join(a.thousandsSeparator)}${s?a.decimalPoint:""}${r||""}`}function O(e,a){return e.replaceAll(a.thousandsSeparator,"").replace(a.decimalPoint,".")}function ue(e,a,t){return[a-L(e.workingValue.slice(0,a),e.format.thousandsSeparator)*e.format.thousandsSeparator.length,t-L(e.workingValue.slice(0,t),e.format.thousandsSeparator)*e.format.thousandsSeparator.length]}function L(e,a){return e.split(a).length-1}const _=ee((e,a,t,n)=>({decimalPoint:e,minDecimalPlaces:a,maxDecimalPlaces:a,thousandsSeparator:t,allowNegatives:n}));function ie(e){const[{currentValue:a,previousValue:t},n]=l.useReducer(me,e,ce),r=l.useCallback(o=>{n({type:"updateFromWorkingValue",payload:o})},[n]),s=l.useCallback(o=>{n({type:"updateFromIncrement",payload:o})},[n]);return l.useEffect(()=>{e.format!==a.format&&n({type:"updateFromFormat",payload:e.format})},[e.format,a.format,n]),l.useEffect(()=>{e.controlledValue!==a.controlledValue&&n({type:"updateFromControlledValue",payload:e.controlledValue})},[e.controlledValue,a.controlledValue,n]),{previousValue:t,currentValue:a,updateFromWorkingValue:r,updateFromIncrement:s}}function ce({controlledValue:e,defaultValue:a,format:t}){const n=e!==void 0?e:a,r=E(n,t);return{currentValue:{version:1,numerishValue:D(n,t),workingValue:r,placeholderValue:B(n,t),controlledValue:e,format:t,source:"initialValue"}}}function F(e,a){return{currentValue:{...e.currentValue,...a,version:e.currentValue?.version+1},previousValue:e?.currentValue}}function me(e,a){let t;switch(a.type){case"updateFromControlledValue":if(a.payload===e.currentValue.controlledValue)return e;t=D(a.payload,e.currentValue.format);const r=Number(t)!==Number(e.currentValue.numerishValue);return F(e,{numerishValue:t,workingValue:r?E(t,e.currentValue.format):e.currentValue.workingValue,placeholderValue:r?B(t,e.currentValue.format):e.currentValue.placeholderValue,controlledValue:a.payload,source:"controlledValue"});case"updateFromWorkingValue":var n=O(a.payload,e.currentValue.format);return t=D(n,e.currentValue.format),F(e,{numerishValue:t,workingValue:E(n,e.currentValue.format),placeholderValue:B(n,e.currentValue.format),source:"workingValue"});case"updateFromFormat":var n=O(e.currentValue.workingValue,e.currentValue.format);return F(e,{workingValue:E(n,a.payload),placeholderValue:B(n,a.payload),format:a.payload,source:"format"});case"updateFromIncrement":if(e.currentValue.numerishValue===""&&a.payload===-1?t=D(0,e.currentValue.format):t=Math.max(Number(e.currentValue.numerishValue)+a.payload,e.currentValue.format.allowNegatives?-1/0:0).toString(),t===e.currentValue.numerishValue)return e;const[s]=t.split("."),[o,i]=e.currentValue.workingValue.split(e.currentValue.format.decimalPoint);return F(e,{numerishValue:t,workingValue:E(`${s}${i!==void 0?e.currentValue.format.decimalPoint:""}${i||""}`,e.currentValue.format),placeholderValue:B(t,e.currentValue.format),source:"increment"})}}function E(e,a){return U(e,{...a,allowTrailingDecimalPoint:!0,minDecimalPlaces:0})}function B(e,a){return U(e||"0",{...a,minDecimalPlaces:a.maxDecimalPlaces})}function de(e){const a=l.useRef(null),t=l.useRef(null),n=l.useRef(null),{ref:r}=e;l.useEffect(()=>{n.current&&r&&(typeof r=="function"?r(n.current):r.current=n.current)},[n,r]);const[s,o]=l.useState(!1),[i,g]=l.useState(!1),c=_(e.decimalPoint??".",e.decimalPlaces??2,e.thousandsSeparator??",",e.allowNegatives||!1),f=_(c.decimalPoint,c.maxDecimalPlaces,"",c.allowNegatives),{currentValue:m,previousValue:h,updateFromWorkingValue:W,updateFromIncrement:I}=ie({controlledValue:e.value,defaultValue:e.defaultValue,format:i?f:c});l.useEffect(()=>{m.numerishValue!==h?.numerishValue&&m.source!=="controlledValue"&&m.source!=="initialValue"&&le(n.current,m.numerishValue)},[m.numerishValue,h?.numerishValue,m.source]),l.useEffect(()=>{if(a.current&&a.current.value!==m.workingValue){const u={start:a.current.selectionStart||0,end:a.current.selectionEnd||0};if(a.current.value=m.workingValue,h&&document.activeElement===a.current&&(m.source==="format"&&a.current.setSelectionRange(...ue(h,u.start,u.end)),m.source==="increment")){const R=m.numerishValue.length-h.numerishValue.length;a.current.setSelectionRange(u.start+R,u.end+R)}}},[m,h,a]);const K=oe({allowNegatives:c.allowNegatives,decimalPlaces:c.maxDecimalPlaces,decimalPoint:c.decimalPoint});function j(u){if(K(u)){u.preventDefault();return}u.key==="ArrowUp"&&(u.preventDefault(),I(u.shiftKey?10:1)),u.key==="ArrowDown"&&(u.preventDefault(),I(u.shiftKey?-10:-1)),e.onKeyDown?.(u)}const{className:xe,sizer:be,label:ve,hint:Ve,error:we,currencySymbol:Ce,decimalPoint:Se,decimalPlaces:Te,thousandsSeparator:Me,allowNegatives:Ee,...Y}=e;return{workingInput:{...Y,ref:a,role:"spinbutton",type:"text",id:e.id,disabled:e.disabled,required:e.required,"aria-labelledby":e["aria-labelledby"],"aria-describedby":e["aria-describedby"],"aria-errormessage":e["aria-errormessage"],"aria-invalid":e["aria-invalid"]??!!e.error,onChange:u=>W(u.target.value),onKeyDown:j,onFocus:u=>{!s&&!i&&g(!0),e.onFocus?.(u)},onBlur:u=>{i&&g(!1),e.onBlur?.(u)},onMouseDown:u=>{!s&&o(!0),e.onMouseDown?.(u)},onMouseUp:u=>{s&&o(!1),!i&&g(!0),e.onMouseUp?.(u)},value:void 0,defaultValue:void 0},placeholderInput:{ref:t,type:"text",value:m.placeholderValue,onChange:()=>{},disabled:e.disabled},hiddenInput:{ref:n,type:"number",onChange:e.onChange,defaultValue:m.numerishValue}}}function p(e){const a=ne({label:e.label,hint:e.hint,error:e.error,controlledId:e.id,controlledAriaLabelledBy:e["aria-labelledby"],controlledAriaDescribedBy:e["aria-describedby"],controlledAriaErrorMessage:e["aria-errormessage"]}),{workingInput:t,placeholderInput:n,hiddenInput:r}=de({...e,id:a.id,"aria-labelledby":a.ariaLabelledBy,"aria-describedby":a.ariaDescribedBy,"aria-errormessage":a.ariaErrorMessage}),s=l.useRef(null),o=te(s);re(t.ref,n.ref);const i=ae(e.sizer),g=Q({sizer:i,hasError:!!e.error}),c=se({sizer:i,hasError:!!e.error,hasSpacingApplied:!!o});return l.createElement(J,{className:e.className,sizer:e.sizer,label:e.label,labelId:a.ariaLabelledBy,controlId:a.id,hint:e.hint,hintId:a.ariaDescribedBy,error:e.error!==!0?e.error:void 0,errorId:a.ariaErrorMessage,disabled:e.disabled,required:e.required},l.createElement("div",{className:c.visibleInputsContainer()},l.createElement("input",{...n,className:N(g,c.placeholderInput()),style:{paddingLeft:o?.width},tabIndex:-1,"aria-hidden":!0}),l.createElement("input",{...t,className:N(g,c.workingInput()),style:{paddingLeft:o?.width},placeholder:" "}),l.createElement("div",{ref:s,className:c.currencySymbol()},e.currencySymbol===void 0?"$":e.currencySymbol)),l.createElement("input",{...r,className:c.hiddenInput(),tabIndex:-1,"aria-hidden":!0}))}p.__docgenInfo={description:`A form control that allows users to enter a monetary amount
@param props {@link MoneyProps}`,methods:[],displayName:"Money",props:{onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Called when the value of the Text changes"},value:{required:!1,tsType:{name:"string"},description:`Sets the value of the Text when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"string"},description:"Sets the value of the Text when using it as an uncontrolled component"},currencySymbol:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Option to change the currency symbol shown at the front of the input"},decimalPoint:{required:!1,tsType:{name:"string"},description:`The character to use to separate the whole part from the decimal part,
typically "."`},thousandsSeparator:{required:!1,tsType:{name:"string"},description:`The character to use to separate every three digits in the whole part,
typically ","`},decimalPlaces:{required:!1,tsType:{name:"number"},description:`Controls how many decimal places the user is allowed to add, and how many
will always be included on the value emitted via the onChange handler.
Typically 2.`},allowNegatives:{required:!1,tsType:{name:"boolean"},description:"Set to `true` if you want to allow the user to enter negative values"},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"union",raw:"SizerType | SizerType[]",elements:[{name:"union",raw:`| 'xs'
| 'sm'
| 'base'
| 'lg'
| 'xl'
| 'sm:xs'
| 'sm:sm'
| 'sm:base'
| 'sm:lg'
| 'sm:xl'
| 'md:xs'
| 'md:sm'
| 'md:base'
| 'md:lg'
| 'md:xl'
| 'lg:xs'
| 'lg:sm'
| 'lg:base'
| 'lg:lg'
| 'lg:xl'
| 'xl:xs'
| 'xl:sm'
| 'xl:base'
| 'xl:lg'
| 'xl:xl'`,elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'sm:xs'"},{name:"literal",value:"'sm:sm'"},{name:"literal",value:"'sm:base'"},{name:"literal",value:"'sm:lg'"},{name:"literal",value:"'sm:xl'"},{name:"literal",value:"'md:xs'"},{name:"literal",value:"'md:sm'"},{name:"literal",value:"'md:base'"},{name:"literal",value:"'md:lg'"},{name:"literal",value:"'md:xl'"},{name:"literal",value:"'lg:xs'"},{name:"literal",value:"'lg:sm'"},{name:"literal",value:"'lg:base'"},{name:"literal",value:"'lg:lg'"},{name:"literal",value:"'lg:xl'"},{name:"literal",value:"'xl:xs'"},{name:"literal",value:"'xl:sm'"},{name:"literal",value:"'xl:base'"},{name:"literal",value:"'xl:lg'"},{name:"literal",value:"'xl:xl'"}]},{name:"Array",elements:[{name:"union",raw:`| 'xs'
| 'sm'
| 'base'
| 'lg'
| 'xl'
| 'sm:xs'
| 'sm:sm'
| 'sm:base'
| 'sm:lg'
| 'sm:xl'
| 'md:xs'
| 'md:sm'
| 'md:base'
| 'md:lg'
| 'md:xl'
| 'lg:xs'
| 'lg:sm'
| 'lg:base'
| 'lg:lg'
| 'lg:xl'
| 'xl:xs'
| 'xl:sm'
| 'xl:base'
| 'xl:lg'
| 'xl:xl'`,elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'sm:xs'"},{name:"literal",value:"'sm:sm'"},{name:"literal",value:"'sm:base'"},{name:"literal",value:"'sm:lg'"},{name:"literal",value:"'sm:xl'"},{name:"literal",value:"'md:xs'"},{name:"literal",value:"'md:sm'"},{name:"literal",value:"'md:base'"},{name:"literal",value:"'md:lg'"},{name:"literal",value:"'md:xl'"},{name:"literal",value:"'lg:xs'"},{name:"literal",value:"'lg:sm'"},{name:"literal",value:"'lg:base'"},{name:"literal",value:"'lg:lg'"},{name:"literal",value:"'lg:xl'"},{name:"literal",value:"'xl:xs'"},{name:"literal",value:"'xl:sm'"},{name:"literal",value:"'xl:base'"},{name:"literal",value:"'xl:lg'"},{name:"literal",value:"'xl:xl'"}]}],raw:"SizerType[]"}]},description:`Changes the size of the field ("xs", "sm", "base", "lg", "xl", "sm:base",
"lg:xl", etc)`},label:{required:!1,tsType:{name:"ReactNode"},description:"The main label to show above the form control, naming the field"},hint:{required:!1,tsType:{name:"ReactNode"},description:`A hint about what kind of value the control accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};function ge(e){return Object.entries(e).reduce((a,[t,n])=>({...a,[t]:{table:{defaultValue:{summary:n}}}}),{})}const{expect:d,fn:y}=__STORYBOOK_MODULE_TEST__,pe={title:"Form controls/Money",component:p,argTypes:ge({currencySymbol:"$",decimalPoint:".",decimalPlaces:2,thousandsSeparator:",",allowNegatives:!1,disabled:!1,sizer:"base"})};function ye(e){const[a,t]=l.useState(e.value),[n,r]=l.useState(0);return l.createElement(l.Fragment,null,l.createElement(X,{className:"mb-2",data:{count:n,value:a}}),l.createElement(p,{...e,value:a,onChange:s=>{r(n+1),t(s.target.value==="1.23"?"69.69":s.target.value)}}))}function fe(e){const[a,t]=l.useState(e.defaultValue),[n,r]=l.useState(0);return l.createElement(l.Fragment,null,l.createElement(X,{className:"mb-2",data:{count:n,value:a}}),l.createElement(p,{...e,defaultValue:a,onChange:s=>{r(n+1),t(s.target.value==="1.23"?"69.69":s.target.value)}}))}const z={tags:["field-layout"],args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"99.99",onChange:y()}},x={tags:["control-state"],args:{"aria-label":"Empty Money",onChange:y()}},b={tags:["control-state"],render:e=>l.createElement(ye,{...e}),args:{value:"1234.56","aria-label":"Controlled Money",onChange:y()}},v={tags:["control-state"],render:e=>l.createElement(fe,{...e}),args:{defaultValue:"1234.56","aria-label":"Uncontrolled Money",onChange:y()}},V={tags:["control-state"],args:{defaultValue:"1234.56",disabled:!0,"aria-label":"Disabled Money",onChange:y()}},A={tags:["control-state"],args:{defaultValue:"1234.56",currencySymbol:"€",label:"Euros",hint:'Uses "." as the thousands-separator and "," as the decimal point!',thousandsSeparator:".",decimalPoint:",",onChange:y()}},w={tags:["sizer"],args:{sizer:"xs",label:"Xs Money",defaultValue:"1.23",onChange:y()},play:async({canvas:e,step:a})=>{await a("Assert the xs sizer style on both the Money & Field",async()=>{d(e.getByLabelText("Xs Money")).toHaveClass("text-xs"),d(e.getByText("Xs Money")).toHaveClass("text-xs"),d(e.getByText("$")).toHaveClass("text-xs")})}},C={tags:["sizer"],args:{sizer:"sm",label:"Sm Money",defaultValue:"1.23",onChange:y()},play:async({canvas:e,step:a})=>{await a("Assert the sm sizer style on both the Money & Field",async()=>{d(e.getByLabelText("Sm Money")).toHaveClass("text-sm"),d(e.getByText("Sm Money")).toHaveClass("text-sm"),d(e.getByText("$")).toHaveClass("text-sm")})}},S={tags:["sizer"],args:{sizer:"base",label:"Base Money",defaultValue:"1.23",onChange:y()},play:async({canvas:e,step:a})=>{await a("Assert the base sizer style on both the Money & Field",async()=>{d(e.getByLabelText("Base Money")).toHaveClass("text-base"),d(e.getByText("Base Money")).toHaveClass("text-base"),d(e.getByText("$")).toHaveClass("text-base")})}},T={tags:["sizer"],args:{sizer:"lg",label:"Lg Money",defaultValue:"1.23",onChange:y()},play:async({canvas:e,step:a})=>{await a("Assert the lg sizer style on both the Money & Field",async()=>{d(e.getByLabelText("Lg Money")).toHaveClass("text-lg"),d(e.getByText("Lg Money")).toHaveClass("text-lg"),d(e.getByText("$")).toHaveClass("text-lg")})}},M={tags:["sizer"],args:{sizer:"xl",label:"Xl Money",defaultValue:"1.23",onChange:y()},play:async({canvas:e,step:a})=>{await a("Assert the xl sizer style on both the Money & Field",async()=>{d(e.getByLabelText("Xl Money")).toHaveClass("text-xl"),d(e.getByText("Xl Money")).toHaveClass("text-xl"),d(e.getByText("$")).toHaveClass("text-xl")})}},H={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],label:"Responsive Money",defaultValue:"1.23",onChange:y()}},k={tags:["!dev","!test"],render:e=>l.createElement("div",{className:"flex flex-col gap-4"},l.createElement(p,{...x.args}),l.createElement(p,{...b.args}),l.createElement(p,{...v.args}),l.createElement(p,{...V.args}))},P={tags:["!dev","!test"],render:e=>l.createElement(G,{alignBaseline:!0},l.createElement(p,{...w.args}),l.createElement(p,{...C.args}),l.createElement(p,{...S.args}),l.createElement(p,{...T.args}),l.createElement(p,{...M.args}))};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  tags: ['field-layout'],
  args: {
    required: true,
    label: 'A label',
    hint: 'A hint',
    error: 'An error message',
    defaultValue: '99.99',
    onChange: fn()
  }
  //play: async ({ canvas, step }) => {
  //  const input = canvas.getByLabelText('A label*');
  //  const requiredAsterisk = canvas.getByTitle('required');

  //  await step('Assert accessibility of layout elements', async () => {
  //    expect(input).toHaveRole('spinbutton');
  //    expect(input).toHaveAccessibleDescription('A hint');
  //    expect(input).toHaveAccessibleErrorMessage('An error message');
  //    expect(requiredAsterisk).toHaveTextContent('*');
  //  });

  //  await step('Assert the error style', async () => {
  //    expect(input).toHaveClass('border-rose-800');
  //  });
  //},
}`,...z.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    'aria-label': 'Empty Money',
    onChange: fn()
  }
  //  play: async ({ args, canvas, step, userEvent }) => {
  //    const input = canvas.getByLabelText('Empty Text');
  //
  //    await step(
  //      'Assert Text is functional without an initial value',
  //      async () => {
  //        await userEvent.type(input, 'a');
  //        expect(input).toHaveValue('a');
  //        expect(args.onChange).toHaveBeenCalledOnce();
  //      },
  //    );
  //
  //    await step('Reset the value', async () => {
  //      await userEvent.type(input, '{backspace}');
  //      expect(input).toHaveValue('');
  //    });
  //  },
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  render: args => <ControlledMoney {...args} />,
  args: {
    value: '1234.56',
    'aria-label': 'Controlled Money',
    onChange: fn()
  }
  //  play: async ({ args, canvas, step, userEvent }) => {
  //    const input = canvas.getByLabelText('Controlled Text');
  //
  //    await step('Assert \`value\` works', async () => {
  //      expect(input).toHaveValue(args.value);
  //    });
  //
  //    await step(
  //      'Try adding text. \`onChange\` should fire, but the value is controlled, so it shouldn’t change',
  //      async () => {
  //        await userEvent.type(input, 'a');
  //        expect(args.onChange).toHaveBeenCalledOnce();
  //        expect(input).toHaveValue(args.value);
  //      },
  //    );
  //  },
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  render: args => <UncontrolledMoney {...args} />,
  args: {
    defaultValue: '1234.56',
    'aria-label': 'Uncontrolled Money',
    onChange: fn()
  }
  //  play: async ({ args, canvas, step, userEvent }) => {
  //    const input = canvas.getByLabelText('Uncontrolled Text');
  //
  //    await step('Assert \`defaultValue\` works', async () => {
  //      expect(input).toHaveValue(args.defaultValue);
  //    });
  //
  //    await step(
  //      'Typing into the Text should amend the value, since it’s uncontrolled',
  //      async () => {
  //        await userEvent.type(input, 'a');
  //        expect(input).toHaveValue(\`\${args.defaultValue}a\`);
  //        expect(args.onChange).toHaveBeenCalledOnce();
  //      },
  //    );
  //
  //    await step('Reset the value', async () => {
  //      await userEvent.type(input, '{backspace}');
  //      expect(input).toHaveValue(args.defaultValue);
  //    });
  //  },
}`,...v.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    defaultValue: '1234.56',
    disabled: true,
    'aria-label': 'Disabled Money',
    onChange: fn()
  }
  //  play: async ({ args, canvas, step, userEvent }) => {
  //    const input = canvas.getByLabelText('Disabled Text');
  //
  //    await step('Assert disabled state', async () => {
  //      expect(input).toBeDisabled();
  //    });
  //
  //    // Typing should not fire any changes
  //    await step('Typing should have no effect', async () => {
  //      await userEvent.type(input, 'a');
  //      expect(args.onChange).not.toHaveBeenCalled();
  //      expect(input).toHaveValue(args.defaultValue);
  //    });
  //  },
}`,...V.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    defaultValue: '1234.56',
    currencySymbol: '€',
    label: 'Euros',
    hint: 'Uses "." as the thousands-separator and "," as the decimal point!',
    thousandsSeparator: '.',
    decimalPoint: ',',
    onChange: fn()
  }
  //  play: async ({ args, canvas, step, userEvent }) => {
  //    const input = canvas.getByLabelText('Disabled Text');
  //
  //    await step('Assert disabled state', async () => {
  //      expect(input).toBeDisabled();
  //    });
  //
  //    // Typing should not fire any changes
  //    await step('Typing should have no effect', async () => {
  //      await userEvent.type(input, 'a');
  //      expect(args.onChange).not.toHaveBeenCalled();
  //      expect(input).toHaveValue(args.defaultValue);
  //    });
  //  },
}`,...A.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'xs',
    label: 'Xs Money',
    defaultValue: '1.23',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the xs sizer style on both the Money & Field', async () => {
      expect(canvas.getByLabelText('Xs Money')).toHaveClass('text-xs');
      expect(canvas.getByText('Xs Money')).toHaveClass('text-xs');
      expect(canvas.getByText('$')).toHaveClass('text-xs');
    });
  }
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'sm',
    label: 'Sm Money',
    defaultValue: '1.23',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the sm sizer style on both the Money & Field', async () => {
      expect(canvas.getByLabelText('Sm Money')).toHaveClass('text-sm');
      expect(canvas.getByText('Sm Money')).toHaveClass('text-sm');
      expect(canvas.getByText('$')).toHaveClass('text-sm');
    });
  }
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'base',
    label: 'Base Money',
    defaultValue: '1.23',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the base sizer style on both the Money & Field', async () => {
      expect(canvas.getByLabelText('Base Money')).toHaveClass('text-base');
      expect(canvas.getByText('Base Money')).toHaveClass('text-base');
      expect(canvas.getByText('$')).toHaveClass('text-base');
    });
  }
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'lg',
    label: 'Lg Money',
    defaultValue: '1.23',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the lg sizer style on both the Money & Field', async () => {
      expect(canvas.getByLabelText('Lg Money')).toHaveClass('text-lg');
      expect(canvas.getByText('Lg Money')).toHaveClass('text-lg');
      expect(canvas.getByText('$')).toHaveClass('text-lg');
    });
  }
}`,...T.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'xl',
    label: 'Xl Money',
    defaultValue: '1.23',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the xl sizer style on both the Money & Field', async () => {
      expect(canvas.getByLabelText('Xl Money')).toHaveClass('text-xl');
      expect(canvas.getByText('Xl Money')).toHaveClass('text-xl');
      expect(canvas.getByText('$')).toHaveClass('text-xl');
    });
  }
}`,...M.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive Money',
    defaultValue: '1.23',
    onChange: fn()
  }
}`,...H.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Money {...Empty.args} />
      <Money {...Controlled.args} />
      <Money {...Uncontrolled.args} />
      <Money {...Disabled.args} />
    </div>
}`,...k.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper alignBaseline>
      <Money {...Xs.args} />
      <Money {...Sm.args} />
      <Money {...Base.args} />
      <Money {...Lg.args} />
      <Money {...Xl.args} />
    </AllSizersStoryWrapper>
}`,...P.parameters?.docs?.source}}};const he=["FieldLayout","Empty","Controlled","Uncontrolled","Disabled","Euros","Xs","Sm","Base","Lg","Xl","Responsive","AllControlStates","AllSizers"],Re=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:k,AllSizers:P,Base:S,Controlled:b,Disabled:V,Empty:x,Euros:A,FieldLayout:z,Lg:T,Responsive:H,Sm:C,Uncontrolled:v,Xl:M,Xs:w,__namedExportsOrder:he,default:pe},Symbol.toStringTag,{value:"Module"}));export{p as M,Re as S};
