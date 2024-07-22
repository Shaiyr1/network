import React, { useState } from 'react';
import style from './Familiar.module.scss';
import familiar1 from '../../../shared/assets/images/familiar1.svg';
import familiar2 from '../../../shared/assets/images/familiar2.svg';
import familiar3 from '../../../shared/assets/images/familiar3.svg';
import familiar4 from '../../../shared/assets/images/familiar4.svg';
import moreMini from '../../../shared/assets/icons/moreMini.svg';
import prev from '../../../shared/assets/icons/prev.svg';
import next from '../../../shared/assets/icons/next.svg';

function FamiliarCard({ item }) {
  return (
    <div className={style.familiarCard}>
      <div className={style.familiarCard__info}>
        <img src={item.img} alt="familiar" />
        <div className={style.familiarCard__name}>
          <h4>{item.name}</h4>
          <p>{item.work}</p>
          <p>{item.compony}</p>
        </div>
        <img className={style.familiarData__more} src={moreMini} alt="moreMini" />
      </div>
      <div className={style.familiarCard__btns}>
        <button className={style.familiarCard__addBtn}>Добавить в контакты</button>
        <button className={style.familiarCard__msgBtn}>Сообщение</button>
      </div>
    </div>
  );
}

function Familiar() {
  const familiarData = [
    { name: 'Олег Петров', work: 'Технический дизайнер', compony: 'ООО «Правильные решения»', img: familiar1 },
    { name: 'Нина Никитина', work: 'Директор по развитию', compony: 'Банк «Вперед»', img: familiar2 },
    { name: 'Олеся Лапина', work: 'Танцы хип-хор', compony: 'Студия «Ветер»', img: familiar3 },
    { name: 'Дмитрий Назаров', work: 'Админ ПО', compony: 'ТК «Григория»', img: familiar4 },
    { name: 'Дмитрий Назаров', work: 'Админ ПО', compony: 'ТК «Григория»', img: familiar4 },
    { name: 'Дмитрий Назаров', work: 'Админ ПО', compony: 'ТК «Григория»', img: familiar4 },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 4; // Количество карточек на одном слайде
  const totalSlides = Math.ceil(familiarData.length / itemsPerSlide); // Общее количество слайдов

  const handlePrevClick = () => {
    setCurrentSlide(prevSlide => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  const handleNextSlideClick = () => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % totalSlides);
  };

  return (
    <section className={style.familiar}>
      <h3>Возможно, вы знакомы:</h3>
      <div className={style.familiar__slider}>
        <button className={style.familiar__prevBtn} onClick={handlePrevClick}>
          <img src={prev} alt="prev" />
        </button>
        <div className={style.familiar__hidden}>
          <div
            className={style.familiar__slide}
            style={{ transform: `translateX(-${currentSlide * (103 / totalSlides)}%)` }}
          >
            {familiarData.map((item, idx) => (
              <FamiliarCard key={idx} item={item} />
            ))}
          </div>
        </div>
        <button className={style.familiar__nextBtn} onClick={handleNextSlideClick}>
          <img src={next} alt="next" />
        </button>
      </div>
    </section>
  );
}

export default Familiar;
