import TwitterSVG from "../assets/svg/twitter.svg"
import LinkedInSVG from "../assets/svg/linkedin.svg"

export default function Footer() {
	return (
		<footer className="w-full bg-slate-100 relative border-t">
			<div className="mx-auto px-4 max-w-7xl flex w-full flex-col md:flex-row md:flex-nowrap flex-wrap gap-4 py-4 justify-between items-center">
				<div className="flex flex-row gap-8">
					<img
						src={LinkedInSVG}
						className="mt-1 w-6 h-6 text-white"
						alt="linkedin"
					/>
					<img
						src={TwitterSVG}
						alt="twitter"
						className="mt-1 w-6 h-6 text-white"
					/>
				</div>

				<small className=" flex gap-2 flex-row">
					<span>2023 Fracasa</span> <span>© All Right Reserved</span>
				</small>
			</div>
		</footer>
	)
}
