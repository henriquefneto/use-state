import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [accessAutorization, setAccessAutorization] = useState<boolean>(false);

  if (accessAutorization) {
    return (
      <View>
        <Text style={styles.h1}>Welcome {email}</Text>
        <TouchableOpacity style={styles.logOutButton} onPress={() => {setAccessAutorization(false), setEmail(""), setPassword("")}}><Text style={styles.text}>LOG OUT</Text></TouchableOpacity>
      </View>
    )
  }
  return (
    <View>
      <Text style={styles.h1}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={(text) => setEmail(text)}/>
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={(text) => setPassword(text)} secureTextEntry/>
      <Button title="Authorize Access" onPress={() => setAccessAutorization(true)} disabled={!email || !password} />
    </View>
  );
}

const styles = StyleSheet.create({
  logOutButton: {
    alignItems: "center",
    backgroundColor: "#e62a3a",
    color: "#fff",
    padding: 20,
    margin: 20,
    borderRadius: 5,
  },
  text:{
    color: "#fff",
    fontSize: 16
  },
  h1:{
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center"
  },
  input:{
    height: 40,
    margin: 10,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    alignContent: "center",
    borderRadius: 8,
    padding: 10
  },
});
