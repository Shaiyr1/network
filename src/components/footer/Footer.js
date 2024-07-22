import React from 'react';
import style from './Footer.module.scss';
import tg from '../../shared/assets/icons/telegram.svg';
import vk from '../../shared/assets/icons/vk.svg';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className={style.footer}>
            <p>© 2024 Network Inc. All rights reserved.</p>
            <div className={style.footer__block}>
                <ul className={style.footer__ul}>
                    <li><Link className={style.footer__ul_link}>о проекте</Link></li>
                    <li><Link className={style.footer__ul_link}>правила</Link></li>
                    <li><Link className={style.footer__ul_link}>поддержка</Link></li>
                    <li><Link className={style.footer__ul_link}>сотрудничество</Link></li>
                    <li><Link className={style.footer__ul_link}>контакты</Link></li>
                </ul>
                <div className={style.footer__social}>
                    <Link><img src={vk} alt="vk" /></Link>
                    <Link><img src={tg} alt="tg" /></Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
