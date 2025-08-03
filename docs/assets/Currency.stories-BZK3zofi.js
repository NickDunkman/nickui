import{r}from"./iframe-BVEIZZKB.js";import{P as ee}from"./PrettyPrint-DQcIIuRT.js";import{A as de}from"./AllSizersStoryWrapper-BjQ0Sxs8.js";import{a as ge,f as ye,u as xe,c as Y}from"./index-CsBYKMqv.js";import{F as he}from"./Field-CxpmW-VA.js";import{t as ve}from"./styles-kT3mZMIh.js";import{u as fe}from"./useElementBounds-BORHfEmo.js";import{u as be}from"./useFieldA11yIds-N6qTjOLW.js";function Ce(){const e=r.useRef(null),a=r.useRef(null);return r.useEffect(()=>{const t=e.current,n=a.current;if(t&&n){let s=function(){G(t,n)};return G(t,n),t.addEventListener("scroll",s),()=>{t.removeEventListener("scroll",s)}}},[e,a]),[e,a]}function G(e,a){e&&a&&a.scroll(e.scrollLeft,e.scrollTop)}const Ve=ge({slots:{visibleInputsContainer:"relative",placeholderInput:`
      select-none pointer-events-none
      text-gray-400 disabled:text-gray-400 !border-transparent
    `,workingInput:"peer absolute top-0 right-0 left-0 !bg-transparent",hiddenInput:"hidden",currencySymbol:`
      absolute top-0 bottom-0 left-0.5
      flex items-center  
      select-none pointer-events-none
      text-gray-400 peer-disabled:text-gray-400 
      font-medium
    `},variants:{sizer:{xs:{currencySymbol:"text-xs pl-2 pr-1"},sm:{currencySymbol:"text-sm pl-2.25 pr-1.5"},base:{currencySymbol:"text-base pl-3 pr-2"},lg:{currencySymbol:"text-lg pl-4 pr-2"},xl:{currencySymbol:"text-xl pl-4.5 pr-2.5"}},hasError:{true:{currencySymbol:"text-rose-800"}},hasWorkingValue:{true:{}},hasSpacingApplied:{false:{placeholderInput:"text-transparent disabled:text-transparent",workingInput:"text-transparent disabled:text-transparent",currencySymbol:"text-transparent"}}},compoundVariants:[{hasError:!1,hasWorkingValue:!0,class:{currencySymbol:"text-black"}}],defaultVariants:{sizer:"base",hasError:!1,hasValue:!1,hasSpacingApplied:!0}});function R(e,a){let t=e?.toString().replace(/[^0-9.-]/g,"")||"";if(t.indexOf("-")>0||J(t,"-")||J(t,"."))return"";const n=t.match(/^(-?)0+(([1-9][0-9]*)|0)(\.[0-9]*)?$/);if(n&&(t=(n[1]||"")+(n[2]||"")+(n[4]||"")),t[0]==="."?t=`0${t}`:t.slice(0,2)==="-."&&(t=`-0${t.slice(1)}`),!a?.allowTrailingDecimalPoint&&t[t.length-1]==="."&&(t=t.slice(0,-1)),t&&a.minDecimalPlaces>0){let[s,l]=t.split(".");t=`${s||"0"}.${(l||"").padEnd(a.minDecimalPlaces,"0")}`}if(t&&a.maxDecimalPlaces===0){let[s]=t.split(".");t=s}else{let[s,l]=t.split(".");l&&l.length>a.maxDecimalPlaces&&([s,l]=(Math.round(+`${s}.${l}`*Math.pow(10,a.maxDecimalPlaces))/Math.pow(10,a.maxDecimalPlaces)).toString().split("."),t=`${s}.${(l||"").padEnd(a.maxDecimalPlaces,"0")}`)}return t}function ae(e,a){const t=R(e,a);if(t==="")return"";const[n,s]=t.split("."),l=t.indexOf(".")!==-1,c=3,O=Math.ceil(n.length/c),V=n.length%c||c,L=[n.substring(0,V)];for(var y=0;y<O-1;y++)L.push(n.substring(V+y*c,V+(y+1)*c));return`${L.join(a.thousandsSeparator)}${l?a.decimalPoint:""}${s||""}`}function Se(e,a){return e.replaceAll(a.thousandsSeparator,"").replace(a.decimalPoint,".")}function J(e,a){const t=e.indexOf(a);return t===-1?!1:e.indexOf(a,t+1)!==-1}function we(e){const[{currentState:a,previousState:t},n]=r.useReducer(Ee,e,Te),s=r.useCallback(c=>{n({type:"updateFromControlledValue",payload:c})},[n]),l=r.useCallback(c=>{n({type:"updateFromWorkingValue",payload:c})},[n]);return r.useEffect(()=>{e.controlledValue!==a.controlledValue&&s(e.controlledValue)},[e.controlledValue,a.controlledValue,s]),{previousState:t,currentState:a,updateFromControlledValue:s,updateFromWorkingValue:l}}function Te({controlledValue:e,defaultValue:a,format:t}){const n=e!==void 0?e:a,s={version:1,numerishValue:R(n,t),workingValue:N(n,t),placeholderValue:X(n,t),controlledValue:e,format:t,source:"initialValue"};return{currentState:s,history:[s]}}function Q(e,a){const t={...e.currentState,...a,version:e.currentState?.version+1};return{currentState:t,previousState:e?.currentState,history:[...e?.history||[],t]}}function Ee(e,a){let t;switch(a.type){case"updateFromControlledValue":if(a.payload===e.currentState.controlledValue)return e;t=R(a.payload,e.currentState.format);const n=Number(t)!==Number(e.currentState.numerishValue);return Q(e,{numerishValue:t,workingValue:n?N(t,e.currentState.format):e.currentState.workingValue,placeholderValue:n?X(t,e.currentState.format):e.currentState.placeholderValue,controlledValue:a.payload,source:"controlledValue"});case"updateFromWorkingValue":const s=Se(a.payload,e.currentState.format);return t=R(s,e.currentState.format),Q(e,{numerishValue:t,workingValue:N(s,e.currentState.format),placeholderValue:X(s,e.currentState.format),source:"workingValue"})}}function N(e,a){return ae(e,{...a,allowTrailingDecimalPoint:!0,minDecimalPlaces:0})}function X(e,a){return ae(e||"0",{...a,minDecimalPlaces:a.maxDecimalPlaces})}function p({className:e,sizer:a,label:t,hint:n,error:s,required:l,disabled:c,id:O,value:V,defaultValue:L,currencySymbol:y="$",decimalPoint:d=".",decimalPlaces:I=2,thousandsSeparator:te=",",ref:P,onChange:ne,onKeyDown:re,"aria-labelledby":se,"aria-describedby":le,"aria-errormessage":oe,"aria-invalid":W,...ue}){const D=r.useRef(null),_=r.useRef(null),$=fe(_),[F,ce]=Ce(),{currentState:i,previousState:M,updateFromWorkingValue:ie}=we({controlledValue:V,defaultValue:L,format:Be(d,I,I,te)}),g=be({label:t,hint:n,error:s,controlledId:O,controlledAriaLabelledBy:se,controlledAriaDescribedBy:le,controlledAriaErrorMessage:oe});r.useEffect(()=>{if(D.current&&i.numerishValue!==M?.numerishValue&&i.source!=="controlledValue"&&i.source!=="initialValue"){const o=window.HTMLInputElement.prototype,x=Object.getOwnPropertyDescriptor(o,"value").set;if(x){const K=new Event("input",{bubbles:!0});x.call(D.current,i.numerishValue),D.current.dispatchEvent(K)}}},[i.numerishValue,M?.numerishValue,i.source]);const me=r.useMemo(()=>[...Z,d,"ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ArrowRight","Tab","Enter","Backspace","Delete"],[d]);function pe(o){if(!o.metaKey){if(!me.includes(o.key)&&o.key!==d){o.preventDefault();return}if(o.key===d&&i.workingValue.indexOf(d)!==-1){o.preventDefault();return}if(F.current&&Z.includes(o.key)){const q=F.current.selectionStart||0;if(q===(F.current.selectionEnd||0)){const x=i.workingValue.indexOf(d);if(x!==-1&&q>x&&i.workingValue.length-(x+1)>=I){o.preventDefault();return}}}}re?.(o)}const U=xe(a),j=ve({sizer:U,hasError:!!s}),S=Ve({sizer:U,hasError:!!s,hasWorkingValue:!!i.workingValue,hasSpacingApplied:!!$});return r.createElement(he,{className:e,sizer:a,label:t,labelId:g.ariaLabelledBy,controlId:g.id,hint:n,hintId:g.ariaDescribedBy,error:s!==!0?s:void 0,errorId:g.ariaErrorMessage,disabled:c,required:l},r.createElement("div",{className:S.visibleInputsContainer()},r.createElement("input",{ref:ce,className:Y(j,S.placeholderInput()),value:i.placeholderValue,onChange:()=>{},disabled:c,tabIndex:-1,"aria-hidden":!0,style:{paddingLeft:$?.width}}),r.createElement("input",{role:"spinbutton",...ue,ref:F,id:g.id,type:"text",className:Y(j,S.workingInput()),disabled:c,required:l,value:i.workingValue,"aria-labelledby":g.ariaLabelledBy,"aria-describedby":g.ariaDescribedBy,"aria-errormessage":g.ariaErrorMessage,"aria-invalid":W!==void 0?W:!!s,onChange:o=>ie(o.target.value),onKeyDown:pe,style:{paddingLeft:$?.width}}),r.createElement("div",{ref:_,className:S.currencySymbol()},y)),r.createElement("input",{onChange:ne,ref:o=>{D.current=o,typeof P=="function"?P(o):P&&(P.current=o)},type:"number",className:S.hiddenInput(),"aria-hidden":!0,defaultValue:i.numerishValue}))}const Z=Object.freeze(["0","1","2","3","4","5","6","7","8","9"]),Be=ye((e,a,t,n)=>({decimalPoint:e,minDecimalPlaces:a,maxDecimalPlaces:t,thousandsSeparator:n}));p.__docgenInfo={description:`A form control that allows users to enter & edit a single line of text
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
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};const{expect:u,fn:m}=__STORYBOOK_MODULE_TEST__,He={title:"Form controls/Currency",component:p};function ze(e){const[a,t]=r.useState(e.value),[n,s]=r.useState(0);return r.createElement(r.Fragment,null,r.createElement(ee,{className:"mb-2",data:{count:n,value:a}}),r.createElement(p,{...e,value:a,onChange:l=>{s(n+1),t(l.target.value==="1.23"?"69.69":l.target.value)}}))}function ke(e){const[a,t]=r.useState(e.defaultValue),[n,s]=r.useState(0);return r.createElement(r.Fragment,null,r.createElement(ee,{className:"mb-2",data:{count:n,value:a}}),r.createElement(p,{...e,defaultValue:a,onChange:l=>{s(n+1),t(l.target.value==="1.23"?"69.69":l.target.value)}}))}const w={tags:["field-layout"],args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"99.99",onChange:m()}},T={tags:["control-state"],args:{"aria-label":"Empty Currency",onChange:m()}},E={tags:["control-state"],render:e=>r.createElement(ze,{...e}),args:{value:"1234.56","aria-label":"Controlled Currency",onChange:m()}},B={tags:["control-state"],render:e=>r.createElement(ke,{...e}),args:{defaultValue:"1234.56","aria-label":"Uncontrolled Currency",onChange:m()}},H={tags:["control-state"],args:{defaultValue:"1234.56",disabled:!0,"aria-label":"Disabled Currency",onChange:m()}},z={tags:["control-state"],args:{defaultValue:"1234.56",currencySymbol:"€",label:"Euros",hint:'Uses "." as the thousands-separator and "," as the decimal point!',thousandsSeparator:".",decimalPoint:",",onChange:m()}},h={tags:["sizer"],args:{sizer:"xs",label:"Xs Currency",defaultValue:"1.23",onChange:m()},play:async({canvas:e,step:a})=>{await a("Assert the xs sizer style on both the Currency & Field",async()=>{u(e.getByLabelText("Xs Currency")).toHaveClass("text-xs"),u(e.getByText("Xs Currency")).toHaveClass("text-xs"),u(e.getByText("$")).toHaveClass("text-xs")})}},v={tags:["sizer"],args:{sizer:"sm",label:"Sm Currency",defaultValue:"1.23",onChange:m()},play:async({canvas:e,step:a})=>{await a("Assert the sm sizer style on both the Currency & Field",async()=>{u(e.getByLabelText("Sm Currency")).toHaveClass("text-sm"),u(e.getByText("Sm Currency")).toHaveClass("text-sm"),u(e.getByText("$")).toHaveClass("text-sm")})}},f={tags:["sizer"],args:{sizer:"base",label:"Base Currency",defaultValue:"1.23",onChange:m()},play:async({canvas:e,step:a})=>{await a("Assert the base sizer style on both the Currency & Field",async()=>{u(e.getByLabelText("Base Currency")).toHaveClass("text-base"),u(e.getByText("Base Currency")).toHaveClass("text-base"),u(e.getByText("$")).toHaveClass("text-base")})}},b={tags:["sizer"],args:{sizer:"lg",label:"Lg Currency",defaultValue:"1.23",onChange:m()},play:async({canvas:e,step:a})=>{await a("Assert the lg sizer style on both the Currency & Field",async()=>{u(e.getByLabelText("Lg Currency")).toHaveClass("text-lg"),u(e.getByText("Lg Currency")).toHaveClass("text-lg"),u(e.getByText("$")).toHaveClass("text-lg")})}},C={tags:["sizer"],args:{sizer:"xl",label:"Xl Currency",defaultValue:"1.23",onChange:m()},play:async({canvas:e,step:a})=>{await a("Assert the xl sizer style on both the Currency & Field",async()=>{u(e.getByLabelText("Xl Currency")).toHaveClass("text-xl"),u(e.getByText("Xl Currency")).toHaveClass("text-xl"),u(e.getByText("$")).toHaveClass("text-xl")})}},k={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],label:"Responsive Currency",defaultValue:"1.23",onChange:m()}},A={tags:["!dev","!test"],render:e=>r.createElement(de,{alignBaseline:!0},r.createElement(p,{...h.args}),r.createElement(p,{...v.args}),r.createElement(p,{...f.args}),r.createElement(p,{...b.args}),r.createElement(p,{...C.args}))};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive Currency',
    defaultValue: '1.23',
    onChange: fn()
  }
}`,...k.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper alignBaseline>
      <Currency {...Xs.args} />
      <Currency {...Sm.args} />
      <Currency {...Base.args} />
      <Currency {...Lg.args} />
      <Currency {...Xl.args} />
    </AllSizersStoryWrapper>
}`,...A.parameters?.docs?.source}}};const Ae=["FieldLayout","Empty","Controlled","Uncontrolled","Disabled","Euros","Xs","Sm","Base","Lg","Xl","Responsive","AllSizers"],qe=Object.freeze(Object.defineProperty({__proto__:null,AllSizers:A,Base:f,Controlled:E,Disabled:H,Empty:T,Euros:z,FieldLayout:w,Lg:b,Responsive:k,Sm:v,Uncontrolled:B,Xl:C,Xs:h,__namedExportsOrder:Ae,default:He},Symbol.toStringTag,{value:"Module"}));export{p as C,qe as S};
