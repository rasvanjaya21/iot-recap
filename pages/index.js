import Head from "next/head";
import NavBar from "@components/navbar/nav-bar";
import Section from "@components/section/section-layout";
import Typing from "@utils/typing";
import React from "react";

export default function Home({ home }) {

	return (
		<>
			<Head>
				<title>Recap App</title>
			</Head>

			<div className="flex fixed sm:hidden bg-white px-2 bottom-[-0.7px] w-full h-[75px] shadow-[0_0_3px_0_rgba(0,0,0,0.20)] z-[5]">
				<NavBar className="navbar-active" href="/" variant="active-home">
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
				<NavBar href="/about" variant="about">
					Tentang
				</NavBar>
			</div>

			<div className="header">
				<Section>
					<div className="container w-11/12 mx-auto pl-4 pr-4 pt-[75px]">
						<p> Selamat Datang</p>
						<Typing />
					</div>
				</Section>
			</div>

			<div className="">
				<Section></Section>
			</div>
		</>
	);
}