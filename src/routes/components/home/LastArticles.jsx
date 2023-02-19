import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const LastArticles = () => {

	const [articles, setArticles] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://sbz.ec.ivao.aero/articles');
			const data = await response.json();
			setArticles(data);
		};

		fetchData();
	}, []);

	return (
		<>
			{articles.slice(0, 3).map(article => (
				<article key={article.id} className="group relative flex flex-col items-start">
					<h2 className="text-base font-semibold tracking-tight text-white">
						<div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-gray-hover opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
						<Link to={`/articles/${article.link_articulo}`} aria-details={article.titulo_articulo} className='articleURL'>
							<span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
							<span className="relative z-10">{article.titulo_articulo}</span>
						</Link>
					</h2>
					<time className="relative z-10 order-first mb-3 flex items-center text-sm text-gray pl-3.5" dateTime={article.fecha_date}>
						<span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
							<span className="h-4 w-0.5 rounded-full bg-gray"></span>
						</span>{article.fecha_texto}
					</time>
					<p className="relative z-10 mt-2 text-sm text-gray">{article.resumen_articulo}</p>

					<div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500 text-green">Leer articulo
						<svg viewBox="2 3 9 9" aria-hidden="true" className="ml-1 h-5 w-4 stroke-green fill-none">
							<path d="M6.75 5.75 9.25 8l-2.5 2.25" >
							</path>
						</svg>
					</div>
				</article>
			))}
		</>
	)
}
