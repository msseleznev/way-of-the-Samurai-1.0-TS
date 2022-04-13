import {addNewPostAC} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {PostType} from "../../../redux/types";
import {MyPosts} from './MyPosts';
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type MapStatePropsType = {
    posts: Array<PostType>
}
type MapDispatchPropsType = {
    addPost: (newPost: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {

        addPost: (newPost) => {
            dispatch(addNewPostAC(newPost))
        },

    }
}


export const MyPostsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPosts);
