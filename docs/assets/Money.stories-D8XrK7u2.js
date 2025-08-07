import{r as s}from"./iframe-CcNznxni.js";import{A as J}from"./AllSizersStoryWrapper-DDwmy6Ql.js";import{F as Q}from"./Field-DOmul3v8.js";import{t as ee}from"./styles-_HfWMmYL.js";import{a as ae,f as te,u as ne,c as _}from"./index-X7_sODO6.js";import{u as le}from"./useElementBounds-DD431J3L.js";import{u as se}from"./useFieldA11yIds-DeeCjDg0.js";import{f as re}from"./fireInputChange-BU1kNzof.js";function oe(e,a){const t=s.useRef(null),n=e||t,l=s.useRef(null),u=a||l;return s.useEffect(()=>{const o=n.current,c=u.current;if(o&&c){let i=function(){F(o,c)};return F(o,c),o.addEventListener("scroll",i),()=>{o.removeEventListener("scroll",i)}}},[n,u]),[n,u]}function F(e,a){e&&a&&a.scroll(e.scrollLeft,e.scrollTop)}const ue=ae({slots:{visibleInputsContainer:"relative",placeholderInput:`
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
    `},variants:{sizer:{xs:{currencySymbol:"text-xs pl-2 pr-1"},sm:{currencySymbol:"text-sm pl-2.25 pr-1.5"},base:{currencySymbol:"text-base pl-3 pr-2"},lg:{currencySymbol:"text-lg pl-4 pr-2"},xl:{currencySymbol:"text-xl pl-4.5 pr-2.5"}},hasSpacingApplied:{false:{placeholderInput:"text-transparent disabled:text-transparent",workingInput:"text-transparent disabled:text-transparent",currencySymbol:"text-transparent"}}},defaultVariants:{sizer:"base",hasValue:!1,hasSpacingApplied:!0}});function ce({allowNegatives:e,decimalPlaces:a,decimalPoint:t}){return s.useCallback(n=>{if(n.metaKey)return!1;if(![...O,t,...e?["-"]:[],"ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ArrowRight","Tab","Enter","Backspace","Delete"].includes(n.key)&&n.key!==t)return!0;const l=n.currentTarget.value,u=n.currentTarget.selectionStart||0,o=(n.currentTarget.selectionEnd||0)!==u;if(n.key===t&&l.indexOf(t)!==-1||n.key==="-"&&(u>0||l.indexOf("-")!==-1))return!0;if(O.includes(n.key)&&!o){const c=l.indexOf(t);if(c!==-1&&u>c&&l.length-(c+1)>=a)return!0}},[e,a,t])}const O=Object.freeze(["0","1","2","3","4","5","6","7","8","9"]);function h(e,a){let t=e?.toString().replace(/[^0-9.-]/g,"")||"";if(t.indexOf("-")>0||k(t,"-")>(a.allowNegatives?1:0)||k(t,".")>1)return"";const n=t.match(/^(-?)0+(([1-9][0-9]*)|0)(\.[0-9]*)?$/);if(n&&(t=(n[1]||"")+(n[2]||"")+(n[4]||"")),t[0]==="."?t=`0${t}`:t.slice(0,2)==="-."&&(t=`-0${t.slice(1)}`),!a?.allowTrailingDecimalPoint&&t[t.length-1]==="."&&(t=t.slice(0,-1)),t&&a.minDecimalPlaces>0){let[l,u]=t.split(".");t=`${l||"0"}.${(u||"").padEnd(a.minDecimalPlaces,"0")}`}if(t&&a.maxDecimalPlaces===0){let[l]=t.split(".");t=l}else{let[l,u]=t.split(".");u&&u.length>a.maxDecimalPlaces&&([l,u]=(Math.round(+`${l}.${u}`*Math.pow(10,a.maxDecimalPlaces))/Math.pow(10,a.maxDecimalPlaces)).toString().split("."),t=`${l}.${(u||"").padEnd(a.maxDecimalPlaces,"0")}`)}return t}function X(e,a){const t=h(e,a);if(t==="")return"";const[n,l]=t.split("."),u=t.indexOf(".")!==-1,o=3,c=Math.ceil(n.length/o),i=n.length%o||o,p=[n.substring(0,i)];for(var d=0;d<c-1;d++)p.push(n.substring(i+d*o,i+(d+1)*o));return`${p.join(a.thousandsSeparator)}${u?a.decimalPoint:""}${l||""}`}function $(e,a){return e.replaceAll(a.thousandsSeparator,"").replace(a.decimalPoint,".")}function ie(e,a,t){return[a-k(e.workingValue.slice(0,a),e.format.thousandsSeparator)*e.format.thousandsSeparator.length,t-k(e.workingValue.slice(0,t),e.format.thousandsSeparator)*e.format.thousandsSeparator.length]}function k(e,a){return e.split(a).length-1}const q=te((e,a,t,n,l)=>({currencySymbol:e,decimalPoint:a,minDecimalPlaces:t,maxDecimalPlaces:t,thousandsSeparator:n,allowNegatives:l}));function de(e){return s.useReducer(me,e,j)}function j({controlledValue:e,defaultValue:a,format:t}){const n=e!==void 0?e:a,l=h(n,t);return{currentValue:{version:1,numerishValue:l,workingValue:l===""?"":x(n,t),placeholderValue:x(n,t),controlledValue:e,format:t,source:"initialValue"}}}function P(e,a){return{currentValue:{...e.currentValue,...a,version:e.currentValue?.version+1},previousValue:e?.currentValue}}function me(e,a){let t;switch(a.type){case"REINITIALIZE_VALUE":return j({...a.payload,format:e.currentValue.format});case"UPDATE_CONTROLLED_VALUE":if(a.payload===e.currentValue.controlledValue)return e;t=h(a.payload,e.currentValue.format);const l=Number(t)!==Number(e.currentValue.numerishValue)||t===""&&e.currentValue.numerishValue!==""||t!==""&&e.currentValue.numerishValue==="";return P(e,{numerishValue:t,workingValue:l?H(t,e.currentValue.format):e.currentValue.workingValue,placeholderValue:l?x(t,e.currentValue.format):e.currentValue.placeholderValue,controlledValue:a.payload,source:"controlledValue"});case"UPDATE_WORKING_VALUE":var n=$(a.payload,e.currentValue.format);return t=h(n,e.currentValue.format),P(e,{numerishValue:t,workingValue:H(n,e.currentValue.format),placeholderValue:x(n,e.currentValue.format),source:"workingValue"});case"REFORMAT_VALUE":var n=$(e.currentValue.workingValue,e.currentValue.format);return P(e,{workingValue:H(n,a.payload),placeholderValue:x(n,a.payload),format:a.payload,source:"format"});case"INCREMENT_VALUE":if(e.currentValue.numerishValue===""&&a.payload<0?t=h(0,e.currentValue.format):t=h(Math.max(Number(e.currentValue.numerishValue)+a.payload,e.currentValue.format.allowNegatives?-1/0:0),e.currentValue.format),t===e.currentValue.numerishValue)return e;const[u]=t.split(".");let o=t.replace(/^-?[0-9]*/,"");const c=e.currentValue.workingValue.replace(/^-?[0-9]*/,"");return Number(o)===Number(c)&&(o=c),P(e,{numerishValue:t,workingValue:H(`${u}${o}`,e.currentValue.format),placeholderValue:x(t,e.currentValue.format),source:"increment"})}}function H(e,a){return X(e,{...a,allowTrailingDecimalPoint:!0,minDecimalPlaces:0})}function x(e,a){return X(e||"0",{...a,minDecimalPlaces:a.maxDecimalPlaces})}function ge(e){const[{currentValue:a,previousValue:t},n]=de(e),l=s.useCallback(c=>{n({type:"UPDATE_WORKING_VALUE",payload:c})},[n]),u=s.useCallback(c=>{n({type:"INCREMENT_VALUE",payload:c})},[n]),o=s.useCallback(c=>{n({type:"REINITIALIZE_VALUE",payload:c})},[n]);return s.useEffect(()=>{e.format!==a.format&&n({type:"REFORMAT_VALUE",payload:e.format})},[e.format,a.format,n]),s.useEffect(()=>{e.controlledValue!==a.controlledValue&&n({type:"UPDATE_CONTROLLED_VALUE",payload:e.controlledValue})},[e.controlledValue,a.controlledValue,n]),{previousValue:t,currentValue:a,reinitializeValue:o,updateWorkingValue:l,incrementValue:u}}function ye(e){const a=s.useRef(null),t=s.useRef(null),n=s.useRef(null),[l,u]=s.useState(!1),[o,c]=s.useState(!1),i=q(e.currencySymbol??"$",e.decimalPoint??".",e.decimalPlaces??2,e.thousandsSeparator??",",e.allowNegatives||!1),p=q(i.currencySymbol,i.decimalPoint,i.maxDecimalPlaces,"",i.allowNegatives),{currentValue:d,previousValue:f,reinitializeValue:W,updateWorkingValue:K,incrementValue:U}=ge({controlledValue:e.value,defaultValue:e.defaultValue,format:o?p:i});s.useEffect(()=>{d.numerishValue!==f?.numerishValue&&d.source!=="controlledValue"&&d.source!=="initialValue"&&re(n.current,d.numerishValue)},[d.numerishValue,f?.numerishValue,d.source]),s.useEffect(()=>{if(a.current&&a.current.value!==d.workingValue){const r={start:a.current.selectionStart||0,end:a.current.selectionEnd||0};if(a.current.value=d.workingValue,f&&document.activeElement===a.current&&(d.source==="format"&&a.current.setSelectionRange(...ie(f,r.start,r.end)),d.source==="increment")){const I=d.numerishValue.length-f.numerishValue.length;a.current.setSelectionRange(r.start+I,r.end+I)}}},[d,f,a]);const G=ce({allowNegatives:i.allowNegatives,decimalPlaces:i.maxDecimalPlaces,decimalPoint:i.decimalPoint});function Z(r){if(G(r)){r.preventDefault();return}r.key==="ArrowUp"&&(r.preventDefault(),U(r.shiftKey?10:1)),r.key==="ArrowDown"&&(r.preventDefault(),U(r.shiftKey?-10:-1)),e.onKeyDown?.(r)}s.useLayoutEffect(()=>{if(e.value===void 0&&e.defaultValue===void 0){const r=n.current?.value;r!=null&&r!==""&&W({defaultValue:r})}},[]);const{className:ve,sizer:be,label:Ve,hint:we,error:Ce,currencySymbol:Se,decimalPoint:Ee,decimalPlaces:Te,thousandsSeparator:Me,allowNegatives:Ne,...Y}=e;return{workingInput:{role:"spinbutton",type:"text",inputMode:i.allowNegatives?"text":i.maxDecimalPlaces?"decimal":"numeric",...Y,ref:a,id:e.id,disabled:e.disabled,required:e.required,"aria-labelledby":e["aria-labelledby"],"aria-describedby":e["aria-describedby"],"aria-errormessage":e["aria-errormessage"],"aria-invalid":e["aria-invalid"]??!!e.error,onChange:r=>K(r.target.value),onKeyDown:Z,onFocus:r=>{!l&&!o&&c(!0),e.onFocus?.(r)},onBlur:r=>{o&&c(!1),e.onBlur?.(r)},onMouseDown:r=>{!l&&u(!0),e.onMouseDown?.(r)},onMouseUp:r=>{l&&u(!1),!o&&c(!0),e.onMouseUp?.(r)},value:void 0,defaultValue:void 0,name:void 0},placeholderInput:{ref:t,type:"text",value:d.placeholderValue,onChange:()=>{},disabled:e.disabled},hiddenInput:{ref:r=>{n.current=r,typeof e.ref=="function"?e.ref(r):e.ref&&(e.ref.current=r)},type:"number",name:e.name,onChange:e.onChange,defaultValue:d.numerishValue}}}function g(e){const a=se({label:e.label,hint:e.hint,error:e.error,controlledId:e.id,controlledAriaLabelledBy:e["aria-labelledby"],controlledAriaDescribedBy:e["aria-describedby"],controlledAriaErrorMessage:e["aria-errormessage"]}),{workingInput:t,placeholderInput:n,hiddenInput:l}=ye({...e,id:a.id,"aria-labelledby":a.ariaLabelledBy,"aria-describedby":a.ariaDescribedBy,"aria-errormessage":a.ariaErrorMessage}),u=s.useRef(null),o=le(u);oe(t.ref,n.ref);const c=ne(e.sizer),i=ee({sizer:c,hasError:!!e.error}),p=ue({sizer:c,hasSpacingApplied:!!o});return s.createElement(Q,{className:e.className,sizer:e.sizer,label:e.label,labelId:a.ariaLabelledBy,controlId:a.id,hint:e.hint,hintId:a.ariaDescribedBy,error:e.error!==!0?e.error:void 0,errorId:a.ariaErrorMessage,disabled:e.disabled,required:e.required},s.createElement("div",{className:p.visibleInputsContainer()},s.createElement("input",{...n,className:_(i,p.placeholderInput()),style:{paddingLeft:o?.width},tabIndex:-1,"aria-hidden":!0}),s.createElement("input",{...t,className:_(i,p.workingInput()),style:{paddingLeft:o?.width},placeholder:" "}),s.createElement("div",{ref:u,className:p.currencySymbol()},e.currencySymbol===void 0?"$":e.currencySymbol)),s.createElement("input",{...l,className:p.hiddenInput(),tabIndex:-1,"aria-hidden":!0}))}g.__docgenInfo={description:`A form control that allows users to enter a monetary amount
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
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};function pe(e){return Object.entries(e).reduce((a,[t,n])=>({...a,[t]:{table:{defaultValue:{summary:n}}}}),{})}const{expect:m,fn:y}=__STORYBOOK_MODULE_TEST__,fe={title:"Form controls/Money",component:g,argTypes:pe({currencySymbol:"$",decimalPoint:".",decimalPlaces:2,thousandsSeparator:",",allowNegatives:!1,disabled:!1,sizer:"base"})},N={tags:["field-layout"],args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"99.99",onChange:y()}},v={tags:["control-state"],args:{label:"Empty",onChange:y()}},b={tags:["control-state"],args:{label:"Controlled",value:"1234.56",onChange:y()}},V={tags:["control-state"],args:{label:"Uncontrolled",defaultValue:"1234.56",onChange:y()}},w={tags:["control-state"],args:{label:"Disabled",defaultValue:"1234.56",disabled:!0,onChange:y()}},A={tags:["control-state"],args:{defaultValue:"1234.56",currencySymbol:"€",label:"Euros",hint:'Uses "." as the thousands-separator and "," as the decimal point!',thousandsSeparator:".",decimalPoint:",",onChange:y()}};function he(){const[e,a]=s.useState(),[t,n]=s.useState(1e4);return s.useEffect(()=>{fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json").then(l=>l.json()).then(l=>{a({btc:l.usd.btc,eur:l.usd.eur})})},[]),e?s.createElement("div",{className:"flex flex-col gap-3 sm:flex-row"},s.createElement(g,{className:"sm:flex-1",label:"US Dollars",value:t,onChange:l=>n(l.target.value===""?void 0:Number(l.target.value))}),s.createElement(g,{className:"sm:flex-1",label:"Euros",value:t===void 0?void 0:Number(t)*e.eur,onChange:l=>n(l.target.value===""?void 0:Number(l.target.value)/e.eur),currencySymbol:"€",decimalPoint:",",thousandsSeparator:"."}),s.createElement(g,{className:"sm:flex-1",label:"Bitcoin",value:t===void 0?void 0:Number(t)*e.btc,onChange:l=>n(l.target.value===""?void 0:Number(l.target.value)/e.btc),decimalPlaces:8,currencySymbol:"₿"})):null}const R={tags:["!dev","!test"],render:e=>s.createElement(he,null),parameters:{source:`
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
    `}},B={tags:["sizer"],args:{label:"Negatives allowed!",defaultValue:"-1234.56",allowNegatives:!0}},C={tags:["sizer"],args:{sizer:"xs",label:"Xs Money",defaultValue:"1.23",onChange:y()},play:async({canvas:e,step:a})=>{await a("Assert the xs sizer style on both the Money & Field",async()=>{m(e.getByLabelText("Xs Money")).toHaveClass("text-xs"),m(e.getByText("Xs Money")).toHaveClass("text-xs"),m(e.getByText("$")).toHaveClass("text-xs")})}},S={tags:["sizer"],args:{sizer:"sm",label:"Sm Money",defaultValue:"1.23",onChange:y()},play:async({canvas:e,step:a})=>{await a("Assert the sm sizer style on both the Money & Field",async()=>{m(e.getByLabelText("Sm Money")).toHaveClass("text-sm"),m(e.getByText("Sm Money")).toHaveClass("text-sm"),m(e.getByText("$")).toHaveClass("text-sm")})}},E={tags:["sizer"],args:{sizer:"base",label:"Base Money",defaultValue:"1.23",onChange:y()},play:async({canvas:e,step:a})=>{await a("Assert the base sizer style on both the Money & Field",async()=>{m(e.getByLabelText("Base Money")).toHaveClass("text-base"),m(e.getByText("Base Money")).toHaveClass("text-base"),m(e.getByText("$")).toHaveClass("text-base")})}},T={tags:["sizer"],args:{sizer:"lg",label:"Lg Money",defaultValue:"1.23",onChange:y()},play:async({canvas:e,step:a})=>{await a("Assert the lg sizer style on both the Money & Field",async()=>{m(e.getByLabelText("Lg Money")).toHaveClass("text-lg"),m(e.getByText("Lg Money")).toHaveClass("text-lg"),m(e.getByText("$")).toHaveClass("text-lg")})}},M={tags:["sizer"],args:{sizer:"xl",label:"Xl Money",defaultValue:"1.23",onChange:y()},play:async({canvas:e,step:a})=>{await a("Assert the xl sizer style on both the Money & Field",async()=>{m(e.getByLabelText("Xl Money")).toHaveClass("text-xl"),m(e.getByText("Xl Money")).toHaveClass("text-xl"),m(e.getByText("$")).toHaveClass("text-xl")})}},z={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],label:"Responsive Money",defaultValue:"1.23",onChange:y()}},D={tags:["!dev","!test"],render:e=>s.createElement("div",{className:"flex flex-col gap-3 sm:flex-row"},s.createElement(g,{...v.args,className:"sm:flex-1"}),s.createElement(g,{...b.args,className:"sm:flex-1"}),s.createElement(g,{...V.args,className:"sm:flex-1"}),s.createElement(g,{...w.args,className:"sm:flex-1"}))},L={tags:["!dev","!test"],render:e=>s.createElement(J,{alignBaseline:!0},s.createElement(g,{...C.args}),s.createElement(g,{...S.args}),s.createElement(g,{...E.args}),s.createElement(g,{...T.args}),s.createElement(g,{...M.args}))};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    label: 'Empty',
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
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    label: 'Controlled',
    value: '1234.56',
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
}`,...b.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    label: 'Uncontrolled',
    defaultValue: '1234.56',
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
}`,...V.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    label: 'Disabled',
    defaultValue: '1234.56',
    disabled: true,
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
}`,...w.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive Money',
    defaultValue: '1.23',
    onChange: fn()
  }
}`,...z.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-3 sm:flex-row">
      <Money {...Empty.args} className="sm:flex-1" />
      <Money {...Controlled.args} className="sm:flex-1" />
      <Money {...Uncontrolled.args} className="sm:flex-1" />
      <Money {...Disabled.args} className="sm:flex-1" />
    </div>
}`,...D.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper alignBaseline>
      <Money {...Xs.args} />
      <Money {...Sm.args} />
      <Money {...Base.args} />
      <Money {...Lg.args} />
      <Money {...Xl.args} />
    </AllSizersStoryWrapper>
}`,...L.parameters?.docs?.source}}};const xe=["FieldLayout","Empty","Controlled","Uncontrolled","Disabled","Euros","CurrencyConversion","AllowNegatives","Xs","Sm","Base","Lg","Xl","Responsive","AllControlStates","AllSizers"],ke=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:D,AllSizers:L,AllowNegatives:B,Base:E,Controlled:b,CurrencyConversion:R,Disabled:w,Empty:v,Euros:A,FieldLayout:N,Lg:T,Responsive:z,Sm:S,Uncontrolled:V,Xl:M,Xs:C,__namedExportsOrder:xe,default:fe},Symbol.toStringTag,{value:"Module"}));export{B as A,R as C,g as M,ke as S};
