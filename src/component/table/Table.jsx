import React from "react";

const tables = (props) => {
    return (
        <tr key={props.data.id} >
            <th scope="row">{props.data.id}</th>
            <td>{props.data.userId}</td>
            <td>{props.data.title}</td>
            <td>{props.data.body}</td>
            <td>
                <button type="button" className="badge text-bg-primary">Update</button>
                <button type="button" className="badge text-bg-danger" onClick={() => props.hapus(props.data.id)}>Delete</button>
            </td>
        </tr>

    )
}

export default tables;