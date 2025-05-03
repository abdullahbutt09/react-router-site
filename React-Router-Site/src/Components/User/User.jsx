import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const {id} = useParams()
    return(
        <div className="text-center text-3xl font-bold">User: {id}</div>
    )
}

export default User;