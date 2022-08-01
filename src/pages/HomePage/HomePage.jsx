import React from "react";
import {
  GroupsIcon,
  TeachersIcon,
  StudentsIcon,
  ClientsIcon,
} from "../../assets/icons/sidebar-menu";
import Groups from "../../components/Groups/Groups";
import Stats from "../../components/Stats/Stats";
import ImgEnglishBeginer from "../../assets/imgs/group-photo.jpg";
import ImgFrontEndDev from "../../assets/imgs/unsplash_eYpcLDXHVb0.jpg";
import ImgArabicInt from "../../assets/imgs/unsplash_POQpaIVxsPg.jpg";
import ImgAppDevInFlutter from "../../assets/imgs/unsplash_OqOhYRjn_JY.jpg";
import Teacher1 from "../../assets/imgs/teacher-photo-3.png"
import Teacher2 from "../../assets/imgs/teacher-photo-2.png"
import Teacher3 from "../../assets/imgs/teacher-photo-1.png"
import Teacher4 from "../../assets/imgs/teacher-photo.png"
import Teachers from "../../components/Teachers/Teachers";
import "./HomePage.scss";
const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <h2 className="home-page__title">Общая статистика</h2>
        <div className="total-stats">
          <Stats
            name="группы"
            colorBg="#377dff1a"
            num="64"
            icon={<GroupsIcon color="#377DFF" />}
          />
          <Stats
            name="учителей"
            colorBg="#FF4F371a"
            num="80"
            icon={<TeachersIcon color="#FF4F37" />}
          />
          <Stats
            name="студентов "
            colorBg="#0864201a"
            num="1200"
            icon={<StudentsIcon color="#086420" />}
          />
          <Stats
            name="клиента"
            colorBg="#DE13FF1a"
            num="2492"
            icon={<ClientsIcon color="#DE13FF" />}
          />
        </div>
        <h2 className="home-page__title">Активные группы</h2>
        <div className="active-groups">
          <Groups
            groupsInfo={{
              lsType: "English",
              colorBtn: "#FF37A3",
              imgCart: `${ImgEnglishBeginer}`,
              teacherName: "Абдурахмон Умаралиев",
              daysLs: "Вт, Чт, Cб - 12:30",
              duration: "6 месяцев",
              roomNum: "2 - комнатная",
              studentsNum: "24 студента",
              LsName: "English Beginner",
            }}
          />
          <Groups
            groupsInfo={{
              lsType: "Frontend",
              colorBtn: "#FD8312",
              imgCart: `${ImgFrontEndDev}`,
              teacherName: "Наримон Каримов",
              daysLs: "Пн, Ср, Пт - 16:30",
              duration: "8 месяцев",
              roomNum: "4 - комнатная",
              studentsNum: "16 студентов",
              LsName: "Frontend Development",
            }}
          />
          <Groups
            groupsInfo={{
              lsType: "Arabic",
              colorBtn: "#01B2EA",
              imgCart: `${ImgArabicInt}`,
              teacherName: "Зафар Абдуллаев",
              daysLs: "Вт, Чт, Cб - 14:00",
              duration: "12 месяцев",
              roomNum: "2 - комнатная",
              studentsNum: "12 студента",
              LsName: "Arabic Intermediate",
            }}
          />
          <Groups
            groupsInfo={{
              lsType: "Mobile",
              colorBtn: "#038720",
              imgCart: `${ImgAppDevInFlutter}`,
              teacherName: "Махмуд Нурмухаммедов",
              daysLs: "Пн, Ср, Пт - 19:00",
              duration: "6 месяцев",
              roomNum: "5 - комнатная",
              studentsNum: "18 студента",
              LsName: "App Development in Flutter",
            }}
          />
        </div>
        <h2 className="home-page__title">Лучшие учителя</h2>
        <div className="best-teachers">
          <Teachers
            teacherInfo={{
              img: `${Teacher1}`,
              teacherName: "Анвар Турсунов",
              teacherTel: "99 402-41-26",
              teachersGrp: "4 группы",
            }}
          />
          <Teachers
            teacherInfo={{
              img: `${Teacher2}`,
              teacherName: "Шерзод Эгамберди..",
              teacherTel: "99 402-41-26",
              teachersGrp: "4 группы",
            }}
          />
          <Teachers
            teacherInfo={{
              img: `${Teacher3}`,
              teacherName: "Толиб Рахматов ",
              teacherTel: "99 402-41-26",
              teachersGrp: "4 группы",
            }}
          />
          <Teachers
            teacherInfo={{
              img: `${Teacher4}`,
              teacherName: "Бобур Акмалов",
              teacherTel: "99 402-41-26 ",
              teachersGrp: "4 группы",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
