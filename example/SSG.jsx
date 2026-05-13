import React from 'react'

const SSG = () => {

    // Static Site Generation
    const products = await api.get("/products", {
        cache: "force-cache",
    });


    return (
        <div>
            SSG
        </div>
    )
}

export default SSG