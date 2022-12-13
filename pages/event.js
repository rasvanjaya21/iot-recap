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
										xmlnsXlink="http://www.w3.org/1999/xlink"
										width="48"
										height="48"
										fill="none"
										viewBox="0 0 75 75"
									>
										<g clipPath="url(#clip0_110_186)">
											<path
												fill="url(#pattern0)"
												d="M4 70.2h60v-60H4v60z"
											></path>
										</g>
										<defs>
											<pattern
												id="pattern0"
												width="1"
												height="1"
												patternContentUnits="objectBoundingBox"
											>
												<use
													transform="scale(.00625)"
													xlinkHref="#image0_110_186"
												></use>
											</pattern>
											<clipPath id="clip0_110_186">
												<path fill="#fff" d="M0 0H75V75H0z"></path>
											</clipPath>
											<image
												id="image0_110_186"
												width="160"
												height="160"
												xlinkHref="data:image/png;base64,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"
											></image>
										</defs>
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
