import { useState } from "react";

const courses = [

  {
    id: "wd", icon: "💻", title: "Web Development", subtitle: "FULL STACK",
    color: "blue", badge: "14 Modules",
    accent: "#3B82F6", accentLight: "#EFF6FF", accentDark: "#1D4ED8",
    modules: [
      { title: "MODULE 1: Introduction to Web & Internet Basics", objective: "Understand how the web works", items: ["What is Internet & Web?", "How websites work (Client vs Server)", "Domain, Hosting & DNS", "HTTP & HTTPS", "Web Browsers", "Frontend vs Backend"] },
      { title: "MODULE 2: HTML5", objective: "Build structure of websites", items: ["HTML Structure", "Tags, Elements, Attributes", "Links, Images, Lists", "Tables & Forms", "Semantic HTML", "Audio, Video, iFrame"] },
      { title: "MODULE 3: CSS3", objective: "Make websites attractive", items: ["Selectors & Properties", "Box Model", "Flexbox & Grid", "Responsive Design", "Animations"] },
      { title: "MODULE 4: JavaScript", objective: "Add interactivity", items: ["Variables & Data Types", "Functions & Loops", "DOM & Events", "Form Validation", "ES6 Concepts"] },
      { title: "MODULES 5–14: Advanced Development", objective: "Full-stack mastery", items: ["Bootstrap & UI Frameworks", "React.js", "Node.js & Express", "MongoDB / MySQL", "MERN Stack", "Deployment & Hosting", "Testing & Security", "Capstone Projects", "Interview Preparation"] },
    ],
    tools: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "MongoDB", "MySQL", "Git & GitHub", "VS Code", "Postman"],
    projects: [],
  },

  {
    id: "ds", icon: "📊", title: "Data Science", subtitle: "FULL COURSE",
    color: "emerald", badge: "16 Modules",
    accent: "#10B981", accentLight: "#ECFDF5", accentDark: "#065F46",
    modules: [
      { title: "MODULE 1: Introduction to Data Science", items: ["What is Data Science?", "Data Science Life Cycle", "Roles: Analyst, Scientist, ML Engineer", "Applications of Data Science", "Tools Overview & Setup"] },
      { title: "MODULE 2: Python for Data Science", items: ["Python Basics", "Conditional Statements & Loops", "Functions & OOP", "File & Exception Handling", "NumPy, Pandas, Matplotlib, Seaborn"] },
      { title: "MODULE 3: Statistics & Mathematics", items: ["Descriptive Statistics", "Probability & Distributions", "Hypothesis Testing", "Correlation & Covariance", "Linear Algebra & Calculus Basics"] },
      { title: "MODULES 5–8: Machine Learning", items: ["ML Fundamentals & Workflow", "Supervised Learning (Regression & Classification)", "Unsupervised Learning (Clustering, PCA)", "Ensemble & Boosting Methods", "Hyperparameter Tuning & Model Evaluation"] },
      { title: "MODULES 9–13: Deep Learning", items: ["Neural Network Basics", "ANN using TensorFlow & Keras", "Convolutional Neural Networks", "Recurrent Neural Networks (LSTM, GRU)", "Transfer Learning, GAN & NLP"] },
      { title: "MODULE 15: Big Data & Deployment", items: ["Hadoop & Spark Basics", "Model Deployment", "Flask / Streamlit", "API Creation", "AWS Basics"] },
    ],
    tools: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Power BI", "SQL", "Jupyter", "AWS"],
    projects: ["House Price Prediction", "Customer Segmentation", "Sales Forecasting", "Image Classification", "Sentiment Analysis", "End-to-End Deployment"],
  },

  {
    id: "da", icon: "🔍", title: "Data Analytics", subtitle: "FULL COURSE",
    color: "violet", badge: "8 Modules",
    accent: "#8B5CF6", accentLight: "#F5F3FF", accentDark: "#5B21B6",
    modules: [
      { title: "MODULE 1: Introduction to Data Analytics", items: ["What is Data Analytics?", "Types: Descriptive, Diagnostic, Predictive, Prescriptive", "Data Analytics Life Cycle", "Roles & Career Opportunities", "Industry Applications"] },
      { title: "MODULE 2: Excel for Data Analysis", items: ["Excel Basics & Shortcuts", "Formulas & Functions", "Pivot Tables", "Data Cleaning in Excel", "Charts & Visualization"] },
      { title: "MODULE 3: SQL for Data Analytics", items: ["Introduction to Databases", "SQL Basics (SELECT, WHERE, ORDER BY)", "Joins & Subqueries", "Group By & Aggregate Functions", "Real-world Query Practice"] },
      { title: "MODULE 4: Python for Data Analytics", items: ["Python Basics", "NumPy & Pandas", "Data Cleaning", "Exploratory Data Analysis", "Matplotlib & Seaborn"] },
      { title: "MODULE 5: Power BI & Visualization", items: ["Power BI Basics", "Data Modeling", "DAX Fundamentals", "Dashboard Creation", "Interactive Reports"] },
      { title: "MODULE 6–7: Statistics & Business Analytics", items: ["Descriptive Statistics", "Correlation & Regression", "Hypothesis Testing", "KPI & Metrics Understanding", "Data-driven Decision Making"] },
    ],
    tools: ["Microsoft Excel", "SQL", "Python", "Power BI", "Tableau", "Git & GitHub"],
    projects: ["Sales Dashboard", "HR Analytics", "Customer Churn Analysis", "Financial Data Analysis", "End-to-End Analytics Project"],
  },

  {
    id: "eh", icon: "🔐", title: "Ethical Hacking", subtitle: "FULL COURSE",
    color: "red", badge: "9 Modules",
    accent: "#EF4444", accentLight: "#FEF2F2", accentDark: "#991B1B",
    modules: [
      { title: "MODULE 1: Introduction to Ethical Hacking", items: ["What is Ethical Hacking?", "Types of Hackers (White, Black, Grey)", "Hacking Life Cycle", "Legal & Ethical Guidelines", "Tools Overview"] },
      { title: "MODULE 2: Footprinting & Reconnaissance", items: ["Information Gathering Techniques", "Domain & IP Lookup", "Network Scanning", "Social Engineering Basics"] },
      { title: "MODULE 3: Scanning & Enumeration", items: ["Port Scanning", "Vulnerability Scanning", "Network Enumeration", "Nmap & Nessus Tools"] },
      { title: "MODULE 4: System Hacking & Exploitation", items: ["Password Cracking Techniques", "Privilege Escalation", "Trojans & Backdoors", "Patch Management & Mitigation"] },
      { title: "MODULE 5: Web Application Hacking", items: ["SQL Injection", "XSS & CSRF", "File Inclusion", "OWASP Top 10"] },
      { title: "MODULE 6–8: Network, Wireless & Cryptography", items: ["Wi-Fi Hacking", "Man-in-the-Middle Attacks", "Packet Sniffing", "Encryption & Hashing", "Secure Communication"] },
    ],
    tools: ["Kali Linux", "Nmap", "Wireshark", "Metasploit", "Burp Suite", "OWASP ZAP"],
    projects: ["Penetration Testing", "Web Hacking Lab", "Network Security Audit", "Real-world Case Studies"],
  },

  {
    id: "dm", icon: "📣", title: "Digital Marketing", subtitle: "FULL COURSE",
    color: "amber", badge: "8 Modules",
    accent: "#F59E0B", accentLight: "#FFFBEB", accentDark: "#92400E",
    modules: [
      { title: "MODULE 1: Introduction to Digital Marketing", items: ["Overview of Digital Marketing", "Traditional vs Digital Marketing", "Digital Marketing Channels", "Trends & Career Opportunities"] },
      { title: "MODULE 2: SEO", items: ["Introduction to SEO", "On-page & Off-page SEO", "Keyword Research", "Backlinking & Link Building", "SEO Tools & Analytics"] },
      { title: "MODULE 3: Social Media Marketing", items: ["Social Media Platforms Overview", "Content Strategy & Planning", "Facebook, Instagram, LinkedIn Marketing", "Engagement & Analytics"] },
      { title: "MODULE 4: Paid Advertising (PPC)", items: ["Introduction to Google Ads", "Pay-Per-Click Campaigns", "Ad Targeting & Bidding", "Campaign Optimization & Analytics"] },
      { title: "MODULE 5–6: Email & Content Marketing", items: ["Email Campaign Strategy", "Segmentation & Targeting", "Email Automation", "Blog Writing & SEO Content", "Video & Multimedia Content"] },
      { title: "MODULE 7: Analytics & Reporting", items: ["Google Analytics Basics", "Traffic & Conversion Tracking", "Performance Metrics & KPIs", "Data-driven Marketing Decisions"] },
    ],
    tools: ["Google Analytics", "Google Ads", "Facebook Ads Manager", "Mailchimp", "Canva", "Ahrefs", "SEMrush"],
    projects: ["SEO Campaign Project", "Social Media Marketing Project", "PPC Campaign Simulation", "Email & Content Campaign"],
  },

  {
    id: "id", icon: "🏠", title: "Interior Design", subtitle: "DIPLOMA",
    color: "orange", badge: "8 Modules",
    accent: "#F97316", accentLight: "#FFF7ED", accentDark: "#9A3412",
    modules: [
      { title: "MODULE 1: Introduction to Interior Design", items: ["What is Interior Design?", "History & Evolution", "Role of an Interior Designer", "Design Principles & Elements"] },
      { title: "MODULE 2: Space Planning & Layouts", items: ["Understanding Space & Function", "Residential & Commercial Layouts", "Furniture Planning & Zoning", "Circulation & Flow"] },
      { title: "MODULE 3: Color Theory & Materials", items: ["Color Psychology", "Color Schemes & Combinations", "Materials & Finishes (Wood, Fabric, Tiles)", "Surface Textures & Patterns"] },
      { title: "MODULE 4: Furniture & Lighting Design", items: ["Furniture Styles & Selection", "Custom Furniture Design Basics", "Lighting Types & Techniques", "Accent & Ambient Lighting"] },
      { title: "MODULE 5: CAD & Design Software", items: ["AutoCAD Basics", "SketchUp & 3D Modeling", "Floor Plan Drafting", "Rendering & Visualization"] },
      { title: "MODULE 6–7: Textiles, Furnishing & Styles", items: ["Fabric Selection & Drapery", "Upholstery & Soft Furnishings", "Modern, Minimalist & Scandinavian Styles", "Traditional, Classical & Eclectic Styles"] },
    ],
    tools: ["AutoCAD", "SketchUp", "3ds Max", "Adobe Photoshop", "PowerPoint", "Rendering Tools"],
    projects: ["Residential Project Design", "Commercial Project Design", "3D Rendering & Mockups", "Portfolio Building & Presentation"],
  },

  {
    id: "fa", icon: "💰", title: "Finance & Accounting", subtitle: "ADVANCED",
    color: "cyan", badge: "7 Modules",
    accent: "#06B6D4", accentLight: "#ECFEFF", accentDark: "#0E7490",
    modules: [
      { title: "MODULE 1: Introduction to Advanced Accounting", items: ["Overview of Financial Accounting", "Accounting Standards & Regulations", "Role of an Accountant", "Financial Statements & Reports"] },
      { title: "MODULE 2: Corporate Financial Reporting", items: ["Balance Sheet & Income Statement", "Cash Flow Statements", "Share Capital & Reserves Accounting", "IFRS / GAAP Standards"] },
      { title: "MODULE 3: Financial Analysis & Ratio", items: ["Financial Ratio Analysis", "Liquidity & Solvency Analysis", "Profitability & Efficiency Ratios", "Trend & Comparative Analysis"] },
      { title: "MODULE 4: Cost & Management Accounting", items: ["Cost Classification & Allocation", "Budgeting & Variance Analysis", "Break-even Analysis", "Cost Control & Decision Making"] },
      { title: "MODULE 5: Advanced Taxation & Compliance", items: ["Corporate Taxation", "GST & Indirect Taxes", "Tax Planning & Compliance", "Audit & Regulatory Requirements"] },
      { title: "MODULE 6: Investment & Financial Management", items: ["Capital Budgeting", "Working Capital Management", "Investment Appraisal Techniques", "Risk Management & Financial Planning"] },
    ],
    tools: ["MS Excel (Advanced)", "Tally ERP", "QuickBooks", "ERP Accounting Software"],
    projects: ["Financial Statement Analysis", "Cost Management Case Study", "Tax Planning Case Study", "Corporate Financial Simulation"],
  },

  {
    id: "hr", icon: "👥", title: "Human Resource Management", subtitle: "DIPLOMA",
    color: "pink", badge: "6 Modules",
    accent: "#EC4899", accentLight: "#FDF2F8", accentDark: "#9D174D",
    modules: [
      { title: "Introduction to HR Management", items: ["Overview of HR Functions", "Role of Technology in Modern HR", "Legal and Ethical Considerations"] },
      { title: "HR Information Systems (HRIS)", items: ["HRIS Fundamentals & Key Features", "SAP SuccessFactors & Workday Basics", "Employee Data Management", "Creating & Managing Employee Records"] },
      { title: "Recruitment & ATS", items: ["Recruitment & Selection Process", "LinkedIn Recruiter & Zoho Recruit", "Screening & Interview Scheduling", "Recruitment Analytics"] },
      { title: "Performance, Payroll & Engagement", items: ["KPIs & OKRs (BambooHR, Lattice)", "Payroll Processing (ADP, QuickBooks)", "Tax Compliance & Reporting", "Employee Surveys & Feedback"] },
      { title: "HR Analytics & L&D", items: ["HR Metrics & Workforce Analysis", "Excel & Power BI Basics", "LMS Platforms (Moodle, TalentLMS)", "Training ROI Measurement"] },
      { title: "Strategic HRM & Cloud Tools", items: ["Workforce & Succession Planning", "Aligning HR with Business Goals", "MS Teams, Slack, Google Workspace", "Asana & Trello for HR Projects"] },
    ],
    tools: ["SAP SuccessFactors", "Workday", "LinkedIn Recruiter", "BambooHR", "Power BI", "Slack"],
    projects: ["Strategic HR Plan Development", "Recruitment Pipeline Simulation", "Payroll Processing Practice", "Capstone: Full HR System Integration"],
  },
];

const colorMap = {
  blue: { ring: "ring-blue-400", bg: "bg-blue-50", text: "text-blue-700", badge: "bg-blue-100 text-blue-700", tool: "bg-blue-50 text-blue-800 border-blue-200", dot: "bg-blue-400", glow: "shadow-blue-200", proj: "bg-blue-700", modBg: "bg-blue-50", modBorder: "border-blue-300", modText: "text-blue-700" },
  emerald: { ring: "ring-emerald-400", bg: "bg-emerald-50", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-700", tool: "bg-emerald-50 text-emerald-800 border-emerald-200", dot: "bg-emerald-400", glow: "shadow-emerald-200", proj: "bg-emerald-700", modBg: "bg-emerald-50", modBorder: "border-emerald-300", modText: "text-emerald-700" },
  violet: { ring: "ring-violet-400", bg: "bg-violet-50", text: "text-violet-700", badge: "bg-violet-100 text-violet-700", tool: "bg-violet-50 text-violet-800 border-violet-200", dot: "bg-violet-400", glow: "shadow-violet-200", proj: "bg-violet-700", modBg: "bg-violet-50", modBorder: "border-violet-300", modText: "text-violet-700" },
  red: { ring: "ring-red-400", bg: "bg-red-50", text: "text-red-700", badge: "bg-red-100 text-red-700", tool: "bg-red-50 text-red-800 border-red-200", dot: "bg-red-400", glow: "shadow-red-200", proj: "bg-red-700", modBg: "bg-red-50", modBorder: "border-red-300", modText: "text-red-700" },
  amber: { ring: "ring-amber-400", bg: "bg-amber-50", text: "text-amber-700", badge: "bg-amber-100 text-amber-700", tool: "bg-amber-50 text-amber-800 border-amber-200", dot: "bg-amber-400", glow: "shadow-amber-200", proj: "bg-amber-700", modBg: "bg-amber-50", modBorder: "border-amber-300", modText: "text-amber-700" },
  orange: { ring: "ring-orange-400", bg: "bg-orange-50", text: "text-orange-700", badge: "bg-orange-100 text-orange-700", tool: "bg-orange-50 text-orange-800 border-orange-200", dot: "bg-orange-400", glow: "shadow-orange-200", proj: "bg-orange-700", modBg: "bg-orange-50", modBorder: "border-orange-300", modText: "text-orange-700" },
  cyan: { ring: "ring-cyan-400", bg: "bg-cyan-50", text: "text-cyan-700", badge: "bg-cyan-100 text-cyan-700", tool: "bg-cyan-50 text-cyan-800 border-cyan-200", dot: "bg-cyan-400", glow: "shadow-cyan-200", proj: "bg-cyan-700", modBg: "bg-cyan-50", modBorder: "border-cyan-300", modText: "text-cyan-700" },
  pink: { ring: "ring-pink-400", bg: "bg-pink-50", text: "text-pink-700", badge: "bg-pink-100 text-pink-700", tool: "bg-pink-50 text-pink-800 border-pink-200", dot: "bg-pink-400", glow: "shadow-pink-200", proj: "bg-pink-700", modBg: "bg-pink-50", modBorder: "border-pink-300", modText: "text-pink-700" },
};

function ModuleCard({ mod, isActive, onClick, c }) {
  return (
    <div
      onClick={onClick}
      className={`rounded-2xl border-2 cursor-pointer transition-all duration-200 overflow-hidden
        ${isActive ? `${c.modBorder} ${c.modBg} shadow-md` : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm"}`}
    >
      <div className="p-4">
        <div className={`text-sm font-bold uppercase tracking-wide mb-1 ${isActive ? c.modText : "text-black"}`}>
          {mod.title}
        </div>

        {mod.objective && (
          <div className="text-sm text-black italic mb-2">🎯 {mod.objective}</div>
        )}

        {isActive ? (
          <ul className="mt-2 space-y-2 pl-5 list-disc">
            {mod.items.map((item, j) => (
              <li key={j} className="text-sm text-black leading-relaxed">{item}</li>
            ))}
          </ul>
        ) : (
          <div className="text-sm text-black flex items-center gap-1 mt-1">
            <span className={`inline-block w-2 h-2 rounded-full ${c.dot}`}></span>
            {mod.items.length} topics · tap to expand
          </div>
        )}
      </div>
    </div>
  );
}


function CourseCard({ course }) {
  const [open, setOpen] = useState(false);
  const [activeModule, setActiveModule] = useState(null);
  const c = colorMap[course.color];

  return (
    <div className={`rounded-3xl border-2 transition-all duration-300 overflow-hidden bg-white
      ${open ? `${c.ring} ring-1 shadow-2xl ${c.glow}` : "border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200"}`}>

      {/* Header */}

      <button
        onClick={() => setOpen(v => !v)}
        className={`w-full flex items-center gap-4 px-6 py-5 text-left transition-colors duration-200
          ${open ? c.bg : "bg-white hover:bg-gray-50"}`}
      >
        {/* Icon */}

        <div className="text-2xl f w-12 h-12 rounded-2xl flex items-center justify-center ${c.bg} border ${c.ring} ring-1">
          {course.icon}
        </div>

        {/* Title group */}

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${c.badge}`}>
              {course.subtitle}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-500">
              {course.badge}
            </span>
          </div>
          <div className="font-extrabold text-gray-900 text-base sm:text-lg leading-tight tracking-tight">
            {course.title}
          </div>
        </div>

        {/* Chevron */}

        <div className={` w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${open ? `${c.bg} ${c.text}` : "bg-gray-100 text-gray-400"}`}>
          <svg className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Expandable body */}

      <div className={`transition-all duration-500 ease-in-out ${open ? "max-h-huge opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="px-6 pb-6 pt-2 space-y-5">

          {/* Section label */}

          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-bold uppercase tracking-widest ${c.text}`}>Course Modules</span>
            <div className="flex-1 h-px bg-gray-100"></div>
          </div>

          {/* Modules grid */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {course.modules.map((mod, i) => (
              <ModuleCard
                key={i}
                mod={mod}
                isActive={activeModule === i}
                onClick={() => setActiveModule(activeModule === i ? null : i)}
                c={c}
              />
            ))}
          </div>

          {/* Projects */}

          {course.projects.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-[10px] font-bold uppercase tracking-widest ${c.text}`}>🚀 Real-World Projects</span>
                <div className="flex-1 h-px bg-gray-100"></div>
              </div>
              <div className="flex flex-wrap gap-2">
                {course.projects.map((p, i) => (
                  <span key={i} className={`text-xs font-semibold px-3 py-1.5 rounded-xl border ${c.tool}`}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tools */}

          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-[10px] font-bold uppercase tracking-widest ${c.text}`}>🛠 Tools Covered</span>
              <div className="flex-1 h-px bg-gray-100"></div>
            </div>
            <div className="flex flex-wrap gap-2">
              {course.tools.map((t, i) => (
                <span key={i} className="text-xs font-bold px-3 py-1.5 rounded-xl border ${c.tool}">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CourseSyllabus() {
  const [search, setSearch] = useState("");

  const filtered = courses.filter(c =>
    c.title.toLowerCase().includes(search.toLowerCase()) ||
    c.subtitle.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100 font-sans">

      {/* Hero */}

      {/* Hero with Image Background */}
      <div className="relative overflow-hidden">

        {/* Image bg */}
        {/* <img
          src="AB.jpeg"  // ← yaha apni image ka path do
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        /> */}

        {/* Video bg */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="Study.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 py-16 sm:py-24 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-500 leading-tight tracking-tight mb-4">
            Explore Our Full
            <span className="block text-blue-500 bg-clip-text">
              syllabus
            </span>
          </h1>

          <p className="text-yellow-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-10">
            All industry-ready programs designed to launch your tech, design & business career.
          </p>

          {/* Stats row */}
          <div className="flex justify-center gap-8 sm:gap-12 flex-wrap mb-10">
            {[["8", "Courses"], ["80+", "Modules"], ["50+", "Projects"], ["100%", "Job Ready"]].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">{num}</div>
                <div className="text-[20px] uppercase tracking-widest text-black mt-0.5">{label}</div>
              </div>
            ))}
          </div>


          {/* Search bar */}

          <div className="flex justify-center">
            <div className="flex items-center gap-3 bg-white text-black backdrop-blur-sm rounded-2xl px-4 py-3 w-full max-w-sm">
              <svg className="w-4 h-4 text-black " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search courses..."
                className="bg-transparent border-none outline-none text-black placeholder-slate-500 text-sm w-full"
              />
              {search && (
                <button onClick={() => setSearch("")} className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

        </div>

      </div >

      <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <div className="text-4xl mb-3">🔍</div>
            <div className="font-semibold text-base text-gray-500 mb-1">No results found</div>
            <div className="text-sm">No courses match "{search}"</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map(course => (
              <div className="p-4">
                <CourseCard key={course.id} course={course} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div >
  );
}