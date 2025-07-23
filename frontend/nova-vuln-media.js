function login(username, password) {
  const hardcodedPassword = "S3nhaFraca123"; // Vulnerabilidade: senha hardcoded

  if (username === "admin" && password === hardcodedPassword) {
    console.log("Login bem-sucedido.");
  } else {
    console.log("Usuário ou senha incorretos.");
  }
}

login("admin", "S3nhaFraca123");
