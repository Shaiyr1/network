import React, { useRef } from 'react';
import style from './KanbanComponent.module.scss';
import search from '../../../shared/assets/icons/search.svg';
import addGreen from '../../../shared/assets/icons/addgreen.svg';
import addYellow from '../../../shared/assets/icons/addYellow.svg';
import addBlue from '../../../shared/assets/icons/addBlue.svg';
import addGrey from '../../../shared/assets/icons/addGrey.svg';
import downAqua from '../../../shared/assets/icons/downAqua.svg';
import downGreen from '../../../shared/assets/icons/downGreen.svg';
import downYellow from '../../../shared/assets/icons/downYellow.svg';
import more from '../../../shared/assets/icons/more.svg';
import { Link } from 'react-router-dom';

function KanbanComponent({ peoplesData }) {
    const worksRef = useRef(null);
    const personalRef = useRef(null);
    const sportRef = useRef(null);

    const worksData = peoplesData.filter(item => item.category === 'работа');
    const personalData = peoplesData.filter(item => item.category === 'личные');
    const sportData = peoplesData.filter(item => item.category === 'спорт');

    const scrollOneStep = (ref) => {
        if (ref.current) {
            const { scrollTop, scrollHeight, clientHeight } = ref.current;
            if (scrollTop + clientHeight >= scrollHeight) {
                // Если достигнут конец, прокрутить наверх
                ref.current.scrollTop = 0;
            } else {
                // Иначе прокрутить вниз на один шаг
                ref.current.scrollTop += clientHeight / 2; // Измените значение деления для регулировки шага
            }
        }
    };

    return (
        <section className={style.kanbanComponent}>
            <div className={style.kanbanComponent__search}>
                <img src={search} alt="search" />
                <input type="search" placeholder='поиск контакта' />
            </div>
            <div className={style.peoples}>
                <div className={style.works}>
                    <div className={style.works__add}>
                        <div className={style.works__add_title}><p>Рабочие</p></div>
                        <img src={addBlue} alt="addGreen" />
                    </div>
                    <select className={style.select}>
                        <option value="">по алфавиту</option>
                    </select>
                    <div ref={worksRef} className={`${style.works__scroll} ${style.scrollContainer}`}>
                        {worksData.map((item, idx) => (
                            <div className={style.works__item} key={idx}>
                                <div className={style.works__item_wrap}>
                                    <img src={item.img} alt="work" />
                                    <div className={style.works__item_name}>
                                        <p>{item.name}</p>
                                        <span>{item.categoryDetail}</span>
                                    </div>
                                    <img className={style.work__item_img} src={more} alt="more" />
                                </div>
                                <div className={style.works__info}>
                                    <div className={style.works__last}>
                                        <p>Последний контакт</p>
                                        <span>{item.lastContact}</span>
                                    </div>
                                    <div className={style.works__last}>
                                        <p className={style.work__td}>:Новых задач</p>
                                        <span className={style.work__td}>{item.newTasks !== null && item.newMessages !== undefined ? item.newMessages : '-'}</span>
                                    </div>
                                    <div className={style.works__last}>
                                        <p className={style.work__td}>Новых сообщений</p>
                                        <span className={style.work__td}>{item.newMessages !== null && item.newMessages !== undefined ? item.newMessages : '-'}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <img className={style.work__down} src={downAqua} alt="downAqua" onClick={() => scrollOneStep(worksRef)} />
                </div>
                <div className={style.personal}>
                    <div className={style.personal__add}>
                        <div className={style.personal__add_title}><p>Личные</p></div>
                        <img src={addGreen} alt="addYellow" />
                    </div>
                    <select className={style.select}>
                        <option value="">по алфавиту</option>
                    </select>
                    <div ref={personalRef} className={`${style.personal__scroll} ${style.scrollContainer}`}>
                        {personalData.map((item, idx) => (
                            <div className={style.personal__block}>
                                <div className={style.personal__item} key={idx}>
                                    <div className={style.personal__item_wrap}>
                                        <img src={item.img} alt="work" />
                                        <div className={style.personal__item_name}>
                                            <p>{item.name}</p>
                                            <span className={style.work__td}>{item.categoryDetail}</span>
                                        </div>
                                        <img src={more} alt="more" />
                                    </div>
                                    <div className={style.works__info}>
                                        <div className={style.works__last}>
                                            <p>Последний контакт</p>
                                            <span>{item.lastContact}</span>
                                        </div>
                                        <div className={style.works__last}>
                                            <p className={style.work__td}>:Новых задач</p>
                                            <span className={style.work__td}>{item.newTasks !== null && item.newMessages !== undefined ? item.newMessages : '-'}</span>
                                        </div>
                                        <div className={style.works__last}>
                                            <p className={style.work__td}>Новых сообщений</p>
                                            <span className={style.work__td}>{item.newMessages !== null && item.newMessages !== undefined ? item.newMessages : '-'}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <img className={style.work__down} src={downGreen} alt="downGreen" onClick={() => scrollOneStep(personalRef)} />
                </div>
                <div className={style.sport}>
                    <div className={style.sport__add}>
                        <div className={style.sport__add_title}><p>Спорт</p></div>
                        <img src={addYellow} alt="addYellow" />
                    </div>
                    <select className={style.select}>
                        <option value="">по алфавиту</option>
                    </select>
                    <div ref={sportRef} className={`${style.sport__scroll} ${style.scrollContainer}`}>
                        {sportData.map((item, idx) => (
                            <div className={style.sport__item} key={idx}>
                                <div className={style.sport__item_wrap}>
                                    <img src={item.img} alt="work" />
                                    <div className={style.sport__item_name}>
                                        <p>{item.name}</p>
                                        <span>{item.categoryDetail}</span>
                                    </div>
                                    <img src={more} alt="more" />
                                </div>
                                <div className={style.works__info}>
                                    <div className={style.works__last}>
                                        <p>Последний контакт</p>
                                        <span>{item.lastContact}</span>
                                    </div>
                                    <div className={style.works__last}>
                                        <p className={style.work__td}>Новых задач:</p>
                                        <span className={style.work__td}>{item.newTasks !== null && item.newMessages !== undefined ? item.newMessages : '-'}</span>
                                    </div>
                                    <div className={style.works__last}>
                                        <p className={style.work__td}>Новых сообщений</p>
                                        <span className={style.work__td}>{item.newMessages !== null && item.newMessages !== undefined ? item.newMessages : '-'}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <img className={style.work__down} src={downYellow} alt="downYellow" onClick={() => scrollOneStep(sportRef)} />
                </div>
                <div className={style.addGroup}>
                    <div className={style.addGroup__wrap}>
                        <img src={addGrey} alt="add" />
                        <h5>Новая группа</h5>
                    </div>
                    <div className={style.addGroup__links}>
                        <p>Группы:</p>
                        <ul>
                            <li><Link className={style.active}>Все контакты</Link></li>
                            <li><Link>Личные</Link></li>
                            <li><Link>Рабочие</Link></li>
                            <li><Link>Спорт</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default KanbanComponent;
