import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const A={sm:"px-4 py-2 text-xs gap-1.5",md:"px-6 py-3 text-sm gap-2",lg:"px-8 py-4 text-md gap-2.5"},W={primary:"bg-gradient-cta text-white border-0 hover:brightness-110 hover:-translate-y-px active:brightness-95 active:translate-y-0.5",ghost:"bg-transparent text-brand-dark border border-border hover:border-border-hover hover:bg-brand-dark/5 active:translate-y-0.5"};function r({variant:I="primary",size:T="md",href:c,leftIcon:d,rightIcon:m,children:p,className:C="",...u}){const h=["inline-flex items-center justify-center font-switzer font-medium rounded-full transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-accent-bright focus-visible:ring-offset-2",A[T],W[I],C].filter(Boolean).join(" ");return c?e.jsxs("a",{href:c,className:h,...u,children:[d,p,m]}):e.jsxs("button",{className:h,...u,children:[d,p,m]})}r.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "ghost"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"ghost"'}]},description:"Visual style",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"Size",defaultValue:{value:'"md"',computed:!1}},href:{required:!1,tsType:{name:"string"},description:"Render as <a> tag (for download links)"},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon on the left"},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon on the right"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const J={title:"Components/Button",component:r,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["primary","ghost"]},size:{control:"select",options:["sm","md","lg"]}}},a={args:{children:"Download Surf",variant:"primary",size:"md"}},t={args:{children:"Learn more",variant:"ghost",size:"md"}},s={args:{children:"Download",variant:"primary",size:"sm"}},n={args:{children:"Join the open Beta",variant:"primary",size:"lg"}},o={args:{children:"Download Surf",variant:"primary",size:"md",leftIcon:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M8 2v8M5 7l3 3 3-3M3 13h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}},i={args:{children:"View on GitHub",variant:"ghost",size:"md",href:"#"}},l={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(r,{variant:"primary",size:"sm",children:"Primary SM"}),e.jsx(r,{variant:"primary",size:"md",children:"Primary MD"}),e.jsx(r,{variant:"primary",size:"lg",children:"Primary LG"}),e.jsx(r,{variant:"ghost",size:"sm",children:"Ghost SM"}),e.jsx(r,{variant:"ghost",size:"md",children:"Ghost MD"}),e.jsx(r,{variant:"ghost",size:"lg",children:"Ghost LG"})]})};var g,v,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: "Download Surf",
    variant: "primary",
    size: "md"
  }
}`,...(y=(v=a.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var f,x,w;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: "Learn more",
    variant: "ghost",
    size: "md"
  }
}`,...(w=(x=t.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var z,b,B;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: "Download",
    variant: "primary",
    size: "sm"
  }
}`,...(B=(b=s.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var S,j,G;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: "Join the open Beta",
    variant: "primary",
    size: "lg"
  }
}`,...(G=(j=n.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var L,M,R;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: "Download Surf",
    variant: "primary",
    size: "md",
    leftIcon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2v8M5 7l3 3 3-3M3 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
  }
}`,...(R=(M=o.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var k,D,N;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: "View on GitHub",
    variant: "ghost",
    size: "md",
    href: "#"
  }
}`,...(N=(D=i.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var P,V,q;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary" size="sm">Primary SM</Button>
      <Button variant="primary" size="md">Primary MD</Button>
      <Button variant="primary" size="lg">Primary LG</Button>
      <Button variant="ghost" size="sm">Ghost SM</Button>
      <Button variant="ghost" size="md">Ghost MD</Button>
      <Button variant="ghost" size="lg">Ghost LG</Button>
    </div>
}`,...(q=(V=l.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};const O=["Primary","Ghost","Small","Large","WithDownloadIcon","AsLink","AllVariants"];export{l as AllVariants,i as AsLink,t as Ghost,n as Large,a as Primary,s as Small,o as WithDownloadIcon,O as __namedExportsOrder,J as default};
