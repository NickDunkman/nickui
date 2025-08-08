import{r}from"./iframe-BHWhhQOG.js";import{A as J}from"./AllSizersStoryWrapper-CfMwsrT0.js";import{F as Q}from"./Field-c3JWopii.js";import{t as ee}from"./styles-BuvF1yDB.js";import{r as ae,f as te,u as ne,c as U}from"./index-te24yuVz.js";import{r as se}from"./randomId-Dfhrkieu.js";import{u as le}from"./useElementBounds-B1V0cpp_.js";import{u as re}from"./useFieldA11yIds-CdAkPjIv.js";import{f as oe}from"./fireInputChange-BU1kNzof.js";function ie(e,t){const a=r.useRef(null),n=e||a,s=r.useRef(null),i=t||s;return r.useEffect(()=>{const u=n.current,c=i.current;if(u&&c){let d=function(){$(u,c)};return $(u,c),u.addEventListener("scroll",d),()=>{u.removeEventListener("scroll",d)}}},[n,i]),[n,i]}function $(e,t){e&&t&&t.scroll(e.scrollLeft,e.scrollTop)}const ue=ae({slots:{visibleInputsContainer:"relative",placeholderInput:`
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
    `},variants:{sizer:{xs:{currencySymbol:"text-xs pl-2 pr-1"},sm:{currencySymbol:"text-sm pl-2.25 pr-1.5"},base:{currencySymbol:"text-base pl-3 pr-2"},lg:{currencySymbol:"text-lg pl-4 pr-2"},xl:{currencySymbol:"text-xl pl-4.5 pr-2.5"}},hasSpacingApplied:{false:{placeholderInput:"text-transparent disabled:text-transparent",workingInput:"text-transparent disabled:text-transparent",currencySymbol:"text-transparent"}}},defaultVariants:{sizer:"base",hasValue:!1,hasSpacingApplied:!0}});function ce({allowNegatives:e,decimalPlaces:t,decimalPoint:a}){return r.useCallback(n=>{if(n.metaKey)return!1;if(![..._,a,...e?["-"]:[],"ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ArrowRight","Tab","Enter","Backspace","Delete"].includes(n.key)&&n.key!==a)return!0;const s=n.currentTarget.value,i=n.currentTarget.selectionStart||0,u=(n.currentTarget.selectionEnd||0)!==i;if(n.key===a&&s.indexOf(a)!==-1||n.key==="-"&&(i>0||s.indexOf("-")!==-1))return!0;if(_.includes(n.key)&&!u){const c=s.indexOf(a);if(c!==-1&&i>c&&s.length-(c+1)>=t)return!0}},[e,t,a])}const _=Object.freeze(["0","1","2","3","4","5","6","7","8","9"]);function h(e,t){let a=e?.toString().replace(/[^0-9.-]/g,"")||"";if(a.indexOf("-")>0||P(a,"-")>(t.allowNegatives?1:0)||P(a,".")>1)return"";const n=a.match(/^(-?)0+(([1-9][0-9]*)|0)(\.[0-9]*)?$/);if(n&&(a=(n[1]||"")+(n[2]||"")+(n[4]||"")),a[0]==="."?a=`0${a}`:a.slice(0,2)==="-."&&(a=`-0${a.slice(1)}`),!t?.allowTrailingDecimalPoint&&a[a.length-1]==="."&&(a=a.slice(0,-1)),a&&t.minDecimalPlaces>0){let[s,i]=a.split(".");a=`${s||"0"}.${(i||"").padEnd(t.minDecimalPlaces,"0")}`}if(a&&t.maxDecimalPlaces===0){let[s]=a.split(".");a=s}else{let[s,i]=a.split(".");i&&i.length>t.maxDecimalPlaces&&([s,i]=(Math.round(+`${s}.${i}`*Math.pow(10,t.maxDecimalPlaces))/Math.pow(10,t.maxDecimalPlaces)).toString().split("."),a=`${s}.${(i||"").padEnd(t.maxDecimalPlaces,"0")}`)}return a}function j(e,t){const a=h(e,t);if(a==="")return"";const[n,s]=a.split("."),i=a.indexOf(".")!==-1,u=3,c=Math.ceil(n.length/u),d=n.length%u||u,f=[n.substring(0,d)];for(var m=0;m<c-1;m++)f.push(n.substring(d+m*u,d+(m+1)*u));return`${f.join(t.thousandsSeparator)}${i?t.decimalPoint:""}${s||""}`}function O(e,t){return e.replaceAll(t.thousandsSeparator,"").replace(t.decimalPoint,".")}function de(e,t,a){return[t-P(e.workingValue.slice(0,t),e.format.thousandsSeparator)*e.format.thousandsSeparator.length,a-P(e.workingValue.slice(0,a),e.format.thousandsSeparator)*e.format.thousandsSeparator.length]}function P(e,t){return e.split(t).length-1}const q=te((e,t,a,n,s)=>({currencySymbol:e,decimalPoint:t,minDecimalPlaces:a,maxDecimalPlaces:a,thousandsSeparator:n,allowNegatives:s}));function me(e){return r.useReducer(pe,e,W)}function W({controlledValue:e,defaultValue:t,format:a}){const n=e!==void 0?e:t,s=h(n,a);return{currentValue:{version:1,numerishValue:s,workingValue:s===""?"":v(n,a),placeholderValue:v(n,a),controlledValue:e,format:a,source:"initialValue"}}}function L(e,t){return{currentValue:{...e.currentValue,...t,version:e.currentValue?.version+1},previousValue:e?.currentValue}}function pe(e,t){let a;switch(t.type){case"REINITIALIZE_VALUE":return W({...t.payload,format:e.currentValue.format});case"UPDATE_CONTROLLED_VALUE":if(t.payload===e.currentValue.controlledValue)return e;a=h(t.payload,e.currentValue.format);const s=Number(a)!==Number(e.currentValue.numerishValue)||a===""&&e.currentValue.numerishValue!==""||a!==""&&e.currentValue.numerishValue==="";return L(e,{numerishValue:a,workingValue:s?D(a,e.currentValue.format):e.currentValue.workingValue,placeholderValue:s?v(a,e.currentValue.format):e.currentValue.placeholderValue,controlledValue:t.payload,source:"controlledValue"});case"UPDATE_WORKING_VALUE":var n=O(t.payload,e.currentValue.format);return a=h(n,e.currentValue.format),L(e,{numerishValue:a,workingValue:D(n,e.currentValue.format),placeholderValue:v(n,e.currentValue.format),source:"workingValue"});case"REFORMAT_VALUE":var n=O(e.currentValue.workingValue,e.currentValue.format);return L(e,{workingValue:D(n,t.payload),placeholderValue:v(n,t.payload),format:t.payload,source:"format"});case"INCREMENT_VALUE":if(e.currentValue.numerishValue===""&&t.payload<0?a=h(0,e.currentValue.format):a=h(Math.max(Number(e.currentValue.numerishValue)+t.payload,e.currentValue.format.allowNegatives?-1/0:0),e.currentValue.format),a===e.currentValue.numerishValue)return e;const[i]=a.split(".");let u=a.replace(/^-?[0-9]*/,"");const c=e.currentValue.workingValue.replace(/^-?[0-9]*/,"");return Number(u)===Number(c)&&(u=c),L(e,{numerishValue:a,workingValue:D(`${i}${u}`,e.currentValue.format),placeholderValue:v(a,e.currentValue.format),source:"increment"})}}function D(e,t){return j(e,{...t,allowTrailingDecimalPoint:!0,minDecimalPlaces:0})}function v(e,t){return j(e||"0",{...t,minDecimalPlaces:t.maxDecimalPlaces})}function ge(e){const[{currentValue:t,previousValue:a},n]=me(e),s=r.useCallback(c=>{n({type:"UPDATE_WORKING_VALUE",payload:c})},[n]),i=r.useCallback(c=>{n({type:"INCREMENT_VALUE",payload:c})},[n]),u=r.useCallback(c=>{n({type:"REINITIALIZE_VALUE",payload:c})},[n]);return r.useEffect(()=>{e.format!==t.format&&n({type:"REFORMAT_VALUE",payload:e.format})},[e.format,t.format,n]),r.useEffect(()=>{e.controlledValue!==t.controlledValue&&n({type:"UPDATE_CONTROLLED_VALUE",payload:e.controlledValue})},[e.controlledValue,t.controlledValue,n]),{previousValue:a,currentValue:t,reinitializeValue:u,updateWorkingValue:s,incrementValue:i}}function ye(e){const t=r.useRef(null),a=r.useRef(null),n=r.useRef(null),[s,i]=r.useState(!1),[u,c]=r.useState(!1),d=q(e.currencySymbol??"$",e.decimalPoint??".",e.decimalPlaces??2,e.thousandsSeparator??",",e.allowNegatives||!1),f=q(d.currencySymbol,d.decimalPoint,d.maxDecimalPlaces,"",d.allowNegatives),{currentValue:m,previousValue:y,reinitializeValue:K,updateWorkingValue:X,incrementValue:F}=ge({controlledValue:e.value,defaultValue:e.defaultValue,format:u?f:d});r.useEffect(()=>{m.numerishValue!==y?.numerishValue&&m.source!=="controlledValue"&&m.source!=="initialValue"&&oe(n.current,m.numerishValue)},[m.numerishValue,y?.numerishValue,m.source]),r.useEffect(()=>{if(t.current&&t.current.value!==m.workingValue){const o={start:t.current.selectionStart||0,end:t.current.selectionEnd||0};if(t.current.value=m.workingValue,y&&document.activeElement===t.current&&(m.source==="format"&&t.current.setSelectionRange(...de(y,o.start,o.end)),m.source==="increment")){const I=m.numerishValue.length-y.numerishValue.length;t.current.setSelectionRange(o.start+I,o.end+I)}}},[m,y,t]);const G=ce({allowNegatives:d.allowNegatives,decimalPlaces:d.maxDecimalPlaces,decimalPoint:d.decimalPoint});function Z(o){if(G(o)){o.preventDefault();return}o.key==="ArrowUp"&&(o.preventDefault(),F(o.shiftKey?10:1)),o.key==="ArrowDown"&&(o.preventDefault(),F(o.shiftKey?-10:-1)),e.onKeyDown?.(o)}r.useLayoutEffect(()=>{if(e.value===void 0&&e.defaultValue===void 0){const o=n.current?.value;o!=null&&o!==""&&K({defaultValue:o})}},[]);const{className:xe,sizer:Ve,label:we,hint:Ce,error:Se,currencySymbol:Ee,decimalPoint:Te,decimalPlaces:Ae,thousandsSeparator:He,allowNegatives:Ne,...Y}=e;return{workingInput:{...Y,ref:t,onChange:o=>X(o.target.value),onKeyDown:Z,onFocus:o=>{!s&&!u&&c(!0),e.onFocus?.(o)},onBlur:o=>{u&&c(!1),e.onBlur?.(o)},onMouseDown:o=>{!s&&i(!0),e.onMouseDown?.(o)},onMouseUp:o=>{s&&i(!1),!u&&c(!0),e.onMouseUp?.(o)},value:void 0,defaultValue:void 0,name:void 0},placeholderInput:{ref:a,value:m.placeholderValue,onChange:()=>{}},hiddenInput:{ref:o=>{n.current=o,typeof e.ref=="function"?e.ref(o):e.ref&&(e.ref.current=o)},onChange:e.onChange,defaultValue:m.numerishValue}}}function p(e){const t=re({label:e.label,hint:e.hint,error:e.error,controlledId:e.id,controlledAriaLabelledBy:e["aria-labelledby"],controlledAriaDescribedBy:e["aria-describedby"],controlledAriaErrorMessage:e["aria-errormessage"]}),a=ye(e),n=r.useRef(null),s=le(n),[i]=r.useState(se());ie(a.workingInput.ref,a.placeholderInput.ref);const u=ne(e.sizer),c=ee({sizer:u,hasError:!!e.error}),d=ue({sizer:u,hasSpacingApplied:!!s}),f=e["aria-label"]?t.ariaLabelledBy:`${t.ariaLabelledBy||""} ${i}`;return r.createElement(Q,{className:e.className,sizer:e.sizer,label:e.label,labelId:t.ariaLabelledBy,controlId:t.id,hint:e.hint,hintId:t.ariaDescribedBy,error:e.error!==!0?e.error:void 0,errorId:t.ariaErrorMessage,disabled:e.disabled,required:e.required,"data-nickui-component":"Money"},r.createElement("div",{className:d.visibleInputsContainer()},r.createElement("input",{type:"text",disabled:e.disabled,className:U(c,d.placeholderInput()),style:{paddingLeft:s?.width},tabIndex:-1,"aria-hidden":!0,...a.placeholderInput}),r.createElement("input",{role:"spinbutton",inputMode:e.allowNegatives?"text":(e.decimalPlaces??2)>0?"decimal":"numeric",id:t.id,"aria-labelledby":f,"aria-describedby":t.ariaDescribedBy,"aria-errormessage":t.ariaErrorMessage,"aria-invalid":e["aria-invalid"]??!!e.error,disabled:e.disabled,required:e.required,className:U(c,d.workingInput()),style:{paddingLeft:s?.width},placeholder:" ",...a.workingInput}),r.createElement("div",{ref:n,id:i,className:d.currencySymbol(),"data-testid":"currency-symbol",title:`(in ${e.currencySymbol})`,"aria-hidden":!0},e.currencySymbol===void 0?"$":e.currencySymbol)),r.createElement("input",{type:"number",name:e.name,className:d.hiddenInput(),tabIndex:-1,"aria-hidden":!0,...a.hiddenInput}))}p.__docgenInfo={description:`A form control that allows users to enter a monetary amount
@param props {@link MoneyProps}`,methods:[],displayName:"Money",props:{onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Called when the value of the Text changes"},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Sets the value of the Money when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Sets the value of the Money when using it as an uncontrolled component"},currencySymbol:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:'The currency symbol shown at the front of the input, typically "$"'},decimalPoint:{required:!1,tsType:{name:"string"},description:`The character to use to separate the whole part from the decimal part,
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
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};function fe(e){return Object.entries(e).reduce((t,[a,n])=>({...t,[a]:{table:{defaultValue:{summary:n}}}}),{})}const{expect:l,fn:g}=__STORYBOOK_MODULE_TEST__,he={title:"Form controls/Money",component:p,argTypes:fe({currencySymbol:"$",decimalPoint:".",decimalPlaces:2,thousandsSeparator:",",allowNegatives:!1,disabled:!1,sizer:"base"})},H={tags:["field-layout"],args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"1234567.89",onChange:g()},play:async({canvas:e,step:t})=>{const a=e.getByLabelText("A label*"),n=e.getByTitle("(required)");await t("Assert accessibility of layout elements",async()=>{l(a).toHaveRole("spinbutton"),l(a).toHaveAccessibleName("A label* $"),l(a).toHaveAccessibleDescription("A hint"),l(a).toHaveAccessibleErrorMessage("An error message"),l(n).toHaveTextContent("*")}),await t("Assert default currency formatting",async()=>{l(a).toHaveValue("1,234,567.89"),l(e.getByTestId("currency-symbol")).toHaveTextContent("$")}),await t("Assert the error style",async()=>{l(a).toHaveClass("border-rose-800")})}},b={tags:["control-state"],args:{label:"Empty",onChange:g()},play:async({args:e,canvas:t,step:a,userEvent:n})=>{const s=t.getByLabelText("Empty");await a("Assert Money is functional without an initial value",async()=>{await n.type(s,"1"),l(s).toHaveValue("1"),l(e.onChange).toHaveBeenCalledOnce()}),await a("Reset the value",async()=>{await n.type(s,"{backspace}"),l(s).toHaveValue("")})}},x={tags:["control-state"],args:{label:"Controlled",value:"1234.56",onChange:g()},play:async({args:e,canvas:t,step:a,userEvent:n})=>{const s=t.getByLabelText("Controlled");await a("Assert `value` gets formatted",async()=>{l(s).toHaveValue("1,234.56")}),await a("Try adding text. `onChange` should fire, & <Money> allows the input value to change even when the controlledValue doesn’t update",async()=>{await n.tab(),l(s).toHaveFocus(),await n.type(s,"{backspace}"),l(s).toHaveValue("1234.5"),l(e.onChange).toHaveBeenCalledOnce()}),await a("Reset to initial state",async()=>{await n.type(s,"6"),l(s).toHaveValue("1234.56"),await n.tab(),l(s).not.toHaveFocus()})}},V={tags:["control-state"],args:{label:"Uncontrolled",defaultValue:"1234.56",onChange:g()},play:async({args:e,canvas:t,step:a,userEvent:n})=>{const s=t.getByLabelText("Uncontrolled");await a("Assert `defaultValue` gets formatted",async()=>{l(s).toHaveValue("1,234.56")}),await a("Try adding text. `onChange` should fire, & the <input> value should update",async()=>{await n.tab(),l(s).toHaveFocus(),await n.type(s,"{backspace}"),l(s).toHaveValue("1234.5"),l(e.onChange).toHaveBeenCalledOnce()}),await a("Reset to initial state",async()=>{await n.type(s,"6"),l(s).toHaveValue("1234.56"),await n.tab(),l(s).not.toHaveFocus()})}},w={tags:["control-state"],args:{label:"Disabled",defaultValue:"1234.56",disabled:!0,onChange:g()},play:async({args:e,canvas:t,step:a,userEvent:n})=>{const s=t.getByLabelText("Disabled");await a("Assert disabled state",async()=>{l(s).toBeDisabled(),await n.tab(),l(s).not.toHaveFocus()}),await a("Typing should have no effect",async()=>{await n.type(s,"{backspace}"),l(e.onChange).not.toHaveBeenCalled(),l(s).toHaveValue("1,234.56")})}},N={tags:["control-state"],args:{defaultValue:"1234567.89",currencySymbol:"€",label:"Euros",hint:'Uses "." as the thousands-separator and "," as the decimal point!',thousandsSeparator:".",decimalPoint:",",onChange:g()},play:async({canvas:e,step:t,userEvent:a})=>{const n=e.getByLabelText("Euros");await t("Assert default currency formatting",async()=>{l(n).toHaveValue("1.234.567,89"),l(n).toHaveAccessibleName("Euros €"),l(e.getByTestId("currency-symbol")).toHaveTextContent("€")}),await t("Assert deformatting abides the currency configuration",async()=>{await a.tab(),l(n).toHaveFocus(),await a.type(n,"{backspace}"),l(n).toHaveValue("1234567,8")}),await t("Reset to initial state",async()=>{await a.type(n,"9"),l(n).toHaveValue("1234567,89"),await a.tab(),l(n).not.toHaveFocus()})}};function ve(){const[e,t]=r.useState(),[a,n]=r.useState(1e4);return r.useEffect(()=>{fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json").then(s=>s.json()).then(s=>{t({btc:s.usd.btc,eur:s.usd.eur})})},[]),e?r.createElement("div",{className:"flex flex-col gap-3 sm:flex-row"},r.createElement(p,{className:"sm:flex-1",label:"US Dollars",value:a,onChange:s=>n(s.target.value===""?void 0:Number(s.target.value))}),r.createElement(p,{className:"sm:flex-1",label:"Euros",value:a===void 0?void 0:Number(a)*e.eur,onChange:s=>n(s.target.value===""?void 0:Number(s.target.value)/e.eur),currencySymbol:"€",decimalPoint:",",thousandsSeparator:"."}),r.createElement(p,{className:"sm:flex-1",label:"Bitcoin",value:a===void 0?void 0:Number(a)*e.btc,onChange:s=>n(s.target.value===""?void 0:Number(s.target.value)/e.btc),decimalPlaces:8,currencySymbol:"₿"})):null}const M={tags:["!dev","!test"],render:e=>r.createElement(ve,null),parameters:{source:`
    function CurrencyConverter() {
      const [usdValue, setUsdValue] = React.useState<number | undefined>(10000);
      const [exchangeRates, setExchangeRates] = React.useState<{
        btc: number;
        eur: number;
      }>();

      React.useEffect(() => {
        fetch(
          'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json',
        )
          .then((response) => response.json())
          .then((data) => {
            setExchangeRates({
              btc: data.usd.btc,
              eur: data.usd.eur,
            });
          });
      }, []);

      if (!exchangeRates) {
        return null;
      }

      return (
        <div className="flex flex-col gap-3 sm:flex-row">
          <Money
            className="sm:flex-1"
            label="US Dollars"
            value={usdValue}
            onChange={(event) =>
              setUsdValue(
                event.target.value === '' ? undefined : Number(event.target.value),
              )
            }
          />
          <Money
            className="sm:flex-1"
            label="Euros"
            currencySymbol="€"
            decimalPoint=","
            thousandsSeparator="."
            value={
              usdValue === undefined
                ? undefined
                : Number(usdValue) * exchangeRates.eur
            }
            onChange={(event) =>
              setUsdValue(
                event.target.value === ''
                  ? undefined
                  : Number(event.target.value) / exchangeRates.eur,
              )
            }
          />
          <Money
            className="sm:flex-1"
            label="Bitcoin"
            currencySymbol="₿"
            decimalPlaces={8}
            value={
              usdValue === undefined
                ? undefined
                : Number(usdValue) * exchangeRates.btc
            }
            onChange={(event) =>
              setUsdValue(
                event.target.value === ''
                  ? undefined
                  : Number(event.target.value) / exchangeRates.btc,
              )
            }
          />
        </div>
      );
    }
    `}},k={tags:["sizer"],args:{label:"Negatives allowed!",defaultValue:"-1234.56",allowNegatives:!0}},C={tags:["sizer"],args:{"aria-label":"Xs Money",sizer:"xs",defaultValue:"1.23",onChange:g()},play:async({canvas:e,step:t})=>{const a=e.getByLabelText("Xs Money"),n=a.closest('[data-nickui-component="Money"]');await t("Assert the xs sizer style on both the Money & Field",async()=>{l(a).toHaveClass("text-xs"),l(n).toHaveAttribute("data-nickui-sizer","xs"),l(e.getByText("$")).toHaveClass("text-xs")})}},S={tags:["sizer"],args:{"aria-label":"Sm Money",sizer:"sm",defaultValue:"1.23",onChange:g()},play:async({canvas:e,step:t})=>{const a=e.getByLabelText("Sm Money"),n=a.closest('[data-nickui-component="Money"]');await t("Assert the sm sizer style on both the Money & Field",async()=>{l(a).toHaveClass("text-sm"),l(n).toHaveAttribute("data-nickui-sizer","sm"),l(e.getByText("$")).toHaveClass("text-sm")})}},E={tags:["sizer"],args:{"aria-label":"Base Money",sizer:"base",defaultValue:"1.23",onChange:g()},play:async({canvas:e,step:t})=>{const a=e.getByLabelText("Base Money"),n=a.closest('[data-nickui-component="Money"]');await t("Assert the base sizer style on both the Money & Field",async()=>{l(a).toHaveClass("text-base"),l(n).toHaveAttribute("data-nickui-sizer","base"),l(e.getByText("$")).toHaveClass("text-base")})}},T={tags:["sizer"],args:{"aria-label":"Lg Money",sizer:"lg",defaultValue:"1.23",onChange:g()},play:async({canvas:e,step:t})=>{const a=e.getByLabelText("Lg Money"),n=a.closest('[data-nickui-component="Money"]');await t("Assert the lg sizer style on both the Money & Field",async()=>{l(a).toHaveClass("text-lg"),l(n).toHaveAttribute("data-nickui-sizer","lg"),l(e.getByText("$")).toHaveClass("text-lg")})}},A={tags:["sizer"],args:{"aria-label":"Xl Money",sizer:"xl",defaultValue:"1.23",onChange:g()},play:async({canvas:e,step:t})=>{const a=e.getByLabelText("Xl Money"),n=a.closest('[data-nickui-component="Money"]');await t("Assert the xl sizer style on both the Money & Field",async()=>{l(a).toHaveClass("text-xl"),l(n).toHaveAttribute("data-nickui-sizer","xl"),l(e.getByText("$")).toHaveClass("text-xl")})}},R={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],label:"Responsive Money",defaultValue:"1.23",onChange:g()}},z={tags:["!dev","!test"],render:e=>r.createElement("div",{className:"flex flex-col gap-3 sm:flex-row"},r.createElement(p,{...b.args,className:"sm:flex-1"}),r.createElement(p,{...x.args,className:"sm:flex-1"}),r.createElement(p,{...V.args,className:"sm:flex-1"}),r.createElement(p,{...w.args,className:"sm:flex-1"}))},B={tags:["!dev","!test"],render:e=>r.createElement(J,{alignBaseline:!0},r.createElement(p,{...C.args,className:"sm:flex-12"}),r.createElement(p,{...S.args,className:"sm:flex-14"}),r.createElement(p,{...E.args,className:"sm:flex-16"}),r.createElement(p,{...T.args,className:"sm:flex-18"}),r.createElement(p,{...A.args,className:"sm:flex-20"}))};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  tags: ['field-layout'],
  args: {
    required: true,
    label: 'A label',
    hint: 'A hint',
    error: 'An error message',
    defaultValue: '1234567.89',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('A label*');
    const requiredAsterisk = canvas.getByTitle('(required)');
    await step('Assert accessibility of layout elements', async () => {
      expect(input).toHaveRole('spinbutton');
      expect(input).toHaveAccessibleName('A label* $');
      expect(input).toHaveAccessibleDescription('A hint');
      expect(input).toHaveAccessibleErrorMessage('An error message');
      expect(requiredAsterisk).toHaveTextContent('*');
    });
    await step('Assert default currency formatting', async () => {
      expect(input).toHaveValue('1,234,567.89');
      expect(canvas.getByTestId('currency-symbol')).toHaveTextContent('$');
    });
    await step('Assert the error style', async () => {
      expect(input).toHaveClass('border-rose-800');
    });
  }
}`,...H.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    label: 'Empty',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const input = canvas.getByLabelText('Empty');
    await step('Assert Money is functional without an initial value', async () => {
      await userEvent.type(input, '1');
      expect(input).toHaveValue('1');
      expect(args.onChange).toHaveBeenCalledOnce();
    });
    await step('Reset the value', async () => {
      await userEvent.type(input, '{backspace}');
      expect(input).toHaveValue('');
    });
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    label: 'Controlled',
    value: '1234.56',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const input = canvas.getByLabelText('Controlled');
    await step('Assert \`value\` gets formatted', async () => {
      expect(input).toHaveValue('1,234.56');
    });
    await step('Try adding text. \`onChange\` should fire, & <Money> allows the input value to change even when the controlledValue doesn’t update', async () => {
      await userEvent.tab();
      expect(input).toHaveFocus();
      await userEvent.type(input, '{backspace}');
      expect(input).toHaveValue('1234.5');
      expect(args.onChange).toHaveBeenCalledOnce();
    });
    await step('Reset to initial state', async () => {
      await userEvent.type(input, '6');
      expect(input).toHaveValue('1234.56');
      await userEvent.tab();
      expect(input).not.toHaveFocus();
    });
  }
}`,...x.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    label: 'Uncontrolled',
    defaultValue: '1234.56',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const input = canvas.getByLabelText('Uncontrolled');
    await step('Assert \`defaultValue\` gets formatted', async () => {
      expect(input).toHaveValue('1,234.56');
    });
    await step('Try adding text. \`onChange\` should fire, & the <input> value should update', async () => {
      await userEvent.tab();
      expect(input).toHaveFocus();
      await userEvent.type(input, '{backspace}');
      expect(input).toHaveValue('1234.5');
      expect(args.onChange).toHaveBeenCalledOnce();
    });
    await step('Reset to initial state', async () => {
      await userEvent.type(input, '6');
      expect(input).toHaveValue('1234.56');
      await userEvent.tab();
      expect(input).not.toHaveFocus();
    });
  }
}`,...V.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    label: 'Disabled',
    defaultValue: '1234.56',
    disabled: true,
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const input = canvas.getByLabelText('Disabled');
    await step('Assert disabled state', async () => {
      expect(input).toBeDisabled();
      await userEvent.tab();
      expect(input).not.toHaveFocus();
    });

    // Typing should not fire any changes
    await step('Typing should have no effect', async () => {
      await userEvent.type(input, '{backspace}');
      expect(args.onChange).not.toHaveBeenCalled();
      expect(input).toHaveValue('1,234.56');
    });
  }
}`,...w.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    defaultValue: '1234567.89',
    currencySymbol: '€',
    label: 'Euros',
    hint: 'Uses "." as the thousands-separator and "," as the decimal point!',
    thousandsSeparator: '.',
    decimalPoint: ',',
    onChange: fn()
  },
  play: async ({
    canvas,
    step,
    userEvent
  }) => {
    const input = canvas.getByLabelText('Euros');
    await step('Assert default currency formatting', async () => {
      expect(input).toHaveValue('1.234.567,89');
      expect(input).toHaveAccessibleName('Euros €');
      expect(canvas.getByTestId('currency-symbol')).toHaveTextContent('€');
    });
    await step('Assert deformatting abides the currency configuration', async () => {
      await userEvent.tab();
      expect(input).toHaveFocus();
      await userEvent.type(input, '{backspace}');
      expect(input).toHaveValue('1234567,8');
    });
    await step('Reset to initial state', async () => {
      await userEvent.type(input, '9');
      expect(input).toHaveValue('1234567,89');
      await userEvent.tab();
      expect(input).not.toHaveFocus();
    });
  }
}`,...N.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <CurrencyConverter />,
  parameters: {
    source: \`
    function CurrencyConverter() {
      const [usdValue, setUsdValue] = React.useState<number | undefined>(10000);
      const [exchangeRates, setExchangeRates] = React.useState<{
        btc: number;
        eur: number;
      }>();

      React.useEffect(() => {
        fetch(
          'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json',
        )
          .then((response) => response.json())
          .then((data) => {
            setExchangeRates({
              btc: data.usd.btc,
              eur: data.usd.eur,
            });
          });
      }, []);

      if (!exchangeRates) {
        return null;
      }

      return (
        <div className="flex flex-col gap-3 sm:flex-row">
          <Money
            className="sm:flex-1"
            label="US Dollars"
            value={usdValue}
            onChange={(event) =>
              setUsdValue(
                event.target.value === '' ? undefined : Number(event.target.value),
              )
            }
          />
          <Money
            className="sm:flex-1"
            label="Euros"
            currencySymbol="€"
            decimalPoint=","
            thousandsSeparator="."
            value={
              usdValue === undefined
                ? undefined
                : Number(usdValue) * exchangeRates.eur
            }
            onChange={(event) =>
              setUsdValue(
                event.target.value === ''
                  ? undefined
                  : Number(event.target.value) / exchangeRates.eur,
              )
            }
          />
          <Money
            className="sm:flex-1"
            label="Bitcoin"
            currencySymbol="₿"
            decimalPlaces={8}
            value={
              usdValue === undefined
                ? undefined
                : Number(usdValue) * exchangeRates.btc
            }
            onChange={(event) =>
              setUsdValue(
                event.target.value === ''
                  ? undefined
                  : Number(event.target.value) / exchangeRates.btc,
              )
            }
          />
        </div>
      );
    }
    \`
  }
}`,...M.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    label: 'Negatives allowed!',
    defaultValue: '-1234.56',
    allowNegatives: true
  }
}`,...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Xs Money',
    sizer: 'xs',
    defaultValue: '1.23',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('Xs Money');
    const field = input.closest('[data-nickui-component="Money"]');
    await step('Assert the xs sizer style on both the Money & Field', async () => {
      expect(input).toHaveClass('text-xs');
      expect(field).toHaveAttribute('data-nickui-sizer', 'xs');
      expect(canvas.getByText('$')).toHaveClass('text-xs');
    });
  }
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Sm Money',
    sizer: 'sm',
    defaultValue: '1.23',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('Sm Money');
    const field = input.closest('[data-nickui-component="Money"]');
    await step('Assert the sm sizer style on both the Money & Field', async () => {
      expect(input).toHaveClass('text-sm');
      expect(field).toHaveAttribute('data-nickui-sizer', 'sm');
      expect(canvas.getByText('$')).toHaveClass('text-sm');
    });
  }
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Base Money',
    sizer: 'base',
    defaultValue: '1.23',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('Base Money');
    const field = input.closest('[data-nickui-component="Money"]');
    await step('Assert the base sizer style on both the Money & Field', async () => {
      expect(input).toHaveClass('text-base');
      expect(field).toHaveAttribute('data-nickui-sizer', 'base');
      expect(canvas.getByText('$')).toHaveClass('text-base');
    });
  }
}`,...E.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Lg Money',
    sizer: 'lg',
    defaultValue: '1.23',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('Lg Money');
    const field = input.closest('[data-nickui-component="Money"]');
    await step('Assert the lg sizer style on both the Money & Field', async () => {
      expect(input).toHaveClass('text-lg');
      expect(field).toHaveAttribute('data-nickui-sizer', 'lg');
      expect(canvas.getByText('$')).toHaveClass('text-lg');
    });
  }
}`,...T.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Xl Money',
    sizer: 'xl',
    defaultValue: '1.23',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('Xl Money');
    const field = input.closest('[data-nickui-component="Money"]');
    await step('Assert the xl sizer style on both the Money & Field', async () => {
      expect(input).toHaveClass('text-xl');
      expect(field).toHaveAttribute('data-nickui-sizer', 'xl');
      expect(canvas.getByText('$')).toHaveClass('text-xl');
    });
  }
}`,...A.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive Money',
    defaultValue: '1.23',
    onChange: fn()
  }
}`,...R.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-3 sm:flex-row">
      <Money {...empty.args} className="sm:flex-1" />
      <Money {...controlled.args} className="sm:flex-1" />
      <Money {...uncontrolled.args} className="sm:flex-1" />
      <Money {...disabled.args} className="sm:flex-1" />
    </div>
}`,...z.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper alignBaseline>
      <Money {...xs.args} className="sm:flex-12" />
      <Money {...sm.args} className="sm:flex-14" />
      <Money {...base.args} className="sm:flex-16" />
      <Money {...lg.args} className="sm:flex-18" />
      <Money {...xl.args} className="sm:flex-20" />
    </AllSizersStoryWrapper>
}`,...B.parameters?.docs?.source}}};const be=["fieldLayout","empty","controlled","uncontrolled","disabled","euros","currencyConverter","allowNegatives","xs","sm","base","lg","xl","responsive","allControlStates","allSizers"],Fe=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:be,allControlStates:z,allSizers:B,allowNegatives:k,base:E,controlled:x,currencyConverter:M,default:he,disabled:w,empty:b,euros:N,fieldLayout:H,lg:T,responsive:R,sm:S,uncontrolled:V,xl:A,xs:C},Symbol.toStringTag,{value:"Module"}));export{p as M,k as a,M as c,Fe as s};
