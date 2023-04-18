import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {

	const [isOpen, setIsOpen] = useState(false);

	const handleMenu = () => {
		setIsOpen(!isOpen);
	}

	const handleCloseMenu = (event) => {
		if (!event.target.closest('.float-menu')) {
			setIsOpen(false);
		}
	};

	React.useEffect(() => {
		document.addEventListener('mousedown', handleCloseMenu);
		return () => {
			document.removeEventListener('mousedown', handleCloseMenu);
		};
	});

	return (
		<>
			<div id="grid-decoration">
				<div className="absolute inset-x-0 top-0 h-96 rotate-180 text-gray-500/20 opacity-40 [mask-image:linear-gradient(to_bottom,transparent,white)]">
					<svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
						<defs>
							<pattern id="grid-pattern" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%"
								patternTransform="translate(0 -1)">
								<path d="M0 32V.5H32" fill="none" stroke="#4c4c4c"></path>
							</pattern>
						</defs>
						<rect width="100%" height="100%" fill="url(#grid-pattern)" ></rect>
					</svg>
				</div>
			</div>

			<header className="flex relative md:mb-32 items-center justify-between max-md:block mb-20 header-animation">
				<div className="flex w-full justify-between mx-2 lg:w-56">
					<Link to={"/"}><img src="/images/logo.png" className="w-48 max-md:m-auto max-md:mb-8 home cursor-pointer" /></Link>

					<div className="pointer-events-auto lg:hidden flex max-md:block" data-headlessui-state="open">
						<button
							className="max-md:mx-auto group flex rounded-full bg-gray-hover px-4 py-2 text-sm font-medium shadow-lg ring-1 ring-white/10 text-white"
							id="menu-button" type="button" aria-expanded="true" data-headlessui-state="open"
							aria-controls="headlessui-popover-panel-:Rqb6H1:" onClick={handleMenu}>Menu
							<svg viewBox="0 0 8 6" aria-hidden="true"
								className="ml-3 mt-2 w-2 stroke-white">
								<path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" strokeWidth="1.5" strokeLinecap="round"
									strokeLinejoin="round">
								</path>
							</svg>
						</button>

						{isOpen && (
							<>
								<div>
									<div className="fixed inset-0 z-50 backdrop-blur-sm bg-black-900/80 opacity-100"
										aria-hidden="true" data-headlessui-state="open"></div>
									<div className="fixed float-menu inset-x-16 top-8 z-50 origin-top rounded-3xl bg-black-800 p-8"
										id="menu-box" tabIndex="-1" data-headlessui-state="open">
										<div className="flex flex-row-reverse items-center justify-between">
											<button aria-label="Close menu"
												className="-m-1 p-1" type="button" data-headlessui-state="open" tabIndex="0"><svg viewBox="0 0 24 24"
													aria-hidden="true" className="h-6 w-6 text-white" onClick={handleMenu}>
													<path d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5" fill="none" stroke="currentColor"
														strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
												</svg></button>
											<h2 className="text-sm font-medium text-white">Menú de navegación</h2>
										</div>
										<nav className="mt-9">
											<ul className="-my-2 divide-y divide-black-700 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
												<li>
													<Link to="/" onClick={handleMenu} className="block py-3 text-white font-normal cursor-pointer about" data-headlessui-state="open">
														Inicio
													</Link>
												</li>
												<li>
													<Link to="/about" onClick={handleMenu} className="block py-3 text-white font-normal cursor-pointer about" data-headlessui-state="open">
														Sobre mí
													</Link>
												</li>
												{/*<li>
													<Link to="/articles" onClick={handleMenu} className="block py-3 text-white font-normal cursor-pointer articles" data-headlessui-state="open">
														Artículos
													</Link>
												</li>*/}
												<li>
													<Link to="/projects" onClick={handleMenu} className="block py-3 text-white font-normal cursor-pointer" data-headlessui-state="open">
														Proyectos
													</Link>
												</li>
												<li>
													<Link to="/uses" onClick={handleMenu} className="block py-3 text-white font-normal text-center border-white border-1 rounded-lg cursor-pointer mt-9" data-headlessui-state="open">
														Hablemos
													</Link>
												</li>
											</ul>
										</nav>
									</div>
								</div>
							</>
						)}
					</div>
				</div>


				<div className="flex-auto max-lg:hidden">
					<nav className="flex-auto">
						<ul className="flex items-center justify-end">
							<li className="ml-12 text-white font-medium cursor-pointer home md:hidden xl:block">
								<Link to="/" className="home-link">
									Inicio
								</Link>
							</li>
							<li className="ml-12 text-white font-medium cursor-pointer about">
								<Link to="/about" className="home-link">
									Sobre mí
								</Link>
							</li>
							{/*<li className="ml-12 text-white font-medium cursor-pointer articles">
								<Link to="/articles" className="home-link">
									Artículos
								</Link>
							</li>*/}
							<li className="ml-12 text-white font-medium cursor-pointer">
								<Link to="/projects" className="home-link">
									Proyectos
								</Link>
							</li>
							<li className="ml-12 text-white font-medium px-10 py-2 bg-black-700 border-black-600 border-1 rounded-lg cursor-pointer">
								<Link to="/uses" className="home-link">
									Hablemos
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	)
}
