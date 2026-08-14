import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code, Code2, Terminal, Smartphone, Rocket, LineChart, Search, PenTool, Image as ImageIcon } from 'lucide-react'

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

const bigSkills = [
  {
    name: 'React',
    pos: { top: '20%', left: '25%' },
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'Next.js',
    pos: { top: '25%', left: '70%' },
    icon: (
      <svg viewBox="0 0 180 180" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="90" cy="90" r="90" fill="black" />
        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
        <path d="M115.012 54H127.126V125.97H115.012V54Z" fill="white" />
      </svg>
    ),
  },
  {
    name: 'n8n',
    pos: { top: '55%', left: '50%' },
    icon: (
      <svg viewBox="0 0 100 100" width="32" height="32" fill="none" stroke="#E8436B" strokeWidth="12" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="50" r="10" />
        <circle cx="44" cy="50" r="10" />
        <circle cx="84" cy="24" r="10" />
        <circle cx="84" cy="76" r="10" />
        <path d="M26 50 H 34" />
        <path d="M54 50 C 65 50 65 24 74 24" />
        <path d="M54 50 C 65 50 65 76 74 76" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    pos: { top: '75%', left: '25%' },
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#181717" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    pos: { top: '70%', left: '75%' },
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#F7DF1E" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    pos: { top: '40%', left: '85%' },
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.0001 5.4C9.50013 5.4 7.90013 6.6 6.50013 9.6C7.90013 7.8 9.50013 7.5 10.7001 8.1C11.3934 8.44638 11.8906 8.95679 12.4419 9.52261C13.3444 10.4491 14.394 11.5262 17.5001 11.5262C20.0001 11.5262 21.6001 10.3262 23.0001 7.32621C21.6001 9.12621 20.0001 9.42621 18.8001 8.82621C18.1068 8.47983 17.6096 7.96942 17.0583 7.40361C16.1558 6.47712 15.1063 5.4 12.0001 5.4ZM6.50013 11.7C4.00013 11.7 2.40013 12.9 1.00013 15.9C2.40013 14.1 4.00013 13.8 5.20013 14.4C5.89345 14.7464 6.39062 15.2568 6.94192 15.8226C7.84439 16.7491 8.89397 17.8262 12.0001 17.8262C14.5001 17.8262 16.1001 16.6262 17.5001 13.6262C16.1001 15.4262 14.5001 15.7262 13.3001 15.1262C12.6068 14.7798 12.1096 14.2694 11.5583 13.7036C10.6558 12.7771 9.60631 11.7 6.50013 11.7Z" fill="#38BDF8" />
      </svg>
    ),
  }
]

const smallSkills = [
  {
    name: 'Dart',
    pos: { top: '15%', left: '50%' },
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <path fill="#0175C2" d="M16.14 0l-5.6 5.61L18 24l5.86-5.86z" />
        <path fill="#02569B" d="M8.14 8L0 16.14l7.86 7.86L24 16.14z" />
        <path fill="#00C4B3" d="M16.14 0l-5.6 5.61-2.4-2.4L16.14 0z" />
      </svg>
    )
  },
  {
    name: 'C#',
    pos: { top: '35%', left: '15%' },
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <path fill="#239120" d="M22 6.5l-10-5.5-10 5.5v11l10 5.5 10-5.5v-11z" />
        <path fill="#fff" d="M16.5 12.5h-2.2l-.3 1.8h-1.5l.3-1.8h-1.8l-.3 1.8h-1.5l.3-1.8H7.3l.3-1.5h2.2l.4-2.5H8l.3-1.5h2.2l.3-1.8h1.5l-.3 1.8h1.8l.3-1.8h1.5l-.3 1.8h2.2l-.3 1.5h-2.2l-.4 2.5h2.2l-.3 1.5zm-4.3-1.5l.4-2.5h-1.8l-.4 2.5h1.8z" />
      </svg>
    )
  },
  {
    name: 'Python',
    pos: { top: '55%', left: '15%' },
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <path fill="#3776AB" d="M12 0C5.3 0 5 3.3 5 3.3l.1 3.5h7v1H5.3c-3.4 0-4.1 2.3-4.1 5.3 0 3 1.2 5.1 4.3 5.1H7v-2.3c0-2.8 2.2-5 5-5h2.5V7C14.5 3.3 12 0 12 0zm-2 2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" />
        <path fill="#FFD43B" d="M12 24c6.7 0 7-3.3 7-3.3l-.1-3.5h-7v-1h6.8c3.4 0 4.1-2.3 4.1-5.3 0-3-1.2-5.1-4.3-5.1H17v2.3c0 2.8-2.2 5-5 5H9.5V17c0 3.7 2.5 7 2.5 7zm2-2c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
      </svg>
    )
  },
  {
    name: 'Flutter',
    pos: { top: '45%', left: '35%' },
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <path fill="#54C5F8" d="M14.31 0L0 14.31h7.68L22 0h-7.69z" />
        <path fill="#01579B" d="M10.15 14.31L14.31 10.15 22 17.84V24l-11.85-9.69z" />
        <path fill="#29B6F6" d="M14.31 10.15L0 24h7.68l10.47-10.46-3.84-3.39z" />
      </svg>
    )
  },
  {
    name: 'Antigravity',
    pos: { top: '40%', left: '65%' },
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L16.2 9.6L24 11.2L18 16.2L19.8 24L12 19.6L4.2 24L6 16.2L0 11.2L7.8 9.6L12 2Z" fill="#1F2937" />
        <path d="M12 6L14.2 10.6L19 11.2L15 14.2L16 19L12 16L8 19L9 14.2L5 11.2L9.8 10.6L12 6Z" fill="#F3F4F6" />
      </svg>
    )
  },
  {
    name: 'GA 4',
    pos: { top: '85%', left: '45%' },
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <path fill="#F9AB00" d="M12.01 4v16h-4V4h4zm-8 8v8h-4v-8h4z" />
        <path fill="#E37400" d="M20.01 12v8h-4v-8h4z" />
      </svg>
    )
  },
  {
    name: 'GSC',
    pos: { top: '85%', left: '65%' },
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="#4285F4" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.548 1.156L6.832 2.872v1.682h1.716zm0 3.398v.035H6.832v-.035H3.386L0 7.844v3.577h2.826V8.94c0-.525.429-.954.954-.954h16.476c.525 0 .954.43.954.954v2.48h2.754V7.844l-3.386-3.29H17.3v.035h-1.717v-.035zm7.035 0H17.3V2.872l-1.717-1.716zM8.679 1.188V2.84h6.773V1.188zm11.471 7.07a.834.834 0 00-.132.01l-.543.002c-5.216.014-10.432-.008-15.648.01-.435-.063-.794.436-.716.883v2.264h17.812c-.016-.888.045-1.782-.034-2.666-.104-.342-.427-.502-.739-.502zm-15.422.634a.689.698 0 01.689.698.689.698 0 01-.689.697.689.698 0 01-.688-.697.689.698 0 01.688-.698zm2.134 0a.689.698 0 01.689.698.689.698 0 01-.689.697.689.698 0 01-.688-.697.689.698 0 01.688-.698zM.036 11.645v9.156c0 1.05.858 1.908 1.907 1.908h.883V11.645zm21.174 0v11.064h.882c1.05 0 1.908-.858 1.908-1.908v-9.156zM4.057 13.133v6.85h6.137v-6.85zm13.243.021v3.777l-1.708.977-1.708-.977v-3.758a4.006 4.006 0 000 7.23v2.441h3.457v-2.442a4.006 4.006 0 00-.041-7.248zm-13.243 8.26v1.43h7.925v-1.43z" />
      </svg>
    )
  },
  {
    name: 'Figma',
    pos: { top: '60%', left: '85%' },
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <path fill="#F24E1E" d="M8 2h4a4 4 0 010 8H8V2z" />
        <path fill="#FF7262" d="M4 6a4 4 0 014-4v8H4a4 4 0 010-8z" />
        <path fill="#1ABCFE" d="M4 14a4 4 0 014-4v8a4 4 0 01-4-4z" />
        <path fill="#0ACF83" d="M8 18a4 4 0 110-8h4v4a4 4 0 01-4 4z" />
        <path fill="#A259FF" d="M8 10h4a4 4 0 010 8H8v-8z" />
      </svg>
    )
  },
  {
    name: 'Canva',
    pos: { top: '10%', left: '85%' },
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="#00C4CC" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM6.962 7.68c.754 0 1.337.549 1.405 1.2.069.583-.171 1.097-.822 1.406-.343.171-.48.172-.549.069-.034-.069 0-.137.069-.206.617-.514.617-.926.548-1.508-.034-.378-.308-.618-.583-.618-1.2 0-2.914 2.674-2.674 4.629.103.754.549 1.646 1.509 1.646.308 0 .65-.103.96-.24.5-.264.799-.47 1.097-.8-.073-.885.704-2.046 1.851-2.046.515 0 .926.205.96.583.068.514-.377.582-.514.582s-.378-.034-.378-.17c-.034-.138.309-.07.275-.378-.035-.206-.24-.274-.446-.274-.72 0-1.131.994-1.029 1.611.035.275.172.549.447.549.205 0 .514-.31.617-.755.068-.308.343-.514.583-.514.102 0 .17.034.205.171v.138c-.034.137-.137.548-.102.651 0 .069.034.171.17.171.092 0 .436-.18.777-.459.117-.59.253-1.298.253-1.357.034-.24.137-.48.617-.48.103 0 .171.034.205.171v.138l-.136.617c.445-.583 1.097-.994 1.508-.994.172 0 .309.102.309.274 0 .103 0 .274-.069.446-.137.377-.309.96-.412 1.474 0 .137.035.274.207.274.171 0 .685-.206 1.096-.754l.007-.004c-.002-.068-.007-.134-.007-.202 0-.411.035-.754.104-.994.068-.274.411-.514.617-.514.103 0 .205.069.205.171 0 .035 0 .103-.034.137-.137.446-.24.857-.24 1.269 0 .24.034.582.102.788 0 .034.035.069.07.069.068 0 .548-.445.89-1.028-.308-.206-.48-.549-.48-.96 0-.72.446-1.097.858-1.097.343 0 .617.24.617.72 0 .308-.103.65-.274.96h.102a.77.77 0 0 0 .584-.24.293.293 0 0 1 .134-.117c.335-.425.83-.74 1.41-.74.48 0 .924.205.959.582.068.515-.378.618-.515.618l-.002-.002c-.138 0-.377-.035-.377-.172 0-.137.309-.068.274-.376-.034-.206-.24-.275-.446-.275-.686 0-1.13.891-1.028 1.611.034.275.171.583.445.583.206 0 .515-.308.652-.754.068-.274.343-.514.583-.514.103 0 .17.034.205.171 0 .069 0 .206-.137.652-.17.308-.171.48-.137.617.034.274.171.48.309.583.034.034.068.102.068.102 0 .069-.034.138-.137.138-.034 0-.068 0-.103-.035-.514-.205-.72-.548-.789-.891-.205.24-.445.377-.72.377-.445 0-.89-.411-.96-.926a1.609 1.609 0 0 1 .075-.649c-.203.13-.422.203-.623.203h-.17c-.447.652-.927 1.098-1.27 1.303a.896.896 0 0 1-.377.104c-.068 0-.171-.035-.205-.104-.095-.152-.156-.392-.193-.667-.481.527-1.145.805-1.453.805-.343 0-.548-.206-.582-.55v-.376c.102-.754.377-1.2.377-1.337a.074.074 0 0 0-.069-.07c-.24 0-1.028.824-1.166 1.373l-.103.445c-.068.309-.377.515-.582.515-.103 0-.172-.035-.206-.172v-.137l.046-.233c-.435.31-.87.508-1.075.508-.308 0-.48-.172-.514-.412-.206.274-.445.412-.754.412-.352 0-.696-.24-.862-.593-.244.275-.523.553-.852.764-.48.309-1.028.549-1.68.549-.582 0-1.097-.309-1.371-.583-.412-.377-.651-.96-.686-1.509-.205-1.68.823-3.84 2.4-4.8.378-.205.755-.343 1.132-.343zm9.77 3.291c-.104 0-.172.172-.172.343 0 .274.137.583.309.755a1.74 1.74 0 0 0 .102-.583c0-.343-.137-.515-.24-.515z" />
      </svg>
    )
  },
  {
    name: 'Firebase',
    pos: { top: '20%', left: '35%' },
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FFCA28" d="M18.89 7.64l-2.43-4.66a.82.82 0 00-1.46 0l-3.35 6.42-2.12-4.07a.82.82 0 00-1.46 0L.92 18.91a.82.82 0 00.32 1.13l10.05 5.67a.82.82 0 00.8 0l10.05-5.67a.82.82 0 00.32-1.13L18.89 7.64z" />
        <path fill="#FFA000" d="M13.62 13.91l-2.12-4.07a.82.82 0 00-1.46 0l-1.92 3.69 3.5 6.7z" />
        <path fill="#F57C00" d="M11.5 5.34l-3.43-6.58a.82.82 0 00-1.46 0L.92 18.91a.82.82 0 00.32 1.13l5.88-14.7z" />
      </svg>
    )
  },
  {
    name: 'Vercel',
    pos: { top: '70%', left: '45%' },
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="#FFF" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1L24 22H0L12 1Z" />
      </svg>
    )
  }
]

const softSkills = [
  'Open-minded',
  'Critical Thinking',
  'Active Listener',
  'Teamwork',
  'Willingness to Learn',
]

export default function Skills() {
  const allSkills = [...bigSkills, ...smallSkills];
  const extendedSkills = [...allSkills, ...allSkills, ...allSkills];
  const [activeIndex, setActiveIndex] = useState(allSkills.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setActiveIndex((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // When we reach the end of the second set, jump back to the end of the first set (same item)
    if (activeIndex === allSkills.length * 2) {
      const resetTimer = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(allSkills.length);
      }, 600); // Wait for the 0.5s transition to finish
      return () => clearTimeout(resetTimer);
    }
    // If the user clicks backwards past the first set, jump forward
    if (activeIndex === 0) {
      const resetTimer = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(allSkills.length);
      }, 600);
      return () => clearTimeout(resetTimer);
    }
  }, [activeIndex, allSkills.length]);

  const itemWidth = 180;
  const offset = containerWidth > 0 ? (containerWidth / 2) - (itemWidth / 2) - (activeIndex * itemWidth) : 0;

  return (
    <section
      id="skills"
      className="section"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div className="section-inner" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem', textAlign: 'center' }}>
        <Reveal>
          <p className="section-label">Skills</p>
          <h2 className="section-title">My Toolkit</h2>
          <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '600px' }}>
            Technologies and tools I use to build and automate things.
          </p>
          <div className="section-divider" style={{ margin: '1.5rem auto 3rem auto' }} />
        </Reveal>
      </div>

      <div ref={containerRef} style={{ 
        width: '100%', 
        overflow: 'hidden', 
        padding: '2rem 0 6rem 0', 
        position: 'relative',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
      }}>
        {containerWidth > 0 && (
          <motion.div
            animate={{ x: offset }}
            transition={{ duration: isTransitioning ? 0.5 : 0, ease: 'easeInOut' }}
            style={{ display: 'flex', width: 'max-content', alignItems: 'center' }}
          >
            {extendedSkills.map((skill, index) => {
              const isFocused = index === activeIndex;
              return (
                <motion.div
                  key={index}
                  animate={{
                    scale: isFocused ? 1.4 : 0.7,
                    opacity: isFocused ? 1 : 0.3,
                  }}
                  transition={{ duration: isTransitioning ? 0.5 : 0 }}
                  style={{
                    width: `${itemWidth}px`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1.5rem',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    setIsTransitioning(true);
                    setActiveIndex(index);
                  }}
                >
                  <div style={{
                    width: '90px',
                    height: '90px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: isFocused ? 'var(--color-bg-base)' : 'var(--glass-bg)',
                    borderRadius: '24px',
                    boxShadow: isFocused ? '0 12px 32px rgba(37,99,235,0.2)' : 'none',
                    border: isFocused ? '1px solid rgba(37,99,235,0.2)' : '1px solid transparent',
                    transition: isTransitioning ? 'all 0.5s ease' : 'none',
                  }}>
                    <div style={{ transform: 'scale(1.8)', display: 'flex' }}>
                      {skill.icon}
                    </div>
                  </div>
                  <span style={{
                    fontSize: '1.1rem',
                    fontWeight: isFocused ? 800 : 600,
                    color: isFocused ? 'var(--color-text-dark)' : 'var(--color-text-muted)',
                    transition: isTransitioning ? 'all 0.5s ease' : 'none',
                    textAlign: 'center',
                  }}>
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  )
}
