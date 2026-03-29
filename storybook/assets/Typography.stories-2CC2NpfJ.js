import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const y={title:"Foundations/Typography",parameters:{layout:"padded"},tags:["autodocs"]},c=[{name:"Switzer",class:"font-switzer",type:"Variable sans-serif",usage:"All body text, UI labels, navigation — default font",specimen:"The browser built for people who think."},{name:"Gambarino",class:"font-gambarino",type:"Display serif",usage:"Large decorative headings, editorial moments",specimen:"Elevate your thinking"},{name:"Tanker",class:"font-tanker",type:"Display sans",usage:"Hero headlines, logo, maximum impact text",specimen:"Surf"}],g=[{token:"--text-xs",value:"0.75rem",px:"12px",label:"xs"},{token:"--text-sm",value:"0.875rem",px:"14px",label:"sm"},{token:"--text-base",value:"1rem",px:"16px",label:"base"},{token:"--text-md",value:"1.125rem",px:"18px",label:"md"},{token:"--text-lg",value:"1.25rem",px:"20px",label:"lg"},{token:"--text-xl",value:"1.5rem",px:"24px",label:"xl"},{token:"--text-2xl",value:"1.875rem",px:"30px",label:"2xl"},{token:"--text-3xl",value:"2.25rem",px:"36px",label:"3xl"},{token:"--text-4xl",value:"3rem",px:"48px",label:"4xl"},{token:"--text-5xl",value:"3.75rem",px:"60px",label:"5xl"}],i={render:()=>n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:40},children:c.map(e=>n.jsxs("div",{style:{borderBottom:"1px solid #f0f0f0",paddingBottom:32},children:[n.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:12,marginBottom:4},children:[n.jsx("span",{style:{fontFamily:"Switzer, sans-serif",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"#999"},children:e.name}),n.jsxs("code",{style:{fontSize:11,background:"#f4f4f4",padding:"1px 5px",borderRadius:3,color:"#666"},children:["font-",e.name.toLowerCase()]}),n.jsx("span",{style:{fontSize:11,color:"#bbb"},children:e.type})]}),n.jsx("div",{style:{fontFamily:`${e.name}, ${e.name==="Gambarino"?"serif":"sans-serif"}`,fontSize:40,lineHeight:1.2,color:"#1a2a3a",marginBottom:8},children:e.specimen}),n.jsx("div",{style:{fontFamily:"Switzer, sans-serif",fontSize:12,color:"#888"},children:e.usage})]},e.name))})},l={render:()=>n.jsx("div",{style:{fontFamily:"Switzer, sans-serif",display:"flex",flexDirection:"column",gap:0},children:[...g].reverse().map(e=>n.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:16,padding:"12px 0",borderBottom:"1px solid #f0f0f0"},children:[n.jsx("div",{style:{width:80,flexShrink:0,textAlign:"right"},children:n.jsx("code",{style:{fontSize:11,color:"#999",background:"#f4f4f4",padding:"1px 5px",borderRadius:3},children:e.label})}),n.jsx("div",{style:{width:60,flexShrink:0},children:n.jsx("span",{style:{fontSize:11,color:"#bbb"},children:e.px})}),n.jsxs("div",{style:{fontSize:e.value,lineHeight:1.2,color:"#1a2a3a",overflow:"hidden",whiteSpace:"nowrap"},children:["Switzer — ",e.label]})]},e.label))})},t={render:()=>n.jsx("div",{style:{fontFamily:"Switzer, sans-serif",display:"flex",flexDirection:"column",gap:16},children:[{label:"Regular",weight:400,class:"font-weight-regular"},{label:"Medium",weight:500,class:"font-weight-medium"},{label:"Semibold",weight:600,class:"font-weight-semibold"},{label:"Bold",weight:700,class:"font-weight-bold"}].map(e=>n.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:20,padding:"8px 0",borderBottom:"1px solid #f0f0f0"},children:[n.jsx("code",{style:{width:100,fontSize:11,color:"#999",background:"#f4f4f4",padding:"1px 5px",borderRadius:3,flexShrink:0},children:e.weight}),n.jsxs("div",{style:{fontSize:24,fontWeight:e.weight,color:"#1a2a3a",lineHeight:1.2},children:[e.label," — The browser built for people who think"]})]},e.label))})};var a,s,o;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 40
  }}>
      {fontFamilies.map(f => <div key={f.name} style={{
      borderBottom: "1px solid #f0f0f0",
      paddingBottom: 32
    }}>
          <div style={{
        display: "flex",
        alignItems: "baseline",
        gap: 12,
        marginBottom: 4
      }}>
            <span style={{
          fontFamily: "Switzer, sans-serif",
          fontSize: 11,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "#999"
        }}>
              {f.name}
            </span>
            <code style={{
          fontSize: 11,
          background: "#f4f4f4",
          padding: "1px 5px",
          borderRadius: 3,
          color: "#666"
        }}>
              font-{f.name.toLowerCase()}
            </code>
            <span style={{
          fontSize: 11,
          color: "#bbb"
        }}>{f.type}</span>
          </div>
          <div style={{
        fontFamily: \`\${f.name}, \${f.name === "Gambarino" ? "serif" : "sans-serif"}\`,
        fontSize: 40,
        lineHeight: 1.2,
        color: "#1a2a3a",
        marginBottom: 8
      }}>
            {f.specimen}
          </div>
          <div style={{
        fontFamily: "Switzer, sans-serif",
        fontSize: 12,
        color: "#888"
      }}>{f.usage}</div>
        </div>)}
    </div>
}`,...(o=(s=i.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var r,d,p;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <div style={{
    fontFamily: "Switzer, sans-serif",
    display: "flex",
    flexDirection: "column",
    gap: 0
  }}>
      {[...sizes].reverse().map(s => <div key={s.label} style={{
      display: "flex",
      alignItems: "baseline",
      gap: 16,
      padding: "12px 0",
      borderBottom: "1px solid #f0f0f0"
    }}>
          <div style={{
        width: 80,
        flexShrink: 0,
        textAlign: "right"
      }}>
            <code style={{
          fontSize: 11,
          color: "#999",
          background: "#f4f4f4",
          padding: "1px 5px",
          borderRadius: 3
        }}>
              {s.label}
            </code>
          </div>
          <div style={{
        width: 60,
        flexShrink: 0
      }}>
            <span style={{
          fontSize: 11,
          color: "#bbb"
        }}>{s.px}</span>
          </div>
          <div style={{
        fontSize: s.value,
        lineHeight: 1.2,
        color: "#1a2a3a",
        overflow: "hidden",
        whiteSpace: "nowrap"
      }}>
            Switzer — {s.label}
          </div>
        </div>)}
    </div>
}`,...(p=(d=l.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var f,m,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    fontFamily: "Switzer, sans-serif",
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      {[{
      label: "Regular",
      weight: 400,
      class: "font-weight-regular"
    }, {
      label: "Medium",
      weight: 500,
      class: "font-weight-medium"
    }, {
      label: "Semibold",
      weight: 600,
      class: "font-weight-semibold"
    }, {
      label: "Bold",
      weight: 700,
      class: "font-weight-bold"
    }].map(w => <div key={w.label} style={{
      display: "flex",
      alignItems: "baseline",
      gap: 20,
      padding: "8px 0",
      borderBottom: "1px solid #f0f0f0"
    }}>
          <code style={{
        width: 100,
        fontSize: 11,
        color: "#999",
        background: "#f4f4f4",
        padding: "1px 5px",
        borderRadius: 3,
        flexShrink: 0
      }}>
            {w.weight}
          </code>
          <div style={{
        fontSize: 24,
        fontWeight: w.weight,
        color: "#1a2a3a",
        lineHeight: 1.2
      }}>
            {w.label} — The browser built for people who think
          </div>
        </div>)}
    </div>
}`,...(x=(m=t.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const u=["FontFamilies","TypeScale","Weights"];export{i as FontFamilies,l as TypeScale,t as Weights,u as __namedExportsOrder,y as default};
