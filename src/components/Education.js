import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "@/components/LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-3/5 mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Educación
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Programación en lenguajes estructurados Cert.profesional nivel 3"
            time="04/2024-10/2024"
            place="Iron Hack"
            info="Curso intensivo convalidado como Formación Profesional de Nivel 3.
            Desarrollo de aplicaciones completas utilizando Java, Spring Boot en el back-end y Vue.js en el front-end.
            Implementación de prácticas de desarrollo ágil, pruebas unitarias y despliegue en la nube."
          />

          <Details
            type="Ciencias de la Computación"
            time="05/2023-actualidad"
            place="42"
            info="En febrero de 2023, superé con éxito la intensiva prueba de acceso de 26 días, donde programé bajo la metodología peer-to-peer. En mayo, fui aceptado y comencé mi formación en Campus 42, inmerso en un roadmap de proyectos centrados principalmente en el lenguaje C. "
          />

          <Details
            type="Desarrollo Web Full Stack"
            time="09/2021 - 03/2022"
            place="Factoría F5"
            info="Front-end: UX/UI,
            advanced HTML5 and
            CSS3, atomic design,
            accessibility, Sass,
            Bootstrap, React,
            Angular.
            Back-end: OOP, MVC,
            PHP, Laravel, MySQL,
            APIs, deployment en
            GitHub Pages, Firebase y
            Heroku, Testing con Jest
            y PHPUnit."
          />

          <Details
            type="Ingeniería de Sistemas de Telecomunicación"
            time="2017-2019"
            place="Universitat Autonoma de Barcelona"
            info="Entre todas las asignaturas, destacaría programación funcional con el lenguaje C++, estadística, cálculo y electrónica."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
