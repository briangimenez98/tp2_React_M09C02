import React from 'react'

export default function TableRow({title,length,rating,genres,awards}) {
    return (
        <tr>
            <th scope="row">{title}</th>
            <td>{length}</td>
            <td>{rating}</td>
            <td>
                <ul>
                {genres.map(genre => <li>{genre}</li>)}
                </ul>
            </td>
            <td>{awards}</td>
        </tr>
    )
}
