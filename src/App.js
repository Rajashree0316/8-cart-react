import React, { useState,createContext } from 'react'
import { Header } from './components/Header'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import { Home } from './components/Home'
import { ViewCart } from './components/ViewCart'
import { cartContext } from './components/cartContext'

const App = () => {
  const[isCart,setIsCart] = useState([]);
  return (
    <cartContext.Provider value={{isCart,setIsCart}}>
      <BrowserRouter>
      <Header/>
      <div className="container">
        <Routes>
           <Route path="/" element={<Home />}/>
           <Route path="/Cart" element={<ViewCart />}/>

        </Routes>
      </div>
      </BrowserRouter>
    </cartContext.Provider>
    
  )
}

export default App;



/* Things to know:
In main App.js:
1)import react-router-dom 
2)BrowserRouter-whole website is enclosed
here we have :
-header components
-loading content wrapped inside routes which is inside container div
3)Link tag work/render as anchor tag


*/
