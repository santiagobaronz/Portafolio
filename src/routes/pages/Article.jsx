import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Article = () => {

	const { articleName } = useParams();

	const [article, setArticle] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`https://sbz.ec.ivao.aero/articles/${articleName}`);
			const data = await response.json();
			setArticle(data[0]);
		};

		fetchData();
	}, []);

	return (
		<div id="articleunitary">
			<div className="mx-auto max-w-2xl lg:max-w-5xl">
				<div className="xl:relative">
					<div className="mx-auto max-w-2xl">
						<article>
							<header className="flex flex-col">
								<h1 className="mt-6 text-5xl font-bold tracking-tight line-hight-fixed text-white mb-7"
									id="article_title">{article.titulo_articulo}
								</h1>
								<time dateTime="2022-09-05" className="order-first flex items-center text-base text-gray">
									<span className="h-4 w-0.5 rounded-full bg-gray"></span>
									<span className="ml-3" id="article_date">{article.fecha_texto} </span>
								</time>
							</header>
							<div className="mt-8 prose dark:prose-inverttext-base leading-8 articleText" id="article_content">
								<div dangerouslySetInnerHTML={{ __html: article.texto_articulo }}/>
							</div>
						</article>
					</div>
				</div>
			</div>
		</div>
	);
};
