import Head from "next/head";
import NavBar from "@components/navbar/nav-bar";
import AppBar from "@components/appbar/app-bar";

import {
	HomeIcon,
	EnvelopeIcon,
	ChatBubbleBottomCenterTextIcon,
	BellIcon,
	ClipboardDocumentListIcon,
	UsersIcon,
	UserIcon,
	Cog6ToothIcon,
	ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

import { PencilSquareIcon } from "@heroicons/react/24/solid";

import React from "react";
import {
	Chart as ChartJS,
	LineController,
	LineElement,
	PointElement,
	CategoryScale,
	LinearScale,
	Filler,
	Legend,
	Title,
	Tooltip,
} from "chart.js/auto";

ChartJS.register(
	LineController,
	LineElement,
	PointElement,
	CategoryScale,
	LinearScale,
	Filler,
	Legend,
	Title,
	Tooltip
);

import { Bar, Line, Scatter, Bubble } from "react-chartjs-2";

const hariPertamaBar = {
	labels: [
		"01:00",
		"02:00",
		"03:00",
		"04:00",
		"05:00",
		"06:00",
		"07:00",
		"08:00",
		"09:00",
		"10:00",
		"11:00",
		"12:00",
		"13:00",
		"14:00",
		"15:00",
		"16:00",
		"17:00",
		"18:00",
		"19:00",
		"20:00",
		"21:00",
		"22:00",
		"23:00",
		"24:00",
	],
	datasets: [
		{
			label: "Suhu Cuaca",
			borderRadius: 30,
			data: [
				"30",
				"31",
				"32",
				"33",
				"34",
				"35",
				"36",
				"37",
				"38",
				"39",
				"40",
				"41",
				"42",
				"43",
				"44",
				"45",
				"46",
				"47",
				"48",
				"49",
				"50",
				"51",
				"52",
				"53",
			],
			backgroundColor: "rgba(32, 214, 155, 1)",
			barThickness: 10,
		},
		{
			label: "Kelembaban",
			borderRadius: 30,
			data: [
				"12",
				"13",
				"14",
				"15",
				"16",
				"17",
				"18",
				"19",
				"20",
				"21",
				"22",
				"23",
				"24",
				"25",
				"26",
				"27",
				"28",
				"29",
				"30",
				"31",
				"32",
				"33",
				"34",
				"35",
			],
			backgroundColor: "rgba(1, 98, 255, 1)",
			barThickness: 10,
		},
	],
};

const hariPertamaBarMobile = {
	labels: [
		"01:00",
		"02:00",
		"03:00",
		"04:00",
		"05:00",
		"06:00",
		"07:00",
		"08:00",
		"09:00",
		"10:00",
		"11:00",
		"12:00",
		"13:00",
		"14:00",
		"15:00",
		"16:00",
		"17:00",
		"18:00",
		"19:00",
		"20:00",
		"21:00",
		"22:00",
		"23:00",
		"24:00",
	],
	datasets: [
		{
			label: "Suhu Cuaca",
			borderRadius: 30,
			data: [
				"30",
				"31",
				"32",
				"33",
				"34",
				"35",
				"36",
				"37",
				"38",
				"39",
				"40",
				"41",
				"42",
				"43",
				"44",
				"45",
				"46",
				"47",
				"48",
				"49",
				"50",
				"51",
				"52",
				"53",
			],
			backgroundColor: "rgba(32, 214, 155, 1)",
			barThickness: 2,
		},
		{
			label: "Kelembaban",
			borderRadius: 30,
			data: [
				"12",
				"13",
				"14",
				"15",
				"16",
				"17",
				"18",
				"19",
				"20",
				"21",
				"22",
				"23",
				"24",
				"25",
				"26",
				"27",
				"28",
				"29",
				"30",
				"31",
				"32",
				"33",
				"34",
				"35",
			],
			backgroundColor: "rgba(1, 98, 255, 1)",
			barThickness: 2,
		},
	],
};

const hariPertama = {
	labels: [
		"01:00",
		"02:00",
		"03:00",
		"04:00",
		"05:00",
		"06:00",
		"07:00",
		"08:00",
		"09:00",
		"10:00",
		"11:00",
		"12:00",
		"13:00",
		"14:00",
		"15:00",
		"16:00",
		"17:00",
		"18:00",
		"19:00",
		"20:00",
		"21:00",
		"22:00",
		"23:00",
		"24:00",
	],
	datasets: [
		{
			label: "Data Cuaca",
			// borderRadius: 30,
			// backgroundColor: "rgba(32, 214, 155, 1)",
			// barThickness: 10,
			fill: true,
			lineTension: 0.1,
			backgroundColor: "rgba(75,192,192,0.4)",
			borderColor: "rgba(75,192,192,1)",
			borderCapStyle: "butt",
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: "miter",
			pointBorderColor: "rgba(75,192,192,1)",
			pointBackgroundColor: "#fff",
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: "rgba(75,192,192,1)",
			pointHoverBorderColor: "rgba(220,220,220,1)",
			pointHoverBorderWidth: 1,
			pointRadius: 3,
			pointHitRadius: 10,
			data: [
				24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6,
				5, 4, 3, 2, 1,
			],
		},
		{
			label: "Data Kelembaban",
			borderRadius: 20,
			backgroundColor: "rgba(1, 98, 255, 1)",
			barThickness: 10,
			fill: true,
			lineTension: 0.1,
			backgroundColor: "rgba(75,192,192,0.4)",
			borderColor: "rgba(75,192,192,1)",
			borderCapStyle: "butt",
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: "miter",
			pointBorderColor: "rgba(75,192,192,1)",
			pointBackgroundColor: "#fff",
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: "rgba(75,192,192,1)",
			pointHoverBorderColor: "rgba(220,220,220,1)",
			pointHoverBorderWidth: 1,
			pointRadius: 3,
			pointHitRadius: 10,
			data: [
				1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
				21, 22, 23, 24,
			],
		},
	],
};

const optionsBar = {
	plugins: {
		legend: {
			position: "top",
			align: "start",
			labels: {
				boxWidth: 100,
				usePointStyle: true,
				pointStyle: "circle",
			},
			title: {
				text: "Hari Senin, 1 Maret 2021",
				display: true,
				color: "#000",
				font: {
					size: 16,
				},
			},
		},
	},
	elements: {
		bar: {
			barPErcentage: 0.3,
			categoryPercentage: 1,
		},
	},
};

const options = {
	plugins: {
		legend: {
			display: false,
		},
	},
	elements: {
		line: {
			tension: 0,
			borderWidth: 2,
			borderColor: "(rgba(47, 97, 68, 1))",
			fill: false,
			backgroundColor: "rgba(47, 97, 68, 0.3)",
		},
		point: {
			radius: 0,
			hitRadius: 0,
		},
	},
};

export default function Gallery() {
	return (
		<>
			<Head>
				<title>Result Himam Konsulat Malang</title>
			</Head>

			<AppBar>
				<span className="text-primary">Hasil</span>
				<span className="text-secondary"> Recap App</span>
			</AppBar>

			<div className="flex fixed sm:hidden bg-white px-2 bottom-[-0.7px] w-full h-[75px] shadow-[0_0_3px_0_rgba(0,0,0,0.20)] z-[5]">
				<NavBar href="/" variant="home">
					Beranda
				</NavBar>
				<NavBar href="/event" variant="event">
					Waktu
				</NavBar>
				<NavBar
					className="navbar-active"
					href="/result"
					variant="active-result"
				>
					Hasil
				</NavBar>
				<NavBar href="/gallery" variant="gallery">
					Galeri
				</NavBar>
				<NavBar href="/about" variant="about">
					Tentang
				</NavBar>
			</div>

			{/* default content */}
			{/* <div className="flex w-screen h-screen mx-auto" data-aos="fade-up">
				<h1 className="mx-auto self-center">
					Currently, you are interacting with
					<span className="text-primary-800 "> Hasil 🎉</span>
				</h1>
			</div> */}
			<div className="flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
				<div className="opacity-0 sm:opacity-100 fixed flex flex-col top-0 left-0 w-42 h-full bg-white">
					<div className="flex items-center pl-11 h-18 pt-28">
						<div className="text-xl font-bold">
							<div className="opacity-0 sm:opacity-100 fixed sm:relative inline-flex items-end">
								<PencilSquareIcon className="w-10 h-10" />
								{"."}Recap App
							</div>
						</div>
					</div>
					<div className="overflow-y-auto overflow-x-hidden  flex-grow">
						<ul className="flex flex-col py-4 space-y-1">
							<li className="pt-12 sm:pt-0">
								<a
									href="/"
									className="relative flex flex-row items-center h-11 focus:outline-none rounded-r-xl  text-gray-600 hover:text-primary border-l-4 border-transparent"
								>
									<span className="inline-flex justify-center items-center ml-11">
										<HomeIcon className="w-4 h-4" />
									</span>
									<span className="ml-3 text-sm tracking-wide truncate">
										Beranda
									</span>
								</a>
							</li>
							<li>
								<a
									href="/result"
									className="relative flex flex-row items-center h-11 focus:outline-none rounded-r-xl  text-gray-600 hover:text-primary border-l-4 border-transparent"
								>
									<span className="inline-flex justify-center items-center ml-11">
										<EnvelopeIcon className="w-4 h-4" />
									</span>
									<span className="ml-3 text-sm tracking-wide truncate">
										Waktu
									</span>
								</a>
							</li>
							<li>
								<a
									href=""
									className="relative flex flex-row items-center h-11 focus:outline-none rounded-r-xl  text-gray-600 hover:text-primary border-l-4 border-transparent"
								>
									<span className="inline-flex justify-center items-center ml-11">
										<ChatBubbleBottomCenterTextIcon className="w-4 h-4" />
									</span>
									<span className="ml-3 text-sm tracking-wide truncate">
										Hasil
									</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									className="relative flex flex-row items-center h-11 focus:outline-none rounded-r-xl  text-gray-600 hover:text-primary border-l-4 border-transparent"
								>
									<span className="inline-flex justify-center items-center ml-11">
										<BellIcon className="w-4 h-4" />
									</span>
									<span className="ml-3 text-sm tracking-wide truncate">
										Galeri
									</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									className="relative flex flex-row items-center h-11 focus:outline-none rounded-r-xl  text-gray-600 hover:text-primary border-l-4 border-transparent"
								>
									<span className="inline-flex justify-center items-center ml-11">
										<ClipboardDocumentListIcon className="w-4 h-4" />
									</span>
									<span className="ml-3 text-sm tracking-wide truncate">
										Tentang
									</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="pt-20 sm:pt-36 h-screen pl-5 sm:pl-56 mr-5 sm:mr-14  bg-white">
				<div className=" pb-10">
					<div className="hidden sm:flex bg-white h-fit rounded-3xl p-10 my-5 shadow-md">
						<Bar
							data={hariPertamaBar}
							height={100}
							options={optionsBar}
						/>
					</div>
					<div className="hidden sm:flex bg-white h-fit rounded-3xl p-10 my-5 shadow-md">
						<Bar data={hariPertamaBar} height={100} options={optionsBar} />
					</div>
					<div className="flex sm:hidden bg-white h-fit rounded-3xl p-2 my-5 shadow-md">
						<Bar
							data={hariPertamaBarMobile}
							height={150}
							options={optionsBar}
						/>
					</div>

					<div className="flex sm:hidden bg-white h-fit rounded-3xl p-2 my-5 shadow-md">
						<Bar
							data={hariPertamaBarMobile}
							height={150}
							options={optionsBar}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
