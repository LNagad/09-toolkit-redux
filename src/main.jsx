import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';

import { App } from './App';
import { PokemonApp } from './PokemonApp.jsx';
import { TodoApp } from './TodoApp';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
   
   <Provider store={ store }>
      {/* <App /> */}
      {/* <PokemonApp /> */}
      <TodoApp />
   </Provider>
   
);
