import{r}from"./iframe-BIe9rtw3.js";import{P as A}from"./PrettyPrint-DGuw_oHe.js";import{a as te,f as ne,u as le,c as F}from"./index-B5YwM-hZ.js";import{F as re}from"./Field-C1f7e3g-.js";import{t as se}from"./styles-cESg3EV6.js";import{u as oe}from"./useFieldA11yIds-CcFzIdLi.js";function ue(){const e=r.useRef(null),t=r.useRef(null);return r.useEffect(()=>{const a=e.current,n=t.current;if(a&&n){let l=function(){L(a,n)};return L(a,n),a.addEventListener("scroll",l),()=>{a.removeEventListener("scroll",l)}}},[e,t]),[e,t]}function L(e,t){e&&t&&t.scroll(e.scrollLeft,e.scrollTop)}const ie=te({slots:{visibleInputsContainer:"relative",placeholderInput:"select-none pointer-events-none text-gray-400 disabled:text-gray-400 !border-transparent",interactiveInput:"peer absolute top-0 right-0 left-0 !bg-transparent",hiddenInput:"hidden",currencySymbol:"absolute scale-140 text-gray-400 peer-disabled:text-gray-400 select-none pointer-events-none"},variants:{sizer:{xs:{},sm:{},base:{placeholderInput:"pl-9",interactiveInput:"pl-9",currencySymbol:"top-3 left-4"},lg:{},xl:{}},hasError:{true:{currencySymbol:"text-rose-800"}},hasWorkingValue:{true:{}}},compoundVariants:[{hasError:!1,hasWorkingValue:!0,class:{currencySymbol:"text-black"}}],defaultVariants:{sizer:"base",hasError:!1,hasValue:!1}});function R(e,t){const a=e.indexOf(t);return a===-1?!1:e.indexOf(t,a+1)!==-1}function w(e,t){let a=e?.toString().replace(/[^0-9.-]/g,"")||"";if(a.indexOf("-")>0||R(a,"-")||R(a,"."))return"";const n=a.match(/^(-?)0+(([1-9][0-9]*)|0)(\.[0-9]*)?$/);if(n&&(a=(n[1]||"")+(n[2]||"")+(n[4]||"")),a[0]==="."?a=`0${a}`:a.slice(0,2)==="-."&&(a=`-0${a.slice(1)}`),!t?.allowTrailingDecimalPoint&&a[a.length-1]==="."&&(a=a.slice(0,-1)),a&&t.minDecimalPlaces>0){let[l,s]=a.split(".");a=`${l||"0"}.${(s||"").padEnd(t.minDecimalPlaces,"0")}`}if(a&&t.maxDecimalPlaces===0){let[l]=a.split(".");a=l}else{let[l,s]=a.split(".");s&&s.length>t.maxDecimalPlaces&&([l,s]=(Math.round(+`${l}.${s}`*Math.pow(10,t.maxDecimalPlaces))/Math.pow(10,t.maxDecimalPlaces)).toString().split("."),a=`${l}.${(s||"").padEnd(t.maxDecimalPlaces,"0")}`)}return a}function ce(e,t){return e.replaceAll(t.thousandsSeparator,"").replace(t.decimalPoint,".")}function N(e,t){return Number(w(e,t).replace(t.decimalPoint,"."))||0}function $(e,t){const a=w(e,t);if(a==="")return"";const[n,l]=a.split("."),s=a.indexOf(".")!==-1,u=3,k=Math.ceil(n.length/u),p=n.length%u||u,C=[n.substring(0,p)];for(var m=0;m<k-1;m++)C.push(n.substring(p+m*u,p+(m+1)*u));return`${C.join(t.thousandsSeparator)}${s?t.decimalPoint:""}${l||""}`}function me(e){const[{currentState:t,previousState:a},n]=r.useReducer(pe,e,de),l=r.useCallback(u=>{n({type:"updateFromControlledValue",payload:u})},[n]),s=r.useCallback(u=>{n({type:"updateFromWorkingValue",payload:u})},[n]);return r.useEffect(()=>{e.controlledValue!==t.controlledValue&&l(e.controlledValue)},[e.controlledValue,t.controlledValue,l]),{previousState:a,currentState:t,updateFromControlledValue:l,updateFromWorkingValue:s}}function de({controlledValue:e,defaultValue:t,format:a}){const n=e!==void 0?e:t,l={version:1,value:w(n,a),workingValue:P(n,a),placeholderValue:D(n,a),controlledValue:e,format:a,source:"initialValue"};return{currentState:l,history:[l]}}function z(e,t){const a={...e.currentState,...t,version:e.currentState?.version+1};return{currentState:a,previousState:e?.currentState,history:[...e?.history||[],a]}}function pe(e,t){let a;switch(t.type){case"updateFromControlledValue":if(t.payload===e.currentState.controlledValue)return e;a=w(t.payload,e.currentState.format);const n=N(a,e.currentState.format)!==N(e.currentState.value,e.currentState.format);return z(e,{value:a,workingValue:n?P(a,e.currentState.format):e.currentState.workingValue,placeholderValue:n?D(a,e.currentState.format):e.currentState.placeholderValue,controlledValue:t.payload,source:"controlledValue"});case"updateFromWorkingValue":const l=ce(t.payload,e.currentState.format);return a=w(l,e.currentState.format),z(e,{value:a,workingValue:P(l,e.currentState.format),placeholderValue:D(l,e.currentState.format),source:"workingValue"})}}function P(e,t){return $(e,{...t,allowTrailingDecimalPoint:!0,minDecimalPlaces:0})}function D(e,t){return $(e,{...t,minDecimalPlaces:t.maxDecimalPlaces})}function T({className:e,sizer:t,label:a,hint:n,error:l,required:s,disabled:u,id:k,value:p,defaultValue:C,currencySymbol:m="$",decimalPoint:g=".",minDecimalPlaces:M=2,maxDecimalPlaces:_=2,thousandsSeparator:W=",",ref:S,onChange:U,onKeyDown:j,"aria-labelledby":K,"aria-describedby":Y,"aria-errormessage":G,"aria-invalid":H,...J}){const E=r.useRef(null),[Q,X]=ue(),{currentState:i,previousState:I,updateFromWorkingValue:Z}=me({controlledValue:p,defaultValue:C,format:ye(g,M,_,W)}),c=oe({label:a,hint:n,error:l,controlledId:k,controlledAriaLabelledBy:K,controlledAriaDescribedBy:Y,controlledAriaErrorMessage:G});r.useEffect(()=>{if(E.current&&i.value!==I?.value&&i.source!=="controlledValue"&&i.source!=="initialValue"){const o=window.HTMLInputElement.prototype,B=Object.getOwnPropertyDescriptor(o,"value").set;if(B){const ae=new Event("input",{bubbles:!0});B.call(E.current,i.value),E.current.dispatchEvent(ae)}}},[i.value,I?.value,i.source]);function ee(o){if(!o.metaKey){if(!ge.includes(o.key)&&o.key!==g){o.preventDefault();return}if(o.key===g&&i.workingValue.indexOf(g)!==-1){o.preventDefault();return}}j?.(o)}const O=le(t),q=se({sizer:O,hasError:!!l}),y=ie({sizer:O,hasError:!!l,hasWorkingValue:!!i.workingValue});return r.createElement(re,{className:e,sizer:t,label:a,labelId:c.ariaLabelledBy,controlId:c.id,hint:n,hintId:c.ariaDescribedBy,error:l!==!0?l:void 0,errorId:c.ariaErrorMessage,disabled:u,required:s},r.createElement(A,{className:"mb-2",data:{currentState:i}}),r.createElement("div",{className:y.visibleInputsContainer()},r.createElement("input",{ref:X,className:F(q,y.placeholderInput()),value:i.placeholderValue,onChange:()=>{},disabled:u,tabIndex:-1,"aria-hidden":!0}),r.createElement("input",{role:"spinbutton",...J,ref:Q,id:c.id,type:"text",className:F(q,y.interactiveInput()),disabled:u,required:s,value:i.workingValue,"aria-labelledby":c.ariaLabelledBy,"aria-describedby":c.ariaDescribedBy,"aria-errormessage":c.ariaErrorMessage,"aria-invalid":H!==void 0?H:!!l,onChange:o=>Z(o.target.value),onKeyDown:ee}),r.createElement("div",{className:y.currencySymbol()},m)),r.createElement("input",{onChange:U,ref:o=>{E.current=o,typeof S=="function"?S(o):S&&(S.current=o)},type:"number",className:y.hiddenInput(),"aria-hidden":!0,defaultValue:i.value}))}const ge=Object.freeze(["0","1","2","3","4","5","6","7","8","9","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ArrowRight","Tab","Enter","Backspace"]),ye=ne((e,t,a,n)=>({decimalPoint:e,minDecimalPlaces:t,maxDecimalPlaces:a,thousandsSeparator:n}));T.__docgenInfo={description:`A form control that allows users to enter & edit a single line of text
@param props {@link CurrencyInputProps} + {@link CurrencyFormatProps} + {@link CommonFieldProps}`,methods:[],displayName:"Currency",props:{onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Called when the value of the Text changes"},value:{required:!1,tsType:{name:"string"},description:`Sets the value of the Text when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"string"},description:"Sets the value of the Text when using it as an uncontrolled component"},currencySymbol:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'$'",computed:!1}},decimalPoint:{required:!1,tsType:{name:"string"},description:`The character to use to separate the whole part from the decimal part,
typically "."`,defaultValue:{value:"'.'",computed:!1}},thousandsSeparator:{required:!1,tsType:{name:"string"},description:`The character to use to separate every three digits in the whole part,
typically ","`,defaultValue:{value:"','",computed:!1}},minDecimalPlaces:{required:!1,tsType:{name:"number"},description:"The minimum number of decimal places to include on the value, typically 2",defaultValue:{value:"2",computed:!1}},maxDecimalPlaces:{required:!1,tsType:{name:"number"},description:"The maximum number of decimal places to include on the value, typically 2",defaultValue:{value:"2",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"union",raw:"SizerType | SizerType[]",elements:[{name:"union",raw:`| 'xs'
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
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};const{fn:d}=__STORYBOOK_MODULE_TEST__,ve={title:"Form controls/Currency",component:T};function fe(e){const[t,a]=r.useState(e.value),[n,l]=r.useState(0);return r.createElement(r.Fragment,null,r.createElement(A,{className:"mb-2",data:{count:n,value:t}}),r.createElement(T,{...e,value:t,onChange:s=>{l(n+1),a(s.target.value==="1.23"?"69.69":s.target.value)}}))}function he(e){const[t,a]=r.useState(e.defaultValue),[n,l]=r.useState(0);return r.createElement(r.Fragment,null,r.createElement(A,{className:"mb-2",data:{count:n,value:t}}),r.createElement(T,{...e,defaultValue:t,onChange:s=>{l(n+1),a(s.target.value==="1.23"?"69.69":s.target.value)}}))}const v={tags:["field-layout"],args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"99.99",onChange:d()}},f={tags:["control-state"],args:{"aria-label":"Empty Currency",onChange:d()}},h={tags:["control-state"],render:e=>r.createElement(fe,{...e}),args:{value:"1234.56","aria-label":"Controlled Currency",onChange:d()}},x={tags:["control-state"],render:e=>r.createElement(he,{...e}),args:{defaultValue:"1234.56","aria-label":"Uncontrolled Currency",onChange:d()}},b={tags:["control-state"],args:{defaultValue:"1234.56",disabled:!0,"aria-label":"Disabled Currency",onChange:d()}},V={tags:["control-state"],args:{defaultValue:"1234.56",currencySymbol:"€","aria-label":"Euros Currency",thousandsSeparator:".",decimalPoint:",",onChange:d()}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    defaultValue: '1234.56',
    currencySymbol: '€',
    'aria-label': 'Euros Currency',
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
}`,...V.parameters?.docs?.source}}};const xe=["FieldLayout","Empty","Controlled","Uncontrolled","Disabled","Euros"],ke=Object.freeze(Object.defineProperty({__proto__:null,Controlled:h,Disabled:b,Empty:f,Euros:V,FieldLayout:v,Uncontrolled:x,__namedExportsOrder:xe,default:ve},Symbol.toStringTag,{value:"Module"}));export{T as C,ke as S};
