// Mock data for the portfolio website
export const mockData = {
  personal: {
    name: "Tarun Rathod",
    title: "Software Developer",
    bio: "Passionate software developer with having experience building scalable web applications. I love turning ideas into reality through clean, efficient code and creating user experiences that make a difference.",
    location: "Pune, Maharashtra, India",
    email: "tarunrathod00805@gmail.com",
    linkedin: "https://www.linkedin.com/in/tarunnnrathoddd/",
    github: "https://github.com/tarunnnrathoddd",
    profileImage: "https://github.com/tarunnnrathoddd.png"
  },
  
  skills: [
    { name: "JavaScript", level: "Expert" },
    { name: "React", level: "Expert" },
    { name: "Node.js", level: "Advanced" },
    { name: "Python", level: "Advanced" },
    { name: "MongoDB", level: "Advanced" },
    { name: "FastAPI", level: "Intermediate" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "AWS", level: "Intermediate" },
    { name: "Docker", level: "Intermediate" },
    { name: "Git", level: "Expert" }
  ],
  
  projects: [
    {
      id: 1,
      title: "PCCOE-ACM-Hacktoberfest-2023",
      description: "Full-stack event website with HTML, CSS, JavaScript, GitHub API. Features include user registeration, schedule, certificaiton, and instructions.",
      technologies: ["HTML", "CSS", "JavaScript", "GitHub API"],
      liveDemo: "https://pccoe-acm-hacktoberfest-2023.vercel.app/",
      github: "https://github.com/tarunnnrathoddd",
      image: "https://res.cloudinary.com/ds8x7mqbc/image/upload/v1752482369/PCCOE-ACM-Hacktoberfest-2023_xouoxt.png"
    },
    {
      id: 2,
      title: "ANANTYA WEBSITE",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Firebase.",
      technologies: ["NextJS", "Cloudinary", "GitHub", "MongoDB"],
      liveDemo: "https://anantya24.vercel.app/",
      github: "https://github.com/tarunnnrathoddd",
      image: "https://res.cloudinary.com/ds8x7mqbc/image/upload/v1752483098/Screenshot_2025-07-14_at_2.18.45_PM_hkythu.png"
    },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      description: "Interactive weather analytics dashboard with data visualization, historical data analysis, and weather predictions. Integrates with multiple weather APIs.",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      liveDemo: "https://weather-analytics.example.com",
      github: "https://github.com/tarun-rathod/weather-dashboard",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Social Media Aggregator",
      description: "Platform that aggregates content from multiple social media platforms with sentiment analysis, trending topics, and content filtering capabilities.",
      technologies: ["Vue.js", "Python", "Django", "Redis", "Elasticsearch"],
      liveDemo: "https://social-aggregator.example.com",
      github: "https://github.com/tarun-rathod/social-aggregator",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500&h=300&fit=crop"
    },
    {
      id: 5,
      title: "AI Code Assistant",
      description: "VS Code extension that provides intelligent code suggestions, bug detection, and code optimization using machine learning algorithms.",
      technologies: ["TypeScript", "VS Code API", "TensorFlow", "Python"],
      liveDemo: "https://marketplace.visualstudio.com/items?itemName=tarun.ai-assistant",
      github: "https://github.com/tarun-rathod/ai-code-assistant",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop"
    }
  ]
};

// Mock form submission handler
export const submitContactForm = async (formData) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Store in localStorage for demo purposes
  const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
  const newSubmission = {
    id: Date.now(),
    ...formData,
    timestamp: new Date().toISOString()
  };
  submissions.push(newSubmission);
  localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
  
  return { success: true, message: 'Message sent successfully!' };
};
