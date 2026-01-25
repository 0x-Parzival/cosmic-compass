import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import SciFiBackground from "@/components/quiz/SciFiBackground";
import FirecrackerAnimation from "@/components/quiz/FirecrackerAnimation";
import NeonButton from "@/components/quiz/NeonButton";

const mbtiDescriptions: Record<string, { title: string; subtitle: string }> = {
  INTP: { title: "The Logician", subtitle: "Innovative inventors with an unquenchable thirst for knowledge" },
  INTJ: { title: "The Architect", subtitle: "Imaginative and strategic thinkers with a plan for everything" },
  ENTJ: { title: "The Commander", subtitle: "Bold, imaginative and strong-willed leaders" },
  ENTP: { title: "The Debater", subtitle: "Smart and curious thinkers who cannot resist an intellectual challenge" },
  INFJ: { title: "The Advocate", subtitle: "Quiet and mystical, yet very inspiring and tireless idealists" },
  INFP: { title: "The Mediator", subtitle: "Poetic, kind and altruistic people, always eager to help a good cause" },
  ENFJ: { title: "The Protagonist", subtitle: "Charismatic and inspiring leaders, able to mesmerize their listeners" },
  ENFP: { title: "The Campaigner", subtitle: "Enthusiastic, creative and sociable free spirits" },
  ISTJ: { title: "The Logistician", subtitle: "Practical and fact-minded individuals, whose reliability cannot be doubted" },
  ISFJ: { title: "The Defender", subtitle: "Very dedicated and warm protectors, always ready to defend their loved ones" },
  ESTJ: { title: "The Executive", subtitle: "Excellent administrators, unsurpassed at managing things or people" },
  ESFJ: { title: "The Consul", subtitle: "Extraordinarily caring, social and popular people" },
  ISTP: { title: "The Virtuoso", subtitle: "Bold and practical experimenters, masters of all kinds of tools" },
  ISFP: { title: "The Adventurer", subtitle: "Flexible and charming artists, always ready to explore something new" },
  ESTP: { title: "The Entrepreneur", subtitle: "Smart, energetic and very perceptive people" },
  ESFP: { title: "The Entertainer", subtitle: "Spontaneous, energetic and enthusiastic people" },
};

const QuizResult = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const [showFirecrackers, setShowFirecrackers] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  const mbtiType = type?.toUpperCase() || "INTP";
  const description = mbtiDescriptions[mbtiType] || mbtiDescriptions.INTP;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirecrackers(false);
      setAnimationComplete(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // SEO meta content based on personality type
  const getSEOMeta = () => {
    const seoContent: Record<string, { description: string; keywords: string }> = {
      INTP: {
        description: "You are INTP - The Logician! Discover how to master focus, hack social dynamics, learn skills rapidly, find your life purpose, and automate income with your analytical mind.",
        keywords: "INTP personality, logician, analytical thinker, focus mastery, skill acquisition, life purpose, automation, MBTI INTP"
      },
      INTJ: {
        description: "You are INTJ - The Architect! Learn to systemize your life, think strategically, achieve top competence, win arguments with logic, and build a global business solo.",
        keywords: "INTJ personality, architect, strategic thinker, life system, competence, logical arguments, solo business, MBTI INTJ"
      },
      ENTJ: {
        description: "You are ENTJ - The Commander! Build your empire, execute rapidly, outmaneuver competitors, command any room, and ensure your vision survives.",
        keywords: "ENTJ personality, commander, empire builder, execution, competition, leadership, vision, MBTI ENTJ"
      },
      ENTP: {
        description: "You are ENTP - The Debater! Generate million-dollar ideas, master persuasion, thrive in uncertainty, bypass career ladders, and monetize your hobbies.",
        keywords: "ENTP personality, debater, idea generation, persuasion, uncertainty, career acceleration, hobby monetization, MBTI ENTP"
      },
      INFJ: {
        description: "You are INFJ - The Advocate! Stop absorbing emotions, build a coaching business, find your soul's career, change the world quietly, and manifest reality.",
        keywords: "INFJ personality, advocate, emotional boundaries, coaching, soul career, world change, manifestation, MBTI INFJ"
      },
      INFP: {
        description: "You are INFP - The Mediator! Monetize your art, get things done your way, heal through story, keep your heart open, and access the muse on command.",
        keywords: "INFP personality, mediator, art monetization, productivity, storytelling, open heart, creativity, MBTI INFP"
      },
      ENFJ: {
        description: "You are ENFJ - The Protagonist! Lead powerful movements, build a tribe, set healthy boundaries, read people deeply, and speak mesmerizingly.",
        keywords: "ENFJ personality, protagonist, leadership, community building, boundaries, emotional intelligence, public speaking, MBTI ENFJ"
      },
      ENFP: {
        description: "You are ENFP - The Campaigner! Finish projects, become super connected, tell viral stories, work without losing spark, and find your true people.",
        keywords: "ENFP personality, campaigner, project completion, networking, storytelling, work-life balance, authentic connections, MBTI ENFP"
      },
      ISTJ: {
        description: "You are ISTJ - The Logistician! Build an ordered life, organize digitally, build wealth safely, become unstoppable through habits, and never forget anything.",
        keywords: "ISTJ personality, logistician, life organization, digital management, wealth building, habit stacking, memory, MBTI ISTJ"
      },
      ISFJ: {
        description: "You are ISFJ - The Defender! Create a healing home, care without burnout, organize family life, get recognized, and build lasting memories.",
        keywords: "ISFJ personality, defender, healing home, self-care, family organization, recognition, memory building, MBTI ISFJ"
      },
      ESTJ: {
        description: "You are ESTJ - The Executive! Master administration, lead with authority, and create systems that work efficiently.",
        keywords: "ESTJ personality, executive, administration, leadership, systems, efficiency, MBTI ESTJ"
      },
      ESFJ: {
        description: "You are ESFJ - The Consul! Build caring communities, support others effectively, and create harmony in every environment.",
        keywords: "ESFJ personality, consul, community, caring, support, harmony, MBTI ESFJ"
      },
      ISTP: {
        description: "You are ISTP - The Virtuoso! Master practical skills, experiment boldly, and solve problems with hands-on expertise.",
        keywords: "ISTP personality, virtuoso, practical skills, experimentation, problem solving, hands-on, MBTI ISTP"
      },
      ISFP: {
        description: "You are ISFP - The Adventurer! Express yourself artistically, explore new experiences, and live authentically.",
        keywords: "ISFP personality, adventurer, artistic expression, exploration, authenticity, MBTI ISFP"
      },
      ESTP: {
        description: "You are ESTP - The Entrepreneur! Take bold action, read situations quickly, and thrive in dynamic environments.",
        keywords: "ESTP personality, entrepreneur, bold action, perception, dynamic, MBTI ESTP"
      },
      ESFP: {
        description: "You are ESFP - The Entertainer! Bring joy to others, live in the moment, and create unforgettable experiences.",
        keywords: "ESFP personality, entertainer, joy, present moment, experiences, MBTI ESFP"
      },
    };
    return seoContent[mbtiType] || seoContent.INTP;
  };

  const seo = getSEOMeta();

  return (
    <>
      <Helmet>
        <title>{mbtiType} Personality Type - {description.title} | Spiritual AI</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <link rel="canonical" href={`/result/${mbtiType}`} />
      </Helmet>

      <div className="relative h-full w-full flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden">
        <SciFiBackground variant="result" />
        <FirecrackerAnimation 
          isActive={showFirecrackers} 
          onComplete={() => setAnimationComplete(true)} 
        />
        
        <motion.div
          className="relative z-10 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Result announcement */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="font-orbitron text-sm sm:text-base text-muted-foreground uppercase tracking-widest">
              Your Personality Type Is
            </span>
          </motion.div>

          {/* MBTI Type - Large Display */}
          <motion.h1
            className="font-orbitron text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black my-4 sm:my-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 1,
              type: "spring",
              stiffness: 200
            }}
          >
            {mbtiType.split("").map((letter, i) => (
              <motion.span
                key={i}
                className={`inline-block ${
                  i === 0 ? "text-neon-cyan text-glow-cyan" :
                  i === 1 ? "text-secondary text-glow-cyan" :
                  i === 2 ? "text-accent text-glow-magenta" :
                  "text-primary text-glow-purple"
                }`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Type name and description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <h2 className="font-orbitron text-xl sm:text-2xl md:text-3xl text-primary mb-2">
              {description.title}
            </h2>
            <p className="font-exo text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto px-4">
              {description.subtitle}
            </p>
          </motion.div>

          {/* Retake button */}
          <motion.div
            className="mt-6 sm:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: animationComplete ? 1 : 0, y: animationComplete ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <NeonButton
              variant="secondary"
              onClick={() => navigate("/quiz")}
            >
              Retake Quiz
            </NeonButton>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="absolute -top-10 -left-10 w-20 h-20 border border-primary/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-10 -right-10 w-32 h-32 border border-secondary/20 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>
    </>
  );
};

export default QuizResult;
