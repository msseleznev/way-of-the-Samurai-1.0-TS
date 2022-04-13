import React from 'react';
import c from './MyPosts.module.css';
import {Posts} from "./Posts/Posts";
import {PostType} from "../../../redux/types";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (newPost: string) => void

}
type AddPostFormType = {
    newPostText: string
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postsElement = props.posts.map(p => <Posts key={p.id}
                                                   message={p.message}
                                                   likesCount={p.likesCount}
                                                   avatar={p.avatar}
                                                   id={p.id}/>)

    const addNewPost = (value: AddPostFormType) => {
        props.addPost(value.newPostText)
    }
    return <div className={c.content}>
        <div>
            <h3>My posts </h3>
            <AddNewPostFormRedux onSubmit={addNewPost}/>
            {postsElement}
        </div>
    </div>;
}

const AddNewPostForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='input' name={"newPostText"} placeholder={"Enter your message"}/>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<AddPostFormType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)
