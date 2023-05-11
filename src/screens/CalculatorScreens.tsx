import { Text,View } from 'react-native';
import { BtnCal } from '../components/BtnCal';
import { styles } from '../theme/appTheme';
import { useCalculator } from '../hook/useCalculator';

// enum Operators {
//   sum, subtract, multiply, divide
// }


export const CalculatorScreens = () => {

  const {
    armNumber,
    btnDelete,
    clear,
    component,
    btnDivide,
    btnMultiply,
    btnSubtract,
    btnSum,
    calculate,
    numPrevius,
    num,
  } = useCalculator()

  return (
    <View style={styles.calculatorContainer}>
      {
        (numPrevius !== '0') && <Text style={styles.resSmall}>{numPrevius}</Text>
      }    
        <Text 
          style={styles.res}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {num}
        </Text>

        {/* row btn */}
        <View style={styles.row}>
          <BtnCal btnText="C" color="#9b9b9b" accion={clear}/>
          <BtnCal btnText="+/-" color="#9b9b9b" accion={component}/>
          <BtnCal btnText="del" color="#9b9b9b" accion={btnDelete}/>
          <BtnCal btnText="/" color="#ff9427" accion={btnDivide}/>
        </View>
        <View style={styles.row}>
          <BtnCal btnText="7" accion={armNumber}/>
          <BtnCal btnText="8" accion={armNumber}/>
          <BtnCal btnText="9" accion={armNumber}/>
          <BtnCal btnText="x" color="#ff9427" accion={btnMultiply}/>
        </View>
        <View style={styles.row}>
          <BtnCal btnText="4" accion={armNumber}/>
          <BtnCal btnText="5" accion={armNumber}/>
          <BtnCal btnText="6" accion={armNumber}/>
          <BtnCal btnText="-" color="#ff9427" accion={btnSubtract}/>
        </View>
        <View style={styles.row}>
          <BtnCal btnText="1" accion={armNumber}/>
          <BtnCal btnText="2" accion={armNumber}/>
          <BtnCal btnText="3" accion={armNumber}/>
          <BtnCal btnText="+" color="#ff9427" accion={btnSum}/>
        </View>
        <View style={styles.row}>
          <BtnCal btnText="0" broad accion={armNumber}/>
          <BtnCal btnText="." accion={armNumber}/>
          <BtnCal btnText="=" color="#ff9427" accion={calculate}/>
        </View>
        

    </View>
  )
}
