import React, { useState, useEffect } from "react";
import "./App.css";
import profileImg from "./assets/img/profile/ahmad.jpg";
import arutalaCert from "./assets/img/sertif/arutala.png";
import wardwaniCert from "./assets/img/sertif/wardwani.png";
import lspCert from "./assets/img/sertif/lsp.jpg";
import pythonCert from "./assets/img/sertif/python.jpg";

/* ============ NAVBAR ============ */
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-logo">My Personal Profile</div>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                <span></span><span></span><span></span>
            </button>
            <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
                <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                <a href="#resume" onClick={() => setMenuOpen(false)}>Resume</a>
                <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
        </nav>
    );
}

/* ============ HERO ============ */
function Hero() {
    const fullText = "A recent Diploma III graduate in Informatics Engineering from Politeknik Negeri Bandung, passionate about creating engaging digital experiences through frontend development, UI/UX design, Odoo development, and full-stack web application development. Skilled in React.js, Flutter, Vue.js, Laravel,Flutter and Flask Python.";
    const [displayedText, setDisplayedText] = useState("");
    const [isTypingDone, setIsTypingDone] = useState(false);

    useEffect(() => {
        let index = 0;
        const speed = 25; // ms per character
        const timer = setInterval(() => {
            setDisplayedText(fullText.slice(0, index + 1));
            index++;
            if (index >= fullText.length) {
                clearInterval(timer);
                setIsTypingDone(true);
            }
        }, speed);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="hero" id="home">
            <div className="hero-content animate-in">
                <p className="hero-greeting">{">Hello();"}</p>
                <h1 className="hero-name">Ahmad Al Fajri</h1>
                <p className="hero-title">Fullstack Developer & Frontend Developer</p>
                <p className="hero-desc">
                    {displayedText}
                    <span className={`typing-cursor ${isTypingDone ? "blink" : ""}`}>|</span>
                </p>
                <div className="hero-buttons">
                    <a href="#contact" className="btn btn-primary">
                        <i className="fa-regular fa-envelope"></i> Contact Me
                    </a>
                    <a href="https://www.linkedin.com/in/ahmad-al-fajri-898095389/" target="_blank" rel="noreferrer" className="btn btn-outline">
                        <i className="fa-brands fa-linkedin-in"></i> LinkedIn
                    </a>
                </div>
            </div>

            <div className="hero-image animate-in">
                <div className="profile-photo-wrapper">
                    <div className="profile-photo-glow"></div>
                    <img
                        className="profile-photo"
                        src={profileImg}
                        alt="Ahmad Al Fajri"
                    />
                    <div className="available-badge">
                        <span className="available-dot"></span>
                        Available for work
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ============ EXPERIENCE & EDUCATION ============ */
function ExperienceEducation() {
    return (
        <section className="section" id="resume">
            <p className="section-subtitle">{">Career Path();"}</p>
            <h2 className="section-title">Experience & Education</h2>

            <div className="exp-edu-grid">
                {/* Professional Experience */}
                <div className="exp-edu-column">
                    <h3>
                        <i className="fa-solid fa-briefcase"></i>
                        Professional Experience
                    </h3>

                    <div className="exp-card">
                        <div className="exp-card-header">
                            <span className="exp-year">2021</span>
                            <div className="exp-info">
                                <h4>Mobile Front-End Developer</h4>
                                <span className="company">PT Media Kotak Pintar</span>
                            </div>
                        </div>
                        <div className="exp-details">
                            <div className="exp-detail-item">
                                Developed mobile applications food ordering using Flutter framework with responsive UI components
                            </div>
                            <div className="exp-detail-item">
                                Implemented UI Aplications from Requirement Company
                            </div>
                            <div className="exp-detail-item">
                                Technologies: Flutter, Dart, Git
                            </div>
                        </div>
                    </div>

                    <div className="exp-card">
                        <div className="exp-card-header">
                            <span className="exp-year">2024</span>
                            <div className="exp-info">
                                <h4>Full Stack Developer</h4>
                                <span className="company">PT Omikron Solusi Kreatif</span>
                            </div>
                        </div>
                        <div className="exp-details">
                            <div className="exp-detail-item">
                                Develop Mobile application school management for Ar Rasyid, developed using Flutter and Odoo
                            </div>

                            <div className="exp-detail-item">
                                Develop Web-based Sharia Savings and Loans (SIMPIN Syariah) application developed using Odoo and React Js
                            </div>
                            <div className="exp-detail-item">
                                Design and development of a custom PPDB (student admission) module in Odoo
                            </div>
                            <div className="exp-detail-item">
                                Design and customization of a corporate website for IPMI using Odoo
                            </div>
                            <div className="exp-detail-item">
                                Technologies: Laravel Blade, React JS, PHP, PostgreSQL,Odoo,Python,XML
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="exp-card">
                        <div className="exp-card-header">
                            <span className="exp-year">2025</span>
                            <div className="exp-info">
                                <h4>Full Stack Deve</h4>
                                <span className="company">TRACER STUDI POLBAN</span>
                            </div>
                        </div>
                        <div className="exp-details">
                            <div className="exp-detail-item">
                                Develop Scheduled Email & WhatsApps Broadcast Aplication
                            </div>

                            <div className="exp-detail-item">
                               Technologies: ReactJs,Laravel,Selenium,SMTP,Green api,Mysql
                            </div>
                            
                        </div>
                    </div>
                </div>
             <div className="exp-card">
                        <div className="exp-card-header">
                            <span className="exp-year">2026 - Now</span>
                            <div className="exp-info">
                                <h4>Full Stack Deve</h4>
                                <span className="company">PT Reka Cipta Solusindo</span>
                            </div>
                        </div>
                        <div className="exp-details">
                            <div className="exp-detail-item">
                                Develop Revamp Game Diamond & PPOB Order Application
                            </div>
                            <div className="exp-detail-item">
                                Develop Relocate Ticket Booking Application
                            </div>

                            <div className="exp-detail-item">
                               Technologies: Odoo,Postgree,Digiflazz Api,Dharma Wisata Api
                            </div>
                            
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div className="exp-edu-column">
                    <h3>
                        <i className="fa-solid fa-graduation-cap"></i>
                        Education
                    </h3>

                    <div className="exp-card">
                        <div className="exp-card-header">
                            <span className="exp-year">2022 - 2025</span>
                            <div className="exp-info">
                                <h4>Informatics Engineering</h4>
                                <span className="company">Politeknik Negeri Bandung</span>
                            </div>
                        </div>
                        <div className="exp-details">
                            <div className="exp-detail-item">
                                Specialized in Web Development
                            </div>

                            <div className="exp-detail-item">
                                Active in student organizations
                            </div>
                        </div>
                    </div>

                    <div className="exp-card">
                        <div className="exp-card-header">
                            <span className="exp-year">2019 - 2022</span>
                            <div className="exp-info">
                                <h4>Software Engineering</h4>
                                <span className="company">SMKN 11 Bandung</span>
                            </div>
                        </div>
                        <div className="exp-details">
                            <div className="exp-detail-item">
                                Graduated with honors
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ============ ORG EXPERIENCE & CERTIFICATIONS ============ */
function CertificateModal({ isOpen, onClose, image, title }) {
    if (!isOpen) return null;

    return (
        <div className="cert-modal-overlay" onClick={onClose}>
            <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="cert-modal-close" onClick={onClose}>&times;</button>
                {image ? (
                    <img src={image} alt={title} className="cert-modal-image" />
                ) : (
                    <div style={{ padding: '40px', background: '#1a202c', color: '#fff', borderRadius: '8px', textAlign: 'center' }}>
                        <h4>{title}</h4>
                        <p style={{ marginTop: '10px', color: '#9ca3af' }}>Image placeholder - Certificate file not found.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

function OrgCertifications() {
    const [modalConfig, setModalConfig] = useState({ isOpen: false, image: null, title: "" });

    const openModal = (image, title) => {
        setModalConfig({ isOpen: true, image, title });
    };

    const closeModal = () => {
        setModalConfig({ ...modalConfig, isOpen: false });
    };

    const [currentSlide, setCurrentSlide] = useState(0);
    const orgImages = [
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=300&fit=crop",
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=300&fit=crop",
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=300&fit=crop",
    ];

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % orgImages.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + orgImages.length) % orgImages.length);

    return (
        <section className="section">
            <div className="org-cert-grid">
                {/* Organizational Experience */}
                <div className="org-column">
                    <h3>
                        <i className="fa-solid fa-people-group"></i>
                        Organizational Experience
                    </h3>

                    <div className="org-card">
                        <div className="exp-card-header">
                            <span className="exp-year">2023-2024</span>
                            <div className="exp-info">
                                <h4>Himpunan Mahasiswa Komputer </h4>
                                <span className="company">Politeknik Negeri Bandung</span>
                            </div>
                        </div>
                        <div className="exp-details">
                            <div className="exp-detail-item">
                                Junior Staff Biro Administrasi
                            </div>
                            <div className="exp-detail-item">
                                Expert Staff Member of the Administration
                            </div>
                        </div>


                    </div>
                </div>

                {/* Certifications */}
                <div className="cert-column">
                    <h3>
                        <i className="fa-solid fa-certificate"></i>
                        Certifications
                    </h3>

                    <div className="cert-card">
                        <img className="cert-image" src={arutalaCert} alt="Arutala Certificate" />
                        <div className="cert-info">
                            <span className="cert-year">2025</span>
                            <h4>Arutala Junior Software tester</h4>
                            <p className="cert-org">ArutalaLab</p>
                            <button className="cert-view-btn" onClick={() => openModal(arutalaCert, "Arutala Junior Software tester")}>
                                <i className="fa-regular fa-eye"></i> View Certificate
                            </button>
                        </div>
                    </div>

                    <div className="cert-card">
                        <img className="cert-image" src={wardwaniCert} alt="Wadhwani Certificate" />
                        <div className="cert-info">
                            <span className="cert-year">2024</span>
                            <h4>Employability Skills</h4>
                            <p className="cert-org">Wadhwani Foundation</p>
                            <button className="cert-view-btn" onClick={() => openModal(wardwaniCert, "Employability Skills")}>
                                <i className="fa-regular fa-eye"></i> View Certificate
                            </button>
                        </div>
                    </div>

                    <div className="cert-card">
                        <img className="cert-image" src={lspCert} alt="LSP Certificate" />
                        <div className="cert-info">
                            <span className="cert-year">2024</span>
                            <h4>Sertifikasi Lsp Web Junior Developer </h4>
                            <p className="cert-org">Lembaga Sertifikasi Profesi</p>
                            <button className="cert-view-btn" onClick={() => openModal(lspCert, "Sertifikasi Lsp Web Junior Developer")}>
                                <i className="fa-regular fa-eye"></i> View Certificate
                            </button>
                        </div>
                    </div>

                    <div className="cert-card">
                        <img className="cert-image" src={pythonCert} alt="Python Certificate" />
                        <div className="cert-info">
                            <span className="cert-year">2022</span>
                            <h4>Python Junior Developer</h4>
                            <p className="cert-org">Institut Teknologi Sepuluh November</p>
                            <button className="cert-view-btn" onClick={() => openModal(pythonCert, "Python Junior Developer")}>
                                <i className="fa-regular fa-eye"></i> View Certificate
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <CertificateModal
                isOpen={modalConfig.isOpen}
                onClose={closeModal}
                image={modalConfig.image}
                title={modalConfig.title}
            />
        </section>
    );
}

/* ============ PORTFOLIO ============ */
function Portfolio() {
    const projects = [
        {
            icon: "fa-solid fa-user-tie",
            title: "Web Personal Profile",
            desc: "Developed core CV features: login, dashboard, CRUD, history, and community page. Integrated Google Auth and responsive Bootstrap UI.",
            tech: ["Laravel", "PHP", "MySQL", "Google API Auth"],
            tools: ["VS Code", "Taiga", "Figma", "Git"],
            role: "Full Stack Developer",
            link: "#"
        },
        {
            icon: "fa-solid fa-calendar-check",
            title: "Futsal Court Rental Web Application",
            desc: "Built a rental platform with role-based auth and field/customer management. Integrated Midtrans for payments and Yajra DataTables for data exports.",
            tech: ["Laravel", "Midtrans API", "Yajra DataTables", "MySQL"],
            tools: ["VS Code", "Git"],
            role: "Full Stack Developer",
            link: "#"
        },
        {
            icon: "fa-solid fa-school",
            title: "Ar-rasyid School Management App",
            desc: "Designed and developed a Flutter school app with assignments, e-reports, and payment info. Supports multi-role access for students, teachers, and parents.",
            tech: ["Flutter", "Odoo", "Dart", "Midtrans API"],
            tools: ["VS Code", "Android Studio", "Postman", "Git"],
            role: "Frontend Developer & UI/UX Designer",
            link: "https://drive.google.com/drive/folders/1V2RoIvmmV5Q56eY7mnobdTIYluUyyqdg?usp=sharing"
        },
        {
            icon: "fa-solid fa-hand-holding-heart",
            title: "Web-based Donation and Waqaf Application",
            desc: "Created UI/UX and Laravel frontend for a donation platform. Integrated RESTful APIs with Odoo backend for detailed tracking and digital payments.",
            tech: ["Laravel Blade", "Odoo", "Midtrans API", "PostgreSQL"],
            tools: ["VS Code", "Postman", "Git"],
            role: "Frontend Developer & UI/UX Designer",
            link: "https://drive.google.com/drive/folders/1fh7nz3VZhJReOjNjNm8_OdTGRDyMWcNb?usp=sharing"
        },
        {
            icon: "fa-solid fa-vault",
            title: "Simpin Syariah Application",
            desc: "Developed UI/UX and Laravel frontend for Sharia banking. Features interactive dashboard charts and comprehensive customer loan/savings management.",
            tech: ["Laravel Blade", "Odoo", "PostgreSQL", "PHP"],
            tools: ["VS Code", "Postman", "Git"],
            role: "Frontend Developer & UI/UX Designer",
            link: "#"
        },
        {
            icon: "fa-solid fa-paper-plane",
            title: "Scheduled Email & WhatsApp Blast",
            desc: "Automated tracer study survey system. Distributes scheduled email and WhatsApp messages automatically via Green API and SMTP to save manual effort.",
            tech: ["ReactJS", "Laravel", "Python", "Selenium"],
            tools: ["VS Code", "Green API", "SMTP", "Postman"],
            role: "Full Stack Developer",
            link: "#"
        },
        {
            icon: "fa fa-diamond",
            title: "Revamp Game Diamond & PPOB Order Application",
            desc: "Developed a custom Odoo front-end module for the Revamp application, contributing as a Front-End Developer. Implemented required features, added a transaction status feature, resolved transaction-related bugs, and participated in functional testing to ensure system reliability.",
            tech: ["Odoo", "Digiflazz api", "Xendit api"],
            tools: ["VS Code"],
            role: "Front-end Developer",
            link: "https://revamp.co.id"
        },
        {
            icon: "fa fa-plane",
            title: "Relocate Ticket Booking Application",
            desc: "Developed custom Odoo modules for the Relocate application front-end, including management modules for vessels, origins, destinations, and schedules, supporting booking services for flights, trains, Pelni ships, and hotels.",
            tech: ["Odoo", "Dharma wisata api", "Xendit api"],
            tools: ["VS Code"],
            role: "Front-end Developer",
            link: "https://relocate.co.id/relocate"
        },
    ];

    return (
        <section className="section" id="projects">
            <p className="section-subtitle">{">My Work();"}</p>
            <h2 className="section-title" style={{ marginBottom: '12px' }}>Project Portfolio</h2>
            <p style={{ color: '#9ca3af', fontSize: '0.95rem', marginBottom: '32px', maxWidth: '800px' }}>
                Untuk project Aplikasi menajemen sekolah Ar Rasyid dan waqaf sudah memiliki vidio demo aplikasi dan file ui/ux nya
            </p>

            <div className="portfolio-grid">
                {projects.map((project, idx) => (
                    <a href={project.link} className="portfolio-card-link" key={idx} target={project.link === "#" ? "_self" : "_blank"} rel="noreferrer">
                        <div className="portfolio-card">
                            <div className="portfolio-card-top">
                                <span className="icon">
                                    <i className={project.icon}></i>
                                </span>
                                <span className="link">
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                </span>
                            </div>
                            <h4>{project.title}</h4>
                            <p>{project.desc}</p>

                            <div className="portfolio-meta">
                                <div className="meta-section">
                                    <span className="meta-label">Technologies:</span>
                                    <div className="portfolio-tech">
                                        {project.tech.map((t, i) => (
                                            <span key={i}>{t}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="meta-section">
                                    <span className="meta-label">Tools:</span>
                                    <div className="portfolio-tools">
                                        {project.tools.map((tool, i) => (
                                            <span key={i}>{tool}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="portfolio-role">
                                <span className="role-tag">Role: {project.role}</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

/* ============ CONTACT ============ */
function Contact() {
    return (
        <section className="contact-section" id="contact">
            <p className="section-subtitle">{">Get In Touch();"}</p>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>Let's Connect</h2>
            <p style={{ color: '#9ca3af', fontSize: '0.95rem', marginBottom: '24px' }}>
                Feel free to reach out for collaboration, opportunities, or just to say hello!
            </p>
            <div className="contact-links">
                <a href="mailto:ahmadalfajri173@gmail.com" className="contact-link-item" title="Email">
                    <i className="fa-regular fa-envelope"></i>
                </a>
                <a href="https://www.linkedin.com/in/ahmad-al-fajri-898095389/" target="_blank" rel="noreferrer" className="contact-link-item" title="LinkedIn">
                    <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/inven22" target="_blank" rel="noreferrer" className="contact-link-item" title="GitHub">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.instagram.com/ahmad__alfajri" target="_blank" rel="noreferrer" className="contact-link-item" title="Instagram">
                    <i className="fa-brands fa-instagram"></i>
                </a>
            </div>
        </section>
    );
}

/* ============ APP ============ */
export default function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <ExperienceEducation />
            <OrgCertifications />
            <Portfolio />
            <Contact />
            <footer className="footer">
                © 2025 Ahmad Al Fajri. All rights reserved.
            </footer>
        </>
    );
}
