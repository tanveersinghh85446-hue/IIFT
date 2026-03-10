// import React from 'react'
// import { TbDeviceDesktopCode } from "react-icons/tb";
// import { FaDatabase } from "react-icons/fa";
// import { MdDataExploration } from "react-icons/md";
// import { TbBrandHackerrank } from "react-icons/tb";
// import { GiDiploma } from "react-icons/gi";
// import { GiTakeMyMoney } from "react-icons/gi";
// import { AiOutlineStock } from "react-icons/ai";
// import { GrResources } from "react-icons/gr";
// import { IoRocketOutline } from "react-icons/io5";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// export default function Course() {
//   return (
//     <div className="px-4 md:px-8">

//       {/* ===== Heading Section ===== */}
//       <div className='flex flex-col md:flex-row justify-center items-center gap-4 text-center mt-8'>

//         <span className='text-blue-600 text-3xl md:text-5xl transition-transform duration-300 hover:scale-125'>
//           <IoRocketOutline />
//         </span>

//         <h1 className='text-3xl md:text-5xl font-serif bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
//           Skills That Get You Hired
//         </h1>

//         <span className='text-blue-600 text-3xl md:text-5xl transition-transform duration-300 hover:scale-125'>
//           <IoRocketOutline />
//         </span>

//       </div>

//       <div className='max-w-6xl mx-auto mt-10 mb-16'>

//         {/* ===== All Details Sections ===== */}
//         <div className="space-y-6">

//           {/* First Part */}
//           <div>
//             {/* WD COMPLETED */}
//             <details className="group max-w-6xl mx-auto p-6 sm:p-8 rounded-2xl shadow-xl border transition-all duration-300">

//               <summary className="cursor-pointer font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-center flex items-center justify-center gap-3">
//                 <span>
//                   <TbDeviceDesktopCode className='text-blue-600 text-3xl sm:text-4xl transition-transform duration-300 hover:scale-150 animate-bounce' />
//                 </span>
//                 WEB DEVELOPMENT FULL SYLLABUS
//               </summary>

//               <div className="mt-6 text-gray-700 space-y-6 sm:space-y-8 text-sm sm:text-base">

//                 {/* Module 1 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-green-600">
//                     MODULE 1: Introduction to Web & Internet Basics
//                   </h2>
//                   <p className="mb-2">
//                     <strong>Objective:</strong> Understand how the web works
//                   </p>
//                   <ul className="list-disc ml-5 space-y-1">
//                     <li>What is Internet & Web?</li>
//                     <li>How websites work (Client vs Server)</li>
//                     <li>Domain, Hosting & DNS</li>
//                     <li>HTTP & HTTPS</li>
//                     <li>Web Browsers</li>
//                     <li>Frontend vs Backend</li>
//                   </ul>
//                 </div>

//                 {/* Module 2 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-green-600">
//                     MODULE 2: HTML5
//                   </h2>
//                   <p className="mb-2">
//                     <strong>Objective:</strong> Build structure of websites
//                   </p>
//                   <ul className="list-disc ml-5 space-y-1">
//                     <li>HTML Structure</li>
//                     <li>Tags, Elements, Attributes</li>
//                     <li>Links, Images, Lists</li>
//                     <li>Tables & Forms</li>
//                     <li>Semantic HTML</li>
//                     <li>Audio, Video, iFrame</li>
//                   </ul>
//                 </div>

//                 {/* Module 3 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-green-600">
//                     MODULE 3: CSS3
//                   </h2>
//                   <p className="mb-2">
//                     <strong>Objective:</strong> Make website attractive
//                   </p>
//                   <ul className="list-disc ml-5 space-y-1">
//                     <li>Selectors & Properties</li>
//                     <li>Box Model</li>
//                     <li>Flexbox & Grid</li>
//                     <li>Responsive Design</li>
//                     <li>Animations</li>
//                   </ul>
//                 </div>

//                 {/* Module 4 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-green-600">
//                     MODULE 4: JavaScript
//                   </h2>
//                   <p className="mb-2">
//                     <strong>Objective:</strong> Add interactivity
//                   </p>
//                   <ul className="list-disc ml-5 space-y-1">
//                     <li>Variables & Data Types</li>
//                     <li>Functions & Loops</li>
//                     <li>DOM & Events</li>
//                     <li>Form Validation</li>
//                     <li>ES6 Concepts</li>
//                   </ul>
//                 </div>

//                 {/* Remaining Modules and Tools */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-green-600">
//                     MODULE 5 - 14: Advanced Development
//                   </h2>
//                   <ul className="list-disc ml-5 space-y-1">
//                     <li>Bootstrap & UI Frameworks</li>
//                     <li>React.js</li>
//                     <li>Node.js & Express</li>
//                     <li>MongoDB / MySQL</li>
//                     <li>MERN Stack</li>
//                     <li>Deployment & Hosting</li>
//                     <li>Testing & Security</li>
//                     <li>Capstone Projects</li>
//                     <li>Interview Preparation</li>
//                   </ul>
//                 </div>

//                 <div className="p-4 sm:p-6 bg-green-100 rounded-xl border border-green-200">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-green-700">
//                     🛠 TOOLS COVERED
//                   </h2>
//                   <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs sm:text-sm font-medium">
//                     <li>HTML5</li>
//                     <li>CSS3</li>
//                     <li>JavaScript</li>
//                     <li>React.js</li>
//                     <li>Node.js</li>
//                     <li>MongoDB / MySQL</li>
//                     <li>Git & GitHub</li>
//                     <li>VS Code</li>
//                     <li>Postman</li>
//                   </ul>
//                 </div>

//               </div>
//             </details>

//             {/*   DS COMPLETED */}
//             <details className="mt-4 group max-w-6xl mx-auto p-4 sm:p-6 rounded-2xl shadow-xl border transition-all duration-300">

//               <summary className="cursor-pointer font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-center flex items-center justify-center gap-3">
//                 <span>
//                   <FaDatabase className='text-3xl sm:text-4xl text-green-600 transition-transform duration-300 hover:scale-150 animate-bounce' />
//                 </span>
//                 DATA SCIENCE – FULL COURSE SYLLABUS
//               </summary>

//               <div className="mt-6 text-gray-700 space-y-6 sm:space-y-8 text-sm sm:text-base">

//                 {/* Module 1 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-600">
//                     MODULE 1: Introduction to Data Science
//                   </h2>
//                   <ul className="list-disc ml-5 space-y-1">
//                     <li>What is Data Science?</li>
//                     <li>Data Science Life Cycle</li>
//                     <li>Roles: Data Analyst, Data Scientist, ML Engineer</li>
//                     <li>Applications of Data Science</li>
//                     <li>Tools: Python, R, SQL, Power BI</li>
//                     <li>Installation & Setup</li>
//                   </ul>
//                 </div>

//                 {/* Module 2 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-600">
//                     MODULE 2: Python for Data Science
//                   </h2>
//                   <ul className="list-disc ml-5 space-y-1">
//                     <li>Python Basics</li>
//                     <li>Conditional Statements & Loops</li>
//                     <li>Functions & OOPS</li>
//                     <li>File & Exception Handling</li>
//                     <li>NumPy</li>
//                     <li>Pandas</li>
//                     <li>Matplotlib</li>
//                     <li>Seaborn</li>
//                   </ul>
//                 </div>

//                 {/* Module 3 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-600">
//                     MODULE 3: Statistics & Mathematics
//                   </h2>
//                   <ul className="list-disc ml-5 space-y-1">
//                     <li>Descriptive Statistics</li>
//                     <li>Probability & Distributions</li>
//                     <li>Hypothesis Testing</li>
//                     <li>Correlation & Covariance</li>
//                     <li>Linear Algebra Basics</li>
//                     <li>Calculus Basics</li>
//                   </ul>
//                 </div>

//                 {/* Module 4 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-600">
//                     MODULE 4: Data Analysis & Visualization
//                   </h2>
//                   <ul className="list-disc ml-5 space-y-1">
//                     <li>Data Cleaning</li>
//                     <li>Missing Values Handling</li>
//                     <li>Outlier Detection</li>
//                     <li>Feature Engineering</li>
//                     <li>Exploratory Data Analysis</li>
//                     <li>Visualization Techniques</li>
//                     <li>Dashboard Basics</li>
//                   </ul>
//                 </div>

//                 {/* Machine Learning */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-600">
//                     MODULE 5 - 8: Machine Learning
//                   </h2>
//                   <ul className="list-disc ml-5 space-y-1">
//                     <li>ML Fundamentals & Workflow</li>
//                     <li>Supervised Learning (Regression & Classification)</li>
//                     <li>Unsupervised Learning (Clustering, PCA)</li>
//                     <li>Ensemble & Boosting Methods</li>
//                     <li>Hyperparameter Tuning</li>
//                     <li>Model Evaluation</li>
//                   </ul>
//                 </div>

//                 {/* Deep Learning */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-600">
//                     MODULE 9 - 13: Deep Learning
//                   </h2>
//                   <ul className="list-disc ml-5 space-y-1">
//                     <li>Neural Network Basics</li>
//                     <li>ANN using TensorFlow & Keras</li>
//                     <li>Convolutional Neural Networks</li>
//                     <li>Recurrent Neural Networks (LSTM, GRU)</li>
//                     <li>Transfer Learning & GAN</li>
//                     <li>NLP & Transformers Introduction</li>
//                   </ul>
//                 </div>

//                 {/* NLP */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-600">
//                     MODULE 14: Natural Language Processing
//                   </h2>
//                   <ul className="list-disc ml-5 space-y-1">
//                     <li>Text Preprocessing</li>
//                     <li>Tokenization</li>
//                     <li>Stemming & Lemmatization</li>
//                     <li>TF-IDF</li>
//                     <li>Sentiment Analysis</li>
//                     <li>Chatbot Basics</li>
//                   </ul>
//                 </div>

//                 {/* Big Data */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-600">
//                     MODULE 15: Big Data & Deployment
//                   </h2>
//                   <ul className="list-disc ml-5 space-y-1">
//                     <li>Big Data Introduction</li>
//                     <li>Hadoop & Spark Basics</li>
//                     <li>Model Deployment</li>
//                     <li>Flask / Streamlit</li>
//                     <li>API Creation</li>
//                     <li>AWS Basics</li>
//                   </ul>
//                 </div>

//                 {/* Projects */}
//                 <div className="p-4 sm:p-6 bg-emerald-100 rounded-xl border border-emerald-200">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-700">
//                     🚀 MODULE 16: Real-World Projects
//                   </h2>
//                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm font-medium">
//                     <li>House Price Prediction</li>
//                     <li>Customer Segmentation</li>
//                     <li>Sales Forecasting</li>
//                     <li>Image Classification</li>
//                     <li>Sentiment Analysis</li>
//                     <li>End-to-End Deployment Project</li>
//                   </ul>
//                 </div>

//               </div>
//             </details>

//             {/* DA COMPLETED */}
//             <details className="mt-4 group max-w-6xl mx-auto p-4 sm:p-6 rounded-2xl shadow-xl border transition-all duration-300">

//               <summary className="cursor-pointer font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-center flex items-center justify-center gap-3">
//                 <span className="text-emerald-600">
//                   <MdDataExploration className='text-3xl sm:text-4xl text-violet-600 transition-transform duration-300 hover:scale-150 animate-bounce' />
//                 </span>
//                 DATA ANALYTICS – FULL COURSE SYLLABUS
//               </summary>

//               <div className="mt-6 text-gray-700 space-y-6 sm:space-y-8 text-sm sm:text-base">

//                 {/* Module 1 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-600">
//                     MODULE 1: Introduction to Data Analytics
//                   </h2>
//                   <ul className="list-disc ml-5 space-y-1">
//                     <li>What is Data Analytics?</li>
//                     <li>Types of Analytics (Descriptive, Diagnostic, Predictive, Prescriptive)</li>
//                     <li>Data Analytics Life Cycle</li>
//                     <li>Roles & Career Opportunities</li>
//                     <li>Industry Applications</li>
//                   </ul>
//                 </div>

//                 {/* Module 2 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-600">
//                     MODULE 2: Excel for Data Analysis
//                   </h2>
//                   <ul className="list-disc ml-5 space-y-1">
//                     <li>Excel Basics & Shortcuts</li>
//                     <li>Formulas & Functions</li>
//                     <li>Pivot Tables</li>
//                     <li>Data Cleaning in Excel</li>
//                     <li>Charts & Visualization</li>
//                   </ul>
//                 </div>

//                 {/* Module 3 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-600">
//                     MODULE 3: SQL for Data Analytics
//                   </h2>
//                   <ul className="list-disc ml-5 space-y-1">
//                     <li>Introduction to Databases</li>
//                     <li>SQL Basics (SELECT, WHERE, ORDER BY)</li>
//                     <li>Joins & Subqueries</li>
//                     <li>Group By & Aggregate Functions</li>
//                     <li>Real-world Query Practice</li>
//                   </ul>
//                 </div>

//                 {/* Module 4 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-600">
//                     MODULE 4: Python for Data Analytics
//                   </h2>
//                   <ul className="list-disc ml-5 space-y-1">
//                     <li>Python Basics</li>
//                     <li>NumPy & Pandas</li>
//                     <li>Data Cleaning</li>
//                     <li>Exploratory Data Analysis</li>
//                     <li>Data Visualization (Matplotlib, Seaborn)</li>
//                   </ul>
//                 </div>

//                 {/* Module 5 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-600">
//                     MODULE 5: Data Visualization Tools
//                   </h2>
//                   <ul className="list-disc ml-5 space-y-1">
//                     <li>Power BI Basics</li>
//                     <li>Data Modeling</li>
//                     <li>DAX Fundamentals</li>
//                     <li>Dashboard Creation</li>
//                     <li>Interactive Reports</li>
//                   </ul>
//                 </div>

//                 {/* Module 6 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-600">
//                     MODULE 6: Statistics for Analytics
//                   </h2>
//                   <ul className="list-disc ml-5 space-y-1">
//                     <li>Descriptive Statistics</li>
//                     <li>Probability Basics</li>
//                     <li>Correlation & Regression</li>
//                     <li>Hypothesis Testing</li>
//                     <li>Business Case Studies</li>
//                   </ul>
//                 </div>

//                 {/* Module 7 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-600">
//                     MODULE 7: Business Analytics & Case Studies
//                   </h2>
//                   <ul className="list-disc ml-5 space-y-1">
//                     <li>Business Problem Solving</li>
//                     <li>KPI & Metrics Understanding</li>
//                     <li>Data-driven Decision Making</li>
//                     <li>Real-world Industry Projects</li>
//                   </ul>
//                 </div>

//                 {/* Projects */}
//                 <div className="p-4 sm:p-6 bg-emerald-100 rounded-xl border border-emerald-200">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-700">
//                     🚀 MODULE 8: Real-World Projects
//                   </h2>
//                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm font-medium">
//                     <li>Sales Dashboard Project</li>
//                     <li>HR Analytics Project</li>
//                     <li>Customer Churn Analysis</li>
//                     <li>Financial Data Analysis</li>
//                     <li>End-to-End Data Analytics Project</li>
//                   </ul>
//                 </div>

//                 {/* Tools */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md border border-emerald-100">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-600">
//                     🛠 TOOLS COVERED
//                   </h2>
//                   <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs sm:text-sm font-medium">
//                     <li>Microsoft Excel</li>
//                     <li>SQL</li>
//                     <li>Python</li>
//                     <li>Power BI</li>
//                     <li>Tableau (Introduction)</li>
//                     <li>Git & GitHub</li>
//                   </ul>
//                 </div>

//               </div>
//             </details>

//             {/* EH COMPLETED */}
//             <details className="mt-4 group max-w-6xl mx-auto p-4 sm:p-6 rounded-2xl shadow-xl border transition-all duration-300">

//               <summary className="cursor-pointer font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-center flex items-center justify-center gap-3">
//                 <span className="text-emerald-400">
//                   <TbBrandHackerrank className='text-3xl sm:text-4xl text-red-600 transition-transform duration-300 hover:scale-150 animate-bounce' />
//                 </span>
//                 ETHICAL HACKING – FULL COURSE SYLLABUS
//               </summary>

//               <div className="mt-6 text-gray-200 space-y-6 sm:space-y-8 text-sm sm:text-base">

//                 {/* Module 1 */}
//                 <div className="p-4 sm:p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-emerald-500/20 hover:shadow-lg transition border border-gray-700">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-400">
//                     MODULE 1: Introduction to Ethical Hacking
//                   </h2>
//                   <ul className="list-disc ml-5 space-y-1">
//                     <li>What is Ethical Hacking?</li>
//                     <li>Types of Hackers (White, Black, Grey)</li>
//                     <li>Hacking Life Cycle</li>
//                     <li>Legal & Ethical Guidelines</li>
//                     <li>Tools Overview</li>
//                   </ul>
//                 </div>

//                 {/* Module 2 */}
//                 <div className="p-4 sm:p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-emerald-500/20 hover:shadow-lg transition border border-gray-700">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-400">
//                     MODULE 2: Footprinting & Reconnaissance
//                   </h2>
//                   <ul className="list-disc ml-5 space-y-1">
//                     <li>Information Gathering Techniques</li>
//                     <li>Domain & IP Lookup</li>
//                     <li>Network Scanning</li>
//                     <li>Social Engineering Basics</li>
//                   </ul>
//                 </div>

//                 {/* Module 3 */}
//                 <div className="p-4 sm:p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-emerald-500/20 hover:shadow-lg transition border border-gray-700">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-400">
//                     MODULE 3: Scanning & Enumeration
//                   </h2>
//                   <ul className="list-disc ml-5 space-y-1">
//                     <li>Port Scanning</li>
//                     <li>Vulnerability Scanning</li>
//                     <li>Network Enumeration</li>
//                     <li>Using Tools (Nmap, Nessus)</li>
//                   </ul>
//                 </div>

//                 {/* Module 4 */}
//                 <div className="p-4 sm:p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-emerald-500/20 hover:shadow-lg transition border border-gray-700">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-400">
//                     MODULE 4: System Hacking & Exploitation
//                   </h2>
//                   <ul className="list-disc ml-5 space-y-1">
//                     <li>Password Cracking Techniques</li>
//                     <li>Privilege Escalation</li>
//                     <li>Trojan & Backdoors</li>
//                     <li>Patch Management & Mitigation</li>
//                   </ul>
//                 </div>

//                 {/* Module 5 */}
//                 <div className="p-4 sm:p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-emerald-500/20 hover:shadow-lg transition border border-gray-700">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-400">
//                     MODULE 5: Web Application Hacking
//                   </h2>
//                   <ul className="list-disc ml-5 space-y-1">
//                     <li>SQL Injection</li>
//                     <li>XSS</li>
//                     <li>CSRF</li>
//                     <li>File Inclusion</li>
//                     <li>OWASP Top 10</li>
//                   </ul>
//                 </div>

//                 {/* Module 6 */}
//                 <div className="p-4 sm:p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-emerald-500/20 hover:shadow-lg transition border border-gray-700">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-400">
//                     MODULE 6: Network & Wireless Hacking
//                   </h2>
//                   <ul className="list-disc ml-5 space-y-1">
//                     <li>Wi-Fi Hacking</li>
//                     <li>Man-in-the-Middle</li>
//                     <li>Packet Sniffing</li>
//                     <li>Firewall Bypass</li>
//                   </ul>
//                 </div>

//                 {/* Module 7 */}
//                 <div className="p-4 sm:p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-emerald-500/20 hover:shadow-lg transition border border-gray-700">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-400">
//                     MODULE 7: Malware Analysis
//                   </h2>
//                   <ul className="list-disc ml-5 space-y-1">
//                     <li>Virus, Worms, Trojans</li>
//                     <li>Reverse Engineering</li>
//                     <li>Defense Strategies</li>
//                   </ul>
//                 </div>

//                 {/* Module 8 */}
//                 <div className="p-4 sm:p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-emerald-500/20 hover:shadow-lg transition border border-gray-700">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-400">
//                     MODULE 8: Cryptography
//                   </h2>
//                   <ul className="list-disc ml-5 space-y-1">
//                     <li>Encryption</li>
//                     <li>Symmetric vs Asymmetric</li>
//                     <li>Hashing</li>
//                     <li>Secure Communication</li>
//                   </ul>
//                 </div>

//                 {/* Projects */}
//                 <div className="p-4 sm:p-6 bg-emerald-900/40 rounded-xl border border-emerald-500/30">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-300">
//                     🚀 MODULE 9: Projects
//                   </h2>
//                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm font-medium">
//                     <li>Penetration Testing</li>
//                     <li>Web Hacking</li>
//                     <li>Network Security</li>
//                     <li>Case Studies</li>
//                   </ul>
//                 </div>

//                 {/* Tools */}
//                 <div className="p-4 sm:p-6 bg-gray-800 rounded-xl shadow-md border border-gray-700">
//                   <h2 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-400">
//                     🛠 TOOLS
//                   </h2>
//                   <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs sm:text-sm font-medium">
//                     <li>Kali Linux</li>
//                     <li>Nmap</li>
//                     <li>Wireshark</li>
//                     <li>Metasploit</li>
//                     <li>Burp Suite</li>
//                     <li>OWASP ZAP</li>
//                   </ul>
//                 </div>

//               </div>
//             </details>
//           </div>


//           {/* Sec Part */}
//           <div>
//             {/* DM COMPLETED */}
//             <details className="mt-4 group max-w-6xl mx-auto p-6 sm:p-8 rounded-2xl shadow-xl border transition-all duration-300">

//               <summary className="cursor-pointer font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-center flex items-center justify-center gap-3">
//                 <span className="text-purple-600">
//                   <AiOutlineStock className='text-3xl sm:text-4xl transition-transform duration-300 hover:scale-125 animate-bounce' />
//                 </span>
//                 DIGITAL MARKETING – FULL COURSE SYLLABUS
//               </summary>

//               <div className="mt-6 sm:mt-10 text-gray-700 space-y-6 sm:space-y-8">

//                 {/* Module 1 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-purple-100">
//                   <h2 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-purple-600">
//                     MODULE 1: Introduction to Digital Marketing
//                   </h2>
//                   <ul className="list-disc ml-5 sm:ml-6 space-y-1 text-sm sm:text-base">
//                     <li>Overview of Digital Marketing</li>
//                     <li>Traditional vs Digital Marketing</li>
//                     <li>Digital Marketing Channels</li>
//                     <li>Trends & Career Opportunities</li>
//                   </ul>
//                 </div>

//                 {/* Module 2 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-purple-100">
//                   <h2 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-purple-600">
//                     MODULE 2: Search Engine Optimization (SEO)
//                   </h2>
//                   <ul className="list-disc ml-5 sm:ml-6 space-y-1 text-sm sm:text-base">
//                     <li>Introduction to SEO</li>
//                     <li>On-page & Off-page SEO</li>
//                     <li>Keyword Research</li>
//                     <li>Backlinking & Link Building</li>
//                     <li>SEO Tools & Analytics</li>
//                   </ul>
//                 </div>

//                 {/* Module 3 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-purple-100">
//                   <h2 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-purple-600">
//                     MODULE 3: Social Media Marketing (SMM)
//                   </h2>
//                   <ul className="list-disc ml-5 sm:ml-6 space-y-1 text-sm sm:text-base">
//                     <li>Social Media Platforms Overview</li>
//                     <li>Content Strategy & Planning</li>
//                     <li>Facebook, Instagram, LinkedIn Marketing</li>
//                     <li>Engagement & Analytics</li>
//                   </ul>
//                 </div>

//                 {/* Module 4 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-purple-100">
//                   <h2 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-purple-600">
//                     MODULE 4: Paid Advertising (PPC)
//                   </h2>
//                   <ul className="list-disc ml-5 sm:ml-6 space-y-1 text-sm sm:text-base">
//                     <li>Introduction to Google Ads</li>
//                     <li>Pay-Per-Click Campaigns</li>
//                     <li>Ad Targeting & Bidding</li>
//                     <li>Campaign Optimization & Analytics</li>
//                   </ul>
//                 </div>

//                 {/* Module 5 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-purple-100">
//                   <h2 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-purple-600">
//                     MODULE 5: Email Marketing
//                   </h2>
//                   <ul className="list-disc ml-5 sm:ml-6 space-y-1 text-sm sm:text-base">
//                     <li>Email Campaign Strategy</li>
//                     <li>Segmentation & Targeting</li>
//                     <li>Email Automation</li>
//                     <li>Performance Analysis</li>
//                   </ul>
//                 </div>

//                 {/* Module 6 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-purple-100">
//                   <h2 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-purple-600">
//                     MODULE 6: Content Marketing
//                   </h2>
//                   <ul className="list-disc ml-5 sm:ml-6 space-y-1 text-sm sm:text-base">
//                     <li>Content Strategy & Planning</li>
//                     <li>Blog Writing & SEO Content</li>
//                     <li>Video & Multimedia Content</li>
//                     <li>Content Promotion Techniques</li>
//                   </ul>
//                 </div>

//                 {/* Module 7 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-purple-100">
//                   <h2 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-purple-600">
//                     MODULE 7: Analytics & Reporting
//                   </h2>
//                   <ul className="list-disc ml-5 sm:ml-6 space-y-1 text-sm sm:text-base">
//                     <li>Google Analytics Basics</li>
//                     <li>Traffic & Conversion Tracking</li>
//                     <li>Performance Metrics & KPIs</li>
//                     <li>Data-driven Marketing Decisions</li>
//                   </ul>
//                 </div>

//                 {/* Projects */}
//                 <div className="p-4 sm:p-6 bg-purple-100 rounded-xl border border-purple-200">
//                   <h2 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-purple-700">
//                     🚀 MODULE 8: Projects & Campaigns
//                   </h2>
//                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm sm:text-base font-medium">
//                     <li>SEO Campaign Project</li>
//                     <li>Social Media Marketing Project</li>
//                     <li>PPC Campaign Simulation</li>
//                     <li>Email & Content Marketing Campaign</li>
//                   </ul>
//                 </div>

//                 {/* Tools */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md border border-purple-100">
//                   <h2 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-purple-600">
//                     🛠 TOOLS COVERED
//                   </h2>
//                   <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm sm:text-base font-medium">
//                     <li>Google Analytics</li>
//                     <li>Google Ads</li>
//                     <li>Facebook Ads Manager</li>
//                     <li>Mailchimp / Email Tools</li>
//                     <li>Canva & Multimedia Tools</li>
//                     <li>SEO Tools (Ahrefs, SEMrush)</li>
//                   </ul>
//                 </div>

//               </div>
//             </details>

//             {/*DIPLOMA IN INTERIOR DESIGN COMPLETED */}
//             <details className="mt-4 group max-w-6xl mx-auto p-6 sm:p-8 rounded-2xl shadow-xl border transition-all duration-300">

//               <summary className="cursor-pointer font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-center flex items-center justify-center gap-3">
//                 <span className="text-amber-600">
//                   <GiDiploma className='text-3xl sm:text-4xl text-yellow-300 transition-transform duration-300 hover:scale-125 animate-bounce' />
//                 </span>
//                 DIPLOMA IN INTERIOR DESIGN
//               </summary>

//               <div className="mt-6 sm:mt-10 text-gray-700 space-y-6 sm:space-y-8">

//                 {/* Module 1 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-amber-100">
//                   <h2 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-amber-600">
//                     MODULE 1: Introduction to Interior Design
//                   </h2>
//                   <ul className="list-disc ml-5 sm:ml-6 space-y-1 text-sm sm:text-base">
//                     <li>What is Interior Design?</li>
//                     <li>History & Evolution of Interior Design</li>
//                     <li>Role of an Interior Designer</li>
//                     <li>Design Principles & Elements</li>
//                   </ul>
//                 </div>

//                 {/* Module 2 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-amber-100">
//                   <h2 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-amber-600">
//                     MODULE 2: Space Planning & Layouts
//                   </h2>
//                   <ul className="list-disc ml-5 sm:ml-6 space-y-1 text-sm sm:text-base">
//                     <li>Understanding Space & Function</li>
//                     <li>Residential & Commercial Layouts</li>
//                     <li>Furniture Planning & Zoning</li>
//                     <li>Circulation & Flow</li>
//                   </ul>
//                 </div>

//                 {/* Module 3 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-amber-100">
//                   <h2 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-amber-600">
//                     MODULE 3: Color Theory & Materials
//                   </h2>
//                   <ul className="list-disc ml-5 sm:ml-6 space-y-1 text-sm sm:text-base">
//                     <li>Color Psychology</li>
//                     <li>Color Schemes & Combinations</li>
//                     <li>Materials & Finishes (Wood, Fabric, Tiles)</li>
//                     <li>Surface Textures & Patterns</li>
//                   </ul>
//                 </div>

//                 {/* Module 4 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-amber-100">
//                   <h2 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-amber-600">
//                     MODULE 4: Furniture & Lighting Design
//                   </h2>
//                   <ul className="list-disc ml-5 sm:ml-6 space-y-1 text-sm sm:text-base">
//                     <li>Furniture Styles & Selection</li>
//                     <li>Custom Furniture Design Basics</li>
//                     <li>Lighting Types & Techniques</li>
//                     <li>Accent & Ambient Lighting</li>
//                   </ul>
//                 </div>

//                 {/* Module 5 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-amber-100">
//                   <h2 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-amber-600">
//                     MODULE 5: CAD & Interior Design Software
//                   </h2>
//                   <ul className="list-disc ml-5 sm:ml-6 space-y-1 text-sm sm:text-base">
//                     <li>AutoCAD Basics</li>
//                     <li>SketchUp & 3D Modeling</li>
//                     <li>Floor Plan Drafting</li>
//                     <li>Rendering & Visualization</li>
//                   </ul>
//                 </div>

//                 {/* Module 6 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-amber-100">
//                   <h2 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-amber-600">
//                     MODULE 6: Textiles & Furnishing
//                   </h2>
//                   <ul className="list-disc ml-5 sm:ml-6 space-y-1 text-sm sm:text-base">
//                     <li>Fabric Selection & Drapery</li>
//                     <li>Upholstery & Soft Furnishings</li>
//                     <li>Rugs & Carpets</li>
//                     <li>Curtains & Blinds</li>
//                   </ul>
//                 </div>

//                 {/* Module 7 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-amber-100">
//                   <h2 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-amber-600">
//                     MODULE 7: Interior Design Styles
//                   </h2>
//                   <ul className="list-disc ml-5 sm:ml-6 space-y-1 text-sm sm:text-base">
//                     <li>Modern & Contemporary</li>
//                     <li>Minimalist & Scandinavian</li>
//                     <li>Traditional & Classical</li>
//                     <li>Eclectic & Bohemian</li>
//                   </ul>
//                 </div>

//                 {/* Projects */}
//                 <div className="p-4 sm:p-6 bg-amber-100 rounded-xl border border-amber-200">
//                   <h2 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-amber-700">
//                     ✨ MODULE 8: Project & Portfolio
//                   </h2>
//                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm sm:text-base font-medium">
//                     <li>Residential Project Design</li>
//                     <li>Commercial Project Design</li>
//                     <li>3D Rendering & Mockups</li>
//                     <li>Portfolio Building & Presentation</li>
//                   </ul>
//                 </div>

//                 {/* Tools */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md border border-amber-100">
//                   <h2 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-amber-600">
//                     🛠 TOOLS COVERED
//                   </h2>
//                   <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm sm:text-base font-medium">
//                     <li>AutoCAD</li>
//                     <li>SketchUp</li>
//                     <li>3ds Max</li>
//                     <li>Adobe Photoshop</li>
//                     <li>Microsoft PowerPoint</li>
//                     <li>Rendering Tools</li>
//                   </ul>
//                 </div>

//               </div>
//             </details>

//             {/* ADVANCED FINANCE & ACCOUNTING COMPLETED */}
//             <details className="mt-4 group max-w-6xl mx-auto p-6 sm:p-8 rounded-2xl shadow-xl border transition-all duration-300">

//               <summary className="cursor-pointer font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-center flex items-center justify-center gap-3">
//                 <span className="text-blue-600">
//                   <GiTakeMyMoney className='text-3xl sm:text-4xl text-green-400 transition-transform duration-300 hover:scale-125 animate-bounce' />
//                 </span>
//                 ADVANCED FINANCE & ACCOUNTING
//               </summary>

//               <div className="mt-6 sm:mt-10 text-gray-700 space-y-6 sm:space-y-8">

//                 {/* Module 1 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-blue-100">
//                   <h2 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-blue-600">
//                     MODULE 1: Introduction to Advanced Accounting
//                   </h2>
//                   <ul className="list-disc ml-5 sm:ml-6 space-y-1 text-sm sm:text-base">
//                     <li>Overview of Financial Accounting</li>
//                     <li>Accounting Standards & Regulations</li>
//                     <li>Role of an Accountant</li>
//                     <li>Financial Statements & Reports</li>
//                   </ul>
//                 </div>

//                 {/* Module 2 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-blue-100">
//                   <h2 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-blue-600">
//                     MODULE 2: Corporate Financial Reporting
//                   </h2>
//                   <ul className="list-disc ml-5 sm:ml-6 space-y-1 text-sm sm:text-base">
//                     <li>Preparation of Balance Sheet & Income Statement</li>
//                     <li>Cash Flow Statements</li>
//                     <li>Share Capital & Reserves Accounting</li>
//                     <li>Corporate Accounting Standards (IFRS / GAAP)</li>
//                   </ul>
//                 </div>

//                 {/* Module 3 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-blue-100">
//                   <h2 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-blue-600">
//                     MODULE 3: Financial Analysis & Ratio
//                   </h2>
//                   <ul className="list-disc ml-5 sm:ml-6 space-y-1 text-sm sm:text-base">
//                     <li>Financial Ratio Analysis</li>
//                     <li>Liquidity & Solvency Analysis</li>
//                     <li>Profitability & Efficiency Ratios</li>
//                     <li>Trend & Comparative Analysis</li>
//                   </ul>
//                 </div>

//                 {/* Module 4 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-blue-100">
//                   <h2 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-blue-600">
//                     MODULE 4: Cost & Management Accounting
//                   </h2>
//                   <ul className="list-disc ml-5 sm:ml-6 space-y-1 text-sm sm:text-base">
//                     <li>Cost Classification & Allocation</li>
//                     <li>Budgeting & Variance Analysis</li>
//                     <li>Break-even Analysis</li>
//                     <li>Cost Control & Decision Making</li>
//                   </ul>
//                 </div>

//                 {/* Module 5 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-blue-100">
//                   <h2 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-blue-600">
//                     MODULE 5: Advanced Taxation & Compliance
//                   </h2>
//                   <ul className="list-disc ml-5 sm:ml-6 space-y-1 text-sm sm:text-base">
//                     <li>Corporate Taxation</li>
//                     <li>GST & Indirect Taxes</li>
//                     <li>Tax Planning & Compliance</li>
//                     <li>Audit & Regulatory Requirements</li>
//                   </ul>
//                 </div>

//                 {/* Module 6 */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-blue-100">
//                   <h2 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-blue-600">
//                     MODULE 6: Investment & Financial Management
//                   </h2>
//                   <ul className="list-disc ml-5 sm:ml-6 space-y-1 text-sm sm:text-base">
//                     <li>Capital Budgeting</li>
//                     <li>Working Capital Management</li>
//                     <li>Investment Appraisal Techniques</li>
//                     <li>Risk Management & Financial Planning</li>
//                   </ul>
//                 </div>

//                 {/* Projects */}
//                 <div className="p-4 sm:p-6 bg-blue-100 rounded-xl border border-blue-200">
//                   <h2 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-blue-700">
//                     📊 MODULE 7: Projects & Case Studies
//                   </h2>
//                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm sm:text-base font-medium">
//                     <li>Financial Statement Analysis Project</li>
//                     <li>Cost Management Case Study</li>
//                     <li>Tax Planning & Compliance Case Study</li>
//                     <li>Corporate Financial Simulation Project</li>
//                   </ul>
//                 </div>

//                 {/* Tools */}
//                 <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md border border-blue-100">
//                   <h2 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-blue-600">
//                     🛠 TOOLS COVERED
//                   </h2>
//                   <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm sm:text-base font-medium">
//                     <li>MS Excel (Advanced)</li>
//                     <li>Tally ERP</li>
//                     <li>QuickBooks</li>
//                     <li>ERP Accounting Software Basics</li>
//                   </ul>
//                 </div>

//               </div>
//             </details>

//             {/* DIPLOMA IN HUMAN RESOURCE MANAGEMENT COMPLETED */}
//             <details className="mt-4 group max-w-6xl mx-auto p-6 sm:p-8 rounded-2xl shadow-xl border transition-all duration-300">

//               <summary className="cursor-pointer font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-center flex items-center justify-center gap-3">
//                 <span className='flex gap-2'>
//                   <GrResources className='text-3xl sm:text-4xl text-pink-500 transition-transform duration-300 hover:scale-125 animate-bounce' />
//                   DIPLOMA IN HUMAN RESOURCE MANAGEMENT
//                 </span>
//               </summary>

//               <div className="mt-10 text-gray-700 space-y-8">

//                 {/* Skills Covered */}
//                 <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-100">
//                   <h2 className="font-semibold text-xl mb-3 text-emerald-700">Skills Covered</h2>
//                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm font-medium">
//                     <li>Recruitment & Talent Acquisition</li>
//                     <li>Employee Relations</li>
//                     <li>Performance Management</li>
//                     <li>HR Laws & Compliance</li>
//                   </ul>
//                 </div>

//                 {/* Module 1 */}
//                 <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-emerald-100">
//                   <h2 className="font-semibold text-xl mb-3 text-emerald-600">INTRODUCTION TO HUMAN RESOURCE MANAGEMENT</h2>
//                   <ul className="list-disc ml-6 space-y-1 text-sm">
//                     <li>Overview of HR Functions</li>
//                     <li>Role of Technology in Modern HR</li>
//                     <li>Legal and Ethical Considerations</li>
//                   </ul>
//                 </div>

//                 {/* Module 2 */}
//                 <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-emerald-100">
//                   <h2 className="font-semibold text-xl mb-3 text-emerald-600">HR INFORMATION SYSTEMS (HRIS)</h2>
//                   <ul className="list-disc ml-6 space-y-1 text-sm">
//                     <li>HRIS Fundamentals & Key Features</li>
//                     <li>SAP SuccessFactors & Workday Basics</li>
//                     <li>Employee Data Management</li>
//                     <li>Creating & Managing Employee Records</li>
//                   </ul>
//                 </div>

//                 {/* Module 3 */}
//                 <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-emerald-100">
//                   <h2 className="font-semibold text-xl mb-3 text-emerald-600">RECRUITMENT & ATS</h2>
//                   <ul className="list-disc ml-6 space-y-1 text-sm">
//                     <li>Recruitment & Selection Process</li>
//                     <li>LinkedIn Recruiter & Zoho Recruit</li>
//                     <li>Screening & Interview Scheduling</li>
//                     <li>Recruitment Analytics</li>
//                   </ul>
//                 </div>

//                 {/* Module 4 */}
//                 <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-emerald-100">
//                   <h2 className="font-semibold text-xl mb-3 text-emerald-600">PERFORMANCE, PAYROLL & ENGAGEMENT</h2>
//                   <ul className="list-disc ml-6 space-y-1 text-sm">
//                     <li>KPIs & OKRs (BambooHR, Lattice)</li>
//                     <li>Payroll Processing (ADP, QuickBooks Payroll)</li>
//                     <li>Tax Compliance & Reporting</li>
//                     <li>Employee Surveys (SurveyMonkey, Qualtrics)</li>
//                   </ul>
//                 </div>

//                 {/* Module 5 */}
//                 <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-emerald-100">
//                   <h2 className="font-semibold text-xl mb-3 text-emerald-600">HR ANALYTICS & L&D</h2>
//                   <ul className="list-disc ml-6 space-y-1 text-sm">
//                     <li>HR Metrics & Workforce Analysis</li>
//                     <li>Excel & Power BI Basics</li>
//                     <li>LMS Platforms (Moodle, TalentLMS)</li>
//                     <li>Training ROI Measurement</li>
//                   </ul>
//                 </div>

//                 {/* Module 6 */}
//                 <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-emerald-100">
//                   <h2 className="font-semibold text-xl mb-3 text-emerald-600">STRATEGIC HRM & CLOUD TOOLS</h2>
//                   <ul className="list-disc ml-6 space-y-1 text-sm">
//                     <li>Workforce & Succession Planning</li>
//                     <li>Aligning HR with Business Goals</li>
//                     <li>MS Teams, Slack, Google Workspace</li>
//                     <li>Asana & Trello for HR Projects</li>
//                   </ul>
//                 </div>

//                 {/* Internship */}
//                 <div className="p-6 bg-emerald-100 rounded-xl border border-emerald-200">
//                   <h2 className="font-semibold text-xl mb-3 text-emerald-800">💼 Internship / Live Projects</h2>
//                   <ul className="list-disc ml-6 space-y-1 text-sm">
//                     <li>Hands-on HR Hiring Experience</li>
//                     <li>Payroll Processing Practice</li>
//                     <li>Software & Communication Skill Development</li>
//                   </ul>
//                 </div>

//                 {/* Capstone */}
//                 <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-emerald-100">
//                   <h2 className="font-semibold text-xl mb-3 text-emerald-600">🎓 Capstone Project</h2>
//                   <ul className="list-disc ml-6 space-y-1 text-sm">
//                     <li>Develop Strategic HR Plan</li>
//                     <li>Implement Recruitment, Payroll & Performance</li>
//                     <li>Multi-Software Integration</li>
//                     <li>Final Presentation & Reporting</li>
//                   </ul>
//                 </div>

//                 {/* Soft Skills */}
//                 <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-emerald-100">
//                   <h2 className="font-semibold text-xl mb-3 text-emerald-600">💡 Soft Skills Training</h2>
//                   <ul className="list-disc ml-6 space-y-1 text-sm">
//                     <li>Mock Interviews</li>
//                     <li>Personality Development Sessions</li>
//                     <li>Resume Preparation</li>
//                   </ul>
//                 </div>

//                 {/* Job Roles */}
//                 <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-emerald-100">
//                   <h2 className="font-semibold text-xl mb-3 text-emerald-600">🚀 Top Job Roles</h2>
//                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm font-medium">
//                     <li>HR Specialist</li>
//                     <li>Talent Acquisition Specialist</li>
//                     <li>Payroll Administrator</li>
//                     <li>HR Data Analyst</li>
//                     <li>Employee Engagement Specialist</li>
//                   </ul>
//                 </div>

//                 {/* Certifications */}
//                 <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-100">
//                   <h2 className="font-semibold text-xl mb-3 text-emerald-700">🏆 Certifications</h2>
//                   <ul className="list-disc ml-6 space-y-1 text-sm font-medium">
//                     <li>SAP</li>
//                     <li>NSDC</li>
//                     <li>Microsoft Office Specialist</li>
//                   </ul>
//                 </div>

//               </div>
//             </details>

//           </div>

//         </div>
//       </div>


//       {/* Background Blur Effects */}
//       <section className="relative py-24 bg-linear-to-r from-blue-700 via-indigo-700 to-purple-700 px-6 overflow-hidden">
//         <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
//         <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

//         <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">

//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
//               Ready To Upgrade Your Career?
//             </h2>

//             <p className="mt-6 text-lg text-white/90 leading-relaxed">
//               Join our professional programs and gain practical skills that industries demand.
//             </p>

//             <p className="mt-4 text-sm text-white/80 tracking-wide">
//               Certified Programs • Industry Mentors • Job Assistance
//             </p>

//             <motion.div
//               whileHover={{ scale: 1.08 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Link
//                 to="/Apply"
//                 className="inline-block mt-8 px-8 py-3 rounded-full text-lg font-semibold bg-white text-blue-700 shadow-xl hover:shadow-2xl transition-all duration-300"
//               >
//                 Enroll Now
//               </Link>
//             </motion.div>
//           </motion.div>

//           {/* Right Image */}
//           <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <motion.img
//               src="/Study.jpeg"
//               alt="Students studying"
//               className="rounded-3xl shadow-2xl w-full object-cover"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.4 }}
//             />

//             {/* Floating Badge */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 0.6 }}
//               className="absolute -bottom-6 -left-6 bg-white text-blue-700 px-6 py-3 rounded-2xl shadow-xl font-semibold"
//             >
//               100% Practical Training
//             </motion.div>
//           </motion.div>

//         </div>
//       </section>

//       <div className="bg-blue-950 flex justify-center items-center mt-4 h-10 md:h-12 px-2 md:px-0">
//         <p className="text-white text-xs sm:text-sm md:text-sm text-center">
//           © 2026 IIOFT | All Rights Reserved | Designed by Web Developer
//         </p>
//       </div>

//     </div>
//   )
// }











// ==========================================================================================
// import React, { useState } from "react";

// const courses = [
//   {
//     name: "WEB DEVELOPMENT",
//     content: "Complete Web Development syllabus including HTML, CSS, JavaScript, React, Node.js, and more."
//   },
//   {
//     name: "DATA SCIENCE",
//     content: "Data Science course covering Python, Machine Learning, Statistics, Data Visualization, and more."
//   },
//   {
//     name: "DATA ANALYTICS",
//     content: "Data Analytics syllabus covering Excel, SQL, Power BI, Tableau, and Business Analytics."
//   },
//   {
//     name: "ETHICAL HACKING",
//     content: "Ethical Hacking course including penetration testing, network security, and cybersecurity fundamentals."
//   },
//   {
//     name: "DIGITAL MARKETING",
//     content: "Digital Marketing syllabus covering SEO, SEM, Social Media Marketing, Content Strategy, and Ads."
//   },
//   {
//     name: "DIPLOMA IN INTERIOR DESIGN",
//     content: "Interior Design diploma covering concepts, design principles, tools, and project work."
//   },
//   {
//     name: "ADVANCED FINANCE & ACCOUNTING",
//     content: "Advanced Finance & Accounting including Financial Analysis, Reporting, and Corporate Finance."
//   },
//   {
//     name: "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
//     content: "HR Management course including Recruitment, Training, Payroll, and HR Strategies."
//   },
// ];

// const App = () => {
//   const [activeCourse, setActiveCourse] = useState(courses[0]);

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">

//       {/* Sidebar */}
//       <div className="bg-gray-800 text-white w-full md:w-64 flex md:flex-col overflow-x-auto md:overflow-x-hidden shadow-lg">
//         {courses.map((course, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveCourse(course)}
//             className={`p-4 w-full md:w-auto text-left hover:bg-gray-700 focus:outline-none transition ${activeCourse.name === course.name ? "bg-gray-700 font-semibold" : ""
//               }`}
//           >
//             {course.name}
//           </button>
//         ))}
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6 flex flex-col justify-between">
//         <div>
//           <h1 className="text-3xl md:text-4xl font-bold mb-4">{activeCourse.name}</h1>
//           <p className="text-gray-700 text-lg md:text-xl">{activeCourse.content}</p>
//         </div>

//         {/* PDF Download Button */}
//         <div className="mt-8">
//           <a
//             href="YOUR_PDF_LINK_HERE.pdf" // Replace with your PDF link
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition transform hover:-translate-y-1"
//           >
//             Download PDF
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;











//  =======================================================================================
// import React, { useState } from "react";
// import { HiMenu, HiX } from "react-icons/hi"; // Hamburger icons

// const courses = [
//   { name: "WEB DEVELOPMENT", pdf: "web.pdf" },
//   { name: "DATA SCIENCE", pdf: "datascience.pdf" },
//   { name: "DATA ANALYTICS", pdf: "dataanalytics.pdf" },
//   { name: "ETHICAL HACKING", pdf: "ethicalhacking.pdf" },
//   { name: "DIGITAL MARKETING", pdf: "digitalmarketing.pdf" },
//   { name: "DIPLOMA IN INTERIOR DESIGN", pdf: "interior.pdf" },
//   { name: "ADVANCED FINANCE & ACCOUNTING", pdf: "finance.pdf" },
//   { name: "DIPLOMA IN HUMAN RESOURCE MANAGEMENT", pdf: "hr.pdf" },
// ];

// const App = () => {
//   const [activeCourse, setActiveCourse] = useState(courses[0]);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="flex min-h-screen bg-gray-50">

//       {/* Mobile Hamburger */}
//       <div className="md:hidden fixed top-4 left-4 z-50">
//         <button
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//           className="p-2 bg-gray-800 text-white rounded shadow"
//         >
//           {sidebarOpen ? <HiX size={24} /> : <HiMenu size={24} />}
//         </button>
//       </div>

//       {/* Sidebar */}
//       <div className={`fixed md:relative top-0 left-0 z-40 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 
//           ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
//         <div className="flex flex-col mt-20 md:mt-0">
//           {courses.map((course, index) => (
//             <button
//               key={index}
//               onClick={() => {
//                 setActiveCourse(course);
//                 setSidebarOpen(false); // auto close on mobile
//               }}
//               className={`p-4 text-left hover:bg-gray-700 transition ${activeCourse.name === course.name ? "bg-gray-700 font-semibold" : ""
//                 }`}
//             >
//               {course.name}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6 md:ml-64 flex flex-col justify-between">
//         <div>
//           <h1 className="text-3xl md:text-4xl font-bold mb-4">{activeCourse.name}</h1>
//           <p className="text-gray-700 text-lg md:text-xl">
//             {/* This is content for <strong>{activeCourse.name}</strong>. Replace with your course details. */}
//           </p>
//         </div>

//         {/* PDF Download */}
//         <div className="mt-8">
//           <a
//             href={activeCourse.pdf} // Dynamic PDF per course
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition transform hover:-translate-y-1"
//           >
//             Download PDF
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;








// =================================================================================
// import React, { useState } from "react";
// import { HiMenu, HiX } from "react-icons/hi";

// const courses = [
//   {
//     name: "WEB DEVELOPMENT",
//     content:
//       "Complete Web Development syllabus including HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and Project work.",
//   },
//   {
//     name: "DATA SCIENCE",
//     content:
//       "Data Science course covering Python, Machine Learning, Statistics, Data Visualization, and more.",
//   },
//   {
//     name: "DATA ANALYTICS",
//     content:
//       "Data Analytics syllabus covering Excel, SQL, Power BI, Tableau, and Business Analytics.",
//   },
//   {
//     name: "ETHICAL HACKING",
//     content:
//       "Ethical Hacking course including penetration testing, network security, and cybersecurity fundamentals.",
//   },
//   {
//     name: "DIGITAL MARKETING",
//     content:
//       "Digital Marketing syllabus covering SEO, SEM, Social Media Marketing, Content Strategy, and Ads.",
//   },
//   {
//     name: "DIPLOMA IN INTERIOR DESIGN",
//     content:
//       "Interior Design diploma covering concepts, design principles, tools, and project work.",
//   },
//   {
//     name: "ADVANCED FINANCE & ACCOUNTING",
//     content:
//       "Advanced Finance & Accounting including Financial Analysis, Reporting, and Corporate Finance.",
//   },
//   {
//     name: "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
//     content:
//       "HR Management course including Recruitment, Training, Payroll, and HR Strategies.",
//   },
// ];

// const App = () => {
//   const [activeCourse, setActiveCourse] = useState(courses[0]); // default video
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="flex min-h-screen bg-gray-50">

//       {/* Mobile Hamburger */}
//       <div className="md:hidden fixed top-4 left-4 z-50">
//         <button
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//           className="p-2 bg-gray-800 text-white rounded shadow"
//         >
//           {sidebarOpen ? <HiX size={24} /> : <HiMenu size={24} />}
//         </button>
//       </div>

//       {/* Sidebar */}
//       <div
//         className={`fixed md:relative top-0 left-0 z-40 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 
//           ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
//       >
//         <div className="flex flex-col mt-20 md:mt-0">
//           {courses.map((course, index) => (
//             <button
//               key={index}
//               onClick={() => {
//                 setActiveCourse(course);
//                 setSidebarOpen(false); // close on mobile
//               }}
//               className={`p-4 text-left hover:bg-gray-700 transition ${activeCourse.name === course.name
//                 ? "bg-gray-700 font-semibold"
//                 : ""
//                 }`}
//             >
//               {course.name}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6 md:ml-64 flex flex-col justify-start">
//         <div className="bg-white p-6 rounded shadow flex-1">
//           <h1 className="text-3xl md:text-4xl font-bold mb-4">
//             {activeCourse.name}
//           </h1>
//           <p className="text-gray-700 text-lg md:text-xl mb-4">
//             {activeCourse.content}
//           </p>

//           {/* Video */}
//           <video
//             src={activeCourse.video}
//             className="w-full md:w-96 md:h-80 rounded mb-4 shadow mx-auto"
//             autoPlay
//             loop
//             muted
//             playsInline
//             controls
//           />
//         </div>
//       </div>
//     </div>


//   );
// };

// export default App;


// import React, { useState } from "react";
// import { HiMenu, HiX } from "react-icons/hi";

// // Dummy course data
// const courses = [
//   {
//     id: 1,
//     name: "WEB DEVELOPMENT",
//     image: "WD.png",

//   },
//   {
//     id: 2,
//     name: "DATA SCIENCE",
//   },
//   {
//     id: 3,
//     name: "DATA ANALYTICS",
//   },
//   {
//     id: 4,
//     name: "ETHICAL HACKING",
//   },
//   {
//     id: 5,
//     name: "DIGITAL MARKETING",
//   },
//   {
//     id: 6,
//     name: "DIPLOMA IN INTERIOR DESIGN",
//   },
//   {
//     id: 7,
//     name: "ADVANCED FINANCE & ACCOUNTING",
//   },
//   {
//     id: 8,
//     name: "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
//   },
// ];

// const App = () => {
//   const [showLanding, setShowLanding] = useState(true); // Splash screen
//   const [activeCourse, setActiveCourse] = useState(courses[0]);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="relative min-h-screen">
//       {/* 1️⃣ Landing / Splash Screen */}
//       {showLanding && (
//         <div className="fixed inset-0 flex items-center justify-center">
//           {/* Video Background */}
//           <video
//             src="IF.mp4"
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="absolute inset-0 w-full h-full object-cover"
//           />

//           {/* Explore Course Button */}
//           <button
//             onClick={() => setShowLanding(false)}
//             className="z-10 px-8 py-4 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition transform hover:-translate-y-1"
//           >
//             Explore Course
//           </button>
//         </div>
//       )}

//       {/* 2️⃣ Main Course Interface */}
//       {!showLanding && (
//         <div className="flex min-h-screen bg-gray-50">
//           {/* Mobile Hamburger */}
//           <div className="md:hidden fixed top-4 left-4 z-50">
//             <button
//               onClick={() => setSidebarOpen(!sidebarOpen)}
//               className="p-2 bg-gray-800 text-white rounded shadow"
//             >
//               {sidebarOpen ? <HiX size={24} /> : <HiMenu size={24} />}
//             </button>
//           </div>

//           {/* Sidebar */}
//           <div
//             className={`fixed md:relative top-0 left-0 z-40 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 
//               ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
//           >
//             <div className="flex flex-col mt-20 md:mt-0">
//               {courses.map((course) => (
//                 <button
//                   key={course.id}
//                   onClick={() => {
//                     setActiveCourse(course);
//                     setSidebarOpen(false);
//                   }}
//                   className={`p-4 text-left hover:bg-gray-700 transition ${activeCourse.id === course.id
//                     ? "bg-gray-700 font-semibold"
//                     : ""
//                     }`}
//                 >
//                   {course.name}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Course Content */}
//           <div className="flex-1 p-6 md:ml-64 flex flex-col justify-start">
//             <div className="bg-white p-6 rounded shadow flex-1">
//               <h1 className="text-3xl md:text-4xl font-bold mb-4">
//                 {activeCourse.name}
//               </h1>
//               <p className="text-gray-700 text-lg md:text-xl">
//                 {activeCourse.content}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;


import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

// Dummy course data with images
const courses = [
  {
    id: 1,
    name: "WEB DEVELOPMENT",
    image: "WD.png",
  },
  {
    id: 2,
    name: "DATA SCIENCE",
    image: "DS.png",
  },
  {
    id: 3,
    name: "DATA ANALYTICS",
    image: "DA.png",
  },
  {
    id: 4,
    name: "ETHICAL HACKING",
    image: "ethicalhacking.png",
  },
  {
    id: 5,
    name: "DIGITAL MARKETING",
    image: "digitalmarketing.png",
  },
  {
    id: 6,
    name: "DIPLOMA IN INTERIOR DESIGN",
    image: "interior.png",
  },
  {
    id: 7,
    name: "ADVANCED FINANCE & ACCOUNTING",
    image: "finance.png",
  },
  {
    id: 8,
    name: "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
    image: "hr.png",
  },
];

const App = () => {
  const [showLanding, setShowLanding] = useState(true); // Splash screen
  const [activeCourse, setActiveCourse] = useState(courses[0]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-500">
      {/*  Landing  */}
      {showLanding && (
        <div className="fixed inset-0 flex items-center justify-center">
          {/* Video Background */}
          <video
            src="IF.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Explore Course Button */}
          <button
            onClick={() => setShowLanding(false)}
            className="z-10 px-8 py-4 text-white rounded shadow hover:bg-blue-700 transition transform hover:-translate-y-1"
          >
            Explore Course
          </button>
        </div>
      )}

      {/* Main Course Interface */}
      {!showLanding && (
        <div className="flex min-h-screen">
          {/* Mobile Hamburger */}
          <div className="md:hidden fixed top-4 left-4 z-50">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 bg-gray-800 text-white rounded shadow"
            >
              {sidebarOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>

          {/* Sidebar */}
          <div
            className={`fixed md:relative top-0 left-0 z-40 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 
              ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
          >
            <div className="flex flex-col mt-20 md:mt-0">
              {courses.map((course) => (
                <button
                  key={course.id}
                  onClick={() => {
                    setActiveCourse(course);
                    setSidebarOpen(false);
                  }}
                  className={`p-4 text-left hover:bg-gray-700 transition ${activeCourse.id === course.id
                    ? "bg-gray-700 font-semibold"
                    : ""
                    }`}
                >
                  {course.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 p-6 md:ml-64 flex flex-col justify-start">
            <div className="bg-white p-6 rounded shadow flex-1">

              {/* Full-width / full-div course image */}
              <div className="w-full">
                <img
                  src={activeCourse.image}
                  alt={activeCourse.name}
                  className="w-full h-auto rounded shadow"
                />
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;