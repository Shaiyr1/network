import React from 'react';
import style from './MyContacts.module.scss';
import karta from '../../../shared/assets/images/karta.svg';

const CountryItem = ({ name, percent, lineClass }) => (
  <div className={style.myContacts__topCountries_infoItem}>
    <p>{name}</p>
    <div className={style.myContacts__topCountries_infoPercent}>
      <div className={lineClass}></div>
      <span>{percent}%</span>
    </div>
  </div>
);

const CityItem = ({ name, percent, lineClass }) => (
  <div className={style.myContacts__topCities_infoItem}>
    <p>{name}</p>
    <div className={style.myContacts__topCities_infoPercent}>
      <div className={lineClass}></div>
      <span>{percent}%</span>
    </div>
  </div>
);

const MyContacts = () => {
  const countries = [
    { name: 'США', percent: 36, lineClass: style.myContacts__topCountries_infoPercentLineUsa },
    { name: 'Китай', percent: 32, lineClass: style.myContacts__topCountries_infoPercentLineChine },
    { name: 'Россия', percent: 25, lineClass: style.myContacts__topCountries_infoPercentLineRussia },
    { name: 'Индия', percent: 22, lineClass: style.myContacts__topCountries_infoPercentLineIndia },
    { name: 'Бразилия', percent: 15, lineClass: style.myContacts__topCountries_infoPercentLineBrasil }
  ];

  const cities = [
    { name: 'Нью-Йорк', percent: 25, lineClass: style.myContacts__topCities_infoPercentLineNewYork },
    { name: 'Шанхай', percent: 19, lineClass: style.myContacts__topCities_infoPercentLineShanghai },
    { name: 'Нью-Дели', percent: 17, lineClass: style.myContacts__topCities_infoPercentLineNewDeli },
    { name: 'Москва', percent: 14, lineClass: style.myContacts__topCities_infoPercentLineMoskva },
    { name: 'Санкт-Петербург', percent: 8, lineClass: style.myContacts__topCities_infoPercentLinePeter }
  ];

  return (
    <section className={style.myContacts}>
      <h3>Мои контакты</h3>
      <div className={style.myContacts__block}>
        <img src={karta} alt="karta" />
        <div className={style.myContacts__info}>
          <div className={style.myContacts__topCountries}>
            <h5>Топ стран</h5>
            <div className={style.myContacts__topCountries_info}>
              {countries.map((country, index) => (
                <CountryItem key={index} {...country} />
              ))}
            </div>
          </div>
          <div className={style.myContacts__topCities}>
            <h5>Топ городов</h5>
            <div className={style.myContacts__topCities_info}>
              {cities.map((city, index) => (
                <CityItem key={index} {...city} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyContacts;
