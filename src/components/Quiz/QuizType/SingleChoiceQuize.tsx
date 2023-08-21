import React from 'react'
import InputControl from '../../common/InputControl'
import PrimaryButton from '../../common/PrimaryButton'

function SingleChoiceQuize() {
    return (
        <div className='w-full bg-white shadow-lg px-4 pt-4 pb-4'>
            <div className='flex w-full items-center gap-2'>
                <div className='flex-1'>
                    <InputControl event={(() => { })} name="quiz_question" placeholder='Enter question' />

                </div>



            </div>
            <div className="ans-options mt-4 grid grid-cols-2  gap-10 p-0 m-0">
                <InputControl event={(() => { })} name="quiz_question" placeholder='Ans. 1*' />

                <InputControl event={(() => { })} name="quiz_question" placeholder='Ans. 2*' />

                <InputControl event={(() => { })} name="quiz_question" placeholder='Ans 3' />
                <InputControl event={(() => { })} name="quiz_question" placeholder='Correct ans.*' />

            </div>

            <div className='flex justify-end mt-5'>
                <PrimaryButton title='Add' />
            </div>

        </div>
    )
}

export default SingleChoiceQuize