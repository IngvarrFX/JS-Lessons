import React from 'react'
import './lesson_4';
import {createHandler, rejectHandler, resolveHandler} from "./lesson_4";

const Lesson4 = () => {
    return (
        <div>
            <button onClick={createHandler} id='btn-create-promise'>Create Promise</button>
            <button onClick={resolveHandler}  id='btn-resolve-promise'>Resolve Promise</button>
            <button onClick={rejectHandler}  id='btn-reject-promise'>Reject Promise</button>
        </div>
    );
}

export default Lesson4;