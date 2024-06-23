import logo from './logo.svg';
import './App.css';
//bulanghoy gabi
function Home({todo}) {
  return (
   <div style={
    {backgroundColor: 'red'}
    }>
      <h1>
      HOME {todo}
    </h1>
   </div>
   
  );
}

export default Home;

