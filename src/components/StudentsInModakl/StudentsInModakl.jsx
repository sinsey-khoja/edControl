import React from "react";
import { PhoneIcon } from "../../assets/icons";
import { GroupsIcon } from "../../assets/icons/sidebar-menu";
import "./StudentsInModakl.scss";
const StudentsInModakl = ({ studentInfo }) => {
  return (
    <>
      <div className="student-card">
        <img src={studentInfo.studentImg} alt="" />
        <div className="student-card_info">
          <h3>{studentInfo.studentName}</h3>
          <p>
            <i>
              <PhoneIcon width="16" height="16" />
            </i>
            {studentInfo.studentTel}
          </p>
          <p>
            <i>
              <GroupsIcon width="16" height="16" />
            </i>
            {studentInfo.studentGrup}
          </p>
        </div>
      </div>
    </>
  );
};

export default StudentsInModakl;
