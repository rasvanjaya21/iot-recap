import Head from "next/head";


import {
	HomeIcon,
	CalendarDaysIcon,
	ChartBarIcon,
	PhotoIcon,
	UsersIcon,
} from "@heroicons/react/24/outline";

import { PencilSquareIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import WeatherCard from "@components/sidebar/weather";

export default function Event() {
	return (
		<>
			<Head>
				<title>Analisa Observasi</title>
			</Head>

			{/* mobile nav-bar */}
			<div className="flex fixed sm:hidden bg-white px-2 bottom-[-0.7px] w-full h-[75px] shadow-[0_0_3px_0_rgba(0,0,0,0.20)] z-[10]">
				<Link href="/" className="navbar-content cursor-pointer">
					<i className="text-[30px] bx bx-home" />
					<span className="pt-0.5 text-xs">
						<b>Beranda</b>
					</span>
				</Link>
				<Link
					href="/event"
					className="navbar-content cursor-pointer navbar-active"
				>
					<i className="text-[30px] bx bxs-calendar bx-tada" />
					<span className="pt-0.5 text-xs">
						<b>Analisa</b>
					</span>
				</Link>
				<Link href="/result" className="navbar-content cursor-pointer ">
					<i className="text-[30px] bx bx-bar-chart-square" />
					<span className="pt-0.5 text-xs">
						<b>Hasil</b>
					</span>
				</Link>
				<Link href="/gallery" className="navbar-content cursor-pointer ">
					<i className="text-[30px] bx bx-image-alt" />
					<span className="pt-0.5 text-xs">
						<b>Galeri</b>
					</span>
				</Link>
				<Link href="/about" className="navbar-content cursor-pointer ">
					<i className="text-[30px] bx bx-group" />
					<span className="pt-0.5 text-xs">
						<b>Profile</b>
					</span>
				</Link>
			</div>

			{/* desktop nav-bar */}
			<div className="flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
				<div className="hidden fixed sm:flex flex-col top-0 left-0 w-42 h-full bg-white">
					<div className="flex items-center pl-11 h-18 pt-8">
						<div className="text-xl font-bold">
							<div className="opacity-0 sm:opacity-100 fixed sm:relative inline-flex items-end">
								<PencilSquareIcon className="w-10 h-10" />
								{"."}Recapap
							</div>
						</div>
					</div>

					<div className="overflow-y-auto overflow-x-hidden  flex-grow">
						<ul className="flex flex-col py-4 space-y-1">
							<WeatherCard />
							<li className="pt-12 sm:pt-5">
								<Link
									href="/"
									className="relative flex flex-row items-center h-11 focus:outline-none rounded-r-xl  text-gray-600 hover:text-primary-500 hover:bg-primary-100 border-l-4 border-transparent"
								>
									<span className="inline-flex justify-center items-center ml-11">
										<HomeIcon className="w-4 h-4" />
									</span>
									<span className="ml-3 text-sm tracking-wide truncate">
										Beranda
									</span>
								</Link>
							</li>
							<li>
								<Link
									href="/event"
									className="relative flex flex-row items-center h-11 focus:outline-none rounded-r-xl bg-primary-100 text-primary-500 hover:text-primary-500 hover:bg-primary-100 border-l-4 border-transparent"
								>
									<span className="inline-flex justify-center items-center ml-11">
										<CalendarDaysIcon className="w-4 h-4" />
									</span>
									<span className="ml-3 text-sm tracking-wide truncate">
										Analisa
									</span>
								</Link>
							</li>
							<li>
								<Link
									href="/result"
									className="relative flex flex-row items-center h-11 focus:outline-none rounded-r-xl  text-gray-600 hover:text-primary-500 hover:bg-primary-100 border-l-4 border-transparent"
								>
									<span className="inline-flex justify-center items-center ml-11">
										<ChartBarIcon className="w-4 h-4" />
									</span>
									<span className="ml-3 text-sm tracking-wide truncate">
										Hasil
									</span>
								</Link>
							</li>
							<li>
								<Link
									href="/gallery"
									className="relative flex flex-row items-center h-11 focus:outline-none rounded-r-xl  text-gray-600 hover:text-primary-500 hover:bg-primary-100 border-l-4 border-transparent"
								>
									<span className="inline-flex justify-center items-center ml-11">
										<PhotoIcon className="w-4 h-4" />
									</span>
									<span className="ml-3 text-sm tracking-wide truncate">
										Galeri
									</span>
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="relative flex flex-row items-center h-11 focus:outline-none rounded-r-xl  text-gray-600 hover:text-primary-500 hover:bg-primary-100 border-l-4 border-transparent"
								>
									<span className="inline-flex justify-center items-center ml-11">
										<UsersIcon className="w-4 h-4" />
									</span>
									<span className="ml-3 text-sm tracking-wide truncate">
										Profile
									</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* data here */}
			<div className="pt-10 sm:pt-0 h-full pl-5 sm:pl-56 pb-28 mr-5 sm:mr-14 bg-white">
				{/* featured */}
				<div className="overflow-x-auto pl[-56px]">
					<table className="pt-20 w-full text-sm text-left text-gray-500 ">
						<caption className="py-5 sm:py-5 sm:pt-10 text-lg font-semibold text-left text-gray-900 bg-white  ">
							Waktu Observasi
							<p className="mt-1 text-sm font-normal text-gray-500 ">
								Informasi mengenai waktu observasi
							</p>
						</caption>
					</table>
				</div>

				<div className="container ">
					<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-10">
						<div className=" flex   text-6xl py-20 sm:py-28 px-5 sm:px-10 rounded-xl  bg-[#FFEAF1]">
							{/* card 🌡️ */}
							<div>
								<div className="text-4xl">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="48"
										height="48"
										fill="none"
										viewBox="0 0 75 75"
									>
										<g clipPath="url(#clip0_110_190)">
											<path
												fill="#fff"
												d="M31.337 40.506c5.96-4.46 7.176-12.91 2.715-18.87-4.461-5.96-12.91-7.176-18.87-2.715-5.96 4.461-7.176 12.91-2.715 18.87 4.461 5.96 12.91 7.176 18.87 2.715z"
											></path>
											<path
												fill="#92D3F5"
												d="M34.626 22.676c-1.964-2.625-6.413-5.57-9.659-6.037-2.222-.32-6.036 0-6.414 1.752 2.936.27 7.56 1.682 11.407 7.29 3.266 4.76 3.514 8.767 3.03 11.496 2.843-.013 5-10.005 1.636-14.501z"
											></path>
											<path
												fill="#D0CFCE"
												d="M12.552 15.737a17.633 17.633 0 00-6.926 11.67A17.624 17.624 0 008.98 40.56c5.86 7.827 16.994 9.43 24.822 3.57 7.828-5.856 9.431-16.99 3.572-24.82a17.616 17.616 0 00-11.67-6.926 17.619 17.619 0 00-13.152 3.354zm21.1 6.2c2.754 3.68 3.255 8.36 1.743 12.373a12.89 12.89 0 01-4.358 5.797c-5.73 4.289-13.882 3.115-18.17-2.615a12.893 12.893 0 01-2.456-9.626 12.896 12.896 0 015.071-8.544 12.89 12.89 0 019.626-2.456 12.896 12.896 0 018.544 5.071z"
											></path>
											<path
												fill="#3F3F3F"
												d="M34.626 50.444l12.073 16.903s3.622 4.829 6.037 2.414c2.415-2.414 0-6.036 0-6.036l-13.28-16.903-4.83 3.622z"
											></path>
											<path
												stroke="#000"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeMiterlimit="10"
												strokeWidth="2"
												d="M33.849 43.862c7.814-5.848 9.407-16.923 3.559-24.737s-16.923-9.407-24.737-3.56C4.857 21.415 3.264 32.49 9.11 40.304c5.849 7.814 16.924 9.407 24.738 3.559z"
											></path>
											<path
												stroke="#000"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeMiterlimit="10"
												strokeWidth="2"
												d="M31.337 40.506c5.96-4.46 7.176-12.91 2.715-18.87-4.46-5.96-12.91-7.176-18.87-2.715-5.96 4.461-7.176 12.91-2.715 18.87 4.461 5.96 12.91 7.177 18.87 2.715zM34.24 50.188l5.052-3.781 14.117 18.86c1.008 1.348.695 3.287-.7 4.331-1.395 1.044-3.343.798-4.352-.55L34.24 50.189z"
											></path>
										</g>
										<defs>
											<clipPath id="clip0_110_190">
												<path fill="#fff" d="M0 0H75V75H0z"></path>
											</clipPath>
										</defs>
									</svg>
								</div>
								<div className="text-xl">Hari Pertama</div>
								<div className="text-secondary-500 text-xs">
									Diambil pada Minggu, 11 Desember 2022
								</div>
							</div>
						</div>
						<div className="flex  text-6xl   rounded-xl py-20 sm:py-28 px-5 sm:px-10 bg-[#D8D7FF]">
							<div>
								<div className="text-4xl">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="48"
										height="48"
										fill="none"
										viewBox="0 0 75 75"
									>
										<g clipPath="url(#clip0_110_190)">
											<path
												fill="#fff"
												d="M31.337 40.506c5.96-4.46 7.176-12.91 2.715-18.87-4.461-5.96-12.91-7.176-18.87-2.715-5.96 4.461-7.176 12.91-2.715 18.87 4.461 5.96 12.91 7.176 18.87 2.715z"
											></path>
											<path
												fill="#92D3F5"
												d="M34.626 22.676c-1.964-2.625-6.413-5.57-9.659-6.037-2.222-.32-6.036 0-6.414 1.752 2.936.27 7.56 1.682 11.407 7.29 3.266 4.76 3.514 8.767 3.03 11.496 2.843-.013 5-10.005 1.636-14.501z"
											></path>
											<path
												fill="#D0CFCE"
												d="M12.552 15.737a17.633 17.633 0 00-6.926 11.67A17.624 17.624 0 008.98 40.56c5.86 7.827 16.994 9.43 24.822 3.57 7.828-5.856 9.431-16.99 3.572-24.82a17.616 17.616 0 00-11.67-6.926 17.619 17.619 0 00-13.152 3.354zm21.1 6.2c2.754 3.68 3.255 8.36 1.743 12.373a12.89 12.89 0 01-4.358 5.797c-5.73 4.289-13.882 3.115-18.17-2.615a12.893 12.893 0 01-2.456-9.626 12.896 12.896 0 015.071-8.544 12.89 12.89 0 019.626-2.456 12.896 12.896 0 018.544 5.071z"
											></path>
											<path
												fill="#3F3F3F"
												d="M34.626 50.444l12.073 16.903s3.622 4.829 6.037 2.414c2.415-2.414 0-6.036 0-6.036l-13.28-16.903-4.83 3.622z"
											></path>
											<path
												stroke="#000"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeMiterlimit="10"
												strokeWidth="2"
												d="M33.849 43.862c7.814-5.848 9.407-16.923 3.559-24.737s-16.923-9.407-24.737-3.56C4.857 21.415 3.264 32.49 9.11 40.304c5.849 7.814 16.924 9.407 24.738 3.559z"
											></path>
											<path
												stroke="#000"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeMiterlimit="10"
												strokeWidth="2"
												d="M31.337 40.506c5.96-4.46 7.176-12.91 2.715-18.87-4.46-5.96-12.91-7.176-18.87-2.715-5.96 4.461-7.176 12.91-2.715 18.87 4.461 5.96 12.91 7.177 18.87 2.715zM34.24 50.188l5.052-3.781 14.117 18.86c1.008 1.348.695 3.287-.7 4.331-1.395 1.044-3.343.798-4.352-.55L34.24 50.189z"
											></path>
										</g>
										<defs>
											<clipPath id="clip0_110_190">
												<path fill="#fff" d="M0 0H75V75H0z"></path>
											</clipPath>
										</defs>
									</svg>
								</div>
								<div className="text-xl">Hari Kedua</div>
								<div className="text-secondary-500 text-xs">
									Diambil pada Senin, 12 Desember 2022
								</div>
							</div>
						</div>
						<div className=" flex  text-6xl   rounded-xl py-20 sm:py-28 px-5 sm:px-10 bg-[#FFF2CB]">
							<div>
								<div className="text-4xl">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="48"
										height="48"
										fill="none"
										viewBox="0 0 78 78"
									>
										<path
											fill="#fff"
											d="M30.723 18.707H24.22v6.502h6.502v-6.502zM30.723 36.718l-6.502 1.495V31.71h6.502v5.007zM37.225 25.209h-6.502v6.502h6.502v-6.502zM43.727 18.707h-6.502v6.502h6.502v-6.502zM37.225 16.236h-6.502v2.47h6.502v-2.47zM43.727 38.213l-6.502-1.572v-4.93h6.502v6.502zM50.23 25.209h-6.503v6.502h6.502v-6.502zM56.731 21.958H50.23v3.25h6.502v-3.25zM56.731 31.71H50.23v6.503h6.502V31.71z"
										></path>
										<path
											fill="#fff"
											d="M58.62 25.209h-1.889v6.502h1.89v-6.502zM50.23 38.213h-6.503v2.092h6.502v-2.092zM59.02 38.213h-2.289v2.604h2.29v-2.604z"
										></path>
										<path
											fill="#000"
											d="M20.704 19.755H11.7v9.003h9.004v-9.003zM29.708 10.75h-9.004v9.005h9.004V10.75zM29.708 28.758h-9.004v7.71h9.004v-7.71zM20.704 10.75H11.7l1.027-.93 7.977-.932v1.863zM38.712 10.75h-9.004V8.323l9.004 1.459v.97zM38.712 19.755h-9.004v9.003h9.004v-9.003zM47.715 19.755h-9.004v-6.937l9.004 1.983v4.954zM47.715 28.758h-9.004v9.004h9.004v-9.004zM56.719 19.755h-9.004v9.003h9.004v-9.003zM59.336 15.314h-2.617v4.44h2.617v-4.44zM59.583 28.758H56.72v9.004h2.864v-9.004zM56.719 37.762h-9.004v5.21h9.004v-5.21z"
										></path>
										<path
											stroke="#000"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeMiterlimit="10"
											strokeWidth="2"
											d="M12.79 11.081c4.328-2.697 12.634-6.35 21.626-2.232 5.534 2.534 8.452 7.047 22.563 6.172 1.183-.073 2.19.895 2.19 2.116v22.69c0 .934-.636 1.616-1.448 2.032-2.92 1.493-10.908 1.402-23.305-4.507-5.048-2.406-12.857-3.853-21.69 2.164"
										></path>
										<path
											stroke="#000"
											strokeLinecap="round"
											strokeMiterlimit="10"
											strokeWidth="2"
											d="M7.154 4.161v70.447"
										></path>
									</svg>
								</div>
								<div className="text-xl">Mulai</div>
								<div className="text-secondary-500 text-xs">
									Pemantauan dilakukan mulai jam 07:00 WIB
								</div>
							</div>
						</div>
						<div className=" flex  text-6xl   rounded-xl py-20 sm:py-28 px-5 sm:px-10 bg-[#FFCED7]">
							<div>
								<div className="text-4xl">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="48"
										height="48"
										fill="none"
										viewBox="0 0 75 75"
									>
										<path
											fill="#B1CC33"
											d="M71.548 23.613L60.935 13 26.883 47.052 14.618 34.788 4.005 45.4 27.078 68.5l44.47-44.887z"
										></path>
										<path
											stroke="#000"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeMiterlimit="10"
											strokeWidth="2"
											d="M4 45.414l23.073 23.099 44.475-44.887-10.613-10.613-34.052 34.053L14.618 34.8 4 45.414z"
										></path>
									</svg>
								</div>
								<div className="text-xl">Selesai</div>
								<div className="text-secondary-500 text-xs">
									Pemantauan selesai dalam waktu 24 jam
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* featured */}
				<div className="overflow-x-auto pl[-56px]">
					<table className="pt-20 w-full text-sm text-left text-gray-500 ">
						<caption className="py-5 sm:py-5 sm:pt-10 text-lg font-semibold text-left text-gray-900 bg-white  ">
							Lokasi Observasi
							<p className="mt-1 text-sm font-normal text-gray-500 ">
								Tempat yang digunakan untuk melakukan observasi
							</p>
						</caption>
					</table>
				</div>

				<div className="container ">
					<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 pb-10">
						<div className=" flex   text-6xl py-20 sm:py-28 px-5 sm:px-10 rounded-xl  bg-[#FFEAF1]">
							{/* card 🌡️ */}
							<div>
								<div className="text-4xl">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="48"
										height="48"
										fill="none"
										viewBox="0 0 72 72"
									>
										<path
											fill="#D22F27"
											d="M43.66 25.594C43.66 13.686 34.54 4 23.33 4 12.12 4 3 13.686 3 25.6c.003.594.286 14.839 16.569 39.94a4.427 4.427 0 003.601 2.473c2.351 0 3.955-2.59 4.111-2.854C43.668 40.043 43.668 26.16 43.66 25.594zM23.33 34.29a9.054 9.054 0 119.054-9.054 9.064 9.064 0 01-9.054 9.054z"
										></path>
										<path
											fill="#EA5A47"
											d="M43.66 25.594C43.66 13.686 34.54 4 23.33 4c-1.67.008-3.33.233-4.94.672 10.73.574 19.3 10 19.3 21.538.01.567.01 14.45-16.377 39.565-.22.36-.472.701-.75 1.02a3.65 3.65 0 002.607 1.218c2.351 0 3.955-2.59 4.111-2.854C43.668 40.043 43.668 26.161 43.66 25.594z"
										></path>
										<path
											stroke="#000"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M23.17 68.013a4.427 4.427 0 01-3.601-2.473C3.286 40.44 3.003 26.194 3 25.6 3 13.686 12.12 4 23.33 4c11.21 0 20.33 9.686 20.33 21.594.008.567.008 14.45-16.379 39.565-.156.263-1.76 2.854-4.11 2.854z"
										></path>
										<path
											stroke="#000"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M23.33 34.29a9.053 9.053 0 119.054-9.053 9.064 9.064 0 01-9.054 9.054v0z"
										></path>
									</svg>
								</div>
								<div className="text-xl">Kota</div>
								<div className="text-secondary-500 text-xs">
									Malang, Jawa Timur
								</div>
							</div>
						</div>
						<div className="flex  text-6xl   rounded-xl py-20 sm:py-28 px-5 sm:px-10 bg-[#D8D7FF]">
							<div>
								<div className="text-4xl">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="48"
										height="48"
										fill="none"
										viewBox="0 0 72 72"
									>
										<path
											fill="#F4AA41"
											d="M13.989 15.667c1.987 0 3.597-2.388 3.597-5.333C17.586 7.388 15.976 5 13.99 5c-1.987 0-3.598 2.388-3.598 5.334 0 2.945 1.611 5.333 3.598 5.333z"
										></path>
										<path
											fill="#F1B31C"
											d="M13.087 23.452c1.405-1.405.855-4.233-1.228-6.316-2.083-2.082-4.91-2.632-6.315-1.227-1.405 1.405-.855 4.232 1.227 6.315 2.083 2.083 4.91 2.633 6.316 1.228z"
										></path>
										<path
											fill="#F1B31C"
											d="M13.087 31.864c1.405-1.405.855-4.233-1.228-6.316-2.083-2.082-4.91-2.632-6.315-1.227-1.405 1.405-.855 4.232 1.228 6.315s4.91 2.633 6.315 1.228z"
										></path>
										<path
											fill="#F1B31C"
											d="M13.087 40.276c1.405-1.405.855-4.233-1.228-6.316-2.083-2.082-4.91-2.632-6.315-1.227-1.405 1.405-.855 4.232 1.227 6.315 2.083 2.083 4.91 2.633 6.316 1.228z"
										></path>
										<path
											fill="#F1B31C"
											d="M13.087 48.688c1.405-1.405.855-4.233-1.228-6.316s-4.91-2.632-6.315-1.227c-1.405 1.405-.855 4.232 1.227 6.315 2.083 2.083 4.91 2.633 6.316 1.228z"
										></path>
										<path
											fill="#F1B31C"
											d="M13.087 57.1c1.405-1.405.855-4.233-1.228-6.316s-4.91-2.632-6.315-1.227c-1.405 1.404-.855 4.232 1.227 6.315 2.083 2.083 4.91 2.632 6.316 1.227zM21.6 22.224c2.082-2.083 2.632-4.91 1.227-6.315-1.405-1.405-4.232-.855-6.315 1.228-2.083 2.082-2.633 4.91-1.228 6.315 1.405 1.405 4.232.855 6.315-1.228z"
										></path>
										<path
											fill="#F1B31C"
											d="M21.6 30.636c2.082-2.083 2.632-4.91 1.227-6.315-1.405-1.405-4.232-.855-6.315 1.227-2.083 2.083-2.633 4.91-1.228 6.316 1.405 1.405 4.232.855 6.315-1.228z"
										></path>
										<path
											fill="#F1B31C"
											d="M21.6 39.048c2.082-2.083 2.632-4.91 1.227-6.315-1.405-1.405-4.232-.856-6.315 1.227s-2.633 4.91-1.228 6.316c1.405 1.404 4.232.855 6.315-1.228z"
										></path>
										<path
											fill="#F1B31C"
											d="M21.6 47.46c2.082-2.083 2.632-4.91 1.227-6.315-1.405-1.405-4.232-.856-6.315 1.227s-2.633 4.91-1.228 6.316c1.405 1.404 4.232.855 6.315-1.228z"
										></path>
										<path
											fill="#F1B31C"
											d="M21.6 55.872c2.082-2.083 2.632-4.91 1.227-6.315-1.405-1.405-4.232-.856-6.315 1.227s-2.633 4.91-1.228 6.316c1.405 1.404 4.232.855 6.315-1.228z"
										></path>
										<path
											stroke="#000"
											strokeMiterlimit="10"
											strokeWidth="2"
											d="M13.968 57.7V67"
										></path>
										<path
											fill="#F4AA41"
											d="M13.989 15.667c1.987 0 3.597-2.388 3.597-5.333C17.586 7.388 15.976 5 13.99 5c-1.987 0-3.598 2.388-3.598 5.334 0 2.945 1.611 5.333 3.598 5.333z"
										></path>
										<path
											fill="#F1B31C"
											d="M13.087 23.452c1.405-1.405.855-4.233-1.228-6.316-2.083-2.082-4.91-2.632-6.315-1.227-1.405 1.405-.855 4.232 1.227 6.315 2.083 2.083 4.91 2.633 6.316 1.228z"
										></path>
										<path
											fill="#F1B31C"
											d="M13.087 31.864c1.405-1.405.855-4.233-1.228-6.316-2.083-2.082-4.91-2.632-6.315-1.227-1.405 1.405-.855 4.232 1.228 6.315s4.91 2.633 6.315 1.228z"
										></path>
										<path
											fill="#F1B31C"
											d="M13.087 40.276c1.405-1.405.855-4.233-1.228-6.316-2.083-2.082-4.91-2.632-6.315-1.227-1.405 1.405-.855 4.232 1.227 6.315 2.083 2.083 4.91 2.633 6.316 1.228z"
										></path>
										<path
											fill="#F1B31C"
											d="M13.087 48.688c1.405-1.405.855-4.233-1.228-6.316s-4.91-2.632-6.315-1.227c-1.405 1.405-.855 4.232 1.227 6.315 2.083 2.083 4.91 2.633 6.316 1.228z"
										></path>
										<path
											fill="#F1B31C"
											d="M13.087 57.1c1.405-1.405.855-4.233-1.228-6.316s-4.91-2.632-6.315-1.227c-1.405 1.404-.855 4.232 1.227 6.315 2.083 2.083 4.91 2.632 6.316 1.227zM21.6 22.224c2.082-2.083 2.632-4.91 1.227-6.315-1.405-1.405-4.232-.855-6.315 1.228-2.083 2.082-2.633 4.91-1.228 6.315 1.405 1.405 4.232.855 6.315-1.228z"
										></path>
										<path
											fill="#F1B31C"
											d="M21.6 30.636c2.082-2.083 2.632-4.91 1.227-6.315-1.405-1.405-4.232-.855-6.315 1.227-2.083 2.083-2.633 4.91-1.228 6.316 1.405 1.405 4.232.855 6.315-1.228z"
										></path>
										<path
											fill="#F1B31C"
											d="M21.6 39.048c2.082-2.083 2.632-4.91 1.227-6.315-1.405-1.405-4.232-.856-6.315 1.227s-2.633 4.91-1.228 6.316c1.405 1.404 4.232.855 6.315-1.228z"
										></path>
										<path
											fill="#F1B31C"
											d="M21.6 47.46c2.082-2.083 2.632-4.91 1.227-6.315-1.405-1.405-4.232-.856-6.315 1.227s-2.633 4.91-1.228 6.316c1.405 1.404 4.232.855 6.315-1.228z"
										></path>
										<path
											fill="#F1B31C"
											d="M21.6 55.872c2.082-2.083 2.632-4.91 1.227-6.315-1.405-1.405-4.232-.856-6.315 1.227s-2.633 4.91-1.228 6.316c1.405 1.404 4.232.855 6.315-1.228zM13.989 15.667c1.987 0 3.597-2.388 3.597-5.333C17.586 7.388 15.976 5 13.99 5c-1.987 0-3.598 2.388-3.598 5.334 0 2.945 1.611 5.333 3.598 5.333zM13.087 23.452c1.405-1.405.855-4.233-1.228-6.316-2.083-2.082-4.91-2.632-6.315-1.227-1.405 1.405-.855 4.232 1.227 6.315 2.083 2.083 4.91 2.633 6.316 1.228z"
										></path>
										<path
											fill="#F1B31C"
											d="M13.087 31.864c1.405-1.405.855-4.233-1.228-6.316-2.083-2.082-4.91-2.632-6.315-1.227-1.405 1.405-.855 4.232 1.228 6.315s4.91 2.633 6.315 1.228z"
										></path>
										<path
											fill="#F1B31C"
											d="M13.087 40.276c1.405-1.405.855-4.233-1.228-6.316-2.083-2.082-4.91-2.632-6.315-1.227-1.405 1.405-.855 4.232 1.227 6.315 2.083 2.083 4.91 2.633 6.316 1.228z"
										></path>
										<path
											fill="#F1B31C"
											d="M13.087 48.688c1.405-1.405.855-4.233-1.228-6.316s-4.91-2.632-6.315-1.227c-1.405 1.405-.855 4.232 1.227 6.315 2.083 2.083 4.91 2.633 6.316 1.228z"
										></path>
										<path
											fill="#F1B31C"
											d="M13.087 57.1c1.405-1.405.855-4.233-1.228-6.316s-4.91-2.632-6.315-1.227c-1.405 1.404-.855 4.232 1.227 6.315 2.083 2.083 4.91 2.632 6.316 1.227zM21.6 22.224c2.082-2.083 2.632-4.91 1.227-6.315-1.405-1.405-4.232-.855-6.315 1.228-2.083 2.082-2.633 4.91-1.228 6.315 1.405 1.405 4.232.855 6.315-1.228z"
										></path>
										<path
											fill="#F1B31C"
											d="M21.6 30.636c2.082-2.083 2.632-4.91 1.227-6.315-1.405-1.405-4.232-.855-6.315 1.227-2.083 2.083-2.633 4.91-1.228 6.316 1.405 1.405 4.232.855 6.315-1.228z"
										></path>
										<path
											fill="#F1B31C"
											d="M21.6 39.048c2.082-2.083 2.632-4.91 1.227-6.315-1.405-1.405-4.232-.856-6.315 1.227s-2.633 4.91-1.228 6.316c1.405 1.404 4.232.855 6.315-1.228z"
										></path>
										<path
											fill="#F1B31C"
											d="M21.6 47.46c2.082-2.083 2.632-4.91 1.227-6.315-1.405-1.405-4.232-.856-6.315 1.227s-2.633 4.91-1.228 6.316c1.405 1.404 4.232.855 6.315-1.228z"
										></path>
										<path
											fill="#F4AA41"
											d="M21.6 55.872c2.082-2.083 2.632-4.91 1.227-6.315-1.405-1.405-4.232-.856-6.315 1.227s-2.633 4.91-1.228 6.316c1.405 1.404 4.232.855 6.315-1.228z"
										></path>
										<path
											stroke="#000"
											strokeMiterlimit="10"
											strokeWidth="2"
											d="M13.989 15.667c1.987 0 3.597-2.388 3.597-5.333C17.586 7.388 15.976 5 13.99 5c-1.987 0-3.598 2.388-3.598 5.334 0 2.945 1.611 5.333 3.598 5.333zM13.087 23.452c1.405-1.405.855-4.233-1.228-6.316-2.083-2.082-4.91-2.632-6.315-1.227-1.405 1.405-.855 4.232 1.227 6.315 2.083 2.083 4.91 2.633 6.316 1.228z"
										></path>
										<path
											stroke="#000"
											strokeMiterlimit="10"
											strokeWidth="2"
											d="M13.087 31.864c1.405-1.405.855-4.233-1.228-6.316-2.083-2.082-4.91-2.632-6.315-1.227-1.405 1.405-.855 4.232 1.228 6.315s4.91 2.633 6.315 1.228z"
										></path>
										<path
											stroke="#000"
											strokeMiterlimit="10"
											strokeWidth="2"
											d="M13.087 40.276c1.405-1.405.855-4.233-1.228-6.316-2.083-2.082-4.91-2.632-6.315-1.227-1.405 1.405-.855 4.232 1.227 6.315 2.083 2.083 4.91 2.633 6.316 1.228z"
										></path>
										<path
											stroke="#000"
											strokeMiterlimit="10"
											strokeWidth="2"
											d="M13.087 48.688c1.405-1.405.855-4.233-1.228-6.316s-4.91-2.632-6.315-1.227c-1.405 1.405-.855 4.232 1.227 6.315 2.083 2.083 4.91 2.633 6.316 1.228z"
										></path>
										<path
											stroke="#000"
											strokeMiterlimit="10"
											strokeWidth="2"
											d="M13.087 57.1c1.405-1.405.855-4.233-1.228-6.316s-4.91-2.632-6.315-1.227c-1.405 1.404-.855 4.232 1.227 6.315 2.083 2.083 4.91 2.632 6.316 1.227zM21.6 22.224c2.082-2.083 2.632-4.91 1.227-6.315-1.405-1.405-4.232-.855-6.315 1.228-2.083 2.082-2.633 4.91-1.228 6.315 1.405 1.405 4.232.855 6.315-1.228z"
										></path>
										<path
											stroke="#000"
											strokeMiterlimit="10"
											strokeWidth="2"
											d="M21.6 30.636c2.082-2.083 2.632-4.91 1.227-6.315-1.405-1.405-4.232-.855-6.315 1.227-2.083 2.083-2.633 4.91-1.228 6.316 1.405 1.405 4.232.855 6.315-1.228z"
										></path>
										<path
											stroke="#000"
											strokeMiterlimit="10"
											strokeWidth="2"
											d="M21.6 39.048c2.082-2.083 2.632-4.91 1.227-6.315-1.405-1.405-4.232-.856-6.315 1.227s-2.633 4.91-1.228 6.316c1.405 1.404 4.232.855 6.315-1.228z"
										></path>
										<path
											stroke="#000"
											strokeMiterlimit="10"
											strokeWidth="2"
											d="M21.6 47.46c2.082-2.083 2.632-4.91 1.227-6.315-1.405-1.405-4.232-.856-6.315 1.227s-2.633 4.91-1.228 6.316c1.405 1.404 4.232.855 6.315-1.228z"
										></path>
										<path
											stroke="#000"
											strokeMiterlimit="10"
											strokeWidth="2"
											d="M21.6 55.872c2.082-2.083 2.632-4.91 1.227-6.315-1.405-1.405-4.232-.856-6.315 1.227s-2.633 4.91-1.228 6.316c1.405 1.404 4.232.855 6.315-1.228z"
										></path>
									</svg>
								</div>
								<div className="text-xl">Area</div>
								<div className="text-secondary-500 text-xs">
									Pertanian warga sekitar
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* beauty-rock */}
			<div className="fixed bottom-0 w-full gradient-bottom"></div>
		</>
	);
}
