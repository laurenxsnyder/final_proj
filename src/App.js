import { useState } from 'react';
import { supabase } from './supabaseClient';
import logo from './logo.svg';
import './App.css';

function Gallery() {
  const [myImages, setMyImages] = useState([]);
  async function getImages() {
    let { data: images, error} = await supabase
    .from('images')
    .select('*')
  setMyImages(images);
  }
getImages();
return (
    <table>
      {
        myImages.map(b => (
          <tr>
            <td>{b.title}</td>
            <td>{b.image}</td>
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
        <Gallery/>
        <MagicButton/>
      </header>
    </div>
  );
}

export default App;
