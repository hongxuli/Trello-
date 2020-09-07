import React from 'react';
import Icon from "@material-ui/core/Icon";
import Textarea from "react-textarea-autosize";
import Card from "@material-ui/core/Card";
import styled from "styled-components";
import '../../asset/trelloForm.scss'

// const Container = styled.div`
//   width: 300px;
//   padding: 8px;
//   margin-bottom: 8px;
//   display: flex;
//   flex: column;
// `;

const StyledCard = styled(Card)`
  min-height: 85px;
  padding: 6px 8px 2px;
`;

const StyledTextArea = styled(Textarea)`
  resize: none;
  width: 260px;
  overflow: hidden;
  outline: none;
  border: none;
`;

const StyledIcon = styled(Icon)`
  margin-left: 8px;
  cursor: pointer;
`;


// const ButtonContainer = styled.div`
//   margin-top: 8px;
//   display: flex;
//   align-items: center;
//   margin-left: 8px;
// `;


 

class TrelloFrom extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount(){
  //   debugger
  // }
  render() {
    const { list, text='',onChange, closeForm,children} = this.props
    const placeholder = list
      ? "Enter list title..."
      : "Enter a title for this card...";

    return (
      <div className="TrelloForm__container">
        <div className="TrelloForm__cardContainer">
          <StyledCard>
            <StyledTextArea
              value={text}
              autoFocus
              placeholder={placeholder}
              autoFocus
              onBlur={closeForm}
              onChange={(e) => onChange(e)}
            ></StyledTextArea>
          </StyledCard>
        </div>

        <div className="TrelloForm__buttonContainer">
          {children}
          <StyledIcon onMouseDown={closeForm}>close</StyledIcon>
        </div>
      </div>
    );
  }
}



export default TrelloFrom;