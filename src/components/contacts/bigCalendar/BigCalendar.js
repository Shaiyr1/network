import React from 'react';
import style from './BigCalendar.module.scss';
import union from '../../../shared/assets/icons/union.svg';
import add from '../../../shared/assets/icons/add.svg'

const CalendarItem = ({ day, date, itemClass, numClass, plans }) => (
  <div className={`${style.bigCalendar__item} ${itemClass}`}>
    <div className={`${style.bigCalendar__item_num} ${numClass}`}>
      <p>{date}</p>
      <span>{day}</span>
    </div>
    <img className={style.bigCalendar__item_union} src={union} alt="union" />
    <div className={style.bigCalendar__item_plans}>
      {plans.map((plan, index) => (
        <div key={index} className={`${style.bigCalendar__item_plansNum} ${plan.extraClass || ''}`}>
          <p className={`${style[plan.color]}`}>{plan.time}</p>
          <span>{plan.description}</span>
        </div>
      ))}
    </div>
  </div>
);

const BigCalendar = () => {
  const calendarData = [
    { day: 'понедельник', date: 24, plans: [{ time: '13:00', description: 'созвон Саша', color: 'blue' }, { description: 'написать Рише' }, { description: 'забрать посылку' }, { description: 'позвонить Анне Ивановне' }, { time: '18:00', description: 'бокс', color: 'yellow' }, { time: '21:00', description: 'Др мамы', color: 'green' }] },
    { day: 'вторник', date: 25, plans: [{ time: '11:00', description: 'созвон проект', color: 'blue' }] },
    { day: 'среда', date: 26, plans: [{ time: '07:00', description: 'пробежка', color: 'yellow', extraClass: style.third }] },
    { day: 'четверг', date: 27, plans: [{ time: '16:00', description: 'конференция дизайн', color: 'blue', extraClass: style.fore }] },
    { day: 'пятница', date: 28, plans: [] },
    { day: 'суббота', date: 29, numClass: style.sixNum, plans: [{ time: '07:00', description: 'пробежка', color: 'yellow', extraClass: style.third }] },
    { day: 'воскресение', date: 29, itemClass: style.sunday, numClass: style.sixNum, plans: [] }
  ];

  return (
    <section className={style.bigCalendar}>
      <div className={style.bigCalendar__blocks}>
        <h3>Календарь</h3>
        <div className={style.bigCalendar__items}>
          {calendarData.map((item, index) => (
            <CalendarItem key={index} day={item.day} date={item.date} itemClass={item.itemClass} numClass={item.numClass} plans={item.plans} />
          ))}
        </div>
      </div>
      <div className={style.bigCalendar__notes}>
          <h3>Заметки</h3>
          <div className={style.bigCalendar__notes_block}>
            <img src={add} alt="" />
            <div className={style.bigCalendar__notes_idea}>
              <p className={style.bigCalendar__notes_ideaWrapp}><span className={style.blue}>Идеи дизайн</span><small>сегодня</small></p>
              <p className={style.bigCalendar__notes_ideaDesc}>проект дома на колесах, проект интрьера для сан...</p>
            </div>
            <div className={style.bigCalendar__notes_idea}>
              <p className={style.bigCalendar__notes_ideaWrapp}><span className={style.blue}>Конференция-важное</span><small>26.06.24</small></p>
              <p className={style.bigCalendar__notes_ideaDesc}>внести правки, добавить фотографии к блокам пр...</p>
            </div>
            <div className={style.bigCalendar__notes_idea}>
              <p className={style.bigCalendar__notes_ideaWrapp}><span className={style.yellow}>Тренировка танцы</span><small>20.06.24</small></p>
              <p className={style.bigCalendar__notes_ideaDesc}>Малышева 36, 5 зал, тренер Иванова, группа 5</p>
            </div>
          </div>
      </div>
    </section>
  );
}

export default BigCalendar;




