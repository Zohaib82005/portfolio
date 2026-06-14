import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["About", "Projects", "Skills", "Contact"];

/* ─── SVG Project Banners ─── */
function BannerZashaNotes() {
  return (
    <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="400" height="180" fill="#0d1a14" />
      {/* grid lines */}
      {[0,1,2,3,4,5].map(i => <line key={i} x1={i*80} y1="0" x2={i*80} y2="180" stroke="#6EE7B718" strokeWidth="1"/>)}
      {[0,1,2,3].map(i => <line key={i} x1="0" y1={i*60} x2="400" y2={i*60} stroke="#6EE7B718" strokeWidth="1"/>)}
      {/* stacked note cards */}
      <rect x="60" y="40" width="130" height="100" rx="10" fill="#162b1f" stroke="#6EE7B740" strokeWidth="1.5"/>
      <rect x="70" y="30" width="130" height="100" rx="10" fill="#1a3325" stroke="#6EE7B755" strokeWidth="1.5"/>
      <rect x="80" y="20" width="130" height="100" rx="10" fill="#1f3d2c" stroke="#6EE7B7" strokeWidth="1.5"/>
      {/* text lines on top card */}
      {[38,52,66,80].map((y,i) => <rect key={i} x="100" y={y} width={[80,60,70,45][i]} height="7" rx="3.5" fill="#6EE7B750"/>)}
      <rect x="100" y="38" width="80" height="7" rx="3.5" fill="#6EE7B7"/>
      {/* lock icon */}
      <circle cx="260" cy="80" r="26" fill="#6EE7B715" stroke="#6EE7B730" strokeWidth="1"/>
      <rect x="250" y="78" width="20" height="15" rx="3" fill="#6EE7B7"/>
      <path d="M253 78 Q253 68 260 68 Q267 68 267 78" fill="none" stroke="#6EE7B7" strokeWidth="2.5" strokeLinecap="round"/>
      {/* glow */}
      <ellipse cx="200" cy="170" rx="140" ry="30" fill="#6EE7B712"/>
      {/* label */}
      <text x="280" y="150" fontFamily="monospace" fontSize="10" fill="#6EE7B760" letterSpacing="2">NOTES</text>
    </svg>
  );
}

function BannerDairyHauling() {
  return (
    <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="400" height="180" fill="#0d1520" />
      {/* road */}
      <path d="M0 140 Q200 110 400 140" fill="none" stroke="#93C5FD20" strokeWidth="40"/>
      <path d="M0 140 Q200 110 400 140" fill="none" stroke="#93C5FD08" strokeWidth="2" strokeDasharray="12 8"/>
      {/* truck body */}
      <rect x="80" y="85" width="130" height="55" rx="6" fill="#1a2840" stroke="#93C5FD" strokeWidth="1.5"/>
      <rect x="195" y="95" width="50" height="45" rx="4" fill="#1e3050" stroke="#93C5FD80" strokeWidth="1.2"/>
      {/* cab window */}
      <rect x="202" y="100" width="36" height="22" rx="3" fill="#93C5FD25"/>
      {/* wheels */}
      {[110, 160, 210].map((x,i) => (
        <g key={i}>
          <circle cx={x} cy="142" r="12" fill="#0d1520" stroke="#93C5FD" strokeWidth="2"/>
          <circle cx={x} cy="142" r="5" fill="#93C5FD40"/>
        </g>
      ))}
      {/* headlight */}
      <ellipse cx="242" cy="125" rx="5" ry="4" fill="#FDE68A"/>
      <line x1="247" y1="125" x2="270" y2="120" stroke="#FDE68A40" strokeWidth="6" strokeLinecap="round"/>
      {/* route dots */}
      {[[300,50],[330,70],[360,90],[350,110]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="4" fill={i===0?"#6EE7B7":"#93C5FD"} opacity={1-i*0.15}/>
      ))}
      <path d="M300 50 L330 70 L360 90 L350 110" fill="none" stroke="#93C5FD40" strokeWidth="1.5" strokeDasharray="4 3"/>
      <ellipse cx="200" cy="175" rx="150" ry="20" fill="#93C5FD0A"/>
    </svg>
  );
}

function BannerSkyNet() {
  return (
    <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="400" height="180" fill="#100d1a" />
      {/* radar circles */}
      {[20,45,70,95].map((r,i) => <circle key={i} cx="200" cy="90" r={r*1.6} fill="none" stroke="#FCA5A520" strokeWidth="1"/>)}
      {/* radar sweep */}
      <path d="M200 90 L200 0 A90 90 0 0 1 290 90 Z" fill="#FCA5A508"/>
      <line x1="200" y1="90" x2="200" y2="0" stroke="#FCA5A560" strokeWidth="1.5"/>
      <line x1="200" y1="90" x2="290" y2="90" stroke="#FCA5A620" strokeWidth="1"/>
      {/* crosshairs */}
      <line x1="60" y1="90" x2="340" y2="90" stroke="#FCA5A515" strokeWidth="1"/>
      <line x1="200" y1="10" x2="200" y2="170" stroke="#FCA5A515" strokeWidth="1"/>
      {/* blips */}
      {[[255,50],[290,110],[150,55],[170,120]].map(([x,y],i)=>(
        <g key={i}>
          <circle cx={x} cy={y} r="5" fill="#FCA5A5" opacity={[1,0.6,0.4,0.7][i]}/>
          <circle cx={x} cy={y} r="12" fill="none" stroke="#FCA5A5" strokeWidth="1" opacity={[0.5,0.3,0.2,0.35][i]}/>
        </g>
      ))}
      {/* plane silhouette */}
      <path d="M255 50 L248 44 L260 40 L268 48 Z" fill="#FCA5A5"/>
      <text x="265" y="46" fontFamily="monospace" fontSize="8" fill="#FCA5A5" letterSpacing="1">ALT:3200</text>
      {/* center dot */}
      <circle cx="200" cy="90" r="4" fill="#FCA5A5"/>
      <circle cx="200" cy="90" r="8" fill="none" stroke="#FCA5A560" strokeWidth="1"/>
    </svg>
  );
}

function BannerUMS() {
  return (
    <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="400" height="180" fill="#12101e" />
      {/* building outline */}
      <rect x="130" y="60" width="140" height="110" rx="4" fill="#1a1630" stroke="#C4B5FD40" strokeWidth="1.5"/>
      {/* columns */}
      {[150,185,220,255].map(x=><rect key={x} x={x} y="75" width="10" height="80" rx="2" fill="#C4B5FD18" stroke="#C4B5FD30" strokeWidth="1"/>)}
      {/* roof/pediment */}
      <polygon points="120,65 200,25 280,65" fill="#1f1a3a" stroke="#C4B5FD" strokeWidth="1.5"/>
      <text x="200" y="55" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#C4B5FD80" letterSpacing="1">FAST</text>
      {/* windows */}
      {[[145,80],[175,80],[215,80],[245,80],
        [145,110],[175,110],[215,110],[245,110]].map(([x,y],i)=>(
        <rect key={i} x={x} y={y} width="14" height="16" rx="2" fill="#C4B5FD20" stroke="#C4B5FD40" strokeWidth="1"/>
      ))}
      {/* door */}
      <rect x="185" y="130" width="30" height="40" rx="3" fill="#C4B5FD15" stroke="#C4B5FD60" strokeWidth="1.5"/>
      {/* floating data cards */}
      <rect x="20" y="50" width="80" height="40" rx="6" fill="#1a1630" stroke="#C4B5FD50" strokeWidth="1"/>
      <text x="60" y="67" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#C4B5FD">ENROLLED</text>
      <text x="60" y="82" textAnchor="middle" fontFamily="monospace" fontSize="14" fontWeight="bold" fill="#C4B5FD">1,240</text>
      <rect x="300" y="50" width="80" height="40" rx="6" fill="#1a1630" stroke="#C4B5FD50" strokeWidth="1"/>
      <text x="340" y="67" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#C4B5FD">FACULTY</text>
      <text x="340" y="82" textAnchor="middle" fontFamily="monospace" fontSize="14" fontWeight="bold" fill="#C4B5FD">86</text>
    </svg>
  );
}

function BannerELearning() {
  return (
    <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="400" height="180" fill="#1a1500" />
      {/* screen */}
      <rect x="60" y="25" width="220" height="140" rx="10" fill="#201900" stroke="#FDE68A40" strokeWidth="1.5"/>
      <rect x="70" y="35" width="200" height="110" rx="6" fill="#2a2000" stroke="#FDE68A20" strokeWidth="1"/>
      {/* video play area */}
      <rect x="75" y="40" width="190" height="75" rx="4" fill="#FDE68A0A"/>
      <polygon points="155,65 155,90 178,77" fill="#FDE68A" opacity="0.9"/>
      <circle cx="165" cy="77" r="20" fill="none" stroke="#FDE68A50" strokeWidth="2"/>
      {/* progress bar */}
      <rect x="75" y="123" width="190" height="5" rx="2.5" fill="#FDE68A15"/>
      <rect x="75" y="123" width="110" height="5" rx="2.5" fill="#FDE68A"/>
      <circle cx="185" cy="125" r="5" fill="#FDE68A"/>
      {/* course list on right */}
      {[0,1,2,3].map(i=>(
        <g key={i}>
          <rect x="300" y={30+i*35} width="80" height="28" rx="6" fill={i===1?"#FDE68A20":"#1a1500"} stroke="#FDE68A30" strokeWidth="1"/>
          <rect x="308" y={38+i*35} width={[50,60,40,55][i]} height="5" rx="2.5" fill={i===1?"#FDE68A":"#FDE68A50"}/>
          <rect x="308" y={47+i*35} width={[35,45,30,40][i]} height="4" rx="2" fill="#FDE68A25"/>
        </g>
      ))}
      {/* cert badge */}
      <circle cx="340" cy="155" r="18" fill="#FDE68A20" stroke="#FDE68A60" strokeWidth="1.5"/>
      <text x="340" y="160" textAnchor="middle" fontFamily="monospace" fontSize="14" fill="#FDE68A">🏆</text>
    </svg>
  );
}

function BannerSchool() {
  return (
    <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="400" height="180" fill="#0d1a14" />
      {/* dashboard panels */}
      <rect x="20" y="20" width="170" height="85" rx="8" fill="#122018" stroke="#6EE7B730" strokeWidth="1"/>
      <rect x="28" y="28" width="154" height="12" rx="3" fill="#6EE7B720"/>
      <text x="35" y="39" fontFamily="monospace" fontSize="8" fill="#6EE7B7" letterSpacing="1">ATTENDANCE</text>
      {/* bar chart */}
      {[55,40,65,48,70,52,60].map((h,i)=>(
        <rect key={i} x={32+i*20} y={88-h*0.5} width="12" height={h*0.5} rx="3" fill={i===4?"#6EE7B7":"#6EE7B740"}/>
      ))}
      {/* stats panel */}
      <rect x="210" y="20" width="170" height="85" rx="8" fill="#122018" stroke="#6EE7B730" strokeWidth="1"/>
      <text x="218" y="40" fontFamily="monospace" fontSize="8" fill="#6EE7B7" letterSpacing="1">OVERVIEW</text>
      {[["STUDENTS","420",50],["TEACHERS","38",72],["CLASSES","24",94]].map(([l,v,y])=>(
        <g key={l}>
          <text x="218" y={y} fontFamily="monospace" fontSize="7" fill="#6EE7B760">{l}</text>
          <text x="340" y={y} textAnchor="end" fontFamily="monospace" fontSize="13" fontWeight="bold" fill="#6EE7B7">{v}</text>
        </g>
      ))}
      {/* fee + notifications */}
      <rect x="20" y="115" width="80" height="50" rx="8" fill="#122018" stroke="#6EE7B730" strokeWidth="1"/>
      <text x="60" y="135" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#6EE7B760">FEE DUE</text>
      <text x="60" y="153" textAnchor="middle" fontFamily="monospace" fontSize="13" fontWeight="bold" fill="#FDE68A">PKR 42k</text>
      <rect x="115" y="115" width="80" height="50" rx="8" fill="#122018" stroke="#6EE7B730" strokeWidth="1"/>
      <text x="155" y="135" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#6EE7B760">ALERTS</text>
      <circle cx="155" cy="150" r="12" fill="#FCA5A520"/>
      <text x="155" y="155" textAnchor="middle" fontFamily="monospace" fontSize="13" fill="#FCA5A5">3</text>
      <rect x="210" y="115" width="170" height="50" rx="8" fill="#122018" stroke="#6EE7B730" strokeWidth="1"/>
      <text x="218" y="133" fontFamily="monospace" fontSize="7" fill="#6EE7B760">TIMETABLE — MON</text>
      {["Math 8:00","Sci 9:30","Eng 11:00"].map((t,i)=>(
        <text key={i} x={218+i*58} y={153} fontFamily="monospace" fontSize="8" fill="#6EE7B790">{t}</text>
      ))}
    </svg>
  );
}

const PROJECT_BANNERS = [BannerZashaNotes, BannerDairyHauling, BannerSkyNet, BannerUMS, BannerELearning, BannerSchool];

const PROJECTS = [
  {
    id: 1, title: "ZashaNotes", tag: "EdTech Platform", period: "Feb 2026 – Present",
    desc: "A professional marketplace for university notes featuring secure transaction workflows, view-only permissions upon admin approval, and robust role-based access control across three tiers.",
    tech: ["PHP", "MySQL", "RBAC", "REST APIs"], color: "#6EE7B7",
  },
  {
    id: 2, title: "Dairy Hauling", tag: "Logistics System", period: "Jun 2025 – Aug 2025",
    desc: "A logistics web application managing dairy product transportation and delivery operations — with real-time route handling, order tracking, and coordination between all delivery stages.",
    tech: ["PHP", "MySQL", "REST APIs", "Bootstrap"], color: "#93C5FD",
  },
  {
    id: 3, title: "SkyNet ATC Simulator", tag: "Simulation System", period: "Oct 2024 – Jan 2025",
    desc: "An air traffic control simulator for managing flight paths, runway assignments, and collision alerts. Designed for training and operational simulation environments.",
    tech: ["C++", "Data Structures", "Algorithms"], color: "#FCA5A5",
  },
  {
    id: 4, title: "University Management System", tag: "ERP Platform", period: "2024",
    desc: "A comprehensive university management ERP covering student enrollment, faculty management, course scheduling, grade tracking, and department administration in one unified platform.",
    tech: ["PHP", "Laravel", "MySQL", "React"], color: "#C4B5FD",
  },
  {
    id: 5, title: "E-Learning System", tag: "Education Platform", period: "2024",
    desc: "An interactive e-learning platform with course creation tools, video content delivery, quizzes, progress tracking, and certificate generation for both instructors and learners.",
    tech: ["Laravel", "React", "MySQL", "REST APIs"], color: "#FDE68A",
  },
  {
    id: 6, title: "School Management System", tag: "Admin Dashboard", period: "2024",
    desc: "An admin-oriented school management solution covering attendance, fee collection, timetable management, exam results, teacher assignments, and real-time parent notifications.",
    tech: ["PHP", "MySQL", "Laravel", "jQuery"], color: "#6EE7B7",
  },
];

const SKILLS = [
  { name: "PHP", level: 88 },
  { name: "Laravel", level: 82 },
  { name: "React", level: 78 },
  { name: "MySQL", level: 85 },
  { name: "jQuery", level: 80 },
  { name: "Bootstrap", level: 84 },
  { name: "Tailwind CSS", level: 76 },
  { name: "GitHub", level: 82 },
  { name: "Python", level: 70 },
  { name: "NumPy / Pandas", level: 65 },
  { name: "C++", level: 72 },
  { name: "REST APIs", level: 83 },
  { name: "Data Structures", level: 75 },
];

const SOFT_SKILLS = ["Problem-Solving","Negotiation","Time Management","Communication","Team Leadership","Critical Thinking"];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function AnimBar({ level, color, delay = 0 }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTimeout(() => setWidth(level), delay); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [level, delay]);
  return (
    <div ref={ref} style={{ height: "6px", background: "rgba(255,255,255,0.08)", borderRadius: "3px", overflow: "hidden" }}>
      <div style={{ height: "100%", borderRadius: "3px", width: `${width}%`, backgroundColor: color, transition: `width 1s ease ${delay}ms` }} />
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView(0.08);
  const Banner = PROJECT_BANNERS[index];
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.6s ease ${index * 90}ms, transform 0.6s ease ${index * 90}ms`,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.09)",
        borderRadius: "18px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        cursor: "default",
        position: "relative",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.border = `1px solid ${project.color}50`;
        e.currentTarget.style.background = "rgba(255,255,255,0.05)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.border = "1px solid rgba(255,255,255,0.09)";
        e.currentTarget.style.background = "rgba(255,255,255,0.03)";
      }}
    >
      {/* Banner image area */}
      <div style={{ height: "170px", overflow: "hidden", position: "relative", flexShrink: 0 }}>
        <Banner />
        {/* overlay gradient */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60px", background: "linear-gradient(to top, rgba(10,10,11,0.9), transparent)" }} />
        {/* tag badge */}
        <div style={{ position: "absolute", top: "12px", left: "12px", display: "flex", gap: "8px", alignItems: "center" }}>
          <span style={{
            fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
            color: project.color, background: `${project.color}18`, border: `1px solid ${project.color}40`,
            padding: "4px 10px", borderRadius: "100px",
          }}>{project.tag}</span>
        </div>
        <span style={{ position: "absolute", top: "10px", right: "12px", fontSize: "11px", color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>{project.period}</span>
      </div>

      {/* Card body */}
      <div style={{ padding: "20px 22px 22px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: "10px", fontFamily: "'Space Grotesk', sans-serif" }}>
          {project.title}
        </h3>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: "18px", flex: 1 }}>
          {project.desc}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {project.tech.map(t => (
            <span key={t} style={{
              fontSize: "11px", color: "rgba(255,255,255,0.45)", fontWeight: 600,
              padding: "4px 10px", borderRadius: "6px",
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
            }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "40px" }}>
      <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#6EE7B7" }}>{children}</span>
      <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)" }} />
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("About");
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 120);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTo(id) {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  }

  function copyEmail() {
    navigator.clipboard.writeText("mzohaibfakhar786@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  }

  const fade = (delay = 0) => ({
    opacity: heroVisible ? 1 : 0,
    transform: heroVisible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  });

  return (
    <div style={{ fontFamily: "'DM Sans','Helvetica Neue',sans-serif", background: "#0A0A0B", color: "#fff", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        ::-webkit-scrollbar{width:4px}
        ::-webkit-scrollbar-track{background:#0A0A0B}
        ::-webkit-scrollbar-thumb{background:#2a2a2c;border-radius:2px}
        .noise-overlay{position:fixed;inset:0;pointer-events:none;z-index:999;opacity:0.35;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")}
        .glow1{position:fixed;width:700px;height:700px;border-radius:50%;background:radial-gradient(circle,rgba(110,231,183,0.055) 0%,transparent 70%);pointer-events:none;top:-180px;right:-250px;z-index:0}
        .glow2{position:fixed;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(147,197,253,0.04) 0%,transparent 70%);pointer-events:none;bottom:60px;left:-180px;z-index:0}
        a{color:inherit;text-decoration:none}
        .nav-link{font-size:13px;font-weight:500;letter-spacing:0.04em;color:rgba(255,255,255,0.42);cursor:pointer;transition:color 0.2s}
        .nav-link:hover,.nav-link.active{color:#fff}
        .btn-p{display:inline-flex;align-items:center;gap:8px;background:#6EE7B7;color:#0A0A0B;font-weight:700;font-size:14px;padding:11px 22px;border-radius:100px;cursor:pointer;transition:all 0.2s;border:none;letter-spacing:0.01em}
        .btn-p:hover{background:#4fd4a0;transform:translateY(-1px)}
        .btn-g{display:inline-flex;align-items:center;gap:8px;background:transparent;color:rgba(255,255,255,0.65);font-weight:600;font-size:14px;padding:11px 22px;border-radius:100px;cursor:pointer;transition:all 0.2s;border:1px solid rgba(255,255,255,0.14)}
        .btn-g:hover{border-color:rgba(255,255,255,0.3);color:#fff;transform:translateY(-1px)}
        .contact-link{display:flex;align-items:center;gap:12px;padding:14px 18px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:13px;color:rgba(255,255,255,0.65);font-size:14px;cursor:pointer;transition:all 0.2s;text-decoration:none}
        .contact-link:hover{background:rgba(255,255,255,0.06);border-color:rgba(255,255,255,0.18);color:#fff;transform:translateX(4px)}
      `}</style>

      <div className="noise-overlay" />
      <div className="glow1" />
      <div className="glow2" />

      {/* NAV */}
      <nav style={{
        position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"0 28px",height:"62px",
        display:"flex",alignItems:"center",justifyContent:"space-between",
        background: scrolled ? "rgba(10,10,11,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        transition:"all 0.4s", maxWidth:"100vw",
      }}>
        <span onClick={() => window.scrollTo({ top:0, behavior:"smooth" })} style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:800, fontSize:"18px", letterSpacing:"-0.02em", cursor:"pointer" }}>
          MZ<span style={{ color:"#6EE7B7" }}>.</span>
        </span>
        <div style={{ display:"flex", gap:"30px", alignItems:"center" }}>
          {NAV_LINKS.map(l => (
            <span key={l} className={`nav-link${active===l?" active":""}`} onClick={() => scrollTo(l)}>{l}</span>
          ))}
          <button className="btn-p" style={{ padding:"7px 18px", fontSize:"13px" }} onClick={() => scrollTo("Contact")}>Hire Me ↗</button>
        </div>
      </nav>

      {/* HERO */}
      <section id="about" style={{ minHeight:"100vh", display:"flex", alignItems:"center", padding:"120px 28px 80px", maxWidth:"1100px", margin:"0 auto", position:"relative" }}>
        <div style={{ width:"100%", maxWidth:"760px" }}>
          <div style={fade(0)}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:"7px", fontSize:"12px", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:"#6EE7B7", background:"rgba(110,231,183,0.1)", border:"1px solid rgba(110,231,183,0.2)", padding:"6px 14px", borderRadius:"100px", marginBottom:"28px" }}>
              <span style={{ width:6, height:6, borderRadius:"50%", background:"#6EE7B7", display:"inline-block" }}/>
              Available for opportunities
            </div>
          </div>
          <div style={{ ...fade(100), marginBottom:"22px" }}>
            <h1 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"clamp(50px,9vw,94px)", fontWeight:800, lineHeight:0.95, letterSpacing:"-0.03em", background:"linear-gradient(140deg,#fff 30%,rgba(255,255,255,0.5) 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              Muhammad<br/>Zohaib.
            </h1>
          </div>
          <div style={{ ...fade(200), marginBottom:"30px" }}>
            <p style={{ fontSize:"17px", color:"rgba(255,255,255,0.42)", lineHeight:1.75, maxWidth:"540px" }}>
              Full-Stack Engineer specializing in <span style={{ color:"#93C5FD" }}>PHP & Laravel</span> backends and <span style={{ color:"#FCA5A5" }}>React</span> frontends. Building scalable real-world platforms. Currently expanding into <span style={{ color:"#FDE68A" }}>data science & ML</span>.
            </p>
          </div>
          <div style={{ ...fade(300), display:"flex", gap:"12px", flexWrap:"wrap", marginBottom:"56px" }}>
            <button className="btn-p" onClick={() => scrollTo("Projects")}>View Projects ↓</button>
            <a href="https://www.linkedin.com/in/muhammad-zohaib-eng/" target="_blank" rel="noreferrer" className="btn-g">LinkedIn ↗</a>
            <a href="https://github.com/Zohaib82005" target="_blank" rel="noreferrer" className="btn-g">GitHub ↗</a>
          </div>
          <div style={{ ...fade(420), display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"12px", maxWidth:"460px" }}>
            {[["6+","Projects Built"],["2+","Years Coding"]].map(([v,l]) => (
              <div key={l} style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"14px", padding:"18px 20px", textAlign:"center" }}>
                <p style={{ fontSize:"26px", fontWeight:800, color:"#fff", letterSpacing:"-0.02em" }}>{v}</p>
                <p style={{ fontSize:"11px", color:"rgba(255,255,255,0.32)", marginTop:"4px", letterSpacing:"0.04em" }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
        {/* orbital ring accent */}
        <div style={{ position:"absolute", right:"4%", top:"50%", transform:"translateY(-50%)", width:"260px", height:"260px", borderRadius:"50%", border:"1px solid rgba(110,231,183,0.1)", display:"flex", alignItems:"center", justifyContent:"center", opacity: heroVisible?1:0, transition:"opacity 1s ease 0.65s" }}>
          <div style={{ width:"185px", height:"185px", borderRadius:"50%", border:"1px solid rgba(110,231,183,0.07)", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <div style={{ width:"110px", height:"110px", borderRadius:"50%", background:"rgba(110,231,183,0.05)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"44px" }}>👨‍💻</div>
          </div>
        </div>
      </section>

      {/* EDUCATION STRIP */}
      <div style={{ borderTop:"1px solid rgba(255,255,255,0.06)", borderBottom:"1px solid rgba(255,255,255,0.06)", background:"rgba(255,255,255,0.015)" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto", padding:"36px 28px", display:"flex", flexWrap:"wrap", gap:"32px", alignItems:"center", justifyContent:"space-between" }}>
          <div style={{ display:"flex", gap:"16px", alignItems:"center" }}>
            <div style={{ width:"46px", height:"46px", borderRadius:"12px", background:"rgba(147,197,253,0.1)", border:"1px solid rgba(147,197,253,0.2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"20px" }}>🎓</div>
            <div>
              <p style={{ fontWeight:700, fontSize:"15px", color:"#fff" }}>FAST-NUCES</p>
              <p style={{ fontSize:"13px", color:"rgba(255,255,255,0.38)" }}>Bachelor of Software Engineering · Aug 2024 – Present</p>
            </div>
          </div>
          <div style={{ display:"flex", gap:"28px", flexWrap:"wrap" }}>
            {["Pakpattan, Pakistan","03037249933","mzohaibfakhar786@gmail.com"].map(i => (
              <span key={i} style={{ fontSize:"13px", color:"rgba(255,255,255,0.32)" }}>{i}</span>
            ))}
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <section id="projects" style={{ padding:"96px 28px", maxWidth:"1100px", margin:"0 auto" }}>
        <SectionLabel>Projects</SectionLabel>
        <div style={{ marginBottom:"44px" }}>
          <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"clamp(30px,5vw,46px)", fontWeight:800, letterSpacing:"-0.03em", color:"#fff", lineHeight:1.1, marginBottom:"14px" }}>
            Things I've built
          </h2>
          <p style={{ color:"rgba(255,255,255,0.38)", fontSize:"15px", maxWidth:"460px", lineHeight:1.65 }}>
            Real-world platforms solving actual problems — from logistics systems to university-grade ERPs.
          </p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))", gap:"18px" }}>
          {PROJECTS.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding:"80px 28px", background:"rgba(255,255,255,0.015)", borderTop:"1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth:"960px", margin:"0 auto" }}>
          <SectionLabel>Skills</SectionLabel>
          <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"clamp(28px,4vw,40px)", fontWeight:800, letterSpacing:"-0.03em", marginBottom:"48px", color:"#fff" }}>Technical Arsenal</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(400px,1fr))", gap:"48px" }}>
            <div>
              <p style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(255,255,255,0.28)", marginBottom:"28px" }}>Technical Skills</p>
              <div style={{ display:"flex", flexDirection:"column", gap:"18px" }}>
                {SKILLS.map((s, i) => (
                  <div key={s.name}>
                    <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"7px" }}>
                      <span style={{ fontSize:"14px", color:"rgba(255,255,255,0.72)", fontWeight:500 }}>{s.name}</span>
                      <span style={{ fontSize:"13px", color:"#6EE7B7", fontWeight:600 }}>{s.level}%</span>
                    </div>
                    <AnimBar level={s.level} color="#6EE7B7" delay={i * 55} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(255,255,255,0.28)", marginBottom:"28px" }}>Soft Skills</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"10px", marginBottom:"40px" }}>
                {SOFT_SKILLS.map(s => (
                  <span key={s} style={{ fontSize:"13px", fontWeight:500, color:"rgba(255,255,255,0.58)", padding:"8px 16px", borderRadius:"100px", border:"1px solid rgba(255,255,255,0.1)", background:"rgba(255,255,255,0.04)" }}>{s}</span>
                ))}
              </div>
              <p style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(255,255,255,0.28)", marginBottom:"20px" }}>Currently Exploring</p>
              <div style={{ display:"flex", flexDirection:"column", gap:"11px" }}>
                {[["🤖","Machine Learning","#FCA5A5"],["📊","Data Science","#FDE68A"],["🐼","NumPy / Pandas","#C4B5FD"]].map(([ic,lb,cl]) => (
                  <div key={lb} style={{ display:"flex", alignItems:"center", gap:"12px", padding:"12px 16px", background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:"12px" }}>
                    <span style={{ fontSize:"18px" }}>{ic}</span>
                    <span style={{ fontSize:"14px", color:cl, fontWeight:500 }}>{lb}</span>
                    <span style={{ marginLeft:"auto", fontSize:"10px", color:"rgba(255,255,255,0.22)", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.08em" }}>Learning</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding:"96px 28px", maxWidth:"1100px", margin:"0 auto" }}>
        <SectionLabel>Contact</SectionLabel>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"64px", alignItems:"start" }}>
          <div>
            <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"clamp(30px,5vw,50px)", fontWeight:800, letterSpacing:"-0.03em", color:"#fff", lineHeight:1.1, marginBottom:"18px" }}>
              Let's build<br/>something great.
            </h2>
            <p style={{ color:"rgba(255,255,255,0.38)", fontSize:"15px", lineHeight:1.7, marginBottom:"30px" }}>
              Open to freelance projects, internship opportunities, and collaborations. Reach out — I respond fast.
            </p>
            <button className="btn-p" onClick={copyEmail}>{copied ? "✓ Copied!" : "Copy Email ↗"}</button>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:"11px" }}>
            {[
              ["📧","Email","mzohaibfakhar786@gmail.com","mailto:mzohaibfakhar786@gmail.com"],
              ["📱","Phone","03037249933","tel:03037249933"],
              ["💼","LinkedIn","muhammad-zohaib-eng","https://www.linkedin.com/in/muhammad-zohaib-eng/"],
              ["🐙","GitHub","Zohaib82005","https://github.com/Zohaib82005"],
              ["📍","Location","Pakpattan, Pakistan",null],
            ].map(([ic,lb,val,href]) => href ? (
              <a key={lb} href={href} target="_blank" rel="noreferrer" className="contact-link">
                <span style={{ fontSize:"19px" }}>{ic}</span>
                <div><p style={{ fontSize:"10px", color:"rgba(255,255,255,0.28)", marginBottom:"2px", letterSpacing:"0.07em", textTransform:"uppercase" }}>{lb}</p><p style={{ fontSize:"14px", color:"rgba(255,255,255,0.68)", fontWeight:500 }}>{val}</p></div>
                <span style={{ marginLeft:"auto", color:"rgba(255,255,255,0.2)" }}>→</span>
              </a>
            ) : (
              <div key={lb} className="contact-link" style={{ cursor:"default" }}>
                <span style={{ fontSize:"19px" }}>{ic}</span>
                <div><p style={{ fontSize:"10px", color:"rgba(255,255,255,0.28)", marginBottom:"2px", letterSpacing:"0.07em", textTransform:"uppercase" }}>{lb}</p><p style={{ fontSize:"14px", color:"rgba(255,255,255,0.68)", fontWeight:500 }}>{val}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop:"1px solid rgba(255,255,255,0.06)", padding:"26px 28px", display:"flex", justifyContent:"space-between", alignItems:"center", maxWidth:"1100px", margin:"0 auto", flexWrap:"wrap", gap:"12px" }}>
        <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:800, fontSize:"16px", color:"rgba(255,255,255,0.45)" }}>MZ<span style={{ color:"#6EE7B7" }}>.</span></span>
        <p style={{ fontSize:"13px", color:"rgba(255,255,255,0.22)" }}>© 2026 Muhammad Zohaib · All rights reserved</p>
        <div style={{ display:"flex", gap:"18px" }}>
          {NAV_LINKS.map(l => <span key={l} className="nav-link" onClick={() => scrollTo(l)} style={{ fontSize:"12px" }}>{l}</span>)}
        </div>
      </footer>
    </div>
  );
}