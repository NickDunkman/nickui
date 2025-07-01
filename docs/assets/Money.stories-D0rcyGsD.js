import{r as l}from"./iframe-D_OX4RS-.js";import{A as J}from"./AllSizersStoryWrapper-Djlh-4yQ.js";import{g as Q}from"./getStoryArgTypes-CB50-RjO.js";import{F as ee}from"./Field-kv7yRRPS.js";import{t as ae}from"./styles-DvkuNe9I.js";import{r as te,f as ne,u as se,c as U}from"./index-AP4d4dr6.js";import{a as re}from"./fieldA11y-CxK2--J7.js";import{r as le}from"./randomId-Dfhrkieu.js";import{u as oe}from"./useElementBounds-BwtEEY9F.js";import{f as ce}from"./fireInputChange-BU1kNzof.js";function ie(e,t){const a=l.useRef(null),n=e||a,s=l.useRef(null),c=t||s;return l.useEffect(()=>{const i=n.current,u=c.current;if(i&&u){let d=function(){$(i,u)};return $(i,u),i.addEventListener("scroll",d),()=>{i.removeEventListener("scroll",d)}}},[n,c]),[n,c]}function $(e,t){e&&t&&(t.scrollLeft=e.scrollLeft,t.scrollTop=e.scrollTop)}const ue=te({slots:{visibleInputsContainer:"relative",placeholderInput:`
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
    `},variants:{sizer:{xs:{currencySymbol:"text-xs pl-2 pr-1"},sm:{currencySymbol:"text-sm pl-2.25 pr-1.5"},base:{currencySymbol:"text-base pl-3 pr-2"},lg:{currencySymbol:"text-lg pl-4 pr-2"},xl:{currencySymbol:"text-xl pl-4.5 pr-2.5"}},isInitialized:{false:{placeholderInput:"text-transparent disabled:text-transparent",workingInput:"text-transparent disabled:text-transparent",currencySymbol:"text-transparent"}}},defaultVariants:{sizer:"base",isInitialized:!0}});function de(e){return l.useCallback(t=>{if(t.metaKey)return!1;if(![..._,e.decimalPoint,...e.allowNegatives?["-"]:[],"ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ArrowRight","Tab","Enter","Backspace","Delete"].includes(t.key)&&t.key!==e.decimalPoint)return!0;const a=t.currentTarget.value,n=t.currentTarget.selectionStart||0,s=(t.currentTarget.selectionEnd||0)!==n;if(t.key===e.decimalPoint&&a.indexOf(e.decimalPoint)!==-1||t.key==="-"&&(n>0||a.indexOf("-")!==-1))return!0;if(_.includes(t.key)&&!s){const c=a.indexOf(e.decimalPoint);if(c!==-1&&n>c&&a.length-(c+1)>=e.maxDecimalPlaces)return!0}},[e.allowNegatives,e.maxDecimalPlaces,e.decimalPoint])}const _=Object.freeze(["0","1","2","3","4","5","6","7","8","9"]);function f(e,t){let a=e?.toString().replace(/[^0-9.-]/g,"")||"";if(!t.allowWorkingNegativeSign&&a==="-"||a.indexOf("-")>0||D(a,"-")>(t.allowNegatives?1:0)||D(a,".")>1)return"";const n=a.match(/^(-?)0+(([1-9][0-9]*)|0)(\.[0-9]*)?$/);if(n&&(a=(n[1]||"")+(n[2]||"")+(n[4]||"")),a[0]==="."?a=`0${a}`:a.slice(0,2)==="-."&&(a=`-0${a.slice(1)}`),!t?.allowWorkingDecimalPoint&&a[a.length-1]==="."&&(a=a.slice(0,-1)),a&&t.minDecimalPlaces>0){let[s,c]=a.split(".");a=`${s==="-"?"-0":s||"0"}.${(c||"").padEnd(t.minDecimalPlaces,"0")}`}if(a&&t.maxDecimalPlaces===0){let[s]=a.split(".");a=s}else{let[s,c]=a.split(".");c&&c.length>t.maxDecimalPlaces&&([s,c]=(Math.round(+`${s}.${c}`*Math.pow(10,t.maxDecimalPlaces))/Math.pow(10,t.maxDecimalPlaces)).toString().split("."),a=`${s==="-"?"-0":s}.${(c||"").padEnd(t.maxDecimalPlaces,"0")}`)}return!t.allowWorkingNegativeSign&&a.match(/^-0(\.(0+)?)?$/)&&(a=a.slice(1)),a}function W(e,t){const a=f(e,t);if(a==="")return"";const[n,s]=a.split("."),c=a.indexOf(".")!==-1,i=3,u=Math.ceil(n.length/i),d=n.length%i||i,b=[n.substring(0,d)];for(var m=0;m<u-1;m++)b.push(n.substring(d+m*i,d+(m+1)*i));return`${b.join(t.thousandsSeparator)}${c?t.decimalPoint:""}${s||""}`}function O(e,t){return e.replaceAll(t.thousandsSeparator,"").replace(t.decimalPoint,".")}function me(e,t,a){return[t-D(e.workingValue.slice(0,t),e.format.thousandsSeparator)*e.format.thousandsSeparator.length,a-D(e.workingValue.slice(0,a),e.format.thousandsSeparator)*e.format.thousandsSeparator.length]}function D(e,t){return e.split(t).length-1}const q=ne((e,t,a,n,s)=>({currencySymbol:e,decimalPoint:t,minDecimalPlaces:a,maxDecimalPlaces:a,thousandsSeparator:n,allowNegatives:s}));function pe(e){return l.useReducer(ye,e,j)}function j({controlledValue:e,defaultValue:t,format:a}){const n=e!==void 0?e:t,s=f(n,a);return{currentValue:{version:1,numerishValue:s,workingValue:s===""?"":h(n,a),placeholderValue:h(n,a),controlledValue:e,format:a,source:"initialValue"}}}function B(e,t){return{currentValue:{...e.currentValue,...t,version:e.currentValue?.version+1},previousValue:e?.currentValue}}function ye(e,t){let a;switch(t.type){case"REINITIALIZE_VALUE":return j({...t.payload,format:e.currentValue.format});case"UPDATE_CONTROLLED_VALUE":if(t.payload===e.currentValue.controlledValue)return e;a=f(t.payload,e.currentValue.format);const s=Number(a)!==Number(e.currentValue.numerishValue)||a===""&&e.currentValue.numerishValue!==""||a!==""&&e.currentValue.numerishValue==="";return B(e,{numerishValue:a,workingValue:s?I(a,e.currentValue.format):e.currentValue.workingValue,placeholderValue:s?h(a,e.currentValue.format):e.currentValue.placeholderValue,controlledValue:t.payload,source:"controlledValue"});case"UPDATE_WORKING_VALUE":var n=O(t.payload,e.currentValue.format);return a=f(n,e.currentValue.format),B(e,{numerishValue:a,workingValue:I(n,e.currentValue.format),placeholderValue:h(n,e.currentValue.format),source:"workingValue"});case"REFORMAT_VALUE":var n=O(e.currentValue.workingValue,e.currentValue.format);return B(e,{numerishValue:f(n,t.payload),workingValue:n===""?"":h(n,t.payload),placeholderValue:h(n,t.payload),format:t.payload,source:"format"});case"INCREMENT_VALUE":if(e.currentValue.numerishValue===""&&t.payload<0?a=f(0,e.currentValue.format):a=f(Math.max(Number(e.currentValue.numerishValue)+t.payload,e.currentValue.format.allowNegatives?-1/0:0),e.currentValue.format),a===e.currentValue.numerishValue)return e;const[c]=a.split(".");let i=a.replace(/^-?[0-9]*/,"");const u=e.currentValue.workingValue.replace(/^-?[0-9]*/,"");return(Number(i)||0)===(Number(u)||0)&&(i=u),B(e,{numerishValue:a,workingValue:I(`${c}${i}`,e.currentValue.format),placeholderValue:h(a,e.currentValue.format),source:"increment"})}}function I(e,t){return W(e,{...t,allowWorkingDecimalPoint:!0,allowWorkingNegativeSign:!0,minDecimalPlaces:0})}function h(e,t){return W(e||"0",{...t,minDecimalPlaces:t.maxDecimalPlaces,allowWorkingDecimalPoint:!0,allowWorkingNegativeSign:!0})}function ge(e){const[{currentValue:t,previousValue:a},n]=pe(e),s=l.useCallback(u=>{n({type:"UPDATE_WORKING_VALUE",payload:u})},[n]),c=l.useCallback(u=>{n({type:"INCREMENT_VALUE",payload:u})},[n]),i=l.useCallback(u=>{n({type:"REINITIALIZE_VALUE",payload:u})},[n]);return l.useEffect(()=>{e.format!==t.format&&n({type:"REFORMAT_VALUE",payload:e.format})},[e.format,t.format,n]),l.useEffect(()=>{e.controlledValue!==t.controlledValue&&n({type:"UPDATE_CONTROLLED_VALUE",payload:e.controlledValue})},[e.controlledValue,t.controlledValue,n]),{previousValue:a,currentValue:t,reinitializeValue:i,updateWorkingValue:s,incrementValue:c}}function fe(e){const t=l.useRef(null),a=l.useRef(null),n=l.useRef(null),[s,c]=l.useState(!1),[i,u]=l.useState(!1),d=q(e.currencySymbol??"$",e.decimalPoint??".",e.decimalPlaces??2,e.thousandsSeparator??",",e.allowNegatives||!1),b=q(d.currencySymbol,d.decimalPoint,d.maxDecimalPlaces,"",d.allowNegatives),{currentValue:m,previousValue:g,reinitializeValue:K,updateWorkingValue:X,incrementValue:F}=ge({controlledValue:e.value,defaultValue:e.defaultValue,format:i?b:d});l.useEffect(()=>{m.numerishValue!==g?.numerishValue&&m.source!=="controlledValue"&&m.source!=="initialValue"&&ce(n.current,m.numerishValue)},[m.numerishValue,g?.numerishValue,m.source]),l.useEffect(()=>{if(t.current&&t.current.value!==m.workingValue){const o={start:t.current.selectionStart||0,end:t.current.selectionEnd||0};if(t.current.value=m.workingValue,g&&document.activeElement===t.current&&(m.source==="format"&&t.current.setSelectionRange(...me(g,o.start,o.end)),m.source==="increment")){const L=m.numerishValue.length-g.numerishValue.length;t.current.setSelectionRange(o.start+L,o.end+L)}}},[m,g,t]);const Z=de(d);function G(o){if(Z(o)){o.preventDefault();return}o.key==="ArrowUp"&&(o.preventDefault(),F(o.shiftKey?10:1)),o.key==="ArrowDown"&&(o.preventDefault(),F(o.shiftKey?-10:-1)),e.onKeyDown?.(o)}l.useLayoutEffect(()=>{if(e.value===void 0&&e.defaultValue===void 0){const o=n.current?.value;o!=null&&o!==""&&K({defaultValue:o})}},[]);const{className:xe,sizer:Ve,label:we,hint:Ce,error:Se,currencySymbol:Ee,decimalPoint:Te,decimalPlaces:Ae,thousandsSeparator:Ne,allowNegatives:He,...Y}=e;return{workingInput:{...Y,ref:t,onChange:o=>X(o.target.value),onKeyDown:G,onFocus:o=>{!s&&!i&&u(!0),e.onFocus?.(o)},onBlur:o=>{i&&u(!1),n.current&&e.onBlur?.({...o,target:n.current,currentTarget:n.current})},onMouseDown:o=>{!s&&c(!0),e.onMouseDown?.(o)},onMouseUp:o=>{s&&c(!1),!i&&u(!0),e.onMouseUp?.(o)},value:void 0,defaultValue:void 0,name:void 0},placeholderInput:{ref:a,value:m.placeholderValue,onChange:()=>{}},hiddenInput:{ref:o=>{n.current=o,typeof e.ref=="function"?e.ref(o):e.ref&&(e.ref.current=o)},onChange:e.onChange,defaultValue:m.numerishValue}}}function p(e){const t=re({label:e.label,hint:e.hint,error:e.error,controlledId:e.id,controlledAriaLabel:e["aria-label"],controlledAriaLabelledBy:e["aria-labelledby"],controlledAriaDescribedBy:e["aria-describedby"],controlledAriaErrorMessage:e["aria-errormessage"],controlledAriaInvalid:e["aria-invalid"]}),a=fe(e),n=l.useRef(null),s=oe(n),[c]=l.useState(le());ie(a.workingInput.ref,a.placeholderInput.ref);const i=se(e.sizer),u=ae({sizer:i,hasError:!!e.error}),d=ue({sizer:i,isInitialized:!!s}),b=e["aria-label"]&&!t.formControl["aria-labelledby"]?void 0:`${t.formControl["aria-labelledby"]||""} ${c}`;return l.createElement(ee,{...t.field,className:e.className,sizer:e.sizer,label:e.label,hint:e.hint,error:e.error!==!0?e.error:void 0,required:e.required,"data-nickui-component":"Money"},l.createElement("div",{className:d.visibleInputsContainer()},l.createElement("input",{type:"text",disabled:e.disabled,className:U(u,d.placeholderInput()),style:{paddingLeft:s?.width},tabIndex:-1,"aria-hidden":!0,"data-testid":"money-placeholder-input",...a.placeholderInput}),l.createElement("input",{...t.formControl,role:"spinbutton",inputMode:e.allowNegatives?"text":(e.decimalPlaces??2)>0?"decimal":"numeric","aria-labelledby":b,disabled:e.disabled,required:e.required,className:U(u,d.workingInput()),style:{paddingLeft:s?.width},placeholder:" ",...a.workingInput}),l.createElement("div",{ref:n,id:c,className:d.currencySymbol(),"data-testid":"currency-symbol",title:`(in ${e.currencySymbol})`,"aria-hidden":!0},e.currencySymbol===void 0?"$":e.currencySymbol)),l.createElement("input",{name:e.name,className:d.hiddenInput(),tabIndex:-1,"aria-hidden":!0,...a.hiddenInput}))}p.__docgenInfo={description:`A form control that allows users to enter a monetary amount
@param props {@link MoneyProps}`,methods:[],displayName:"Money",props:{sizer:{required:!1,tsType:{name:"union",raw:"SizerType | SizerType[]",elements:[{name:"unknown[number]",raw:"(typeof SIZERS)[number]"},{name:"Array",elements:[{name:"unknown[number]",raw:"(typeof SIZERS)[number]"}],raw:"SizerType[]"}]},description:`Changes the size of the component. A sizer string, or an array of sizer
strings for responsive sizing.`},label:{required:!1,tsType:{name:"DescriptorType"},description:"The main label to show above the form control(s), naming the field"},hint:{required:!1,tsType:{name:"DescriptorType"},description:`A hint about what kind of value the field accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"DescriptorType"},description:"Error message to show beneath the form control(s), or just `true` to\ntrigger the error style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the component"},value:{required:!1,tsType:{name:"ValueType"},description:`Sets the value of the component when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"ValueType"},description:"Sets the value of the component when using it as an uncontrolled component"},name:{required:!1,tsType:{name:"string"},description:"The name of the field"},currencySymbol:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:'The currency symbol shown at the front of the input, typically "$"'},decimalPoint:{required:!1,tsType:{name:"string"},description:`The character separating the whole part from the decimal part, typically
"."`},thousandsSeparator:{required:!1,tsType:{name:"string"},description:`The character to use to separate every three digits in the whole part,
typically ","`},decimalPlaces:{required:!1,tsType:{name:"number"},description:`Controls how many decimal places the user is allowed to add, and how many
will always be included on the value emitted via the onChange handler.
Typically 2.`},allowNegatives:{required:!1,tsType:{name:"boolean"},description:"Set to `true` to allow the user to enter negative values"}}};const{expect:r,fn:y}=__STORYBOOK_MODULE_TEST__,he={title:"Form controls/Money",component:p,argTypes:Q({formControl:{isDisableable:!0,valueType:["string","number"]},isSizerable:!0,defaultValues:{currencySymbol:"$",decimalPoint:".",decimalPlaces:2,thousandsSeparator:",",allowNegatives:!1},types:{defaultValue:["string","number"],value:["string","number"]}}),parameters:{a11y:{config:{rules:[{id:"color-contrast",selector:'*:not([data-testid="money-placeholder-input"])'}]}}}},N={tags:["field-layout"],args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"1234567.89",onChange:y()},play:async({canvas:e,step:t})=>{const a=e.getByLabelText("A label*"),n=e.getByTitle("(required)");await t("Assert accessibility of layout elements",async()=>{r(a).toHaveRole("spinbutton"),r(a).toHaveAccessibleName("A label* $"),r(a).toHaveAccessibleDescription("A hint"),r(a).toHaveAccessibleErrorMessage("An error message"),r(n).toHaveTextContent("*")}),await t("Assert default currency formatting",async()=>{r(a).toHaveValue("1,234,567.89"),r(e.getByTestId("currency-symbol")).toHaveTextContent("$")}),await t("Assert the error style",async()=>{r(a).toHaveClass("border-rose-800")})}},v={tags:["control-state"],args:{label:"Empty",onChange:y()},play:async({args:e,canvas:t,step:a,userEvent:n})=>{const s=t.getByLabelText("Empty");await a("Assert Money is functional without an initial value",async()=>{await n.type(s,"1"),r(s).toHaveValue("1"),r(e.onChange).toHaveBeenCalledOnce()}),await a("Reset the value",async()=>{await n.type(s,"{backspace}"),r(s).toHaveValue("")})}},x={tags:["control-state"],args:{label:"Controlled",value:"1234.56",onChange:y()},play:async({args:e,canvas:t,step:a,userEvent:n})=>{const s=t.getByLabelText("Controlled");await a("Assert `value` gets formatted",async()=>{r(s).toHaveValue("1,234.56")}),await a("Try adding text. `onChange` should fire, & <Money> allows the input value to change even when the controlledValue doesn’t update",async()=>{await n.tab(),r(s).toHaveFocus(),await n.type(s,"{backspace}"),r(s).toHaveValue("1234.5"),r(e.onChange).toHaveBeenCalledOnce()}),await a("Reset to initial state",async()=>{await n.type(s,"6"),r(s).toHaveValue("1234.56"),await n.tab(),r(s).not.toHaveFocus()})}},V={tags:["control-state"],args:{label:"Uncontrolled",defaultValue:"1234.56",onChange:y()},play:async({args:e,canvas:t,step:a,userEvent:n})=>{const s=t.getByLabelText("Uncontrolled");await a("Assert `defaultValue` gets formatted",async()=>{r(s).toHaveValue("1,234.56")}),await a("Try adding text. `onChange` should fire, & the <input> value should update",async()=>{await n.tab(),r(s).toHaveFocus(),await n.type(s,"{backspace}"),r(s).toHaveValue("1234.5"),r(e.onChange).toHaveBeenCalledOnce()}),await a("Reset to initial state",async()=>{await n.type(s,"6"),r(s).toHaveValue("1234.56"),await n.tab(),r(s).not.toHaveFocus()})}},w={tags:["control-state"],args:{label:"Disabled",defaultValue:"1234.56",disabled:!0,onChange:y()},play:async({args:e,canvas:t,step:a,userEvent:n})=>{const s=t.getByLabelText("Disabled");await a("Assert disabled state",async()=>{r(s).toBeDisabled(),await n.tab(),r(s).not.toHaveFocus()}),await a("Typing should have no effect",async()=>{await n.type(s,"{backspace}"),r(e.onChange).not.toHaveBeenCalled(),r(s).toHaveValue("1,234.56")})}},H={tags:["control-state"],args:{defaultValue:"1234567.89",currencySymbol:"€",label:"Euros",hint:'Uses "." as the thousands-separator and "," as the decimal point!',thousandsSeparator:".",decimalPoint:",",onChange:y()},play:async({canvas:e,step:t,userEvent:a})=>{const n=e.getByLabelText("Euros");await t("Assert default currency formatting",async()=>{r(n).toHaveValue("1.234.567,89"),r(n).toHaveAccessibleName("Euros €"),r(e.getByTestId("currency-symbol")).toHaveTextContent("€")}),await t("Assert deformatting abides the currency configuration",async()=>{await a.tab(),r(n).toHaveFocus(),await a.type(n,"{backspace}"),r(n).toHaveValue("1234567,8")}),await t("Reset to initial state",async()=>{await a.type(n,"9"),r(n).toHaveValue("1234567,89"),await a.tab(),r(n).not.toHaveFocus()})}};function be(){const[e,t]=l.useState(),[a,n]=l.useState(1e4);return l.useEffect(()=>{fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json").then(s=>s.json()).then(s=>{t({btc:s.usd.btc,eur:s.usd.eur})})},[]),e?l.createElement("div",{className:"flex flex-col gap-3 sm:flex-row"},l.createElement(p,{className:"sm:flex-1",label:"US Dollars",value:a,onChange:s=>n(s.target.value===""?void 0:Number(s.target.value))}),l.createElement(p,{className:"sm:flex-1",label:"Euros",value:a===void 0?void 0:Number(a)*e.eur,onChange:s=>n(s.target.value===""?void 0:Number(s.target.value)/e.eur),currencySymbol:"€",decimalPoint:",",thousandsSeparator:"."}),l.createElement(p,{className:"sm:flex-1",label:"Bitcoin",value:a===void 0?void 0:Number(a)*e.btc,onChange:s=>n(s.target.value===""?void 0:Number(s.target.value)/e.btc),decimalPlaces:8,currencySymbol:"₿"})):null}const M={tags:["!dev","!test"],render:e=>l.createElement(be,null),parameters:{source:`
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
    `}},k={tags:["sizer"],args:{label:"Negatives allowed!",defaultValue:"-1234.56",allowNegatives:!0}},C={tags:["sizer"],args:{"aria-label":"Xs Money",sizer:"xs",defaultValue:"1.23",onChange:y()},play:async({canvas:e,step:t})=>{const a=e.getByLabelText("Xs Money"),n=a.closest('[data-nickui-component="Money"]');await t("Assert the xs sizer style on both the Money & Field",async()=>{r(a).toHaveClass("text-xs"),r(n).toHaveAttribute("data-nickui-sizer","xs"),r(e.getByText("$")).toHaveClass("text-xs")})}},S={tags:["sizer"],args:{"aria-label":"Sm Money",sizer:"sm",defaultValue:"1.23",onChange:y()},play:async({canvas:e,step:t})=>{const a=e.getByLabelText("Sm Money"),n=a.closest('[data-nickui-component="Money"]');await t("Assert the sm sizer style on both the Money & Field",async()=>{r(a).toHaveClass("text-sm"),r(n).toHaveAttribute("data-nickui-sizer","sm"),r(e.getByText("$")).toHaveClass("text-sm")})}},E={tags:["sizer"],args:{"aria-label":"Base Money",sizer:"base",defaultValue:"1.23",onChange:y()},play:async({canvas:e,step:t})=>{const a=e.getByLabelText("Base Money"),n=a.closest('[data-nickui-component="Money"]');await t("Assert the base sizer style on both the Money & Field",async()=>{r(a).toHaveClass("text-base"),r(n).toHaveAttribute("data-nickui-sizer","base"),r(e.getByText("$")).toHaveClass("text-base")})}},T={tags:["sizer"],args:{"aria-label":"Lg Money",sizer:"lg",defaultValue:"1.23",onChange:y()},play:async({canvas:e,step:t})=>{const a=e.getByLabelText("Lg Money"),n=a.closest('[data-nickui-component="Money"]');await t("Assert the lg sizer style on both the Money & Field",async()=>{r(a).toHaveClass("text-lg"),r(n).toHaveAttribute("data-nickui-sizer","lg"),r(e.getByText("$")).toHaveClass("text-lg")})}},A={tags:["sizer"],args:{"aria-label":"Xl Money",sizer:"xl",defaultValue:"1.23",onChange:y()},play:async({canvas:e,step:t})=>{const a=e.getByLabelText("Xl Money"),n=a.closest('[data-nickui-component="Money"]');await t("Assert the xl sizer style on both the Money & Field",async()=>{r(a).toHaveClass("text-xl"),r(n).toHaveAttribute("data-nickui-sizer","xl"),r(e.getByText("$")).toHaveClass("text-xl")})}},z={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],label:"Responsive Money",defaultValue:"1.23",onChange:y()}},R={tags:["!dev","!test"],render:e=>l.createElement("div",{className:"flex flex-col gap-3 sm:flex-row"},l.createElement(p,{...v.args,className:"sm:flex-1"}),l.createElement(p,{...x.args,className:"sm:flex-1"}),l.createElement(p,{...V.args,className:"sm:flex-1"}),l.createElement(p,{...w.args,className:"sm:flex-1"}))},P={tags:["!dev","!test"],render:e=>l.createElement(J,{alignBaseline:!0},l.createElement(p,{...C.args,className:"sm:flex-12"}),l.createElement(p,{...S.args,className:"sm:flex-14"}),l.createElement(p,{...E.args,className:"sm:flex-16"}),l.createElement(p,{...T.args,className:"sm:flex-18"}),l.createElement(p,{...A.args,className:"sm:flex-20"}))};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive Money',
    defaultValue: '1.23',
    onChange: fn()
  }
}`,...z.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-3 sm:flex-row">
      <Money {...empty.args} className="sm:flex-1" />
      <Money {...controlled.args} className="sm:flex-1" />
      <Money {...uncontrolled.args} className="sm:flex-1" />
      <Money {...disabled.args} className="sm:flex-1" />
    </div>
}`,...R.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper alignBaseline>
      <Money {...xs.args} className="sm:flex-12" />
      <Money {...sm.args} className="sm:flex-14" />
      <Money {...base.args} className="sm:flex-16" />
      <Money {...lg.args} className="sm:flex-18" />
      <Money {...xl.args} className="sm:flex-20" />
    </AllSizersStoryWrapper>
}`,...P.parameters?.docs?.source}}};const ve=["fieldLayout","empty","controlled","uncontrolled","disabled","euros","currencyConverter","allowNegatives","xs","sm","base","lg","xl","responsive","allControlStates","allSizers"],Ue=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:ve,allControlStates:R,allSizers:P,allowNegatives:k,base:E,controlled:x,currencyConverter:M,default:he,disabled:w,empty:v,euros:H,fieldLayout:N,lg:T,responsive:z,sm:S,uncontrolled:V,xl:A,xs:C},Symbol.toStringTag,{value:"Module"}));export{p as M,k as a,M as c,Ue as s};
