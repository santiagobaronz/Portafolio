import React, { useEffect, useState } from 'react'

export const Jobs = () => {

	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://sbz.ec.ivao.aero/jobs');
			const data = await response.json();
			setJobs(data);
		};

		fetchData();
	}, []);

	return (
		<>
			{jobs.map(jobs => (
				<li className="flex gap-4" key={jobs.id}>
					<div
						className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-black-700 ring-2 ring-stroke bg-gray-hover">
						<img src={jobs.logoTrabajo} width="32" height="32" decoding="async" data-nimg="1" className="h-7 w-7"
							loading="lazy" />
					</div>
					<dl className="flex flex-auto flex-wrap gap-x-2">
						<dd className="w-full flex-none text-sm font-medium text-white">{jobs.nombreTrabajo}</dd>
						<dd className="text-xs text-white">{jobs.cargoTrabajo}</dd>
						<dd className="ml-auto text-xs text-white" aria-label={`${jobs.fechaInicio} until ${jobs.fechaFinal}`}>
							<time dateTime={jobs.fechaInicio}></time>
							<span aria-hidden="true">{jobs.fechaInicio} — {jobs.fechaFinal}</span>
							<time dateTime={jobs.fechaFinal}></time>
						</dd>
					</dl>
				</li>
			))}
		</>
	)
}
