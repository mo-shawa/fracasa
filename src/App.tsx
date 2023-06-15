import "./App.css"
import Navbar from "./components/Navigation/Navbar"

function App() {
	return (
		<>
			<Navbar />
			<section className="h-screen bg-gray-200 ">
				<div className="section-inner border-2 border-red-400 grid grid-cols-2">
					<div>123</div>
					<div>123</div>
				</div>
			</section>
			<section className="h-screen "></section>
			<section className="h-screen"></section>
		</>
	)
}

export default App
