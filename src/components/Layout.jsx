import { NavLink, Outlet } from "react-router-dom";
import { ArrowDownIcon, NotificationIcon, SearchIcon } from "../assets/icons";
import UserAvatar from "../assets/imgs/user-avatar.png";
import Avatar from "../assets/imgs/unsplash_LWfFfA5U5z8.png";
import Logo from "../assets/imgs/idrok-logo1.png";
import {
  ClientsIcon,
  FinanseIcon,
  GroupsIcon,
  HomeIcon,
  RoomsIcon,
  StudentsIcon,
  TeachersIcon,
} from "../assets/icons/sidebar-menu";
import "./Layout.scss";
import SearchModal from "./SearchModal/SearchModal";
import { useState } from "react";

const Layout = () => {
  const [searchModal, setSearchModal] = useState(false);
  let searchDivClassNames = "navbar-search ";

  if (searchModal) searchDivClassNames += "  show";

  let bgModalClassNames = "bg-modal ";
  if (searchModal) bgModalClassNames += " show";

  
  return (
    <>
      <SearchModal isVisible={searchModal} />
      <div
        onClick={() => setSearchModal((state) => !state)}
        className={bgModalClassNames}
      ></div>
      <div className="main">
        <div className="sidebar">
          {/* {'' ?  <img src={Logo} alt="Logo" className="logo" /> : ''} */}
          <img src={Logo} alt="Logo" className="logo" />
          <ul>
            <li>
              <NavLink to="/">
                <HomeIcon /> Главная
              </NavLink>
            </li>
            <li>
              <NavLink to="/groups">
                <GroupsIcon />
                Группы
              </NavLink>
            </li>
            <li>
              <NavLink to="/teachers">
                <TeachersIcon />
                Учителя
              </NavLink>
            </li>
            <li>
              <NavLink to="/students">
                <StudentsIcon />
                Студенты
              </NavLink>
            </li>
            <li>
              <NavLink to="/finance">
                <FinanseIcon />
                Финансы
              </NavLink>
            </li>
            <li>
              <NavLink to="/clients">
                <ClientsIcon />
                Клиенты
              </NavLink>
            </li>
            <li>
              <NavLink to="/rooms">
                <RoomsIcon />
                Комнаты
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="main_content">
          <div className="navbar">
            <div
              onClick={() => setSearchModal((state) => !state)}
              className={searchDivClassNames}
            >
              <SearchIcon />
              <input
                placeholder="Введите имя группы, учителя, ученика или клиента"
                type=""
              />
            </div>
            <div className="navbar-profile">
              <div className="notification">
                <NotificationIcon />
              </div>
              <div className="language">
                <p>Русский</p>
                <ArrowDownIcon />
              </div>
              <div className="user-info">
                <img src={UserAvatar} alt="" />
                <p>Рахмонов Ильхом</p>
                <ArrowDownIcon />
              </div>
              <div className="idrok-info">
                <img src={Avatar} alt="" />
                <p>Idrok Ta’lim - Юну...</p>
                <ArrowDownIcon />
              </div>
            </div>
          </div>
          <div className="outlet">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export { Layout };
