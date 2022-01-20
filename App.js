import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <Text
      style={styles.head}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry = {true}
      />
       <TouchableOpacity
        style={styles.button}><Text
        style={styles.submit}>Submit</Text></TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width:'85%',
    margin: 12,
    borderBottomWidth: 2.5,
    padding: 10,
    alignSelf: 'center',
    borderBottomColor: '#A1A1A1',
  },
  head: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '35%',
    marginBottom: '10%',
    color: '#FF278C',
    fontFamily: 'Roboto'
  },
  button: {
    backgroundColor: '#FF278C',
    height: '10%',
    width:'65%',
    alignSelf: 'center',
    marginTop: '20%',
    borderRadius: 15,
  },
  submit:{
    color: "#fff",
    fontSize: 19,
    textAlign: 'center',
    marginTop: '3.5%',
    textAlignVertical: 'auto'
  }
});


