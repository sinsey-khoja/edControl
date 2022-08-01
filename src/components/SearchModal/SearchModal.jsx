import React from "react";
import GrupsInModal from "../GrupsInModal/GrupsInModal";
import "./SearchModal.scss";
import ImgEnglishBeginer from "../../assets/imgs/group-photo.jpg";
import ImgFrontEndDev from "../../assets/imgs/unsplash_eYpcLDXHVb0.jpg";
import ImgArabicInt from "../../assets/imgs/unsplash_POQpaIVxsPg.jpg";
import imgStudent2 from "../../assets/imgs/student-photo-1.png";
import imgStudent1 from "../../assets/imgs/student-photo-2.png";
import imgStudent3 from "../../assets/imgs/student-photo.png";
import StudentsInModakl from "../StudentsInModakl/StudentsInModakl";

const SearchModal = ({ isVisible }) => {
  let searchModalClassNames = "search-modal ";
  if (isVisible) searchModalClassNames += "show";
  return (
    <>
      <div className={searchModalClassNames}>
        <h4>Группы</h4>
        <div className="grups-modal">
        <GrupsInModal
          grupInfo={{
            grupImg: `${ImgEnglishBeginer}`,
            grupName: "English Group №17",
            grupType: "English Upper Intermediate",
            grupTeacher: "Абдурахмон Умаралиев",
          }}
        />
        <GrupsInModal
          grupInfo={{
            grupImg: `${ImgFrontEndDev}`,
            grupName: "Frontend Development",
            grupType: "Javascript Basic",
            grupTeacher: "Наримон Каримов",
          }}
        />
        <GrupsInModal
          grupInfo={{
            grupImg: `${ImgArabicInt}`,
            grupName: "Arabic Intermediate",
            grupType: "Arabic Pre Intermediate",
            grupTeacher: "Наримон КаримовЗафар Абдуллаев",
          }}
        />
        </div>
        <h4>Студенты</h4>
        <div className="students-modal">
        <StudentsInModakl
          studentInfo={{
            studentImg: `${imgStudent1}`,
            studentName: "Владимир Зеленин",
            studentTel: "99 402-41-26",
            studentGrup: "4 группы",
          }}
        />
        <StudentsInModakl
          studentInfo={{
            studentImg: `${imgStudent2}`,
            studentName: "Владимир Зеленин",
            studentTel: "99 402-41-26",
            studentGrup: "4 группы",
          }}
        />
        <StudentsInModakl
          studentInfo={{
            studentImg: `${imgStudent3}`,
            studentName: "Владимир Зеленин",
            studentTel: "99 402-41-26",
            studentGrup: "4 группы",
          }}
        />
        </div>
      </div>
    </>
  );
};

export default SearchModal;
