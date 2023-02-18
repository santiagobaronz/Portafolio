import React, { useEffect } from 'react'
import { ArticleList } from '../components/articles/ArticleList'

export const Articles = () => {

	useEffect(() => {
		document.title = "Articulos - Ingeniero en sistemas y desarrollador front-end";
	}, []);

	return (
		<div>
			<div className="max-w-2xl mb-20">
				<h1 className="text-5xl font-bold tracking-tight text-white  line-hight-fixed">
					Explorando el mundo del desarrollo: proyectos, ideas y aprendizajes.
				</h1>
				<p className="mt-6 text-base text-black-300">
					En esta página encontrarás una recopilación de artículos que he escrito sobre
					mis proyectos de programación, así como sobre los diferentes desafíos que he
					enfrentado a lo largo de mi carrera como desarrollador. Además, incluyo mis
					enfoques y perspectivas sobre el mundo de la tecnología y cómo está evolucionando.
				</p>
			</div>
			<div className="lg:border-l lg:border-black-700 lg:pl-6 ">
				<div className="flex max-w-3xl flex-col space-y-16" id="articleFullList">
					<ArticleList />
				</div>
			</div>
		</div>
	)
}
