import React, { useEffect, useState } from 'react';

export const LastProjects = () => {

	const [projects, setProjects] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://sbz.ec.ivao.aero/projects');
			const data = await response.json();
			setProjects(data);
		};

		fetchData();
	}, []);

	return (
		<>
			{projects.map(project => (
				<a key={project.id} href={project.link_proyecto} target='_blank'>
					<img src={project.img_proyecto} className="rounded-xl cursor-pointer hover:shadow-2xl hover:translate-x-0.5 hover:-translate-y-0.5 transition-all max-lg:mb-6" />
				</a>
			))}
		</>
	)
}