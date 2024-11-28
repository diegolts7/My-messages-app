import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MdOutlineLogout } from "react-icons/md";
import styled from "styled-components";

const DivOptionMenu = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 7px;
  align-items: center;
  cursor: pointer;
  svg {
    color: #00bfff;
    font-size: 18px;
  }
  &:hover {
    opacity: 0.7;
  }
`;

export default function BasicMenu({ anchorEl, open, handleClose, signOut }) {
  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <DivOptionMenu onClick={signOut}>
          <MdOutlineLogout />
          <p>Logout</p>
        </DivOptionMenu>
      </Menu>
    </div>
  );
}
