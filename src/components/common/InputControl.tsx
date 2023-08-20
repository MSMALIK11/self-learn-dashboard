import React from 'react';

interface inputProp {
    label?: string,
    value?: string,
    placeholder?: string,
    name?: string,
    event: () => any,


}


export default function InputControl(props: inputProp) {
    return (
        <div>
            <label>{props.label}</label>
            <input {...props} onChange={(e) => props.event(e.target.value)} className='p-3 rounded-md shadow-md ' placeholder={props.placeholder} name={props.name} value={props.value} />
        </div>
    )
}
