import Navbar from './components/navbar';

function Hero (){ 
    return (
        <div
      className="page-shell"
      style={{
        minHeight: '100vh',
        boxSizing: 'border-box',
      }}
    >
      <Navbar />
    </div>
    )
}

export default Hero;