import './App.css';
import alineImg from './shared/assets/images/alena.svg';
import semenImg from './shared/assets/images/semen.svg';
import nataliaImg from './shared/assets/images/natalia.svg';
import arenaImg from './shared/assets/images/arina.svg';
import valeryImg from './shared/assets/images/valery.svg';
import gregoryImg from './shared/assets/images/grigoriy.svg';
import mariaImg from './shared/assets/images/maria.svg';
import antonImg from './shared/assets/images/anton.svg';
import elenaImg from './shared/assets/images/elena.svg';
import svetlanaImg from './shared/assets/images/svetlana.svg';
import mihailImg from './shared/assets/images/mihail.svg';
import nataliaaImg from './shared/assets/images/nataliaa.svg';
import petrImg from './shared/assets/images/petr.svg';
import somovaImg from './shared/assets/images/somova.svg';
import titovaImg from './shared/assets/images/titova.svg';
import zaharovImg from './shared/assets/images/zaharov.svg';
import alisaImg from './shared/assets/images/alisa.svg';
import annaImg from './shared/assets/images/anna.svg';
import liImg from './shared/assets/images/li.svg';
import petrovImg from './shared/assets/images/petrov.svg';
import smirovaImg from './shared/assets/images/smirova.svg';
import evgeniyImg from './shared/assets/images/evgeniy.svg';
import lyapinImg from './shared/assets/images/lyapin.svg';
import smirnovaImg from './shared/assets/images/smirnova.svg';
import lobovImg from './shared/assets/images/lobov.svg';
import paninImg from './shared/assets/images/panin.svg';
import chesnovImg from './shared/assets/images/chesnov.svg';
import popovaImg from './shared/assets/images/popova.svg';
import alekseyImg from './shared/assets/images/aleksey.svg';
import pashinaImg from './shared/assets/images/pashina.svg';
import borisImg from './shared/assets/images/boris.svg';
import olegImg from './shared/assets/images/olegSecond.svg';
import anasImg from './shared/assets/images/anasSecond.svg';
import SideBar from './components/sideBar/SideBar';
import Header from './components/header/Header';
import Contacts from './pages/contacts/Contacts';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import MoreDetail from './pages/moreDetail/MoreDetail';
import Kanban from './pages/kanban/Kanban';
import Neuron from './pages/neuron/Neuron';




function App() {
  const contactsData = [
    { name: 'Алена Котова', category: 'работа', categoryDetail: 'HR-Сбер', img: alineImg, status: 'Новые', touches: '1-4 касаний' },
    { name: 'Семен Емин', category: 'спорт', categoryDetail: 'Тренер по боксу', img: semenImg, status: 'Новые' },
    { name: 'Наталья Иванова', category: 'семья', categoryDetail: 'Троюродная друг', img: nataliaImg, status: 'Новые' },
    { name: 'Алена Котова', category: 'работа', categoryDetail: 'HR-Сбер', img: alineImg, status: 'Новые' },
    { name: 'Семен Емин', category: 'спорт', categoryDetail: 'Тренер по боксу', img: semenImg, status: 'Новые' },
    { name: 'Наталья Иванова', category: 'семья', categoryDetail: 'Троюродная сестра', img: nataliaImg, status: 'Новые' },

    { name: 'Арина Белова', category: 'работа', categoryDetail: 'Маркетолог TO', img: arenaImg, status: 'В процессе', touches: '5-14 касаний' },
    { name: 'Валерия Иванова', category: 'работа', categoryDetail: 'Бухгалтер', img: valeryImg, status: 'В процессе' },
    { name: 'Григорий Меньшов', category: 'семья', categoryDetail: 'Друг', img: gregoryImg, status: 'В процессе' },
    { name: 'Арина Белова', category: 'работа', categoryDetail: 'Маркетолог TO', img: arenaImg, status: 'В процессе' },
    { name: 'Валерия Иванова', category: 'работа', categoryDetail: 'Бухгалтер', img: valeryImg, status: 'В процессе' },
    { name: 'Григорий Меньшов', category: 'семья', categoryDetail: 'Друг', img: gregoryImg, status: 'В процессе' },


    { name: 'Мария Титова', category: 'работа', categoryDetail: 'Руководитель отдела', img: mariaImg, status: 'Долгосрочные', touches: '15+ касаний' },
    { name: 'Антон Никулин', category: 'семья', categoryDetail: 'Друг с вуза', img: antonImg, status: 'Долгосрочные' },
    { name: 'Елена Колачева', category: 'работа', categoryDetail: 'Копирайтер', img: elenaImg, status: 'Долгосрочные' },
    { name: 'Мария Титова', category: 'работа', categoryDetail: 'Руководитель отдела', img: mariaImg, status: 'Долгосрочные' },
    { name: 'Антон Никулин', category: 'семья', categoryDetail: 'Друг с вуза', img: antonImg, status: 'Долгосрочные' },
    { name: 'Елена Колачева', category: 'работа', categoryDetail: 'Копирайтер', img: elenaImg, status: 'Долгосрочные' },


    { name: 'Светлана Мелина', category: 'спорт', categoryDetail: 'танцы, группа 6', img: svetlanaImg, status: 'Конфликт' },
    { name: 'Михаил Иванов', category: 'работа', categoryDetail: 'Админ', img: mihailImg, status: 'Конфликт' },
    { name: 'Наталья Берцева', category: 'спорт', categoryDetail: 'танцы, группа 6', img: nataliaaImg, status: 'Конфликт' },
    { name: 'Светлана Мелина', category: 'спорт', categoryDetail: 'танцы, группа 6', img: svetlanaImg, status: 'Конфликт' },
    { name: 'Михаил Иванов', category: 'работа', categoryDetail: 'Админ', img: mihailImg, status: 'Конфликт' },
    { name: 'Наталья Берцева', category: 'спорт', categoryDetail: 'танцы, группа 6', img: nataliaaImg, status: 'Конфликт' },
  ];

  const peoplesData = [
    { name: 'Петр Липин', category: 'работа', categoryDetail: 'переводчик', img: petrImg, lastContact: '27.06.24', newTasks: 3, newMessages: 1 },
    { name: 'Алина Сомова', category: 'работа', categoryDetail: 'менеджер', img: somovaImg, lastContact: '27.06.24', newTasks: 2, newMessages: 3 },
    { name: 'Мария Титова', category: 'работа', categoryDetail: 'руководитель отдела', img: titovaImg, lastContact: '27.06.24', newTasks: 3, newMessages: 1 },
    { name: 'Анна Мишина', category: 'работа', categoryDetail: 'дизайнер', img: pashinaImg, lastContact: '27.06.24', newTasks: 3, newMessages: 1 },
    { name: 'Олег Петров', category: 'работа', categoryDetail: 'технический директор', img: olegImg, lastContact: '27.06.24', newTasks: 3, newMessages: 1 },
    { name: 'Михайил Захаров', category: 'работа', categoryDetail: 'видеоинженер', img: zaharovImg, lastContact: '27.06.24', newTasks: null, newMessages: null },
    { name: 'Алиса Смирнова', category: 'работа', categoryDetail: 'дизайнер самокат', img: alisaImg, lastContact: '27.06.24', newTasks: null, newMessages: null },
    { name: 'Анна Яковлева', category: 'работа', categoryDetail: 'HR-Сбер', img: annaImg, lastContact: '27.06.24', newTasks: null, newMessages: null },

    { name: 'Анна Ли', category: 'спорт', categoryDetail: 'танцы', img: liImg, lastContact: '15.06.24', newTasks: null, newMessages: null },
    { name: 'Антон Петров', category: 'спорт', categoryDetail: 'волейбол', img: petrovImg, lastContact: '15.06.24', newTasks: null, newMessages: null },
    { name: 'Алена Смирнова', category: 'спорт', categoryDetail: 'тренер бокс', img: smirovaImg, lastContact: '15.06.24', newTasks: null, newMessages: null },
    { name: 'Евгений Иванов', category: 'спорт', categoryDetail: 'тренер волейбол', img: evgeniyImg, lastContact: '15.06.24', newTasks: null, newMessages: null },
    { name: 'Михаил Ляпин', category: 'спорт', categoryDetail: 'бокс', img: lyapinImg, lastContact: '15.06.24', newTasks: null, newMessages: null },
    { name: 'Михаил Ляпин', category: 'спорт', categoryDetail: 'бокс', img: lyapinImg, lastContact: '15.06.24', newTasks: null, newMessages: null },


    { name: 'Анастасия Смирнова', category: 'личные', categoryDetail: 'сестра', img: anasImg, lastContact: '21.06.24', newTasks: null, newMessages: null },
    { name: 'Арина Смирнова', category: 'личные', categoryDetail: 'сестра', img: smirnovaImg, lastContact: '15.06.24', newTasks: null, newMessages: null },
    { name: 'Михаил  Лобов', category: 'личные', categoryDetail: 'друг', img: lobovImg, lastContact: '15.06.24', newTasks: null, newMessages: null },
    { name: 'Анрей Панин', category: 'личные', categoryDetail: 'дядя', img: paninImg, lastContact: '15.06.24', newTasks: null, newMessages: null },
    { name: 'Евгений Чесноков', category: 'личные', categoryDetail: 'друг', img: chesnovImg, lastContact: '15.06.24', newTasks: null, newMessages: null },
    { name: 'Анна Попова', category: 'личные', categoryDetail: 'троюродная тетя', img: popovaImg, lastContact: '15.06.24', newTasks: null, newMessages: null },
    { name: 'Алексей Будин', category: 'личные', categoryDetail: 'инструктор', img: alekseyImg, lastContact: '15.06.24', newTasks: null, newMessages: null },
    { name: 'Борис Шашкин', category: 'личные', categoryDetail: 'директор ПС', img: borisImg, lastContact: '15.06.24', newTasks: null, newMessages: null },




  ]
  return (
    <div className="App">
      <SideBar />
      <main className='main'>
        <Header />
        <Routes>
          <Route path='/' element={<Contacts contactsData={contactsData}/>}/>
          <Route path='/more-detail' element={<MoreDetail/>} />
          <Route path='/kanban' element={<Kanban peoplesData={peoplesData}/>} />
          <Route path='/neuronka' element={<Neuron peoplesData={peoplesData}/>} />
        </Routes>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
