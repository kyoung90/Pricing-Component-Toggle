import React from 'react'

export const PricingCard = (props) => {
    return (
        <div className="card">
            <h4>{props.planName}</h4>
            <p>{props.storage} Storage</p>
            <p>{props.usersAllowed} Users Allowed</p>
            <p>Send up to {props.maxSend}</p>
            <input type="submit" value="LEARN MORE"/>
        </div>
    )
}
