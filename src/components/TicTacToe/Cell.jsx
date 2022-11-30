import React from 'react'
import './TicTacToe.css'

const Cell = ({ num }) => {

    // click handler
    const handleClick = () => {
        alert('cell clicked')
    }

    return <td onClick={() => handleClick(num)}>$</td>
}
export default Cell