
# RocketPyrex - Doctor Life Mobile APP

## 📝 Sobre a aplicação
Aplicativo mobile desenvolvido para gerenciamento de histórico e cadastro de consultas para médicos e pacientes.

No app o paciente possui um histórico de suas consultas e exames, e quais serão os próximos atendimentos e exames a serem realizados. O paciente também pode realizar o cadastro de uma nova consulta, podendo selecionar qual médico e horário ele deseja se consultar.

O médico possui uma relação de todos os seus pacientes e um histórico de atendimentos que pode ser filtrado por paciente. Ele também consegue controlar quais serão seus próximos atendimentos.

### 🙇🏻 Layout paciente
![paciente](https://github.com/devpedroso/Portifolio/assets/47677411/fc5675f5-12aa-477a-a721-6fe07048e893)

### 👨🏻‍⚕️ Layout médico
![doutor](https://github.com/devpedroso/Portifolio/assets/47677411/0432edde-950c-4b50-bcaf-471de834507c)

## ⚒️ Tecnologias utilizadas
<table>
  <tr>
    <th>ReactJs</th>
    <th>React Native</th>
    <th>Typescript</th>
    <th>Expo</th>
  </tr>
  <tr>
    <td>18.2.0</td>
    <td>0.72.6</td>
    <td>5.0.2</td>
    <td>49.0.11</td>
  </tr>
</table>

- Foi utilizado JSON SERVER para simular uma API REST para persistência dos dados.
- Como arquitetura de projeto front foi utilizado o [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/)
  
## 🚀 Como executar o projeto
Pré-requisitos: npm/yarn

```bash
# clonar repositório
git clone https://github.com/devpedroso/HealthPyrex-DoctorLife.git

# entrar na pasta do projeto front end
cd HealthPyrex-DoctorLife/

# instalar dependências
npm install

# executar o projeto
npx expo start
```

### Passo 1: Instale o Ngrok
[Baixar Ngrok](https://ngrok.com/download)

### Passo 2: Dentro do Ngrok, rode este comando para configurar a porta
```bash
  ngrok http http://localhost:3000/
```
Caso surja alguma dúvida, siga a documentação em [Ngrok Doc](https://ngrok.com/docs/getting-started/).

### Passo 3: Mude a URL base da Web API
No projeto do Mobile APP, navegue até a pasta services e, no arquivo api.ts, mude a URL da baseUrl para a gerada pelo Ngrok.

![Local para alterar a URI na aplicação](https://cdn.discordapp.com/attachments/945474061797056513/1177441867617542174/image.png?ex=65728531&is=65601031&hm=0c2e2edd5797bd55bd76ee28c52b7fa14338d6d293a14bd553977ba9a686ecbc&)

![URI gerada pelo Ngrok](https://cdn.discordapp.com/attachments/945474061797056513/1177441245111537694/image.png?ex=6572849c&is=65600f9c&hm=a2c97b94c63fb5827966f2f70a7e2426747643a95d93757c7ca0918ed8b35c72&)


#### Utilize as credências abaixo para fazer login
```bash
Como paciente:
  email: userone@email.com
  senha: admin

Como doutor(a):
  email: userfive@email.com
  senha: admin
```

### 👀 Observação
Instale um emulador de android em sua máquina, ou instale o expo em seu celular para rodar o proejeto. Para rodar pelo aplicativo do expo é necessário estar em uma rede local.
