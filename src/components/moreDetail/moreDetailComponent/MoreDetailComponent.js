import React from 'react';
import style from './MoreDetailComponent.module.scss';
import yulia from '../../../shared/assets/images/yulia.svg';
import { Link } from 'react-router-dom';
import tg from '../../../shared/assets/icons/tg.svg';
import vk from '../../../shared/assets/icons/vkSecond.svg';

function MoreDetailComponent() {
    return (
        <section className={style.moreDetailComponent}>
            <div className={style.user}>
                <div className={style.user__info}>
                    <img src={yulia} alt="yulia" />
                    <div className={style.user__info_name}>
                        <p>Юлия Иванова</p>
                        <span>отвечаю по будням</span>
                    </div>
                </div>
                <div className={style.user__buttons}>
                    <button className={style.user__buttons_messages}>Написать сообщение</button>
                    <button className={style.user__buttons_delete}>Удалить контакт</button>
                </div>
                <div className={style.user__footer}>
                    <p>Зарегистрирована 17.06.22 </p>
                    <p>У вас в контактах с 26.04.24</p>
                </div>
            </div>
            <div className={style.work}>
                <div className={style.work__select}>
                    <select>
                        <option>Работа</option>
                    </select>
                </div>

                <div className={style.work__block}>
                    <div className={style.work__contacts}>
                        <div className={style.work__contacts_item}>
                            <span>Должность</span>
                            <p>Иллюстратор</p>
                        </div>
                        <div className={style.work__contacts_item}>
                            <span>Компания</span>
                            <p>Design Lab</p>
                        </div>
                        <div className={style.work__contacts_item}>
                            <span>Дата рождения</span>
                            <p>06.11.1996</p>
                        </div>
                        <div className={style.work__contacts_item}>
                            <span>Откуда</span>
                            <p>Москва</p>
                        </div>
                    </div>
                    <div className={style.work__interested}>
                        <div className={style.work__interested_block}>
                            <p>Интересы</p>
                            <div className={style.work__interested_buttons}>
                                <button>Искусство</button>
                                <button>Баскетбол</button>
                                <button>Кулинария</button>
                                <button>Творчество</button>
                                <button>Музыка</button>
                                <button>Походы</button>
                            </div>
                        </div>
                        <div className={style.work__interested_needs}>
                            <p>Потребности</p>
                            <div>
                                <span>Рабочие знакомства</span>
                                <span>Новые сотрудничества</span>
                                <span>Неформальное общение</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.work__foreCommunication}>
                        <div className={style.work__foreCommunication_item}>
                            <p>e-mail</p>
                            <span><Link>ivanova_@gmail.com</Link></span>
                        </div>
                        <div className={style.work__foreCommunication_item}>
                            <p>Телефон</p>
                            <span><Link>+7 (926) 78 82 63</Link></span>
                        </div>
                        <div className={style.work__social}>
                            <div>
                                <img src={tg} alt="tg" />
                                <Link>@ivanovajuli</Link>
                            </div>
                            <div>
                                <img src={vk} alt="vk" />
                                <Link>@ivanova_juli</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MoreDetailComponent
