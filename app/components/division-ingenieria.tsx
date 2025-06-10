import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

export const DivisionIngenieria = () => {
  const containerRefLeft = useRef(null);
  const containerRefRight = useRef(null);

  const { scrollYProgress: scrollYProgressLeft } = useScroll({
    target: containerRefLeft,
    offset: ['start end', 'end end'],
  });

  const { scrollYProgress: scrollYProgressRight } = useScroll({
    target: containerRefRight,
    offset: ['start end', 'end end'],
  });

  const paragraphLeft = useTransform(
    scrollYProgressLeft,
    [0, 1],
    ['-100%', '0%']
  );
  const paragraphRight = useTransform(
    scrollYProgressRight,
    [0, 1],
    ['100%', '0%']
  );

  return (
    <>
      <section
        className="bg-gray-dark"
        style={{ minHeight: '60vh', display: 'flex', alignItems: 'stretch' }}
      >
        <div className="w-full flex flex-col lg:flex-row items-stretch">
          {/* Contenido a la izquierda */}
          <div
            ref={containerRefLeft}
            className="flex-1 flex flex-col justify-center px-6 py-16 lg:py-0 lg:px-16"
            style={{ background: 'var(--color-black)' }}
          >
            <motion.div
              style={{ translateX: paragraphLeft }}
              className="max-w-xl mx-auto w-full"
            >
              <h2 className="text-[2.6rem] font-bold mb-8 text-white font-heading">
                División Ingeniería
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed font-body mb-12 border-l-[3px] border-primary pl-6">
                Cada miembro de nuestra empresa trabaja con actitud, compromiso
                y pasión en el cumplimiento de sus responsabilidades, con el
                objetivo de que nuestros clientes y comunidades nos reconozcan
                como un pilar fundamental en la construcción de sus proyectos,
                creando un impacto positivo y un éxito duradero.
              </p>
            </motion.div>
          </div>

          {/* Imagen vertical a la izquierda con triángulo negro en la esquina superior derecha */}
          <div
            className="relative lg:h-auto w-full lg:w-[45vw] min-h-[300px]"
            ref={containerRefRight}
          >
            <img
              src="/images/img-idesc-principal-square.webp"
              alt="Trabajador de IDESC en sitio de construcción con excavadora Komatsu"
              className={`object-cover}`}
            ></img>
            {/* Triángulo negro en la esquina superior derecha */}
            <div
              className="absolute top-0 right-0 w-32 h-32 lg:w-48 lg:h-48"
              style={{ pointerEvents: 'none' }}
            >
              <svg
                viewBox="0 0 100 100"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
              >
                <polygon points="100,0 100,100 0,0" fill="#1A1A1A" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2 de Porqué elegir idesc -------------------------------- */}
      <section
        className="bg-gray-dark"
        style={{ minHeight: '60vh', display: 'flex', alignItems: 'stretch' }}
      >
        <div className="w-full flex flex-col lg:flex-row items-stretch">
          {/* Imagen vertical a la izquierda con triángulo negro en la esquina superior derecha */}
          <div className="relative lg:h-auto w-full lg:w-[45vw] min-h-[300px]">
            <img
              src="/images/img-idesc-principal-square.webp"
              alt="Trabajador de IDESC en sitio de construcción con excavadora Komatsu"
              className={`object-cover}`}
            ></img>
            {/* Triángulo negro en la esquina superior derecha */}
            <div
              className="absolute top-0 right-0 w-32 h-32 lg:w-48 lg:h-48"
              style={{ pointerEvents: 'none' }}
            >
              <svg
                viewBox="0 0 100 100"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
              >
                <polygon points="100,0 100,100 0,0" fill="#1A1A1A" />
              </svg>
            </div>
          </div>

          {/* Contenido a la derecha */}
          <div
            ref={containerRefRight}
            className="flex-1 flex flex-col justify-center px-6 py-16 lg:py-0 lg:px-16"
            style={{ background: 'var(--color-black)' }}
          >
            <motion.div
              style={{ translateX: paragraphRight }}
              className="max-w-xl mx-auto w-full"
            >
              <h2 className="text-[2.6rem] font-bold mb-8 text-white font-heading">
                ¿Por qué elegir IDESC?
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed font-body mb-8 border-l-[3px] border-primary pl-6">
                Nuestros diversos proyectos en la industria son nuestro activo
                más valioso. Nos dedicamos al{' '}
                <b className="text-primary">100%</b> al desarrollo y ejecución
                de los mismos de manera flexible, adaptándonos a los
                requerimientos para cumplir con los plazos establecidos y los
                estándares de calidad. Trabajamos en equipo con las áreas de{' '}
                <b className="text-primary">riesgo</b>,{' '}
                <b className="text-primary">calidad</b>,{' '}
                <b className="text-primary">recursos humanos</b> y{' '}
                <b className="text-primary">medio ambiente</b>.
              </p>
              <div>
                <Link href="/empresa">
                  <Button
                    className={`bg-primary text-black hover:bg-primary-dark transition-all duration-700 }`}
                  >
                    CONOCE MÁS SOBRE NOSOTROS
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
