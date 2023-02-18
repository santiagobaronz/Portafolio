import React, { useEffect, useState } from 'react'
import { getDate } from '../../helpers/getDate';

export const OtherProjects = () => {

	const [projects, setProjects] = useState([]);


	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://api.github.com/users/santiagobaronz/repos');
			const data = await response.json();
			const filteredData = data.filter(project => project.topics.includes('deployed') && project.homepage);
			filteredData.forEach(project => {
				project.homepage = project.homepage.replace(/^https?:\/\//, '');
			});
			setProjects(filteredData);
		};

		fetchData();
	}, []);

	return (
		<>
			{projects.map(project => (
				<li className="xl:flex xl:flex-wrap w-full bg-gray-hover xl:mb-4 rounded-xl items-center xl:h-20 h-auto xl:px-10 xl:py-0 px-10 py-10 hover:translate-x-0.5 hover:-translate-y-0.5 transition-all" key={project.id}>
					<div className="xl:w-[23%] w-full flex items-center mb-3 xl:mb-0">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="fill-black-300" viewBox="0 0 16 16">
							<path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
						</svg>
						<p className="font-normal text-md text-white ml-4">{project.name}</p>
					</div>
					<div className="xl:w-[27%] w-full xl:p-2 flex items-center mb-3 xl:mb-0">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="fill-black-500" viewBox="0 0 16 16">
							<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
						</svg>
						<p className="text-gray-600 text-sm text-black-300 ml-4 date-project">{getDate(project.created_at)}</p>
					</div>
					<div className="xl:w-[29%] w-full flex items-center xl:-m-4 mb-3 ">
						<a href={`https://${project.homepage}`} target="blank" className="relative z-10 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 text-green">
							<svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none">
								<path
									d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
									fill="currentColor">
								</path>
							</svg>
							<span className="ml-2 text-green url-project">{project.homepage}</span>
						</a>
					</div>
					<div className="xl:w-24 w-full flex items-center mb-3 xl:mb-0">
						<a href={project.svn_url} target="blank">
							<div className='xl:block flex items-center'>
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="fill-black-500" viewBox="0 0 16 16">
									<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
								</svg>
								<span className='xl:hidden text-black-300 ml-4'>Repositorio de Github</span>
							</div>
						</a>
					</div>
					<div className="flex items-center justify-end">
						<span className="w-full bg-[#32d49e43] rounded-lg px-7 text-center py-3 text-[#32d49e] text-sm font-semibold deployed">Activo</span>
					</div>
				</li>
			))}
		</>
	)
}
