import React, { useEffect } from 'react'
import { MainProjects } from '../components/projects/MainProjects'
import { OtherProjects } from '../components/projects/OtherProjects'

export const Projects = () => {

	useEffect(() => {
		document.title = "Proyectos - Ingeniero en sistemas y desarrollador front-end";
	}, []);

	return (
		<div>
			<div className="max-w-2xl mb-20">
				<h1 className="text-5xl font-bold tracking-tight text-white  line-hight-fixed">
					Proyectos que me han llevado más allá de lo conocido
				</h1>
				<p className="mt-6 text-base text-black-300">
					Aquí encontrarás una lista de mis creaciones y proyectos más importantes.
					He seleccionado estos proyectos porque me han permitido poner mis habilidades
					y conocimientos en práctica y hacer una contribución real al mundo. Algunos de
					estos proyectos son personales, mientras que otros son proyectos en los que he
					trabajado en colaboración con otras personas.
				</p>
			</div>

			<div className="max-w-full mb-20">
				<ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 mb-16" id="projectList">
					<MainProjects />
				</ul>

				<hr className="w-96 text-black-700 max-md:w-40" />

				<h2 className="text-white font-medium text-lg mt-10">Otros proyectos realizados</h2>
				<ul role="list" className="mt-10 xl:block grid lg:grid-cols-2 grid-cols-1 gap-5" id="secondProjectList">
					<OtherProjects />
				</ul>
			</div>
		</div>
	)
}
