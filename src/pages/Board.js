import React from 'react'
import AppLayout from '../layout/App'
import TrelloBoard from '../components/TrelloBoard'
import PropTypes from 'prop-types'

function Board(props) {
    return <AppLayout content={<TrelloBoard {...props}></TrelloBoard>}></AppLayout>;
}

Board.propTypes = {

}

export default Board

