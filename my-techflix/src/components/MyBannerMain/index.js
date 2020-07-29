import React from 'react';
import MyVideoIframeResponsive from './components/MyVideoIframeResponsive';
import { MyBannerMainContainer, MyContentAreaContainer, MyWatchButton } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

export default function BannerMain({
  videoTitle,
  videoDescription,
  url,
}) {
  const youTubeID = getYouTubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  return (
    <MyBannerMainContainer backgroundImage={bgUrl}>
      <MyContentAreaContainer>
        <MyContentAreaContainer.Item>
          <MyContentAreaContainer.Title>
            {videoTitle}
          </MyContentAreaContainer.Title>

          <MyContentAreaContainer.Description>
            {videoDescription}
          </MyContentAreaContainer.Description>
        </MyContentAreaContainer.Item>

        <MyContentAreaContainer.Item>
          <MyVideoIframeResponsive
            youtubeID={youTubeID}
          />
          <MyWatchButton>
            Assistir
          </MyWatchButton>
        </MyContentAreaContainer.Item>
      </MyContentAreaContainer>
    </MyBannerMainContainer>
  );
}
