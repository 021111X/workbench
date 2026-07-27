// 四季渐变主题（用户指定三色渐变）
// 春 #457635→#6B9136→#97B365 | 夏 #184D97→#1888BF→#34B8C5
// 秋 #F1B00E→#F3E864→#F6D081 | 冬 #4E3282→#8E6CBB→#B69CD2
window.SEASON_THEMES = {
  spring: {
    name: "春",
    bg: "#f2f8ea",
    panel: "rgba(255,255,255,.92)",
    card: "rgba(243,249,239,.9)",
    line: "#dbe9d0",
    text: "#2c3a26",
    muted: "#7a8973",
    accent: "#457635",
    accent2: "#6B9136",
    accent3: "#97B365",
    point: "#97B365",
    grad: "linear-gradient(120deg,#457635 0%,#6B9136 50%,#97B365 100%)",
    headerBg: "linear-gradient(165deg,#457635 0%,#6B9136 50%,#97B365 100%)",
    bgImg: "linear-gradient(150deg,rgba(69,118,53,.10) 0%,rgba(107,145,54,.12) 50%,rgba(151,179,101,.16) 100%)",
    gradSoft: "linear-gradient(120deg,rgba(69,118,53,.10),rgba(107,145,54,.12),rgba(151,179,101,.16))",
    panelShadow: "0 2px 10px rgba(69,118,53,.10)",
    sbText: "#ffffff",
    sbTextSoft: "rgba(255,255,255,.85)",
    sbLine: "rgba(255,255,255,.18)",
    gradText: "#ffffff",
  },
  summer: {
    name: "夏",
    bg: "#ecf5fb",
    panel: "rgba(255,255,255,.92)",
    card: "rgba(240,247,252,.9)",
    line: "#cee0ec",
    text: "#1d3a52",
    muted: "#6b8094",
    accent: "#184D97",
    accent2: "#1888BF",
    accent3: "#34B8C5",
    point: "#34B8C5",
    grad: "linear-gradient(120deg,#184D97 0%,#1888BF 50%,#34B8C5 100%)",
    headerBg: "linear-gradient(165deg,#184D97 0%,#1888BF 50%,#34B8C5 100%)",
    bgImg: "linear-gradient(150deg,rgba(24,77,151,.08) 0%,rgba(24,136,191,.10) 50%,rgba(52,184,197,.14) 100%)",
    gradSoft: "linear-gradient(120deg,rgba(24,77,151,.08),rgba(24,136,191,.10),rgba(52,184,197,.14))",
    panelShadow: "0 2px 10px rgba(24,136,191,.12)",
    sbText: "#ffffff",
    sbTextSoft: "rgba(255,255,255,.85)",
    sbLine: "rgba(255,255,255,.18)",
    gradText: "#ffffff",
  },
  autumn: {
    name: "秋",
    bg: "#fdf7e4",
    panel: "rgba(255,255,255,.92)",
    card: "rgba(253,248,235,.9)",
    line: "#ecdcb2",
    text: "#4a3a08",
    muted: "#8a7b5e",
    accent: "#c28c00",          // 深化的金色：保证白底上文字可读
    accent2: "#b8860b",
    accent3: "#F1B00E",
    point: "#F3E864",
    grad: "linear-gradient(120deg,#F1B00E 0%,#F3E864 50%,#F6D081 100%)",
    headerBg: "linear-gradient(165deg,#F1B00E 0%,#F3E864 50%,#F6D081 100%)",
    bgImg: "linear-gradient(150deg,rgba(241,176,14,.12) 0%,rgba(243,232,100,.14) 50%,rgba(246,208,129,.16) 100%)",
    gradSoft: "linear-gradient(120deg,rgba(241,176,14,.12),rgba(243,232,100,.14),rgba(246,208,129,.16))",
    panelShadow: "0 2px 10px rgba(241,176,14,.15)",
    sbText: "#5a4400",           // 黄底 → 深棕文字
    sbTextSoft: "rgba(90,68,0,.85)",
    sbLine: "rgba(90,68,0,.18)",
    gradText: "#5a4400",
  },
  winter: {
    name: "冬",
    bg: "#f1ecf7",
    panel: "rgba(255,255,255,.92)",
    card: "rgba(243,238,249,.9)",
    line: "#d8cce8",
    text: "#2d1f47",
    muted: "#786a8d",
    accent: "#4E3282",
    accent2: "#8E6CBB",
    accent3: "#B69CD2",
    point: "#B69CD2",
    grad: "linear-gradient(120deg,#4E3282 0%,#8E6CBB 50%,#B69CD2 100%)",
    headerBg: "linear-gradient(165deg,#4E3282 0%,#8E6CBB 50%,#B69CD2 100%)",
    bgImg: "linear-gradient(150deg,rgba(78,50,130,.09) 0%,rgba(142,108,187,.11) 50%,rgba(182,156,210,.15) 100%)",
    gradSoft: "linear-gradient(120deg,rgba(78,50,130,.09),rgba(142,108,187,.11),rgba(182,156,210,.15))",
    panelShadow: "0 2px 10px rgba(78,50,130,.12)",
    sbText: "#ffffff",
    sbTextSoft: "rgba(255,255,255,.85)",
    sbLine: "rgba(255,255,255,.18)",
    gradText: "#ffffff",
  }
};

// 根据月份自动判断季节（可手动覆盖）
window.getAutoSeason = function(){
  const m=new Date().getMonth()+1;
  if(m>=3&&m<=5)return "spring";
  if(m>=6&&m<=8)return "summer";
  if(m>=9&&m<=11)return "autumn";
  return "winter";
};