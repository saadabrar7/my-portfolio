import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// --- Shared Navbar Component ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#0b0f1a]/90 backdrop-blur-xl z-50 px-6 py-5 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Responsive Logo with Image */}
        <Link to="/" className="flex items-center gap-2 group transition-all">
          <div className="relative w-8 h-8 md:w-10 md:h-10 overflow-hidden rounded-lg border border-sky-500/30 group-hover:border-sky-500 transition-all">
            <img 
              src="/saad-abrar.jpg" 
              alt="Saad" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => { e.target.src = "https://via.placeholder.com/40?text=S" }} // Fallback if image missing
            />
          </div>
          <span className="text-white font-black tracking-tighter text-xl md:text-2xl italic ml-1">
            SAAD_ABRAR_7  
          </span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/about" className="hover:text-white transition">About</Link>
          <Link to="/education" className="hover:text-white transition">Education</Link>
          <Link to="/skills" className="hover:text-white transition">Skills</Link>
          <Link to="/experience" className="hover:text-white transition text-sky-400 font-black">Experience</Link>
          <a href="mailto:saadabrar681@gmail.com" className="bg-sky-600 text-white px-6 py-2 rounded-full hover:bg-sky-500 transition-all shadow-lg shadow-sky-500/20">Hire Me</a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-2xl">
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0b0f1a] p-6 flex flex-col gap-4 text-center border-t border-white/5 uppercase text-[10px] tracking-widest text-slate-400">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/education" onClick={() => setIsOpen(false)}>Education</Link>
          <Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link to="/experience" onClick={() => setIsOpen(false)}>Experience</Link>
        </div>
      )}
    </nav>
  );
};

// --- Page Components ---

const Home = () => (
  <section className="pt-48 pb-32 flex flex-col md:flex-row items-center gap-12 px-6 animate-fade-in">
    <div className="relative group">
      <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-sky-500/30 relative z-10 p-2 bg-slate-900 shadow-2xl shadow-sky-500/10">
        <img 
          src="/saad-abrar.jpg" 
          alt="Profile" 
          className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>
      <div className="absolute -inset-4 bg-sky-500/20 blur-3xl rounded-full group-hover:bg-sky-500/40 transition duration-1000"></div>
    </div>
    <div className="text-center md:text-left">
      <h4 className="text-sky-400 font-mono tracking-[0.4em] text-xs mb-4 uppercase"> React.js Developer </h4>
      <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-8">
        Mohammed <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-600">Saad Abrar</span>
      </h1>
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        <Link to="/skills" className="bg-sky-600 px-8 py-4 rounded-xl font-bold text-white hover:bg-sky-500 transition shadow-xl shadow-sky-900/20">My Tech Stack</Link>
        <a 
  href={`${window.location.origin}/Saad_Abrar_Resume.pdf`} 
  target="_blank" 
  rel="noreferrer"
  download="Saad_Abrar_Resume.pdf"
  className="border border-white/10 px-8 py-4 rounded-xl font-bold text-white hover:bg-white/5 transition tracking-widest text-xs uppercase"
>
  Download Resume
</a>
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="pt-40 pb-20 px-6 animate-fade-in">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative mx-auto lg:mx-0">
        <div className="w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 relative z-10 bg-slate-900 shadow-2xl">
           <img src="/saad-abrar-2.jpg" alt="Profile" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="absolute -inset-4 border-2 border-sky-500/20 rounded-3xl -z-10 translate-x-4 translate-y-4"></div>
      </div>
      <div>
        <h2 className="text-4xl font-black text-white mb-8 tracking-tight italic uppercase">Professional Profile.</h2>
        <p className="text-slate-400 text-lg leading-relaxed mb-8">
          I am a detail-oriented React.js Developer with practical experience building responsive 
          and efficient web applications. I focus on designing reusable components and optimizing performance,
          delivering high-quality code that solves complex problems.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
          <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
            <span className="text-sky-500 block mb-1 uppercase tracking-widest">Location</span> Hyderabad, India
          </div>
          <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
            <span className="text-sky-500 block mb-1 uppercase tracking-widest">Education</span> B.E. (E&C)
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Education = () => {
  const education = [
    { 
      title: "Bachelor of Engineering in Electronics & Communication", 
      school: "Guru Nanak Dev Engineering College, Bidar", 
      year: "2020 - 2024", 
      result: "CGPA: 7.26" 
    },
    { 
      title: "Pre-University Education", 
      school: "Shaheen INDP PU College, Bidar", 
      year: "2019 - 2020", 
      result: "73%" 
    },
    { 
      title: "Secondary School Certificate", 
      school: "Shaheen Urdu High School, Bidar", 
      year: "2017 - 2018", 
      result: "77%" 
    }
  ];

  return (
    <section className="pt-40 pb-20 px-6 animate-fade-in">
      <h2 className="text-4xl font-black text-white mb-16 tracking-tight">Academic <span className="text-sky-500 italic">History.</span></h2>
      <div className="grid gap-6">
        {education.map((item, i) => (
          <div key={i} className="p-8 bg-slate-900/40 border border-white/5 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-sky-500/5 transition duration-500">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
              <p className="text-slate-400 text-sm italic">{item.school}</p>
            </div>
            <div className="flex flex-col items-start md:items-end">
              <span className="text-sky-500 font-mono text-sm">{item.year}</span>
              <span className="text-white/40 text-xs font-bold mt-1 tracking-widest uppercase">{item.result}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Skills = () => {
  const skillsets = [
    { cat: "Frontend", list: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3"] },
    { cat: "State Management", list: ["Redux", "Context API"] },
    { cat: "Styling", list: ["Tailwind CSS", "Bootstrap", "Material-UI"] },
    { cat: "Backend & Tools", list: ["Node.js", "Express.js", "MongoDB", "Python", "Git/GitHub"] }
  ];
  return (
    <section className="pt-40 pb-20 px-6 animate-fade-in">
      <h2 className="text-4xl font-black text-white mb-16 italic tracking-tight uppercase">Tech Stack.</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsets.map((skill, i) => (
          <div key={i} className="p-8 bg-slate-900/40 border border-white/5 rounded-3xl hover:border-sky-500/40 transition-all duration-500">
            <h4 className="text-sky-400 font-mono text-[10px] uppercase tracking-[0.3em] mb-6">{skill.cat}</h4>
            <ul className="space-y-3">
              {skill.list.map((item, idx) => (
                <li key={idx} className="text-slate-400 text-sm flex items-center gap-2 font-medium">
                  <span className="w-1 h-1 bg-sky-500 rounded-full"></span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const Experience = () => (
  <section className="pt-40 pb-20 px-4 animate-fade-in">
    <h2 className="text-4xl font-black text-white mb-16 tracking-tight">Professional <span className="text-sky-500">History.</span></h2>
    <div className="grid gap-10">
      <div className="bg-slate-900/50 p-10 rounded-3xl border border-white/5 hover:border-sky-500/40 transition-all relative group overflow-hidden">
        <div className="absolute top-0 right-0 p-10 text-8xl font-black text-white/5 uppercase select-none group-hover:text-sky-500/5 transition">Wipro</div>
        <h3 className="text-2xl font-bold text-white">Associate Analyst - IT</h3>
        <p className="text-sky-400 font-mono text-sm mb-6">Wipro | Hyderabad | Nov 2024 - Present</p>
        <ul className="text-slate-400 space-y-4 max-w-2xl">
          <li className="flex gap-3 items-start"><span className="text-sky-500 mt-1">✦</span> Analyzed data patterns to identify trends for process improvements.</li>
          <li className="flex gap-3 items-start"><span className="text-sky-500 mt-1">✦</span> Built reporting dashboards in Excel for data-driven decisions.</li>
          <li className="flex gap-3 items-start"><span className="text-sky-500 mt-1">✦</span> Used SQL to extract and process complex datasets.</li>
        </ul>
      </div>
    </div>
  </section>
);

const App = () => (
  <Router>
    <div className="bg-[#080b14] text-slate-300 min-h-screen selection:bg-sky-500/30 overflow-x-hidden">
      <Navbar />
      <main className="max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </main>
      <footer className="py-20 text-center text-slate-700 text-[10px] tracking-[0.4em] uppercase border-t border-white/5 mt-20">
        © Developed Mohammed Saad Abrar.
      </footer>
    </div>
  </Router>
);

export default App;