```markdown
# 🚀 API REST - Exercícios com Node.js e Express

Este projeto é uma **API REST desenvolvida com Node.js e Express**, criada para praticar conceitos de desenvolvimento backend, rotas HTTP e organização de código utilizando o padrão **MVC (Model-View-Controller)**.

A API contém diversos endpoints com lógicas diferentes como:

- operações matemáticas
- classificação de notas
- formatação de texto
- validações
- simulação de login
- tratamento de erros

---

# 📚 Tecnologias utilizadas

- **Node.js**
- **Express**
- **JavaScript**
- **Arquitetura MVC**
- **JSON para comunicação da API**

---

# 📁 Estrutura do Projeto

```

api-mvc
│
├── server.js
├── package.json
│
└── src
│
├── app.js
│
├── controllers
│   ├── calcularController.js
│   ├── classificarController.js
│   ├── erroController.js
│   ├── formatarController.js
│   ├── loginController.js
│   ├── textController.js
│   └── validarController.js
│
└── routes
├── calcularRoutes.js
├── classificarRoutes.js
├── erroRoutes.js
├── formatarRoutes.js
├── loginRoutes.js
├── textRoutes.js
└── validarRoutes.js

````

---

# ⚙️ Como executar o projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/seu-usuario/API-REST-DIVERSOS.git
````

---

### 2️⃣ Entrar na pasta do projeto

```bash
cd api-mvc
```

---

### 3️⃣ Instalar as dependências

```bash
npm install
```

---

### 4️⃣ Executar o servidor

```bash
node server.js
```

ou se tiver **nodemon**

```bash
nodemon server.js
```

---

# 🔌 Endpoints da API

## 📊 Calcular operações matemáticas

**POST**

```
/calcular
```

### Exemplo de Body

```json
{
  "soma": 1,
  "mult": 1,
  "div": 0,
  "sub": 1
}
```

### Exemplo de Resposta

```json
{
  "sucess": true,
  "data": {
    "resultado": {
      "somar": 15,
      "multi": 50,
      "subt": 5
    }
  }
}
```

---

## 🎓 Classificar nota do aluno

**POST**

```
/classificar
```

### Body

```json
{
  "numero": 70
}
```

### Resposta

```json
{
  "status": "Aprovado",
  "nota": 70
}
```

---

## 🔐 Login (simulação)

**POST**

```
/login
```

Utilizado para praticar validação de dados enviados no corpo da requisição.

---

## 📝 Manipulação de textos

**POST**

```
/text
```

Endpoint utilizado para realizar manipulações simples de texto.

---

## ✔️ Validação de dados

**POST**

```
/validar
```

Realiza verificações básicas em dados enviados para a API.

---

# 🧠 Conceitos praticados

Este projeto foi criado para praticar:

* criação de **API REST**
* uso de **Express**
* criação de **rotas**
* uso de **controllers**
* envio e recebimento de **JSON**
* organização de projeto com **MVC**
* lógica de programação no backend

---

# 👨‍💻 Autor

Projeto desenvolvido para fins de **estudo e prática de backend com Node.js**.

```
Desenvolvido por Rafael Ladeira
```

---

# 📌 Observação

Este projeto é apenas para **aprendizado**, contendo diversos exemplos de endpoints para treino de lógica e estruturação de APIs REST.

```
```
