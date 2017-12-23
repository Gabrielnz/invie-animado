import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Invie from './Invie';
import registerServiceWorker from './registerServiceWorker';
import cheet from 'cheet.js';
import logoPortada from './images/invie.png';
import acustica from './images/invie-acustica.png';
import clasica from './images/invie-classic.png';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
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

function reducer(state, action) {
  switch(action.type) {
    case 'UPDATE_PROPS': {
      const newProps = action.payload.props;
      return { ...state, ...newProps};
    }
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

const easter = {
  menu: [
    {
      href: 'index.html',
      title: 'Home',
    },
  ]
}

cheet('i n v i e', () => {
  /*console.log('Easter Egg!! :D');*/
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: easter
    }
  });
});

cheet('g o b a c k', () => {
  /*console.log('Regresaste al estado inicial');*/
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: initialState
    }
  });
});

ReactDOM.render(
  <Provider store={store}>
    <Invie />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
