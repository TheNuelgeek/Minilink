import './index.css'
import greenbg from "./assets/circle.svg"

function App() {

  return (
    <div className='hero'>
      <div className="App">
        <div className='main'>
          <h1>Shorten <span>URL</span> In One Click</h1>

          <div className='input'>
            <input type="text" placeholder='Type or paste link'/>
            <button>shorten</button>
          
          </div>

          <h3>Built by <span><a href="google.com">Eric</a></span> & <span><a href="google.com">Nuelgeek</a></span></h3>
        </div>
      </div>
      <img src={greenbg} alt="" className='circle-bg' />

    </div>
  )
}

export default App
