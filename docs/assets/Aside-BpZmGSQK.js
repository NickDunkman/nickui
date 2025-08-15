import{r as a}from"./iframe-JcCZxaL9.js";import{r as g,u as y,c as l}from"./index-D3fR3lML.js";const i=g({slots:{root:"rounded-sm border-1",heading:"font-semibold",paragraph:""},variants:{sizer:{xs:{root:"p-3 text-xs",heading:"text-xs mb-2.5",paragraph:"text-xs [&:not(:last-child)]:mb-2"},sm:{root:"p-3.5 text-xs",heading:"text-sm mb-3",paragraph:"text-xs [&:not(:last-child)]:mb-2.5"},base:{root:"p-4 text-sm",heading:"text-base mb-3.5",paragraph:"text-sm [&:not(:last-child)]:mb-3"},lg:{root:"p-4.5 text-base",heading:"text-lg mb-4",paragraph:"text-base [&:not(:last-child)]:mb-3.5"},xl:{root:"p-5 text-lg",heading:"text-xl mb-4.5",paragraph:"text-lg [&:not(:last-child)]:mb-4"}},flavor:{neutral:{root:"bg-blue-50 border-blue-200 text-blue-950"},positive:{root:"bg-emerald-50 border-emerald-200 text-emerald-950"},caution:{root:"bg-yellow-50 border-yellow-300 text-yellow-950"},negative:{root:"bg-rose-50 border-rose-200 text-rose-950"}}},defaultVariants:{sizer:"base",flavor:"neutral"}});function d({className:n,sizer:e,flavor:t,children:r,...o}){const s=y(e),h=i({sizer:s,flavor:t}),u=a.useMemo(()=>({styles:i({sizer:s,flavor:t}),resolvedSizer:s,flavor:t}),[s,t]);return a.createElement(c.Provider,{value:u},a.createElement("aside",{...o,className:l(h.root(),n),"data-nickui-sizer":Array.isArray(e)?e.join(","):e,"data-nickui-resolved-sizer":s},r))}d.Heading=p;d.Paragraph=m;const c=a.createContext({styles:i(),resolvedSizer:"base",flavor:"neutral"});function p({children:n,className:e,level:t=3}){const{styles:r}=a.useContext(c),o=`h${t}`;return a.createElement(o,{className:l(r.heading(),e)},n)}p.displayName="AsideHeading";function m({children:n,className:e}){const{styles:t}=a.useContext(c);return a.createElement("p",{className:l(t.paragraph(),e)},n)}m.displayName="AsideParagraph";d.__docgenInfo={description:`Displays some secondary content, typically an "oh, by the way!" relative to
the main content.
@param props {@link AsideProps}`,methods:[{name:"Heading",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  level = 3,
}: {
  /** The content to put in the heading tag */
  children?: React.ReactNode;
  /**
   * Optionally add classes to the root element, such as to position the
   * component, or add margins
   */
  className?: string;
  /** Optionally switch to a different heading tag (default is h3) */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}`,optional:!1,type:{name:"signature",type:"object",raw:`{
  /** The content to put in the heading tag */
  children?: React.ReactNode;
  /**
   * Optionally add classes to the root element, such as to position the
   * component, or add margins
   */
  className?: string;
  /** Optionally switch to a different heading tag (default is h3) */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1},description:"The content to put in the heading tag"},{key:"className",value:{name:"string",required:!1},description:`Optionally add classes to the root element, such as to position the
component, or add margins`},{key:"level",value:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}],required:!1},description:"Optionally switch to a different heading tag (default is h3)"}]}}}],returns:null},{name:"Paragraph",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
}: {
  /** The paragraph content */
  children?: React.ReactNode;
  /**
   * Optionally add classes to the root element, such as to position the
   * component, or add margins
   */
  className?: string;
}`,optional:!1,type:{name:"signature",type:"object",raw:`{
  /** The paragraph content */
  children?: React.ReactNode;
  /**
   * Optionally add classes to the root element, such as to position the
   * component, or add margins
   */
  className?: string;
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1},description:"The paragraph content"},{key:"className",value:{name:"string",required:!1},description:`Optionally add classes to the root element, such as to position the
component, or add margins`}]}}}],returns:null}],displayName:"Aside",props:{flavor:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof FLAVORS)[number]"},description:"Changes the color of the component"},sizer:{required:!1,tsType:{name:"union",raw:"SizerType | SizerType[]",elements:[{name:"unknown[number]",raw:"(typeof SIZERS)[number]"},{name:"Array",elements:[{name:"unknown[number]",raw:"(typeof SIZERS)[number]"}],raw:"SizerType[]"}]},description:`Changes the size of the component. A sizer string, or an array of sizer
strings for responsive sizing.`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The inner content shown in the Shout"}}};p.__docgenInfo={description:"",methods:[],displayName:"AsideHeading",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to put in the heading tag"},className:{required:!1,tsType:{name:"string"},description:`Optionally add classes to the root element, such as to position the
component, or add margins`},level:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"Optionally switch to a different heading tag (default is h3)",defaultValue:{value:"3",computed:!1}}}};m.__docgenInfo={description:"",methods:[],displayName:"AsideParagraph",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The paragraph content"},className:{required:!1,tsType:{name:"string"},description:`Optionally add classes to the root element, such as to position the
component, or add margins`}}};export{d as A};
