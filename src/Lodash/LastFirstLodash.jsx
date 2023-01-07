import React from 'react';
import _ from "lodash";

export default function LastFirstLodash() {
    const arrStudent = [
        { id: 1, name: "Peter" },
        { id: 2, name: "Jhon" }, { id: 3, name: "Rety" },
    ];

    const arr = [["001", "Alice"], ["002", "Tiiru"], ["003", "Bari"]];

    const [id, name] = _.first(arr);
    const [id2, name2] = _.last(arr);


    return (
        <div>LastFirstLodash
            <p>First Item: {_.first(arrStudent).name}</p>
            <p>Last Item: {_.last(arrStudent).name}</p>
            <hr />
            <p>First Item : {id}-{name} </p>
            <p>Last Item : {id2}-{name2} </p>
        </div>

    )
}
