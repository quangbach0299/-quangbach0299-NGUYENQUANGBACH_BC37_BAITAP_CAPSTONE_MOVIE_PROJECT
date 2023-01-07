import _ from 'lodash'
import React from 'react'

export default function FillLodash() {
    var arr = [{
        id: "1", name: "IphoneX"
    }, {
        id: "2", name: "IphoneY"
    }, {
        id: "3", name: "IphoneZ"
    }]

    _.fill(arr, { id: 5, name: "Samsung" }, 1,2);
    console.log(arr);


    return (
        <div>FillLodash</div>
    )
}
