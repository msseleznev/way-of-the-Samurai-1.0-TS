import {addNewPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {PostType} from "../../../redux/types";
import {MyPosts} from './MyPosts';
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


/*export const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {(store: ReduxStoreType ) => {
                const state = store.getState()
                const addPost = () => {
                    store.dispatch(addNewPostAC(state.profileReducer.messageForNewPost))
                    store.dispatch(changeNewTextAC(''))
                }
                const changeTextPost = (text: string) => {
                    store.dispatch(changeNewTextAC(text))
                }

                return <MyPosts posts={state.profileReducer.posts}
                                messageForNewPost={state.profileReducer.messageForNewPost}
                                addPost={addPost}
                                changeTextPost={changeTextPost}/>}}
        </StoreContext.Consumer>
}*/

type MapStatePropsType = {
    posts: Array<PostType>
    messageForNewPost: string
}
type MapDispatchPropsType = {
    addPost: () => void
    changeTextPost: (text: string) => void

}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {

        addPost: () => {
            dispatch(addNewPostAC())
            dispatch(changeNewTextAC(""))


        },
        changeTextPost: (newText: string) => {
            dispatch(changeNewTextAC(newText))
        }
    }
}


export const MyPostsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPosts);
