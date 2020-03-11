import {connect } from 'react-redux'
import {addCounter, minusCounter, ChangeCounter, InitializeCounter} from '../actions/counterActions'
import Home from '../components/Home'


const mapStateToProps = state => (state.counter)

const mapDispatchToProps = dispatch => {
    return {     
      increment: () => dispatch(addCounter()),
      decrement: () => dispatch(minusCounter()) , 
      changeCounter: (newCounter) => dispatch(ChangeCounter(newCounter)),
      initializeCounter : () => dispatch(InitializeCounter())      
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Home)