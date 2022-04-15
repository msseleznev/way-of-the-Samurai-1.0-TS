import React, {ChangeEvent, useEffect, useState} from "react";


type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}


const ProfileStatus: React.FC<ProfileStatusType> = ({status, updateStatus}) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [value, setValue] = useState<string>(status)


    useEffect(() => {
        setValue(status)
    }, [status])


    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        updateStatus(value)
    }
    const activeEditMode = () => {
        setEditMode(true)
    }

    return (
        <div>
            {editMode
                ? <input
                    onChange={onStatusChange}
                    onBlur={deactivateEditMode}
                    autoFocus type="text"
                    placeholder={'description'}
                    value={value}
                />
                : <span onDoubleClick={activeEditMode}>{status || '-----'}</span>
            }
        </div>
    );
};


export default ProfileStatus