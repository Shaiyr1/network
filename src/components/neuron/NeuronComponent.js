import React, { useState } from 'react';
import style from './NeuronComponent.module.scss';
import worksLine from '../../shared/assets/icons/worksLine.svg';
import worksLine2 from '../../shared/assets/icons/worksLine2.svg';
import worksLine3 from '../../shared/assets/icons/worksLine3.svg';
import elena from '../../shared/assets/icons/elena.svg';
import categoriesLine from '../../shared/assets/icons/categoriesLine.svg';
import categoriesLine2 from '../../shared/assets/icons/categoriesLine2.svg';
import user from '../../shared/assets/icons/userSecond.svg';
import personalLine from '../../shared/assets/icons/personalLine.svg';
import personalLine2 from '../../shared/assets/icons/personalLine2.svg';
import personalLine3 from '../../shared/assets/icons/personalLine3.svg';
import blueLine from '../../shared/assets/icons/blueLine.svg';
import greenLine from '../../shared/assets/icons/greenLine.svg';
import yellowLine from '../../shared/assets/icons/yellowLine.svg';

function NeuronComponent({ peoplesData }) {
    const initialCategories = [
        { id: 1, name: 'Работа', checked: false },
        { id: 2, name: 'Личные', checked: false },
        { id: 3, name: 'Спорт', checked: false },
    ];

    const [categories, setCategories] = useState(initialCategories);
    const [newCategoryName, setNewCategoryName] = useState('');
    const [showAddCategoryInput, setShowAddCategoryInput] = useState(false);

    const handleAddCategory = () => {
        if (newCategoryName.trim() === '') return; // Проверка на пустое название

        const newCategory = {
            id: categories.length + 1,
            name: newCategoryName.trim(),
            checked: false,
        };

        setCategories([...categories, newCategory]);
        setNewCategoryName(''); // Очистка поля ввода после добавления категории
        setShowAddCategoryInput(false); // Скрыть поле ввода после добавления
    };

    const worksData = peoplesData.filter(item => item.category === 'работа');
    const personalsData = peoplesData.filter(item => item.category === 'личные');
    const sportsData = peoplesData.filter(item => item.category === 'спорт');



    return (
        <section className={style.neuronComponent}>
            <div className={style.block}>
                <div className={style.myContacts}>
                    <h1>Мои контакты</h1>
                    <div className={style.myContacts__checkbox}>
                        {categories.map((category) => (
                            <label key={category.id} className={style.checkbox_container}>
                                <input
                                    type="checkbox"
                                    checked={category.checked}
                                    onChange={() =>
                                        setCategories(
                                            categories.map((cat) =>
                                                cat.id === category.id
                                                    ? { ...cat, checked: !cat.checked }
                                                    : cat
                                            )
                                        )
                                    }
                                />
                                <span>{category.name}</span>
                            </label>
                        ))}
                        {!showAddCategoryInput && (
                            <p onClick={() => setShowAddCategoryInput(true)}>+ новая категория</p>
                        )}
                        {showAddCategoryInput && (
                            <div className={style.new_category}>
                                <input
                                    type="text"
                                    placeholder="Новая категория"
                                    value={newCategoryName}
                                    onChange={(e) => setNewCategoryName(e.target.value)}
                                />
                                <button onClick={handleAddCategory}>Добавить</button>
                            </div>
                        )}
                    </div>
                </div>
                <div className={style.familiar}>
                    <h2>Возможно, вы знакомы:</h2>
                    <div className={style.familiar__scroll}>
                        {peoplesData.map((item, idx) => (
                            <div className={style.familiar__user} key={idx}>
                                <img src={item.img} alt="user" />
                                <div className={style.familiar__info}>
                                    <p>{item.name}</p>
                                    <span>{item.categoryDetail}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={style.rightBlock}>
                <div className={style.contacts}>
                    <div className={style.works}>
                        <div className={style.works__wrap}>
                            {worksData.slice(0, 6).map((item, idx) => (
                                <div className={style.works__user} key={idx}>
                                    <img src={item.img} alt="works" />
                                    <p>{item.name}</p>
                                    <span>{item.categoryDetail}</span>
                                </div>
                            ))}
                        </div>
                        <div className={style.works__foot}>
                            {worksData.slice(6, 8).map((item, idx) => (
                                <div className={`${style.works__user} ${style.foot_user}`} key={idx}>
                                    <img src={item.img} alt="works" />
                                    <p>{item.name}</p>
                                    <span>{item.categoryDetail}</span>
                                </div>
                            ))}
                            <img className={style.works__foot_line} src={worksLine} alt="worksLine" />
                            <img className={style.works__foot_lineSecond} src={worksLine2} alt="worksLine" />
                            <img className={style.works__foot_lineThird} src={worksLine3} alt="worksLine" />
                        </div>
                    </div>
                    <div className={style.categories}>
                        <img className={style.categories__line} src={categoriesLine} alt="category" />
                        <img className={style.categories__lineSecond} src={categoriesLine2} alt="category" />
                        <div className={style.categories__user}>
                            <img src={elena} alt="elena" />
                            <p>Елена Иванова</p>
                            <span>тренер йоги</span>
                        </div>
                        <div className={style.categories__names}>
                            <div className={style.categories__names_work}>
                                <p>Работа</p>
                            </div>
                            <div className={style.categories__names_personal}>
                                <p>Личные</p>
                            </div>
                            <img className={style.categories__names_line} src={blueLine} alt="blueLine" />
                            <img className={style.categories__names_lineSecond} src={greenLine} alt="greenLine" />
                        </div>
                        <img className={style.categories__userBlock} src={user} alt="user" />
                        <div className={style.categories__sports}>
                            <p>Спорт</p>
                            <img className={style.categories__sports_lineThird} src={yellowLine} alt="yellowLine" />
                        </div>
                    </div>
                    <div className={style.personals}>
                        <div className={style.works__wrap}>
                            {personalsData.slice(0, 6).map((item, idx) => (
                                <div className={style.works__user} key={idx}>
                                    <img src={item.img} alt="works" />
                                    <p>{item.name}</p>
                                    <span>{item.categoryDetail}</span>
                                </div>
                            ))}
                        </div>
                        <div className={style.personals__foot}>
                            {personalsData.slice(6, 8).map((item, idx) => (
                                <div className={style.works__user} key={idx}>
                                    <img src={item.img} alt="works" />
                                    <p>{item.name}</p>
                                    <span>{item.categoryDetail}</span>
                                </div>
                            ))}
                            <img className={style.personals__foot_line} src={personalLine} alt="worksLine" />
                            <img className={style.personals__foot_lineSecond} src={personalLine2} alt="worksLine" />
                            <img className={style.personals__foot_lineThird} src={personalLine3} alt="worksLine" />
                        </div>
                    </div>
                </div>
                <dir className={style.sports}>
                    {sportsData.slice(0, 5).map((item, idx) => (
                        <div className={style.works__user} key={idx}>
                            <img src={item.img} alt="sports" />
                            <p>{item.name}</p>
                            <span>{item.categoryDetail}</span>
                        </div>
                    ))}
                </dir>
            </div>
        </section>
    );
}

export default NeuronComponent;
