import React from 'react';

import { MyVideoContainer, MyResponsiveIframe } from './styles';

function MyYouTubeIframeResponsive({ youtubeID }) {
  return (
    <MyVideoContainer>
      <MyResponsiveIframe
        title="Titulo do Iframe"
        src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </MyVideoContainer>
  );
}

export default MyYouTubeIframeResponsive;
