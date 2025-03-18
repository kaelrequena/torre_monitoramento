import {TextInput, Text, View} from "react-native";
import style from "./style_femail";


function Field_email() {
  return (
    <>
      <View style={style.campoView}>
        <Text style={style.labelEmail}>Email</Text>
      </View>

     <TextInput
     style={style.container}
     placeholder="Digite aqui..."
     placeholderTextColor="rgb(112,112,112)"
     maxLength={100}
     required
     />
  </>
  );
}

export default Field_email;
