import React, { useEffect, useState } from 'react'

export const Studies = () => {

	const [studies, setStudies] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://sbz.ec.ivao.aero/studies');
			const data = await response.json();
			setStudies(data);
		};

		fetchData();
	}, []);

	return (
		<>
			{studies.map(grade => (
				<li className="flex gap-4" key={grade.id}>
					<div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-black-700 ring-2 ring-stroke bg-gray-hover">
						<img src={grade.logoInstitucion} width="32" height="32" decoding="async" data-nimg="1" className="h-7 w-7" loading="lazy" />
					</div>
					<dl className="flex flex-auto flex-wrap gap-x-2">
						<dd className="w-full flex-none text-sm font-medium text-white">{grade.titulo}</dd>
						<dd className="text-xs text-white">{grade.nombreInstitucion}</dd>
						<dd className="ml-auto text-xs text-white" aria-label={`${grade.fechaInicio} until ${grade.fechaFinal}`}>
							<time dateTime={grade.fechaInicio}></time>
							<span aria-hidden="true">{grade.fechaInicio} — {grade.fechaFinal}</span>
							<time dateTime={grade.fechaFinal}></time>
						</dd>
					</dl>
				</li>
			))}
		</>
	)
}
