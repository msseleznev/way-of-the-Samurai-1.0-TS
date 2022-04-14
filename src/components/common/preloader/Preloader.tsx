import React from 'react';
import preloader from "./5.svg"
import s from "./Preloader.module.css"


type PreloaderProps = {
    isFetching: boolean
}
export const Preloader: React.FC<PreloaderProps> = (props) => {
    return (
        <div className={s.preloader}>
            {props.isFetching ? <img src={preloader} alt={preloader}/> : null}
        </div>
    );
};

