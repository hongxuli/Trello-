import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const StyledButton = styled(Button)`
  // && {
  //   color: white;
  //   background: #5aac44;
  // }
`;

const TrelloButton = ({ children, onClick, color='primary'}) => {
  return (
    <StyledButton variant="contained" color={color} onMouseDown={onClick}>
      {children}
    </StyledButton>
  );
};

export default TrelloButton;
