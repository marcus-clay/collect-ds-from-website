import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const f={title:"Foundations/Spacing",parameters:{layout:"padded"},tags:["autodocs"]},p=[{token:"1",px:4},{token:"2",px:8},{token:"3",px:12},{token:"4",px:16},{token:"5",px:20},{token:"6",px:24},{token:"8",px:32},{token:"10",px:40},{token:"12",px:48},{token:"16",px:64},{token:"20",px:80},{token:"24",px:96}],a={render:()=>n.jsxs("div",{style:{fontFamily:"Switzer, sans-serif",display:"flex",flexDirection:"column",gap:0},children:[n.jsxs("div",{style:{display:"flex",gap:16,padding:"6px 0",borderBottom:"1px solid #eee",marginBottom:8},children:[n.jsx("span",{style:{width:80,fontSize:11,color:"#999",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em"},children:"Token"}),n.jsx("span",{style:{width:60,fontSize:11,color:"#999",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em"},children:"px"}),n.jsx("span",{style:{fontSize:11,color:"#999",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em"},children:"Visual"})]}),p.map(e=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,padding:"8px 0",borderBottom:"1px solid #f5f5f5"},children:[n.jsxs("code",{style:{width:80,fontSize:12,color:"#1a2a3a",background:"#f4f4f4",padding:"1px 6px",borderRadius:3,flexShrink:0},children:["space-",e.token]}),n.jsxs("span",{style:{width:60,fontSize:12,color:"#999",flexShrink:0},children:[e.px,"px"]}),n.jsx("div",{style:{height:20,width:e.px,background:"linear-gradient(135deg, #0097fe, #0080e5)",borderRadius:3,flexShrink:0}}),n.jsxs("span",{style:{fontSize:11,color:"#ccc"},children:["p-",e.token," / m-",e.token," / gap-",e.token]})]},e.token))]})},t={render:()=>n.jsx("div",{style:{fontFamily:"Switzer, sans-serif",display:"flex",flexWrap:"wrap",gap:24},children:[{token:"radius-sm",value:4,label:"sm"},{token:"radius-md",value:8,label:"md"},{token:"radius-lg",value:12,label:"lg"},{token:"radius-xl",value:16,label:"xl"},{token:"radius-2xl",value:24,label:"2xl"},{token:"radius-full",value:9999,label:"full"}].map(e=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[n.jsx("div",{style:{width:64,height:64,background:"linear-gradient(135deg, #1a2a3a, #3a5a7a)",borderRadius:Math.min(e.value,32)}}),n.jsx("code",{style:{fontSize:11,color:"#666",background:"#f4f4f4",padding:"1px 5px",borderRadius:3},children:e.label}),n.jsx("span",{style:{fontSize:11,color:"#bbb"},children:e.value===9999?"9999px":`${e.value}px`})]},e.token))})};var l,o,r;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    fontFamily: "Switzer, sans-serif",
    display: "flex",
    flexDirection: "column",
    gap: 0
  }}>
      <div style={{
      display: "flex",
      gap: 16,
      padding: "6px 0",
      borderBottom: "1px solid #eee",
      marginBottom: 8
    }}>
        <span style={{
        width: 80,
        fontSize: 11,
        color: "#999",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.06em"
      }}>Token</span>
        <span style={{
        width: 60,
        fontSize: 11,
        color: "#999",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.06em"
      }}>px</span>
        <span style={{
        fontSize: 11,
        color: "#999",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.06em"
      }}>Visual</span>
      </div>
      {spacing.map(s => <div key={s.token} style={{
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "8px 0",
      borderBottom: "1px solid #f5f5f5"
    }}>
          <code style={{
        width: 80,
        fontSize: 12,
        color: "#1a2a3a",
        background: "#f4f4f4",
        padding: "1px 6px",
        borderRadius: 3,
        flexShrink: 0
      }}>
            space-{s.token}
          </code>
          <span style={{
        width: 60,
        fontSize: 12,
        color: "#999",
        flexShrink: 0
      }}>{s.px}px</span>
          <div style={{
        height: 20,
        width: s.px,
        background: "linear-gradient(135deg, #0097fe, #0080e5)",
        borderRadius: 3,
        flexShrink: 0
      }} />
          <span style={{
        fontSize: 11,
        color: "#ccc"
      }}>
            p-{s.token} / m-{s.token} / gap-{s.token}
          </span>
        </div>)}
    </div>
}`,...(r=(o=a.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var s,i,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <div style={{
    fontFamily: "Switzer, sans-serif",
    display: "flex",
    flexWrap: "wrap",
    gap: 24
  }}>
      {[{
      token: "radius-sm",
      value: 4,
      label: "sm"
    }, {
      token: "radius-md",
      value: 8,
      label: "md"
    }, {
      token: "radius-lg",
      value: 12,
      label: "lg"
    }, {
      token: "radius-xl",
      value: 16,
      label: "xl"
    }, {
      token: "radius-2xl",
      value: 24,
      label: "2xl"
    }, {
      token: "radius-full",
      value: 9999,
      label: "full"
    }].map(r => <div key={r.token} style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8
    }}>
          <div style={{
        width: 64,
        height: 64,
        background: "linear-gradient(135deg, #1a2a3a, #3a5a7a)",
        borderRadius: Math.min(r.value, 32)
      }} />
          <code style={{
        fontSize: 11,
        color: "#666",
        background: "#f4f4f4",
        padding: "1px 5px",
        borderRadius: 3
      }}>
            {r.label}
          </code>
          <span style={{
        fontSize: 11,
        color: "#bbb"
      }}>{r.value === 9999 ? "9999px" : \`\${r.value}px\`}</span>
        </div>)}
    </div>
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const u=["Scale","BorderRadius"];export{t as BorderRadius,a as Scale,u as __namedExportsOrder,f as default};
