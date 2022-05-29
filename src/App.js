import './scss/app.scss';
import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './pages/home';
import Cart from './pages/cart';
import Page404 from './pages/page404';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from './redux/slices/todoSlice';

function App() {
  // const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.tasks);
  const inputValue = useSelector((state) => state.todo.inputValue);
  console.log(inputValue);

  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="content">
          <div className="container">
            <input onChange={(event) => dispatch(addTask(event))} type="text" />
            <button onClick={() => alert(123)}>Добавить</button>

            <ul>
              {tasks.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
