// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html style={{ scrollBehavior: "smooth" }}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}