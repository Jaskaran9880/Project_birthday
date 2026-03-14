export default function Orbs() {
  return (
    <>
      <div className="orb" style={{ width: '350px', height: '350px', background: '#7c3aed', top: '-150px', left: '-100px', filter: 'blur(40px)', opacity: 0.25, animation: 'orbMove1 25s ease-in-out infinite' }} />
      <div className="orb" style={{ width: '300px', height: '300px', background: '#06b6d4', bottom: '-100px', right: '-80px', filter: 'blur(40px)', opacity: 0.3, animation: 'orbMove2 30s ease-in-out infinite' }} />
      <div style={{ position: 'fixed', width: '10px', height: '10px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', top: '20%', left: '10%', animation: 'bubble1 18s ease-in-out infinite' }} />
      <div style={{ position: 'fixed', width: '8px', height: '8px', background: 'rgba(255,255,255,0.15)', borderRadius: '50%', top: '60%', left: '80%', animation: 'bubble2 20s ease-in-out infinite' }} />
      <div style={{ position: 'fixed', width: '12px', height: '12px', background: 'rgba(255,255,255,0.25)', borderRadius: '50%', top: '40%', right: '15%', animation: 'bubble3 16s ease-in-out infinite' }} />
      <div style={{ position: 'fixed', width: '7px', height: '7px', background: 'rgba(255,255,255,0.18)', borderRadius: '50%', bottom: '30%', left: '20%', animation: 'bubble4 22s ease-in-out infinite' }} />
      <style>{`
        @keyframes orbMove1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(40px)} }
        @keyframes orbMove2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-30px)} }
        @keyframes bubble1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
        @keyframes bubble2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(25px)} }
        @keyframes bubble3 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-15px)} }
        @keyframes bubble4 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(20px)} }
      `}</style>
    </>
  )
}
