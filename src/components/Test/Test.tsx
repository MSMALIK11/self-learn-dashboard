import React from 'react';
import Test2 from './Test2';



const content = [
    {
        "type": 3,
        "maxLength": 8
    },
    {
        "type": 1,
        "content": "."
    },
    {
        "type": 3,
        "maxLength": 5
    },
    {
        "type": 1,
        "content": "(\"Game Over\");"
    }
];

const options = [
    {
        orderNumber: 1,
        text: 'log'
    },
    {
        orderNumber: 2,
        text: 'console'
    }
]

const BlankBox = ({ item }) => {
    return (
        <div className='blankBox bg-white shadow-lg flex justify-center items-center  rounded-md min-w-[50px] w-auto p-4 h-10 '>
            <p>{item?.text}</p>
        </div>
    )
}
const TextBox = ({ item }) => {

    return (
        <div className='p-4'>
            <p>{item.content}</p>
        </div>
    )
}

function Test() {
    return (
        <div>


            <h5>Test</h5>



            <Test2 />

            <main className='flex gap-1 items-center'>

                {
                    content?.map((item) => {
                        return (
                            <>
                                {
                                    item.type === 3 && <BlankBox />
                                }
                                {
                                    item.type === 1 && <TextBox item={item} />
                                }

                            </>
                        )
                    })
                }
            </main>


            <div className="ans flex gap-4 mt-5">
                {
                    options?.map((options) => <BlankBox item={options} />)
                }
            </div>
        </div>
    )
}

export default Test