import { connect } from 'react-redux';
import TodoDetails from '../components/TodoDetails';

const mapStateToProps = (state, ownProps) => {
  const todo = state.todo.todos.find(todo => todo.id == ownProps.match.params.id);

  return { todo: todo };
};

export default connect(mapStateToProps)(TodoDetails);
