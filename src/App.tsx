import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const projectsData = [
  {
    title: 'Sistem Monitoring dan Evaluasi Kinerja Klinik dengan Metode Performance Dashboard',
    image: '/ariqfadhilahs/p1.jpg',
    desc: 'Pengembangan dashboard analitik manajemen klinik berbasis metode Performance Dashboard. Mengintegrasikan grafik real-time untuk pemantauan target layanan dan efisiensi pengambilan keputusan administratif.',
    role: 'Fullstack Developer',
    tech: ['PHP', 'MySQL', 'CSS', 'HTML', 'JavaScript'],
    outcome: 'Mempermudah manajemen klinik dalam memonitor dan mengevaluasi kinerja layanan secara real-time melalui visualisasi indikator performa utama (KPI).',
  },
  {
    title: 'Website Company Profile Teman Trip V1',
    image: '/ariqfadhilahs/p3.png', 
    desc: 'Landing page dengan estetika industrial-rustic yang menonjolkan identitas brand kuat melalui tipografi tegas dan alur navigasi yang sederhana namun informatif bagi calon pelancong.',
    role: 'Fullstack Developer',
    tech: ['React', 'Tailwind CSS'],
    outcome: 'Membantu perusahaan menampilkan informasi layanan dan profil secara profesional.',
  },
  {
    title: 'Website Company Profile Teman Trip V2',
    image: '/ariqfadhilahs/p2.png',
    desc: 'Iterasi modern dengan elemen visual abstrak dan palet warna dinamis. Mengedepankan aspek user-centric dengan kartu fitur responsif untuk audiens pelancong muda.',
    role: 'Fullstack Developer',
    tech: ['React', 'Tailwind CSS'],
    outcome: 'Membantu perusahaan menampilkan informasi layanan dan profil secara profesional.',
  },
  {
  title: 'Sistem POS Toko Kelontong Berbasis Web',
  image: '/ariqfadhilahs/p4.png',
  desc: 'Solusi manajemen inventaris retail dengan fitur scan barcode, pemantauan stok kritis otomatis, dan visualisasi tren omzet bulanan untuk optimasi operasional bisnis.',
  role: 'Fullstack Developer',
  tech: ['Laravel', 'MySQL', 'CSS', 'HTML', 'JavaScript'],
  outcome: 'Digunakan untuk pencatatan transaksi, stok barang, laporan omzet bulanan toko dan barcode scanner.',
  },
  {
  title: 'Web Portofolio Pribadi',
  image: '/ariqfadhilahs/p5.png',
  desc: 'Website portofolio pribadi yang dirancang sebagai media profesional untuk menampilkan profil, pengalaman, proyek fungsional, keterampilan teknis, serta sertifikasi. Dibangun dengan pendekatan modern dan responsif untuk memberikan pengalaman pengguna yang optimal di berbagai perangkat.',
  role: 'Fullstack Developer',
  tech: ['React', 'Tailwind CSS'],
  outcome: 'Menjadi media utama dalam proses melamar pekerjaan dengan menampilkan kompetensi teknis, pengalaman, dan proyek secara jelas sehingga memudahkan recruiter dalam menilai kemampuan dan potensi kandidat.',
  },
];

const experiences = [
  {
    role: 'Fullstack Developer (Intern)',
    company: 'Klinik Pratama Perdita',
    period: 'Okt 2023 – Sep 2024',
    points: [
      'Merancang dan mengembangkan sistem monitoring dan evaluasi kinerja klinik berbasis web.',
      'Mengimplementasikan fitur CRUD dan alur data antar divisi.',
      'Mengelola integrasi database untuk mendukung pelaporan operasional.',
    ],
  },
  {
    role: 'Staff Divisi Pasokan Produk',
    company: 'Latih Hobi Bandung',
    period: 'Agu 2023 – Sep 2023',
    points: [
      'Membantu persiapan bahan baku untuk perakitan lebih dari 25 unit robot per hari.',
      'Melakukan pengujian robot untuk memastikan kualitas dan kinerja sesuai standar.',
    ],
  },
];


const certifications = [
  {
    title: 'Junior Web Programmer',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
  },
  {
    title: 'CCNAv7: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
  },
  {
    title: 'CCNAv7: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco Networking Academy',
  },
  {
    title: 'Belajar Dasar Pemrograman Web',
    issuer: 'Dicoding Indonesia',
  },
  {
    title: 'Belajar Dasar JavaScript',
    issuer: 'Dicoding Indonesia',
  },
  {
    title: 'Belajar Membuat Front-End untuk Pemula',
    issuer: 'Dicoding Indonesia',
  },
  {
    title: 'Introduction to Financial Literacy',
    issuer: 'Dicoding Indonesia',
  },
  {
    title: 'Belajar Penerapan Data Science dengan Microsoft Fabric',
    issuer: 'Dicoding Indonesia',
  },
];


const coreSkills = [
  { name: "PHP", icon: "/ariqfadhilahs/php.png" },
  { name: "Laravel", icon: "/ariqfadhilahs/Laravel.png" },
  { name: "Tailwind_CSS", icon: "/ariqfadhilahs/Tailwind_CSS.png" },
  { name: "CSS", icon: "/ariqfadhilahs/CSS3.png" },
  { name: "SQL", icon: "/ariqfadhilahs/MySQL.png" },
  { name: "Git", icon: "/ariqfadhilahs/Git.png" },
  { name: "HTML", icon: "/ariqfadhilahs/HTML5.png" },
  { name: "Javascript", icon: "/ariqfadhilahs/JavaScript.png" },
  { name: "React", icon: "/ariqfadhilahs/React.png" },
  { name: "Microsoft_Office", icon: "/ariqfadhilahs/Microsoft_Office.png" },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = 3;

  {/* DARK MODE LOGIC */}
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const systemFavorsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && systemFavorsDark)) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  {/* SLIDER LOGIC */}
  const canGoLeft = startIdx > 0;
  const canGoRight = startIdx + visibleCount < projectsData.length;
  const visibleProjects = projectsData.slice(startIdx, startIdx + visibleCount);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
      
      {/* HEADER / NAVBAR */}
      <header className={`sticky top-0 z-50 border-b backdrop-blur-md ${darkMode ? 'bg-slate-900/80 border-slate-700' : 'bg-white/80 border-slate-200'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-2xl tracking-tighter">Ariq Fadhilah Saputra.</h1>
          <div className="flex items-center gap-6">
            <nav className={`hidden md:flex gap-6 font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <a href="#about" className="hover:text-sky-500 transition">About</a>
              <a href="#experience" className="hover:text-sky-500 transition">Experience</a>
              <a href="#skills" className="hover:text-sky-500 transition">Skills</a>
              <a href="#projects" className="hover:text-sky-500 transition">Projects</a>
              <a href="#certifications" className="hover:text-sky-500 transition">Certifications</a>
              <a href="#contact" className="hover:text-sky-500 transition">Contact</a>
            </nav>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-12 h-6 flex items-center rounded-full px-1 transition-all ${darkMode ? 'bg-sky-600' : 'bg-slate-300'}`}
            >
              <div className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform ${darkMode ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center text-center px-4">
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">Halo, Saya Ariq Fadhilah Saputra.</h2>
          <p className="text-xl md:text-2xl opacity-75 max-w-2xl mx-auto font-light">
            Junior Fullstack Developer with hands-on experience building Laravel-based web systems such as company profiles and POS applications.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-slate-50/30 dark:bg-slate-800/20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl blur opacity-25 transition duration-1000" />
              <img 
                src="/ariqfadhilahs/profile.jpg" 
                alt="Profile Picture" 
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl grayscale hover:grayscale-0 transition duration-500" 
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold mb-6">Tentang Saya</h3>
            <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Lulusan S1 Teknik Informatika dengan pengalaman sebagai Fullstack Developer. Berpengalaman dalam pengembangan aplikasi web menggunakan Laravel, PHP, dan SQL. Terbiasa membangun fitur CRUD, integrasi database, serta mendukung kebutuhan sistem berbasis web.
              Telah mengembangkan beberapa sistem internal seperti website company profile dan aplikasi POS sederhana yang digunakan untuk mendukung operasional dan manajemen data.
              Memiliki semangat belajar tinggi, bertanggung jawab, dan siap berkembang bersama perusahaan.
            </p>
            <Button asChild className="mt-2" variant="default">
              <a
                href="/ariqfadhilahs/public/cv/cv_ariq_fadhilah_saputra.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </Button>  
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black mb-12 text-slate-800 dark:text-white tracking-tight">
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="border-none shadow-lg bg-white dark:bg-slate-800"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">
                    {exp.role}
                  </h3>
                  <p className="text-sm opacity-70 mb-4">
                    {exp.company} · {exp.period}
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-sm">
                    {exp.points.map((point, i) => (
                      <li key={i}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CORE SKILLS SECTION (NEW - Sesuai Gambar) */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black mb-12 text-slate-800 dark:text-white tracking-tight">
            Skills
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {coreSkills.map((skill, index) => (
              <div 
                key={index} 
                className="relative h-32 flex flex-col items-center justify-center p-4 rounded-2xl 
                           bg-slate-300/80 dark:bg-slate-800/60 
                           border border-transparent hover:border-sky-500/50 
                           transition-all duration-300 group overflow-hidden"
              >
                {/* Logo Skill */}
                <div className="z-10 w-16 h-16 flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => { 
                      const target = e.target; 
                      if (target instanceof HTMLImageElement) {
                        target.src = `https://ui-avatars.com/api/?name=${skill.name}&background=94a3b8&color=fff&bold=true`;
                      }
                    }} 
                  />
                </div>
                {/* Label Bawah Kecil */}
                <p className="z-10 mt-1 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-600 dark:text-slate-400 group-hover:text-sky-500 transition-colors">
                  {skill.name.replace('_', ' ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="py-24 bg-slate-50/30 dark:bg-slate-800/10">
        <div className="container mx-auto px-6">

          {/* HEADER */}
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-5xl font-black mb-12 text-slate-800 dark:text-white tracking-tight">
              Highlighted Projects
            </h2>

            <div className="flex gap-2">
              <button
                onClick={() => canGoLeft && setStartIdx(startIdx - 1)}
                disabled={!canGoLeft}
                className="p-3 rounded-full border"
              >
                ←
              </button>
              <button
                onClick={() => canGoRight && setStartIdx(startIdx + 1)}
                disabled={!canGoRight}
                className="p-3 rounded-full border"
              >
                →
              </button>
            </div>
          </div>

          {/* PROJECT GRID */}
          <div className="grid md:grid-cols-3 gap-8">
            {visibleProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-xl bg-white dark:bg-slate-800"
              >
                {/* IMAGE */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />

                <CardContent className="p-6">
                  {/* TITLE */}
                  <h4 className="text-xl font-bold mb-3">
                    {project.title}
                  </h4>

                  {/* DESCRIPTION */}
                  <p className="text-sm opacity-70 mb-4">
                    {project.desc}
                  </p>

                  {/* ROLE */}
                  <p className="text-sm mb-2">
                    <span className="font-semibold">
                      Role:
                    </span>{' '}
                    {project.role}
                  </p>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* OUTCOME */}
                  <p className="text-xs text-emerald-600 mt-4">
                    ✔ {project.outcome}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section
        id="certifications"
        className="py-24 bg-slate-50/30 dark:bg-slate-800/10">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black mb-12 text-slate-800 dark:text-white tracking-tight">
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border bg-white dark:bg-slate-800"
              >
                <h4 className="font-semibold">
                  {cert.title}
                </h4>
                <p className="text-sm opacity-70">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 text-center">
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl mx-auto p-12 rounded-3xl ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
            <h2 className="text-4xl font-bold mb-4">Let’s Work Together</h2>
            <p className="text-xl opacity-70 mb-10">Terbuka untuk posisi Junior Developer, magang, atau proyek lepas.</p>
            <div className="flex justify-center gap-8">
              {/* Email */}
              <a href="mailto:ariqfadhilah66@gmail.com?subject=Job%20Application%20-%20Ariq%20Fadhilah%20Saputra" className="hover:scale-110 transition text-sky-500">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/6285782563922" target="_blank" rel="noreferrer" className="hover:scale-110 transition text-green-500">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12.01 2.01C6.48 2.01 2 6.48 2 12.01c0 2.17.7 4.18 1.89 5.83L2.06 22l4.35-1.78c1.6.93 3.44 1.46 5.4 1.46 5.53 0 10-4.47 10-10S17.53 2.01 12.01 2.01zm4.75 13.92c-.23.63-1.34 1.21-1.85 1.28-.41.06-.94.09-2.85-.7-2.45-1.02-4.04-3.5-4.16-3.66-.12-.17-1.02-1.35-1.02-2.58 0-1.22.64-1.83.87-2.08.23-.25.5-.31.67-.31.17 0 .34 0 .49.01.16.01.37-.06.57.42.2.5.68 1.66.74 1.78.06.12.1.27.02.43-.08.17-.13.27-.25.43-.12.15-.26.34-.37.46-.12.12-.24.26-.1.5.14.24.62 1.02 1.33 1.65.91.81 1.67 1.06 1.91 1.18.24.12.38.1.52-.06.14-.17.62-.71.78-.96.16-.25.33-.21.55-.13.23.08 1.45.68 1.7.81.25.13.42.19.48.3.06.11.06.64-.17 1.27z"/></svg>
              </a>
              {/* Linkedin */}
              <a href="https://www.linkedin.com/in/ariq-fadhilah-saputra-322086153/" target="_blank" rel="noreferrer" className="hover:scale-110 transition text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-10 h-10">
                <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C23.12 107.3 0 84.18 0 54.9A53.24 53.24 0 0153.24 1.7c29.28 0 53.24 23.12 53.24 53.2 0 29.28-23.96 53.2-53.24 53.2zM447.8 448h-92.68V302.4c0-34.7-12.4-58.4-43.4-58.4-23.7 0-37.8 16-44 31.4-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.68s1.2-241.1 0-266.1h92.68v37.7c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.6 39.8 106.6 125.4V448z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/ariqfdhlh_" target="_blank" rel="noreferrer" className="hover:scale-110 transition text-pink-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-10 h-10">
                <path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
              </a>
              {/* Github */}
              <a href="https://github.com/Y2riq" target="_blank" rel="noreferrer" className="hover:scale-110 transition text-slate-700 dark:text-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center border-t border-slate-200 dark:border-slate-800 opacity-50 text-sm">
        © {new Date().getFullYear()} Ariq Fadhilah Saputra. Built with React & Tailwind.
      </footer>
    </div>
  );
}
