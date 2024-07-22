import React from "react";
import style from './Quantity.module.scss';
import diagram from '../../../shared/assets/images/diagramm.svg';

function Quantity() {
    return (
        <section className={style.quantity}>
            <div className={style.quantity__blocks}>
                <div className={style.quantity__age}>
                    <h4>Возраст</h4>
                    <div className={style.quantity__age_block}>
                        <div className={style.quantity__age_item}>
                            <span>15%</span>
                            <div className={style.quantity__age_firstLine}></div>
                            <p>18-24</p>
                        </div>
                        <div className={style.quantity__age_item}>
                            <span>29%</span>
                            <div className={style.quantity__age_secondLine}></div>
                            <p>24-35</p>
                        </div>
                        <div className={style.quantity__age_item}>
                            <span>25%</span>
                            <div className={style.quantity__age_thirdLine}></div>
                            <p>35-45</p>
                        </div>
                        <div className={style.quantity__age_item}>
                            <span>15%</span>
                            <div className={style.quantity__age_foreLine}></div>
                            <p>45-55</p>
                        </div>
                        <div className={style.quantity__age_item}>
                            <span>10%</span>
                            <div className={style.quantity__age_fivesLine}></div>
                            <p>55-65</p>
                        </div>
                        <div className={style.quantity__age_item}>
                            <span>6%</span>
                            <div className={style.quantity__age_sixesLine}></div>
                            <p>65+</p>
                        </div>
                    </div>
                </div>
                <div className={style.quantity__averageIncome}>
                    <h4>Средний доход в каждом возрасте</h4>
                    <div className={style.quantity__averageIncome_block}>
                        <div className={style.quantity__averageIncome_item}>
                            <span>320$</span>
                            <div className={style.quantity__averageIncome_firstLine}></div>
                            <p>18-24</p>
                        </div>
                        <div className={style.quantity__averageIncome_item}>
                            <span>800$</span>
                            <div className={style.quantity__averageIncome_secondLine}></div>
                            <p>24-35</p>
                        </div>
                        <div className={style.quantity__averageIncome_item}>
                            <span>1 680$</span>
                            <div className={style.quantity__averageIncome_thirdLine}></div>
                            <p>35-45</p>
                        </div>
                        <div className={style.quantity__averageIncome_item}>
                            <span>3 200$</span>
                            <div className={style.quantity__averageIncome_foreLine}></div>
                            <p>45-55</p>
                        </div>
                        <div className={style.quantity__averageIncome_item}>
                            <span>3 100$</span>
                            <div className={style.quantity__averageIncome_fivesLine}></div>
                            <p>55-65</p>
                        </div>
                        <div className={style.quantity__averageIncome_item}>
                            <span>300 $</span>
                            <div className={style.quantity__averageIncome_sixesLine}></div>
                            <p>65+</p>
                        </div>
                    </div>
                </div>
                <div className={style.quantity__revenue}>
                    <h4>Средний доход по всем возрастам</h4>
                    <div className={style.quantity__revenue_items}>
                        <div className={style.quantity__revenue_item}>
                            <span>0-600$</span>
                            <div className={style.quantity__revenue_itemBlock}>
                                <div className={style.quantity__revenue_itemFirstLine}></div>
                                <p>25%</p>
                            </div>
                        </div>
                        <div className={style.quantity__revenue_item}>
                            <span>600-1 500$</span>
                            <div className={style.quantity__revenue_itemBlock}>
                                <div className={style.quantity__revenue_itemSecondLine}></div>
                                <p>19%</p>
                            </div>
                        </div>
                        <div className={style.quantity__revenue_item}>
                            <span>1 500-3 000$</span>
                            <div className={style.quantity__revenue_itemBlock}>
                                <div className={style.quantity__revenue_itemThirdLine}></div>
                                <p>17%</p>
                            </div>
                        </div>
                        <div className={style.quantity__revenue_item}>
                            <span>3 000-5 000$</span>
                            <div className={style.quantity__revenue_itemBlock}>
                                <div className={style.quantity__revenue_itemForesLine}></div>
                                <p>14%</p>
                            </div>
                        </div>
                        <div className={style.quantity__revenue_item}>
                            <span>5 000 + $ </span>
                            <div className={style.quantity__revenue_itemBlock}>
                                <div className={style.quantity__revenue_itemFivesLine}></div>
                                <p>8%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.quantity__gender}>
                    <h4>Пол</h4>
                    <img src={diagram} alt="diagramm" />
                    <div className={style.quantity__gender_percent}>
                        <div className={style.quantity__gender_percentItem}>
                            <div className={`${style.quantity__gender_percentItemRadius} ${style.blueRadius}`}></div>
                            <p>62% мужчины </p>
                        </div>
                        <div className={style.quantity__gender_percentItem}>
                            <div className={`${style.quantity__gender_percentItemRadius} ${style.redRadius}`}></div>
                            <p>38% женщины </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Quantity

