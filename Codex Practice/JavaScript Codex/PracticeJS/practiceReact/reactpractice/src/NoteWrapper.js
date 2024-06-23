import logo from './logo.svg';
import './App.css';
//bulanghoy gabi

function NoteWrapper({todo}) {
  return (
   <div style={
    {backgroundColor: 'red'}
    }>
      <h1>
      THIS IS This 私達の人生! {todo}
    </h1>
   </div>
   
  );
}

export default NoteWrapper;

