import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Jobs } from '../components/home/Jobs'
import { LastArticles } from '../components/home/LastArticles'
import { LastProjects } from '../components/home/lastProjects'
import { Studies } from '../components/home/Studies'

export const Home = () => {

	useEffect(() => {
		document.title = "Santiago Baron Zuleta - Ingeniero en sistemas y desarrollador full-stack";
	}, []);


	return (
		<div>
			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl text-center line-hight-fixed">Proyectos innovadores en mi portafolio web</h1>
				<p className="mt-12 mb-8  font-normal leading-7 text-black-300 text-center text-xl lg:mx-auto lg:max-w-3xl xl:text-2xl xl:leading-9">Hola 👋, te doy la bienvenida a mi portafolio web. Aquí encontrarás información sobre mí, mis proyectos, artículos y mucho más.</p>
				<div className="md:flex justify-center gap-x-6 mt-10 block">
					<Link to={"/about"} className="px-16 py-3 rounded-lg text-white border-black-600 border-1 w-full font-medium block md:flex md:w-auto mb-3 text-center transition-all hover:border-black-300">Sobre mí</Link>
					<Link to={"/projects"} className="px-16 py-3 text-white font-medium bg-black-700 border-black-600 block md:flex md:w-auto mb-3 text-center border-1 rounded-lg cursor-pointer transition-all hover:border-black-300">Ver proyectos</Link>
				</div>
			</div>

			<div className="mx-auto mt-16 max-w-5xl">
				<img alt="" src="/images/main-img.png" className="w-full object-cover" />
			</div>

			<hr className="text-gray opacity-30 w-1/2 m-auto mt-10" />

			<div className="mt-16 mb-10">
				<div className="text-center mb-14">
					<p className="text-sm font-bold uppercase tracking-widest text-white bg-gray-hover py-3 lg:w-1/2 m-auto rounded-lg md:m-auto md:px-0 mx-14 px-5">• Novedades recientes en el sitio web •</p>
					<h2 className=" font-bold tracking-tight text-black-200 text-4xl lg:text-4xl lg:mb-0 mb-10 lg:mt-6 mt-10">Explora mis últimas publicaciones</h2>
					<p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-black-300 lg:text-xl lg:leading-8">A continuación encontrarás mis últimos proyectos realizados, mis artículos e información profesional. </p>
				</div>
				<div className="grid grid-cols-2 gap-8 max-lg:block">
					<a href="https://espectrosoft.com/" target='_blank'>
						<img src="https://imgur.com/X9vOCEM.jpg" className="rounded-xl cursor-pointer hover:shadow-2xl hover:translate-x-0.5 hover:-translate-y-0.5 transition-all max-lg:mb-6" />
					</a>
					<a href="https://ec.ivao.aero" target='_blank'>
						<img src="https://imgur.com/h1PRtCG.jpg" className="rounded-xl cursor-pointer hover:shadow-2xl hover:translate-x-0.5 hover:-translate-y-0.5 transition-all max-lg:mb-6" />
					</a>
				</div>
			</div>

			<div className="mx-auto max-w-2xl lg:max-w-5xl">

				<div className="mt-10 mb-20 text-center">
					<div className="mt-5 grid lg:grid-cols-3 gap-4 grid-flow-row-dense lg:mt-10 lg:gap-6 grid-cols-1">
						<div className="flex bg-gray-hover shadow-xl py-6 rounded-lg lg:px-7 xl:px-10 px-10 w-full justify-start items-center hover:translate-x-0.5 hover:-translate-y-0.5 transition-all">
							<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="text-gray" viewBox="0 0 16 16">
								<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
							</svg>
							<div className="ml-7 text-left">
								<p className="text-lg text-left text-white font-medium">2 años</p>
								<h3 className="text-black-300 font-medium">Experiencia</h3>
							</div>
						</div>
						<div className="flex bg-gray-hover shadow-xl py-6 rounded-lg lg:px-7 xl:px-10 px-10 w-full justify-start items-center hover:translate-x-0.5 hover:-translate-y-0.5 transition-all">
							<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="text-gray" viewBox="0 0 16 16">
								<path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z" />
							</svg>
							<div className="xl:ml-7 ml-7 text-left lg:ml-5">
								<p className="text-lg text-left text-white font-medium">30 completados</p>
								<h3 className="text-black-300 font-medium">Proyectos</h3>
							</div>
						</div>
						<div className="flex bg-gray-hover shadow-xl py-6 rounded-lg lg:px-7 xl:px-10 px-10 w-full justify-start items-center hover:translate-x-0.5 hover:-translate-y-0.5 transition-all">
							<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="text-gray" viewBox="0 0 16 16">
								<path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
							</svg>
							<div className="xl:ml-7 ml-7 text-left lg:ml-5">
								<p className="text-lg text-left text-white font-medium">20 satisfechos</p>
								<h3 className="text-black-300 font-medium">Clientes</h3>
							</div>
						</div>
					</div>
				</div>

				<div className="mx-auto flex flex-wrap gap-6">

					<div className="rounded-2xl border border-black-700 p-6 lg:w-1/2 w-full lg:flex-shrink-1">
						<h2 className="flex text-sm font-semibold text-white">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="stroke-gray fill-gray" viewBox="0 0 16 16">
								<path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
							</svg><span className="ml-3">Educación</span></h2>

						<ul className="mt-6 space-y-4" id="studiesList">
							<li className="flex gap-4">
								<div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-black-700 ring-2 ring-stroke bg-gray-hover">
									<img src={"https://i.imgur.com/AOylUh2.png"} width="32" height="32" decoding="async" data-nimg="1" className="h-7 w-7" loading="lazy" />
								</div>
								<dl className="flex flex-auto flex-wrap gap-x-2">
									<dd className="w-full flex-none text-sm font-medium text-white">Técnico en programación</dd>
									<dd className="text-xs text-white">Servicio nacional de aprendizaje</dd>
									<dd className="ml-auto text-xs text-white" aria-label={`2018 until 2018`}>
										<time dateTime="2018"></time>
										<span aria-hidden="true">2018 — 2018</span>
										<time dateTime="2018"></time>
									</dd>
								</dl>
							</li>

							<li className="flex gap-4">
								<div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-black-700 ring-2 ring-stroke bg-gray-hover">
									<img src={"https://i.imgur.com/85vaCG3.png"} width="32" height="32" decoding="async" data-nimg="1" className="h-7 w-7" loading="lazy" />
								</div>
								<dl className="flex flex-auto flex-wrap gap-x-2">
									<dd className="w-full flex-none text-sm font-medium text-white">Diplomado de programación</dd>
									<dd className="text-xs text-white">Pontificia Universidad Javeriana</dd>
									<dd className="ml-auto text-xs text-white" aria-label={`2020 until 2021`}>
										<time dateTime="2020"></time>
										<span aria-hidden="true">2020 — 2021</span>
										<time dateTime="2021"></time>
									</dd>
								</dl>
							</li>

							<li className="flex gap-4">
								<div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-black-700 ring-2 ring-stroke bg-gray-hover">
									<img src={"https://i.imgur.com/pbhEi9T.png"} width="32" height="32" decoding="async" data-nimg="1" className="h-7 w-7" loading="lazy" />
								</div>
								<dl className="flex flex-auto flex-wrap gap-x-2">
									<dd className="w-full flex-none text-sm font-medium text-white">Ingeniería en sistemas</dd>
									<dd className="text-xs text-white">Universidad Distrital FJC</dd>
									<dd className="ml-auto text-xs text-white" aria-label={`2021 until Presente`}>
										<time dateTime="2021"></time>
										<span aria-hidden="true">2021 — Presente</span>
										<time dateTime="Presente"></time>
									</dd>
								</dl>
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

						<ul className="mt-6 space-y-4" id="jobsList">

							<li className="flex gap-4">
								<div
									className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-black-700 ring-2 ring-stroke bg-gray-hover">
									<img src={"https://i.imgur.com/bJgE8KV.png"} width="32" height="32" decoding="async" data-nimg="1" className="h-7 w-7"
										loading="lazy" />
								</div>
								<dl className="flex flex-auto flex-wrap gap-x-2">
									<dd className="w-full flex-none text-sm font-medium text-white">IVAO Ecuador</dd>
									<dd className="text-xs text-white">Desarrollador Full-stack</dd>
									<dd className="ml-auto text-xs text-white" aria-label={`2020 until Present`}>
										<time dateTime="2020"></time>
										<span aria-hidden="true">2020 — 2023</span>
										<time dateTime="Presente"></time>
									</dd>
								</dl>
							</li>

							<li className="flex gap-4">
								<div
									className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-black-700 ring-2 ring-stroke bg-gray-hover">
									<img src={"https://imgur.com/ZIyZSrF.png"} width="32" height="32" decoding="async" data-nimg="1" className="h-7 w-7"
										loading="lazy" />
								</div>
								<dl className="flex flex-auto flex-wrap gap-x-2">
									<dd className="w-full flex-none text-sm font-medium text-white">Espectrosoft</dd>
									<dd className="text-xs text-white">Desarrollador Full-stack</dd>
									<dd className="ml-auto text-xs text-white" aria-label={`2023 until Present`}>
										<time dateTime="2023"></time>
										<span aria-hidden="true">2023 — Presente</span>
										<time dateTime="Presente"></time>
									</dd>
								</dl>
							</li>

						</ul>
						<a className="group inline-flex items-center gap-2 justify-center rounded-md py-3 px-3 text-sm outline-offset-2 transition active:transition-none bg-gray-hover font-medium text-black-200 hover:text-white hover:bg-black-700 mt-6 w-full"
							href="/docs/CV - Santiago Baron Zuleta (Español).pdf" target={'_blank'}>Mira mi hoja de vida (Español)
							<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"
								className="h-4 w-4 stroke-gray group-hover:stroke-white transition">
								<path d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5" strokeWidth={"1.5"}
									strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
						</a>
						<a className="group inline-flex items-center gap-2 justify-center rounded-md py-3 px-3 text-sm outline-offset-2 transition active:transition-none bg-gray-hover font-medium text-black-200 hover:text-white hover:bg-black-700 mt-3 w-full"
							href="/docs/CV - Santiago Baron Zuleta (English).pdf" target={'_blank'}>Watch my resume (English)
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
							<span className="ml-3">Tecnologías con nivel avanzado</span>
						</h2>
						<div>
							<ul className="flex flex-wrap gap-x-3 gap-y-3">
								<li className="text-sm px-4 py-2 rounded-lg text-white font-semibold tracking-tight bg-gray-hover">HTML5</li>
								<li className="text-sm px-4 py-2 rounded-lg text-white font-semibold tracking-tight bg-gray-hover">CSS3</li>
								<li className="text-sm px-4 py-2 rounded-lg text-white font-semibold tracking-tight bg-gray-hover">Javascript</li>
								<li className="text-sm px-4 py-2 rounded-lg text-white font-semibold tracking-tight bg-gray-hover">TypeScript</li>
								<li className="text-sm px-4 py-2 rounded-lg text-white font-semibold tracking-tight bg-gray-hover">NextJS</li>
								<li className="text-sm px-4 py-2 rounded-lg text-white font-semibold tracking-tight bg-gray-hover">NodeJS</li>
								<li className="text-sm px-4 py-2 rounded-lg text-white font-semibold tracking-tight bg-gray-hover">ExpressJS</li>
								<li className="text-sm px-4 py-2 rounded-lg text-white font-semibold tracking-tight bg-gray-hover">React</li>
								<li className="text-sm px-4 py-2 rounded-lg text-white font-semibold tracking-tight bg-gray-hover">MySQL</li>
								<li className="text-sm px-4 py-2 rounded-lg text-white font-semibold tracking-tight bg-gray-hover">PostgreSQL</li>
								<li className="text-sm px-4 py-2 rounded-lg text-white font-semibold tracking-tight bg-gray-hover">Tailwind CSS</li>
								<li className="text-sm px-4 py-2 rounded-lg text-white font-semibold tracking-tight bg-gray-hover">Git</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
