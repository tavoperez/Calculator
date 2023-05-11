import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background:{
        backgroundColor: 'black',
        flex:1,
        // paddingHorizontal: 20,
        
    },
    calculatorContainer:{
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        flex:1,
    },
    res:{
        color: 'white', 
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10

    },
    resSmall:{
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right'
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    btn:{
        height: 80,
        width: 80,
        backgroundColor: '#2d2d2d',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 7
    },
    btnCombinate:{
        backgroundColor: 'red'
    },
    btnText:{
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    }
});