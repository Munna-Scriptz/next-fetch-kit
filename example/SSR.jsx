import React from 'react'

const SSR = () => {

    // Always fresh data
    const user = await api.get("/user", {
        cache: "no-store",
    });


    return (
        <div>
            SSR
        </div>
    )
}

export default SSR