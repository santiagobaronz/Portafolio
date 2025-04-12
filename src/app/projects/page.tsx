import { OtherProjects } from "@/components/projects/OtherProjects";

export const metadata = {
  title: "Proyectos - Santiago Baron Zuleta",
};

export default function Projects() {

  return (
    <div>
      <div className="max-w-2xl mb-16">
        <h1 className="text-5xl font-bold tracking-tight text-white line-hight-fixed">
          Proyectos desarrollados a lo largo del tiempo
        </h1>
        <p className="mt-6 text-base text-black-300">
          Aquí encontrarás una lista de mis creaciones y proyectos más importantes.
          He seleccionado estos proyectos porque me han permitido poner mis habilidades
          y conocimientos en práctica. Algunos de  estos proyectos son personales, mientras
          que otros son proyectos en los que he trabajado en colaboración con otras personas.
        </p>
      </div>

      <div className="max-w-full mb-20">
        <ul role="list" className="grid grid-cols-1 gap-x-16 px-5 gap-y-16 md:grid-cols-2 lg:grid-cols-3 mb-16" id="projectList">

          <li className="group relative flex flex-col items-start max-sm:p-2">
            <div
              className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black-700 shadow-md shadow-black-800/50 ring-1 ring-black-700">
              <img src="https://i.imgur.com/bJgE8KV.png" alt="IVAO Ecuador" width="32" height="32" decoding="async" data-nimg="1" className="h-8 w-8"
                loading="lazy" />
            </div>
            <h2 className="mt-6 text-base font-semibold text-white">
              <div
                className="absolute -inset-y-6 -inset-x-4 z-0 scale-100 bg-gray-hover transition-opacity duration-300 opacity-40 group-hover:opacity-100 sm:-inset-x-6 rounded-2xl">
              </div><a href="https://ec.ivao.aero/" target="blank"><span
                className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 rounded-2xl"></span><span
                  className="relative z-10">IVAO Ecuador</span></a>
            </h2>
            <p className="relative z-10 mt-2 text-sm text-black-300 max-sm:mr-3">Sitio web de la comunidad de simulación vuelo virtual en Ecuador</p>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 text-green">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none">
                <path
                  d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                  fill="currentColor"></path>
              </svg><span className="ml-2 text-green">Enlace de proyecto</span>
            </p>
          </li>

          <li className="group relative flex flex-col items-start max-sm:p-2">
            <div
              className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black-700 shadow-md shadow-black-800/50 ring-1 ring-black-700">
              <img src="https://raw.githubusercontent.com/santiagobaronz/mars-api/master/assets/icon.png" alt="MarsAPI" width="32" height="32" decoding="async" data-nimg="1" className="h-8 w-8"
                loading="lazy" />
            </div>
            <h2 className="mt-6 text-base font-semibold text-white">
              <div
                className="absolute -inset-y-6 -inset-x-4 z-0 scale-100 bg-gray-hover transition-opacity duration-300 opacity-40 group-hover:opacity-100 sm:-inset-x-6 rounded-2xl">
              </div><a href="https://mars.santiagobaron.com/" target="blank"><span
                className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 rounded-2xl"></span><span
                  className="relative z-10">MarsAPI</span></a>
            </h2>
            <p className="relative z-10 mt-2 text-sm text-black-300 max-sm:mr-3">Proyecto que integra la API de la NASA para buscar imágenes de Marte con los rovers.</p>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 text-green">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none">
                <path
                  d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                  fill="currentColor"></path>
              </svg><span className="ml-2 text-green">Enlace de proyecto</span>
            </p>
          </li>


        </ul>

        <hr className="w-96 text-black-700 max-md:w-40" />

        <h2 className="text-white font-medium text-lg mt-10">Otros proyectos realizados</h2>
        <ul role="list" className="mt-10 xl:block grid lg:grid-cols-2 grid-cols-1 gap-5" id="secondProjectList">
          <OtherProjects></OtherProjects>
        </ul>
      </div>
    </div>
  )
}
