import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>Completed Odin Projects</h1>
        <p>Below, you will find a collection of my completed Odin projects that
          demonstrate my understanding of the foundations of web development, HTML. 
          CSS, and JavaScript. 
        </p>
        <div className="thumbnails">
          <img src="images/landingpage.png" alt="A landing page for a gym membership created for an odin project assignment." />
          <img src="images/rps.png" alt="Rock, paper, scissors game created during the oding project completion" />
          <img src="images/etchasketch.png" alt="Interactive etch-a-sketch created during odin project foundations completion" />
          <img src="images/calculator.png" alt="Functional calculator capable of performing basic math operations." />
        </div>
      </div>
    </>
  )
}

export default App
