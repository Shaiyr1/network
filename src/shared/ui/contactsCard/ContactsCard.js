import React from 'react';
import style from './ContactsCard.module.scss';

function ContactsCard({ contactsData }) {
  // Группировка данных по статусу
  const groupedContacts = contactsData.reduce((acc, item) => {
    if (!acc[item.status]) {
      acc[item.status] = [];
    }
    acc[item.status].push(item);
    return acc;
  }, {});

  const getStatusColor = (status) => {
    switch (status) {
      case 'Новые':
        return style.blue;
      case 'В процессе':
        return style.yellow;
      case 'Долгосрочные':
        return style.green;
      case 'Конфликт':
        return style.red;
      default:
        return '';
    }
  };

  const getTextColor = (status) => {
    switch (status) {
      case 'Новые':
        return style.blueText;
      case 'В процессе':
        return style.yellowText;
      case 'Долгосрочные':
        return style.greenText;
      case 'Конфликт':
        return style.redText;
      default:
        return '';
    }
  };

  const getScrollColor = (status) => {
    switch (status) {
      case 'Новые':
        return style.blueScroll;
      case 'В процессе':
        return style.yellowScroll;
      case 'Долгосрочные':
        return style.greenScroll;
      case 'Конфликт':
        return style.redScroll;
      default:
        return '';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'работа':
        return style.blueCategory;
      case 'спорт':
        return style.yellowCategory;
      case 'семья':
        return style.greenCategory;
      default:
        return '';
    }
  };
  return (
    <>
      {Object.entries(groupedContacts).map(([status, items]) => (
        <div className={`${style.contactsCard} ${getStatusColor(status)}`} key={status}>
          <div className={`${style.wrapper} ${getTextColor(status)}`}>
            <h4>{status}</h4>
            <p>{items[0]?.touches}</p>
          </div>
          <div className={style.contactsCard__scroll}>
            <div className={style.contactsCard__scroll_wrap}>
              <span>имя</span>
              <span>категория</span>
            </div>
            <div className={`${style.scroll} ${getScrollColor(status)}`}>
              {items.map((item, index) => (
                <div className={style.scroll__user} key={index}>
                  <img src={item.img} alt="contacts" />
                  <div className={style.scroll__user_block}>
                    <p className={style.scroll__user_name}>{item.name}</p>
                    <p className={`${style.scroll__user_work} ${getCategoryColor(item.category)}`}>{item.categoryDetail}</p>
                  </div>
                  <span className={`${getCategoryColor(item.category)}`}>{item.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ContactsCard;
