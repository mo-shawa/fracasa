import "./App.css"
import Navbar from "./components/Navigation/Navbar"
import heroImage from "./assets/hero.png"

function App() {
	return (
		<>
			<Navbar />
			<section className=" bg-slate-100 px-4 py-20 relative">
				<div className="section-inner grid grid-cols-2">
					<div className="flex flex-col justify-center items-start gap-6">
						<h1 className="text-5xl font-semibold leading-snug">
							Want to afford your <br />
							<span className="text-brand font-bold underline ">
								dream home
							</span>
							? <br /> We've got you.
						</h1>
						<div className="flex flex-col text-brand font-semibold text-xl">
							<span>👋 Goodbye 20%+ down-payments</span>
							<span>👋 Goodbye 20%+ down-payments</span>
						</div>
						<button className="rounded-full text-white shadow-lg shadow-brand/50 bg-brand p-4">
							Check your eligibility
						</button>
					</div>

					<div className="flex items-center">
						<img src={heroImage} alt="" />
					</div>
				</div>
				<div className="grid grid-cols-7 w-full max-w-7xl absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2">
					<div className="bg-brand w-32 h-32 rounded-lg"></div>
					<div className="bg-brand w-32 h-32 rounded-lg"></div>
					<div className="bg-brand w-32 h-32 rounded-lg"></div>
					<div className="bg-brand w-32 h-32 rounded-lg"></div>
					<div className="bg-brand w-32 h-32 rounded-lg"></div>
					<div className="bg-brand w-32 h-32 rounded-lg"></div>
					<div className="bg-brand w-32 h-32 rounded-lg"></div>
				</div>
			</section>
			<section className="h-screen "></section>
			<section className="h-screen"></section>
		</>
	)
}

export default App
