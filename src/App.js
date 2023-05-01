import { useState } from 'react';
import { supabase } from './supabaseClient';
import logo from './logo.svg';
import './App.css';

function Pictures() {
  const [myPictures, setMyPictures] = useState([]);
  async function getPictures() {
    let { data: pictures, error} = await supabase
    .from('pictures')
    .select('*')
  setMyPictures(pictures);
  }
getPictures();
return (
    <table>
      {
        myPictures.map(b => (
          <tr>
            <td>{b.title}</td>
            <td>{b.pictures}</td>
          </tr>
        ))
      }
    </table>
  );
}



function MagicButton() {
  const [count, setCount] = useState(0);
  function doMagic() {
    setCount(count + 1);
  }
  return (
    <>
      <h3>This is a magic button</h3>
      <button onClick={doMagic}>Magic {count}</button>
    </>
  );
}






function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Pictures/>
        <MagicButton/>
      </header>
    </div>
  );
}

export default App;
