import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura 
        </a>
        {' '}
        com <span className="text--red">❤</span> no CEMI by
        {' '}
        <a href="https://www.instagram.com/guienrik_s/">
        GuiEnrik
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
