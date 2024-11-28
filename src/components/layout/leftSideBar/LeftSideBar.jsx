import React, { useContext, useState } from "react";
import styled from "styled-components";
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

const DivLeftSideBar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 30%;
  border: 1px solid #e0e0e0;
  padding-top: 8vh;
  align-items: center;
`;

const DivOptionsSideBar = styled.div`
  display: flex;
  gap: 1rem;
  width: fit-content;
  cursor: pointer;
  padding: 10px;
  border-radius: 15px;
  svg {
    font-size: 30px;
    color: #00bfff; //linear-gradient(135deg, #1e90ff, #00bfff, #add8e6);
  }
  p {
    font-size: 20px;
    color: gray;
    font-weight: ${(props) => (props.$iconPageFill ? "bold" : "ligther")};
  }
  &:hover {
    transition: 0.1s ease-in;
    background-color: #e0e0e0;
  }
`;

const DivProfile = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2vh;
  padding: 10px;
  align-items: center;
  cursor: pointer;
  border-radius: 15px;
  svg {
    font-size: 40px;
    color: #dcd8d8;
  }
  img {
    width: 60px;
    height: 60px;
    border-radius: 70px;
  }
  p {
    font-size: 13px;
    font-weight: bold;
  }
  &:hover {
    transition: 0.1s ease-in;
    background-color: #e0e0e0;
    svg {
      color: gray;
    }
  }
`;

const DivSvgMoreInformProfile = styled.div`
  svg {
    font-size: 15px;
    color: gray;
  }
`;

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
