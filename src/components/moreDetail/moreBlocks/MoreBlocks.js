import React from 'react';
import style from './MoreBlocks.module.scss';
import add from '../../../shared/assets/icons/add.svg';

function MoreBlocks() {
  return (
    <section className={style.more}>
        <div className={style.notes}>
            <h4>Заметки</h4>
            <div className={style.notes__blocks}>
                <img src={add} alt="add" />
                <div className={style.notes__block}>
                    <div className={style.notes__block_item}>
                        <div className={style.notes__block_itemWrap}>
                            <p className={style.blue}>Идеи новых работ</p>
                            <small>сегодня</small>
                        </div>
                        <span>Рисунок головы Адама, упаковка для новогодних ...</span>
                    </div>
                    <div className={style.notes__block_item}>
                        <div className={style.notes__block_itemWrap}>
                            <p className={style.blue}>Заметки по проекту</p>
                            <small>26.06.24</small>
                        </div>
                        <span>внести правки, добавить фотографии к блокам пр...</span>
                    </div>
                    <div className={style.notes__block_item}>
                        <div className={style.notes__block_itemWrap}>
                            <p className={style.yellow}>Обсуждение тренировки</p>
                            <small>20.06.24</small>
                        </div>
                        <span>Малышева 36, 5 зал, тренер Иванова, группа 5</span>
                    </div>
                </div>
            </div>
        </div>
        <div className={style.importantPoints}>
            <h4>Важные моменты</h4>
            <div className={style.importantPoints__block}>
                <img src={add} alt="add" />

                <div className={style.importantPoints__items}>
                    <div className={style.importantPoints__items_wrap}>
                        <p className={style.blue}>Обсужение проекта</p>
                        <small>сегодня</small>
                    </div>
                    <span>03.06.24, Zoom 14-00, команда А + Иван</span>
                </div>
                <div className={style.importantPoints__items}>
                    <div className={style.importantPoints__items_wrap}>
                        <p className={style.blue}>Сдача проекта</p>
                        <small>26.06.24</small>
                    </div>
                    <span>подготовить презентацию к 27.07.24</span>
                </div>
                <div className={style.importantPoints__items}>
                    <div className={style.importantPoints__items_wrap}>
                        <p className={style.blue}>Больничный Юли</p>
                        <small>14.03.24</small>
                    </div>
                    <span>Проекты перешли Анне</span>
                </div>
            </div>
        </div>
        <div className={style.interaction}>
            <h4>История взаимодействия</h4>
            <div className={style.interaction__block}>
                <div className={style.interaction__item}>
                    <h5>сегодня</h5>
                    <div className={style.interaction__item_block}>
                        <p>Совместный созвон в Zoom</p>
                        <span>14:18 - 17:51</span>
                    </div>
                    <div className={style.interaction__item_block}>
                        <p>+ 1 Новое сообщение</p>
                        <span>13:58</span>
                    </div>
                    <div className={style.interaction__item_block}>
                        <p>+ 1 Новое сообщение</p>
                        <span>13:55</span>
                    </div>
                    <div className={style.interaction__item_block}>
                        <p>+ 1 Новое сообщение</p>
                        <span>13:43</span>
                    </div>
                </div>
                <div className={`${style.interaction__item} ${style.tonight}`}>
                    <h5>вчера</h5>
                    <div className={style.interaction__item_block}>
                        <p>+ 10 Новых сообщений</p>
                        <span>18 - 20 ч</span>
                    </div>
                </div>
                <div className={`${style.interaction__item} ${style.tonight}`}>
                    <h5>21.06.24</h5>
                    <div className={style.interaction__item_block}>
                        <p>+ 8 Новых сообщений</p>
                        <span>16 - 21 ч</span>
                    </div>
                </div>
                <div className={`${style.interaction__item} ${style.tonight}`}>
                    <h5>20.06.24</h5>
                    <div className={style.interaction__item_block}>
                        <p className={style.importantPoints__block_blue}>Задача <span>«Подбор референсов»</span> закрыта</p>
                        <span>16 - 21 ч</span>
                    </div>
                    <div className={style.interaction__item_block}>
                        <p>+ 5 Новых сообщений</p>
                        <span>12 - 14 ч</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MoreBlocks
