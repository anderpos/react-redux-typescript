import React from 'react';
import { connect } from 'react-redux';
import { todo, fetchTodos, deleteTodo } from '../actions';
import { storeState } from '../reducers';

interface AppProps {
  todos: todo[];
  fetchTodos: Function; //Workaround to solve problem with redux thunk that is not recognized
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  loading: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { loading: false };
  }

  componentDidUpdate(prevProps: AppProps) {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ loading: false });
    }
  }
  onFetchList = (): void => {
    this.setState({ loading: true });
    this.props.fetchTodos();
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList = (): JSX.Element[] => {
    return this.props.todos.map((todo) => (
      <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
        {todo.title}
      </div>
    ));
  };

  render() {
    return (
      <div>
        <button onClick={this.onFetchList}>Fetch List</button>
        {this.state.loading ? 'Loading...' : null}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: storeState): { todos: todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
