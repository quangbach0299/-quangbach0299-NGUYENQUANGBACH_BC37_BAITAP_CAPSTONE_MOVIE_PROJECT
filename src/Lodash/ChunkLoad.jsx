import _ from 'lodash';
import React from 'react'

export default function ChunkLoad() {
    const arr = ["id", 1, "name", "Khai", "info", "cybersoft"];

    const result = _.chunk(arr, 2);
    console.log(result);

    const arrString = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a18", "a19", "a10", "a13", "a154", "a199"];
    const result2 = _.chunk(arrString,3);
    console.log(result2);

    return (
        <div>ChunkLoad

        </div>

    )
}
