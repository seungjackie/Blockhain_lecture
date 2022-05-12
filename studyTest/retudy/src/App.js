import Profile from "./components/Profile";
import Login from "./components/Login";
import { useState } from "react";


function App() {

  const [isSignIn, setIsSignIn] = useState(false);

  const clickHandle = () => {
    setIsSignIn(!isSignIn)
  }


  return (
    <div className="App">
      {isSignIn 
      ? <Profile Click={clickHandle} />
      : <Login/>
      }
    </div>
  );
}

export default App;
