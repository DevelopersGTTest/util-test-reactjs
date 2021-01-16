import React from 'react'

export default function InitComponent(props) {
    console.log('that props is', props )
    return(
        <div>
            <button onClick={
                () => props.greeting( props.user.name )  } 
            >
                fio
            </button>
        </div>
    )
}

export function DissposeComponent() {
    return(
        <>
            <p>fooo</p>
        </>
    )
}
