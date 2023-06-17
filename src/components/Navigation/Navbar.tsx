import LogoWithText from "./LogoWithText"
import RightArrow from "../../assets/misc/right-arrow.svg"
import Hamburger from "../../assets/misc/hamburger.svg"

export default function Navbar() {
	return (
		<div className="max-w-7xl navbar bg-base-100 shadow rounded-full px-16 w-[calc(100%-2rem)] fixed top-4 left-1/2 -translate-x-1/2 z-20">
			<LogoWithText />
			<div className="flex-none hidden md:block">
				<ul className="menu menu-horizontal px-1 font-semibold items-center">
					<li>
						<details>
							<summary>Learn</summary>
							<ul className="p-2 bg-base-100">
								<li>
									<a>Link 1</a>
								</li>
								<li>
									<a>Link 2</a>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<a>Calculator</a>
					</li>
					<a className="mr-4">
						<NavOutlineButton text="login" />
					</a>
					<a>
						<NavArrowButton text="Get Started" />
					</a>
				</ul>
			</div>
			<div className="flex-none md:hidden">
				<img className="w-10 h-10 fill-brand" src={Hamburger} alt="Hamburger" />
			</div>
		</div>
	)
}

function NavArrowButton({ text }: { text: string }) {
	return (
		<button
			className="flex w-full max-w-xs items-center justify-center gap-4 rounded-full text-white shadow shadow-brand2/70 bg-brand2 px-4 py-2
		"
		>
			{text}
			<img src={RightArrow} alt="Right Arrow" />
		</button>
	)
}
function NavOutlineButton({ text }: { text: string }) {
	return (
		<button
			className="flex w-full max-w-xs items-center justify-center gap-4 rounded-full text-brand2 shadow shadow-brand2/70 border-2 border-brand2 px-4 py-2 
		"
		>
			{text}
		</button>
	)
}
