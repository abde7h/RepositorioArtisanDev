import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import profilePic from "../../public/images/profile/profile-pic2.jpeg";
import Image from "next/image";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Link from "next/link";

const about = () => {
  return (
    <>
      <Head>
        <title>ArtisanDev | Acerca de mí</title>
        <meta
          name="description"
          content="Conoce mi biografía, experiencia y educación como desarrollador web. Descubre cómo mis conocimientos pueden contribuir a tus proyectos en línea"
        />
      </Head>

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="¡Pasión que Inspira Propósito!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          ></AnimatedText>

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biografía
              </h2>

              <p className="font-medium">
                Con una formación inicial en telecomunicaciones, mi viaje en el
                mundo de la tecnología me llevó hacia el desarrollo web. Como
                Full Stack Developer, tengo experiencia en HTML, CSS,
                JavaScript, React y Java con Spring. Mi enfoque se centra en
                crear soluciones web dinámicas y robustas. Disfruto colaborando
                en equipos multidisciplinarios, enfrentando desafíos y
                manteniéndome al día con las últimas tendencias tecnológicas.
              </p>

              <p className="my-4 font-medium">
                En el apartado proyectos puedes encontrar trabajos personales,
                donde demuestro mis habilidades para crear soluciones web efectivas
                y atractivas. Hablo varios idiomas, incluyendo Español, Catalán,
                Inglés y Árabe, lo que facilita la colaboración en entornos
                multiculturales.
              </p>

              <p className="font-medium">
                Estoy abierto a oportunidades de colaboración y proyectos
                desafiantes que puedan generar un impacto positivo. Si deseas
                explorar una posible colaboración o tienes alguna pregunta, no
                dudes en{" "}
                <Link href={`mailto:artesanodeveloper@gmail.com`} legacyBehavior>
                  <a className="hover:underline text-yellow-400 hover:text-yellow-600">
                    contactarme aquí
                  </a>
                </Link>
                . Estoy listo para abordar nuevos desafíos y contribuir al
                crecimiento de tu proyecto.
              </p>
            </div>

            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light "></div>
              <Image
                src={profilePic}
                alt="ArtisanDev image profile"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
