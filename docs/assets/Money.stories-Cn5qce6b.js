import{r}from"./iframe-BOhUS0D9.js";import{A as J}from"./AllSizersStoryWrapper-B8yhyoy3.js";import{F as Q}from"./Field-BCFMpcPz.js";import{t as ee}from"./styles-BLS07UrL.js";import{a as ae,f as te,u as ne,c as U}from"./index-DNuRN-av.js";import{r as le}from"./randomId-Dfhrkieu.js";import{u as se}from"./useElementBounds-CxKbftmz.js";import{u as re}from"./useFieldA11yIds-CMM-qVMC.js";import{f as oe}from"./fireInputChange-BU1kNzof.js";function ue(e,a){const t=r.useRef(null),n=e||t,l=r.useRef(null),u=a||l;return r.useEffect(()=>{const c=n.current,i=u.current;if(c&&i){let d=function(){$(c,i)};return $(c,i),c.addEventListener("scroll",d),()=>{c.removeEventListener("scroll",d)}}},[n,u]),[n,u]}function $(e,a){e&&a&&a.scroll(e.scrollLeft,e.scrollTop)}const ce=ae({slots:{visibleInputsContainer:"relative",placeholderInput:`
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
    `},variants:{sizer:{xs:{currencySymbol:"text-xs pl-2 pr-1"},sm:{currencySymbol:"text-sm pl-2.25 pr-1.5"},base:{currencySymbol:"text-base pl-3 pr-2"},lg:{currencySymbol:"text-lg pl-4 pr-2"},xl:{currencySymbol:"text-xl pl-4.5 pr-2.5"}},hasSpacingApplied:{false:{placeholderInput:"text-transparent disabled:text-transparent",workingInput:"text-transparent disabled:text-transparent",currencySymbol:"text-transparent"}}},defaultVariants:{sizer:"base",hasValue:!1,hasSpacingApplied:!0}});function ie({allowNegatives:e,decimalPlaces:a,decimalPoint:t}){return r.useCallback(n=>{if(n.metaKey)return!1;if(![..._,t,...e?["-"]:[],"ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ArrowRight","Tab","Enter","Backspace","Delete"].includes(n.key)&&n.key!==t)return!0;const l=n.currentTarget.value,u=n.currentTarget.selectionStart||0,c=(n.currentTarget.selectionEnd||0)!==u;if(n.key===t&&l.indexOf(t)!==-1||n.key==="-"&&(u>0||l.indexOf("-")!==-1))return!0;if(_.includes(n.key)&&!c){const i=l.indexOf(t);if(i!==-1&&u>i&&l.length-(i+1)>=a)return!0}},[e,a,t])}const _=Object.freeze(["0","1","2","3","4","5","6","7","8","9"]);function h(e,a){let t=e?.toString().replace(/[^0-9.-]/g,"")||"";if(t.indexOf("-")>0||P(t,"-")>(a.allowNegatives?1:0)||P(t,".")>1)return"";const n=t.match(/^(-?)0+(([1-9][0-9]*)|0)(\.[0-9]*)?$/);if(n&&(t=(n[1]||"")+(n[2]||"")+(n[4]||"")),t[0]==="."?t=`0${t}`:t.slice(0,2)==="-."&&(t=`-0${t.slice(1)}`),!a?.allowTrailingDecimalPoint&&t[t.length-1]==="."&&(t=t.slice(0,-1)),t&&a.minDecimalPlaces>0){let[l,u]=t.split(".");t=`${l||"0"}.${(u||"").padEnd(a.minDecimalPlaces,"0")}`}if(t&&a.maxDecimalPlaces===0){let[l]=t.split(".");t=l}else{let[l,u]=t.split(".");u&&u.length>a.maxDecimalPlaces&&([l,u]=(Math.round(+`${l}.${u}`*Math.pow(10,a.maxDecimalPlaces))/Math.pow(10,a.maxDecimalPlaces)).toString().split("."),t=`${l}.${(u||"").padEnd(a.maxDecimalPlaces,"0")}`)}return t}function j(e,a){const t=h(e,a);if(t==="")return"";const[n,l]=t.split("."),u=t.indexOf(".")!==-1,c=3,i=Math.ceil(n.length/c),d=n.length%c||c,f=[n.substring(0,d)];for(var m=0;m<i-1;m++)f.push(n.substring(d+m*c,d+(m+1)*c));return`${f.join(a.thousandsSeparator)}${u?a.decimalPoint:""}${l||""}`}function O(e,a){return e.replaceAll(a.thousandsSeparator,"").replace(a.decimalPoint,".")}function de(e,a,t){return[a-P(e.workingValue.slice(0,a),e.format.thousandsSeparator)*e.format.thousandsSeparator.length,t-P(e.workingValue.slice(0,t),e.format.thousandsSeparator)*e.format.thousandsSeparator.length]}function P(e,a){return e.split(a).length-1}const q=te((e,a,t,n,l)=>({currencySymbol:e,decimalPoint:a,minDecimalPlaces:t,maxDecimalPlaces:t,thousandsSeparator:n,allowNegatives:l}));function me(e){return r.useReducer(ge,e,W)}function W({controlledValue:e,defaultValue:a,format:t}){const n=e!==void 0?e:a,l=h(n,t);return{currentValue:{version:1,numerishValue:l,workingValue:l===""?"":v(n,t),placeholderValue:v(n,t),controlledValue:e,format:t,source:"initialValue"}}}function k(e,a){return{currentValue:{...e.currentValue,...a,version:e.currentValue?.version+1},previousValue:e?.currentValue}}function ge(e,a){let t;switch(a.type){case"REINITIALIZE_VALUE":return W({...a.payload,format:e.currentValue.format});case"UPDATE_CONTROLLED_VALUE":if(a.payload===e.currentValue.controlledValue)return e;t=h(a.payload,e.currentValue.format);const l=Number(t)!==Number(e.currentValue.numerishValue)||t===""&&e.currentValue.numerishValue!==""||t!==""&&e.currentValue.numerishValue==="";return k(e,{numerishValue:t,workingValue:l?D(t,e.currentValue.format):e.currentValue.workingValue,placeholderValue:l?v(t,e.currentValue.format):e.currentValue.placeholderValue,controlledValue:a.payload,source:"controlledValue"});case"UPDATE_WORKING_VALUE":var n=O(a.payload,e.currentValue.format);return t=h(n,e.currentValue.format),k(e,{numerishValue:t,workingValue:D(n,e.currentValue.format),placeholderValue:v(n,e.currentValue.format),source:"workingValue"});case"REFORMAT_VALUE":var n=O(e.currentValue.workingValue,e.currentValue.format);return k(e,{workingValue:D(n,a.payload),placeholderValue:v(n,a.payload),format:a.payload,source:"format"});case"INCREMENT_VALUE":if(e.currentValue.numerishValue===""&&a.payload<0?t=h(0,e.currentValue.format):t=h(Math.max(Number(e.currentValue.numerishValue)+a.payload,e.currentValue.format.allowNegatives?-1/0:0),e.currentValue.format),t===e.currentValue.numerishValue)return e;const[u]=t.split(".");let c=t.replace(/^-?[0-9]*/,"");const i=e.currentValue.workingValue.replace(/^-?[0-9]*/,"");return Number(c)===Number(i)&&(c=i),k(e,{numerishValue:t,workingValue:D(`${u}${c}`,e.currentValue.format),placeholderValue:v(t,e.currentValue.format),source:"increment"})}}function D(e,a){return j(e,{...a,allowTrailingDecimalPoint:!0,minDecimalPlaces:0})}function v(e,a){return j(e||"0",{...a,minDecimalPlaces:a.maxDecimalPlaces})}function ye(e){const[{currentValue:a,previousValue:t},n]=me(e),l=r.useCallback(i=>{n({type:"UPDATE_WORKING_VALUE",payload:i})},[n]),u=r.useCallback(i=>{n({type:"INCREMENT_VALUE",payload:i})},[n]),c=r.useCallback(i=>{n({type:"REINITIALIZE_VALUE",payload:i})},[n]);return r.useEffect(()=>{e.format!==a.format&&n({type:"REFORMAT_VALUE",payload:e.format})},[e.format,a.format,n]),r.useEffect(()=>{e.controlledValue!==a.controlledValue&&n({type:"UPDATE_CONTROLLED_VALUE",payload:e.controlledValue})},[e.controlledValue,a.controlledValue,n]),{previousValue:t,currentValue:a,reinitializeValue:c,updateWorkingValue:l,incrementValue:u}}function pe(e){const a=r.useRef(null),t=r.useRef(null),n=r.useRef(null),[l,u]=r.useState(!1),[c,i]=r.useState(!1),d=q(e.currencySymbol??"$",e.decimalPoint??".",e.decimalPlaces??2,e.thousandsSeparator??",",e.allowNegatives||!1),f=q(d.currencySymbol,d.decimalPoint,d.maxDecimalPlaces,"",d.allowNegatives),{currentValue:m,previousValue:p,reinitializeValue:X,updateWorkingValue:K,incrementValue:F}=ye({controlledValue:e.value,defaultValue:e.defaultValue,format:c?f:d});r.useEffect(()=>{m.numerishValue!==p?.numerishValue&&m.source!=="controlledValue"&&m.source!=="initialValue"&&oe(n.current,m.numerishValue)},[m.numerishValue,p?.numerishValue,m.source]),r.useEffect(()=>{if(a.current&&a.current.value!==m.workingValue){const o={start:a.current.selectionStart||0,end:a.current.selectionEnd||0};if(a.current.value=m.workingValue,p&&document.activeElement===a.current&&(m.source==="format"&&a.current.setSelectionRange(...de(p,o.start,o.end)),m.source==="increment")){const I=m.numerishValue.length-p.numerishValue.length;a.current.setSelectionRange(o.start+I,o.end+I)}}},[m,p,a]);const G=ie({allowNegatives:d.allowNegatives,decimalPlaces:d.maxDecimalPlaces,decimalPoint:d.decimalPoint});function Z(o){if(G(o)){o.preventDefault();return}o.key==="ArrowUp"&&(o.preventDefault(),F(o.shiftKey?10:1)),o.key==="ArrowDown"&&(o.preventDefault(),F(o.shiftKey?-10:-1)),e.onKeyDown?.(o)}r.useLayoutEffect(()=>{if(e.value===void 0&&e.defaultValue===void 0){const o=n.current?.value;o!=null&&o!==""&&X({defaultValue:o})}},[]);const{className:be,sizer:Ve,label:we,hint:Ce,error:Se,currencySymbol:Ee,decimalPoint:Te,decimalPlaces:He,thousandsSeparator:Me,allowNegatives:Ae,...Y}=e;return{workingInput:{...Y,ref:a,onChange:o=>K(o.target.value),onKeyDown:Z,onFocus:o=>{!l&&!c&&i(!0),e.onFocus?.(o)},onBlur:o=>{c&&i(!1),e.onBlur?.(o)},onMouseDown:o=>{!l&&u(!0),e.onMouseDown?.(o)},onMouseUp:o=>{l&&u(!1),!c&&i(!0),e.onMouseUp?.(o)},value:void 0,defaultValue:void 0,name:void 0},placeholderInput:{ref:t,value:m.placeholderValue,onChange:()=>{}},hiddenInput:{ref:o=>{n.current=o,typeof e.ref=="function"?e.ref(o):e.ref&&(e.ref.current=o)},onChange:e.onChange,defaultValue:m.numerishValue}}}function g(e){const a=re({label:e.label,hint:e.hint,error:e.error,controlledId:e.id,controlledAriaLabelledBy:e["aria-labelledby"],controlledAriaDescribedBy:e["aria-describedby"],controlledAriaErrorMessage:e["aria-errormessage"]}),t=pe(e),n=r.useRef(null),l=se(n),[u]=r.useState(le());ue(t.workingInput.ref,t.placeholderInput.ref);const c=ne(e.sizer),i=ee({sizer:c,hasError:!!e.error}),d=ce({sizer:c,hasSpacingApplied:!!l}),f=e["aria-label"]?a.ariaLabelledBy:`${a.ariaLabelledBy||""} ${u}`;return r.createElement(Q,{className:e.className,sizer:e.sizer,label:e.label,labelId:a.ariaLabelledBy,controlId:a.id,hint:e.hint,hintId:a.ariaDescribedBy,error:e.error!==!0?e.error:void 0,errorId:a.ariaErrorMessage,disabled:e.disabled,required:e.required},r.createElement("div",{className:d.visibleInputsContainer()},r.createElement("input",{type:"text",disabled:e.disabled,className:U(i,d.placeholderInput()),style:{paddingLeft:l?.width},tabIndex:-1,"aria-hidden":!0,...t.placeholderInput}),r.createElement("input",{role:"spinbutton",inputMode:e.allowNegatives?"text":(e.decimalPlaces??2)>0?"decimal":"numeric",id:a.id,"aria-labelledby":f,"aria-describedby":a.ariaDescribedBy,"aria-errormessage":a.ariaErrorMessage,"aria-invalid":e["aria-invalid"]??!!e.error,disabled:e.disabled,required:e.required,className:U(i,d.workingInput()),style:{paddingLeft:l?.width},placeholder:" ",...t.workingInput}),r.createElement("div",{id:"the-details",className:"sr-only"},"lol"),r.createElement("div",{ref:n,id:u,className:d.currencySymbol(),"data-testid":"currency-symbol",title:`(in ${e.currencySymbol})`,"aria-hidden":!0},e.currencySymbol===void 0?"$":e.currencySymbol)),r.createElement("input",{type:"number",name:e.name,className:d.hiddenInput(),tabIndex:-1,"aria-hidden":!0,...t.hiddenInput}))}g.__docgenInfo={description:`A form control that allows users to enter a monetary amount
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
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};function fe(e){return Object.entries(e).reduce((a,[t,n])=>({...a,[t]:{table:{defaultValue:{summary:n}}}}),{})}const{expect:s,fn:y}=__STORYBOOK_MODULE_TEST__,he={title:"Form controls/Money",component:g,argTypes:fe({currencySymbol:"$",decimalPoint:".",decimalPlaces:2,thousandsSeparator:",",allowNegatives:!1,disabled:!1,sizer:"base"})},M={tags:["field-layout"],args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"1234567.89",onChange:y()},play:async({canvas:e,step:a})=>{const t=e.getByLabelText("A label*"),n=e.getByTitle("(required)");await a("Assert accessibility of layout elements",async()=>{s(t).toHaveRole("spinbutton"),s(t).toHaveAccessibleName("A label* $"),s(t).toHaveAccessibleDescription("A hint"),s(t).toHaveAccessibleErrorMessage("An error message"),s(n).toHaveTextContent("*")}),await a("Assert default currency formatting",async()=>{s(t).toHaveValue("1,234,567.89"),s(e.getByTestId("currency-symbol")).toHaveTextContent("$")}),await a("Assert the error style",async()=>{s(t).toHaveClass("border-rose-800")})}},x={tags:["control-state"],args:{label:"Empty",onChange:y()},play:async({args:e,canvas:a,step:t,userEvent:n})=>{const l=a.getByLabelText("Empty");await t("Assert Money is functional without an initial value",async()=>{await n.type(l,"1"),s(l).toHaveValue("1"),s(e.onChange).toHaveBeenCalledOnce()}),await t("Reset the value",async()=>{await n.type(l,"{backspace}"),s(l).toHaveValue("")})}},b={tags:["control-state"],args:{label:"Controlled",value:"1234.56",onChange:y()},play:async({args:e,canvas:a,step:t,userEvent:n})=>{const l=a.getByLabelText("Controlled");await t("Assert `value` gets formatted",async()=>{s(l).toHaveValue("1,234.56")}),await t("Try adding text. `onChange` should fire, & <Money> allows the input value to change even when the controlledValue doesn’t update",async()=>{await n.tab(),s(l).toHaveFocus(),await n.type(l,"{backspace}"),s(l).toHaveValue("1234.5"),s(e.onChange).toHaveBeenCalledOnce()}),await t("Reset to initial state",async()=>{await n.type(l,"6"),s(l).toHaveValue("1234.56"),await n.tab(),s(l).not.toHaveFocus()})}},V={tags:["control-state"],args:{label:"Uncontrolled",defaultValue:"1234.56",onChange:y()},play:async({args:e,canvas:a,step:t,userEvent:n})=>{const l=a.getByLabelText("Uncontrolled");await t("Assert `defaultValue` gets formatted",async()=>{s(l).toHaveValue("1,234.56")}),await t("Try adding text. `onChange` should fire, & the <input> value should update",async()=>{await n.tab(),s(l).toHaveFocus(),await n.type(l,"{backspace}"),s(l).toHaveValue("1234.5"),s(e.onChange).toHaveBeenCalledOnce()}),await t("Reset to initial state",async()=>{await n.type(l,"6"),s(l).toHaveValue("1234.56"),await n.tab(),s(l).not.toHaveFocus()})}},w={tags:["control-state"],args:{label:"Disabled",defaultValue:"1234.56",disabled:!0,onChange:y()},play:async({args:e,canvas:a,step:t,userEvent:n})=>{const l=a.getByLabelText("Disabled");await t("Assert disabled state",async()=>{s(l).toBeDisabled(),await n.tab(),s(l).not.toHaveFocus()}),await t("Typing should have no effect",async()=>{await n.type(l,"{backspace}"),s(e.onChange).not.toHaveBeenCalled(),s(l).toHaveValue("1,234.56")})}},A={tags:["control-state"],args:{defaultValue:"1234567.89",currencySymbol:"€",label:"Euros",hint:'Uses "." as the thousands-separator and "," as the decimal point!',thousandsSeparator:".",decimalPoint:",",onChange:y()},play:async({canvas:e,step:a,userEvent:t})=>{const n=e.getByLabelText("Euros");await a("Assert default currency formatting",async()=>{s(n).toHaveValue("1.234.567,89"),s(n).toHaveAccessibleName("Euros €"),s(e.getByTestId("currency-symbol")).toHaveTextContent("€")}),await a("Assert deformatting abides the currency configuration",async()=>{await t.tab(),s(n).toHaveFocus(),await t.type(n,"{backspace}"),s(n).toHaveValue("1234567,8")}),await a("Reset to initial state",async()=>{await t.type(n,"9"),s(n).toHaveValue("1234567,89"),await t.tab(),s(n).not.toHaveFocus()})}};function ve(){const[e,a]=r.useState(),[t,n]=r.useState(1e4);return r.useEffect(()=>{fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json").then(l=>l.json()).then(l=>{a({btc:l.usd.btc,eur:l.usd.eur})})},[]),e?r.createElement("div",{className:"flex flex-col gap-3 sm:flex-row"},r.createElement(g,{className:"sm:flex-1",label:"US Dollars",value:t,onChange:l=>n(l.target.value===""?void 0:Number(l.target.value))}),r.createElement(g,{className:"sm:flex-1",label:"Euros",value:t===void 0?void 0:Number(t)*e.eur,onChange:l=>n(l.target.value===""?void 0:Number(l.target.value)/e.eur),currencySymbol:"€",decimalPoint:",",thousandsSeparator:"."}),r.createElement(g,{className:"sm:flex-1",label:"Bitcoin",value:t===void 0?void 0:Number(t)*e.btc,onChange:l=>n(l.target.value===""?void 0:Number(l.target.value)/e.btc),decimalPlaces:8,currencySymbol:"₿"})):null}const N={tags:["!dev","!test"],render:e=>r.createElement(ve,null),parameters:{source:`
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
    `}},B={tags:["sizer"],args:{label:"Negatives allowed!",defaultValue:"-1234.56",allowNegatives:!0}},C={tags:["sizer"],args:{sizer:"xs",label:"Xs Money",defaultValue:"1.23",onChange:y()},play:async({canvas:e,step:a})=>{await a("Assert the xs sizer style on both the Money & Field",async()=>{s(e.getByLabelText("Xs Money")).toHaveClass("text-xs"),s(e.getByText("Xs Money")).toHaveClass("text-xs"),s(e.getByText("$")).toHaveClass("text-xs")})}},S={tags:["sizer"],args:{sizer:"sm",label:"Sm Money",defaultValue:"1.23",onChange:y()},play:async({canvas:e,step:a})=>{await a("Assert the sm sizer style on both the Money & Field",async()=>{s(e.getByLabelText("Sm Money")).toHaveClass("text-sm"),s(e.getByText("Sm Money")).toHaveClass("text-sm"),s(e.getByText("$")).toHaveClass("text-sm")})}},E={tags:["sizer"],args:{sizer:"base",label:"Base Money",defaultValue:"1.23",onChange:y()},play:async({canvas:e,step:a})=>{await a("Assert the base sizer style on both the Money & Field",async()=>{s(e.getByLabelText("Base Money")).toHaveClass("text-base"),s(e.getByText("Base Money")).toHaveClass("text-base"),s(e.getByText("$")).toHaveClass("text-base")})}},T={tags:["sizer"],args:{sizer:"lg",label:"Lg Money",defaultValue:"1.23",onChange:y()},play:async({canvas:e,step:a})=>{await a("Assert the lg sizer style on both the Money & Field",async()=>{s(e.getByLabelText("Lg Money")).toHaveClass("text-lg"),s(e.getByText("Lg Money")).toHaveClass("text-lg"),s(e.getByText("$")).toHaveClass("text-lg")})}},H={tags:["sizer"],args:{sizer:"xl",label:"Xl Money",defaultValue:"1.23",onChange:y()},play:async({canvas:e,step:a})=>{await a("Assert the xl sizer style on both the Money & Field",async()=>{s(e.getByLabelText("Xl Money")).toHaveClass("text-xl"),s(e.getByText("Xl Money")).toHaveClass("text-xl"),s(e.getByText("$")).toHaveClass("text-xl")})}},R={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],label:"Responsive Money",defaultValue:"1.23",onChange:y()}},z={tags:["!dev","!test"],render:e=>r.createElement("div",{className:"flex flex-col gap-3 sm:flex-row"},r.createElement(g,{...x.args,className:"sm:flex-1"}),r.createElement(g,{...b.args,className:"sm:flex-1"}),r.createElement(g,{...V.args,className:"sm:flex-1"}),r.createElement(g,{...w.args,className:"sm:flex-1"}))},L={tags:["!dev","!test"],render:e=>r.createElement(J,{alignBaseline:!0},r.createElement(g,{...C.args}),r.createElement(g,{...S.args}),r.createElement(g,{...E.args}),r.createElement(g,{...T.args}),r.createElement(g,{...H.args}))};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    label: 'Negatives allowed!',
    defaultValue: '-1234.56',
    allowNegatives: true
  }
}`,...B.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper alignBaseline>
      <Money {...xs.args} />
      <Money {...sm.args} />
      <Money {...base.args} />
      <Money {...lg.args} />
      <Money {...xl.args} />
    </AllSizersStoryWrapper>
}`,...L.parameters?.docs?.source}}};const xe=["fieldLayout","empty","controlled","uncontrolled","disabled","euros","currencyConverter","allowNegatives","xs","sm","base","lg","xl","responsive","allControlStates","allSizers"],Fe=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:xe,allControlStates:z,allSizers:L,allowNegatives:B,base:E,controlled:b,currencyConverter:N,default:he,disabled:w,empty:x,euros:A,fieldLayout:M,lg:T,responsive:R,sm:S,uncontrolled:V,xl:H,xs:C},Symbol.toStringTag,{value:"Module"}));export{g as M,B as a,N as c,Fe as s};
