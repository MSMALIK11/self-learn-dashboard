import React from 'react'
import InputControl from '../common/InputControl'
import PrimaryButton from '../common/PrimaryButton'
import CreatedQuizCourseLists from './CreatedQuizCourseLists'
import Heading from '../common/Heading'

function AddNewQuiz() {
    return (
        <div>
            <div className="p-3 grid grid-cols-2 ">
                <div className='bg-blue-500 p-3'>

                    <Heading text='Add New Quiz course' color='#fff' />
                </div>


            </div>
            <section className='grid grid-cols-2 gap-4'>

                <div className='flex flex-col gap-2 shadow-md bg-slate-100 p-4 '>
                    <InputControl placeholder='Title' />
                    <InputControl readOnly placeholder='Slug' />
                    <textarea className='p-3 rounded-md shadow-md' placeholder='Write Description' name="description" id="description" cols={10} rows={4}></textarea>
                    <InputControl placeholder='Quiz Icon name' />
                    <div className='flex justify-end mt-10'>

                        <PrimaryButton title="Submit" />
                    </div>
                </div>
                <div className="right-side">
                    <CreatedQuizCourseLists />
                </div>
            </section>
        </div>
    )
}

export default AddNewQuiz