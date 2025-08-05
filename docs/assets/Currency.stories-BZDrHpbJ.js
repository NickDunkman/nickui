import{r}from"./iframe-CRdPcmem.js";import{P as X}from"./PrettyPrint-hrU16Ghp.js";import{A as Y}from"./AllSizersStoryWrapper-CUiWJUA0.js";import{F as G}from"./Field-DxV5BMRv.js";import{t as J}from"./styles-DWWzgnIR.js";import{a as Q,f as Z,u as ee,c as N}from"./index-CPo7Iu7v.js";import{u as ae}from"./useElementBounds-CVUH-xQG.js";import{u as te}from"./useFieldA11yIds-BRRRgCQA.js";import{f as ne}from"./fireInputChange-BU1kNzof.js";function re(e,a){const t=r.useRef(null),n=e||t,l=r.useRef(null),s=a||l;return r.useEffect(()=>{const o=n.current,c=s.current;if(o&&c){let g=function(){$(o,c)};return $(o,c),o.addEventListener("scroll",g),()=>{o.removeEventListener("scroll",g)}}},[n,s]),[n,s]}function $(e,a){e&&a&&a.scroll(e.scrollLeft,e.scrollTop)}const le=Q({slots:{visibleInputsContainer:"relative",placeholderInput:`
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
    `},variants:{sizer:{xs:{currencySymbol:"text-xs pl-2 pr-1"},sm:{currencySymbol:"text-sm pl-2.25 pr-1.5"},base:{currencySymbol:"text-base pl-3 pr-2"},lg:{currencySymbol:"text-lg pl-4 pr-2"},xl:{currencySymbol:"text-xl pl-4.5 pr-2.5"}},hasError:{true:{currencySymbol:"text-rose-800 peer-placeholder-shown:text-rose-800"}},hasSpacingApplied:{false:{placeholderInput:"text-transparent disabled:text-transparent",workingInput:"text-transparent disabled:text-transparent",currencySymbol:"text-transparent"}}},defaultVariants:{sizer:"base",hasError:!1,hasValue:!1,hasSpacingApplied:!0}});function se({allowNegatives:e,decimalPlaces:a,decimalPoint:t}){return r.useCallback(n=>{if(n.metaKey)return!1;if(![...q,t,...e?["-"]:[],"ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ArrowRight","Tab","Enter","Backspace","Delete"].includes(n.key)&&n.key!==t)return!0;const l=n.currentTarget.value,s=n.currentTarget.selectionStart||0,o=(n.currentTarget.selectionEnd||0)!==s;if(n.key===t&&l.indexOf(t)!==-1||n.key==="-"&&(s>0||l.indexOf("-")!==-1))return!0;if(q.includes(n.key)&&!o){const c=l.indexOf(t);if(c!==-1&&s>c&&l.length-(c+1)>=a)return!0}},[e,a,t])}const q=Object.freeze(["0","1","2","3","4","5","6","7","8","9"]);function D(e,a){let t=e?.toString().replace(/[^0-9.-]/g,"")||"";if(t.indexOf("-")>0||L(t,"-")>(a.allowNegatives?1:0)||L(t,".")>1)return"";const n=t.match(/^(-?)0+(([1-9][0-9]*)|0)(\.[0-9]*)?$/);if(n&&(t=(n[1]||"")+(n[2]||"")+(n[4]||"")),t[0]==="."?t=`0${t}`:t.slice(0,2)==="-."&&(t=`-0${t.slice(1)}`),!a?.allowTrailingDecimalPoint&&t[t.length-1]==="."&&(t=t.slice(0,-1)),t&&a.minDecimalPlaces>0){let[l,s]=t.split(".");t=`${l||"0"}.${(s||"").padEnd(a.minDecimalPlaces,"0")}`}if(t&&a.maxDecimalPlaces===0){let[l]=t.split(".");t=l}else{let[l,s]=t.split(".");s&&s.length>a.maxDecimalPlaces&&([l,s]=(Math.round(+`${l}.${s}`*Math.pow(10,a.maxDecimalPlaces))/Math.pow(10,a.maxDecimalPlaces)).toString().split("."),t=`${l}.${(s||"").padEnd(a.maxDecimalPlaces,"0")}`)}return t}function _(e,a){const t=D(e,a);if(t==="")return"";const[n,l]=t.split("."),s=t.indexOf(".")!==-1,o=3,c=Math.ceil(n.length/o),g=n.length%o||o,i=[n.substring(0,g)];for(var h=0;h<c-1;h++)i.push(n.substring(g+h*o,g+(h+1)*o));return`${i.join(a.thousandsSeparator)}${s?a.decimalPoint:""}${l||""}`}function M(e,a){return e.replaceAll(a.thousandsSeparator,"").replace(a.decimalPoint,".")}function oe(e,a,t){return[a-L(e.workingValue.slice(0,a),e.format.thousandsSeparator)*e.format.thousandsSeparator.length,t-L(e.workingValue.slice(0,t),e.format.thousandsSeparator)*e.format.thousandsSeparator.length]}function L(e,a){return e.split(a).length-1}const O=Z((e,a,t,n)=>({decimalPoint:e,minDecimalPlaces:a,maxDecimalPlaces:a,thousandsSeparator:t,allowNegatives:n}));function ue(e){const[{currentValue:a,previousValue:t},n]=r.useReducer(ie,e,ce),l=r.useCallback(o=>{n({type:"updateFromWorkingValue",payload:o})},[n]),s=r.useCallback(o=>{n({type:"updateFromIncrement",payload:o})},[n]);return r.useEffect(()=>{e.format!==a.format&&n({type:"updateFromFormat",payload:e.format})},[e.format,a.format,n]),r.useEffect(()=>{e.controlledValue!==a.controlledValue&&n({type:"updateFromControlledValue",payload:e.controlledValue})},[e.controlledValue,a.controlledValue,n]),{previousValue:t,currentValue:a,updateFromWorkingValue:l,updateFromIncrement:s}}function ce({controlledValue:e,defaultValue:a,format:t}){const n=e!==void 0?e:a,l=w(n,t);return{currentValue:{version:1,numerishValue:D(n,t),workingValue:l,placeholderValue:S(n,t),controlledValue:e,format:t,source:"initialValue"}}}function F(e,a){return{currentValue:{...e.currentValue,...a,version:e.currentValue?.version+1},previousValue:e?.currentValue}}function ie(e,a){let t;switch(a.type){case"updateFromControlledValue":if(a.payload===e.currentValue.controlledValue)return e;t=D(a.payload,e.currentValue.format);const l=Number(t)!==Number(e.currentValue.numerishValue);return F(e,{numerishValue:t,workingValue:l?w(t,e.currentValue.format):e.currentValue.workingValue,placeholderValue:l?S(t,e.currentValue.format):e.currentValue.placeholderValue,controlledValue:a.payload,source:"controlledValue"});case"updateFromWorkingValue":var n=M(a.payload,e.currentValue.format);return t=D(n,e.currentValue.format),F(e,{numerishValue:t,workingValue:w(n,e.currentValue.format),placeholderValue:S(n,e.currentValue.format),source:"workingValue"});case"updateFromFormat":var n=M(e.currentValue.workingValue,a.payload);return F(e,{workingValue:w(n,a.payload),placeholderValue:S(n,a.payload),format:a.payload,source:"format"});case"updateFromIncrement":if(e.currentValue.numerishValue===""&&a.payload===-1?t=D(0,e.currentValue.format):t=Math.max(Number(e.currentValue.numerishValue)+a.payload,e.currentValue.format.allowNegatives?-1/0:0).toString(),t===e.currentValue.numerishValue)return e;const[s]=t.split("."),[o,c]=e.currentValue.workingValue.split(e.currentValue.format.decimalPoint);return F(e,{numerishValue:t,workingValue:w(`${s}${c!==void 0?e.currentValue.format.decimalPoint:""}${c||""}`,e.currentValue.format),placeholderValue:S(t,e.currentValue.format),source:"increment"})}}function w(e,a){return _(e,{...a,allowTrailingDecimalPoint:!0,minDecimalPlaces:0})}function S(e,a){return _(e||"0",{...a,minDecimalPlaces:a.maxDecimalPlaces})}function de(e){const a=r.useRef(null),t=r.useRef(null),n=r.useRef(null),{ref:l}=e;r.useEffect(()=>{n.current&&l&&(typeof l=="function"?l(n.current):l.current=n.current)},[n,l]);const[s,o]=r.useState(!1),[c,g]=r.useState(!1),i=O(e.decimalPoint??".",e.decimalPlaces??2,e.thousandsSeparator??",",e.allowNegatives||!1),h=O(i.decimalPoint,i.maxDecimalPlaces,"",i.allowNegatives),{currentValue:d,previousValue:x,updateFromWorkingValue:U,updateFromIncrement:I}=ue({controlledValue:e.value,defaultValue:e.defaultValue,format:c?h:i});r.useEffect(()=>{d.numerishValue!==x?.numerishValue&&d.source!=="controlledValue"&&d.source!=="initialValue"&&ne(n.current,d.numerishValue)},[d.numerishValue,x?.numerishValue,d.source]),r.useEffect(()=>{if(a.current&&a.current.value!==d.workingValue){const u={start:a.current.selectionStart||0,end:a.current.selectionEnd||0};if(a.current.value=d.workingValue,x&&document.activeElement===a.current&&(d.source==="format"&&a.current.setSelectionRange(...oe(x,u.start,u.end)),d.source==="increment")){const R=d.numerishValue.length-x.numerishValue.length;a.current.setSelectionRange(u.start+R,u.end+R)}}},[d,x,a]);const W=se({allowNegatives:i.allowNegatives,decimalPlaces:i.maxDecimalPlaces,decimalPoint:i.decimalPoint});function K(u){if(W(u)){u.preventDefault();return}u.key==="ArrowUp"&&(u.preventDefault(),I(u.shiftKey?10:1)),u.key==="ArrowDown"&&(u.preventDefault(),I(u.shiftKey?-10:-1)),e.onKeyDown?.(u)}const{className:he,sizer:xe,label:fe,hint:be,error:ve,currencySymbol:Ce,decimalPoint:Ve,decimalPlaces:we,thousandsSeparator:Se,allowNegatives:Te,...j}=e;return{workingInput:{...j,ref:a,role:"spinbutton",type:"text",id:e.id,disabled:e.disabled,required:e.required,"aria-labelledby":e["aria-labelledby"],"aria-describedby":e["aria-describedby"],"aria-errormessage":e["aria-errormessage"],"aria-invalid":e["aria-invalid"]??!!e.error,onChange:u=>U(u.target.value),onKeyDown:K,onFocus:u=>{!s&&!c&&g(!0),e.onFocus?.(u)},onBlur:u=>{c&&g(!1),e.onBlur?.(u)},onMouseDown:u=>{!s&&o(!0),e.onMouseDown?.(u)},onMouseUp:u=>{s&&o(!1),!c&&g(!0),e.onMouseUp?.(u)}},placeholderInput:{ref:t,type:"text",value:d.placeholderValue,onChange:()=>{},disabled:e.disabled},hiddenInput:{ref:n,type:"number",onChange:e.onChange,defaultValue:d.numerishValue}}}function y(e){const a=te({label:e.label,hint:e.hint,error:e.error,controlledId:e.id,controlledAriaLabelledBy:e["aria-labelledby"],controlledAriaDescribedBy:e["aria-describedby"],controlledAriaErrorMessage:e["aria-errormessage"]}),{workingInput:t,placeholderInput:n,hiddenInput:l}=de({...e,id:a.id,"aria-labelledby":a.ariaLabelledBy,"aria-describedby":a.ariaDescribedBy,"aria-errormessage":a.ariaErrorMessage}),s=r.useRef(null),o=ae(s);re(t.ref,n.ref);const c=ee(e.sizer),g=J({sizer:c,hasError:!!e.error}),i=le({sizer:c,hasError:!!e.error,hasSpacingApplied:!!o});return r.createElement(G,{className:e.className,sizer:e.sizer,label:e.label,labelId:a.ariaLabelledBy,controlId:a.id,hint:e.hint,hintId:a.ariaDescribedBy,error:e.error!==!0?e.error:void 0,errorId:a.ariaErrorMessage,disabled:e.disabled,required:e.required},r.createElement("div",{className:i.visibleInputsContainer()},r.createElement("input",{...n,className:N(g,i.placeholderInput()),style:{paddingLeft:o?.width},tabIndex:-1,"aria-hidden":!0}),r.createElement("input",{...t,className:N(g,i.workingInput()),style:{paddingLeft:o?.width},placeholder:" "}),r.createElement("div",{ref:s,className:i.currencySymbol()},e.currencySymbol===void 0?"$":e.currencySymbol)),r.createElement("input",{...l,className:i.hiddenInput(),tabIndex:-1,"aria-hidden":!0}))}y.__docgenInfo={description:`A form control that allows users to enter & edit a single line of text
@param props {@link CurrencyProps}`,methods:[],displayName:"Currency",props:{onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Called when the value of the Text changes"},value:{required:!1,tsType:{name:"string"},description:`Sets the value of the Text when using it as a
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
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};const{expect:m,fn:p}=__STORYBOOK_MODULE_TEST__,me={title:"Form controls/Currency",component:y};function ge(e){const[a,t]=r.useState(e.value),[n,l]=r.useState(0);return r.createElement(r.Fragment,null,r.createElement(X,{className:"mb-2",data:{count:n,value:a}}),r.createElement(y,{...e,value:a,onChange:s=>{l(n+1),t(s.target.value==="1.23"?"69.69":s.target.value)}}))}function pe(e){const[a,t]=r.useState(e.defaultValue),[n,l]=r.useState(0);return r.createElement(r.Fragment,null,r.createElement(X,{className:"mb-2",data:{count:n,value:a}}),r.createElement(y,{...e,defaultValue:a,onChange:s=>{l(n+1),t(s.target.value==="1.23"?"69.69":s.target.value)}}))}const T={tags:["field-layout"],args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"99.99",onChange:p()}},E={tags:["control-state"],args:{"aria-label":"Empty Currency",onChange:p()}},B={tags:["control-state"],render:e=>r.createElement(ge,{...e}),args:{value:"1234.56","aria-label":"Controlled Currency",onChange:p()}},z={tags:["control-state"],render:e=>r.createElement(pe,{...e}),args:{defaultValue:"1234.56","aria-label":"Uncontrolled Currency",onChange:p()}},H={tags:["control-state"],args:{defaultValue:"1234.56",disabled:!0,"aria-label":"Disabled Currency",onChange:p()}},A={tags:["control-state"],args:{defaultValue:"1234.56",currencySymbol:"€",label:"Euros",hint:'Uses "." as the thousands-separator and "," as the decimal point!',thousandsSeparator:".",decimalPoint:",",onChange:p()}},f={tags:["sizer"],args:{sizer:"xs",label:"Xs Currency",defaultValue:"1.23",onChange:p()},play:async({canvas:e,step:a})=>{await a("Assert the xs sizer style on both the Currency & Field",async()=>{m(e.getByLabelText("Xs Currency")).toHaveClass("text-xs"),m(e.getByText("Xs Currency")).toHaveClass("text-xs"),m(e.getByText("$")).toHaveClass("text-xs")})}},b={tags:["sizer"],args:{sizer:"sm",label:"Sm Currency",defaultValue:"1.23",onChange:p()},play:async({canvas:e,step:a})=>{await a("Assert the sm sizer style on both the Currency & Field",async()=>{m(e.getByLabelText("Sm Currency")).toHaveClass("text-sm"),m(e.getByText("Sm Currency")).toHaveClass("text-sm"),m(e.getByText("$")).toHaveClass("text-sm")})}},v={tags:["sizer"],args:{sizer:"base",label:"Base Currency",defaultValue:"1.23",onChange:p()},play:async({canvas:e,step:a})=>{await a("Assert the base sizer style on both the Currency & Field",async()=>{m(e.getByLabelText("Base Currency")).toHaveClass("text-base"),m(e.getByText("Base Currency")).toHaveClass("text-base"),m(e.getByText("$")).toHaveClass("text-base")})}},C={tags:["sizer"],args:{sizer:"lg",label:"Lg Currency",defaultValue:"1.23",onChange:p()},play:async({canvas:e,step:a})=>{await a("Assert the lg sizer style on both the Currency & Field",async()=>{m(e.getByLabelText("Lg Currency")).toHaveClass("text-lg"),m(e.getByText("Lg Currency")).toHaveClass("text-lg"),m(e.getByText("$")).toHaveClass("text-lg")})}},V={tags:["sizer"],args:{sizer:"xl",label:"Xl Currency",defaultValue:"1.23",onChange:p()},play:async({canvas:e,step:a})=>{await a("Assert the xl sizer style on both the Currency & Field",async()=>{m(e.getByLabelText("Xl Currency")).toHaveClass("text-xl"),m(e.getByText("Xl Currency")).toHaveClass("text-xl"),m(e.getByText("$")).toHaveClass("text-xl")})}},k={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],label:"Responsive Currency",defaultValue:"1.23",onChange:p()}},P={tags:["!dev","!test"],render:e=>r.createElement(Y,{alignBaseline:!0},r.createElement(y,{...f.args}),r.createElement(y,{...b.args}),r.createElement(y,{...v.args}),r.createElement(y,{...C.args}),r.createElement(y,{...V.args}))};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    'aria-label': 'Empty Currency',
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
}`,...E.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  render: args => <ControlledCurrency {...args} />,
  args: {
    value: '1234.56',
    'aria-label': 'Controlled Currency',
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
}`,...B.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  render: args => <UncontrolledCurrency {...args} />,
  args: {
    defaultValue: '1234.56',
    'aria-label': 'Uncontrolled Currency',
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
}`,...z.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    defaultValue: '1234.56',
    disabled: true,
    'aria-label': 'Disabled Currency',
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
}`,...H.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'xs',
    label: 'Xs Currency',
    defaultValue: '1.23',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the xs sizer style on both the Currency & Field', async () => {
      expect(canvas.getByLabelText('Xs Currency')).toHaveClass('text-xs');
      expect(canvas.getByText('Xs Currency')).toHaveClass('text-xs');
      expect(canvas.getByText('$')).toHaveClass('text-xs');
    });
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'sm',
    label: 'Sm Currency',
    defaultValue: '1.23',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the sm sizer style on both the Currency & Field', async () => {
      expect(canvas.getByLabelText('Sm Currency')).toHaveClass('text-sm');
      expect(canvas.getByText('Sm Currency')).toHaveClass('text-sm');
      expect(canvas.getByText('$')).toHaveClass('text-sm');
    });
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'base',
    label: 'Base Currency',
    defaultValue: '1.23',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the base sizer style on both the Currency & Field', async () => {
      expect(canvas.getByLabelText('Base Currency')).toHaveClass('text-base');
      expect(canvas.getByText('Base Currency')).toHaveClass('text-base');
      expect(canvas.getByText('$')).toHaveClass('text-base');
    });
  }
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'lg',
    label: 'Lg Currency',
    defaultValue: '1.23',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the lg sizer style on both the Currency & Field', async () => {
      expect(canvas.getByLabelText('Lg Currency')).toHaveClass('text-lg');
      expect(canvas.getByText('Lg Currency')).toHaveClass('text-lg');
      expect(canvas.getByText('$')).toHaveClass('text-lg');
    });
  }
}`,...C.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'xl',
    label: 'Xl Currency',
    defaultValue: '1.23',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the xl sizer style on both the Currency & Field', async () => {
      expect(canvas.getByLabelText('Xl Currency')).toHaveClass('text-xl');
      expect(canvas.getByText('Xl Currency')).toHaveClass('text-xl');
      expect(canvas.getByText('$')).toHaveClass('text-xl');
    });
  }
}`,...V.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive Currency',
    defaultValue: '1.23',
    onChange: fn()
  }
}`,...k.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper alignBaseline>
      <Currency {...Xs.args} />
      <Currency {...Sm.args} />
      <Currency {...Base.args} />
      <Currency {...Lg.args} />
      <Currency {...Xl.args} />
    </AllSizersStoryWrapper>
}`,...P.parameters?.docs?.source}}};const ye=["FieldLayout","Empty","Controlled","Uncontrolled","Disabled","Euros","Xs","Sm","Base","Lg","Xl","Responsive","AllSizers"],Le=Object.freeze(Object.defineProperty({__proto__:null,AllSizers:P,Base:v,Controlled:B,Disabled:H,Empty:E,Euros:A,FieldLayout:T,Lg:C,Responsive:k,Sm:b,Uncontrolled:z,Xl:V,Xs:f,__namedExportsOrder:ye,default:me},Symbol.toStringTag,{value:"Module"}));export{y as C,Le as S};
