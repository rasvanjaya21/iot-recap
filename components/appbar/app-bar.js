export default function AppBar({ children }) {
	return (
		<div className="appbar">
			<div className="py-5 text-center bg-white">
				<b>{children}</b>
			</div>
		</div>
	);
}
