import React from 'react'
import style from './ContactsComponent.module.scss'
import yuliaImg from '../../../shared/assets/icons/yulia.svg';
import olegImg from '../../../shared/assets/icons/oleg.svg';
import temaImg from '../../../shared/assets/icons/tema.svg';
import ContactsCard from '../../../shared/ui/contactsCard/ContactsCard'
import { Link } from 'react-router-dom';

function ContactsComponent({ contactsData }) {
    const notificationsData = [
        { id: 1, name: 'Юлия Иванова', category: 'работа', messages: 'новое сообщение', categoryDetail: 'иллюстратор', img: yuliaImg, notificationMessages: '+2 сообщения' },
        { id: 2, name: 'Олег Сомов', category: 'работа', messages: 'новая задача', categoryDetail: 'директор', img: olegImg },
        { id: 3, name: 'Тема Кислов', category: 'семья', messages: 'новое сообщение', categoryDetail: 'друг детства', img: temaImg },
    ];

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
        <section className={style.contacts}>
            <h1>Контакты</h1>
            <div className={style.contacts__blocks}>
                <div className={style.contacts__cards}>
                    <ContactsCard contactsData={contactsData} />
                </div>
                <div className={style.notifications}>
                    <h3>Уведомления</h3>
                    <p className={style.notifications__text}>сегодня</p>
                    <div className={style.notifications__users}>
                        {notificationsData?.map(item => (
                            <Link to="/more-detail">
                                <div className={style.notifications__user} key={item.id}>
                                    <img src={item.img} alt="notifications" />
                                    <div>
                                        <p>{item.name}</p>
                                        <span className={`${getCategoryColor(item.category)}`}>{item.categoryDetail}</span>
                                    </div>
                                    <p className={style.category}>{item.messages}</p>
                                </div>
                            </Link>

                        ))}
                    </div>

                    <p className={style.tonite}>вчера</p>
                    {notificationsData?.slice(0, 1).map(item => (
                        <div className={style.notifications__user} key={item.id}>
                            <img src={item.img} alt="notifications" />
                            <div>
                                <p>{item.name}</p>
                                <span className={`${getCategoryColor(item.category)}`}>{item.categoryDetail}</span>
                            </div>
                            <p className={style.category}>{item.notificationMessages}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ContactsComponent
