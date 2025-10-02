import Header from "@/components/Header";
import TeamMemberCard, { TeamMember } from "@/components/TeamMemberCard";
import { Info, Landmark, Target, BookOpenText, Rocket } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-6 pt-28 pb-12">
        {/* Mini Hero */}
        <section className="mb-10">
          <div className="card-botanical p-8 rounded-2xl bg-gradient-to-r from-botanical-cream/70 to-botanical-sage/40 border border-botanical-sage/30">
            <h1 className="font-headline text-4xl font-bold text-botanical-shadow mb-3">Acerca del Proyecto</h1>
            <p className="text-botanical-earth/80">
              <span className="font-semibold">Resumen del proyecto:</span> El Herbario San Marcos (USM) del Museo de Historia Natural de la UNMSM es el más importante del país, tanto por el número de especímenes de flora peruana que conserva (más de 750,000), como por sus colecciones históricas y ejemplares Tipo, estos últimos asociados al descubrimiento y descripción de nuevas especies. En principio, cada uno de los especímenes se constituye en un testigo para la validación del trabajo científico, y el acceso a estas colecciones y su información asociada, es de suma importancia en estudios de diversidad a diferentes niveles, así como estudios ecológicos y ambientales con impacto en la ciencia, la cultura y la economía. El proyecto de digitalización y creación de una plataforma informática integrará imágenes de alta calidad, valiosa metadata asociada a los especímenes, particularmente geográfica (ubicación en mapa), y estará diseñada para recibir información citológica, de secuencias de ADN, literatura, etc. El objetivo es hacer accesible a todos los científicos, estudiantes y público en general la información contenida en el Herbario USM, así como el código para promover las prácticas open source en los centros de colecciones científicas del Perú, colocando a la UNMSM como líder de la investigación botánica y nuevas tecnologías. Para efectos del presente proyecto, se digitalizarán inicialmente los 1500 especímenes Tipo y las colecciones históricas, como la de Antonio Raimondi, Augusto Weberbauer y Ramón Ferreyra, entre otros.  La colección histórica consta de 8000 ejemplares. Se integrarán técnicas modernas de indización basadas en inteligencia artificial, para facilitar la búsqueda de información de especímenes, así como para la integración con otras plataformas abiertas y técnicas de visualización, como geovisores; y de localización, como las basadas en imágenes satelitales. Asimismo, iniciaremos la extracción de ADN de muestras herborizadas y consecuente codificación de barras. El laboratorio de Genómica y Bioinformática para la Biodiversidad de la FCCBB, acaba de adquirir un computador de alta performance con fondos de PROCIENCIA que será puesto a disposición para el presente proyecto. Así, el primer despliegue de esta plataforma será realizado en el servidor RAIMONDI, de la Facultad de Ciencias Biológicas, a forma de prototipo funcional.
              <br /><br />
              Este proyecto propone el primer hito de virtualización del Herbario USM, considerando las especies de importancia nomenclatural, histórica y cultural. Así, proponemos digitalizar y realizar la conservación preventiva de 8000 especímenes de plantas históricas, y 1500 muestras de la colección Tipo que incluyen los ejemplares originales a partir de los cuales se realizan las descripciones de las nuevas especies para la ciencia.
            </p>
          </div>
        </section>

        {/* El Proyecto */}
        <section className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] gap-6 items-stretch">
            <div className="card-botanical p-6 flex items-start gap-3">
              <div className="rounded-xl bg-botanical-leaf/10 p-3">
                <Info className="w-6 h-6 text-botanical-leaf" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-botanical-shadow mb-2">El Proyecto</h2>
                <p className="text-botanical-earth/80">
                  <span className="font-semibold">Problema:</span> El acceso a las colecciones de herbarios es clave para la investigación, pero está limitado por barreras físicas y económicas. Los especímenes son vulnerables a daños y degradación, poniendo en riesgo información invaluable.
                </p>
              </div>
            </div>
            <div className="card-botanical p-6 flex flex-col md:flex-row gap-6 h-full">
              <div className="md:w-1/2">
                <h3 className="font-headline text-xl font-bold text-botanical-shadow mb-3">Justificación e Impacto</h3>
                <p className="text-botanical-earth/80 leading-relaxed">
                  Digitalizamos el Herbario USM para democratizar el acceso, preservar para futuras generaciones y potenciar la investigación científica, la educación y la economía del Perú.
                </p>
              </div>
              <div className="md:w-1/2 h-48 md:h-auto">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/Museo.png"
                    alt="Museo de Historia Natural"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* El Herbario USM */}
        <section className="mb-10">
          <div className="card-botanical p-6 flex items-start gap-3">
            <div className="rounded-xl bg-botanical-amber/10 p-3">
              <Landmark className="w-6 h-6 text-botanical-amber" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-botanical-shadow mb-2">El Herbario USM</h2>
              <p className="text-botanical-earth/80">
                Fundado en la década de 1940, el Herbario San Marcos (USM) es el más grande del Perú, con más de 750,000 especímenes. Alberga colecciones históricas de valor incalculable como las de Antonio Raimondi y Augusto Weberbauer.
              </p>
            </div>
          </div>
        </section>

        {/* Objetivos */}
        <section className="mb-12">
          <h2 className="font-headline text-3xl font-bold text-botanical-shadow mb-6">Objetivos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-botanical hover-lift p-6 text-center">
              <div className="mb-3 flex justify-center"><Target className="w-8 h-8 text-botanical-leaf" /></div>
              <h3 className="font-semibold text-botanical-shadow mb-2">Objetivo General</h3>
              <p className="text-botanical-earth/80 text-sm">Prototipo funcional de la plataforma digital del Herbario USM.</p>
            </div>
            <div className="card-botanical hover-lift p-6 text-center">
              <div className="mb-3 flex justify-center"><BookOpenText className="w-8 h-8 text-botanical-amber" /></div>
              <h3 className="font-semibold text-botanical-shadow mb-2">Digitalización</h3>
              <p className="text-botanical-earth/80 text-sm">1,500 especímenes Tipo y 8,000 colecciones históricas.</p>
            </div>
            <div className="card-botanical hover-lift p-6 text-center">
              <div className="mb-3 flex justify-center"><Target className="w-8 h-8 text-botanical-moss" /></div>
              <h3 className="font-semibold text-botanical-shadow mb-2">ADN de Barras</h3>
              <p className="text-botanical-earth/80 text-sm">Poner a punto técnicas de códigos de barras de ADN.</p>
            </div>
            <div className="card-botanical hover-lift p-6 text-center">
              <div className="mb-3 flex justify-center"><Rocket className="w-8 h-8 text-botanical-sage" /></div>
              <h3 className="font-semibold text-botanical-shadow mb-2">Despliegue</h3>
              <p className="text-botanical-earth/80 text-sm">Publicar la plataforma para el acceso abierto al público.</p>
            </div>
          </div>
        </section>

        {/* Nuestro Equipo */}
        <section className="mb-12">
          <h2 className="font-headline text-3xl font-bold text-botanical-shadow mb-6">Nuestro Equipo</h2>
          <TeamGrid />
        </section>

        {/* Colaboradores */}
        <section>
          <div className="card-botanical p-6">
            <h2 className="font-headline text-3xl font-bold text-botanical-shadow mb-3">Colaboradores</h2>
            <p className="text-botanical-earth/80">
              Contamos con la invaluable colaboración de expertos internacionales y la prestigiosa <span className="font-semibold">Universidad de Yale</span>.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

function TeamGrid() {
  const team: TeamMember[] = [
    {
      name: "Orjeda Fernández Maria Gisella",
      role: "Investigadora principal",
      faculty: "Facultad: Ciencias Biológicas",
      laboratorio: "Laboratorio de Genómica y Bioinformática para la Biodiversidad",
      especialidad: "Genética",
      imageUrl: "/images/integrantes/Gisella Orjeda.jpeg",
      externalLink: "https://dina.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=157",
    },
    {
      name: "Arakaki Makishi Monica",
      role: "Investigadora principal",
      faculty: "Facultad: Ciencias Biológicas",
      imageUrl: "/images/integrantes/ARAKAKI MAKISHI.jpeg",
      externalLink: "https://dina.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=3852",
    },
    {
      name: "Alban Castillo Joaquina Adelaida",
      role: "Investigadora principal",
      faculty: "Facultad: Ciencias Biológicas",
      imageUrl: "/images/integrantes/ALBAN CASTILLO.jpeg",
      externalLink: "https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=2366",
    },
    {
      name: "Millan Salazar Betty Gaby",
      role: "Investigadora principal",
      faculty: "Facultad: Ciencias Biológicas",
      imageUrl: "/images/integrantes/MILLAN SALAZAR.jpeg",
      externalLink: "https://dina.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=75",
    },
    {
      name: "Herrera Quispe Jose Alfredo",
      role: "Investigador principal",
      faculty: "Facultad: Ingeniería de Sistemas e Informática",
      imageUrl: "/images/integrantes/Jose Herrera.jpeg",
      externalLink: "https://dina.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=19",
    },
    {
      name: "Gabriel Campos Edwin Natividad",
      role: "Investigador principal",
      faculty: "Facultad: Ciencias Sociales",
      imageUrl: "/images/integrantes/GABRIEL CAMPOS.jpeg",
      externalLink: "https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=24538",
    },
    {
      name: "Leon Bocangel de Young Blanca Rosa",
      role: "Investigadora principal",
      faculty: "Facultad: Ciencias Biológicas",
      imageUrl: "/images/integrantes/Blanca Leon.jpeg",
      externalLink: "https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=3855",
    },
    {
      name: "Cano Echevarria Asuncion Alipio",
      role: "Investigador principal",
      faculty: "Facultad: Ciencias Biológicas",
      imageUrl: "/images/integrantes/Cano Echevarria.jpeg",
      externalLink: "https://dina.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=2953",
    },
    {
      name: "Quispe Huallpa Jhampier Edison",
      role: "Tesista",
      faculty: "Facultad: Ingeniería de Sistemas e Informática",
      imageUrl: "/images/integrantes/Jhampier Quispe.jpeg",
    },
  ];

  // Separar investigadores y tesistas
  const investigadores = team.filter((m) => m.role.toLowerCase().includes("investigador"));
  const tesistas = team.filter((m) => m.role.toLowerCase() === "tesista");

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold text-botanical-shadow mb-4">Investigadores</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {investigadores.map((member) => (
            <div key={member.name}>
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-botanical-shadow mb-4">Tesistas</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tesistas.map((member) => (
            <div key={member.name}>
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
