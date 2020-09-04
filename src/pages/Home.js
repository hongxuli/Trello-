import React from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import {useSelector} from 'react-redux'

import Grid from "@material-ui/core/Grid";
import '../asset/home.scss';
import AppLayout from "../layout/App";
import BoardThumbnail from "../components/BoardThumbnail";
import CreateBoard from '../components/TrelloCreateBoard'


// Modal status
const useModalController = () =>{
   const [ModalOpen, setModalOpen] = React.useState(false);
   const modalHandlerOpen = () => {
     setModalOpen(true);
   };
   const modalHandlerClose = () => {
     setModalOpen(false);
   };

   return {ModalOpen, modalHandlerOpen, modalHandlerClose};
}




const NewBoard = (props) => {
       const { modalHandlerOpen } = props;
       const title = "create new board";
       return (
         <Grid item xs={6} sm={4} md={3} onClick={modalHandlerOpen}>
           <BoardThumbnail title={title} CreateBoard ={true}/>
         </Grid>
       );
     };



const RenderBoards = () => {
      const boardOrder = useSelector((state) => state.boardOrder);
      const boards = useSelector((state) => state.boards);
       return boardOrder.map((boardID) => {
         const board = boards[boardID];

         return (
           <Grid item xs={6} sm={4} md={3} key={boardID}>
             <Link
               key={boardID}
               to={`/${board.id}`}
               style={{ textDecoration: "none" }}
             >
               <BoardThumbnail {...board} />
             </Link>
           </Grid>
         );
       });
     }; 


 const Content = (props) => {
   const { modalHandlerOpen, ModalOpen, modalHandlerClose } = props;
   return (
     <div className="Home__main">
       {/* {renderCreateBoard()} */}
       <div className="Home__thumbnails-container">
         <h2>My Board</h2>
         <Grid container spacing={3}>
           {<RenderBoards/>}
           {<NewBoard modalHandlerOpen={modalHandlerOpen} />}
         </Grid>
         <CreateBoard
           modalState={ModalOpen}
           modalHandlerClose={modalHandlerClose}
         />
       </div>
     </div>
   );
 };


 const Home = ({boards, boardOrder, dispatch}) => {

    const { ModalOpen, modalHandlerClose, modalHandlerOpen } = useModalController();


    return (
      <AppLayout
        content={
          <Content
            modalHandlerOpen={modalHandlerOpen}
            modalHandlerClose={modalHandlerClose}
            ModalOpen={ModalOpen}
          />
        }
      ></AppLayout>
    );
     
}

const mapStateToProps = (state) => ({
  boards: state.boards,
  boardOrder: state.boardOrder,
});

export default connect(mapStateToProps)(Home)


