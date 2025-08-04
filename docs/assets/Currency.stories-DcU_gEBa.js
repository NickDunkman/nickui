import{r}from"./iframe-6bS3VKfd.js";import{P as ce}from"./PrettyPrint-BoqpNwiN.js";import{A as ke}from"./AllSizersStoryWrapper-DlSVo7Nl.js";import{a as ze,f as He,u as Ae,c as re}from"./index-D0zaK7i9.js";import{F as De}from"./Field-CQW2xPTI.js";import{t as Fe}from"./styles-nlV7tQ5F.js";import{u as Pe}from"./useElementBounds-DEJf4b9N.js";import{u as Le}from"./useFieldA11yIds-BQ2lBuZb.js";function Re(){const e=r.useRef(null),a=r.useRef(null);return r.useEffect(()=>{const t=e.current,n=a.current;if(t&&n){let l=function(){se(t,n)};return se(t,n),t.addEventListener("scroll",l),()=>{t.removeEventListener("scroll",l)}}},[e,a]),[e,a]}function se(e,a){e&&a&&a.scroll(e.scrollLeft,e.scrollTop)}const Ie=ze({slots:{visibleInputsContainer:"relative",placeholderInput:`
      select-none pointer-events-none
      text-gray-400 disabled:text-gray-400 !border-transparent
    `,workingInput:"peer absolute top-0 right-0 left-0 !bg-transparent",hiddenInput:"hidden",currencySymbol:`
      absolute top-0 bottom-0 left-0.5
      flex items-center  
      select-none pointer-events-none
      text-gray-400 peer-disabled:text-gray-400 
      font-medium
    `},variants:{sizer:{xs:{currencySymbol:"text-xs pl-2 pr-1"},sm:{currencySymbol:"text-sm pl-2.25 pr-1.5"},base:{currencySymbol:"text-base pl-3 pr-2"},lg:{currencySymbol:"text-lg pl-4 pr-2"},xl:{currencySymbol:"text-xl pl-4.5 pr-2.5"}},hasError:{true:{currencySymbol:"text-rose-800"}},hasWorkingValue:{true:{}},hasSpacingApplied:{false:{placeholderInput:"text-transparent disabled:text-transparent",workingInput:"text-transparent disabled:text-transparent",currencySymbol:"text-transparent"}}},compoundVariants:[{hasError:!1,hasWorkingValue:!0,class:{currencySymbol:"text-black"}}],defaultVariants:{sizer:"base",hasError:!1,hasValue:!1,hasSpacingApplied:!0}});function W(e,a){let t=e?.toString().replace(/[^0-9.-]/g,"")||"";if(t.indexOf("-")>0||U(t,"-")>1||U(t,".")>1)return"";const n=t.match(/^(-?)0+(([1-9][0-9]*)|0)(\.[0-9]*)?$/);if(n&&(t=(n[1]||"")+(n[2]||"")+(n[4]||"")),t[0]==="."?t=`0${t}`:t.slice(0,2)==="-."&&(t=`-0${t.slice(1)}`),!a?.allowTrailingDecimalPoint&&t[t.length-1]==="."&&(t=t.slice(0,-1)),t&&a.minDecimalPlaces>0){let[l,o]=t.split(".");t=`${l||"0"}.${(o||"").padEnd(a.minDecimalPlaces,"0")}`}if(t&&a.maxDecimalPlaces===0){let[l]=t.split(".");t=l}else{let[l,o]=t.split(".");o&&o.length>a.maxDecimalPlaces&&([l,o]=(Math.round(+`${l}.${o}`*Math.pow(10,a.maxDecimalPlaces))/Math.pow(10,a.maxDecimalPlaces)).toString().split("."),t=`${l}.${(o||"").padEnd(a.maxDecimalPlaces,"0")}`)}return t}function ie(e,a){const t=W(e,a);if(t==="")return"";const[n,l]=t.split("."),o=t.indexOf(".")!==-1,m=3,x=Math.ceil(n.length/m),T=n.length%m||m,O=[n.substring(0,T)];for(var h=0;h<x-1;h++)O.push(n.substring(T+h*m,T+(h+1)*m));return`${O.join(a.thousandsSeparator)}${o?a.decimalPoint:""}${l||""}`}function le(e,a){return e.replaceAll(a.thousandsSeparator,"").replace(a.decimalPoint,".")}function $e(e,a,t){return[a-U(e.workingValue.slice(0,a),e.format.thousandsSeparator)*e.format.thousandsSeparator.length,t-U(e.workingValue.slice(0,t),e.format.thousandsSeparator)*e.format.thousandsSeparator.length]}function U(e,a){return e.split(a).length-1}function Oe(e){const[{currentValue:a,previousValue:t},n]=r.useReducer(qe,e,Ne),l=r.useCallback(m=>{n({type:"updateFromWorkingValue",payload:m})},[n]),o=r.useCallback(m=>{n({type:"updateFromIncrement",payload:m})},[n]);return r.useEffect(()=>{e.format!==a.format&&n({type:"updateFromFormat",payload:e.format})},[e.format,a.format,n]),r.useEffect(()=>{e.controlledValue!==a.controlledValue&&n({type:"updateFromControlledValue",payload:e.controlledValue})},[e.controlledValue,a.controlledValue,n]),{previousValue:t,currentValue:a,updateFromWorkingValue:l,updateFromIncrement:o}}function Ne({controlledValue:e,defaultValue:a,format:t}){const n=e!==void 0?e:a,l=z(n,t);return{currentValue:{version:1,numerishValue:W(n,t),workingValue:l,placeholderValue:H(n,t),controlledValue:e,format:t,source:"initialValue"}}}function _(e,a){return{currentValue:{...e.currentValue,...a,version:e.currentValue?.version+1},previousValue:e?.currentValue}}function qe(e,a){let t;switch(a.type){case"updateFromControlledValue":if(a.payload===e.currentValue.controlledValue)return e;t=W(a.payload,e.currentValue.format);const l=Number(t)!==Number(e.currentValue.numerishValue);return _(e,{numerishValue:t,workingValue:l?z(t,e.currentValue.format):e.currentValue.workingValue,placeholderValue:l?H(t,e.currentValue.format):e.currentValue.placeholderValue,controlledValue:a.payload,source:"controlledValue"});case"updateFromWorkingValue":var n=le(a.payload,e.currentValue.format);return t=W(n,e.currentValue.format),_(e,{numerishValue:t,workingValue:z(n,e.currentValue.format),placeholderValue:H(n,e.currentValue.format),source:"workingValue"});case"updateFromFormat":var n=le(e.currentValue.workingValue,a.payload);return _(e,{workingValue:z(n,a.payload),placeholderValue:H(n,a.payload),format:a.payload,source:"format"});case"updateFromIncrement":t=(Number(e.currentValue.numerishValue)+a.payload).toString();const[o]=t.split("."),[m,x]=e.currentValue.workingValue.split(e.currentValue.format.decimalPoint);return _(e,{numerishValue:t,workingValue:z(`${o}${x!==void 0?e.currentValue.format.decimalPoint:""}${x||""}`,e.currentValue.format),placeholderValue:H(t,e.currentValue.format),source:"increment"})}}function z(e,a){return ie(e,{...a,allowTrailingDecimalPoint:!0,minDecimalPlaces:0})}function H(e,a){return ie(e||"0",{...a,minDecimalPlaces:a.maxDecimalPlaces})}function g({className:e,sizer:a,label:t,hint:n,error:l,required:o,disabled:m,id:x,value:T,defaultValue:O,currencySymbol:h="$",decimalPoint:d=".",decimalPlaces:j=2,thousandsSeparator:me=",",ref:N,onChange:pe,onKeyDown:de,onFocus:ge,onBlur:ye,onMouseDown:xe,onMouseUp:he,"aria-labelledby":fe,"aria-describedby":ve,"aria-errormessage":be,"aria-invalid":J,...Ce}){const q=r.useRef(null),Q=r.useRef(null),K=Pe(Q),[c,Ve]=Re(),[Y,Z]=r.useState(!1),[M,G]=r.useState(!1),we=ue(d,j,""),Se=ue(d,j,me),[E,X]=r.useState({start:0,end:0}),{currentValue:u,previousValue:f,updateFromWorkingValue:Te,updateFromIncrement:ee}=Oe({controlledValue:T,defaultValue:O,format:M?we:Se}),y=Le({label:t,hint:n,error:l,controlledId:x,controlledAriaLabelledBy:fe,controlledAriaDescribedBy:ve,controlledAriaErrorMessage:be});r.useEffect(()=>{if(q.current&&u.numerishValue!==f?.numerishValue&&u.source!=="controlledValue"&&u.source!=="initialValue"){const s=window.HTMLInputElement.prototype,v=Object.getOwnPropertyDescriptor(s,"value").set;if(v){const ne=new Event("input",{bubbles:!0});v.call(q.current,u.numerishValue),q.current.dispatchEvent(ne)}}},[u.numerishValue,f?.numerishValue,u.source]);const Ee=r.useMemo(()=>[...oe,d,"ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ArrowRight","Tab","Enter","Backspace","Delete"],[d]);function Be(s){const k={start:c.current?.selectionStart||0,end:c.current?.selectionEnd||0};if(!s.metaKey){if(!Ee.includes(s.key)&&s.key!==d){s.preventDefault();return}if(s.key===d&&u.workingValue.indexOf(d)!==-1){s.preventDefault();return}if(c.current&&oe.includes(s.key)&&k.start===k.end){const v=u.workingValue.indexOf(d);if(v!==-1&&k.start>v&&u.workingValue.length-(v+1)>=j){s.preventDefault();return}}s.key==="ArrowUp"&&(s.preventDefault(),ee(1)),s.key==="ArrowDown"&&(s.preventDefault(),ee(-1))}X(k),de?.(s)}r.useEffect(()=>{if(c.current&&c.current.value!==u.workingValue&&(c.current.value=u.workingValue,f&&document.activeElement===c.current&&(u.source==="format"&&c.current.setSelectionRange(...$e(f,E.start,E.end)),u.source==="increment"))){const s=u.numerishValue.length-f.numerishValue.length;c.current.setSelectionRange(E.start+s,E.end+s)}},[u,f,E,c]);const ae=Ae(a),te=Fe({sizer:ae,hasError:!!l}),B=Ie({sizer:ae,hasError:!!l,hasWorkingValue:!!u.workingValue,hasSpacingApplied:!!K});return r.createElement(De,{className:e,sizer:a,label:t,labelId:y.ariaLabelledBy,controlId:y.id,hint:n,hintId:y.ariaDescribedBy,error:l!==!0?l:void 0,errorId:y.ariaErrorMessage,disabled:m,required:o},r.createElement("div",{className:B.visibleInputsContainer()},r.createElement("input",{ref:Ve,className:re(te,B.placeholderInput()),value:u.placeholderValue,onChange:()=>{},disabled:m,tabIndex:-1,"aria-hidden":!0,style:{paddingLeft:K?.width}}),r.createElement("input",{role:"spinbutton",...Ce,ref:c,id:y.id,type:"text",className:re(te,B.workingInput()),disabled:m,required:o,"aria-labelledby":y.ariaLabelledBy,"aria-describedby":y.ariaDescribedBy,"aria-errormessage":y.ariaErrorMessage,"aria-invalid":J!==void 0?J:!!l,onChange:s=>Te(s.target.value),onKeyDown:Be,style:{paddingLeft:K?.width},onMouseDown:s=>{Y||Z(!0),xe?.(s)},onMouseUp:s=>{Y&&Z(!1),M||(X({start:c.current?.selectionStart||0,end:c.current?.selectionEnd||0}),G(!0)),he?.(s)},onFocus:s=>{!Y&&!M&&(X({start:c.current?.selectionStart||0,end:c.current?.selectionEnd||0}),G(!0)),ge?.(s)},onBlur:s=>{M&&(G(!1),X({start:0,end:0})),ye?.(s)}}),r.createElement("div",{ref:Q,className:B.currencySymbol()},h)),r.createElement("input",{onChange:pe,ref:s=>{q.current=s,typeof N=="function"?N(s):N&&(N.current=s)},type:"number",className:B.hiddenInput(),"aria-hidden":!0,defaultValue:u.numerishValue}))}const oe=Object.freeze(["0","1","2","3","4","5","6","7","8","9"]),ue=He((e,a,t)=>({decimalPoint:e,minDecimalPlaces:a,maxDecimalPlaces:a,thousandsSeparator:t}));g.__docgenInfo={description:`A form control that allows users to enter & edit a single line of text
@param props {@link CurrencyInputProps} + {@link CurrencyFormatProps} + {@link CommonFieldProps}`,methods:[],displayName:"Currency",props:{onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Called when the value of the Text changes"},value:{required:!1,tsType:{name:"string"},description:`Sets the value of the Text when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"string"},description:"Sets the value of the Text when using it as an uncontrolled component"},currencySymbol:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Option to change the currency symbol shown at the front of the input",defaultValue:{value:"'$'",computed:!1}},decimalPoint:{required:!1,tsType:{name:"string"},description:`The character to use to separate the whole part from the decimal part,
typically "."`,defaultValue:{value:"'.'",computed:!1}},thousandsSeparator:{required:!1,tsType:{name:"string"},description:`The character to use to separate every three digits in the whole part,
typically ","`,defaultValue:{value:"','",computed:!1}},decimalPlaces:{required:!1,tsType:{name:"number"},description:`Controls how many decimal places the user is allowed to add, and how many
will always be included on the value emitted via the onChange handler.
Typically 2.`,defaultValue:{value:"2",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"union",raw:"SizerType | SizerType[]",elements:[{name:"union",raw:`| 'xs'
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
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};const{expect:i,fn:p}=__STORYBOOK_MODULE_TEST__,Me={title:"Form controls/Currency",component:g};function Xe(e){const[a,t]=r.useState(e.value),[n,l]=r.useState(0);return r.createElement(r.Fragment,null,r.createElement(ce,{className:"mb-2",data:{count:n,value:a}}),r.createElement(g,{...e,value:a,onChange:o=>{l(n+1),t(o.target.value==="1.23"?"69.69":o.target.value)}}))}function _e(e){const[a,t]=r.useState(e.defaultValue),[n,l]=r.useState(0);return r.createElement(r.Fragment,null,r.createElement(ce,{className:"mb-2",data:{count:n,value:a}}),r.createElement(g,{...e,defaultValue:a,onChange:o=>{l(n+1),t(o.target.value==="1.23"?"69.69":o.target.value)}}))}const A={tags:["field-layout"],args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"99.99",onChange:p()}},D={tags:["control-state"],args:{"aria-label":"Empty Currency",onChange:p()}},F={tags:["control-state"],render:e=>r.createElement(Xe,{...e}),args:{value:"1234.56","aria-label":"Controlled Currency",onChange:p()}},P={tags:["control-state"],render:e=>r.createElement(_e,{...e}),args:{defaultValue:"1234.56","aria-label":"Uncontrolled Currency",onChange:p()}},L={tags:["control-state"],args:{defaultValue:"1234.56",disabled:!0,"aria-label":"Disabled Currency",onChange:p()}},R={tags:["control-state"],args:{defaultValue:"1234.56",currencySymbol:"€",label:"Euros",hint:'Uses "." as the thousands-separator and "," as the decimal point!',thousandsSeparator:".",decimalPoint:",",onChange:p()}},b={tags:["sizer"],args:{sizer:"xs",label:"Xs Currency",defaultValue:"1.23",onChange:p()},play:async({canvas:e,step:a})=>{await a("Assert the xs sizer style on both the Currency & Field",async()=>{i(e.getByLabelText("Xs Currency")).toHaveClass("text-xs"),i(e.getByText("Xs Currency")).toHaveClass("text-xs"),i(e.getByText("$")).toHaveClass("text-xs")})}},C={tags:["sizer"],args:{sizer:"sm",label:"Sm Currency",defaultValue:"1.23",onChange:p()},play:async({canvas:e,step:a})=>{await a("Assert the sm sizer style on both the Currency & Field",async()=>{i(e.getByLabelText("Sm Currency")).toHaveClass("text-sm"),i(e.getByText("Sm Currency")).toHaveClass("text-sm"),i(e.getByText("$")).toHaveClass("text-sm")})}},V={tags:["sizer"],args:{sizer:"base",label:"Base Currency",defaultValue:"1.23",onChange:p()},play:async({canvas:e,step:a})=>{await a("Assert the base sizer style on both the Currency & Field",async()=>{i(e.getByLabelText("Base Currency")).toHaveClass("text-base"),i(e.getByText("Base Currency")).toHaveClass("text-base"),i(e.getByText("$")).toHaveClass("text-base")})}},w={tags:["sizer"],args:{sizer:"lg",label:"Lg Currency",defaultValue:"1.23",onChange:p()},play:async({canvas:e,step:a})=>{await a("Assert the lg sizer style on both the Currency & Field",async()=>{i(e.getByLabelText("Lg Currency")).toHaveClass("text-lg"),i(e.getByText("Lg Currency")).toHaveClass("text-lg"),i(e.getByText("$")).toHaveClass("text-lg")})}},S={tags:["sizer"],args:{sizer:"xl",label:"Xl Currency",defaultValue:"1.23",onChange:p()},play:async({canvas:e,step:a})=>{await a("Assert the xl sizer style on both the Currency & Field",async()=>{i(e.getByLabelText("Xl Currency")).toHaveClass("text-xl"),i(e.getByText("Xl Currency")).toHaveClass("text-xl"),i(e.getByText("$")).toHaveClass("text-xl")})}},I={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],label:"Responsive Currency",defaultValue:"1.23",onChange:p()}},$={tags:["!dev","!test"],render:e=>r.createElement(ke,{alignBaseline:!0},r.createElement(g,{...b.args}),r.createElement(g,{...C.args}),r.createElement(g,{...V.args}),r.createElement(g,{...w.args}),r.createElement(g,{...S.args}))};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive Currency',
    defaultValue: '1.23',
    onChange: fn()
  }
}`,...I.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper alignBaseline>
      <Currency {...Xs.args} />
      <Currency {...Sm.args} />
      <Currency {...Base.args} />
      <Currency {...Lg.args} />
      <Currency {...Xl.args} />
    </AllSizersStoryWrapper>
}`,...$.parameters?.docs?.source}}};const We=["FieldLayout","Empty","Controlled","Uncontrolled","Disabled","Euros","Xs","Sm","Base","Lg","Xl","Responsive","AllSizers"],ea=Object.freeze(Object.defineProperty({__proto__:null,AllSizers:$,Base:V,Controlled:F,Disabled:L,Empty:D,Euros:R,FieldLayout:A,Lg:w,Responsive:I,Sm:C,Uncontrolled:P,Xl:S,Xs:b,__namedExportsOrder:We,default:Me},Symbol.toStringTag,{value:"Module"}));export{g as C,ea as S};
