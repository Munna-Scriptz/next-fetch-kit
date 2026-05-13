import React from 'react'

const Catch_Tags = () => {

    // Get with tags example
    const products = await api.get("/products", {
        tags: ["products"],
    });


    
    return (
        <div>
            Catch_Tags
        </div>
    )
}

export default Catch_Tags