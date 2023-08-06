import React from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

const DropdownBttn = ({ name, icon }) => {
  return (
    <>
      <UncontrolledDropdown className="me-2" direction="down">
        <DropdownToggle
          caret
          color="secondary"
          outline
          style={{ borderRadius: "16px" }}
        >
          {name} {icon}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Action1</DropdownItem>
          <DropdownItem>Action2</DropdownItem>
          <DropdownItem>Action3</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );
};

export default DropdownBttn;
