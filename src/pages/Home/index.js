import React from 'react';

import MyMenu from '../../components/MyMenu';
import MyBannerMain from '../../components/MyBannerMain';
import MyCarousel from '../../components/MyCarousel';
import MyFooter from '../../components/MyFooter';
import dadosIniciais from '../../data/dados_iniciais.json';

function Home() {
  return (
    <div style={{ background: '#141414' }}>
      <MyMenu />
      <MyBannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área"}
      />
      <MyCarousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <MyCarousel
        category={dadosIniciais.categorias[1]}
      />
      <MyCarousel
        category={dadosIniciais.categorias[2]}
      />
      <MyCarousel
        category={dadosIniciais.categorias[3]}
      />
      <MyCarousel
        category={dadosIniciais.categorias[4]}
      />
      <MyCarousel
        category={dadosIniciais.categorias[5]}
      />
      <MyFooter

      />
    </div>
  );
}

export default Home;
