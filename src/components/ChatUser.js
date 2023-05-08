import axios from 'axios';

//don't forget if you want to add it, and test it, just add it to app.js
function ChatUser({ user }){
    return (
        <div onClick={() => {
            sessionStorage.setItem('targetUser', JSON.stringify(user))
            console.log(sessionStorage.getItem('targetUser'))
        }}
            style={JSON.parse(sessionStorage.getItem('user')).id == user.id ? { display: 'none' } : {}}>
            {user.username}

        </div >
    )
}
export default ChatUser;