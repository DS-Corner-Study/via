import { useState, useRef } from 'react';
import './App.css';
import Header from './component/Header';
import ToDoEditor from './component/ToDoEditor';
import TodoList from './component/TodoList';

const mockTodo =[
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },

];

function App() {
  const idRef = useRef(3);
  const [todo, setTodo] = useState(mockTodo);

  const onCreate = (content) => {
    const newItem={
      id:idRef.current,
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };

  const onUpdate = (TargetId) => {
    setTodo(
      // todo.map(
      //   (it) => {
      //     if (it.id === TargetId){
      //       return {
      //         ...it,
      //         isDone: !it.isDone,
      //       }; 
      //     } else {
      //       return it;
      //     }
      //   }
      // )
      todo.map((it)=>  //삼항연산자를 이용한 표현
        it.id===TargetId ? { ...it, isDone: !it.isDone } : it 
      )
    )
  }

  const onDelete = (TargetId) => {
    setTodo(todo.filter((it)=> it.id !== TargetId));
  };

  return (
    <div className="App">
      <Header />
      <ToDoEditor onCreate={onCreate}/>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
