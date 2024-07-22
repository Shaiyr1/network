import React from "react";
import { Link } from "react-router-dom";
import style from './Header.module.scss';
import search from '../../shared/assets/icons/search.svg';
import quation from '../../shared/assets/icons/quation.svg';
import settings from '../../shared/assets/icons/settings.svg';
import messages from '../../shared/assets/icons/messages.svg';
import user from '../../shared/assets/icons/user.svg';

function Header () {
    return (
        <header className={style.header}>
            <nav>
                <Link>
                    <img src={search} alt="search" />
                </Link>
                <Link>
                    <img src={quation} alt="quation" />
                </Link>
                <Link>
                    <img src={settings} alt="setting" />
                </Link>
                <Link>
                    <img src={messages} alt="messages" />
                </Link>
                <Link>
                    <img src={user} alt="user" />
                </Link>
            </nav>
        </header>
    )
}
export default Header