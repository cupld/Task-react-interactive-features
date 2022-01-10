import React from 'react'
import cookies from "../products"

function CookieDetail({ cookie }) {
    return (
        <div>
            <h1>{CookieDetail.name}</h1>
            <img src={cookie.image} />
            <p>{cooki.price}</p>
            <p>{cookie.description}</p>
        </div>
    )
}

export default CookieDetail

