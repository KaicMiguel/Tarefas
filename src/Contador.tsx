import { useState } from "react";
 
const Contador = () => {
 
const [count, setCount] = useState<any>(0)
 
const incrementarDez = () => {
   
    //for(let i = 0; i< 10 ; i++)
        setCount((prevCount: number )=> prevCount + 10)
        console.log("Incrementou + 10")
    };

 return(
      <div className="flex justify-center gap-4">
           <h1>Contador: {count}</h1>
            <button onClick={() => {console.log("Incrementou"); setCount(count + 1)}}
            className="bg-gray-400 rounded-full cursor-pointer">Incrementar    
            </button>
            
            <button onClick={() => {console.log("Decrementou"); setCount(count - 1)}} 
            className="bg-gray-400 rounded-full cursor-pointer">decrementar</button>
            
            <button onClick={incrementarDez}
            className="bg-gray-400 rounded-full cursor-pointer">Incrementar + 10</button>
     </div>
    )
   };
export default Contador;