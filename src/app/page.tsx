"use client";

import { Search, Menu } from "lucide-react";
import ScrollSequence from "@/components/ScrollSequence";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const sequenceRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sequenceRef,
    offset: ["start start", "end end"]
  });

  // --- Background Typography Parallax (Monumoir Style) ---
  const bgOpacity1 = useTransform(scrollYProgress, [0, 0.45, 0.49], [1, 1, 0]);
  const bgY1 = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  
  const bgOpacity2 = useTransform(scrollYProgress, [0.51, 0.55, 1], [0, 1, 1]);
  const bgY2 = useTransform(scrollYProgress, [0.5, 1], [100, 0]);

  // --- Sequence 1 ---
  const s1IntroOpacity = useTransform(scrollYProgress, [0, 0.45, 0.49], [1, 1, 0]);
  const s1IntroY = useTransform(scrollYProgress, [0.45, 0.49], [0, -10]);

  const s1CardsOpacity = useTransform(scrollYProgress, [0.2, 0.25, 0.4, 0.45], [0, 1, 1, 0]);
  const s1CardsY = useTransform(scrollYProgress, [0.2, 0.45], [40, -40]);


  // --- Sequence 2 ---
  const s2IntroOpacity = useTransform(scrollYProgress, [0.51, 0.55, 1], [0, 1, 1]);
  const s2IntroY = useTransform(scrollYProgress, [0.51, 0.55], [10, 0]);

  const s2CardsOpacity = useTransform(scrollYProgress, [0.75, 0.8, 0.95, 1.0], [0, 1, 1, 1]);
  const s2CardsY = useTransform(scrollYProgress, [0.75, 1.0], [40, 0]);

  return (
    <main className="bg-black min-h-screen">
      {/* 3D Canvas Scroll Sequence (Hero) */}
      <div ref={sequenceRef}>
        <ScrollSequence folders={["/frames", "/frames2"]}>
          <div className="flex flex-col h-full px-8 py-8 md:px-12 md:py-10 selection:bg-white/20">
            
            {/* Header - Fixed Frame */}
            <header className="flex items-center justify-between relative z-30 mix-blend-difference">
              <nav className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-medium text-white/70">
                <a href="#" className="hover:text-white transition-colors">Home</a>
                <a href="#" className="hover:text-white transition-colors">Heritage</a>
                <a href="#" className="hover:text-white transition-colors">Notes</a>
                <a href="#" className="hover:text-white transition-colors">Boutique</a>
              </nav>
              <div className="md:absolute md:left-1/2 md:-translate-x-1/2 text-2xl tracking-[0.3em] font-light text-white">
                AZZARO
              </div>
              <div className="flex items-center gap-8 text-white">
                <button className="hover:text-white/70 transition-colors">
                  <Search className="w-5 h-5" strokeWidth={1} />
                </button>
                <button className="hover:text-white/70 transition-colors">
                  <Menu className="w-6 h-6" strokeWidth={1} />
                </button>
              </div>
            </header>

            {/* Huge Background Typography */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 overflow-hidden mix-blend-overlay">
              <motion.div 
                style={{ opacity: bgOpacity1, y: bgY1 }} 
                className="absolute text-[16vw] tracking-[0.1em] font-light text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.08)] whitespace-nowrap"
              >
                CHROME
              </motion.div>
              <motion.div 
                style={{ opacity: bgOpacity2, y: bgY2 }} 
                className="absolute text-[16vw] tracking-[0.1em] font-light text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.08)] whitespace-nowrap"
              >
                SAUVAGE
              </motion.div>
            </div>

            {/* Scroll-Linked Content Area */}
            <div className="flex-1 relative z-20 pointer-events-none">
              
              {/* SECTION 1: Monumoir Style Editorial Cards */}
              <motion.div 
                style={{ opacity: s1CardsOpacity, y: s1CardsY }}
                className="absolute bottom-[8%] left-0 w-full flex flex-col md:flex-row items-start justify-center gap-12 xl:gap-24 px-8"
              >
                <EditorialCard 
                  number="01"
                  title="Vibrant & Aquatic"
                  description="A wave of freedom that takes the senses by storm. The sparkling notes of bergamot intertwine with the aquatic heart, delivering a deep, invigorating breath of fresh air."
                />
                <EditorialCard 
                  number="02"
                  title="Signature Trail"
                  description="Radiates an enveloping warmth. The comforting musk and woody accords create a truly refined masculinity that lingers beautifully on the skin for hours."
                />
                <EditorialCard 
                  number="03"
                  title="Timeless Design"
                  description="Housed in a sleek, square glass bottle that flawlessly encapsulates the pure, Mediterranean blue essence within. A true testament to minimalist elegance."
                />
              </motion.div>

              {/* SECTION 2: Monumoir Style Editorial Cards */}
              <motion.div 
                style={{ opacity: s2CardsOpacity, y: s2CardsY }}
                className="absolute bottom-[8%] left-0 w-full flex flex-col md:flex-row items-start justify-center gap-12 xl:gap-24 px-8"
              >
                <EditorialCard 
                  number="I"
                  title="Raw & Noble"
                  description="A radically fresh composition, dictated by a name that has the ring of a manifesto. Raw and noble all at once, inspired by wide-open spaces and wilderness."
                />
                <EditorialCard 
                  number="II"
                  title="Calabrian Citrus"
                  description="Radiant top notes burst with the juicy freshness of Reggio di Calabria Bergamot, a unique signature explicitly chosen for its highly spicy and zesty facets."
                />
                <EditorialCard 
                  number="III"
                  title="Ambroxan Trail"
                  description="Derived from precious ambergris, it unleashes a powerfully woody trail that refuses to fade, capturing the untamed, rugged essence of the outdoors."
                />
              </motion.div>

            </div>

            {/* Footer - Fixed Frame */}
            <footer className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pb-4 relative z-30 mix-blend-difference">
              
              {/* Intro Texts (Bottom Left) - Slot Machine Style Reveal */}
              <div className="relative w-full max-w-[400px] h-[80px] overflow-hidden">
                <motion.div 
                  style={{ y: useTransform(scrollYProgress, [0.42, 0.48], ["0%", "-50%"]) }}
                  className="flex flex-col w-full h-[160px]"
                >
                  {/* S1 Intro (Takes up first 80px) */}
                  <div className="h-[80px] w-full flex flex-col justify-end text-[14px] text-white/60 leading-[1.8] font-light pointer-events-none pb-1">
                    <span className="font-normal tracking-wide text-white uppercase text-[11px] block mb-2">Chapter I</span>
                    <span className="text-white">Chrome by Azzaro</span> – a timeless fragrance that embodies freshness, clarity, and refined masculinity.
                  </div>

                  {/* S2 Intro (Takes up second 80px) */}
                  <div className="h-[80px] w-full flex flex-col justify-end text-[14px] text-white/60 leading-[1.8] font-light pointer-events-none pb-1">
                    <span className="font-normal tracking-wide text-white uppercase text-[11px] block mb-2">Chapter II</span>
                    <span className="text-white">Sauvage by Dior</span> – a radically fresh composition, raw and noble all at once, inspired by wide-open spaces.
                  </div>
                </motion.div>
              </div>

              {/* Bottom Right Info (Static Credit) */}
              <div className="flex flex-col items-end gap-1 text-[10px] tracking-[0.1em] uppercase text-white/50 text-right pointer-events-none">
                <div className="text-white">@desasterweb2.0</div>
                <div>Editorial Web Concept</div>
                <div>2026 Collection</div>
              </div>
            </footer>
          </div>
        </ScrollSequence>
      </div>

      {/* NEW BUSINESS / 3D COMMERCE PARALLAX SECTION */}
      <BusinessParallaxSection />
      
      {/* NEW BENTO GRID SECTION (Parallax Animated) */}
      <BentoParallaxSection />

      {/* NEW ANIMATED GIF SECTION */}
      <AnimatedGifSection />

      {/* NEW CAMPAIGN REVEAL SECTION */}
      <CampaignSection />

      {/* NEW FRAGRANCE NOTES SECTION */}
      <NotesSection />

      {/* NEW PREMIUM FOOTER */}
      <FooterSection />

    </main>
  );
}

// Monumoir-Inspired Editorial Block
function EditorialCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="w-full md:w-[280px] flex flex-col items-start pointer-events-auto text-left group">
      <div className="w-full flex items-end justify-between border-b border-white/20 pb-4 mb-6">
        <span className="text-white/40 font-light text-sm">{number}</span>
        <div className="h-[1px] w-0 bg-white group-hover:w-12 transition-all duration-700 ease-out" />
      </div>
      <h3 className="text-2xl font-light text-white mb-4 tracking-wider leading-tight">
        {title}
      </h3>
      <p className="text-[13px] text-white/50 leading-[1.9] font-light text-justify">
        {description}
      </p>
    </div>
  );
}

// Plain Denim Black Parallax Section (Official Marketing Copy)
function BusinessParallaxSection() {
  const containerRef = useRef(null);
  
  // Track scroll position within this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms for the images and text
  const yImage1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], [-100, 150]);
  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section 
      ref={containerRef} 
      // Deep denim black background
      className="bg-[#050811] relative z-20 py-40 px-8 md:px-24 overflow-hidden text-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Parallax Image Composition */}
        <div className="flex-1 w-full relative h-[500px] md:h-[700px]">
          {/* Main aesthetic image (User Uploaded 1) */}
          <motion.div 
            style={{ y: yImage1 }}
            className="absolute top-0 left-0 w-[80%] h-[400px] md:h-[550px] overflow-hidden rounded-sm"
          >
            <img 
              src="/images/sauvage_custom_1.jpg" 
              alt="Sauvage Dior User Aesthetic 1" 
              className="w-full h-full object-cover scale-110 opacity-90"
            />
          </motion.div>
          
          {/* Secondary overlapping aesthetic image (User Uploaded 2) */}
          <motion.div 
            style={{ y: yImage2 }}
            className="absolute bottom-10 right-0 w-[65%] md:w-[55%] h-[300px] md:h-[400px] overflow-hidden rounded-sm z-10 border border-white/5"
          >
            <img 
              src="/images/sauvage_custom_2.jpg" 
              alt="Sauvage Dior User Aesthetic 2" 
              className="w-full h-full object-cover scale-110"
            />
          </motion.div>
        </div>

        {/* Text Area explaining Original Dior Marketing Copy */}
        <motion.div style={{ y: yText }} className="flex-1 flex flex-col gap-8 md:gap-10 z-20">
          <div className="text-[10px] tracking-[0.3em] text-white/50 uppercase">
            The Act of Creation
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-wide leading-[1.1]">
            Radical <br />
            <span className="text-white/40 italic">Freshness</span>
          </h2>
          <div className="flex flex-col gap-6">
            <p className="text-white/70 leading-[2] font-light text-[14px] md:text-[15px] max-w-lg text-justify border-l border-white/20 pl-6">
              "An act of creation inspired by wide-open spaces. An ozone-blue sky sprawling above a rocky landscape, white-hot beneath the desert sun."
            </p>
            <p className="text-white/50 leading-[2] font-light text-[14px] md:text-[15px] max-w-lg text-justify">
              The powerful citrus gust of Sauvage is heavily anchored by the ambery nobleness of Ambroxan, resinous Elemi and Woods. It is a composition that is both raw and lively, sensual and mysterious.
            </p>
          </div>
          
          <button className="mt-4 md:mt-8 px-8 md:px-10 py-4 border border-white/30 uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium hover:bg-white hover:text-black transition-all duration-500 w-fit group flex items-center gap-4">
            Discover the Campaign
            <span className="w-6 md:w-8 h-[1px] bg-white group-hover:bg-black transition-colors" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}

// NEW COMPONENT: Bento Box Grid with Parallax Animation
function BentoParallaxSection() {
  const containerRef = useRef(null);
  
  // Track scroll specifically for the Bento Grid section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create subtle parallax offsets for internal elements
  const bgParallax1 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const bgParallax2 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const floatUp = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="bg-black py-32 px-6 md:px-20 text-white relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header equivalent to the reference image */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide max-w-2xl leading-[1.2]">
            A signature trail that <span className="italic font-serif text-white/60">commands attention.</span>
          </h2>
          <button className="rounded-full border border-white/20 px-8 py-3 text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors shrink-0">
            Let's team up today ↗
          </button>
        </div>

        {/* Bento Grid Layout */}
        <div className="flex flex-col md:flex-row gap-5 h-auto md:h-[600px]">
          
          {/* Column 1: Tall Main Card */}
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], [40, -20]) }}
            className="flex-[1.2] bg-[#0c0c0c] rounded-[2rem] p-10 flex flex-col justify-end relative overflow-hidden group border border-white/5"
          >
            {/* Subtle Gradient / Image Parallax background */}
            <motion.div 
              style={{ y: bgParallax1 }}
              className="absolute inset-0 z-0 bg-gradient-to-tr from-[#1a233a] to-transparent opacity-40 group-hover:scale-105 transition-transform duration-1000"
            />
            
            <div className="relative z-10">
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-auto absolute top-0 left-0">Inside Dior</div>
              <h3 className="text-4xl md:text-5xl font-light leading-tight mb-4 mt-40">
                Raw essence, <br />
                <span className="italic">every drop.</span>
              </h3>
              <p className="text-white/50 text-[14px] leading-[1.8] font-light max-w-sm mb-8">
                A composition that is radically fresh, raw and noble all at once. Unleash the powerful woody trail that refuses to fade.
              </p>
              <div className="text-[11px] text-white/40 tracking-[0.1em]">
                Raw Materials · Optional Elixir · Every occasion
              </div>
            </div>
          </motion.div>

          {/* Column 2: Two Stacked Cards */}
          <div className="flex-1 flex flex-col gap-5">
            {/* Top Square: Quote */}
            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], [20, -10]) }}
              className="flex-1 bg-[#0c0c0c] rounded-[2rem] p-10 border border-white/5 flex flex-col justify-between"
            >
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/50">Expert Voice</div>
              <p className="text-[14px] text-white/80 leading-[1.8] font-light mt-4">
                "To create Sauvage, I used man as my starting point. A strong and unmistakable masculinity. Like the image of a man who transcends time and fashion."
              </p>
              <div className="text-[12px] text-white/40 mt-6">
                <span className="text-white">François Demachy</span>, Dior Perfumer-Creator
              </div>
            </motion.div>

            {/* Bottom Square: Stars / Parallax Stat */}
            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], [60, -30]) }}
              className="flex-[1.2] bg-[#0c0c0c] rounded-[2rem] relative overflow-hidden border border-white/5 flex flex-col items-center justify-center group"
            >
              {/* Starry Night Parallax Background */}
              <motion.img 
                style={{ y: bgParallax2 }}
                src="https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1500&auto=format&fit=crop" 
                className="absolute inset-0 w-full h-[140%] object-cover opacity-60 mix-blend-screen"
                alt="Starry Night"
              />
              <div className="relative z-10 flex flex-col items-center text-center p-6">
                <h4 className="text-5xl md:text-6xl font-light mb-2">10M+</h4>
                <div className="text-[12px] text-white/60 tracking-wider">Bottles Crafted Globally</div>
              </div>
            </motion.div>
          </div>

          {/* Column 3: Feature Highlight & Contact */}
          <div className="flex-1 flex flex-col gap-5">
            {/* Top Large Card: Golden Glowing Feature */}
            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], [30, -15]) }}
              className="flex-[2] bg-[#0c0c0c] rounded-[2rem] relative overflow-hidden border border-white/5 p-8 group flex flex-col"
            >
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/50 text-center mb-8 relative z-10">
                Built to Last
              </div>
              <motion.img 
                style={{ y: bgParallax1 }}
                src="https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=1000&auto=format&fit=crop"
                className="absolute inset-0 w-full h-[120%] object-cover opacity-50 sepia-[0.3] brightness-75 group-hover:scale-105 transition-transform duration-1000"
                alt="Golden abstract"
              />
              {/* Fake UI Grid overlay mimicking the reference */}
              <div className="mt-auto grid grid-cols-4 gap-3 relative z-10">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="aspect-square rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bottom Small Card: Contact */}
            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], [50, -25]) }}
              className="flex-none h-[140px] bg-[#0c0c0c] rounded-[2rem] border border-white/5 p-8 flex flex-col justify-between group cursor-pointer hover:bg-[#111] transition-colors"
            >
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/50">Reach Us</div>
              <div>
                <div className="text-[15px] font-medium text-white mb-1">discover@dior.com</div>
                <div className="text-[12px] text-white/40">Exclusive concierge service</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

// NEW COMPONENT: Animated GIF & Motion Section
function AnimatedGifSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <section ref={containerRef} className="bg-black py-40 px-6 md:px-20 relative overflow-hidden flex flex-col items-center justify-center min-h-[90vh] text-white">
      <motion.div style={{ opacity, y, scale }} className="flex flex-col items-center justify-center max-w-5xl mx-auto w-full z-10">
        
        <div className="text-center mb-16 relative z-20">
          <div className="text-[10px] tracking-[0.4em] uppercase text-white/50 mb-6">Motion & Essence</div>
          <h2 className="text-5xl md:text-7xl font-light tracking-wide leading-tight">
            The Dynamic <br />
            <span className="italic font-serif text-white/60">Signature</span>
          </h2>
        </div>

        {/* The Animated "GIF" Container */}
        <div className="relative w-full aspect-[4/5] md:aspect-video rounded-[2rem] overflow-hidden border border-white/10 group bg-[#0a0a0a]">
          {/* Continuous floating animation mimicking a GIF using the user's uploaded image */}
          <motion.img 
            src="/images/sauvage_tilted.jpg" 
            alt="Sauvage Animated Showcase" 
            className="w-full h-full object-cover opacity-80 mix-blend-screen"
            animate={{
              scale: [1.1, 1.15, 1.1],
              rotate: [0, 2, -2, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* NOTE: You can replace the img src above with an actual .gif file at any time. */}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
          
          <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16 z-10">
            <h3 className="text-3xl font-light tracking-widest mb-2">PURE IMPACT</h3>
            <p className="text-white/50 text-sm font-light max-w-sm leading-relaxed">
              Experience the relentless freshness and untamed spirit of Dior Sauvage in constant motion.
            </p>
          </div>
        </div>

      </motion.div>
    </section>
  );
}

// NEW COMPONENT: Cinematic Campaign Reveal
function CampaignSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="bg-black py-32 px-6 md:px-12 relative overflow-hidden text-white min-h-[80vh] flex items-center justify-center">
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src="https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=2000&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-40 mix-blend-screen" 
          alt="Campaign Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </motion.div>

      <motion.div style={{ y: yText }} className="relative z-10 text-center flex flex-col items-center">
        <div className="text-[10px] tracking-[0.4em] uppercase text-white/50 mb-6">The Wilderness</div>
        <h2 className="text-6xl md:text-8xl font-light tracking-widest uppercase mb-8">
          Fearless
        </h2>
        <button className="px-12 py-4 border border-white hover:bg-white hover:text-black transition-colors uppercase tracking-[0.2em] text-[11px]">
          Watch the Film
        </button>
      </motion.div>
    </section>
  );
}

// NEW COMPONENT: Fragrance Notes (Scroll animated via whileInView)
function NotesSection() {
  const notes = [
    { title: "Calabrian Bergamot", desc: "A whirlwind of juicy freshness that sweeps everything in its path.", icon: "🍊" },
    { title: "Sichuan Pepper", desc: "A spicy, vibrating note that gives the composition its character.", icon: "🌶️" },
    { title: "Ambroxan", desc: "Unleashes a powerfully woody trail that refuses to fade.", icon: "🪵" }
  ];

  return (
    <section className="bg-[#050505] py-40 px-6 md:px-20 text-white relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light tracking-wider">Olfactory <span className="italic">Notes</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {notes.map((note, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="flex flex-col items-center text-center p-8 border border-white/5 bg-white/5 backdrop-blur-sm rounded-[2rem]"
            >
              <div className="text-4xl mb-6 grayscale opacity-80">{note.icon}</div>
              <h3 className="text-xl font-medium tracking-wide mb-4">{note.title}</h3>
              <p className="text-white/50 text-[14px] leading-relaxed font-light">{note.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// NEW COMPONENT: Premium Footer (Scroll animated reveal)
function FooterSection() {
  return (
    <footer className="bg-black pt-32 pb-12 px-6 md:px-20 text-white overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row justify-between items-start mb-32 gap-12"
        >
          <div className="max-w-md">
            <h3 className="text-2xl font-light tracking-widest mb-6">DIOR</h3>
            <p className="text-white/40 text-[13px] leading-relaxed mb-8">
              Subscribe to the Dior newsletter to receive the latest news, exclusive services, and updates on our Sauvage collections.
            </p>
            <div className="flex gap-4">
              <input type="email" placeholder="Your email address" className="bg-transparent border-b border-white/20 pb-2 text-[13px] w-full focus:outline-none focus:border-white transition-colors" />
              <button className="uppercase tracking-widest text-[11px] font-medium hover:text-white/70">Subscribe</button>
            </div>
          </div>

          <div className="flex gap-16 md:gap-32 text-[12px] uppercase tracking-[0.2em] font-light">
            <div className="flex flex-col gap-4">
              <span className="text-white/30 mb-4">Explore</span>
              <a href="#" className="hover:text-white/70">Fragrance</a>
              <a href="#" className="hover:text-white/70">Skincare</a>
              <a href="#" className="hover:text-white/70">Makeup</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white/30 mb-4">Maison</span>
              <a href="#" className="hover:text-white/70">Heritage</a>
              <a href="#" className="hover:text-white/70">Boutiques</a>
              <a href="#" className="hover:text-white/70">Careers</a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="w-full border-t border-white/10 pt-12 flex flex-col items-center"
        >
          <h1 className="text-[15vw] leading-none font-light tracking-widest text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.1)] select-none">
            SAUVAGE
          </h1>
          <div className="w-full flex justify-between items-center mt-8 text-[10px] text-white/30 tracking-widest uppercase">
            <span>© 2026 Parfums Christian Dior</span>
            <span>Terms & Conditions | Privacy Policy</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
