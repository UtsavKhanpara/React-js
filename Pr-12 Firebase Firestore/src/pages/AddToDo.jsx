import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addTodo, clearAllTodos, deleteTodo, viewTodo } from '../redux/action/ToDoAction';
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore';
import {app} from '../Firebase';



const AddToDo = () => {
  const db = getFirestore(app);
  const dispatch = useDispatch();
  const AllToDo = useSelector(state => state.ToDo.ToDoList);
  const [newTodo, setNewTodo] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newTodo) {
      alert("Please enter a todo");
      return false;
    }
    try {
      const docRef = await addDoc(collection(db, 'ToDoList'), {
        todo: newTodo
      });
      alert("Data Added.");
      dispatch(addTodo({ id: docRef.id, todo: newTodo }));
      setNewTodo("");
    } catch (err) {
      console.log(err);
      return false;
    }
  }
  const ViewToDos = async () => {
    try {
      const list = await getDocs(collection(db, 'ToDoList'));
      const todos = list.docs.map(t => ({
        id: t.id,
        ...t.data()
      }));
      dispatch(viewTodo(todos));
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  const DeleteToDo = async (id) => {
    try {
      await deleteDoc(doc(db, 'ToDoList', id));
      alert("Data Deleted.");
      dispatch(deleteTodo(id));
      ViewToDos();
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  const ClearAllToDos = async () => {
    try {
      const list = await getDocs(collection(db, 'ToDoList'));
      list.forEach((doc) => {
        deleteDoc(doc.ref);
      });
      alert("All Todos Deleted.");
      dispatch(clearAllTodos());
    } catch (err) {
      console.log(err);
      return false;

    }
  }

  useEffect(() => {
    ViewToDos();
  }, []);

  return (
    <div className='container' align="center">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add a Todo..." onChange={(e) => setNewTodo(e.target.value)} value={newTodo} />
        <button type='submit'>Submit</button>
      </form>
      <table>
        <tbody>
          {AllToDo.map((t, i) => {
            const { id, todo } = t;
            return (
              <tr key={id}>
                <td width={"5%"}>{++i}</td>
                <td>{todo}</td>
                <td align='end' width={"17%"}><button onClick={() => DeleteToDo(id)}>Remove</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <button className='allClearBtn' onClick={() => ClearAllToDos()}>Clear List</button>
    </div>
  )
}

export default AddToDo