import { useContext, useState } from "react";
import { ContextAuth } from "../../../context/authContext/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

export const useLeftSideBar = () => {
  const { signOut, user } = useContext(ContextAuth);
  const [userImg, setUserImg] = useState(
    user.profileImg.srcImg ? user.profileImg.srcImg : null
  );
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
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

  return {
    signOut,
    userImg,
    navigate,
    location,
    open,
    handleClick,
    handleClose,
    shortName,
    anchorEl,
    user,
  };
};
