import React from 'react';
import Familiar from '../../components/kanban/familiar/Familiar';
import KanbanComponent from '../../components/kanban/kanbanComponent/KanbanComponent';
import style from './Kanban.module.scss';
import exit from '../../shared/assets/icons/exit.svg';
import { Link } from 'react-router-dom';

function Kanban({ peoplesData }) {
  return (
    <section className={style.kanban}>
                  <Link to='/' className={style.exit}>
                <img src={exit} alt="exit" />
                <p>назад к контактам</p>
            </Link>
      <KanbanComponent peoplesData={peoplesData} />
      <Familiar/>
    </section>
  )
}

export default Kanban
