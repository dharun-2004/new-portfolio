
import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [


{ 
    title: "WEATHER FORECAST", 
    cat: "Weather Forecast Web App", 
    img: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&q=80&w=800", 
    link: "https://climely.netlify.app" 
  },

  { 
    title: "DECODE YOUR COURSE", 
    cat: "E-Learning Platform (MERN Stack)", 
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800", 
    link: "https://decodeyourcourse.netlify.app" 
  },
    
  { 
    title: "DOMATO", 
    cat: "Food delivery app", 
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800", 
    link: "https://dharundoc.neocities.org/Domoto/food" 
  },

  { 
    title: "SAM SHOP", 
    cat: "Ecommerce Platform", 
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800", 
    link: "https://dharundoc.neocities.org/Sam%20Shop/ecom" 
  },

  { 
    title: "POLICE FITNESS", 
    cat: "Health & Workout", 
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800", 
    link: "https://dharundoc.neocities.org/Police%20fitness/Police%20fitness" 
  },

  { 
    title: "BLOG HUB", 
    cat: "Content Platform", 
    img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800", 
    link: "https://dharundoc.neocities.org/blog/project%205" 
  },

  
];


  const skills = [
    { name: "HTML5", icon: "https://img.icons8.com/ios-filled/100/000000/html-5.png" },
    { name: "CSS3", icon: "https://img.icons8.com/ios-filled/100/000000/css3.png" },
    { name: "JavaScript", icon: "https://img.icons8.com/ios-filled/100/000000/javascript.png" },
    { name: "Core Python", icon: "https://img.icons8.com/ios-filled/100/000000/python.png" },
    { name: "PhotoShop", icon: "https://img.icons8.com/?size=100&id=60629&format=png&color=000000" },
    { name: "React", icon: "https://img.icons8.com/ios-filled/100/000000/react-native.png" },
    { name: "Bootstrap", icon: "https://img.icons8.com/?size=100&id=b27a0yVyoMpG&format=png&color=000000" },
    { name: "GitHub", icon: "https://img.icons8.com/?size=100&id=12599&format=png&color=000000" },
    { name: "Git", icon: "https://img.icons8.com/?size=100&id=38389&format=png&color=000000" },
    { name: "Canva", icon: "https://img.icons8.com/?size=100&id=MSSIu6fxvJKT&format=png&color=000000" },
    { name: "MS Office", icon: "https://img.icons8.com/?size=100&id=117062&format=png&color=000000" },
    { name: "TypeScript(Learning)", icon: "https://img.icons8.com/?size=100&id=cHBUT9SmrD2V&format=png&color=000000" },

  ];

  

  const qualifications = [
    { degree: "BSC (COMPUTER SCIENCE)", school: "Jairam College", univ: "Periyar University", year: "2022-2025" },
    { degree: "Higher Secondary", school: "Govt Boys Higher Secondary School", year: "2021-2022" },
    { degree: "Secondary Level", school: "Govt Boys Higher Secondary School", year: "2020-2021" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 px-6 md:px-12 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-black/5' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="text-4xl font-black tracking-tighter uppercase">Dharun<span className="text-gray-900">.</span></a>
          <div className="hidden md:flex space-x-10 text-[10px] font-bold uppercase tracking-widest">
            <a href="#about" className="  text-2xl hover:opacity-50 transition-opacity">About</a>
            <a href="#skills" className=" text-2xl  hover:opacity-50 transition-opacity">Skills</a>
            <a href="#projects" className=" text-2xl  hover:opacity-50 transition-opacity">Work</a>
            <a href="#contact" className=" text-2xl hover:opacity-50 transition-opacity">Contact</a>
          </div>
          <a href="mailto:dharun6886@gmail.com" className="px-6 py-2 border-2 border-black text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">Let's Talk</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-black text-white text-[9px] font-black uppercase tracking-[0.3em] mb-6"> Open for Work</span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter uppercase mb-8">
              Front-end<br /><span className="outline-text">Developer</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-xl mb-10 leading-relaxed text-justify indent-8">
  Enthusiastic and focused fresher aiming to begin a career in the IT field.
  Strong foundation in programming with a keen interest in solving real-world
  problems. Always open to learning new skills and contributing effectively to
  team goals.
</p>

            <div className="flex space-x-4">
              <a href="#projects" className="btn-primary border-2 border-black px-8 py-4 text-xs font-black uppercase tracking-widest z-10">View Projects</a>
              <a href="DHARUN S S.pdf" download className="px-8 py-4 text-xs font-black uppercase tracking-widest bg-gray-50 hover:bg-gray-100 transition-colors">Download CV</a>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-[4/5] overflow-hidden bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1517503632222-64085e36227b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2dyYW1taW5nfGVufDB8MXwwfHx8Mg%3D%3D" 
              alt="Dharun" 
              className="w-full h-full object-cover  brightness-110"
            />
            <div className="absolute inset-0  border-white/10 pointer-events-none"></div>
          </div>
        </div>
        <div className="absolute bottom-10 left-12 hidden lg:block">
          <div className="flex items-center space-x-6">
            <a href="https://github.com/dharun-2004" className="text-xs font-bold uppercase tracking-widest hover:opacity-50">Github</a>
            <div className="w-8 h-[1px] bg-black"></div>
            <a href="http://linkedin.com/in/dharun-ss" className="text-xs font-bold uppercase tracking-widest hover:opacity-50">LinkedIn</a>
            <div className="w-8 h-[1px] bg-black"></div>
            <a href="https://www.instagram.com/dharun_94_" className="text-xs font-bold uppercase tracking-widest hover:opacity-50">Instagram</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-12 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-gray-500 mb-7">01. About Me</h2>
              <p className="text-2xl md:text-5xl font-light leading-tight">
                "I build websites with <span className='text-white font-bold'>precision and purpose</span> — because details make the difference."

              </p>
            </div>
            <div className="space-y-8 text-gray-400 leading-loose text-lg">
              <p>
                Hello, I'm Dharun, a dedicated web developer with a passion for crafting seamless and visually appealing user experiences. With a strong foundation in frontend development, I'm actively seeking opportunities for full-time positions.
              </p>
              <p>
                My daily routine revolves around honing my skills through hands-on practice, tackling diverse projects, and continuously enhancing my problem-solving abilities.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div>
                  <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">Future Plans</h4>
                  <ul className="text-sm space-y-1">
                    <li>FullStack Developer</li>
                    <li>Food Delivery App</li>
                    <li>YouTube Content</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">Hobbies</h4>
                  <ul className="text-sm space-y-1">
                    <li>Running</li>
                    <li>Cricket</li>
                    <li>Swimming</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-gray-400 mb-4">02. Technical</h2>
              <h3 className="text-5xl font-black uppercase tracking-tighter">My Skillset</h3>
            </div>
            <p className="text-gray-500 max-w-sm">Constantly evolving with the latest technologies to build better digital products.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-gray-200 border border-gray-200">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-white p-12 flex flex-col items-center group transition-all duration-500 hover:bg-black hover:text-white">
                <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-6 grayscale group-hover:invert transition-all" />
                <span className="text-[10px] font-black uppercase tracking-widest">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-32 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-gray-400 mb-20">03. Education</h2>
          <div className="space-y-6">
            {qualifications.map((q, idx) => (
              <div key={idx} className="bw-card bg-white p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-2xl font-black uppercase mb-1">{q.degree}</h3>
                  <p className="text-gray-500 font-medium uppercase text-xs tracking-widest">{q.school} {q.univ ? `| ${q.univ}` : ''}</p>
                </div>
                <div className="mt-4 md:mt-0 px-4 py-2 bg-black text-white text-[10px] font-bold uppercase tracking-widest">
                  {q.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-gray-400 mb-20">04. Works</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((p, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden aspect-[16/10] mb-8 bg-gray-100">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a href={p.link} target="_blank" className="bg-white text-black px-8 py-4 text-[15px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">View Project</a>
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter">{p.title}</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{p.cat}</p>
                  </div>
                  <span className="text-xs font-bold text-gray-300">/0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-white pt-32 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 pb-20 border-b border-white/10">
            <div>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-none">
                Get In<br />Touch
              </h2>
              <p className="text-gray-400 max-w-sm text-lg">
                I'm always open to new opportunities and creative collaborations. Let's build something amazing together.
              </p>
            </div>
            <div className="flex flex-col justify-end space-y-12">
              <div>
                <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Mail Me</h4>
                <a href="mailto:dharun6886@gmail.com" className="text-2xl md:text-4xl font-light hover:text-gray-400 transition-colors">dharun6886@gmail.com</a>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Socials</h4>
                <div className="flex space-x-8 text-sm font-bold uppercase tracking-widest">
                  <a href="https://github.com/dharun-2004" className="hover:text-gray-400">Github</a>
                  <a href="http://linkedin.com/in/dharun-ss" className="hover:text-gray-400">LinkedIn</a>
                  <a href="https://www.instagram.com/its_dharun" className="hover:text-gray-400">Instagram</a>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] space-y-4 md:space-y-0">
            <p>&copy; 2024 Dharun S. Portfolio</p>
            <p>Built with Type Script & Tailwind</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
