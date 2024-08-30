  import React,  {useEffect, useState } from 'react'
  import Store from '../store/Store'


  function Calculator() {
  
  const [out, setOut] = useState("0")


  const tapeNum = (value) => {
    // setOut(value)
    if(value === "AC"){
      setOut('0')
    }else if(value === "0"){
      setOut('')
    } else if(value === '='){
      try{
        setOut(eval(out).toString())
      }catch(el) {
        setOut('error')
      }
    }else if(value === '+/-'){
      if(out){
        setOut(String(-parseFloat(out)))
      }
    }else if(value === '%'){
      if(out){
        setOut(String(parseFloat(out) / 100))
      }
    }else{
      setOut(out + value)
    }
    
    }
  
  useEffect(() => {
      console.log(`error  ${out}`);
      
  }, [out])

      return (
        <>
        <div className="container">
          <div className="output">
            <input type="text" value={out} readOnly/>
          </div>
          <div className="buttons">
              {Store.buttons.map((el ,index) => {
                return  <button key={index} onClick={() => tapeNum(el.val)}>{el.val}</button>
              })}
          </div>
        </div>
        </>
      )
    
  }

  export default Calculator