import React,{useState} from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { addBoard } from "../actions";

import BoardThumbnail from "./BoardThumbnail";


const Thumbnails = styled.div`
  flex: 1;
  width: 100%;
  height: 50%;
  margin-Top: 50px;
  padding: 0 10vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const CreateTitle = styled.h3`
  font-size: 2rem;
  color: #162b4d;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;

const CreateInput = styled.input`
  width: 80vw;
  height: 60px;
  font-size: 1.5rem;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 3px;
  border: none;
  outline-color: grey;
  box-shadow: 0 2px 4px grey;
  align-self: center;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;



 const Home = ({boards, boardOrder, dispatch}) => {

     const [newBoardTitle, setNewBoardTitle] = useState("");
     const handleChange = (e) => {
       setNewBoardTitle(e.target.value);
     };
     const handleSubmit = (e) => {
       e.preventDefault();
       dispatch(addBoard(newBoardTitle));
      setNewBoardTitle('');
     };

     const renderBoards = () => {
       return boardOrder.map((boardID) => {
         const board = boards[boardID];

         return (
           <Link
             key={boardID}
             to={`/${board.id}`}
             style={{ textDecoration: "none" }}
           >
             <BoardThumbnail {...board} />
           </Link>
         );
       });
     }; 

     const renderCreateBoard = () => {
       return (
         <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
           <CreateTitle>Create a new Board</CreateTitle>
           <CreateInput
             onChange={handleChange}
             value={newBoardTitle}
             placeholder="Your boards title..."
             type="text"
           />
         </form>
       );
     };

     return (
       <HomeContainer>
         {renderCreateBoard()}
         <Thumbnails>{renderBoards()}</Thumbnails>
       </HomeContainer>
     );
}

const mapStateToProps = (state) => ({
  boards: state.boards,
  boardOrder: state.boardOrder,
});

export default connect(mapStateToProps)(Home)