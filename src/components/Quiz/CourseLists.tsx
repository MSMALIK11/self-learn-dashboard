import React from 'react';
import { courseData } from '../lib/constant/courses';
import Heading from '../common/Heading';
import { Link } from 'react-router-dom';

function CourseLists() {
    console.log('coursr', courseData)
    return (
        <div className='flex flex-wrap gap-4 mt-16'>

            {
                courseData?.slice(0, 15)?.map((course) => {

                    return (
                        <div key={course.name} className='flex card flex-col relative mb-10' >

                            <img width={70} className='shadow-lg rounded-full absolute top-[-40px]' src={course?.uiConfigurations.iconUrl} alt="" />
                            <div>
                                <Link to={`/course/quiz/${course.name}/content/add`}>
                                    <Heading text={course.name} />
                                </Link>

                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default CourseLists