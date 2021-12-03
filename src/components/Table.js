import React from 'react'
import TableRow from './TableRow'

let data = [
    {
        title: "Billy Elliot", 
        length: 123,
        rating: 5,
        genres: ["Drama","Comedia"],
        awards: 2
    },
    {
        title: "Alicia en el país de las maravillas", 
        length: 142,
        rating: 4.8,
        genres: ["Drama","Comedia","Acción"],
        awards: 3
    }
]
export default function Table() {
    return (
        <div className="container">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Titulo</th>
                    <th scope="col">Duración</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Genero</th>
                    <th scope="col">Premios</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return <TableRow
                                key = {item + item.title}
                                title= {item.title}
                                length = {item.length}
                                rating = {item.rating}
                                genres = {item.genres}
                                awards = {item.awards}
                            />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
