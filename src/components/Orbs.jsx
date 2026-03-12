export default function Orbs() {
  return (
    <>
      <div className="orb" style={{ width: 'min(500px, 80vw)', height: 'min(500px, 80vw)', background: '#7c3aed', top: '-150px', left: '-100px', animation: 'orbMove1 12s ease-in-out infinite' }} />
      <div className="orb" style={{ width: 'min(400px, 65vw)', height: 'min(400px, 65vw)', background: '#06b6d4', bottom: '-100px', right: '-80px', animation: 'orbMove2 14s ease-in-out infinite' }} />
      <div className="orb" style={{ width: 'min(300px, 50vw)', height: 'min(300px, 50vw)', background: '#8b5cf6', top: '40%', left: '60%', animation: 'orbMove3 10s ease-in-out infinite' }} />
      <style>{`
        @keyframes orbMove1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(60px,40px)} }
        @keyframes orbMove2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-50px,-30px)} }
        @keyframes orbMove3 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-40px,50px)} }
      `}</style>
    </>
  )
}
