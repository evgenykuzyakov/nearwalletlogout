import buttonImage from './button.png';
import './App.css';
import {useState} from "react";

function App() {

  const [showTrololo, setShowTrololo] = useState(false);

  const logOut = (e) => {
    e.preventDefault();
    setShowTrololo(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        {showTrololo ? <>
          <div className="video-container">
            <iframe
              title="youtube"
              className="youtube"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </> : <>
          <h1>
            Press button to logout from NEAR Wallet
          </h1>
          <div className="logout-wrapper" style={{background: `url(${buttonImage})`}} onClick={logOut}>
            <div className="logout-text">Log out</div>
          </div>
        </>}
      </header>
    </div>
  );
}

export default App;
