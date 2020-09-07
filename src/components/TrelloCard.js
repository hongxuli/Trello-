import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import {  Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import Icon from "@material-ui/core/Icon";
import { connect } from "react-redux";
import TrelloForm from "./public/TrelloForm";
import TrelloButton from "./public/TrelloButton";
import { editCard, deleteCard } from "../actions";




 const CardContainer = styled.div`
   margin: 0 0 8px 0;
   position: relative;
   max-width: 100%;
   word-wrap: break-word;
 `;

 const EditButton = styled(Icon)`
   position: absolute;
   display: none;
   right: 5px;
   top: 5px;
   opacity: 0.5;
   ${CardContainer}:hover & {
     display: block;
     cursor: pointer;
   }
   &:hover {
     opacity: 0.8;
   }
 `;

 const DeleteButton = styled(Icon)`
   position: absolute;
   display: none;
   right: 5px;
   bottom: 5px;
   opacity: 0.5;
   ${CardContainer}:hover & {
     display: block;
     cursor: pointer;
   }
   &:hover {
     opacity: 0.8;
   }
 `;


const TrelloCard = ( {text, id, index, listID, dispatch} ) => {

 const [isEditing, setIsEditing] = useState(false)
 const [cardText,setText] = useState(text)

 const saveCard = (e)=>{
    e.preventDefault();
    dispatch(editCard(id,listID, cardText));
    setIsEditing(false);
 }
 const closeForm =()=>{
   setIsEditing(false)
   
 }
 const handleChange = (e)=>{
  setText(e.target.value)
  
 }
 const handleDeleteCard = ()=>{
   
    dispatch(deleteCard(id, listID));
 }


  const renderEditForm=()=>{
    return (
      <TrelloForm
        text={cardText}
        onChange={handleChange}
        closeForm={closeForm}
      >
        <TrelloButton onClick={saveCard}>Save</TrelloButton>
      </TrelloForm>
    );
  }

  const renderCard = ( ) => {
    return (
      <Draggable draggableId={String(id)} index={index}>
        {provided => (
          <CardContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <Card>
              <EditButton
                onMouseDown={e => {
                  setIsEditing(true);
                }}
              >
                edit
              </EditButton>
              <DeleteButton onMouseDown={handleDeleteCard}>delete</DeleteButton>
              <CardContent>
                <Typography>{text}</Typography>
              </CardContent>
            </Card>
          </CardContainer>
        )}
      </Draggable>
    );
  };

  return isEditing ? renderEditForm() : renderCard();
};



export default connect()(TrelloCard);