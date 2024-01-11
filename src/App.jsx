import styled from 'styled-components'
import { useState, useEffect } from "react"



const TodoApp=()=>{
  const [todoInput, setTodoInput] = useState("")
  const [todos, setTodos] = useState([])
  const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  font-size: large;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  background-color: yellow;
  padding:0.10rem 1rem;
  `
  const Input = styled.input`
  padding: 0.2rem;
  border:1px solid;
  margin-right:1rem;
  `
  
  const Label= styled.label`
  margin: 1rem;
  font-size: large;
  color:#BF4F74 ;
  background-color: yellow;
  border:2px solid grey;
  text-align:center;`

// Input değişikliklerini takip eden fonksiyon
  const handleInputChange = (e)=>{
    setTodoInput(e.target.value)
  };

   // "Ekle" butonuna tıklanınca çalışan fonksiyon

   // Yeni bir fonksiyon oluşturulması 
   const addTodo = () => {
    setTodos([...todos, todoInput]);
    setTodoInput("");
  };

  // useEffect hook'u ile todos state'ini konsola yazdırma
  useEffect(() => {
    
  }, [todos]);
  
   // Adım 7: "ul" ve "li" elementleri oluşturulması
   const todoList = todos.map((todo, index) => (
    <li key={index} onClick={() => handleRemoveTodo(index)}>{todo}</li>
  ));

  // Adım 11: Liste elemanına hover efekti eklenmesi
  const handleRemoveTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <Label htmlFor="todoInput">Gönderiler</Label>
      <Input
        id="todoInput"
        value={todoInput}
        onChange={handleInputChange}
      ></Input>
      
      <Button onClick={addTodo}>Ekle</Button>
      <ul>
        {todoList}
      </ul>
    </div>
  );
};

export default TodoApp;
