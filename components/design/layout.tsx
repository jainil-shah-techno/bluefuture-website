import Footer from "../footer/footer";
import Meta from "../meta";

export default function Layout({ children }) {
	return (
		<>
			<Meta />
			<div className="min-h-screen bg-dark-blue">
				<main>{children}</main>
			</div>
		</>
	);
}
