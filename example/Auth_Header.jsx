import React from 'react'

const Auth_Header = () => {

    // Get with auth headers example
    await api.get("/user", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });


    
    return (
        <div>
            Auth_Header
        </div>
    )
}

export default Auth_Header