import React from 'react'
import InputControl from '../../common/InputControl'

function TrueOrFalse() {
    return (
        <div className='flex flex-col gap-2'>
            <InputControl placeholder='Add Quiz title' />

            <InputControl value="True" />
            <InputControl value="False" />


        </div>
    )
}

export default TrueOrFalse