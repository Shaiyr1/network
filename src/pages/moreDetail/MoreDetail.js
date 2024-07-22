import React from "react";
import MoreBlocks from "../../components/moreDetail/moreBlocks/MoreBlocks";
import MoreDetailComponent from "../../components/moreDetail/moreDetailComponent/MoreDetailComponent";
import style from './MoreDetail.module.scss';
import exit from '../../shared/assets/icons/exit.svg';
import { Link } from 'react-router-dom';

function MoreDetail() {
    return (
        <section className={style.moreDetail}>
            <Link to='/' className={style.exit}>
                <img src={exit} alt="exit" />
                <p>назад к контактам</p>
            </Link>
            <MoreDetailComponent />
            <MoreBlocks />
        </section>
    )
}

export default MoreDetail