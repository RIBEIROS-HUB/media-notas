import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a altura da tela
    justifyContent: "center", // Centraliza verticalmente
    alignItems: "center", // Centraliza horizontalmente
    backgroundColor: "#ff0000 ", // Define um fundo branco (opcional)
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: 200,
    borderRadius: 5,
    textAlign: "center",
    marginBottom: 10,
  },
  resultado: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});
