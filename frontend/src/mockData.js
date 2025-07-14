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
    profileImage: "https://github.com/tarunnnrathoddd.png",
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
    { name: "Git", level: "Expert" },
  ],

  projects: [
    {
      id: 1,
      title: "PCCOE-ACM-Hacktoberfest-2023",
      description:
        "Official website for Hacktoberfest 2023 organized by PCCOE-ACM. Includes event schedule, participant registration, contribution guidelines, and automated certification system using GitHub API.",
      technologies: ["HTML", "CSS", "JavaScript", "GitHub API"],
      liveDemo: "https://pccoe-acm-hacktoberfest-2023.vercel.app/",
      github: "https://github.com/tarunnnrathoddd",
      image:
        "https://res.cloudinary.com/ds8x7mqbc/image/upload/v1752482369/PCCOE-ACM-Hacktoberfest-2023_xouoxt.png",
    },
    {
      id: 2,
      title: "ANANTYA WEBSITE",
      description:
        "Official event website for Anantya 2024, showcasing event details, schedules, team information, and dynamic media galleries. Developed using Next.js with seamless backend integration and responsive design.",
      technologies: ["NextJS", "Cloudinary", "GitHub", "MongoDB"],
      liveDemo: "https://anantya24.vercel.app/",
      github: "https://github.com/tarunnnrathoddd",
      image:
        "https://res.cloudinary.com/ds8x7mqbc/image/upload/v1752483098/Screenshot_2025-07-14_at_2.18.45_PM_hkythu.png",
    },
    // {
    //   id: 3,
    //   title: "Weather Analytics Dashboard",
    //   description: "Interactive weather analytics dashboard with data visualization, historical data analysis, and weather predictions. Integrates with multiple weather APIs.",
    //   technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    //   liveDemo: "https://weather-analytics.example.com",
    //   github: "https://github.com/tarun-rathod/weather-dashboard",
    //   image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop"
    // },
    {
      id: 3,
      title: "AI-ChatBot",
      description:
        "AI-powered chatbot capable of engaging in natural conversations, answering queries, and providing intelligent assistance. Integrated with Gemini API for advanced language understanding.",
      technologies: ["ReactJS", "CSS", "GeminiAPI"],
      liveDemo: "https://mychatbot-pi-ten.vercel.app/",
      github: "https://github.com/tarunnnrathoddd",
      image:
        "https://res.cloudinary.com/ds8x7mqbc/image/upload/v1752487213/9635909_p4zc4l.png",
    },
    {
      id: 4,
      title: "Uphaar – Smart India Hackathon",
      description:
        "AI-ML powered de-smoking and de-hazing solution developed for Smart India Hackathon. Includes an intelligent image enhancement algorithm with a responsive web app and Android application. Features robust backend, performance optimization, and thorough unit testing.",
      technologies: [
        "Python",
        "Flutter",
        "React.js",
        "Bootstrap",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      liveDemo: "https://uphaar-admin.vercel.app/home", // Add if available
      github: "https://github.com/tarunnnrathoddd", // Replace with actual repo if separate
      image:
        "https://res.cloudinary.com/ds8x7mqbc/image/upload/v1752487672/Screenshot_2025-07-14_at_3.37.45_PM_tpkdxh.png", // Replace with relevant image if different
    }
    // {
    //   id: 5,
    //   title: "AI Code Assistant",
    //   description:
    //     "VS Code extension that provides intelligent code suggestions, bug detection, and code optimization using machine learning algorithms.",
    //   technologies: ["TypeScript", "VS Code API", "TensorFlow", "Python"],
    //   liveDemo:
    //     "https://marketplace.visualstudio.com/items?itemName=tarun.ai-assistant",
    //   github: "https://github.com/tarun-rathod/ai-code-assistant",
    //   image:
    //     "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
    // },
  ],
};

// Mock form submission handler
export const submitContactForm = async (formData) => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Store in localStorage for demo purposes
  const submissions = JSON.parse(
    localStorage.getItem("contactSubmissions") || "[]"
  );
  const newSubmission = {
    id: Date.now(),
    ...formData,
    timestamp: new Date().toISOString(),
  };
  submissions.push(newSubmission);
  localStorage.setItem("contactSubmissions", JSON.stringify(submissions));

  return { success: true, message: "Message sent successfully!" };
};
