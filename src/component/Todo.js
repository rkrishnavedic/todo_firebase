import { useState } from "react";
import {auth, firestore} from '../config/fire';
import {useCollectionData} from 'react-firebase-hooks/firestore';

function Todo(props) {

    const [todo, setTodo] = useState('');
    const todosRef = firestore.collection(`users/${auth.currentUser.uid}/todos`)
    const todos = useCollectionData(todosRef, {idField: "id"});

    const onSubmitTodo = (event)=>{
        event.preventDefault();
        let gh = true;
        todos[0].forEach((value)=>{
        
            if(value.text === todo){
                gh = false;
            }
        })
        if(gh){
        todosRef.add(
            {
                text: todo,
                complete:false,
                createdAt: Date.now(),
            }
        )
        .then((docr)=>{
            console.log("document written with id="+docr.id);
        }).catch(err=>console.log(err));
    }
        setTodo('');
    };

    const {handleLogout} = props;
    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-between">
            <label className="navbar-brand">Todo</label>
            <div className="form-inline">
                <button onClick={handleLogout} className="btn btn-outline-danger mr-4 my-2 mr-sm-0 my-sm-0" >Logout</button>
            </div>
            </nav>

        <div style={{width:'80%', margin:'auto'}}>
            <h2>Your important events listed!</h2>
            <input
                type="text"
                autoFocus
                required
                value={todo}
                onChange = {(e)=>setTodo(e.target.value)}
                className="m-2 form-control" placeholder="type your new event"/>
            <button onClick={onSubmitTodo} className="m-2 mb-5 btn btn-warning">Add New</button>
            
            
            <div>
                <ul reversed className="p-6 m-2">
                {todos[0] && todos[0].map((todo, index)=>{
                    //console.log(todo)
                    return (
                        <li className="m-2"><TodoItem {...todo} /></li>
                    )
                })}
                </ul>
            </div>
        </div>
        </div>
    )
}

const TodoItem = ({id, complete, text})=>{
    const todosRef = firestore.collection(`users/${auth.currentUser.uid}/todos/`);
    
    const onCompleteTodo = (id, complete)=> todosRef.doc(id).set({complete: !complete}, {merge: true});
    const onDeleteTodo = (id)=> todosRef.doc(id).delete();

    return (
        <div className="font-weight-bold" key={id}>
            <div className={complete? "btn font-weight-bold strikethrough":" font-weight-bold btn"} onClick={()=>onCompleteTodo(id, complete)}>{text}</div>
            <button className="btn rounded-circle btn-outline-light" onClick={()=>onDeleteTodo(id)}>x</button>
        </div>
    )
}

export default Todo;