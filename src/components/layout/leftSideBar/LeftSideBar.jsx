import React, { useContext, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { ContextAuth } from "../../../context/authContext/AuthContext";
import {
  GoBookmark,
  GoBookmarkFill,
  GoHome,
  GoHomeFill,
  GoPerson,
  GoPersonFill,
  GoSearch,
} from "react-icons/go";
import { useLocation, useNavigate } from "react-router-dom";
import { MdMoreHoriz } from "react-icons/md";
import BasicMenu from "../basicMenu/BasicMenu";
import {
  DivLeftSideBar,
  DivOptionsSideBar,
  DivSvgMoreInformProfile,
  DivProfile,
} from "./LeftSideBar.Styles";

const LeftSideBar = () => {
  const { signOut, user } = useContext(ContextAuth);
  const [userImg, setUserImg] = useState(
    user.profileImg.srcImg ? user.profileImg.srcImg : null
  );
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const shortName = (name) => {
    const names = name.split(" ");
    if (names.length < 2) {
      return name;
    }

    return `${names[0]} ${names[1]}`;
  };

  return (
    <>
      <BasicMenu
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        signOut={signOut}
      />
      <DivLeftSideBar>
        <div>
          <DivProfile onClick={handleClick}>
            {userImg ? (
              <img src={userImg} alt="profile image" />
            ) : (
              <FaUserCircle />
            )}
            <p>{shortName(user.name)}</p>
            <DivSvgMoreInformProfile>
              <MdMoreHoriz />
            </DivSvgMoreInformProfile>
          </DivProfile>
          <DivOptionsSideBar
            $iconPageFill={location.pathname === "/home"}
            onClick={() => navigate("/home")}
          >
            {location.pathname === "/home" ? <GoHomeFill /> : <GoHome />}

            <p>Pagina Inicial</p>
          </DivOptionsSideBar>
          <DivOptionsSideBar
            $iconPageFill={location.pathname === "/explore"}
            onClick={() => navigate("/explore")}
          >
            <GoSearch />
            <p>Explorar</p>
          </DivOptionsSideBar>
          <DivOptionsSideBar
            $iconPageFill={location.pathname === "/save"}
            onClick={() => navigate("/save")}
          >
            {location.pathname === "/save" ? (
              <GoBookmarkFill />
            ) : (
              <GoBookmark />
            )}
            <p>Itens salvos</p>
          </DivOptionsSideBar>
          <DivOptionsSideBar
            $iconPageFill={location.pathname === `/${user._id}`}
            onClick={() => navigate(`/${user._id}`)}
          >
            {location.pathname === `/${user._id}` ? (
              <GoPersonFill />
            ) : (
              <GoPerson />
            )}
            <p>Perfil</p>
          </DivOptionsSideBar>
        </div>
      </DivLeftSideBar>
    </>
  );
};

export default LeftSideBar;
