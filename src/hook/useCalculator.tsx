import { useRef, useState } from "react"

enum Operators {
    sum, subtract, multiply, divide
}

export const useCalculator = () => {
    const [num, setNum] = useState('0')
    const [numPrevius, setNumPrevius] = useState('0')
    const previusOperators = useRef<Operators>()
  
    const clear = () =>{
      setNum('0')
      setNumPrevius('0')
    }
  
    const armNumber = (numText: string) =>{
      // do not accept the double point
      if(num.includes(".") && numText === (".")) return
  
      if( num.startsWith("0") || num.startsWith("-0")){
  
        // decimal point
        if( numText === "."){
          setNum ( num + numText)
  
          //evaluate if it is another zero, and has a point
        }else if ( numText === "0" && num.includes(".")){
          setNum ( num + numText)
  
          // evaluate if it is different from zero, and does not have a point
        }else if(numText !== "0" && !num.includes(".")){
          setNum(numText)
  
          // dont 000.0
        } else if ( numText === "0" && !num.includes(".")){
          setNum (num)
        }else {
          setNum( num + numText)
        }
      }else {
        setNum( num + numText)
      }
  
    }
  
    const component = () =>{
      if (num.includes("-")){
        setNum(num.replace("-", ""))
      }else {
        setNum("-" + num)
      }
    }
  
    const btnDelete = () =>{
      const updatedNum = num.slice(0, -1)
      setNum(updatedNum)
      if(updatedNum === '-' ||updatedNum === ('')){
        setNum('0')
      }
    }
  
    const changeNum = () =>{
      if(num.endsWith('.')){
        setNumPrevius(num.slice(0, -1))
      }else{
        setNumPrevius(num)
      }
      setNum('0')
    }
  
    const btnDivide = () =>{
      changeNum()
      previusOperators.current = Operators.divide
    }
    const btnMultiply = () =>{
      changeNum()
      previusOperators.current = Operators.multiply
    }
    const btnSubtract = () =>{
      changeNum()
      previusOperators.current = Operators.subtract
    }
    const btnSum = () =>{
      changeNum()
      previusOperators.current = Operators.sum
    }
  

    const calculate = () =>{
      const num1 = Number(num)
      const num2 = Number(numPrevius)
  
      switch (previusOperators.current) {
        case Operators.sum:
          setNum (`${num1 + num2}`)        
          break;
        case Operators.subtract:
          setNum (`${num2 - num1}`)        
          break;
        case Operators.divide:
          if (num2 !== 0) {
            const result = num2 / num1;
            if (result === Infinity || result === -Infinity) {
              setNum('No se puede dividir entre cero');
            } else {
              setNum(result.toString());
            }
          } else {
            setNum('0');
          }            
          break;

          case Operators.multiply:
          setNum (`${num1 * num2}`)        
          break;
      
        default:
          break;
      }
      setNumPrevius ('0')
    }

    const error = () =>{

    }

    return {
        clear,
        component,
        btnDivide,
        btnMultiply,
        btnSubtract,
        btnSum,
        calculate,
        btnDelete,
        armNumber,
        num,
        numPrevius
}

}

