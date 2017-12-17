import React, {Component} from 'react';
import acustica from '../images/invie-acustica.png';
import clasica from '../images/invie-classic.png';

class Guitarras extends Component {
  render() {
    return (
      <section id="guitarras" className="guitarras contenedor">
        <h2>Nuestras guitarras</h2>
        <div className="video-demo-contenedor">
            <div className="video-demo">
                <div className="video-responsive-contenedor">
                    <iframe className="video-responsive-src" width="560" height="315" src="https://www.youtube.com/embed/R1dW8M4EqYY" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
        </div>
        <article className="guitarra">
            <img className="derecha" src={acustica} width="350" alt="Guitarra Invie Acústica" />
            <div className="contenedor-guitarra-a">
                <h3 className="title-b">Invie Acústica</h3>
                <ol>
                    <li>Estilo vintage</li>
                    <li>Madera pura</li>
                    <li>Incluye estuche invisible de aluminio</li>
                </ol>
            </div>
        </article>
        <article className="guitarra b">
            <img className="izquierda" src={clasica} width="350" alt="Guitarra Invie Classic" />
            <div className="contenedor-guitarra-b">
                <h3 className="title-b">Invie Classic</h3>
                <ol>
                    <li>Estilo vintage</li>
                    <li>Liviana</li>
                    <li>Inicia tu camino como Rockstar</li>
                </ol>
            </div>
        </article>
      </section>
    )
  }
}

export default Guitarras;