import './App.css';
import Counter from './components/Counter';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { TaskProvider } from './context/TaskContext';
import store from './store';
import { Provider } from 'react-redux';

import PostList from './components/postList'; 
import postStore from './posts/store';
import MyForm from './components/MyForm';

function App() {
  return (
    <>
    <h1> 1- Contador com reducer </h1>
    <Provider store={store}>
    <Counter />
    </Provider>
    <h2> 2- Context com Api</h2>
    <TaskProvider>
      <TaskForm />
      <TaskList />
    </TaskProvider>
    <h2> 3- Paginação com Redux (usando API)</h2>
    <Provider store={postStore}>
    <PostList />
    </Provider>
    <h2> 4- Formulario com React Final Form</h2>
    <MyForm />
    </>
  );
}

export default App;
