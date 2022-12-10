import Link from "next/link";
import "boxicons/css/boxicons.min.css";
import NavIcon from "@components/navbar/nav-icon";
import NavItem from "@components/navbar/nav-item";

export default function NavBar({ className, variant, href, children }) {
	const addClassName = className ? `${className}` : "";
	return (
		<Link href={href}>
			<div className={`navbar-content cursor-pointer ${addClassName}`}>
				<NavIcon variant={variant} />
				<NavItem>{children}</NavItem>
			</div>
		</Link>
	);
}
