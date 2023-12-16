
import { Text, View } from "react-native";

 function Txt({size=16,color='#fff',weight="regular",align="center"}){
const getfontFamily = (weight)=>{
if(weight === "regular"){
    return "Roboto-Regular"
}
if(weight === "light"){
    return "Roboto-Light"
}
if(weight === "bold"){
    return "Roboto-Bold"
}
if(weight === "medium"){
    return "Roboto-Medium"
}
if(weight === "light"){
    return "Roboto-Regular"
}
if(weight === "regular"){
    return "Roboto-Regular"
}
}
const TxtStyle ={
    textAlign : align,
    size:size,
    color:color,
    fontFamily : getfontFamily(weight)
}
return(
    <Text style={{TxtStyle,style}}>{children}</Text>
)
    
  }
  export default Txt