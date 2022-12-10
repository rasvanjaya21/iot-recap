import Head from "next/head";
import NavBar from "@components/navbar/nav-bar";
import AppBar from "@components/appbar/app-bar";

export default function Gallery() {
	return (
		<>
			<Head>
				<title>Story Himam Konsulat Malang</title>
			</Head>

			<AppBar>
				<span className="text-primary">Story</span>
				<span className="text-secondary"> Himam Konsulat Malang</span>
			</AppBar>

			<div className="flex fixed sm:hidden bg-white px-2 bottom-[-0.7px] w-full h-[75px] shadow-[0_0_3px_0_rgba(0,0,0,0.20)] z-[5]">
				<NavBar href="/" variant="home">
					Home
				</NavBar>
				<NavBar href="/event" variant="event">
					Event
				</NavBar>
				<NavBar className="navbar-active" href="/story" variant="active-story">
					Story
				</NavBar>
				<NavBar href="/gallery" variant="gallery">
					Gallery
				</NavBar>
				<NavBar href="/about" variant="about">
					About
				</NavBar>
			</div>

			{/* default content */}
			<div className="flex w-screen h-screen mx-auto" data-aos="fade-up">
				<h1 className="mx-auto self-center">
					Currently, you are interacting with
					<span className="text-green-800 "> Gallery 🎉</span>
				</h1>
			</div>
		</>
	);
}
