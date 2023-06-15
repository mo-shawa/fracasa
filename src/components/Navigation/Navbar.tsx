import LogoWithText from "./LogoWithText"

export default function Navbar() {
	return (
		<div className="max-w-7xl navbar bg-base-100 shadow rounded-full px-16 w-[calc(100%-2rem)] fixed top-4 left-1/2 -translate-x-1/2 z-20">
			<LogoWithText />
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<details>
							<summary>Parent</summary>
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
					<li>
						<a>Login</a>
					</li>
					<li>
						<a>Get Started {"=/>"}</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
