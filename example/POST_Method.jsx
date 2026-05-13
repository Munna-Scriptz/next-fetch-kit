import React from 'react'
import { invalidateTag } from '../api/revalidation';

const POST_Method = () => {

    // Post example 
    await api.post("/products/create", {
        name,
        price,
    });

    await invalidateTag("products");

    return (
        <div>
            POST_Method
        </div>
    )
}

export default POST_Method