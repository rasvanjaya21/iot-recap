import Head from "next/head";
import NavBar from "@components/navbar/nav-bar";
import AppBar from "@components/appbar/app-bar";

export default function About() {
	return (
		<>
			<Head>
				<title>Tentang Recap App</title>
			</Head>

			<AppBar>
				<span className="text-primary">Tentang</span>
				<span className="text-secondary"> Recap App</span>
			</AppBar>

			<div className="flex fixed sm:hidden bg-white px-2 bottom-[-0.7px] w-full h-[75px] shadow-[0_0_3px_0_rgba(0,0,0,0.20)] z-[5]">
				<NavBar href="/" variant="home">
					Beranda
				</NavBar>
				<NavBar href="/event" variant="event">
					Waktu
				</NavBar>
				<NavBar href="/result" variant="result">
					Hasil
				</NavBar>
				<NavBar href="/gallery" variant="gallery">
					Galeri
				</NavBar>
				<NavBar className="navbar-active" href="/about" variant="active-about">
					Tentang
				</NavBar>
			</div>

			{/* default content */}
			<div className="flex w-screen h-screen mx-auto" data-aos="fade-up">
				<h1 className="mx-auto self-center">
					Currently, you are interacting with
					<span className="text-primary-800 "> About 🎉</span>
				</h1>
			</div>
		</>
	);
}
