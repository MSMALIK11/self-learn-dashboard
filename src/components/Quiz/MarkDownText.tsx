import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.snow.css";
import "highlight.js/styles/atom-one-dark.css";
import eventTypes from '../../../types/types.d'
import rehypeRaw from "rehype-raw";
function MarkDownText({ markdownText }: eventTypes) {
    console.log('markdownText inner', markdownText);

    return (
        <div className="ql-snow">
            <div className="ql-editor">
                <ReactMarkdown children={markdownText} rehypePlugins={[rehypeRaw]} />
            </div>
        </div>
    )
}

export default MarkDownText