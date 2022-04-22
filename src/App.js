import React from 'react';
import './App.css';

function App() {
  const [numero, setNumero] = React.useState(0);
  
  function color(){
    if (numero > 0){
      document.getElementById('numero').style.color="green";
    }else if (numero === 0){
      document.getElementById('numero').style.color="black";
    }else if (numero < 0){
      document.getElementById('numero').style.color="red";
    }
  }
  
  function suma() {
    setNumero(numero + 1)
  }

  function resta() {
    setNumero(numero - 1)
  }

  function reinciciar() {
    setNumero(0)
  }

  React.useEffect (() =>{
    color()
  })


  return (
    <div>
      <div>
        <h1 className='H1'>Ihan Gilberto Alexander Marroquin Sequen</h1>
      </div>
      <div className='App-div'>
        <h1 id='numero'>{numero} </h1>
      </div>
      <div className='App-div'>
        <button className='Añadir' onClick={() =>{
        suma()
        }}>
          Añadir
        </button>
        <button className='Reiniciar' onClick={() =>{
        reinciciar()
        }}>
          Reiniciar
        </button>
        <button className='Restar' onClick={() =>{
        resta()
        }}>
          Restar
        </button>
      </div>
    </div>
  );
}
export default App;
