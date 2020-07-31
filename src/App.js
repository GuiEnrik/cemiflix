import React from 'react';
import Menu from './components/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{background: "#141414"}}>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Análise dos fatores contribuintes na proliferação de mosquito Aedes aegypti com uso de inteligência artificial Alunas: Bianca de Azevêdo Ribas, Cristiane de Andrade Coutinho e Iasmim Rodrigues Melo Orientador: José Matheus Lima Gomes da Silva Centro de Ensino Médio Integrado a Educação Profissional do Gama - CEMI."}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        category={dadosIniciais.categorias[2]}
      />
      <Carousel
        category={dadosIniciais.categorias[3]}
      />
      <Footer />
    </div>
  );
}

export default App;
