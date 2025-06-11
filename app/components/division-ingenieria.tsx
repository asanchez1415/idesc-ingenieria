import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import IdescIcon from '@/public/images/idesc-icon';

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
              src="/images/division-ingenieria/Division-Ingenieria.webp"
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
        className="bg-white"
        style={{ minHeight: '60vh', display: 'flex', alignItems: 'stretch' }}
      >
        <div className="w-full flex flex-col lg:flex-row items-stretch">
          {/* Imagen vertical a la izquierda con triángulo negro en la esquina superior derecha */}
          <div className="relative lg:h-auto w-full lg:w-[45vw] min-h-[300px]">
            <img
              src="/images/division-ingenieria/Por-Que-Elegir-IDESC.webp"
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
                <polygon points="100,0 100,100 0,0" fill="white" />
              </svg>
            </div>
          </div>

          {/* Contenido a la derecha */}
          <div
            ref={containerRefRight}
            className="flex-1 flex flex-col justify-center px-6 py-16 lg:py-0 lg:px-16 relative"
            style={{ background: 'var(--color-white)' }}
          >
            {/* Logo de fondo en la esquina inferior derecha */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.3 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1 }}
              className="absolute bottom-0 right-0 pointer-events-none z-0"
              style={{ width: '320px', height: '320px' }}
            >
              <IdescIcon color="#7A7A7A" width="100%" height="100%" />
            </motion.div>

            <motion.div
              style={{ translateX: paragraphRight }}
              className="max-w-xl mx-auto w-full relative z-10"
            >
              <h2 className="text-[2.6rem] font-bold mb-8 text-black font-heading">
                ¿Por qué elegir IDESC?
              </h2>
              <p className="text-lg text-black leading-relaxed font-body mb-8 border-l-[3px] border-black pl-6">
                Nuestros diversos proyectos en la industria son nuestro activo
                más valioso. Nos dedicamos al{' '}
                <b className="text-black font-extrabold">100%</b> al desarrollo
                y ejecución de los mismos de manera flexible, adaptándonos a los
                requerimientos para cumplir con los plazos establecidos y los
                estándares de calidad. Trabajamos en equipo con las áreas de{' '}
                <b className="text-black font-extrabold">riesgo</b>,{' '}
                <b className="text-black font-extrabold">calidad</b>,{' '}
                <b className="text-black font-extrabold">recursos humanos</b> y{' '}
                <b className="text-black font-extrabold">medio ambiente</b>.
              </p>
              <div>
                <Link href="/empresa">
                  <Button
                    className={`bg-black text-white transition-all duration-700 }`}
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
