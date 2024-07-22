import React from 'react';
import NeuronComponent from '../../components/neuron/NeuronComponent';
import style from './Neuron.module.scss';
import exit from '../../shared/assets/icons/exit.svg';
import { Link } from 'react-router-dom';

function Neuron({ peoplesData }) {
  return (
    <section className={style.neuron}>
      <Link to='/' className={style.exit}>
        <img src={exit} alt="exit" />
        <p>на главную</p>
      </Link>
      <NeuronComponent peoplesData={peoplesData}/>
    </section>
  )
}

export default Neuron
