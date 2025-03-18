
import App from './App';
import { AppRegistry } from 'react-native';

// Registra o componente App para o React Native
AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('root'),
});
