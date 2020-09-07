import React, { PureComponent } from "react";
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloCreate from "./TrelloCreate";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { sort, deleteBoard, setActiveBoard } from "../actions";
import Button from './public/TrelloButton'
import'../asset/board.scss'
const ListsContainer = styled.div`
  display: flex;
  flex-direction:row;
`;

// TODO: Fix performance issue


class TrelloBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { boardID: props.match.params.boardID };
  }

  componentDidMount() {
    // set active trello board here    
    const { boardID } = this.state; 
    this.props.dispatch(setActiveBoard(boardID));
  }

  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    const {boardID} = this.state
    if (!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type,
      )
    );
  };

  deleteBoardHandler = (boardID) => {
    return  () => {
      this.props.dispatch(deleteBoard(boardID));
      this.props.history.push('/')
    };
  };


  render() {
    const { lists, cards, match, boards } = this.props;
    const { boardID } = this.state;    
    const board = boards[boardID];
    if (!board) {
      return <p>Board not found</p>;
    }
    const listOrder = board.lists;

    return (
      <>
        <div className="Board__page">
          <div className="Board_topbar">
            <h2 className="Board__title">{board.title}</h2>
            <div className="Board__delete">
              <Button
                color="secondary"
                onClick={this.deleteBoardHandler(boardID)}
              >
                delete board
              </Button>
            </div>
          </div>
          <div className="Board__content">
            <DragDropContext onDragEnd={this.onDragEnd}>
              <Droppable
                droppableId="all-lists"
                direction="horizontal"
                type="list"
              >
                {(provided) => (
                  <ListsContainer
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {listOrder.map((listID, index) => {
                      const list = lists[listID];
                      if (list) {
                        const listCards = list.cards.map(
                          (cardID) => cards[cardID]
                        );

                        return (
                          <TrelloList
                            listID={list.id}
                            key={list.id}
                            title={list.title}
                            cards={listCards}
                            index={index}
                          />
                        );
                      }
                    })}
                    {provided.placeholder}
                      <TrelloCreate list={lists} boardID={boardID} />
                  </ListsContainer>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists,
  cards: state.cards,
  boards: state.boards,
});

export default connect(mapStateToProps)(TrelloBoard);
