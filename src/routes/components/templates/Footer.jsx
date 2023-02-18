import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
	return (
		<footer>
			<div className="border-t border-black-700 pt-10 mt-24">
				<div className="relative px-4 sm:px-8 lg:px-12">
					<div className="mx-auto max-w-2xl lg:max-w-5xl">
						<div className="flex flex-col items-center justify-between gap-6 sm:flex-row flex-wrap">
							<div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200 flex-wrap max-md:gap-x-14">
								<Link className="transition text-black-300 about" to={"/about"}>Sobre mi</Link>
								<Link className="transition text-black-300 articles" to={"/articles"}>Articulos</Link>
								<Link className="transition text-black-300">Proyectos</Link>
								<Link className="transition text-black-300" >Hablemos</Link>
							</div>
							<p className="text-sm text-gray">© 2023 Santiago Baron. Todos los derechos reservados.</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
