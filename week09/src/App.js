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

  return (
    <div className="App">
      <Header />
      <ToDoEditor onCreate={onCreate}/>
      <TodoList />
    </div>
  );
}

export default App;
