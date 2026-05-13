import React from 'react'

const ISR = () => {

    // Revalidate every 60 seconds
    const products = await api.get("/products", {
        revalidate: 60,
    });
    

    return (
        <div>
            ISR
        </div>
    )
}

export default ISR