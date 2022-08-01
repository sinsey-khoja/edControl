import React from 'react'
import { PhoneIcon } from '../../assets/icons'
import { GroupsIcon } from '../../assets/icons/sidebar-menu'
import './Teachers.scss'
const Teachers = ({teacherInfo}) => {
  return (
    <div className='best-teachers__box'>
      <div className="best-teachers__box_info">
      <img src={teacherInfo.img} alt="" />
      <div className="info-text">
        <h3>{teacherInfo.teacherName}</h3>
        <p><i><PhoneIcon/></i> {teacherInfo.teacherTel}</p>
        <p><i><GroupsIcon/></i>{teacherInfo.teachersGrp}</p>
      </div>
      </div>
      <div className="btn_more-info">
      Подробнее
      </div>
    </div>
  )
}

export default Teachers