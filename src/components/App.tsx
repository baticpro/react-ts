import React, { FC } from 'react';
import { ToDO } from '../types/todo';
import { StoreState } from '../redux/reducers';
import { connect } from 'react-redux';
import { fetchTodosAction } from '../redux/actions';

interface AppProps {
  todos: ToDO[];
  fetchTodos: any;
}

const AppView: FC<AppProps> = ({ todos, fetchTodos }) => {
  const clickHandler = (): void => {
    fetchTodos();
  };

  return (
    <div>
      <button onClick={clickHandler}>GET</button>

      {todos.map(todo => {
        return <div key={todo.id}>{todo.title}</div>;
      })}
    </div>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    todos: state.todos,
  };
};

export const App = connect(mapStateToProps, { fetchTodos: fetchTodosAction })(AppView);
