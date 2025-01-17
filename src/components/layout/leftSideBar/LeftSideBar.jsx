import { FaUserCircle } from "react-icons/fa";
import {
  GoBookmark,
  GoBookmarkFill,
  GoHome,
  GoHomeFill,
  GoPerson,
  GoPersonFill,
  GoSearch,
} from "react-icons/go";
import { MdMoreHoriz } from "react-icons/md";
import BasicMenu from "../basicMenu/BasicMenu";
import {
  DivLeftSideBar,
  DivOptionsSideBar,
  DivSvgMoreInformProfile,
  DivProfile,
  DivNameProfile,
} from "./styles-left-sideBar";
import { useLeftSideBar } from "./use-left-sidebar";
import { TbCircleCheckFilled } from "react-icons/tb";

const LeftSideBar = () => {
  const {
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
  } = useLeftSideBar();

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

            <DivNameProfile>
              <strong>
                {shortName(user.name)}
                {user.role === "admin" && (
                  <TbCircleCheckFilled color="#007bff" size={15} />
                )}
              </strong>
              <p>{"@" + user.handle}</p>
            </DivNameProfile>

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
