import {StyleSheet, Text, View} from 'react-native';

export default function App(){
  return(

    <View style={styles.container}>
    <Text style={styles.texto}> aoba </Text>
    </View>



  );
}

const styles =StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},

texto:{
  fontSize: '20pt',
  fontWeight: '700',
}

});
