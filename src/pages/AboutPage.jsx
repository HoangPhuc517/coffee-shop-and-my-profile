import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutPage.css";

function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section" data-aos="fade-down">
        <img src="/Avatar.jpg" alt="Phan Long Hoang Phuc" className="avatar" />
        <h1>Phan Long Hoang Phuc</h1>
        <h2>Back-End Developer Fresher (.NET)</h2>
        <div className="contact-info">
          <span>📅 05/01/2003</span>
          <span>📱 0337.523.349</span>
          <span>✉️ hgphuc2k3@gmail.com</span>
          <span>📍 An Phu Dong Ward, Ho Chi Minh City</span>
          <a
            href="https://github.com/HoangPhuc517"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 GitHub
          </a>
          <a
            href="https://hoangphuc-dev-coffeeshop.vercel.app/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            🌐 Website
          </a>
        </div>

        {/* CV Download Buttons */}
        <div className="cv-download">
          <a
            href="/PHAN_LONG_HOANG_PHUC_BACK-END_DEVELOPER_FRESHER_CV.pdf"
            download
            className="cv-btn modern"
          >
            📄 Download CV (Modern)
          </a>
          <a
            href="/CV_PHAN_LONG_HOANG_PHUC_BACK_END_DEVELOPER_FRESHER.pdf"
            download
            className="cv-btn formal"
          >
            📋 Download CV (Formal)
          </a>
        </div>
      </section>

      {/* Objective */}
      <section className="section" data-aos="fade-up">
        <h2 className="section-title">Objective</h2>
        <div className="card">
          <p>
            <strong>Short-term:</strong> As a passionate .NET Backend Developer,
            I aim to contribute meaningfully to real-world projects by applying
            my strong foundation in Clean Architecture, RESTful API design, and
            database optimization. I am eager to collaborate with experienced
            engineers to deepen my expertise in building scalable, maintainable
            systems while continuously improving code quality through best
            practices, code reviews, and automated testing. My immediate goal is
            to become a reliable team member who delivers efficient solutions
            and learns quickly from challenges.
          </p>
          <p>
            <strong>Long-term:</strong> My professional goal is to advance to a
            Technical Team Leader or Project Manager position within the next 5
            years. I aspire to mentor junior developers, drive high-level
            architectural decisions, and lead the development of complex,
            scalable systems. Ultimately, I envision myself contributing to
            innovative products that make a real impact, while continuously
            evolving from a skilled engineer into an effective strategic leader.
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="section" data-aos="fade-up" data-aos-delay="100">
        <h2 className="section-title">Education</h2>
        <div className="card">
          <h3>FPT University Ho Chi Minh City</h3>
          <p className="period">
            2021 - 2025 | Bachelor of Software Engineering
          </p>
          <div className="edu-info">
            <div className="info-row">
              <span className="info-label">Degree Classification</span>
              <span className="info-value highlight">Good</span>
            </div>
            <div className="info-row">
              <span className="info-label">GPA</span>
              <span className="info-value highlight">7.35/10</span>
            </div>
            <div className="info-row">
              <span className="info-label">Honors</span>
              <span className="info-value">
                Excellent Student Title - Summer 2025 Semester
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section" data-aos="fade-up">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h4>Languages</h4>
            <ul>
              <li>
                <span className="skill-level strong">Strong</span> C# (30
                months)
              </li>
              <li>
                <span className="skill-level middle">Middle</span> Java (12
                months)
              </li>
              <li>
                <span className="skill-level base">Base</span> JavaScript (8
                months)
              </li>
              <li>
                <span className="skill-level base">Base</span> HTML/CSS (8
                months)
              </li>
              <li>
                <span className="skill-level base">Base</span> Python (4 months)
              </li>
              <li>
                <span className="skill-level base">Base</span> C (4 months)
              </li>
            </ul>
          </div>
          <div className="skill-card">
            <h4>System Architecture</h4>
            <ul>
              <li>
                <span className="skill-level strong">Strong</span> N-Layer (30
                months)
              </li>
              <li>
                <span className="skill-level middle">Middle</span> Clean
                Architecture (8 months)
              </li>
              <li>
                <span className="skill-level base">Base</span> MVC (8 months)
              </li>
              <li>
                <span className="skill-level base">Base</span> Razor Pages (8
                months)
              </li>
              <li>
                <span className="skill-level base">Base</span> MVVM (4 months)
              </li>
              <li>
                <span className="skill-level base">Base</span> WPF (4 months)
              </li>
              <li>
                <span className="skill-level base">Base</span> Blazor (2 months)
              </li>
            </ul>
          </div>
          <div className="skill-card">
            <h4>Database</h4>
            <ul>
              <li>
                <span className="skill-level strong">Strong</span> SQL Server
                (24 months)
              </li>
              <li>
                <span className="skill-level middle">Middle</span> PostgreSQL
                (12 months)
              </li>
              <li>
                <span className="skill-level base">Base</span> SQLite (8 months)
              </li>
            </ul>
          </div>
          <div className="skill-card">
            <h4>DevOps & Tools</h4>
            <ul>
              <li>
                <span className="skill-level strong">Strong</span>{" "}
                Git/GitHub/GitLab (30 months)
              </li>
              <li>
                <span className="skill-level strong">Strong</span> GitHub
                Actions (24 months)
              </li>
              <li>
                <span className="skill-level strong">Strong</span> Figma (24
                months)
              </li>
              <li>
                <span className="skill-level middle">Middle</span> Azure (12
                months)
              </li>
              <li>
                <span className="skill-level middle">Middle</span> Render (8
                months)
              </li>
              <li>
                <span className="skill-level base">Base</span> Jira (12 months)
              </li>
              <li>
                <span className="skill-level base">Base</span> SonarQube (4
                months)
              </li>
              <li>
                <span className="skill-level base">Base</span> Fly (4 months)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="section">
        <h2 className="section-title">Work/Project Experience</h2>

        <div className="card" data-aos="fade-up">
          <h3>Vinance Application</h3>
          <p className="period">
            08/2025 - 12/2025 | Back-End Developer & Back-End Leader
          </p>
          <p>
            A smart personal finance assistant designed to reduce manual data
            entry by up to 90% through advanced automation features (OCR receipt
            scanning, Voice input, Bank sync), AI-powered spending forecasting
            using Prophet, and intelligent budgeting, saving goals.
          </p>
          <p>
            <strong>Team Size:</strong> 4
          </p>

          <div className="tech-grid">
            <div className="tech-item">
              <span className="label">Languages</span>
              <span className="value">C#, JavaScript, Java, Python</span>
            </div>
            <div className="tech-item">
              <span className="label">Architecture</span>
              <span className="value">Clean Architecture</span>
            </div>
            <div className="tech-item">
              <span className="label">Database</span>
              <span className="value">PostgreSQL, SQLite</span>
            </div>
            <div className="tech-item">
              <span className="label">Frameworks</span>
              <span className="value">
                ASP.NET Core, Entity Framework, ReactJS, ReactNative, Flask
              </span>
            </div>
            <div className="tech-item">
              <span className="label">DevOps</span>
              <span className="value">
                Git, Azure, Render, Docker, Jira, SonarQube
              </span>
            </div>
          </div>

          <div className="key-contributions">
            <h4>Key Contributions</h4>
            <ul>
              <li>
                Developed AI-powered OCR for automatic receipt scanning &
                classification
              </li>
              <li>
                Integrated Prophet model to forecast monthly spending trends
              </li>
              <li>
                Built Excel export system with dynamic financial visualization
                charts
              </li>
              <li>
                Designed core RESTful APIs for Dashboard analytics & manual data
                entry
              </li>
            </ul>
          </div>
          <div className="github-links">
            <a
              href="https://github.com/HoangPhuc517/Vinance-Backend-System"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Back-End Repo
            </a>
            <a
              href="https://github.com/HoangPhuc517/ai-python-module"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Python Service
            </a>
          </div>
        </div>

        <div className="card" data-aos="fade-up" data-aos-delay="100">
          <h3>Coffee Shop Application</h3>
          <p className="period">05/2025 - 06/2025 | Full-Stack Developer</p>
          <p>
            A comprehensive management solution for coffee shops, streamlining
            the entire workflow from order placement and payment processing to
            real-time communication between customers and staff. The application
            focuses on high performance and user experience.
          </p>
          <p>
            <strong>Team Size:</strong> 4
          </p>

          <div className="tech-grid">
            <div className="tech-item">
              <span className="label">Languages</span>
              <span className="value">C# (.NET), Java (Android)</span>
            </div>
            <div className="tech-item">
              <span className="label">Architecture</span>
              <span className="value">MVVM</span>
            </div>
            <div className="tech-item">
              <span className="label">Database</span>
              <span className="value">SQL Server, SQLite</span>
            </div>
            <div className="tech-item">
              <span className="label">Technical</span>
              <span className="value">
                RESTful API, Retrofit, SignalR, PayOS, JWT
              </span>
            </div>
            <div className="tech-item">
              <span className="label">DevOps</span>
              <span className="value">Azure, GitHub, Background Service</span>
            </div>
          </div>

          <div className="key-contributions">
            <h4>Key Contributions</h4>
            <ul>
              <li>
                Implemented secure Authentication (JWT) with Google/Facebook
                integration
              </li>
              <li>
                Built Real-time Chat system for customer-staff support using
                SignalR
              </li>
              <li>
                Integrated PayOS gateway for seamless online payment processing
              </li>
              <li>
                Developed core RESTful APIs to handle order flows and system
                logic
              </li>
            </ul>
          </div>
          <div className="github-links">
            <a
              href="https://github.com/HoangPhuc517/CoffeeShop_BE"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Back-End Repo
            </a>
            <a
              href="https://github.com/HoangPhuc517/CoffeeShop_FE"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Front-End Repo
            </a>
          </div>
        </div>

        <div className="card" data-aos="fade-up" data-aos-delay="200">
          <h3>Smoking Cessation Website</h3>
          <p className="period">05/2025 - 08/2025 | Back-End Developer</p>
          <p>
            A community-centric web platform developed to empower individuals to
            overcome smoking addiction. The system provides personalized
            cessation roadmaps, progress monitoring, and interactive social
            features to foster peer support, ensuring high maintainability and
            scalability through modern architectural standards.
          </p>
          <p>
            <strong>Team Size:</strong> 4
          </p>

          <div className="tech-grid">
            <div className="tech-item">
              <span className="label">Languages</span>
              <span className="value">C#, JavaScript</span>
            </div>
            <div className="tech-item">
              <span className="label">Architecture</span>
              <span className="value">Clean Architecture</span>
            </div>
            <div className="tech-item">
              <span className="label">Database</span>
              <span className="value">SQL Server</span>
            </div>
            <div className="tech-item">
              <span className="label">Frontend</span>
              <span className="value">ReactJS, Tailwind CSS</span>
            </div>
            <div className="tech-item">
              <span className="label">Technical</span>
              <span className="value">
                RESTful API, Gemini AI, JWT, Background Service
              </span>
            </div>
          </div>

          <div className="key-contributions">
            <h4>Key Contributions</h4>
            <ul>
              <li>
                Implemented secure Authentication & Authorization (JWT)
                integrated with Google/Facebook
              </li>
              <li>
                Integrated Google Gemini AI to build an intelligent support
                chatbot
              </li>
              <li>
                Architected the core Backend system and developed robust RESTful
                APIs following Clean Architecture standards
              </li>
            </ul>
          </div>
          <div className="github-links">
            <a
              href="https://github.com/HoangPhuc517/SmokingCessation"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 GitHub Repo
            </a>
          </div>
        </div>

        <div className="card" data-aos="fade-up" data-aos-delay="300">
          <h3>MomAndBaby - Health-tech Startup</h3>
          <p className="period">
            03/2025 - 07/2025 | Back-End Developer & Team Leader
          </p>
          <p>
            An AI-powered health-tech startup project designed as a
            comprehensive ecosystem for pregnant women and caregivers. The
            platform bridges the gap between users and healthcare professionals
            through seamless doctor-patient connectivity, automated appointment
            scheduling, and premium membership models, while utilizing AI to
            simplify routine healthcare tasks.
          </p>
          <p>
            <strong>Team Size:</strong> 6 (Interdisciplinary: SE, Economics,
            Design, Japanese)
          </p>

          <div className="tech-grid">
            <div className="tech-item">
              <span className="label">Languages</span>
              <span className="value">C# (.NET 8), Dart (Flutter)</span>
            </div>
            <div className="tech-item">
              <span className="label">Architecture</span>
              <span className="value">N-Layer Architecture</span>
            </div>
            <div className="tech-item">
              <span className="label">Database</span>
              <span className="value">PostgreSQL</span>
            </div>
            <div className="tech-item">
              <span className="label">Technical</span>
              <span className="value">
                SignalR, PayOS, JWT, Gemini API, MimeKit
              </span>
            </div>
            <div className="tech-item">
              <span className="label">DevOps</span>
              <span className="value">GitHub, Render, Docker, Figma</span>
            </div>
          </div>

          <div className="key-contributions">
            <h4>Key Contributions</h4>
            <ul>
              <li>
                Architected and developed the complete Backend system using .NET
                8 & N-Layer Architecture
              </li>
              <li>
                Built Real-time Chat system for customer-staff support using
                SignalR
              </li>
              <li>
                Integrated PayOS gateway for seamless online payment processing
              </li>
              <li>
                Designed an optimized scheduling algorithm to manage
                doctor-patient appointments efficiently
              </li>
              <li>
                Implemented secure Authentication & Authorization (JWT)
                integrated with Google/Facebook
              </li>
            </ul>
          </div>
          <div className="github-links">
            <a
              href="https://github.com/HoangPhuc517/MomAndBaby_EXE201"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 GitHub Repo
            </a>
          </div>
        </div>

        <div className="card">
          <h3>Cursus - LMS Platform</h3>
          <p className="period">
            09/2024 - 12/2024 | Back-End Developer & Team Leader
          </p>
          <p>
            An intelligent online learning platform designed to streamline
            course management, student enrollment, and payment processing
            through automated features.
          </p>
          <p>
            <strong>Team Size:</strong> 8
          </p>
          <p>
            <strong>Tech Stack:</strong> ASP.NET Core 8.0, PostgreSQL, VNPay,
            Momo, Firebase, IronPDF, Hangfire
          </p>
          <p className="note">
            <em>
              GitHub: Not publicly available (Proprietary code owned by FPT
              Software)
            </em>
          </p>
        </div>

        {/* GitHub Note */}
        <div
          className="card"
          data-aos="fade-up"
          style={{ textAlign: "center", background: "rgba(0, 242, 254, 0.05)" }}
        >
          <p style={{ margin: 0 }}>
            <strong>Note:</strong> The projects listed above represent only a
            selection of my most notable work.
            <br />
            See more projects and technical experiments on GitHub:{" "}
            <a
              href="https://github.com/HoangPhuc517"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#00f2fe" }}
            >
              github.com/HoangPhuc517
            </a>
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <h2 className="section-title">Certifications</h2>
        <div className="cert-list">
          <div className="cert-item">
            <span className="cert-date">21/07/2025</span>
            <a
              href="https://bit.ly/Coursera_AI_Google"
              target="_blank"
              rel="noopener noreferrer"
            >
              Introduction to AI (Google)
            </a>
          </div>
          <div className="cert-item">
            <span className="cert-date">15/07/2025</span>
            <a
              href="https://bit.ly/User_Research_Design"
              target="_blank"
              rel="noopener noreferrer"
            >
              User Experience (UX) Research and Design (Coursera)
            </a>
          </div>
          <div className="cert-item">
            <span className="cert-date">18/02/2025</span>
            <a
              href="https://bit.ly/Project_Management_Principles_and_Practices"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project Management Principles and Practices (Coursera)
            </a>
          </div>
          <div className="cert-item">
            <span className="cert-date">03/10/2024</span>
            <a
              href="https://bit.ly/Academic_English_Writing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Academic English: Writing (Coursera)
            </a>
          </div>
          <div className="cert-item">
            <span className="cert-date">15/06/2024</span>
            <a
              href="https://bit.ly/Certified_Ethical_Emerging_Technologist"
              target="_blank"
              rel="noopener noreferrer"
            >
              CertNexus Certified Ethical Emerging Technologist (Coursera)
            </a>
          </div>
          <div className="cert-item">
            <span className="cert-date">02/03/2024</span>
            <a
              href="https://bit.ly/Software_Development_Lifecycle_Phuc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Software Development Lifecycle Specialization (Coursera)
            </a>
          </div>
          <div className="cert-item">
            <span className="cert-date">26/02/2024</span>
            <a
              href="https://bit.ly/Coursera_Java_EE"
              target="_blank"
              rel="noopener noreferrer"
            >
              Java Enterprise Edition (Coursera)
            </a>
          </div>
          <div className="cert-item">
            <span className="cert-date">29/11/2023</span>
            <a
              href="https://bit.ly/Coursera_Web_Design_P"
              target="_blank"
              rel="noopener noreferrer"
            >
              Web Design for Everybody (Coursera)
            </a>
          </div>
          <div className="cert-item">
            <span className="cert-date">13/06/2023</span>
            <a
              href="https://bit.ly/Computer_Communications"
              target="_blank"
              rel="noopener noreferrer"
            >
              Computer Communications (Coursera)
            </a>
          </div>
          <div className="cert-item">
            <span className="cert-date">19/12/2022</span>
            <a
              href="https://bit.ly/Coursera_Skill_University"
              target="_blank"
              rel="noopener noreferrer"
            >
              Academic Skills for University Success (Coursera)
            </a>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section">
        <h2 className="section-title">Honors and Awards</h2>
        <div className="card">
          <p>
            <strong>Summer 2025:</strong> Honorable Student of Trimester -
            Score: 8.5
          </p>
          <p>
            <strong>Fall 2024:</strong> Certificate of On-the-Job Training
            Completion - Score: 9.5
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
