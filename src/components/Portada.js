import React, {Component} from 'react';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-addons-css-transition-group';

function mapStateToProps(state) {
    return {
        logo: state.logoPortada,
        menu: state.menu,
        isAnimated: state.isAnimated,
    }
}

class Portada extends Component {
  render() {
    return (
      <section id="portada" className="portada background">
        <header id="header" className="header contenedor">
            <figure className="logotipo">
                <img src={this.props.logo.src} width="186" height="60" alt={this.props.logo.alt} />
            </figure>
            <span id="burguer-button" className="burguer-button icon-menu"></span>
            <nav id="menu" className="menu">
                <ul>
                {this.props.menu.map((item, index) => {
                  return (
                    <li key={index}>
                        <a href={item.href}>{item.title}</a>
                    </li>
                  )
                })}
                </ul>
            </nav>
        </header>
        <CSSTransitionGroup
            transitionName="animationInOut"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={800}
        >
            {!this.props.isAnimated &&
                <div className="contenedor" key="Portada">
                    <h1 className="titulo">Guitarras <span>invie</span>sibles</h1>
                    <h3 className="title-a">Sé la estrella de rock que siempre quisiste ser</h3>
                    <a className="button" href="#guitarras">conoce más</a>
                </div>
            }
        </CSSTransitionGroup>
    </section>
    )
  }
}

export default connect(mapStateToProps)(Portada);