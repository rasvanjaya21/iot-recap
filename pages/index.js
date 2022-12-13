import Head from "next/head";
import {
	HomeIcon,
	CalendarDaysIcon,
	ChartBarIcon,
	PhotoIcon,
	UsersIcon,
} from "@heroicons/react/24/outline";

import { PencilSquareIcon } from "@heroicons/react/24/solid";

import React from "react";

import Link from "next/link";
import WeatherCard from "@components/sidebar/weather";

export default function Index() {
	
	return (
		<>
			<Head>
				<title>Selamat Datang di Recapap</title>
			</Head>

			{/* mobile nav-bar */}
			<div className="flex fixed sm:hidden bg-white px-2 bottom-[-0.7px] w-full h-[75px] shadow-[0_0_3px_0_rgba(0,0,0,0.20)] z-[10]">
				<Link href="/" className="navbar-content cursor-pointer navbar-active">
					<i className="text-[30px] bx bxs-home bx-tada" />
					<span className="pt-0.5 text-xs">
						<b>Beranda</b>
					</span>
				</Link>
				<Link href="/event" className="navbar-content cursor-pointer ">
					<i className="text-[30px] bx bx-calendar" />
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
									className="relative flex flex-row items-center h-11 focus:outline-none rounded-r-xl bg-primary-100 text-primary-500 hover:text-primary-500 hover:bg-primary-100 border-l-4 border-transparent"
								>
									<span className="inline-flex  items-center ml-11">
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
									className="relative flex flex-row items-center h-11 focus:outline-none rounded-r-xl  text-gray-600 hover:text-primary-500 hover:bg-primary-100 border-l-4 border-transparent"
								>
									<span className="inline-flex  items-center ml-11">
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
									<span className="inline-flex  items-center ml-11">
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
									<span className="inline-flex  items-center ml-11">
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
									<span className="inline-flex  items-center ml-11">
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
				<div className=" overflow-x-auto pl[-56px]">
					<table className="pt-20 w-full text-sm text-left text-gray-500 ">
						<caption className="py-5 sm:py-5 sm:pt-10 text-lg font-semibold text-left text-gray-900 bg-white  ">
							<div className="w-fit "> Detail Observasi</div>
							<p className="mt-1 text-sm font-normal text-gray-500 text-justify">
								Pada observasi suhu dan kelembapan dilakukan pencatatan setiap
								satu jam sekali dalam waktu harian. Pencatatan dimulai pada
								pukul 07.00 WIB - Setelah itu melakukan rekap data suhu dan
								kelembapan yang kemudian akan di upload ke web yang disertai
								dengan grafiknya.
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
										viewBox="0 0 72 72"
									>
										<path
											fill="#D0CFCE"
											d="M19.518 64.65c4.78 0 7.51-2.244 8.156-5.151h-16.31c.647 2.907 3.376 5.151 8.155 5.151z"
										></path>
										<path
											fill="#FCEA2B"
											d="M29.308 10.41s-12.23-3.457-18.2 1.269c-5.969 4.726-7.65 15.6-7.65 15.6.584 2.213 4.225 8.493 4.225 8.493.54.911 2.253 7.981 3.25 11.86h17.17c.865-2.845 4.35-13.65 4.804-14.71.584-1.363 1.58-4.016 2.083-5.017 1.21-2.409.538-4.455.538-7.027 0-5.487-1.902-7.726-6.22-10.47v.002z"
										></path>
										<path
											fill="#fff"
											d="M19.518 7.202c-8.532 0-16.5 6.752-16.5 15.28 0 1.079-.264 4.491 1.217 4.491 0 0 2.393-7.825 8.362-12.55 5.97-4.725 15.52-3.725 15.52-3.725-.664-2.045-5.55-3.499-8.596-3.499l-.003.003z"
										></path>
										<path
											stroke="#000"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeMiterlimit="10"
											strokeWidth="2"
											d="M36.358 23.75c0 3.985-1.785 5.908-3.754 10.5-.502 1.172-4.21 13.38-4.21 13.38h-17.17S8.241 35.96 7.676 35.01c-2.37-3.998-4.419-6.91-4.419-11.26 0-9.141 7.41-16.55 16.55-16.55 9.141 0 16.55 7.41 16.55 16.55v0zM19.808 47.22V35.28M25.778 35.28h-11.94"
										></path>
										<path
											stroke="#000"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeMiterlimit="10"
											strokeWidth="1.696"
											d="M27.968 58.79c0 3.24-3.65 5.867-8.155 5.867-4.504 0-8.155-2.627-8.155-5.867h16.31z"
										></path>
										<path
											stroke="#000"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeMiterlimit="10"
											strokeWidth="1.965"
											d="M11.798 54.98l16.02-3.47"
										></path>
										<path
											stroke="#000"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeMiterlimit="10"
											strokeWidth="2"
											d="M22.008 56.07l5.78-1.18M11.828 51.6l5.78-1.18"
										></path>
									</svg>
								</div>
								<div className="text-xl">Pemanfaatan</div>
								<div className="text-secondary-500 text-xs">
									Perangkat Internet of Things sebagai alat bantu pemantauan
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
											fill="#fff"
											d="M14.124 2a5.51 5.51 0 00-5.51 5.51v23.428h11.02V7.51A5.51 5.51 0 0014.124 2z"
										></path>
										<path
											fill="#EA5A47"
											d="M19.29 46.66c3.575 1.855 6.017 5.584 6.017 9.881 0 6.146-4.994 11.128-11.154 11.128S3 62.687 3 56.541c0-4.313 2.46-8.053 6.056-9.9V27.478s8.996 1.581 10.215-1.035l.019 20.218z"
										></path>
										<path
											fill="#D22F27"
											d="M15.21 28.313c1.716-.152 2.314-.334 4.548-1.258l.024 19.09c0 .566.184 1.12.542 1.56 2.198 2.709 4.311 5.285 4.311 9.22C24.636 63 19.576 67.1 14.06 67.1c0 0 10.244-7.716 1.716-16.817-.36-.385-.559-1.247-.559-1.8l-.006-20.17z"
										></path>
										<path
											stroke="#000"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeMiterlimit="10"
											strokeWidth="2"
											d="M16.574 34.914c-.732.163-2.002.27-3.447.27-2.268 0-4.106-.264-4.106-.59M16.574 42.72c-.732.161-2.002.269-3.447.269-2.268 0-4.106-.265-4.106-.59M16.574 27.11c-.732.162-2.002.269-3.447.269-2.268 0-4.106-.264-4.106-.59M16.574 19.305c-.732.162-2.002.27-3.447.27-2.268 0-4.106-.265-4.106-.591"
										></path>
										<path
											stroke="#000"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeMiterlimit="10"
											strokeWidth="2"
											d="M7.728 48.653c1.312-.977 1.294-2.268 1.294-2.268V7.259a5.153 5.153 0 1110.306 0v39.126s.006 1.304 1.317 2.28a10.287 10.287 0 013.84 8.027c0 5.692-4.614 10.307-10.306 10.307-5.692 0-10.307-4.615-10.307-10.307 0-1.557.345-3.034.963-4.357"
										></path>
										<path
											stroke="#000"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeMiterlimit="10"
											strokeWidth="2"
											d="M16.574 11.5c-.732.162-2.002.27-3.447.27-2.268 0-4.106-.265-4.106-.59"
										></path>
									</svg>
								</div>
								<div className="text-xl">Pemantauan</div>
								<div className="text-secondary-500 text-xs">
									Suhu cuaca tiap satu jam sekali dalam waktu harian
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
										viewBox="0 0 72 72"
									>
										<path
											fill="#92D3F5"
											d="M40 45.636c0 10.597-8.06 19.166-18 19.166-9.941 0-18-8.59-18-19.188 0 0-.197-12.877 14.99-36.168 0 0 2.85-4.833 5.719-.317 15.187 23.29 15.29 36.507 15.29 36.507z"
										></path>
										<path
											fill="#61B2E4"
											d="M22 7.2c11.587 9.338 17.887 36.787 17.887 36.787 0 13.5-7.946 20.814-17.887 20.814 0 0 19.8-16.314 0-57.601z"
										></path>
										<path
											stroke="#000"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeMiterlimit="10"
											strokeWidth="2"
											d="M40 45.636c0 10.597-8.06 19.166-18 19.166-9.941 0-18-8.59-18-19.188 0 0-.197-12.877 14.99-36.168 0 0 2.85-4.833 5.719-.317 15.187 23.29 15.29 36.507 15.29 36.507z"
										></path>
									</svg>
								</div>
								<div className="text-xl">Pemantauan</div>
								<div className="text-secondary-500 text-xs">
									Persentase kelembaban tiap satu jam sekali dalam waktu harian
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
										viewBox="0 0 72 72"
									>
										<path
											fill="#B1CC33"
											d="M33.784 28.295L23.38 53.021l-8.391-3.58-8.95 14.098L9.728 66l6.714-10.853 5.258 2.014 4.028 1.678 10.418-24.66L49 41.386 65.223 8.821l-3.356-2.237-15.105 29.208-12.978-7.497z"
										></path>
										<path
											stroke="#000"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M33.784 28.295L23.38 53.021l-8.391-3.58-8.95 14.098L9.728 66l6.714-10.853 5.258 2.014 4.028 1.678 10.418-24.66L49 41.386 65.223 8.821l-3.356-2.237-15.105 29.208-12.978-7.497z"
										></path>
									</svg>
								</div>
								<div className="text-xl">Visualisasi</div>
								<div className="text-secondary-500 text-xs">
									Data dengan Grafik hasil dari rekapan data observasi
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* featured */}
				<div className=" overflow-x-auto pl[-56px]">
					<table className="pt-20 w-full text-sm text-left text-gray-500 ">
						<caption className="py-5 sm:py-5 sm:pt-10 text-lg font-semibold text-left text-gray-900 bg-white  ">
							<div className="w-fit ">Tujuan dan Manfaat Observasi</div>
							<p className="mt-1 text-sm font-normal text-gray-500 text-justify">
								Melakukan observasi mengenai suhu dan kelembapan pada suatu
								daerah ini didasari pada kebutuhan masyarakat, sehingga
								diperlukan pengamatan iklim untuk diinformasikan pada masyarakat
								luas agar dalam melakukan kegiatan bercocok tanam mereka
								mengetahui masa tanam dan masa panen yang baik.
							</p>
						</caption>
					</table>
				</div>

				<div className="container ">
					<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
										<g clipPath="url(#clip0_107_99)">
											<path
												fill="#B1CC33"
												d="M54.553 70.128s2.713-18.983-13.567-18.983c-4.33 2.887-8.04 4.882-12.21 4.874h.17c-4.17.008-7.88-1.987-12.21-4.873-16.28 0-13.566 18.982-13.566 18.982"
											></path>
											<path
												fill="#5C9E31"
												d="M16.651 51.145l7.874 12.057 4.336-7.183M41.071 51.145l-7.874 12.057-4.336-7.183"
											></path>
											<path
												fill="#9B9B9A"
												d="M65.979 43.554h-7.435v5.758h7.435v-5.758z"
											></path>
											<path
												fill="#A57939"
												d="M64.975 64.426V49.368h-5.427v20.76h5.702v-5.702h-.275z"
											></path>
											<path
												fill="#61B2E4"
												d="M15.861 51.2h-5.817v18.953h5.817V51.2z"
											></path>
											<path
												fill="#61B2E4"
												d="M47.34 68.994l-37.296-.231v1.327h37.295v-1.096z"
											></path>
											<path
												fill="#61B2E4"
												d="M46.344 51.2h-5.817v18.915h5.817V51.2z"
											></path>
											<path
												fill="#F4AA41"
												d="M16.858 12.102V.975l11.918 1.923L40.695.975v11.127"
											></path>
											<path
												fill="#E27022"
												d="M40.526 7.467H16.858v3.606h23.668V7.467z"
											></path>
											<path
												fill="#A57939"
												d="M13.52 23.937a23.872 23.872 0 00-.436 4.561c0 1.076.07 2.131.206 3.159l-.642-.71s-6.312-9.295 3.464-18.845H40.82c9.776 9.55 3.464 18.845 3.464 18.845L36.607 13.82s-2.006 5.163-7.671 4.739c0 0 1.444-6.457-.385-6.457 0 0-7.032 8.435-15.022 11.837"
											></path>
											<path
												fill="#FADCBC"
												d="M36.606 13.82s-2.005 5.163-7.67 4.739c0 0 1.444-6.457-.385-6.457 0 0-7.027 8.428-15.013 11.833-.02.1-.044.2-.062.301-.085.467-.15.943-.206 1.422-.027.226-.062.449-.083.678-.064.71-.103 1.43-.103 2.162 0 .61.028 1.211.073 1.806.014.19.037.375.055.562.936 9.5 7.402 16.86 15.254 16.86 8.13 0 14.77-7.889 15.328-17.874L36.606 13.82z"
											></path>
											<path
												fill="#000"
												d="M36.916 26.652a2.714 2.714 0 01-5.426 0 2.715 2.715 0 012.713-2.713 2.715 2.715 0 012.713 2.713zM26.063 26.652a2.714 2.714 0 01-5.426 0 2.715 2.715 0 012.713-2.713 2.715 2.715 0 012.713 2.713zM28.776 40.222c-1.562 0-3.125-.388-4.677-1.164a1.357 1.357 0 111.214-2.427c2.33 1.166 4.596 1.166 6.926 0a1.357 1.357 0 011.214 2.427c-1.551.776-3.114 1.164-4.677 1.164z"
											></path>
											<path
												stroke="#000"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeMiterlimit="10"
												strokeWidth="2"
												d="M16.651 51.145l7.874 12.057 4.336-7.183M41.071 51.145l-7.874 12.057-4.336-7.183M52.532 22.31s-3.224 20.914 9.611 21.244V22.31M71.754 22.31s3.224 20.914-9.611 21.244V22.31M65.979 43.554h-7.435v5.758h7.435v-5.758zM64.975 68.809V49.368h-5.427v19.427"
											></path>
											<path
												stroke="#000"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeMiterlimit="10"
												strokeWidth="2"
												d="M54.553 68.782s2.713-17.636-13.567-17.636c-4.33 2.886-8.04 4.881-12.21 4.873h.17c-4.17.008-7.88-1.987-12.21-4.873-16.28 0-13.566 17.636-13.566 17.636M10.044 52.437v16.326M47.34 52.437v16.365"
											></path>
											<path
												stroke="#000"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeMiterlimit="10"
												strokeWidth="2"
												d="M17.015 51.492v17.27l23.672-.018v-17.28"
											></path>
											<path
												stroke="#000"
												strokeMiterlimit="10"
												d="M13.52 23.937a23.872 23.872 0 00-.436 4.561c0 1.076.07 2.131.206 3.159l-.642-.71s-6.312-9.295 3.464-18.845H40.82c9.776 9.55 3.464 18.845 3.464 18.845L36.607 13.82s-2.006 5.163-7.671 4.739c0 0 1.444-6.457-.385-6.457 0 0-7.032 8.435-15.022 11.837"
											></path>
											<path
												stroke="#000"
												strokeMiterlimit="10"
												strokeWidth="2"
												d="M13.83 23.937a23.887 23.887 0 00-.436 4.561c0 10.62 6.887 19.228 15.383 19.228 8.099 0 14.736-7.824 15.338-17.755"
											></path>
											<path
												stroke="#000"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeMiterlimit="10"
												strokeWidth="2"
												d="M41.13 12.102c9.777 9.55 3.465 18.845 3.465 18.845L36.916 13.82s-2.005 5.163-7.67 4.739c0 0 1.444-6.457-.385-6.457 0 0-7.032 8.435-15.022 11.837M12.958 30.947s-6.312-9.295 3.464-18.845M16.858 12.102V.975l11.918 1.923L40.695.975v11.127M16.858 7.347h23.837M6.45 12.102h44.183"
											></path>
										</g>
										<defs>
											<clipPath id="clip0_107_99">
												<path fill="#fff" d="M0 0H72V72H0z"></path>
											</clipPath>
										</defs>
									</svg>
								</div>
								<div className="text-xl">Petani</div>
								<div className="text-secondary-500 text-xs">
									Sebagai acuan dalam pemantauan pertumbuhan tanaman
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
											fill="#5C9E31"
											d="M7.346 59.34H3.379V13.658h64.837V59.34h-5.304"
										></path>
										<path
											fill="#F4AA41"
											d="M59.998 68.31s3.112-18.393-12.469-18.393c-4.144 2.752-7.695 4.653-11.686 4.645h.162c-3.99.008-7.54-1.893-11.685-4.645-15.581 0-12.985 18.393-12.985 18.393"
										></path>
										<path
											fill="#E27022"
											d="M43.814 56.69c8.318 2.157 8.483 7.53 9.263 11.62h6.639s2.457-16.45-11.75-17.32c-.399-.025-.81-.037-1.235-.037"
										></path>
										<path
											fill="#E27022"
											d="M47.133 50.563l3.337 11.738-7.297-.312.117 6.233-7.635-2.09.117-.04-.117-.168 11.478-15.36z"
										></path>
										<path
											fill="#D0CFCE"
											d="M47.004 50.368l.13.195-11.479 15.36-11.49-15.36.207-.311c4 2.661 7.466 4.492 11.322 4.544h.156c3.804-.052 7.22-1.83 11.154-4.428z"
										></path>
										<path
											fill="#E27022"
											d="M35.655 65.924l-.13.168.13.04-7.648 2.09.117-6.233-7.297.312 3.337-11.738 11.491 15.36z"
										></path>
										<path
											fill="#A57939"
											d="M24.32 49.917c4.116 2.733 7.647 4.623 11.604 4.64 3.958-.017 7.49-1.907 11.605-4.64 3.381 0 5.88.868 7.723 2.224.914-4.303 1.32-9.902 1.283-17.245-.053-10.622-4.183-20.029-9.414-25.807-1.675-2.006-5.904.577-5.904.577-3.276-5.41-15.38-7.026-20.97 2.736-3.418 5.968-5.988 13.71-6.092 22.494-.083 6.968.755 12.713 2.28 17.319 1.891-1.399 4.443-2.298 7.885-2.298z"
										></path>
										<path
											fill="#FADCBC"
											d="M50.126 28.72c0-2.15 1.084-5.599-.837-6.133-4.466-1.24-6.15-.326-9.784-7.033-6.078 3.56-5.722 6.051-18.01 7.12a22.567 22.567 0 00-.813 6.046c0 10.164 6.591 18.403 14.722 18.403s14.722-8.239 14.722-18.403z"
										></path>
										<path
											fill="#000"
											d="M22.206 12.355A19.822 19.822 0 0020.4 14.95H4.677v41.927h2.675c.714 0 1.298.571 1.298 1.298 0 .714-.584 1.298-1.298 1.298H3.378a1.302 1.302 0 01-1.298-1.298V13.653c0-.714.584-1.298 1.298-1.298h18.828zM69.52 13.653v44.523c0 .714-.584 1.298-1.298 1.298h-3.363a1.302 1.302 0 01-1.298-1.298c0-.727.584-1.298 1.298-1.298h2.065V14.95H50.823c-.493-1-1.039-1.87-1.623-2.596h19.022c.714 0 1.298.584 1.298 1.298zM43.815 26.947a2.598 2.598 0 01-5.194 0 2.599 2.599 0 012.597-2.597 2.599 2.599 0 012.597 2.597zM33.427 26.947a2.598 2.598 0 01-5.194 0 2.599 2.599 0 012.597-2.597 2.599 2.599 0 012.597 2.597zM36.024 39.934c-1.496 0-2.991-.371-4.476-1.114a1.298 1.298 0 111.161-2.323c2.23 1.116 4.399 1.116 6.63 0a1.299 1.299 0 011.16 2.323c-1.484.742-2.98 1.114-4.475 1.114z"
										></path>
										<path
											fill="#000"
											d="M36.024 48.415c-8.834 0-16.02-8.837-16.02-19.702 0-2.186.288-4.335.856-6.386l2.503.695a21.246 21.246 0 00-.763 5.691c0 9.432 6.022 17.105 13.424 17.105 7.402 0 13.423-7.673 13.423-17.105 0-1.39-.132-2.775-.392-4.117a20.962 20.962 0 00-.371-1.575l2.503-.691c.16.579.3 1.17.417 1.772.292 1.504.44 3.055.44 4.611 0 10.864-7.187 19.702-16.02 19.702z"
										></path>
										<path
											fill="#000"
											d="M43.065 33.682H40.46a4.962 4.962 0 01-4.52-2.925 4.962 4.962 0 01-4.521 2.925h-2.606a4.96 4.96 0 01-4.955-4.954V27.12h-2.373a1.298 1.298 0 110-2.597h3.671c.718 0 1.299.581 1.299 1.298v2.906a2.36 2.36 0 002.358 2.358h2.606a2.36 2.36 0 002.358-2.358v-1.434c0-.717.581-1.298 1.299-1.298h1.727c.718 0 1.298.581 1.298 1.298v1.434a2.36 2.36 0 002.359 2.358h2.605a2.36 2.36 0 002.359-2.358v-2.906c0-.717.58-1.298 1.298-1.298h3.84a1.298 1.298 0 110 2.597H48.02v1.607a4.96 4.96 0 01-4.956 4.954zM49.933 23.974c-.05 0-.1-.002-.152-.009-6.345-.74-9.4-4.232-10.694-6.352-2.478 1.932-8.32 5.697-16.868 6.358a1.29 1.29 0 01-1.395-1.195 1.298 1.298 0 011.194-1.395c10.413-.804 16.517-6.694 16.577-6.754a1.298 1.298 0 012.14.509c.075.213 1.982 5.391 9.348 6.25a1.298 1.298 0 01-.15 2.588z"
										></path>
										<path
											fill="#000"
											d="M56.341 47.256a1.296 1.296 0 01-1.441 1.156 1.31 1.31 0 01-1.143-1.442c.818-7.375.922-15.243.286-20.54-.545-4.48-1.7-8.518-3.22-11.479-.493-1-1.039-1.87-1.623-2.597a10.1 10.1 0 00-1-1.077c-2.804-2.558-6.284-.52-6.31-.494a1.29 1.29 0 01-1.688-.311c-.234-.286-5.895-7.116-13.971-1.805-1.597 1.039-2.922 2.311-4.025 3.687a19.827 19.827 0 00-1.805 2.597c-3.233 5.454-3.753 11.348-3.766 11.426-.012.13-.986 9.35.766 20.542a1.302 1.302 0 01-1.09 1.48c-.065.013-.13.013-.195.013a1.298 1.298 0 01-1.285-1.091c-1.805-11.543-.818-20.8-.78-21.19.027-.312.481-5.687 3.35-11.18.442-.87.961-1.74 1.546-2.597 1.467-2.168 3.376-4.232 5.855-5.856 8.245-5.414 14.62-.454 16.698 1.585 2.078-.857 5.57-1.338 8.44 1.272.87.78 1.675 1.792 2.415 3 .48.778.935 1.648 1.364 2.596 1.363 3.078 2.389 6.92 2.895 11.167.675 5.48.558 13.581-.273 21.138z"
										></path>
										<path
											stroke="#000"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeMiterlimit="10"
											strokeWidth="2"
											d="M11.18 67.001s-2.597-16.88 12.984-16.88c.065.052.143.091.208.13 4 2.662 7.466 4.493 11.322 4.545h.156c3.805-.052 7.22-1.83 11.154-4.428.117-.078.246-.156.376-.246 6.713 0 10.05 3.142 11.673 6.712"
										></path>
										<path
											stroke="#000"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeMiterlimit="10"
											strokeWidth="2"
											d="M35.656 65.923l.117.17-.117.038-7.648 2.09.117-6.232-7.297.312 3.337-11.738 11.49 15.36z"
										></path>
										<path
											stroke="#000"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeMiterlimit="10"
											strokeWidth="2"
											d="M35.656 65.923l-.13.17.13.038 7.634 2.09-.117-6.232 7.297.312-3.336-11.738-11.478 15.36z"
										></path>
										<path
											fill="#000"
											d="M58.319 68.027a1.093 1.093 0 01-1.084-1.24l4.378-34.412-1.835 34.632c-.039.574-.884 1.02-1.46 1.02z"
										></path>
										<path
											fill="#000"
											d="M58.32 69a2.068 2.068 0 01-2.05-2.342l4.377-34.406a.96.96 0 011.054-.847.974.974 0 01.885 1.022L60.75 67.06C60.666 68.313 59.26 69 58.32 69zm.921-10.26l-1.04 8.17.118.142c.146 0 .392-.113.492-.203l.43-8.108z"
										></path>
									</svg>
								</div>
								<div className="text-xl">Guru</div>
								<div className="text-secondary-500 text-xs">
									Sebagai pembelajaran dan alat peraga pada saat praktikum
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
										viewBox="0 0 72 72"
									>
										<path
											fill="#3F3F3F"
											d="M55.976 69.612s2.709-18.964-13.546-18.964c-4.324 2.882-8.028 4.874-12.191 4.865h.169c-4.164.009-7.868-1.983-12.191-4.865-16.255 0-13.546 18.964-13.546 18.964"
										></path>
										<path
											fill="#9B9B9A"
											d="M42.794 6.422l-12.61 1.233-12.287-1.192-7.369-.718L29.33 2.318l20.495 3.427-7.03.677z"
										></path>
										<path
											fill="#3F3F3F"
											d="M42.795 6.422v10.796s-9.103-.352-12.449 3.576C27 16.866 17.898 17.218 17.898 17.218V6.463l12.286 1.192 12.61-1.233z"
										></path>
										<path
											fill="#fff"
											d="M30.383 59.556h-.147c-4.331-.043-8.108-1.984-12.77-5.094a1.354 1.354 0 111.502-2.254c4.271 2.848 7.667 4.62 11.355 4.64 3.687-.02 7.083-1.792 11.355-4.64a1.354 1.354 0 111.503 2.254c-4.664 3.11-8.44 5.05-12.77 5.093v.002h-.028z"
										></path>
										<path
											fill="#A57939"
											d="M17.662 17.18a21.366 21.366 0 00-2.15 5.419l-.038.094s5.392 1.062 10.784-4.17l.048-.139c-3.886-1.35-8.578-1.166-8.578-1.166M42.633 17.218s-4.616-.273-8.568 1.225l.038.08c5.392 5.232 10.783 4.17 10.783 4.17l-.013.003a21.38 21.38 0 00-2.175-5.515"
										></path>
										<path
											fill="#FADCBC"
											d="M44.705 22.72c-.954.127-5.772.49-10.602-4.198l-.037-.079.03-.01c-1.478.529-2.83 1.282-3.75 2.361-2.803-3.29-9.623-3.576-11.767-3.583 1.527.015 4.846.173 7.727 1.173l-.048.138c-4.83 4.688-9.648 4.325-10.602 4.198a23.37 23.37 0 00-.835 6.221c0 10.604 6.877 19.2 15.36 19.2 8.482 0 15.359-8.596 15.359-19.2 0-2.18-.297-4.27-.835-6.221z"
										></path>
										<path
											fill="#000"
											d="M38.474 26.464a2.71 2.71 0 01-5.419 0 2.711 2.711 0 012.71-2.709 2.711 2.711 0 012.709 2.71zM27.637 26.464a2.71 2.71 0 01-5.418 0 2.711 2.711 0 012.71-2.709 2.711 2.711 0 012.708 2.71zM30.346 40.014c-1.56 0-3.12-.388-4.67-1.163a1.354 1.354 0 111.212-2.423c2.327 1.164 4.59 1.164 6.916 0a1.355 1.355 0 011.212 2.424c-1.55.774-3.11 1.162-4.67 1.162z"
										></path>
										<path
											fill="#000"
											d="M44.147 16.736a19.288 19.288 0 00-2.709-3.779v2.912c-.298 0-.65.014-1.03.041a17.565 17.565 0 011.667 2.655c1.436 2.804 2.276 6.15 2.276 9.74 0 9.847-6.286 17.853-14.007 17.853-7.72 0-14.006-8.006-14.006-17.853 0-3.604.84-6.95 2.29-9.753a18.497 18.497 0 011.652-2.642c-.38-.027-.732-.04-1.03-.04v-2.913a19.87 19.87 0 00-2.709 3.78c-1.842 3.291-2.912 7.274-2.912 11.568 0 11.337 7.504 20.562 16.715 20.562 9.225 0 16.716-9.224 16.716-20.562 0-4.294-1.07-8.277-2.913-11.569z"
										></path>
										<path
											stroke="#000"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeMiterlimit="10"
											strokeWidth="2"
											d="M10.529 5.745l7.369.718 12.286 1.192 12.61-1.233 7.031-.677"
										></path>
										<path
											fill="#000"
											d="M31.428 21.613c-.027.014-.04.04-.054.054a1.23 1.23 0 01-.637.42.362.362 0 01-.162.04c-.082.028-.15.028-.23.028-.082 0-.163 0-.231-.027a.362.362 0 01-.163-.04 1.215 1.215 0 01-.487-.258 1.02 1.02 0 01-.203-.217c-2.235-2.52-7.925-3.048-10.634-3.061-.257 0-.488.013-.677.013a1.325 1.325 0 01-.99-.365c-.27-.258-.419-.61-.419-.976V5.751c0-.759.61-1.355 1.355-1.355a1.35 1.35 0 011.354 1.355V15.87c.298 0 .65.013 1.03.04 2.763.163 7.26.772 10.064 3.035.38.284.718.61 1.03.975.42.487.433 1.192.054 1.693z"
										></path>
										<path
											fill="#000"
											d="M44.148 5.75v11.474c0 .366-.15.718-.407.976-.27.243-.596.379-1.002.379-.19-.014-.42-.014-.664-.014-2.723 0-8.426.515-10.647 3.048-.027.014-.04.04-.054.054a1.23 1.23 0 01-.637.42.362.362 0 01-.163.04c-.08.028-.149.028-.23.028-.081 0-.162 0-.23-.027a.362.362 0 01-.163-.04 1.216 1.216 0 01-.487-.258 1.02 1.02 0 01-.203-.217 1.347 1.347 0 01.054-1.693c.311-.366.65-.69 1.03-.975 2.803-2.262 7.3-2.872 10.064-3.035.379-.027.731-.04 1.03-.04V5.75c0-.758.609-1.354 1.354-1.354a1.35 1.35 0 011.355 1.355z"
										></path>
										<path
											stroke="#000"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeMiterlimit="10"
											strokeWidth="2"
											d="M49.825 5.745L29.33 2.318 10.53 5.745"
										></path>
										<path
											fill="#000"
											d="M10.53 18.404a1.354 1.354 0 01-1.354-1.355v-11a1.354 1.354 0 112.709 0v11c0 .748-.606 1.355-1.355 1.355z"
										></path>
										<path
											fill="#000"
											d="M7.784 21.898a1.353 1.353 0 01-1.064-2.191l2.745-3.495a1.355 1.355 0 012.13 1.674L8.85 21.38c-.267.34-.664.518-1.066.518z"
										></path>
										<path
											fill="#000"
											d="M10.53 23.958a1.354 1.354 0 01-1.354-1.354v-5.555a1.354 1.354 0 112.709 0v5.555c0 .748-.606 1.354-1.355 1.354zM43.827 24.136c-2.159 0-6.35-.611-10.502-4.642a1.354 1.354 0 111.886-1.944c4.77 4.63 9.395 3.85 9.588 3.812a1.36 1.36 0 011.579 1.079 1.35 1.35 0 01-1.064 1.58c-.071.015-.614.115-1.487.115zM16.865 24.136c-.875 0-1.416-.1-1.487-.114a1.355 1.355 0 01.516-2.66c.218.042 4.83.806 9.586-3.812a1.355 1.355 0 011.887 1.944c-4.153 4.031-8.343 4.642-10.502 4.642zM55.836 69.61a1.355 1.355 0 01-1.341-1.557c.011-.078 1.12-7.777-2.884-12.432-2-2.323-4.998-3.539-8.922-3.615-4.483 2.96-8.165 4.803-12.361 4.861l-.088.001h-.207c-4.198-.06-7.878-1.902-12.361-4.862-3.924.076-6.923 1.292-8.921 3.615-4.004 4.655-2.896 12.354-2.884 12.432a1.355 1.355 0 01-1.135 1.542 1.36 1.36 0 01-1.542-1.132c-.056-.365-1.318-8.985 3.496-14.596 2.604-3.036 6.435-4.575 11.388-4.575.267 0 .53.08.751.228 4.272 2.848 7.668 4.62 11.356 4.64 3.686-.02 7.082-1.792 11.355-4.64.222-.148.484-.228.751-.228 4.953 0 8.784 1.539 11.389 4.575 4.813 5.611 3.551 14.23 3.496 14.596a1.353 1.353 0 01-1.336 1.147z"
										></path>
									</svg>
								</div>
								<div className="text-xl">Peserta Didik</div>
								<div className="text-secondary-500 text-xs">
									Sebagai sarana edukasi dan menambah wawasan ilmu
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
										viewBox="0 0 72 72"
									>
										<path
											fill="#FCEA2B"
											d="M42.344 5.645h-27.34c.095.438.2.946.324 1.535.625 3.007 1.83 8.908 4.143 20.482.148.74.315 1.447.49 2.125.054.203.111.394.167.593a28.8 28.8 0 00.625 1.994c.16.45.328.883.504 1.302l.193.46c.24.543.495 1.065.765 1.555l.014.025c.288.524.605 1.032.947 1.521l.033.045c.304.429.63.841.978 1.235l.169.182c.31.34.638.662.982.967.055.048.11.1.167.147a14.132 14.132 0 009.55 3.155 17.974 17.974 0 003.853-.405 118.44 118.44 0 003.436-36.918z"
										></path>
										<path
											fill="#F1B31C"
											d="M42.344 5.645c.8 12.409-.36 24.866-3.434 36.914 6.187-1.35 9.96-6.22 11.73-15.066 1.915-9.574 3.3-16.4 4.12-20.288.131-.6.236-1.116.335-1.56H42.344z"
										></path>
										<path
											fill="#FCEA2B"
											d="M28.98 56.264h-5.088v9.422h14.406v-9.422h-9.317z"
										></path>
										<path
											fill="#F1B31C"
											d="M45.365 56.264h-7.067v9.422h7.067v-9.422zM35.05 26.352a5.259 5.259 0 100-10.518 5.259 5.259 0 000 10.518z"
										></path>
										<path
											stroke="#000"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M56.742 4.332s0-.683-4.82 23.42C49.834 38.193 44.69 44.28 35.05 44.28s-14.784-5.917-16.872-16.36c-4.821-24.102-4.821-23.59-4.821-23.59h43.385zM17.968 30.162s.104-.343-7.127-5.165c-3.324-2.212-7.177-5.127-7.177-9.128 0-4 3.286-6.718 7.282-6.718h1.989M51.713 30.539s.103-.343 7.334-5.164c3.324-2.213 7.285-5.128 7.285-9.128a6.766 6.766 0 00-7.18-6.718h-2.831M46.68 54.948H22.577V67H46.68V54.948z"
										></path>
										<path
											stroke="#000"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M35.05 27.666a6.574 6.574 0 100-13.147 6.574 6.574 0 000 13.147zM35.05 54.948V44.28"
										></path>
									</svg>
								</div>
								<div className="text-xl">Target</div>
								<div className="text-secondary-500 text-xs">
									mengetahui waktu masa tanam yang tepat dan hasil yang baik.
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
