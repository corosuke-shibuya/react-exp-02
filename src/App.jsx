import { useState, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import News from "./components/News";
import CalendarItem from "./components/CalendarItem";
import ChartBar from "./components/ChartBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Chart from "./pages/chart";
import NotFound from "./pages/notfound";
import CustomerList from "./pages/customer";
import Orders from "./pages/orders";
//1.別ファイルで切り出したカスタムフックを呼び出すにはimportで書かないといけない
import { useForm } from "./hooks/useForm";

function App() {
  //2.呼び出したカスタムフックを呼び出す　注意:部品のjsxが記述されているreturnより上です
  const { handleNameChange, handleEmailChange, name, email, data, } = useForm();
 
  return (
    <>
{/*       
      <h1>データを表示する方法</h1>
      {data.map((item, index) => (
        <div key={index}>
          <p>{item.id}</p>
          <p>{item.title}</p>
          <p>{item.userId}</p>
        </div>
      ))} */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customer" element={<CustomerList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      {/* <div>
        <p>名前が入ります</p>
        <input
          type="text"
          placeholder="名前を入力してください"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <p>メールアドレスが入ります</p>
        <input
          type="text"
          placeholder="メールアドレスを入力してください"
          value={email}
          onChange={handleEmailChange}
        />
      </div> */}
      {/*  */}
    </>
  );
}

export default App;