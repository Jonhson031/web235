import React from 'react'

function CharCom(props) {
    return (
        <div>
            <h2>{props.CharOrgs.name}</h2>
            <p>{props.CharOrgs.description}</p>
        </div>
    )
}

export default CharCom
