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
  {
  title: 'LaporIn',
  image: '/ariqfadhilahs/p6.png',
  desc: 'LaporIn adalah aplikasi web untuk mencatat, memantau, dan mengelola tiket laporan/keluhan pengguna secara real-time. Aplikasi ini dirancang untuk membantu tim support atau operasional dalam melacak status tiket, mengukur performa penyelesaian, serta meningkatkan efisiensi penanganan laporan melalui dashboard statistik yang informatif.',
  role: 'Fullstack Developer',
  tech: ['Vue.js 3', 'Laravel', 'MySQL', 'RESTful API', 'Tailwind CSS', 'Axios', 'Chart.js'],
  outcome: 'Membantu tim support dalam memantau dan mengelola tiket laporan secara efisien, meningkatkan responsivitas terhadap keluhan pengguna, serta memberikan wawasan melalui dashboard statistik untuk perbaikan layanan.',
  },
  {
  title: 'MyNews',
  image: '/ariqfadhilahs/p7.png',
  desc: 'MyNews adalah aplikasi web berita dan forum diskusi yang memungkinkan pengguna untuk membaca berita terkini, berbagi artikel favorit, dan berdiskusi dengan komunitas. Aplikasi ini dirancang untuk memberikan pengalaman membaca yang nyaman serta memfasilitasi interaksi sosial antar pengguna melalui fitur komentar dan forum diskusi.',
  role: 'Fullstack Developer',
  tech: ['Laravel', 'MySQL', 'Filament 5', 'Tailwind CSS'],
  outcome: 'Membantu pengguna untuk tetap update dengan berita terkini, berbagi artikel favorit, dan berinteraksi dengan komunitas melalui fitur komentar dan forum diskusi yang mudah digunakan.',
  },
];

const experiences = [
  {
    role: 'Back End Developer (Intern)',
    company: 'PT Daya Rekadigital Indonesia',
    period: 'Jul 2026 – Saat ini',
    points: [
      'Bertanggung jawab dalam perancangan dan pengembangan arsitektur back-end aplikasi.',
      'Membangun serta mengelola RESTful API dan integrasi basis data.',
    ],
  },
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
      'Membantu dalam pemrograman robot dan pengujian kualitas sesuai standar operasional.',
      'Membantu pengadaan bahan baku komponen robot dari pemasok.',
    ],
  },
];

interface CertificationItem {
  title: string;
  issuer: string;
  date?: string;
  credentialId?: string;
}

const certifications: CertificationItem[] = [
  {
    title: 'Docker : Pemula sampai Mahir',
    issuer: 'Udemy',
    date: 'Sep 2026',
    credentialId: 'UC-728852c0-d83f-4f50-8a65-e72550b3a3a8',
  },
  {
    title: 'Sertifikat Kelas Belajar JavaScript DOM',
    issuer: 'CODEPOLITAN',
    date: 'Sep 2026',
    credentialId: 'N94U3MS',
  },
  {
    title: 'Javascript Fundamentals',
    issuer: 'Coddy',
    date: 'Agu 2026',
    credentialId: 'CaAUnF-javascript-Bi8cmJ',
  },
  {
    title: 'Terminal Introduction to Docker',
    issuer: 'Coddy',
    date: 'Agu 2026',
    credentialId: 'CaAUnF-terminal-fhs4B2',
  },
  {
    title: 'Sertifikat Kelas Belajar Membuat Project Express.js Dengan MongoDB',
    issuer: 'CODEPOLITAN',
    date: 'Jul 2026',
    credentialId: '07TWGAZ',
  },
  {
    title: 'Sertifikat Kelas Belajar Membuat Halaman Web Dinamis dengan Express.js dan EJS',
    issuer: 'CODEPOLITAN',
    date: 'Jul 2026',
    credentialId: 'RZLYD15',
  },
  {
    title: 'Sertifikat Kelas Belajar Dasar Express.js',
    issuer: 'CODEPOLITAN',
    date: 'Jul 2026',
    credentialId: 'IABQCWZ',
  },
  {
    title: 'Sertifikat Kelas Belajar JavaScript Asynchronous',
    issuer: 'CODEPOLITAN',
    date: 'Jul 2026',
    credentialId: 'YVXPDCN',
  },
  {
    title: 'Sertifikat Kelas Belajar Konsep OOP di JavaScript',
    issuer: 'CODEPOLITAN',
    date: 'Jul 2026',
    credentialId: '0MNBTRS',
  },
  {
    title: 'Sertifikat Kelas Belajar JavaScript',
    issuer: 'CODEPOLITAN',
    date: 'Jul 2026',
    credentialId: '0TSNK7P',
  },
  {
    title: 'Belajar Penerapan Data Science dengan Microsoft Fabric dan Membangun Aplikasi Gen AI dengan Microsoft Azure',
    issuer: 'Microsoft Elevate',
    date: 'Jun 2026',
    credentialId: 'elevate/certificate/2026/PREJPEB6ZO',
  },
  {
    title: 'Sertifikat Kelas Belajar Dasar CSS',
    issuer: 'CODEPOLITAN',
    date: 'Jun 2026',
    credentialId: 'USWXV0Y',
  },
  {
    title: 'Sertifikat Kelas Belajar Dasar HTML',
    issuer: 'CODEPOLITAN',
    date: 'Jun 2026',
    credentialId: '5G7VEPE',
  },
  {
    title: 'Sertifikat Kelas Belajar GIT Lanjutan',
    issuer: 'CODEPOLITAN',
    date: 'Jun 2026',
    credentialId: '78YFVYU',
  },
  {
    title: 'Sertifikat Kelas Belajar Git Pemula',
    issuer: 'CODEPOLITAN',
    date: 'Jun 2026',
    credentialId: 'J2FQEWO',
  },
  {
    title: 'Sertifikat Kelas Belajar Menggunakan Terminal atau CMD untuk Development',
    issuer: 'CODEPOLITAN',
    date: 'Jun 2026',
    credentialId: 'JQE2N91',
  },
  {
    title: 'Sertifikat Kelas Mahir menggunakan Text Editor buat Pemula',
    issuer: 'CODEPOLITAN',
    date: 'Jun 2026',
    credentialId: 'R6YN13U',
  },
  {
    title: 'Sertifikat Kelas Algoritma dan Pemrograman Dasar',
    issuer: 'CODEPOLITAN',
    date: 'Jun 2026',
    credentialId: 'OMGI2LQ',
  },
  {
    title: 'Sertifikat Kelas Mengenal Pemrograman Komputer',
    issuer: 'CODEPOLITAN',
    date: 'Jun 2026',
    credentialId: 'YMPPZDJ',
  },
  {
    title: 'AI Ethics',
    issuer: 'IBM SkillsBuild',
    date: 'Apr 2026',
    credentialId: 'ALM-COURSE_4058927',
  },
  {
    title: 'Introduction to Generative AI',
    issuer: 'IBM SkillsBuild',
    date: 'Apr 2026',
    credentialId: 'ALM-COURSE_4058859',
  },
  {
    title: 'Introduction to Artificial Intelligence',
    issuer: 'IBM SkillsBuild',
    date: 'Apr 2026',
    credentialId: 'ALM-COURSE_4058918',
  },
  {
    title: 'Memulai Pemrograman dengan Python',
    issuer: 'Dicoding Indonesia',
    date: 'Apr 2026',
    credentialId: '81P2O4M9YZOY',
  },
  {
    title: 'Membangun Aplikasi Gen AI dengan Microsoft Azure',
    issuer: 'Dicoding Indonesia',
    date: 'Apr 2026',
    credentialId: '72ZDJV97VZYW',
  },
  {
    title: 'Belajar Penerapan Data Science dengan Microsoft Fabric',
    issuer: 'Dicoding Indonesia',
    date: 'Apr 2026',
    credentialId: '4EXG1K1DDPRL',
  },
  {
    title: 'Belajar Membuat Front-End Web untuk Pemula',
    issuer: 'Dicoding Indonesia',
    date: 'Mar 2026',
    credentialId: 'JMZVO921RXN9',
  },
  {
    title: 'Belajar Dasar Pemrograman JavaScript',
    issuer: 'Dicoding Indonesia',
    date: 'Feb 2026',
    credentialId: 'MEPJOERLWZ3V',
  },
  {
    title: 'Belajar Dasar Pemrograman Web',
    issuer: 'Dicoding Indonesia',
    date: 'Feb 2026',
    credentialId: 'ERZRL5KR2ZYV',
  },
  {
    title: 'Introduction to Financial Literacy',
    issuer: 'Dicoding Indonesia',
    date: 'Jan 2026',
    credentialId: 'ERZR2RJQQPYV',
  },
  {
    title: 'Junior Web Programmer',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    date: 'Apr 2024',
  },
  {
    title: 'CCNAv7 Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    date: 'Agu 2023',
  },
  {
    title: 'CCNAv7 Introduction To Network',
    issuer: 'Cisco Networking Academy',
    date: 'Feb 2023',
  },
];


const coreSkills = [
  { name: "PHP", icon: "/ariqfadhilahs/php.png" },
  { name: "Laravel", icon: "/ariqfadhilahs/Laravel.png" },
  { name: "Tailwind_CSS", icon: "/ariqfadhilahs/Tailwind_CSS.png" },
  { name: "CSS", icon: "/ariqfadhilahs/CSS3.png" },
  { name: "SQL", icon: "/ariqfadhilahs/MySQL.png" },
  { name: "Git", icon: "/ariqfadhilahs/Git.png" },
  { name: "GitHub", icon: "/ariqfadhilahs/Github.svg" },
  { name: "HTML", icon: "/ariqfadhilahs/HTML5.png" },
  { name: "Javascript", icon: "/ariqfadhilahs/JavaScript.png" },
  { name: "React", icon: "/ariqfadhilahs/React.png" },
  { name: "Node.js", icon: "/ariqfadhilahs/Nodejs.svg" },
  { name: "Express.js", icon: "/ariqfadhilahs/Express.svg" },
  { name: "Docker", icon: "/ariqfadhilahs/Docker.svg" },
  { name: "Postman", icon: "/ariqfadhilahs/Postman.svg" },
  { name: "Redis", icon: "/ariqfadhilahs/Redis.svg" },
  { name: "ESLint", icon: "/ariqfadhilahs/ESLint.svg" },
  { name: "Microsoft_Office", icon: "/ariqfadhilahs/Microsoft_Office.png" },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [startIdx, setStartIdx] = useState(0);
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  {/* RESPONSIVE VISIBLE COUNT FOR SLIDER */}
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  useEffect(() => {
    if (startIdx + visibleCount > projectsData.length) {
      setStartIdx(Math.max(0, projectsData.length - visibleCount));
    }
  }, [visibleCount, startIdx]);

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
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <a href="#" className="font-bold text-xl sm:text-2xl tracking-tight truncate max-w-[210px] xs:max-w-xs sm:max-w-none hover:text-sky-500 transition">
            Ariq Fadhilah Saputra.
          </a>
          <div className="flex items-center gap-3 sm:gap-6">
            <nav className={`hidden md:flex gap-6 lg:gap-8 font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <a href="#about" className="hover:text-sky-500 transition">About</a>
              <a href="#experience" className="hover:text-sky-500 transition">Experience</a>
              <a href="#skills" className="hover:text-sky-500 transition">Skills</a>
              <a href="#projects" className="hover:text-sky-500 transition">Projects</a>
              <a href="#certifications" className="hover:text-sky-500 transition">Certifications</a>
              <a href="#contact" className="hover:text-sky-500 transition">Contact</a>
            </nav>
            {/* Dark Mode Toggle Button with Sun & Moon Icons */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? "Beralih ke Light Mode" : "Beralih ke Dark Mode"}
              title={darkMode ? "Beralih ke Light Mode" : "Beralih ke Dark Mode"}
              className={`relative w-14 h-7 rounded-full p-1 transition-colors duration-300 flex items-center shrink-0 border cursor-pointer ${
                darkMode 
                  ? 'bg-slate-800 border-slate-700' 
                  : 'bg-sky-100 border-sky-300'
              }`}
            >
              {/* Sun icon on track (visible in dark mode) */}
              <svg 
                className={`absolute left-1.5 w-3.5 h-3.5 text-amber-400 transition-opacity duration-300 ${darkMode ? 'opacity-100' : 'opacity-0'}`} 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
              </svg>

              {/* Moon icon on track (visible in light mode) */}
              <svg 
                className={`absolute right-1.5 w-3.5 h-3.5 text-slate-400 transition-opacity duration-300 ${darkMode ? 'opacity-0' : 'opacity-100'}`} 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12.3 2a10 10 0 0 0-.19 1.4 10 10 0 0 0 10 10c.5 0 .96-.06 1.4-.19a10 10 0 1 1-11.21-11.21z"/>
              </svg>

              {/* Sliding thumb with active icon */}
              <div 
                className={`w-5 h-5 rounded-full shadow-md flex items-center justify-center transform transition-transform duration-300 z-10 ${
                  darkMode 
                    ? 'translate-x-7 bg-sky-500 text-white' 
                    : 'translate-x-0 bg-white text-amber-500'
                }`}
              >
                {darkMode ? (
                  /* Moon icon inside active thumb */
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.3 2a10 10 0 0 0-.19 1.4 10 10 0 0 0 10 10c.5 0 .96-.06 1.4-.19a10 10 0 1 1-11.21-11.21z"/>
                  </svg>
                ) : (
                  /* Sun icon inside active thumb */
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
                  </svg>
                )}
              </div>
            </button>
            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-t px-6 py-4 space-y-3 ${darkMode ? 'bg-slate-900/95 border-slate-800' : 'bg-white/95 border-slate-200'} backdrop-blur-md`}>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium hover:text-sky-500 transition">About</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium hover:text-sky-500 transition">Experience</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium hover:text-sky-500 transition">Skills</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium hover:text-sky-500 transition">Projects</a>
            <a href="#certifications" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium hover:text-sky-500 transition">Certifications</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium hover:text-sky-500 transition">Contact</a>
            
            {/* Theme indicator row in mobile drawer */}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Tema Aktif:</span>
              <span className="font-semibold flex items-center gap-1 text-slate-700 dark:text-slate-200">
                {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
              </span>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] py-20 sm:py-28 flex items-center justify-center text-center px-4 sm:px-6">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 tracking-tight leading-tight">
            Halo, Saya Ariq Fadhilah Saputra.
          </h2>
          <p className="text-base sm:text-xl md:text-2xl opacity-75 max-w-2xl mx-auto font-light leading-relaxed">
            Entry level Fullstack Developer with hands-on experience building Laravel-based web systems such as company profiles and POS applications.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 sm:py-24 bg-slate-50/30 dark:bg-slate-800/20">
        <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl blur opacity-25 transition duration-1000" />
              <img 
                src="/ariqfadhilahs/profile.jpg" 
                alt="Profile Picture" 
                className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-2xl grayscale hover:grayscale-0 transition duration-500 shadow-xl" 
              />
            </div>
          </div>
          <div className="order-1 md:order-2 text-left">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Tentang Saya</h3>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Lulusan S1 Teknik Informatika dengan pengalaman sebagai Fullstack Developer. Berpengalaman dalam pengembangan aplikasi web menggunakan Laravel, PHP, dan SQL. Terbiasa membangun fitur CRUD, integrasi database, serta mendukung kebutuhan sistem berbasis web.
              Telah mengembangkan beberapa sistem internal seperti website company profile dan aplikasi POS sederhana yang digunakan untuk mendukung operasional dan manajemen data.
              Memiliki semangat belajar tinggi, bertanggung jawab, dan siap berkembang bersama perusahaan.
            </p>
            <Button asChild className="mt-2 w-full sm:w-auto" variant="default">
              <a
                href="/ariqfadhilahs/CV_Ariq_Fadhilah_Saputra_Updated.pdf"
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
      <section id="experience" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 sm:mb-12 text-slate-800 dark:text-white tracking-tight">
            Experience
          </h2>

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="border-none shadow-lg bg-white dark:bg-slate-800"
              >
                <CardContent className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold">
                    {exp.role}
                  </h3>
                  <p className="text-xs sm:text-sm opacity-70 mb-4">
                    {exp.company} · {exp.period}
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm">
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

      {/* CORE SKILLS SECTION */}
      <section id="skills" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 sm:mb-12 text-slate-800 dark:text-white tracking-tight">
            Skills
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
            {coreSkills.map((skill, index) => (
              <div 
                key={index} 
                className="relative h-28 sm:h-32 flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl 
                           bg-slate-200/80 dark:bg-slate-800/60 
                           border border-transparent hover:border-sky-500/50 
                           transition-all duration-300 group overflow-hidden"
              >
                {/* Logo Skill */}
                <div className="z-10 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
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
                <p className="z-10 mt-1 text-[9px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-slate-600 dark:text-slate-400 group-hover:text-sky-500 transition-colors text-center truncate w-full px-1">
                  {skill.name.replace(/_/g, ' ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="py-16 sm:py-24 bg-slate-50/30 dark:bg-slate-800/10">
        <div className="container mx-auto px-4 sm:px-6">

          {/* HEADER */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 dark:text-white tracking-tight">
                Highlighted Projects
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm sm:text-base">
                Menampilkan {startIdx + 1} - {Math.min(startIdx + visibleCount, projectsData.length)} dari {projectsData.length} proyek
              </p>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                onClick={() => canGoLeft && setStartIdx(startIdx - 1)}
                disabled={!canGoLeft}
                aria-label="Previous project"
                className="p-2.5 sm:p-3 rounded-full border disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-700 transition"
              >
                ←
              </button>
              <button
                onClick={() => canGoRight && setStartIdx(startIdx + 1)}
                disabled={!canGoRight}
                aria-label="Next project"
                className="p-2.5 sm:p-3 rounded-full border disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-700 transition"
              >
                →
              </button>
            </div>
          </div>

          {/* PROJECT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {visibleProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-xl bg-white dark:bg-slate-800 flex flex-col justify-between"
              >
                <div>
                  {/* IMAGE */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-44 sm:h-48 w-full object-cover"
                  />

                  <CardContent className="p-5 sm:p-6">
                    {/* TITLE */}
                    <h4 className="text-lg sm:text-xl font-bold mb-3 leading-snug">
                      {project.title}
                    </h4>

                    {/* DESCRIPTION */}
                    <p className="text-xs sm:text-sm opacity-70 mb-4 leading-relaxed">
                      {project.desc}
                    </p>

                    {/* ROLE */}
                    <p className="text-xs sm:text-sm mb-2">
                      <span className="font-semibold">
                        Role:
                      </span>{' '}
                      {project.role}
                    </p>

                    {/* TECH STACK */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-100 dark:bg-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* OUTCOME */}
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-4 leading-relaxed">
                      ✔ {project.outcome}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section
        id="certifications"
        className="py-16 sm:py-24 bg-slate-50/30 dark:bg-slate-800/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 dark:text-white tracking-tight">
                Certifications
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm sm:text-base">
                Total {certifications.length} sertifikasi & lisensi profesional
              </p>
            </div>
            <button
              onClick={() => setShowAllCerts(!showAllCerts)}
              className="self-start sm:self-auto px-5 py-2 text-xs sm:text-sm font-semibold rounded-full border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition duration-300 shadow-sm"
            >
              {showAllCerts ? 'Tampilkan Lebih Sedikit' : `Lihat Semua (${certifications.length})`}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {(showAllCerts ? certifications : certifications.slice(0, 9)).map((cert, index) => (
              <div
                key={index}
                className="p-5 sm:p-6 rounded-2xl border bg-white dark:bg-slate-800 flex flex-col justify-between hover:border-sky-500/50 hover:shadow-md transition duration-300"
              >
                <div>
                  <h4 className="font-semibold text-sm sm:text-base mb-2 text-slate-800 dark:text-slate-100 leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-sky-600 dark:text-sky-400">
                    {cert.issuer}
                  </p>
                </div>

                {(cert.date || cert.credentialId) && (
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex flex-wrap justify-between items-center text-xs opacity-70 gap-2">
                    {cert.date && <span>📅 {cert.date}</span>}
                    {cert.credentialId && (
                      <span className="font-mono text-[10px] sm:text-[11px] truncate max-w-[170px]" title={cert.credentialId}>
                        ID: {cert.credentialId}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {!showAllCerts && (
            <div className="text-center mt-10">
              <Button
                variant="outline"
                onClick={() => setShowAllCerts(true)}
                className="rounded-full px-6 sm:px-8 py-2 text-xs sm:text-sm"
              >
                Lihat Semua ({certifications.length}) Sertifikat ↓
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 sm:py-24 text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <div className={`max-w-4xl mx-auto p-6 sm:p-10 md:p-12 rounded-3xl ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Let’s Work Together</h2>
            <p className="text-sm sm:text-base md:text-xl opacity-70 mb-8 sm:mb-10 max-w-xl mx-auto">Terbuka untuk posisi Junior Developer, magang, atau proyek lepas.</p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
              {/* Email */}
              <a href="mailto:ariqfadhilah66@gmail.com?subject=Job%20Application%20-%20Ariq%20Fadhilah%20Saputra" aria-label="Email" className="hover:scale-110 transition text-sky-500">
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/6285782563922" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:scale-110 transition text-green-500">
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12.01 2.01C6.48 2.01 2 6.48 2 12.01c0 2.17.7 4.18 1.89 5.83L2.06 22l4.35-1.78c1.6.93 3.44 1.46 5.4 1.46 5.53 0 10-4.47 10-10S17.53 2.01 12.01 2.01zm4.75 13.92c-.23.63-1.34 1.21-1.85 1.28-.41.06-.94.09-2.85-.7-2.45-1.02-4.04-3.5-4.16-3.66-.12-.17-1.02-1.35-1.02-2.58 0-1.22.64-1.83.87-2.08.23-.25.5-.31.67-.31.17 0 .34 0 .49.01.16.01.37-.06.57.42.2.5.68 1.66.74 1.78.06.12.1.27.02.43-.08.17-.13.27-.25.43-.12.15-.26.34-.37.46-.12.12-.24.26-.1.5.14.24.62 1.02 1.33 1.65.91.81 1.67 1.06 1.91 1.18.24.12.38.1.52-.06.14-.17.62-.71.78-.96.16-.25.33-.21.55-.13.23.08 1.45.68 1.7.81.25.13.42.19.48.3.06.11.06.64-.17 1.27z"/></svg>
              </a>
              {/* Linkedin */}
              <a href="https://www.linkedin.com/in/ariq-fadhilah-saputra/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-8 h-8 sm:w-10 sm:h-10">
                <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C23.12 107.3 0 84.18 0 54.9A53.24 53.24 0 0153.24 1.7c29.28 0 53.24 23.12 53.24 53.2 0 29.28-23.96 53.2-53.24 53.2zM447.8 448h-92.68V302.4c0-34.7-12.4-58.4-43.4-58.4-23.7 0-37.8 16-44 31.4-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.68s1.2-241.1 0-266.1h92.68v37.7c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.6 39.8 106.6 125.4V448z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/ariqfdhlh_" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:scale-110 transition text-pink-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-8 h-8 sm:w-10 sm:h-10">
                <path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
              </a>
              {/* Github */}
              <a href="https://github.com/Y2riq" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:scale-110 transition text-slate-700 dark:text-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 sm:py-10 text-center border-t border-slate-200 dark:border-slate-800 opacity-50 text-xs sm:text-sm px-4">
        © {new Date().getFullYear()} Ariq Fadhilah Saputra. Built with React & Tailwind.
      </footer>
    </div>
  );
}
