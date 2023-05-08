import DisplayUsersTemplate from './DisplayUsersTemplate';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
//This class is the one we use to display the users present in the database
function DisplayUsers() {

    const [users, setUsers] = useState([]);


    const loadUsers = () => {
        axios.get("http://127.0.0.1:8000/api/users")
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response.data);
                    setUsers(response.data);

                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    useEffect(() => {
        loadUsers();
    }, []);
//this decides when to refresh
    useEffect(() => {
        const timeSpan = setInterval(() => {
            loadUsers();
        }, 10000);

        return () => clearInterval(timeSpan);
    }, []);
    return (
        <div>
            {
                users.map((user) => (
                    <DisplayUsersTemplate
                        key={user.id}
                        user={user}
                    />
                ))}
        </div>
    )
}

export default DisplayUsers