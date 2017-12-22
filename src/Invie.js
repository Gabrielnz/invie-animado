import React, { Component } from 'react';
import './css/invie.css';
import Portada from './components/Portada';
import Guitarras from './components/Guitarras';
import Footer from './components/Footer';
import logoPortada from './images/invie.png';
import acustica from './images/invie-acustica.png';
import clasica from './images/invie-classic.png';

import cheet from 'cheet.js';

cheet('i n v i e', () => {
  console.log('Easter Egg!! :D');
});

cheet('g o b a c k', () => {
  console.log('Regresaste al estado inicial');
})

const data = {
  menu: 
  [
    {
      href: 'index.html',
      title: 'Home',
    },
    {
      href: '#guitarras',
      title: 'Guitarras',
    },
    {
      href: 'precios.html',
      title: 'Precios',
    }
  ],
  logoPortada: {
    src: logoPortada,
    alt: 'Invie logotipo'
  },
  guitarras: [
    {
      image: acustica,
      alt: 'Guitarra Invie Acústica',
      name: 'Invie Acústica',
      features: [
        'Estilo vintage',
        'Madera pura',
        'Incluye estuche invisible de aluminio',
      ]
    },
    {
      image: clasica,
      alt: 'Guitarra Invie Classic',
      name: 'Invie Classic',
      features: [
        'Estilo vintage',
        'Liviana',
        'Empieza tu camino como Rockstar',
      ]
    },
  ]
};


class Invie extends Component {
  render() {
    return (
      <section className="Invie">
        {/*Portada*/}
        <Portada menu={data.menu} logo={data.logoPortada} />
        {/*Guitarras*/}
        <Guitarras guitarras={data.guitarras} />
        {/*Footer*/}
        <Footer />
      </section>
    );
  }
}

export default Invie;
