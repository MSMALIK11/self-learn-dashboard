import React from 'react';
interface buttonProp {
    title: string,
    event?: () => any

}

export default function PrimaryButton(props: buttonProp) {
    return (
        <button onClick={() => props.event()} className='primary-button shadow-lg rounded-lg'>{props.title}</button>
    )
}
