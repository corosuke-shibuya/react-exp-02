import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import News from './components/News'

function App() {
const [name , SetName] = useState("名前入力");
const [email , SetEmail] = useState("メールアドレス入力");

const handleNameChange = (e) =>{ 
  SetName(e.target.value);
}

const handleEmailChange = (e) =>{ 
  SetEmail(e.target.value);
};



useEffect(()=>{
    // この中に書きます🤗

    console.log("起動しました！！！");
    // この下は消さない
  },[])
;

    console.log("colsoleログの順番確認");

  return (
    <>
      {/* */}
      <News />
<div>
<p>名前が入ります</p>
<input type="text" placeholder="名前を入力してください" value={name} onChange={handleNameChange}/>

</div>
<div>
<p>メールアドレスが入ります</p>
<input type="text" placeholder="メールアドレスを入力してください" value={email} onChange={handleEmailChange}/>
</div>
    {/*  */}
    </>
  )
}

export default App
