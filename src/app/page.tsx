'use client'

import { Link } from "next-view-transitions";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Santiago Baron Zuleta - Software Developer";
  }, []);

  return (
    <div>

      <div>
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <div className="grid grid-cols-2 gap-y-16 max-lg:grid-cols-1">
            <div>
              <h1 className="sm:text-5xl text-4xl font-bold tracking-tight text-white line-hight-fixed">
                Soy Santiago Baron, me gusta programar y tomar <Link href="/gallery" className="animate-pulse duration-1000 transition-all">fotografías</Link>.
              </h1>
              <div className="mt-8 space-y-7 text-base text-black-300 leading-7">
                <p>Soy un desarrollador de software, nacido y residente en Bogotá, Colombia. Desde muy temprana
                  edad descubrí una fuerte afinidad por la tecnología, lo que me llevó a explorar el mundo de la programación. Esta pasión
                  me motivó a profundizar en el área académica, razón por la cual actualmente curso octavo
                  semestre de Ingeniería en Sistemas en la Universidad Distrital Francisco José de Caldas.</p>
                <p>A lo largo de estos años, impulsado por mis constantes ganas de seguir aprendiendo, he combinado mi formación académica
                  con experiencia práctica en proyectos reales, lo que me ha permitido crecer rápidamente en el campo profesional. Hoy en día
                  formo parte del equipo de tecnología de Mercado Libre, una de las compañías de comercio electrónico más relevantes de la
                  región, donde contribuyo al desarrollo de soluciones de alto impacto.</p>
                <p>Cuento con más de tres años de experiencia en el desarrollo de aplicaciones web, especializándome en la lógica del lado
                  del servidor y en la construcción de sistemas escalables y mantenibles. Tengo experiencia aplicando principios de diseño
                  limpio, patrones de arquitectura, así como prácticas de observabilidad mediante herramientas de monitoreo, y trazabilidad,
                  fundamentales para garantizar la estabilidad y el rendimiento de los sistemas en producción.
                </p>
              </div>
            </div>
            <div className="pl-20 max-lg:order-first max-lg:pl-0">
              <div className="px-2.5 lg:max-w-none">
                <img src="/santiago.jpg" alt="Santiago Baron Zuleta" width="400" height="400" decoding="async" data-nimg="1" loading="eager"
                  className="aspect-square rotate-3 rounded-2xl object-cover max-lg:block max-lg:m-auto" />
                <ul className="mt-14 p-10 border border-black-700 rounded-xl max-lg:hidden">
                  <p className="text-white font-medium pb-9">Mis redes sociales:</p>
                  <li className="flex">
                    <a className="group flex text-sm font-medium text-black-200 transition hover:text-white" target='_blank' href="https://twitter.com/santiagobaronz">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-black-400 transition group-hover:fill-black-200">
                        <path
                          d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z">
                        </path>
                      </svg>
                      <span className="ml-4">Sígueme en Twitter</span>
                    </a>
                  </li>
                  <li className="mt-4 flex">
                    <a className="group flex text-sm font-medium text-black-200 transition hover:text-white" target='_blank' href="https://www.instagram.com/santiagobaronz/">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-black-400 transition group-hover:fill-black-200">
                        <path
                          d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z">
                        </path>
                        <path
                          d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z">
                        </path>
                      </svg>
                      <span className="ml-4">Sígueme en Instagram</span>
                    </a>
                  </li>
                  <li className="mt-4 flex">
                    <a className="group flex text-sm font-medium text-black-200 transition hover:text-white" target='_blank' href="https://github.com/santiagobaronz">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-black-400 transition group-hover:fill-black-200">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z">
                        </path>
                      </svg><span className="ml-4">Sígueme en GitHub</span>
                    </a>
                  </li>
                  <li className="mt-4 flex">
                    <a className="group flex text-sm font-medium text-black-200 transition hover:text-white" target='_blank' href="https://www.linkedin.com/in/santiagobaronz/">
                      <svg viewBox="0 0 24 24" className="h-6 w-6 flex-none fill-black-400 transition group-hover:fill-black-200">
                        <path
                          d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z">
                        </path>
                      </svg><span className="ml-4">Sígueme en LinkedIn</span>
                    </a>
                  </li>
                  <li className="mt-8 border-t border-black-700 pt-8 dark:border-zinc-700/40 flex">
                    <a className="group flex text-sm font-medium text-black-200 transition hover:text-white" target='_blank' href="mailto:santiagobazul@hotmail.com">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-black-400 transition group-hover:fill-black-200">
                        <path fillRule="evenodd"
                          d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z">
                        </path>
                      </svg>
                      <span className="ml-4">santiagobazul@hotmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <ul className="lg:mt-7 p-10 border border-black-700 rounded-xl max-lg:block lg:hidden">
              <p className="text-white font-medium pb-9">Mis redes sociales:</p>
              <li className="flex">
                <a className="group flex text-sm font-medium text-black-200 transition hover:text-white" target='_blank' href="https://twitter.com/santiagobaronz">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-black-400 transition group-hover:fill-black-200">
                    <path
                      d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z">
                    </path>
                  </svg>
                  <span className="ml-4">Sígueme en Twitter</span>
                </a>
              </li>
              <li className="mt-4 flex">
                <a className="group flex text-sm font-medium text-black-200 transition hover:text-white" target='_blank' href="https://www.instagram.com/santiagobaronz/">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-black-400 transition group-hover:fill-black-200">
                    <path
                      d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z">
                    </path>
                    <path
                      d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z">
                    </path>
                  </svg>
                  <span className="ml-4">Sígueme en Instagram</span>
                </a>
              </li>
              <li className="mt-4 flex">
                <a className="group flex text-sm font-medium text-black-200 transition hover:text-white" target='_blank' href="https://github.com/santiagobaronz">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-black-400 transition group-hover:fill-black-200">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z">
                    </path>
                  </svg><span className="ml-4">Sígueme en GitHub</span>
                </a>
              </li>
              <li className="mt-4 flex">
                <a className="group flex text-sm font-medium text-black-200 transition hover:text-white" target='_blank' href="https://www.linkedin.com/in/santiagobaronz/">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 flex-none fill-black-400 transition group-hover:fill-black-200">
                    <path
                      d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z">
                    </path>
                  </svg><span className="ml-4">Sígueme en LinkedIn</span>
                </a>
              </li>
              <li className="mt-8 border-t border-black-700 pt-8 dark:border-zinc-700/40 flex">
                <a className="group flex text-sm font-medium text-black-200 transition hover:text-white" target='_blank' href="mailto:santiagobazul@hotmail.com">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-black-400 transition group-hover:fill-black-200">
                    <path fillRule="evenodd"
                      d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z">
                    </path>
                  </svg>
                  <span className="ml-4">santiagobazul@hotmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-10 mb-10 text-center">
            <div className="mt-5 grid lg:grid-cols-3 gap-4 grid-flow-row-dense lg:mt-10 lg:gap-6 grid-cols-1">
              <div className="flex bg-gray-hover shadow-xl py-6 rounded-lg lg:px-7 xl:px-10 px-10 w-full justify-start items-center hover:translate-x-0.5 hover:-translate-y-0.5 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="text-gray" viewBox="0 0 16 16">
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                </svg>
                <div className="ml-7 text-left">
                  <p className="text-lg text-left text-white font-medium">+3 años</p>
                  <h3 className="text-black-300 font-medium">Experiencia</h3>
                </div>
              </div>
              <div className="flex bg-gray-hover shadow-xl py-6 rounded-lg lg:px-7 xl:px-10 px-10 w-full justify-start items-center hover:translate-x-0.5 hover:-translate-y-0.5 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="text-gray" viewBox="0 0 16 16">
                  <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z" />
                </svg>
                <div className="xl:ml-7 ml-7 text-left lg:ml-5">
                  <p className="text-lg text-left text-white font-medium">+10 completados</p>
                  <h3 className="text-black-300 font-medium">Proyectos</h3>
                </div>
              </div>
              <div className="flex bg-gray-hover shadow-xl py-6 rounded-lg lg:px-7 xl:px-10 px-10 w-full justify-start items-center hover:translate-x-0.5 hover:-translate-y-0.5 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="text-gray" viewBox="0 0 16 16">
                  <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
                </svg>
                <div className="xl:ml-7 ml-7 text-left lg:ml-5">
                  <p className="text-lg text-left text-white font-medium">+285 estrellas</p>
                  <h3 className="text-black-300 font-medium">Github</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <div className="mx-auto flex flex-wrap gap-6">
          <div className="rounded-2xl border border-black-700 p-6 lg:w-1/2 w-full lg:flex-shrink-1">
            <h2 className="flex text-sm font-semibold text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="stroke-gray fill-gray" viewBox="0 0 16 16">
                <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
              </svg><span className="ml-3">Educación</span></h2>

            <ul className="mt-6 md:space-y-4 space-y-7" id="studiesList">

              <li className="flex gap-4">
                <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-black-700 ring-2 ring-stroke bg-gray-hover">
                  <img src={"https://i.imgur.com/pbhEi9T.png"} alt="Universidad Distrital Francisco José de Caldas" width="32" height="32" decoding="async" data-nimg="1" className="h-7 w-7" loading="lazy" />
                </div>
                <div className="flex flex-auto flex-wrap gap-x-2">
                  <p className="w-full flex-none text-sm font-medium text-white">Ingeniería en sistemas</p>
                  <div className="md:flex justify-between w-full">
                    <p className="text-xs text-white/60">Universidad Distrital FJC</p>
                    <p className="ml-auto text-xs text-white/60" aria-label={`2021 until now`}>
                      <time dateTime="2021"></time>
                      <span aria-hidden="true">2021 — Presente</span>
                      <time dateTime="Presente"></time>
                    </p>
                  </div>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-black-700 ring-2 ring-stroke bg-gray-hover">
                  <img src={"https://i.imgur.com/85vaCG3.png"} alt="Universidad Javeriana" width="32" height="32" decoding="async" data-nimg="1" className="h-7 w-7" loading="lazy" />
                </div>
                <div className="flex flex-auto flex-wrap gap-x-2">
                  <p className="w-full flex-none text-sm font-medium text-white">Diplomado de programación</p>
                  <div className="md:flex justify-between w-full">
                    <p className="text-xs text-white/60">Universidad Javeriana</p>
                    <p className="ml-auto text-xs text-white/60" aria-label={`2020 until 2021`}>
                      <time dateTime="2020"></time>
                      <span aria-hidden="true">2020 — 2021</span>
                      <time dateTime="2021"></time>
                    </p>
                  </div>

                </div>
              </li>

              <li className="flex gap-4">
                <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-black-700 ring-2 ring-stroke bg-gray-hover">
                  <img src={"https://i.imgur.com/AOylUh2.png"} alt="Servicio nacional de aprendizaje" width="32" height="32" decoding="async" data-nimg="1" className="h-7 w-7" loading="lazy" />
                </div>
                <div className="flex flex-auto flex-wrap gap-x-2">
                  <p className="w-full flex-none text-sm font-medium text-white">Técnico en programación</p>
                  <div className="md:flex justify-between w-full">
                    <p className="text-xs text-white/60">Servicio nacional de aprendizaje</p>
                    <p className="ml-auto text-xs text-white/60" aria-label={`2018 until 2019`}>
                      <time dateTime="2018"></time>
                      <span aria-hidden="true">2018 — 2020</span>
                      <time dateTime="2020"></time>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-black-700 p-6 lg:w-1/2 w-full lg:flex-shrink-1" style={{ flexBasis: '0', flexGrow: '1' }}>
            <h2 className="flex text-sm font-semibold text-white">
              <svg viewBox="0 0 24 24"
                fill="none" strokeWidth={"1.5"} strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true" className="h-6 w-6 flex-none">
                <path
                  d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                  className="fill-stroke stroke-black-600">
                </path>
                <path
                  d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                  className=" stroke-black-600"></path>
              </svg><span className="ml-3">Trabajos</span></h2>

            <ul className="mt-6 md:space-y-4 space-y-7" id="jobsList">

              <li className="flex gap-4">
                <div
                  className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-black-700 ring-2 ring-stroke bg-gray-hover">
                  <img src={"/meli.png"} alt="Mercado Libre Colombia" width="32" height="32" decoding="async" data-nimg="1" className="h-7 w-7"
                    loading="lazy" />
                </div>
                <div className="flex flex-auto flex-wrap gap-x-2">
                  <p className="w-full flex-none text-sm font-medium text-white">Mercado Libre Colombia</p>
                  <div className="md:flex justify-between w-full">
                    <p className="text-xs text-white/60">Software Developer - Java</p>
                    <p className="ml-auto text-xs text-white/60" aria-label={`2024 until present`}>
                      <time dateTime="2024"></time>
                      <span aria-hidden="true">2024 — Presente</span>
                      <time dateTime="Presente"></time>
                    </p>
                  </div>

                </div>
              </li>

              <li className="flex gap-4">
                <div
                  className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-black-700 ring-2 ring-stroke bg-gray-hover">
                  <img src={"https://espectrosoft.com/logos/minimal_logo.png"} alt="Espectrosoft" width="32" height="32" decoding="async" data-nimg="1" className="h-7 w-7"
                    loading="lazy" />
                </div>
                <div className="flex flex-auto flex-wrap gap-x-2">
                  <p className="w-full flex-none text-sm font-medium text-white">Espectrosoft</p>
                  <div className="md:flex justify-between w-full">
                    <p className="text-xs text-white/60">Software Developer - NodeJS</p>
                    <p className="ml-auto text-xs text-white/60" aria-label={`2022 until 2024`}>
                      <time dateTime="2022"></time>
                      <span aria-hidden="true">2022 — 2024</span>
                      <time dateTime="2024"></time>
                    </p>
                  </div>

                </div>
              </li>
            </ul>


            <a className="group inline-flex items-center gap-2 justify-center rounded-md py-3 px-3 text-sm outline-offset-2 transition active:transition-none bg-gray-hover font-medium text-black-200 hover:text-white hover:bg-black-700 mt-6 w-full"
              href="/CV - Santiago Baron Zuleta.pdf" target={'_blank'}>Mira mi hoja de vida (Inglés)
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"
                className="h-4 w-4 stroke-gray group-hover:stroke-white transition">
                <path d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5" strokeWidth={"1.5"}
                  strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </a>

          </div>

          <div className="rounded-2xl border border-black-700 p-6 w-full">
            <h2 className="flex text-sm font-semibold text-white mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className=" fill-gray" viewBox="0 0 16 16">
                <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z" />
              </svg>
              <span className="ml-3">Tecnologías</span>
            </h2>
            <div>
              <ul className="flex flex-wrap gap-x-3 gap-y-3">
                <li className="text-sm px-4 py-2 rounded-lg text-white font-semibold tracking-tight bg-gray-hover">TypeScript</li>
                <li className="text-sm px-4 py-2 rounded-lg text-white font-semibold tracking-tight bg-gray-hover">React</li>
                <li className="text-sm px-4 py-2 rounded-lg text-white font-semibold tracking-tight bg-gray-hover">NextJS</li>
                <li className="text-sm px-4 py-2 rounded-lg text-white font-semibold tracking-tight bg-gray-hover">Tailwind CSS</li>
                <li className="text-sm px-4 py-2 rounded-lg text-white font-semibold tracking-tight bg-gray-hover">NodeJS</li>
                <li className="text-sm px-4 py-2 rounded-lg text-white font-semibold tracking-tight bg-gray-hover">ExpressJS</li>
                <li className="text-sm px-4 py-2 rounded-lg text-white font-semibold tracking-tight bg-gray-hover">MySQL</li>
                <li className="text-sm px-4 py-2 rounded-lg text-white font-semibold tracking-tight bg-gray-hover">PostgreSQL</li>
                <li className="text-sm px-4 py-2 rounded-lg text-white font-semibold tracking-tight bg-gray-hover">SQL</li>
                <li className="text-sm px-4 py-2 rounded-lg text-white font-semibold tracking-tight bg-gray-hover">Git</li>
                <li className="text-sm px-4 py-2 rounded-lg text-white font-semibold tracking-tight bg-gray-hover">Github</li>
                <li className="text-sm px-4 py-2 rounded-lg text-white font-semibold tracking-tight bg-gray-hover">Java</li>
                <li className="text-sm px-4 py-2 rounded-lg text-white font-semibold tracking-tight bg-gray-hover">Spring Boot</li>
                <li className="text-sm px-4 py-2 rounded-lg text-white font-semibold tracking-tight bg-gray-hover">JUnit</li>
                <li className="text-sm px-4 py-2 rounded-lg text-white font-semibold tracking-tight bg-gray-hover">Mockito</li>
                <li className="text-sm px-4 py-2 rounded-lg text-white font-semibold tracking-tight bg-gray-hover">Datadog</li>
                <li className="text-sm px-4 py-2 rounded-lg text-white font-semibold tracking-tight bg-gray-hover">Kibana</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
