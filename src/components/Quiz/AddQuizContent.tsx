import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Heading from '../common/Heading';
import InputControl from '../common/InputControl';
import Editor from './Editor';
import IconButton from '@mui/material/IconButton';
import MarkDownText from './MarkDownText';
import PrimaryButton from '../common/PrimaryButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarsIcon from '@mui/icons-material/Stars';

import { Button } from '@mui/material';
import MobilePhoneUI from './MobilePhoneUI';
import ModalView from './ModalView';

function AddQuizContent() {
    const [codeString, setCodeString] = useState("")
    // const param = useParams();
    const [text, setText] = useState("")
    const [content, setContent] = useState([]);
    const [open, setOpen] = useState(false)
    const [activeContent, setActiveContent] = useState("");
    const [modalValue, setModalValue] = useState([])
    const handleEditorChange = (val) => {
        console.log('markdownText', codeString);

        setCodeString(val)
    }

    const handleAddContent = () => {
        setContent([...content, { title: text, content: [] }])
        setText("")
    }
    //  this function calls when  we click on content list item 
    const handleContentItemClick = (val: string) => {
        setActiveContent(val)

    }



    console.log('content', content)

    const handleChange = (value: string) => {
        setText(value)
    }

    const onHide = () => {
        setOpen(!open)
    }
    const handleAddMarkDown = () => {
        const updatedContents = content.map(item => {
            if (item.title === activeContent) {
                return { ...item, content: [...item.content, codeString] };
            }
            return item;
        })
        setContent(updatedContents)
        console.log('updatedContents', updatedContents);

        console.log('content new ', content)

    }
    const handleModalValue = (item) => {
        setOpen(!open);
        setModalValue(item)

    }
    return (
        <div className='container'>

            <section className='grid grid-cols-2 gap-4 flex-1'>

                <div className=" bg-white p-3">
                    <InputControl value={text} placeholder='Add title' event={handleChange} />
                    {/* <div className="editor">
                        <Editor event={handleEditorChange} markdownText={codeString} />
s
                    </div> */}
                    <div className='mt-10'>
                        <PrimaryButton title='Add' event={handleAddContent} />

                    </div>

                </div>
                {/* right content list  */}
                <div className="right-list shadow bg-white">
                    <div className='p-4 bg-blue-400'>
                        <Heading text="Content Lists" bold='600' color='#fff' />

                    </div>

                    <div className="content-list p-4 flex flex-col gap-3">
                        {
                            content?.map((item) => {
                                return (
                                    <div>

                                        <div className='p-2 shadow flex gap-2 items-center justify-between' key={item.title}>

                                            <Button onClick={() => handleContentItemClick(item.title)} startIcon={<StarsIcon />}>{item?.title}</Button>
                                            <IconButton onClick={() => handleModalValue(item)}>
                                                <VisibilityIcon />
                                            </IconButton>

                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


                {/* add editor code string  */}

                <div>
                    <Heading text={activeContent} />
                    {
                        activeContent && <div className="editor">
                            <Editor event={handleEditorChange} markdownText={codeString} />


                        </div>
                    }
                    {
                        activeContent && <div className='flex p-4'>

                            <PrimaryButton title='Add' event={handleAddMarkDown} />
                        </div>
                    }

                </div>

            </section>

            <ModalView open={open} event={onHide} modalValue={modalValue} />


        </div>
    )
}

export default AddQuizContent