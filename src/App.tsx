import './App.css';
import ExpandDiv from './components/ExpandDiv';

function App() {
  return (
    <div className="container">
      <div className='expanded-div-container'>
        <div className='demostrartion-heading'>Demostration</div>
        <ExpandDiv unExpandedMsg={'Unexpanded message'} expandedMsg={'Expanded msg'} />
        <ExpandDiv unExpandedMsg={'Unexpanded message'} expandedMsg={'Expanded msg'} />
        <ExpandDiv unExpandedMsg={'Unexpanded message'} expandedMsg={'Expanded msg'} />
        <ExpandDiv unExpandedMsg={'Unexpanded message'} expandedMsg={'Expanded msg'} />
      </div>
    </div>
  );
}

export default App;
