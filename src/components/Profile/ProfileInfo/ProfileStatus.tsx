import React from "react";




class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }
    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <input onBlur={this.deactivateEditMode} autoFocus type="text" placeholder={'description'}/>
                    : <span onDoubleClick={this.activeEditMode}>Description</span>
                }
            </div>
        )
    }

}

export default ProfileStatus