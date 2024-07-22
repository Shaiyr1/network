import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Calendar from '../calendar/Calendar'
import style from './SideBar.module.scss'

function SideBar() {
  const location = useLocation();
  const calendarRef = useRef(null);
  const isContactsPage = location.pathname === '/';
  const isActiveCalendar = location.pathname === '/calendar';
  const isActiveAnalytics = location.pathname === '/analytics';
  const isActiveNeuronka = location.pathname === '/neuronka';
  const isActiveKanban = location.pathname === '/kanban';
  const isActiveProfile = location.pathname === '/profile';

  const scrollToCalendar = () => {
    if (calendarRef.current) {
      calendarRef.current.scrollIntoView({ behavior: 'smooth' });
    }    
  };

  return (
    <div className={style.sideBar}>
      <Link to='/contacts' className={style.sideBar__title}>network</Link>
      <nav className={style.sideBar__nav}>
        <ul className={style.sideBar__ul}>
          <li><Link className={`${style.sideBar__ul_link} ${isContactsPage ? style.active_link : ''}`} to='/'>Контакты</Link></li>
          <li><p className={`${style.sideBar__ul_link} ${isActiveCalendar ? style.active_link : ''}`} onClick={scrollToCalendar}>Календарь</p></li>
          <li><Link className={`${style.sideBar__ul_link} ${isActiveAnalytics ? style.active_link : ''}`} to='/analytics'>Аналитика</Link></li>
          <li><Link className={`${style.sideBar__ul_link} ${isActiveNeuronka ? style.active_link : ''}`} to='/neuronka'>Нейронка</Link></li>
          <li><Link className={`${style.sideBar__ul_link} ${isActiveKanban ? style.active_link : ''}`} to='/kanban'>Канбан</Link></li>
          <li><Link className={`${style.sideBar__ul_link} ${isActiveProfile ? style.active_link : ''}`} to='/profile'>Мой профиль</Link></li>
        </ul>
      </nav>

      {isContactsPage && (
        <div className={style.others} ref={calendarRef}>
          <Calendar />
          <div className={style.plans}>
            <p>Запланировать</p>
            <p>Напоминания</p>
            <p>Праздники</p>
          </div>

          <div className={style.myContacts}>
            <div className={style.period}>
              <h4>Период</h4>
              <select className={style.period__select}>
                <option value="" className={style.period__option}>Последние 30 дней </option>
              </select>
            </div>
            <div className={style.format}>
              <h4>Формат контакта</h4>
              <select className={style.format__select}>
                <option value="" className={style.format__option}>Все контакты</option>
              </select>
            </div>
            <div className={style.myContacts__others}>
              <p>Другие фильтры</p>
              <p>Экспорт статистики</p>
            </div>
          </div>

          <div className={style.interesting}>
            <h4>Может быть интересно</h4>
            <div className={style.interesting__links}>
              <Link>Как я могу использовать статистику?</Link>
              <Link>Польза нетворкинга</Link>
              <Link>Где найти новые знакомства?</Link>
              <Link>Как себя подать?</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SideBar;
