import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";

const App = () => {
  const [nota1, setnota1] = useState("");
  const [nota2, setnota2] = useState("");
  const [nota3, setnota3] = useState("");
  const [nota4, setnota4] = useState("");
  const [média, setmédia] = useState(null);
  const [status, setStatus] = useState("");

  function Mediafinal() {
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);
    const n3 = parseFloat(nota3);
    const n4 = parseFloat(nota4);

    if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3) && !isNaN(n4)) {
      const m = (n1 + n2 + n3 + n4) / 4;
      setmédia(m);

      if (m > 6) {
        setStatus("Aprovado");
      } else if (m > 4) {
        setStatus("Recuperação");
      } else {
        setStatus("Reprovado");
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Média</Text>

      <TextInput
        style={styles.input}
        placeholder="Nota 1"
        keyboardType="numeric"
        value={nota1}
        onChangeText={setnota1}
      />
      <TextInput
        style={styles.input}
        placeholder="Nota 2"
        keyboardType="numeric"
        value={nota2}
        onChangeText={setnota2}
      />
      <TextInput
        style={styles.input}
        placeholder="Nota 3"
        keyboardType="numeric"
        value={nota3}
        onChangeText={setnota3}
      />
      <TextInput
        style={styles.input}
        placeholder="Nota 4"
        keyboardType="numeric"
        value={nota4}
        onChangeText={setnota4}
      />

      <Button title="Calcular Média" onPress={Mediafinal} />

      {média !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Média: {média.toFixed(2)}</Text>
          <Text
            style={[
              styles.resultText,
              {
                color:
                  status === "Aprovado"
                    ? "green"
                    : status === "Reprovado"
                    ? "red"
                    : "orange",
              },
            ]}
          >
            Status: {status}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  resultContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  resultText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default App;
