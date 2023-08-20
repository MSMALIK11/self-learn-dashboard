import React from 'react';
import { courseData } from '../lib/constant/courses';
import Heading from '../common/Heading';
import AccordionList from './AccordianView';


function CreatedQuizCourseLists() {
    return (
        <div className='shadow bg-white'>
            <div className="Header bg-blue-500 p-4">
                <Heading text='Quiz Course Lists' color='#fff' />

            </div>
            <div className="lis p-4">


                {
                    courseData?.map((course) => {
                        return (
                            <div className='shadow-md p-3 rounded-md'>

                                <Heading text={course.name} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CreatedQuizCourseLists