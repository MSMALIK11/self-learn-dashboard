import React from 'react'
import InputControl from '../../common/InputControl'
import PrimaryButton from '../../common/PrimaryButton'

function ReorderComponent() {
    return (
        <div className='p-3 shadow-lg bg-gray-200'>
            <InputControl placeholder='Add title' />

            <div className='flex flex-col gap-3 mt-10'>
                <InputControl placeholder='Item 1' />
                <InputControl placeholder='Item 2' />
                <InputControl placeholder='Item 3' />
                <InputControl placeholder='Item 4' />

                <div className="mt-5">
                    <InputControl placeholder='Correct ans.' />

                </div>
                <div className='flex justify-end'>
                    <PrimaryButton title='Add' />
                </div>

            </div>
        </div>
    )
}

export default ReorderComponent