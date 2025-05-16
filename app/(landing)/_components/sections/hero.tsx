import { Button } from "@/components/ui/button";
import { Facebook, Play, Youtube, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="min-h-screen pt-20 md:pt-40 md:px-10 bg-[#0a0a0a] relative overflow-hidden">
      {/* Fondo mejorado con patron y gradientes */}
      <div className="absolute inset-0">
        {/* Patrón de líneas con variación de intensidad */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#363636_1px,transparent_1px),linear-gradient(to_bottom,#363636_1px,transparent_1px),linear-gradient(to_right,#262626_1px,transparent_3px),linear-gradient(to_bottom,#262626_1px,transparent_3px)]"
          style={{
            backgroundSize: "24px 24px, 48px 48px",
            opacity: 0.1,
          }}
        />

        {/* Gradientes de iluminación sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff08_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(145deg,#ffffff05_0%,transparent_20%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_70%,#ffffff03_100%)]" />
      </div>

      <div className="container px-4 py-16 mx-auto  grid md:grid-cols-2 gap-12  relative z-10">
        {/* Logo para desktop */}
        <div className="flex flex-col  w-full gap-8  ">
          {/* Logo */}
          <div className="flex-shrink-0 flex flex-col justify-center items-center">
            <img
              src="/logos/logo-hero.png"
              alt="Logo Rosarito Elite"
              className="object-contain w-40 h-40 md:w-60 md:h-60"
            />
          </div>
          {/* Text Content */}
          <div className="flex flex-col text-center space-y-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Rosarito Elite <br />
              <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                Basketball Academy
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              Transforma tu potencial en rendimiento con nuestro programa
              profesional de entrenamiento de baloncesto. ¡Inscripciones
              abiertas!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-lg py-6 px-8 rounded-lg transition-all shadow-lg hover:shadow-red-500/30"
              asChild
            >
              <Link href="#inscripciones">
                Comenzar Ahora
                <Play className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 text-stone-800 hover:text-stone-200 text-lg py-6 px-8 rounded-lg hover:bg-white/5 hover:border-white transition-all"
              asChild
            >
              <Link href="#programas">Conocer Más</Link>
            </Button>
          </div>

          {/* Nueva sección de redes sociales */}
          <div className="flex justify-center gap-4 mt-4 w-full">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-red-500 rounded-full hover:bg-white/10 transition-colors"
              asChild
            >
              <Link
                href="https://www.instagram.com/reb_academy/"
                target="_blank"
              >
                <Instagram className="h-6 w-6 md:h-9 md:w-9" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-red-500 rounded-full hover:bg-white/10 transition-colors"
              asChild
            >
              <Link
                href="https://www.facebook.com/people/Rosarito-Elite-Basketball-Academy/61553070687108/"
                target="_blank"
              >
                <Facebook className="h-6 w-6 md:h-9 md:w-9" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-red-500 rounded-full hover:bg-white/10 transition-colors"
              asChild
            >
              <Link href="https://tiktok.com" target="_blank">
                <Play className="h-6 w-6 md:h-9 md:w-9" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-red-500 rounded-full hover:bg-white/10 transition-colors"
              asChild
            >
              <Link href="https://youtube.com" target="_blank">
                <Youtube className="h-6 w-6 md:h-9 md:w-9" />
              </Link>
            </Button>
          </div>
          {/* Left side video - Not visible on mobile */}
          <div className="hidden md:block relative aspect-video rounded-xl overflow-hidden shadow-2xl transform transition-all group-hover:scale-[1.015]">
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
              poster="/training-preview.jpg"
            >
              <source
                src="/images/landing/videos/video1.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>

        {/* Media Section */}
        <div className="relative group flex flex-col gap-6 h-full">
          {/* Video Container */}
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl transform transition-all group-hover:scale-[1.015]">
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
              poster="/training-preview.jpg"
            >
              <source
                src="/images/landing/videos/video2.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Image Container - Hidden on mobile */}
          <div className="hidden md:block relative aspect-square rounded-xl overflow-hidden shadow-2xl transform transition-all group-hover:scale-[1.015]">
            <Image
              src="/images/landing/programs6.JPG"
              alt="Equipo entrenando"
              fill
              className="object-cover"
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30" />
    </section>
  );
}

// "use client";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { words } from "../secondary/constants";
// import Spline from "@splinetool/react-spline";
// import AnimatedCounter from "../secondary/animated-counter";
// import { useEffect, useState } from "react";
// import Button from "../secondary/landing-button";

// const titles = [
//   "Hello, I'm Carlos, a a software developer",
//   "based in Baja California Mexico ",
//   " with a passion for technology & programming.",
// ];

// const Hero = () => {
//   useGSAP(() => {
//     gsap.fromTo(
//       ".hero-text h1",
//       { y: 50, opacity: 0 },
//       { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" },
//     );
//   });
//   const [currentTitleIndex, setCurrentTitleIndex] = useState<number>(0);
//   const [currentText, setCurrentText] = useState<string>("");
//   const [isDeleting, setIsDeleting] = useState<boolean>(false);
//   const [typingSpeed, setTypingSpeed] = useState<number>(300); // Typing speed in ms

//   // Typing and deleting logic for hero title
//   useEffect(() => {
//     const handleTyping = () => {
//       const fullText = titles[currentTitleIndex];
//       if (!isDeleting) {
//         // Typing phase
//         setCurrentText((prev) => fullText.substring(0, prev.length + 1));
//         if (currentText === fullText) {
//           setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
//         }
//       } else {
//         // Deleting phase
//         setCurrentText((prev) => fullText.substring(0, prev.length - 1));
//         if (currentText === "") {
//           setIsDeleting(false);
//           setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
//         }
//       }
//       setTypingSpeed(isDeleting ? 100 : 150);
//     };

//     const typingTimer = setTimeout(handleTyping, typingSpeed);
//     return () => clearTimeout(typingTimer);
//   }, [currentText, isDeleting, currentTitleIndex, typingSpeed]);

//   return (
//     <section id="hero" className="bg-neutral-950 relative overflow-hidden pb-6">
//       {/* <div className="absolute top-0 left-0 z-10">
//         <img src="/images/bg.png" alt="" />
//       </div> */}

//       <div className="hero-layout">
//         {/* LEFT: Hero Content */}
//         <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 ">
//           <div className="flex flex-col gap-7">
//             <div className="hero-text text-slate-200">
//               <h1>
//                 <span>ROSARITO ELITE </span>
//                 {/* <span className="slide">
//                   <span className="wrapper">
//                     {words.map((word, index) => (
//                       <span
//                         key={index}
//                         className="flex items-center md:gap-3 gap-1 pb-2"
//                       >
//                         <img
//                           src={word.imgPath}
//                           alt="person"
//                           className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white text-white"
//                         />
//                         <span>{word.text}</span>
//                       </span>
//                     ))}
//                   </span>
//                 </span> */}
//               </h1>
//               <h1>BASKETBALL</h1>
//               <h1>ACADEMY</h1>
//               {/* <div className="absolute bottom-8 left-8 z-10">
//                 <h1 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-roboto font-extrabold tracking-wider typewriter">
//                   {currentText}
//                 </h1>
//               </div> */}
//             </div>
//             {/*
//             <p className="text-white md:text-xl relative z-10 pointer-events-none">
//               Una academia de baloncesto dedicada a la formación integral de{" "}
//               <br />
//               jugadores y jugadoras de todas las edades.
//             </p>
//             <p className="text-white md:text-xl relative z-10 pointer-events-none">
//               Nuestro objetivo es desarrollar habilidades técnicas, tácticas y
//               físicas, <br />
//               así como fomentar valores como el trabajo en equipo, la disciplina
//               y el respeto.
//             </p> */}
//             {/* <div className="absolute bottom-48 left-8 z-10">
//               <h1 className="text-white text-xl sm:text-2xl md:text-3xl  font-roboto font-extrabold tracking-wider typewriter">
//                 {currentText}
//               </h1>
//             </div> */}

//             {/* <Button
//               text="See My Work"
//               className="md:w-80 md:h-16 w-60 h-12 rounded-full  text-slate-800 font-roboto font-bold text-lg flex items-center justify-center cursor-pointer hover:bg-emerald-950/50 bg-emerald-500 hover:text-white"
//               id="cursor"
//             /> */}
//           </div>
//         </header>

//         {/* RIGHT: 3D Model or Visual */}
//         <figure>
//           <div className="hero-3d-layout bg-black ">
//             {/* <HeroExperience /> */}
//             <Spline scene="https://prod.spline.design/gHuA837oCWQW2iXY/scene.splinecode" />
//           </div>
//         </figure>
//       </div>

//       {/* <AnimatedCounter /> */}
//     </section>
//   );
// };

// export default Hero;
