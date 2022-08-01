import React from "react";
import { CourseIcon, TeacherIcon } from "../../assets/icons";
import "./GrupsInModal.scss";
const GrupsInModal = ({ grupInfo }) => {
  return (
    <>
      <div className="grup-card">
        <img src={grupInfo.grupImg} alt="Grup Img" />
        <div className="grup-card_info">
          <h3>{grupInfo.grupName}</h3>
          <p>
            <i>
              <CourseIcon width="16" height="16" />
            </i>
            {grupInfo.grupType}
          </p>
          <p>
            <i>
              <TeacherIcon width="16" height="16" />
            </i>
            {grupInfo.grupTeacher}
          </p>
        </div>
      </div>
    </>
  );
};

export default GrupsInModal;
