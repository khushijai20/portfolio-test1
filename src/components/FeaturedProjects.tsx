import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Sparkles, 
  Play, 
  CheckCircle, 
  Send, 
  RotateCcw,
  Camera,
  MessageSquare,
  CloudSun,
  Gamepad2,
  Flame,
  Search,
  Plus
} from 'lucide-react';
import { projectsData } from '../data';

export default function FeaturedProjects() {
  const [activeTab, setActiveTab] = useState<string>("snap-calorie-ai");
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);

  // 1. Snap Calorie AI Simulator States
  const [calorieSelectedImage, setCalorieSelectedImage] = useState<string>("healthy_salad");
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanResult, setScanResult] = useState<any>({
    foodName: "Quinoa Salad",
    weight: "250g",
    calories: "320 kcal",
    accuracy: "98.7%",
    macros: { protein: "12g", carbs: "42g", fats: "8g" }
  });

  const handleFoodSelect = (foodId: string) => {
    setIsScanning(true);
    let name = "Quinoa Salad";
    let weight = "250g";
    let cal = "320 kcal";
    let acc = "98.7%";
    let macros = { protein: "12g", carbs: "42g", fats: "8g" };

    if (foodId === "avocado_toast") {
      name = "Avocado Toast";
      weight = "180g";
      cal = "280 kcal";
      acc = "96.4%";
      macros = { protein: "8g", carbs: "32g", fats: "14g" };
    } else if (foodId === "pizza_slice") {
      name = "Pepperoni Pizza Slice";
      weight = "120g";
      cal = "290 kcal";
      acc = "97.1%";
      macros = { protein: "11g", carbs: "30g", fats: "12g" };
    } else if (foodId === "fresh_apple") {
      name = "Red Gala Apple";
      weight = "150g";
      cal = "80 kcal";
      acc = "99.2%";
      macros = { protein: "1g", carbs: "22g", fats: "0.2g" };
    }

    setCalorieSelectedImage(foodId);
    setTimeout(() => {
      setScanResult({ foodName: name, weight, calories: cal, accuracy: acc, macros });
      setIsScanning(false);
    }, 1000);
  };

  // 2. Personal AI Chatbot Simulator States
  const [aiInput, setAiInput] = useState("");
  const [aiChat, setAiChat] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([
    { sender: 'ai', text: "Hello! I am your NLP chat assistant representing Khushi Kumari. I can answer technical questions from your computer studies (e.g., 'What is standard OOP?' or 'Tell me about Khushi's skills' or 'Explain recursion.')" }
  ]);

  const handleAiAsk = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiInput.trim()) return;

    const userPrompt = aiInput.trim();
    const updatedChat = [...aiChat, { sender: 'user' as const, text: userPrompt }];
    setAiChat(updatedChat);
    setAiInput("");

    setTimeout(() => {
      let aiResponse = "Interesting question! That's a core concept in our computer applications and software engineering foundations.";
      const lower = userPrompt.toLowerCase();

      if (lower.includes("recursion")) {
        aiResponse = "Recursion is a programming paradigm where a function calls itself to solve smaller subproblems. Make sure you establish a solid base case to prevent standard stack overflow failures!";
      } else if (lower.includes("oop") || lower.includes("object")) {
        aiResponse = "Object-Oriented Programming (OOP) forms the core of languages like Python and C++. The four main pillars are Encapsulation (hiding data), Inheritance (reusing models), Polymorphism (overriding methods), and Abstraction.";
      } else if (lower.includes("database") || lower.includes("dbms") || lower.includes("sql")) {
        aiResponse = "A DBMS organizes records securely. Relational databases like MySQL use structured schemas, normalizations, and keys to optimize complex queries and transactions.";
      } else if (lower.includes("skills") || lower.includes("expertise") || lower.includes("tech")) {
        aiResponse = "Khushi Kumari is highly proficient in Python, SQL, JavaScript (ES6+), HTML5, and CSS3, alongside modern tools like Git, VS Code, and GCP services.";
      } else if (lower.includes("khushi") || lower.includes("kumari")) {
        aiResponse = "Khushi Kumari is an ambitious BCA graduate with strong foundations in Python and Machine Learning, actively looking for internship roles!";
      } else if (lower.includes("calorie") || lower.includes("snap")) {
        aiResponse = "Snap Calorie AI is one of Khushi's major achievements, using computer vision to carry out real-time food classification and estimate volume and nutrition metrics.";
      }

      setAiChat(prev => [...prev, { sender: 'ai', text: aiResponse }]);
    }, 850);
  };

  // 3. Weather Web App Simulator States
  const [queryCity, setQueryCity] = useState("");
  const [weatherData, setWeatherData] = useState<any>({
    city: "Patna",
    temp: "32°C",
    condition: "Sunny / Clear Skies",
    humidity: "45%",
    wind: "12 km/h",
    pressure: "1012 hPa"
  });
  const [weatherLoading, setWeatherLoading] = useState(false);

  const handleSearchCity = (cityVal: string) => {
    setWeatherLoading(true);
    let temp = "24°C";
    let cond = "Cloudy / Moderate Rain";
    let hum = "78%";
    let wind = "18 km/h";
    let pres = "1008 hPa";

    const normalized = cityVal.trim().toLowerCase();
    
    if (normalized.includes("patna")) {
      temp = "34°C";
      cond = "Sunny / Clear Skies";
      hum = "40%";
      wind = "10 km/h";
      pres = "1010 hPa";
    } else if (normalized.includes("noida") || normalized.includes("delhi")) {
      temp = "38°C";
      cond = "Warm & Dry Haze";
      hum = "32%";
      wind = "14 km/h";
      pres = "1005 hPa";
    } else if (normalized.includes("bengaluru") || normalized.includes("bangalore")) {
      temp = "22°C";
      cond = "Mist / Light Drizzle";
      hum = "85%";
      wind = "22 km/h";
      pres = "1015 hPa";
    } else if (normalized.includes("muzaffarpur")) {
      temp = "31°C";
      cond = "Scattered Clouds";
      hum = "55%";
      wind = "9 km/h";
      pres = "1011 hPa";
    }

    setTimeout(() => {
      setWeatherData({
        city: cityVal,
        temp,
        condition: cond,
        humidity: hum,
        wind,
        pressure: pres
      });
      setWeatherLoading(false);
    }, 750);
  };

  // 4. Interactive Browser Game Simulation States
  const [gameScore, setGameScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [dotPosition, setDotPosition] = useState({ top: "50%", left: "50%" });
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    let timer: any;
    if (gameStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setGameStarted(false);
      if (gameScore > highScore) {
        setHighScore(gameScore);
      }
    }
    return () => clearInterval(timer);
  }, [gameStarted, timeLeft, gameScore, highScore]);

  const handleStartGame = () => {
    setGameScore(0);
    setTimeLeft(15);
    setGameStarted(true);
    moveDot();
  };

  const moveDot = () => {
    const randomTop = Math.floor(Math.random() * 80 + 10) + "%";
    const randomLeft = Math.floor(Math.random() * 80 + 10) + "%";
    setDotPosition({ top: randomTop, left: randomLeft });
  };

  const handleDotClick = () => {
    if (!gameStarted) return;
    setGameScore(prev => prev + 1);
    moveDot();
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-950 transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-1/4 right-5 w-72 h-72 bg-pink-100/30 dark:bg-slate-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-pink-500 dark:text-pink-400 font-mono mb-2"
          >
            MY PLAYFUL SANDBOXES 🚀
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white"
          >
            Featured Software Projects
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-650 dark:text-slate-400 mt-4 text-sm sm:text-base leading-relaxed">
            Ready to test? Tap on any project below and click <strong className="text-pink-500">Launch Live Sandbox</strong> to play with visual real-time web simulation interfaces!
          </p>
        </div>

        {/* Project Section Selector Tabs */}
        <div className="flex justify-center border-b border-rose-100/50 dark:border-slate-800 mb-12">
          <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8">
            {projectsData.map((proj) => (
              <button
                key={proj.id}
                onClick={() => {
                  setActiveTab(proj.id);
                  setSelectedDemo(null); // Reset open simulators when changing tabs
                }}
                className={`py-4 text-sm font-bold font-display cursor-pointer relative transition-all ${
                  activeTab === proj.id
                    ? 'text-pink-500 dark:text-pink-400'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                <span>{proj.title}</span>
                {activeTab === proj.id && (
                  <motion.div
                    layoutId="activeProjBar"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-500 dark:bg-pink-450"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Large Layout display block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Metadata descriptions */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            {projectsData
              .filter(p => p.id === activeTab)
              .map((proj) => (
                <div key={proj.id} className="space-y-6 text-left">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-950 dark:text-white mb-2">
                      {proj.title}
                    </h3>
                    <p className="text-sm font-bold font-mono text-purple-500 dark:text-purple-400 mb-4 h-auto">
                      {proj.tagline}
                    </p>
                    <p className="text-slate-655 dark:text-slate-350 leading-relaxed text-sm sm:text-base">
                      {proj.description}
                    </p>
                  </div>

                  {/* Technology badging */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-450 font-mono mb-2.5">Built With</h4>
                    <div className="flex flex-wrap gap-2">
                      {proj.techStack.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1.5 text-xs font-bold font-mono rounded-xl bg-pink-50/50 dark:bg-pink-950/20 text-pink-600 dark:text-pink-300 border border-pink-100/40 dark:border-pink-905/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bullet features */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-455 font-mono mb-2.5">Core Capabilities</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {proj.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-655 dark:text-slate-400 gap-2.5">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Static buttons section */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white dark:border-slate-750 rounded-2xl text-sm font-bold shadow-sm transition-all duration-300 transform hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub Code</span>
                    </a>
                    
                    {/* Live interactive simulation launcher button */}
                    <button
                      onClick={() => setSelectedDemo(proj.id)}
                      className="inline-flex items-center space-x-2.5 px-6 py-3 bg-gradient-to-r from-pink-500 to-indigo-500 hover:from-pink-600 hover:to-indigo-650 text-white rounded-2xl text-sm font-bold shadow-md shadow-pink-500/20 hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      <Play className="w-4 h-4 animate-ping" style={{ animationDuration: '3s' }} />
                      <span>Launch Live Sandbox</span>
                    </button>
                  </div>
                </div>
              ))}
          </div>

          {/* Right: Layout mock panel or Live Interactive Sandboxes */}
          <div className="lg:col-span-6 w-full">
            <AnimatePresence mode="wait">
              
              {/* Show Custom vector design if Simulator is NOT launched */}
              {!selectedDemo && (
                <motion.div
                  key="mockups"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="w-full aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden relative shadow-lg flex flex-col group justify-between"
                >
                  {/* Decorative device browser bar */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-white/70 dark:bg-slate-900/70 border-b border-slate-200/50 dark:border-slate-800/50">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-800" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-800" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-800" />
                    </div>
                    <div className="text-[10px] font-mono text-slate-400">localhost:3000/{activeTab}</div>
                    <div className="w-6" />
                  </div>

                  {/* Render simulated visuals depending on tab */}
                  <div className="flex-grow flex items-center justify-center p-6 sm:p-10 relative">
                    
                    {/* Visual 1: Snap Calorie AI */}
                    {activeTab === 'snap-calorie-ai' && (
                      <div className="w-full max-w-sm space-y-4 text-left">
                        <div className="flex items-center gap-3 p-3.5 bg-white dark:bg-slate-800/95 rounded-xl border border-slate-200/50 dark:border-slate-700/50 shadow-sm">
                          <div className="bg-red-100 dark:bg-red-950/40 p-2.5 rounded-lg text-red-650 dark:text-red-400">
                            <Camera className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs font-extrabold text-slate-900 dark:text-white">Active Food Photo Scanner</div>
                            <div className="text-[10px] text-slate-400">Classification & Volume Estimation</div>
                          </div>
                        </div>

                        <div className="p-3.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl text-white shadow-md relative overflow-hidden">
                          <div className="text-xs font-bold mb-1 flex items-center gap-1.5">
                            <Flame className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
                            <span>Nutrition Model Files Ready</span>
                          </div>
                          <p className="text-[10px] text-red-50/90 leading-snug">Launches custom computer vision pipeline algorithms to estimate calorie macros instantly.</p>
                        </div>
                      </div>
                    )}

                    {/* Visual 2: Chatbot */}
                    {activeTab === 'personal-ai-chatbot' && (
                      <div className="w-full max-w-sm space-y-4 text-left">
                        <div className="flex items-center gap-3 p-3.5 bg-white dark:bg-slate-800/95 rounded-xl border border-slate-150 dark:border-slate-700 shadow-sm">
                          <div className="bg-blue-150 dark:bg-blue-950/40 p-2.5 rounded-lg text-blue-600 dark:text-blue-400">
                            <MessageSquare className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-905 dark:text-white">NLP Personal Chat Assistant</div>
                            <div className="text-[10px] text-slate-400">Token-Receptive Query Terminal</div>
                          </div>
                        </div>

                        <div className="bg-slate-100 dark:bg-slate-800/80 p-3 rounded-xl border border-slate-200/55 dark:border-slate-700/60 font-mono text-[10px] text-slate-600 dark:text-slate-300">
                          <p className="text-blue-600 dark:text-blue-400 font-bold mb-1">Incoming Signal:</p>
                          <p>"Hi! Give me some info about Khushi Jaiswal's software skills..."</p>
                        </div>
                      </div>
                    )}

                    {/* Visual 3: Weather */}
                    {activeTab === 'weather-app' && (
                      <div className="w-full max-w-sm space-y-3.5 text-left">
                        <div className="flex items-center justify-between p-3.5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200/50 dark:border-slate-700/50 shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-amber-50 dark:bg-amber-950/20 text-amber-500 rounded-lg">
                              <CloudSun className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-900 dark:text-white">India Meteorology Console</div>
                              <div className="text-[9px] text-slate-450">OpenWeather API Sync</div>
                            </div>
                          </div>
                          <span className="text-[10px] bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300 px-2 py-0.5 rounded-full font-bold">Patna Active</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-center">
                          <div className="p-2.5 bg-slate-100 dark:bg-slate-800/55 rounded-lg border border-slate-100 dark:border-indigo-950/20">
                            <span className="text-[9px] text-slate-400 block font-mono">CURR TEMP</span>
                            <span className="text-sm font-bold text-slate-800 dark:text-slate-200">32°C</span>
                          </div>
                          <div className="p-2.5 bg-slate-100 dark:bg-slate-800/55 rounded-lg border border-slate-100 dark:border-indigo-950/20">
                            <span className="text-[9px] text-slate-400 block font-mono">OUTLOOK</span>
                            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Sunny Skylight</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Visual 4: Browser Game */}
                    {activeTab === 'browser-game' && (
                      <div className="w-full max-w-sm space-y-3.5 text-left">
                        <div className="flex items-center gap-3 p-3.5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200/50 dark:border-slate-700/50 shadow-sm">
                          <div className="p-2 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-650 dark:text-emerald-400 rounded-lg">
                            <Gamepad2 className="w-5 h-5 animate-bounce" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 dark:text-white">Active Speed Dot Clicker</div>
                            <div className="text-[10px] text-slate-400">Vanilla Javascript Timing checks</div>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-900 rounded-xl font-mono text-[10px] text-emerald-400 flex justify-between items-center">
                          <span>$ game_status: waiting</span>
                          <span className="bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded font-bold">Score: 0</span>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Action prompt */}
                  <div className="p-4 bg-white/70 dark:bg-slate-900/60 border-t border-slate-200/50 dark:border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Fully functional interactive demonstration available</span>
                    <button
                      onClick={() => setSelectedDemo(activeTab)}
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>Start Sandbox</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Sandbox Simulator Frame (Active) */}
              {selectedDemo && (
                <motion.div
                  key="simulators"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="w-full bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col min-h-[420px]"
                >
                  {/* Sandbox Header */}
                  <div className="flex items-center justify-between px-5 py-3.5 bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                      </span>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 font-mono text-left">
                        {selectedDemo === 'snap-calorie-ai' && "Snap Calorie AI - Nutritional Analytics"}
                        {selectedDemo === 'personal-ai-chatbot' && "Conversational Chatbot (NLP Demo)"}
                        {selectedDemo === 'weather-app' && "Asynchronous OpenWeather API Console"}
                        {selectedDemo === 'browser-game' && "Vanilla Game Logic Playroom"}
                      </h4>
                    </div>
                    {/* Close Simulator button */}
                    <button
                      onClick={() => setSelectedDemo(null)}
                      className="p-1 px-2 text-xs font-bold font-mono text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/20 rounded cursor-pointer transition-colors"
                    >
                      Exit Sandbox
                    </button>
                  </div>

                  {/* SIMULATOR #1: Snap Calorie AI */}
                  {selectedDemo === 'snap-calorie-ai' && (
                    <div className="flex-grow flex flex-col md:grid md:grid-cols-12 h-[420px] divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800 text-left">
                      {/* Left: Input Selection */}
                      <div className="md:col-span-5 p-4 flex flex-col justify-between h-[210px] md:h-full">
                        <div>
                          <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase font-mono tracking-wider mb-3">SELECT FOOD IMAGE</div>
                          <div className="space-y-2">
                            {[
                              { id: "healthy_salad", label: "Quinoa Veggie Salad", desc: "Mixed greens with metrics" },
                              { id: "avocado_toast", label: "Multi-grain Avocado Toast", desc: "Healthy fats portion" },
                              { id: "pizza_slice", label: "Pepperoni Pizza Slice", desc: "Single high-carb slice" },
                              { id: "fresh_apple", label: "Red Gala Apple", desc: "Single fresh whole fruit" }
                            ].map(food => (
                              <button
                                key={food.id}
                                onClick={() => handleFoodSelect(food.id)}
                                className={`w-full p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                                  calorieSelectedImage === food.id
                                    ? "bg-red-50 dark:bg-red-950/20 border-red-500 text-red-900 dark:text-red-300"
                                    : "bg-slate-50 dark:bg-slate-850 hover:bg-slate-100 border-slate-200 dark:border-slate-850 text-slate-850 dark:text-slate-300"
                                }`}
                              >
                                <div className="text-xs font-bold">{food.label}</div>
                                <div className="text-[10px] text-slate-400 leading-none mt-0.5">{food.desc}</div>
                              </button>
                            ))}
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 italic">
                          Clicking trigger updates model files & metrics.
                        </span>
                      </div>

                      {/* Right: Scan and Results */}
                      <div className="md:col-span-7 p-4 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col justify-between h-[210px] md:h-full">
                        <div>
                          <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase font-mono tracking-wider mb-2.5 flex items-center justify-between">
                            <span>Image Scoping Pipeline</span>
                            {isScanning && <span className="text-red-500 animate-pulse text-[10px]">SCANNING CAMERA...</span>}
                          </div>

                          <AnimatePresence mode="wait">
                            {isScanning ? (
                              <motion.div
                                key="scanning"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="h-28 bg-slate-200 dark:bg-slate-950 rounded-xl relative overflow-hidden flex items-center justify-center border border-dashed border-red-400"
                              >
                                <motion.div
                                  animate={{ y: ["-100%", "100%", "-100%"] }}
                                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                  className="absolute top-0 left-0 right-0 h-0.5 bg-red-500 shadow-md shadow-red-500"
                                />
                                <span className="text-xs font-mono font-bold text-slate-500 animate-pulse">Running Classification Engine...</span>
                              </motion.div>
                            ) : (
                              <motion.div
                                key="results"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="space-y-3.5"
                              >
                                {/* Calculated Calorie Index */}
                                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200/50 dark:border-slate-700/50 flex justify-between items-center">
                                  <div>
                                    <h5 className="text-xs font-mono text-slate-400 uppercase leading-none">ESTIMATED MASS</h5>
                                    <span className="text-sm font-black text-slate-900 dark:text-white block mt-1">{scanResult.foodName} ({scanResult.weight})</span>
                                  </div>
                                  <div className="text-right">
                                    <div className="inline-flex items-center gap-1 bg-red-100 dark:bg-red-950/45 text-red-650 dark:text-red-400 font-extrabold text-xs px-2.5 py-1 rounded-full">
                                      <Flame className="w-3.5 h-3.5" />
                                      <span>{scanResult.calories}</span>
                                    </div>
                                    <div className="text-[9px] text-slate-400 mt-1">Accuracy: {scanResult.accuracy}</div>
                                  </div>
                                </div>

                                {/* Macro Nutrition bars */}
                                <div className="space-y-2">
                                  <div className="text-[10px] font-bold text-slate-400 font-mono">MACRONUTRIENT RATIOS</div>
                                  
                                  {/* protein ratio */}
                                  <div>
                                    <div className="flex justify-between text-[10px] text-slate-500 mb-0.5">
                                      <span>Protein</span>
                                      <span className="font-bold">{scanResult.macros.protein}</span>
                                    </div>
                                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                      <div className="bg-red-500 h-full rounded-full" style={{ width: scanResult.foodName.includes("Salad") ? "35%" : scanResult.foodName.includes("Toast") ? "25%" : scanResult.foodName.includes("Pizza") ? "40%" : "5%" }} />
                                    </div>
                                  </div>

                                  {/* carbs ratio */}
                                  <div>
                                    <div className="flex justify-between text-[10px] text-slate-500 mb-0.5">
                                      <span>Carbohydrates</span>
                                      <span className="font-bold">{scanResult.macros.carbs}</span>
                                    </div>
                                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                      <div className="bg-amber-500 h-full rounded-full" style={{ width: scanResult.foodName.includes("Salad") ? "65%" : scanResult.foodName.includes("Toast") ? "55%" : scanResult.foodName.includes("Pizza") ? "50%" : "95%" }} />
                                    </div>
                                  </div>

                                  {/* fats ratio */}
                                  <div>
                                    <div className="flex justify-between text-[10px] text-slate-500 mb-0.5">
                                      <span>Fats</span>
                                      <span className="font-bold">{scanResult.macros.fats}</span>
                                    </div>
                                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                      <div className="bg-yellow-500 h-full rounded-full" style={{ width: scanResult.foodName.includes("Salad") ? "15%" : scanResult.foodName.includes("Toast") ? "45%" : scanResult.foodName.includes("Pizza") ? "35%" : "1%" }} />
                                    </div>
                                  </div>

                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Reset indicator */}
                        <div className="flex items-center gap-1 text-[9px] text-slate-400 font-mono justify-end">
                          <span>PIPELINE ENGINE: ACTIVE</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SIMULATOR #2: Conversational Chatbot */}
                  {selectedDemo === 'personal-ai-chatbot' && (
                    <div className="flex-grow flex flex-col justify-between p-4 text-left">
                      <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase font-mono tracking-wider mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                        <span>Mock Chatbot Terminal</span>
                      </div>
                      
                      {/* Message lists */}
                      <div className="flex-grow overflow-y-auto space-y-2 text-xs mb-3 pr-1 max-h-[220px]">
                        {aiChat.map((msg, i) => (
                          <div key={i} className={`p-2.5 rounded-lg max-w-[85%] text-left ${
                            msg.sender === 'user'
                              ? 'bg-indigo-600 text-white ml-auto'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 mr-auto'
                          }`}>
                            {msg.text}
                          </div>
                        ))}
                      </div>

                      {/* Chat text form box */}
                      <form onSubmit={handleAiAsk} className="flex gap-2.5 border-t border-slate-100 dark:border-slate-800 pt-3">
                        <input
                          type="text"
                          value={aiInput}
                          onChange={(e) => setAiInput(e.target.value)}
                          placeholder="Type 'OOP', 'recursion', 'database', 'khushi'..."
                          className="flex-grow bg-slate-50 border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
                        />
                        <button
                          type="submit"
                          className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors cursor-pointer"
                        >
                          <Send className="w-3.5 h-3.5" />
                        </button>
                      </form>
                    </div>
                  )}

                  {/* SIMULATOR #3: Weather Dashboard */}
                  {selectedDemo === 'weather-app' && (
                    <div className="flex-grow flex flex-col md:grid md:grid-cols-12 h-[420px] divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800 text-left">
                      {/* Left: Input searching */}
                      <div className="md:col-span-5 p-4 flex flex-col justify-between h-[210px] md:h-full">
                        <div>
                          <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase font-mono tracking-wider mb-2.5">PRESET CITADELS</div>
                          <div className="grid grid-cols-2 gap-2 mb-4">
                            {["Patna", "Muzaffarpur", "Noida", "Bengaluru"].map(city => (
                              <button
                                key={city}
                                onClick={() => handleSearchCity(city)}
                                className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                                  weatherData.city === city && !weatherLoading
                                    ? "bg-amber-50 dark:bg-amber-950/20 border-amber-500 text-amber-900"
                                    : "bg-slate-50 dark:bg-slate-850 hover:bg-slate-100 border-slate-200 text-slate-700 dark:text-slate-300"
                                }`}
                              >
                                {city}
                              </button>
                            ))}
                          </div>

                          <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase font-mono tracking-wider mb-2">CUSTOM CITY SEARCH</div>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={queryCity}
                              onChange={(e) => setQueryCity(e.target.value)}
                              placeholder="Type Noida, Patna etc."
                              className="bg-slate-50 border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded px-2.5 py-1.5 text-xs text-slate-850 dark:text-slate-200 focus:outline-none flex-grow"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                if (queryCity.trim()) {
                                  handleSearchCity(queryCity);
                                  setQueryCity("");
                                }
                              }}
                              className="p-2 bg-amber-500 hover:bg-amber-600 text-white rounded transition-colors"
                            >
                              <Search className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        <span className="text-[10px] font-mono text-slate-400 italic">
                          Asynchronous async/await is simulated locally.
                        </span>
                      </div>

                      {/* Right: Weather readouts */}
                      <div className="md:col-span-7 p-4 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col justify-between h-[210px] md:h-full">
                        <div>
                          <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase font-mono tracking-wider mb-2.5">
                            API RESPONSE PAYLOAD
                          </div>

                          <AnimatePresence mode="wait">
                            {weatherLoading ? (
                              <motion.div
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="h-32 flex flex-col items-center justify-center space-y-1.5"
                              >
                                <div className="w-5 h-5 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
                                <span className="text-xs font-mono text-slate-500">Querying OpenWeather endpoint...</span>
                              </motion.div>
                            ) : (
                              <motion.div
                                key="weather_show"
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-3"
                              >
                                <div className="flex justify-between items-center bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200/40 dark:border-slate-700/40 shadow-sm">
                                  <div>
                                    <span className="text-xs text-slate-400 font-mono uppercase leading-none">CITY IN FOCUS</span>
                                    <h5 className="text-sm font-black text-slate-950 dark:text-white mt-1 uppercase tracking-wide">{weatherData.city}</h5>
                                  </div>
                                  <div className="text-right">
                                    <span className="text-2xl font-extrabold text-amber-550 block leading-none">{weatherData.temp}</span>
                                    <span className="text-[10px] text-slate-450 block mt-1">{weatherData.condition}</span>
                                  </div>
                                </div>

                                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                                  <div className="bg-white dark:bg-slate-800 p-2 rounded-lg border border-slate-200/40 dark:border-slate-700/40">
                                    <span className="text-[9px] text-slate-400 block font-mono">HUMIDITY</span>
                                    <span className="font-bold text-slate-700 dark:text-slate-350">{weatherData.humidity}</span>
                                  </div>
                                  <div className="bg-white dark:bg-slate-800 p-2 rounded-lg border border-slate-200/40 dark:border-slate-700/40">
                                    <span className="text-[9px] text-slate-400 block font-mono">WIND VEL</span>
                                    <span className="font-bold text-slate-700 dark:text-slate-350">{weatherData.wind}</span>
                                  </div>
                                  <div className="bg-white dark:bg-slate-800 p-2 rounded-lg border border-slate-200/40 dark:border-slate-700/40">
                                    <span className="text-[9px] text-slate-400 block font-mono">PRESSURE</span>
                                    <span className="font-bold text-slate-700 dark:text-slate-350">{weatherData.pressure}</span>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div className="flex items-center gap-2 justify-end text-[9px] font-mono text-slate-400">
                          <CheckCircle className="w-3 h-3 text-emerald-500" />
                          <span>STATUS 200: SUCCESS</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SIMULATOR #4: Interactive Browser Game */}
                  {selectedDemo === 'browser-game' && (
                    <div className="flex-grow flex flex-col justify-between p-4 text-left">
                      <div className="flex items-center justify-between">
                        <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase font-mono tracking-wider flex items-center gap-1.5">
                          <Gamepad2 className="w-4 h-4 text-emerald-500" />
                          <span>DOM Target React Speed</span>
                        </div>
                        
                        <div className="flex items-center gap-4 text-xs font-mono font-bold">
                          <span className="text-slate-450 text-[10px]">HI-SCORE: {highScore}</span>
                          <span className="text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20 px-2.5 py-0.5 rounded">Score: {gameScore}</span>
                        </div>
                      </div>

                      {/* Game Field Grid */}
                      <div className="flex-grow bg-slate-100 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 relative h-48 my-3.5 overflow-hidden">
                        {gameStarted ? (
                          <>
                            <div className="absolute top-2 left-2 text-[10px] font-mono text-slate-400">
                              Time remaining: <span className="font-bold text-rose-500">{timeLeft}s</span>
                            </div>
                            
                            {/* Clicking targeting ball */}
                            <button
                              onClick={handleDotClick}
                              className="absolute w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500 hover:bg-emerald-600 border border-white text-white font-bold flex items-center justify-center cursor-crosshair transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-emerald-500/20 animate-pulse"
                              style={{ top: dotPosition.top, left: dotPosition.left }}
                            >
                              ★
                            </button>
                          </>
                        ) : (
                          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3.5 text-center p-4">
                            <Gamepad2 className="w-10 h-10 text-slate-400" />
                            <div>
                              <p className="text-xs text-slate-500 font-medium">Click the star as it relocates to accumulate maximum score inside 15 seconds!</p>
                            </div>
                            <button
                              onClick={handleStartGame}
                              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-md shadow-emerald-500/10"
                            >
                              Initialize Play Console
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Game Controller footer prompt */}
                      <button
                        onClick={() => {
                          setGameStarted(false);
                          setGameScore(0);
                          setTimeLeft(15);
                        }}
                        className="w-full text-center py-2 border border-slate-250 dark:border-slate-800 text-[10px] font-mono rounded-lg hover:bg-slate-100 dark:hover:bg-slate-850 text-slate-500 cursor-pointer flex justify-center items-center gap-1.5"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Reset Game Console</span>
                      </button>
                    </div>
                  )}

                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
