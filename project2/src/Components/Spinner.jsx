import React, { Component } from 'react'
import loading from './loading.gif';

export class Spinner extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className='text-center'>
                <img src={loading} style={{ width: "30px" }} alt="" />
            </div>
        )
    }
}

export default Spinner
