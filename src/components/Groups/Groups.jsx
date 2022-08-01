import React from "react";
import {
  DaysIcon,
  DurationIcon,
  LessonRoomIcon,
  StudentIcon,
  TeacherIcon,
} from "../../assets/icons";
import "./Groups.scss";
const Groups = ({ groupsInfo }) => {
  const lsTypeBtnStyl = {
    background: `${groupsInfo.colorBtn}`,
  }
  return (
    <div className="active-groups__box">
      <span style={lsTypeBtnStyl} className="ls-type-btn">{groupsInfo.lsType}</span>
      <img src={groupsInfo.imgCart} alt="" />
      <h2>{groupsInfo.LsName}</h2>
      <ul className="active-groups__box-info">
        <li>
          <i><TeacherIcon /></i>{groupsInfo.teacherName}
        </li>
        <li>
          <i><DaysIcon /></i>{groupsInfo.daysLs}
        </li>
        <li>
          <i><DurationIcon /></i>{groupsInfo.duration}
        </li>
        <li>
          <i><LessonRoomIcon /></i>{groupsInfo.roomNum}
        </li>
        <li>
          <i><StudentIcon /></i> {groupsInfo.studentsNum}
        </li>
      </ul>
      <h4 className="active-groups__box_moreinfo-btn">Подробнее о группе</h4>
    </div>
  );
};

export default Groups;
