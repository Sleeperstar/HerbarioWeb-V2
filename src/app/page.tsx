"use client";

import { useState, useEffect, type ChangeEvent } from "react";
import Image from "next/image";
import { Leaf, Search, Info, FileText, FlaskConical, Sparkles, Database, Users } from "lucide-react";
import { ImageCarousel } from "@/components/ui/ImageCarousel";

import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface Specimen {
  id_catalogo: string;
  nombre_cientifico: string;
  familia: string;
  colector: string;
  fecha_colecta: string;
  localidad: string;
  url_imagen: string;
}

function SpecimenCard({ specimen }: { specimen: Specimen }) {
  return (
    <Card className="group card-botanical hover-lift overflow-hidden border-0 shadow-md hover:shadow-2xl transition-all-smooth">
      <CardHeader className="p-0 relative">
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-botanical-shadow/20 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <Image
            src={specimen.url_imagen}
            alt={`Espécimen de ${specimen.nombre_cientifico}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint="plant specimen"
          />
          <div className="absolute top-3 right-3 z-20">
            <div className="bg-botanical-cream/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all-smooth transform translate-y-2 group-hover:translate-y-0">
              <Sparkles className="w-4 h-4 text-botanical-amber" />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-5 flex-grow bg-gradient-to-b from-card to-card/95">
        <CardTitle className="font-scientific text-lg mb-2 italic text-botanical-shadow group-hover:text-botanical-leaf transition-colors">
          {specimen.nombre_cientifico}
        </CardTitle>
        <div className="space-y-2">
          <CardDescription className="text-sm flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-botanical-moss rounded-full"></span>
            <span className="font-medium text-botanical-earth">Familia:</span> 
            <span className="text-foreground/80">{specimen.familia}</span>
          </CardDescription>
          <CardDescription className="text-sm flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-botanical-sage rounded-full"></span>
            <span className="font-medium text-botanical-earth">Colector:</span> 
            <span className="text-foreground/80">{specimen.colector}</span>
          </CardDescription>
          {specimen.fecha_colecta && (
            <CardDescription className="text-sm flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-botanical-amber rounded-full"></span>
              <span className="font-medium text-botanical-earth">Fecha:</span> 
              <span className="text-foreground/80">{specimen.fecha_colecta}</span>
            </CardDescription>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0 mt-auto">
        <div className="flex items-center justify-between w-full">
          <p className="text-xs text-muted-foreground font-mono bg-botanical-sage/10 px-3 py-1.5 rounded-full border border-botanical-sage/20">
            {specimen.id_catalogo}
          </p>
          <Button 
            variant="ghost" 
            size="sm" 
            className="opacity-0 group-hover:opacity-100 transition-all-smooth transform translate-x-2 group-hover:translate-x-0 text-botanical-leaf hover:text-botanical-shadow hover:bg-botanical-leaf/10"
          >
            Ver detalles
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default function Home() {
  const [allSpecimens, setAllSpecimens] = useState<Specimen[]>([]);
  const [filteredSpecimens, setFilteredSpecimens] = useState<Specimen[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/specimens.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Specimen[] = await response.json();
        // Mapear imágenes locales por índice: 1a.jpg, 2a.jpg, ..., 10a.jpg
        const mapped = data.map((s, i) => ({
          ...s,
          url_imagen: `/images/specimens/${i + 1}a.jpg`,
        }));
        setAllSpecimens(mapped);
        setFilteredSpecimens(mapped);
      } catch (e) {
        if (e instanceof Error) {
          setError(`Failed to load specimen data: ${e.message}`);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const results = allSpecimens.filter(
      (specimen) =>
        specimen.nombre_cientifico.toLowerCase().includes(lowercasedTerm) ||
        specimen.familia.toLowerCase().includes(lowercasedTerm) ||
        specimen.colector.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredSpecimens(results);
  }, [searchTerm, allSpecimens]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="min-h-screen bg-leaf-pattern">
      <Header />
      <main className="pt-0">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-botanical-gradient pt-20 lg:pt-24 min-h-[65vh] flex items-center">
          {/* Background Image Carousel */}
          <div className="absolute inset-0 z-0">
            <ImageCarousel 
              images={[
                '/images/landingimg/Landing_herbario.png',
                '/images/landingimg/flor-amancaes.png',
                '/images/landingimg/flor-azucena.png',
                '/images/landingimg/flor-mashua.png',
                '/images/landingimg/flor-papa.png'
              ]}
              currentIndex={currentSlide}
              onSlideChange={setCurrentSlide}
              interval={5000}
              className="object-cover h-full w-full"
              showDots={false}
            />
          </div>
          
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-botanical-cream/50 via-transparent to-botanical-sage/20 z-10"></div>
          
          {/* Content Container */}
          <div className="relative z-20 w-full">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="bg-black/35 backdrop-blur-sm md:backdrop-blur-md rounded-2xl border border-white/10 shadow-lg p-8 md:p-10 lg:p-12 -translate-y-4">
                  <h1 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold text-botanical-shadow mb-4 text-shadow leading-tight text-white text-center">
                    Del Perú hacia el mundo,{' '}
                    <span className="text-botanical-leaf block mt-2">más de 800 mil especímenes</span>
                  </h1>
                  <div className="h-px bg-white/20 my-6 w-3/4 mx-auto"></div>
                  <p className="text-base lg:text-lg text-white/90 mb-6 mx-auto leading-relaxed text-center">
                    Se embarca en un proyecto de digitalización para hacer accesible su invaluable
                    colección a investigadores, educadores y al público en general.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 mt-8">
                    <div className="flex items-center gap-2 bg-botanical-cream/80 backdrop-blur-sm px-4 py-2 rounded-full border border-botanical-sage/30">
                      <Database className="w-5 h-5 text-botanical-leaf" />
                      <span className="text-sm font-medium text-botanical-shadow">1,500 especímenes Tipo</span>
                    </div>
                    <div className="flex items-center gap-2 bg-botanical-cream/80 backdrop-blur-sm px-4 py-2 rounded-full border border-botanical-sage/30">
                      <Users className="w-5 h-5 text-botanical-leaf" />
                      <span className="text-sm font-medium text-botanical-shadow">8,000 colecciones históricas</span>
                    </div>
                  </div>
                  
                  {/* Carousel Dots */}
                  <div className="mt-8 flex justify-center space-x-3">
                    {[0, 1, 2, 3, 4].map((index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-3 w-3 rounded-full transition-all duration-300 relative ${
                          index === currentSlide 
                            ? 'bg-white scale-125' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Ir a la imagen ${index + 1}`}
                        aria-current={index === currentSlide ? 'true' : 'false'}
                      >
                        <span className="sr-only">Ir a la imagen {index + 1}</span>
                        {index === currentSlide && (
                          <span className="absolute inset-0 rounded-full bg-white/30 animate-ping"></span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10"></div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl lg:text-4xl font-bold text-botanical-shadow mb-4">
                Descubre la Biodiversidad Peruana
              </h2>
              <p className="text-botanical-earth/70 max-w-2xl mx-auto">
                Explora siglos de investigación botánica a través de nuestra plataforma digital
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group card-botanical hover-lift p-8 text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-botanical-leaf/10 rounded-full blur-lg group-hover:blur-xl transition-all-smooth"></div>
                  <Search className="w-14 h-14 text-botanical-leaf mx-auto relative z-10 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-headline text-xl font-bold text-botanical-shadow mb-3 group-hover:text-botanical-leaf transition-colors">
                  Explora la Colección
                </h3>
                <p className="text-botanical-earth/70 leading-relaxed">
                  Accede directamente a la base de datos con nuestra búsqueda
                  avanzada y filtros especializados.
                </p>
              </div>
              <div className="group card-botanical hover-lift p-8 text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-botanical-amber/10 rounded-full blur-lg group-hover:blur-xl transition-all-smooth"></div>
                  <FileText className="w-14 h-14 text-botanical-amber mx-auto relative z-10 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-headline text-xl font-bold text-botanical-shadow mb-3 group-hover:text-botanical-amber transition-colors">
                  Colecciones Históricas
                </h3>
                <p className="text-botanical-earth/70 leading-relaxed">
                  Descubre el legado de colectores como Antonio Raimondi y Augusto
                  Weberbauer.
                </p>
              </div>
              <div className="group card-botanical hover-lift p-8 text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-botanical-moss/10 rounded-full blur-lg group-hover:blur-xl transition-all-smooth"></div>
                  <FlaskConical className="w-14 h-14 text-botanical-moss mx-auto relative z-10 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-headline text-xl font-bold text-botanical-shadow mb-3 group-hover:text-botanical-moss transition-colors">
                  Códigos de Barras de ADN
                </h3>
                <p className="text-botanical-earth/70 leading-relaxed">
                  Explora nuestro innovador trabajo en la identificación molecular
                  de especies.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        
        {/* News Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="card-botanical p-12 text-center">
              <div className="mb-6">
                <Sparkles className="w-12 h-12 text-botanical-amber mx-auto mb-4" />
              </div>
              <h2 className="font-headline text-3xl font-bold text-botanical-shadow mb-4">
                Noticias y Avances
              </h2>
              <p className="text-botanical-earth/70 text-lg">
                Próximamente: ¡Las últimas noticias y descubrimientos del proyecto de digitalización!
              </p>
              <div className="mt-8">
                <Button className="bg-botanical-leaf hover:bg-botanical-shadow text-white px-8 py-3 rounded-full font-medium transition-all-smooth hover:scale-105">
                  Mantente Informado
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
