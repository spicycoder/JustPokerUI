import EstimatePage from "./components/EstimatePage"
import HomePage from "./components/HomePage"

function App() {

  return (
    <div className="flex flex-col h-screen">
      <div className="navbar bg-base-200 shadow-lg">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Scrum Poker</a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-8">
        {/* <HomePage /> */}
        <EstimatePage />
      </div>
    </div>
  )
}

export default App
