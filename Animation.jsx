"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const container = useRef(null);

  useEffect(() => {
    projects.forEach((project, i) => {
      const targetScale = 1 - (projects.length - i) * 0.05;
      const cardElement = document.querySelector(`#card-${i}`);

      gsap.to(cardElement, {
        scale: targetScale,
        scrollTrigger: {
          trigger: cardElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main ref={container} className="relative mt-[50vh]">
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <ProjectCard
            key={`p_${i}`}
            range={[i * 0.25, 1]}
            i={i}
            color={project.color}
            title={project.title}
            description={project.description}
            src={project.src}
            url={project.link}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
};

export default Projects;

const ProjectCard = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const imageContainerRef = useRef(null);
  const cardRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      imageContainerRef.current,
      { scale: 2 },
      {
        scale: 1,
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );
    gsap.to(cardRef.current, {
      scale: targetScale,
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
  }, [targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex h-screen items-center justify-center"
    >
      <div
        ref={cardRef}
        style={{ backgroundColor: color, top: `calc(-5vh + ${i * 25}px)` }}
        className="relative -top-1/4 flex h-[500px] w-[1000px] flex-col rounded-3xl p-12"
      >
        <h2 className="m-0 text-center text-[28px]">{title}</h2>
        <div className="mt-12 flex h-full gap-12">
          <div className="relative top-[10%] w-[40%]">
            <p className="text-[16px]">
              <span className="first-letter:font-title first-letter:text-[28px]">
                {description}
              </span>
            </p>
            <span className="flex items-center gap-2">
              <a
                href={url}
                target="_blank"
                className="cursor-pointer text-[12px] underline"
              >
                See more
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          <div className="relative h-full w-[60%] overflow-hidden rounded-3xl">
            <div className="h-full w-full" ref={imageContainerRef}>
              <Image
                fill={true}
                src={`/images/${src}`}
                alt="image"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// type ProjectCardProps = {
//   i: number;
//   title: string;
//   description: string;
//   src: string;
//   url: string;
//   color: string;
//   progress?: number;
//   range: number[];
//   targetScale: number;
// };

export const projects = [
  {
    title: "Matthias Leidinger",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "smoke.jpg",
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#BBACAF",
  },
  {
    title: "Clément Chapillon",
    description:
      "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
    src: "smoke.jpg",
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#977F6D",
  },
  {
    title: "Zissou",
    description:
      "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
    src: "smoke.jpg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#C2491D",
  },
  {
    title: "Mathias Svold and Ulrik Hasemann",
    description:
      "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
    src: "smoke.jpg",
    link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
    color: "#B62429",
  },
  {
    title: "Mark Rammers",
    description:
      "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled ‘Beginnings’, the mesmerizing collection of images is a visual and meditative journey into the origins of regrets and the uncertainty of stepping into new unknowns.",
    src: "smoke.jpg",
    link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
    color: "#88A28D",
  },
];




































































// "use client";
// import Image from "next/image";
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);
// const Projects = () => {
//   const container = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // GSAP ScrollTrigger for each project card
//     projects.forEach((project, i) => {
//       const targetScale = 1 - (projects.length - i) * 0.05;
//       console.log("🚀 ~ projects.forEach ~ targetScale:", targetScale);
//       const cardElement = document.querySelector(`#card-${i}`);

//       console.log("🚀 ~ projects.forEach ~ cardElement:", cardElement);
//       gsap.to(cardElement, {
//         scale: targetScale,
//         scrollTrigger: {
//           trigger: cardElement,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: true,
//         },
//       });
//     });

//     // Cleanup on component unmount
//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);
//   return (
//     <main ref={container} className="relative mt-[50vh]">
//       {projects.map((project, i) => {
//         const targetScale = 1 - (projects.length - i) * 0.05;
//         return (
//           <ProjectCard
//             key={`p_${i}`}
//             range={[i * 0.25, 1]}
//             i={i}
//             color={project.color}
//             title={project.title}
//             description={project.description}
//             src={project.src}
//             url={project.link}
//             targetScale={targetScale}
//           />
//         );
//       })}
//     </main>
//   );
// };

// export default Projects;

// const ProjectCard = ({
//   i,
//   title,
//   description,
//   src,
//   url,
//   color,
//   progress,
//   range,
//   targetScale,
// }: ProjectCardProps) => {
//   const container = useRef<HTMLDivElement>(null);

//   const imageContainerRef = useRef<HTMLDivElement>(null);
//   console.log("🚀 ~ imageContainerRef:", imageContainerRef);
//   const cardRef = useRef<HTMLDivElement>(null);

//   useGSAP(() => {
//     gsap.fromTo(
//       imageContainerRef.current,
//       { scale: 2 },
//       {
//         scale: 1,
//         scrollTrigger: {
//           trigger: container.current,
//           start: "top bottom",
//           end: "top top",
//           scrub: true,
//         },
//       },
//     );
//     gsap.to(cardRef.current, {
//       scale: targetScale,
//       scrollTrigger: {
//         trigger: container.current,
//         start: "top bottom",
//         end: "top top",
//         scrub: true,
//       },
//     });
//   }, [targetScale]);

//   return (
//     <div
//       ref={container}
//       className="sticky top-0 flex h-screen items-center justify-center"
//     >
//       <div
//         ref={cardRef}
//         style={{ backgroundColor: color, top: `calc(-5vh + ${i * 25}px)` }}
//         className="relative -top-1/4 flex h-[500px] w-[1000px] flex-col rounded-3xl p-12"
//       >
//         <h2 className="m-0 text-center text-[28px]">{title}</h2>
//         <div className="mt-12 flex h-full gap-12">
//           <div className="relative top-[10%] w-[40%]">
//             <p className="text-[16px]">
//               <span className="first-letter:font-title first-letter:text-[28px]">
//                 {description}
//               </span>
//             </p>
//             <span className="flex items-center gap-2">
//               <a
//                 href={url}
//                 target="_blank"
//                 className="cursor-pointer text-[12px] underline"
//               >
//                 See more
//               </a>
//               <svg
//                 width="22"
//                 height="12"
//                 viewBox="0 0 22 12"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
//                   fill="black"
//                 />
//               </svg>
//             </span>
//           </div>

//           <div className="relative h-full w-[60%] overflow-hidden rounded-3xl">
//             <div className="h-full w-full" ref={imageContainerRef}>
//               <Image
//                 fill={true}
//                 src={`/images/${src}`}
//                 alt="image"
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// type ProjectCardProps = {
//   i: number;
//   title: string;
//   description: string;
//   src: string;
//   url: string;
//   color: string;
//   progress?: number;
//   range: number[];
//   targetScale: number;
// };

// export const projects = [
//   {
//     title: "Matthias Leidinger",
//     description:
//       "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
//     src: "smoke.jpg",
//     link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
//     color: "#BBACAF",
//   },
//   {
//     title: "Clément Chapillon",
//     description:
//       "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
//     src: "smoke.jpg",
//     link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
//     color: "#977F6D",
//   },
//   {
//     title: "Zissou",
//     description:
//       "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
//     src: "smoke.jpg",
//     link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
//     color: "#C2491D",
//   },
//   {
//     title: "Mathias Svold and Ulrik Hasemann",
//     description:
//       "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
//     src: "smoke.jpg",
//     link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
//     color: "#B62429",
//   },
//   {
//     title: "Mark Rammers",
//     description:
//       "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled ‘Beginnings’, the mesmerizing collection of images is a visual and meditative journey into the origins of regrets and the uncertainty of stepping into new unknowns.",
//     src: "smoke.jpg",
//     link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
//     color: "#88A28D",
//   },
// ];
