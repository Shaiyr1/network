import React, { useState } from 'react';
import { addMonths, subMonths, format, startOfWeek, addDays, startOfMonth, endOfMonth, isSameMonth, isSameDay, parseISO, endOfWeek } from 'date-fns';
import { ru } from 'date-fns/locale';
import styles from './Calendar.module.scss'; // Импортируем CSS модуль
import next from '../../shared/assets/icons/nextLittle.svg';
import prev from '../../shared/assets/icons/prevLittle.svg';

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const renderHeader = () => {
        const dateFormat = "LLLL yyyy"; // Обновленный формат для правильного отображения названия месяца

        return (
            <div className={`${styles.header} ${styles.row} ${styles['flex-middle']}`}>
                <div className={`${styles.col} ${styles['col-center']}`}>
                    <span>{format(currentMonth, dateFormat, { locale: ru })}</span>
                </div>
                <div className={styles.slide}>
                    <div className={`${styles.col} ${styles['col-start']}`}>
                        <div className={styles.icon} onClick={prevMonth}>
                            <img src={prev} alt="prev" />
                        </div>
                    </div>
                    <div className={`${styles.col} ${styles['col-end']}`} onClick={nextMonth}>
                        <div className={styles.icon}><img src={next} alt="next" /></div>
                    </div>
                </div>

            </div>
        );
    };

    const renderDays = () => {
        const days = [];
        const dateFormat = "eeee"; // Обновленный формат для правильного отображения названий дней недели
        const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });

        const dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

        for (let i = 0; i < 7; i++) {
            days.push(
                <div className={`${styles.col} ${styles['col-center']} ${styles['day-name']}`} key={i}>
                    {dayNames[i]}
                </div>
            );
        }

        return <div className={`${styles.days} ${styles.row}`}>{days}</div>;
    };

    const renderCells = () => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
        const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

        const dateFormat = "d";
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, dateFormat);
                const cloneDay = new Date(day); // Ensure cloneDay is a new Date object

                days.push(
                    <div
                        className={`${styles.col} ${styles.cell} ${!isSameMonth(day, monthStart)
                                ? styles.disabled
                                : isSameDay(day, selectedDate) ? styles.selected : ""
                            }`}
                        key={day.toISOString()} // Ensure unique key
                        onClick={() => onDateClick(cloneDay)}
                    >
                        <span className={styles.number}>{formattedDate}</span>
                    </div>
                );
                day = addDays(day, 1);
            }
            rows.push(
                <div className={styles.row} key={day.toISOString()}>
                    {days}
                </div>
            );
            days = [];
        }

        return <div className={styles.body}>{rows}</div>;
    };

    const onDateClick = day => {
        setSelectedDate(day);
    };

    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    return (
        <div className={styles.calendar}>
            {renderHeader()}
            {renderDays()}
            {renderCells()}
        </div>
    );

};

export default Calendar;
