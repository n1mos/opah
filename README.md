<div align="center">
    <img src="App/Assets/Images/logo.png" alt="Logo">
</div>

# Opah Code Challenge

Este projeto foi um code challenge para a Opah IT e consiste de uma implementação da API pública de Star Wars (https://swapi.dev/) em React Native.


## Layout

- [`App/Components`](App/Components): componentes de apresentação
- [`App/Containers`](App/Containers): componentes container
- [`App/Config`](App/Config): configuração do app
- [`App/Sagas`](App/Sagas): redux sagas
- [`App/Assets`](App/Assets): assets (imagens, videos etc)
- [`App/Services`](App/Services): serviços do app
- [`App/Theme`](App/Theme): estilos do app
- [`App/Navigators`](App/Navigators): navigators da react navigation 
- [`App/Stores`](App/Stores): redux actions, reducers e stores


## Dependências

- [React Native](https://facebook.github.io/react-native/)
- [React Navigation](https://reactnavigation.org/)
- [Redux](https://redux.js.org/)
- [Redux Sagas](https://redux-saga.js.org)
- [Redux Persist](https://github.com/rt2zz/redux-persist)
- [reduxsauce](https://github.com/infinitered/reduxsauce)
- [prettier](https://prettier.io/)
- [axios](https://github.com/axios/axios)


## Instalação

1. Clone este repositório.
2. Instale as dependências rodando `yarn` ou `npm install`.

### Android

  - `yarn start`
  - `yarn android`

### iOS

- `cd ios`
- Você precisa instalar as dependências pod.
  - `pod install`

- Agora você pode iniciar o bundler e instalar o app.
  - `yarn start`
  - `yarn ios`

## Testes

Testes são feitos com [jest](https://jestjs.io/) framework e [enzyme](https://airbnb.io/enzyme/) que torna fácil testar componentes React.


### Rodando testes
- `yarn test` ou `yarn test -u` se você fez alguma alteração.
