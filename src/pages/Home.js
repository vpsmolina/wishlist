import React, {Fragment, useContext, useEffect} from 'react';
import {Form} from "../components/Form";
import {Notes} from "../components/Notes";
import {FirebaseContext} from "../context/firebase/firebaseContext";
import {Loader} from "../components/Loader";

export const Home = () => {
    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext);

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
            <Fragment>
                <Form/>
                <hr/>
                {loading
                    ? <Loader />
                    : <Notes notes = {notes} onRemove={removeNote} />
                }
            </Fragment>
    );
};


