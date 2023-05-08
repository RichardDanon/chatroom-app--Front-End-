import React from 'react'

function DisplayMessages({ message }) {
    console.log(message)
    return (
        <>
            <div className={message.sender_id === JSON.parse(sessionStorage.getItem('user')).id ? "bubble right" : "bubble left"}
            >
                <p>
                    {message.message.description}
                </p>
                {message.message.image != "" &&
                    <img src={`data:image/jpeg;base64,${message.message.image}`} style={{ width: "100px", height: "100px" }} />
                }
            </div>


        </>
    )
}

export default DisplayMessages