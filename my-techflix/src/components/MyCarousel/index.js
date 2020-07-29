import React from 'react';
import { MyVideoCardGroupContainer, MyVideoCardList, MyTitle, MyExtraLink } from './styles';
import MyVideoCard from './components/MyVideoCard';

function MyCarousel({ ignoreFirstVideo, category }) {
  
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;
  
  return (
    <MyVideoCardGroupContainer>
      {categoryTitle && (
        <>
          <MyTitle style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </MyTitle>
          {categoryExtraLink && 
            <MyExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}  
            </MyExtraLink>
          }
        </>
      )}
      <MyVideoCardList>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <li key={video.titulo}>
              <MyVideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </li>
          );
        })}
      </MyVideoCardList>
    </MyVideoCardGroupContainer>
  );
}

export default MyCarousel;
