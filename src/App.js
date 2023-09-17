import logo from './logo.svg';
import './App.css';
import Album from './components/home/home';

function App() {
  return (
    <div className="App" style={{backgroundImage : `url(https://img1.picmix.com/output/stamp/normal/2/8/0/2/492082_cb542.gif)`,
    backgroundBlendMode: 'darken'
    }}>
      <Album></Album>
    </div>
  );
}

export default App;
