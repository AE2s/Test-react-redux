import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTodos } from '../actions/todoActions';
import Todo from '../components/Todo';

// const mapStateToProps = state => ({
//   todosProps: { todos: state.todo.todos, loading: state.todo.loading, errors: state.todo.errors },
// });

const mapStateToProps = state => ({
  todosProps: state.todo,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      todosData: fetchTodos,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
