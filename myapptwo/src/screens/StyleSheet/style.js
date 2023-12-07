import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    flexContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    flexCenter: {
      justifyContent: "center",
      alignItems: "center",
    },
    box: {
      width: 150,
      height: 150,
      backgroundColor: "red",
      borderRadius: 5,
      margin: 10,
  
    },
    h1: {
      textAlign: "center",
      fontSize: 50,
      fontWeight: "bold",
      color:'#fff',
    },
  
    shadowProp: {
      shadowColor: "#11fae1",
      shadowOffset: {
        width: 0,
        height: 16,
      },
      shadowOpacity: 0.25,
      shadowRadius: 18.46,
      elevation: 10
  
    },
    img: {
      width: 100,
      height: 70,
    },
    btn: {
      backgroundColor: "white",
      paddingHorizontal: 18,
      paddingVertical: 6,
      margin: 10,
      borderRadius: 2,
    }
  })

  export default styles;