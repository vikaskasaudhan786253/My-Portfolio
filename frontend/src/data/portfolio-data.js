export const NAV_LINKS = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Journey", href: "#journey" },
    { label: "DSA", href: "#dsa" },
    { label: "Experience", href: "#experience" },
    { label: "GitHub", href: "#github" },
    { label: "Contact", href: "#contact" },
];
export const SKILL_CATEGORIES = {
    "Languages": [
        { name: "C++", level: 90 },
        { name: "Python", level: 88 },
        { name: "JavaScript", level: 72 },
        { name: "SQL", level: 75 },
    ],
    "Data Science": [
        { name: "Data Cleaning", level: 90 },
        { name: "Data Visualization", level: 85 },
        { name: "Statistics", level: 78 },
        { name: "EDA", level: 88 },
        { name: "Matplotlib / Seaborn", level: 85 },
    ],
    "Machine Learning": [
        { name: "Scikit-Learn", level: 85 },
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 88 },
        { name: "Feature Engineering", level: 80 },
        { name: "Model Evaluation", level: 82 },
    ],
    "Deep Learning": [
        { name: "TensorFlow", level: 70 },
        { name: "Keras", level: 72 },
        { name: "PyTorch", level: 50, tag: "Learning" },
        { name: "CNN / RNN", level: 65 },
        { name: "Transformers", level: 42, tag: "Learning" },
    ],
    "Web Dev": [
        { name: "React", level: 75 },
        { name: "Flask", level: 72 },
        { name: "HTML / CSS", level: 82 },
        { name: "PostgreSQL", level: 70 },
        { name: "REST APIs", level: 78 },
    ],
    "Tools": [
        { name: "Git & GitHub", level: 88 },
        { name: "Jupyter Notebook", level: 92 },
        { name: "Google Colab", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 62 },
    ],
};
export const PROJECTS = [
    {
        title: "Heart Disease Prediction",
        desc: "ML pipeline using Random Forest & XGBoost achieving 94.2% accuracy on 1,025-patient clinical dataset with SHAP explainability.",
        tech: ["Python", "XGBoost", "Scikit-Learn", "SHAP"],
        image: "photo-1559757148-5c350d0d3c56",
        accent: "#ef4444",
        github: "https://github.com/vikaskasaudhan786253/Heart-Disease-Prediction", demo: "https://heart-disease-prediction-3am7z3vwumvnzt83xwqupu.streamlit.app/", featured: true,
    },
    {
        title: "Student Performance Predictor",
        desc: "Regression model predicting final grades from demographic + behavioral features with interactive EDA dashboard.",
        tech: ["Python", "Pandas", "Seaborn", "Scikit-Learn"],
        image: "photo-1523240795612-9a054b0db644",
        accent: "#10b981",
        github: "#", demo: "#",
    },
    {
        title: "House Price Estimation",
        desc: "End-to-end ML pipeline with feature engineering, hyperparameter tuning, and Flask API deployment for real-time price estimation.",
        tech: ["Python", "XGBoost", "Flask", "Pandas"],
        image: "photo-1560518883-ce09059eeffa",
        accent: "#f59e0b",
        github: "#", demo: "#",
    },
    {
        title: "Spam Detection NLP",
        desc: "TF-IDF + Naive Bayes text classifier achieving 98.6% spam detection accuracy with real-time Flask API endpoint.",
        tech: ["Python", "NLTK", "TF-IDF", "Flask"],
        image: "photo-1563986768494-4dee2763ff3f",
        accent: "#8b5cf6",
        github: "#", demo: "#",
    },
    {
        title: "Customer Churn Prediction",
        desc: "LightGBM binary classifier for telecom churn with SHAP explanations and business-metric–optimized decision threshold.",
        tech: ["Python", "LightGBM", "SHAP", "Plotly"],
        image: "photo-1551434678-e076c223a692",
        accent: "#ec4899",
        github: "#", demo: "#",
    },
    {
        title: "Data Viz Dashboard",
        desc: "Interactive analytics dashboard with real-time filtering, drill-down charts, and automated report generation.",
        tech: ["React", "Recharts", "Python", "Plotly"],
        image: "photo-1460925895917-afdab827c52f",
        accent: "#06b6d4",
        github: "#", demo: "#",
    },
];
export const ML_JOURNEY = [
     {
    title: "DSA in C++",
    sub: "C++ · Problem Solving",
    icon: "💻",
    done: true,
    year: "2024",
  },
  {
    title: "Python",
    sub: "Programming · Fundamentals",
    icon: "🐍",
    done: true,
    year: "2024",
  },
  {
    title: "Data Science",
    sub: "Pandas · NumPy · Visualization",
    icon: "📊",
    done: true,
    year: "2024",
  },
  {
    title: "Machine Learning",
    sub: "Scikit-Learn · ML Algorithms",
    icon: "🤖",
    done: true,
    year: "2025",
  },
  {
    title: "Feature Engineering",
    sub: "Feature Selection · Advanced ML",
    icon: "⚙️",
    done: true,
    year: "2025",
  },
  {
    title: "Model Deployment",
    sub: "Flask · REST APIs",
    icon: "🚀",
    done: true,
    year: "2025",
  },
  {
  title: "Deep Learning",
  sub: "Neural Networks · PyTorch",
  icon: "🧠",
  done: false,
  active: true,
  year: "2026",
},
{
  title: "Generative AI",
  sub: "LLMs · RAG · AI Applications",
  icon: "✨",
  done: false,
  year: "2026",
},
];
export const DSA_ALGO_TAGS = ["Sorting", "Graph BFS/DFS", "Dynamic Programming", "Greedy", "Binary Search", "Backtracking", "Two Pointers", "Sliding Window", "Divide & Conquer", "Segment Tree"];
export const DSA_DS_TAGS = ["Arrays", "Linked Lists", "Trees", "Graphs", "Heaps", "Tries", "Segment Trees", "Disjoint Sets", "Stacks & Queues", "Hash Maps"];
export const DSA_BAR_DATA = [
    { name: "Easy", count: 280, color: "#10b981" },
    { name: "Medium", count: 310, color: "#f59e0b" },
    { name: "Hard", count: 60, color: "#ef4444" },
];
export const CERTS = [
    {
    title: "DSA in C++",
    org: "PW · Raghav Gerg",
    year: "2024",
    icon: "💻",
    color: "#8B5CF6",
  },
    { title: "Data Analysis with Python", org: "CampusX · Nitish Singh", year: "2025", icon: "🐍", color: "#0A0A23" },
    { title: "Data Science Professional", org: "CampusX · Nitish Singh", year: "2025", icon: "📊", color: "#1F70C1" },
    { title: "SQL for Data Science", org: "CampusX · Nitish Singh", year: "2025", icon: "🗄️", color: "#3776AB" },
    { title: "Machine Learning Specialization", org: "CampusX · Nitish Singh", year: "2025", icon: "🎓", color: "#0056D2" },
    { title: "Deep Learning Specialization", org: "CampusX · Nitish Singh", year: "2026", icon: "🧠", color: "#FF6F61" },
    { title: "TensorFlow Developer", org: "Google · Coursera", year: "2026", icon: "⚡", color: "#FF6F00" },
];
export const EXPERIENCE = [
    {
        role: "ML Research Intern",
        org: "AI Research Lab, College",
        period: "May 2024 – Aug 2024",
        type: "intern",
        desc: "Built CNN-based medical image classifier achieving 96.2% accuracy. Conducted literature review on transfer learning. Deployed model via Flask API.",
        tech: ["TensorFlow", "Keras", "Python", "OpenCV", "Flask"],
    },
    {
        role: "Open Source Contributor",
        org: "Scikit-Learn / GitHub",
        period: "Jan 2024 – Present",
        type: "open",
        desc: "3 merged PRs improving documentation and example code for model evaluation metrics. Active in community issue discussions.",
        tech: ["Python", "Scikit-Learn", "GitHub"],
    },
    {
        role: "Smart India Hackathon — Finalist",
        org: "Ministry of Education, India",
        period: "Sep 2023",
        type: "hack",
        desc: "Built AI-powered crop disease detection system using CNN + mobile camera. Reached national finals among 12,000+ teams.",
        tech: ["TensorFlow", "React Native", "Flask", "OpenCV"],
    },
    {
        role: "Data Science Teaching Assistant",
        org: "CSE Department, College",
        period: "Jan – May 2024",
        type: "academic",
        desc: "Assisted professor in lab sessions for 80+ students. Created practice exercises on Pandas, EDA, and ML model evaluation.",
        tech: ["Python", "Jupyter", "Pandas", "Matplotlib"],
    },
];
export const ACHIEVEMENTS = [
    { title: "SIH National Finalist", desc: "Top 50 among 12,000+ teams", icon: "🏆", color: "#f59e0b" },
    { title: "LeetCode 1842 Rating", desc: "Top 10% globally", icon: "💻", color: "#2563eb" },
    { title: "Kaggle Expert", desc: "Bronze medals in 3 competitions", icon: "🥉", color: "#CD7F32" },
    { title: "9.2 CGPA", desc: "Top 5% of B.Tech CSE batch", icon: "🎓", color: "#10b981" },
    { title: "GitHub Arctic Vault", desc: "Code preserved in Arctic vault", icon: "❄️", color: "#6366f1" },
    { title: "Best Project Award", desc: "College Tech Fest 2023 — ML", icon: "⭐", color: "#ec4899" },
];
export const TOP_LANGS = [
    { name: "C++", value: 38, color: "#00599C" },
    { name: "Python", value: 34, color: "#3776AB" },
    { name: "JavaScript", value: 16, color: "#F7DF1E" },
    { name: "SQL", value: 8, color: "#4479A1" },
    { name: "Other", value: 4, color: "#64748b" },
];
export const BLOGS = [
    { title: "Understanding Transformer Architecture from Scratch", cat: "Deep Learning", date: "Jun 15, 2024", readTime: "8 min", image: "photo-1677442135703-1787eea5ce01" },
    { title: "Feature Engineering Tips That Boosted My Kaggle Score 12%", cat: "Machine Learning", date: "May 22, 2024", readTime: "6 min", image: "photo-1551288049-bebda4e38f71" },
    { title: "Solving DP Problems in C++: My Complete Framework", cat: "DSA", date: "Apr 10, 2024", readTime: "10 min", image: "photo-1516116216624-53e697fedbea" },
    { title: "Building a Real-Time Data Pipeline with Python", cat: "Data Science", date: "Mar 5, 2024", readTime: "7 min", image: "photo-1460925895917-afdab827c52f" },
];
export const TESTIMONIALS = [
    { name: "Dr. Priya Sharma", role: "Asst. Professor, CSE Dept.", text: "One of the most dedicated and analytically sharp students I have had. Their approach to ML problems is methodical, and code quality is exceptional for an undergrad.", initials: "PS", color: "#2563eb" },
    { name: "Rahul Verma", role: "Senior ML Engineer, Google", text: "Mentored this student during a hackathon. Impressive depth in feature engineering and model evaluation. Their C++ background gives them a real edge on performance.", initials: "RV", color: "#8b5cf6" },
    { name: "Ankit Patel", role: "Teammate, Smart India Hackathon", text: "Outstanding teammate. Excellent at decomposing complex ML pipelines. Led our model optimization phase and brought us to national finals.", initials: "AP", color: "#10b981" },
];
// Contribution grid mock data
const generateContribs = () => Array.from({ length: 52 }, () => Array.from({ length: 7 }, () => Math.floor(Math.random() * 5)));
export const CONTRIBS = generateContribs();
export const CONTRIB_COLORS = ["#1e293b", "#1e4033", "#166534", "#15803d", "#22c55e"];
export const CONTRIB_COLORS_LIGHT = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];
export const CODE_LINES = [
    { code: "import numpy as np", color: "#c084fc" },
    { code: "import pandas as pd", color: "#c084fc" },
    { code: "from sklearn.ensemble import RandomForestClassifier", color: "#c084fc" },
    { code: "from sklearn.metrics import accuracy_score", color: "#c084fc" },
    { code: "", color: "" },
    { code: "# Load dataset", color: "#64748b" },
    { code: "df = pd.read_csv('heart_disease.csv')", color: "#38bdf8" },
    { code: "X = df.drop('target', axis=1)", color: "#38bdf8" },
    { code: "y = df['target']", color: "#38bdf8" },
    { code: "", color: "" },
    { code: "# Train model", color: "#64748b" },
    { code: "model = RandomForestClassifier(n_estimators=100)", color: "#86efac" },
    { code: "model.fit(X_train, y_train)", color: "#86efac" },
    { code: "acc = accuracy_score(y_test, model.predict(X_test))", color: "#86efac" },
    { code: "print(f'Accuracy: {acc:.2%}')  # → 94.2%", color: "#fb923c" },
];
// ─── HOOKS ─────────────────────────────────────────────────────────────────
