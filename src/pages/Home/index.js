import React, { useEffect, useState } from 'react';

import MyBannerMain from '../../components/MyBannerMain';
import MyCarousel from '../../components/MyCarousel';
import categoriesRepository from '../../respositories/categories';
import MyPageDefault from '../../components/MyPageDefault';

function Home() {

	const [ initialData, setInitialData ] = useState([]);

	useEffect(() => {

		categoriesRepository.getAllWithVideos()
			.then((categories) => {
				console.log(categories);
				setInitialData(categories);
			})
			.catch((err) => { console.log(err.message); })

	}, []);

	return (
		<MyPageDefault paddingAll={0} >
			{
				initialData.length === 0 ? ( <div>Loading...</div> ) : (

					initialData.map((category, index) => {
						
						if (index === 0) {

							return (
								<div key={category.id}>
									<MyBannerMain
										videoTitle={initialData[0].videos[0].title}
										url={initialData[0].videos[0].url}
										videoDescription="O que é Front-end?"
									/>
									<MyCarousel
										ignoreFirstVideo
										category={initialData[0]}
									/>
								</div>
							)
						
						} else {

							return  (
								<MyCarousel 
									key={category.id}
									category={category}
								/>
							)
						}						
					})
				)
			}			
		</MyPageDefault>
	);
}

export default Home;
