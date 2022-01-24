import React from 'react';

type MessagePropsType = {
    message: string
    id: string
}

export const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div>
            {props.message}
        </div>
    )
}
