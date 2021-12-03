import React from 'react'
import Metric from './Metric'
let data = [
    {
        color: 'primary',
        title: 'Total awards',
        value: 79,
        icon : 'fa-award'
    },
    {
        color: 'success',
        title: 'Movies in Data Base',
        value: 21,
        icon : 'fa-film'
    },
    {
        color: 'warning',
        title: 'Actor Quantity',
        value: 49,
        icon : 'fa-user'
    }
]
export default function ContentRowMovies() {
    return (
            <div className="row">
                
                {data.map( (info, i) => {
                    return <Metric 
                    key={i + info.title}
                    color = {info.color}
                    title = {info.title}
                    value = {info.value}
                    icon = {info.icon}
                    />
                })}
            </div>
    )
}
