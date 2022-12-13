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

export default function About() {
	return (
		<>
			<Head>
				<title>Profile Observer</title>
			</Head>

			{/* mobile nav-bar */}
			<div className="flex fixed sm:hidden bg-white px-2 bottom-[-0.7px] w-full h-[75px] shadow-[0_0_3px_0_rgba(0,0,0,0.20)] z-[10]">
				<Link href="/" className="navbar-content cursor-pointer">
					<i className="text-[30px] bx bx-home" />
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
				<Link
					href="/about"
					className="navbar-content cursor-pointer navbar-active"
				>
					<i className="text-[30px] bx bxs-group bx-tada" />
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
									className="relative flex flex-row items-center h-11 focus:outline-none rounded-r-xl  text-gray-600 hover:text-primary-500 hover:bg-primary-100 border-l-4 border-transparent"
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
									className="relative flex flex-row items-center h-11 focus:outline-none rounded-r-xl bg-primary-100 text-primary-500 hover:text-primary-500 hover:bg-primary-100 border-l-4 border-transparent"
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
							Kelompok Observasi
							<p className="mt-1 text-sm font-normal text-gray-500 ">
								Kelompok 1 [ Pembelajaran Berbasis Virtual ]
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
										<g clipPath="url(#clip0_108_164)">
											<path
												fill="#FCEA2B"
												d="M7.11 67v-6.12h13.14v-42.3H9.81v-4.77c2.64-.48 4.92-1.05 6.84-1.71 1.98-.72 3.75-1.56 5.31-2.52h5.67v51.3h11.88V67H7.11z"
											></path>
											<path
												fill="#000"
												d="M7.11 67h-1.5v1.5h1.5V67zm0-6.12v-1.5h-1.5v1.5h1.5zm13.14 0v1.5h1.5v-1.5h-1.5zm0-42.3h1.5v-1.5h-1.5v1.5zm-10.44 0h-1.5v1.5h1.5v-1.5zm0-4.77l-.268-1.476-1.232.224v1.252h1.5zm6.84-1.71l.488 1.418.012-.004.013-.004-.513-1.41zm5.31-2.52v-1.5h-.425l-.361.223.786 1.277zm5.67 0h1.5v-1.5h-1.5v1.5zm0 51.3h-1.5v1.5h1.5v-1.5zm11.88 0h1.5v-1.5h-1.5v1.5zm0 6.12v1.5h1.5V67h-1.5zm-30.9 0v-6.12h-3V67h3zm-1.5-4.62h13.14v-3H7.11v3zm14.64-1.5v-42.3h-3v42.3h3zm-1.5-43.8H9.81v3h10.44v-3zm-8.94 1.5v-4.77h-3v4.77h3zm-1.232-3.294c2.693-.49 5.05-1.076 7.06-1.768l-.976-2.837c-1.83.63-4.033 1.183-6.62 1.653l.536 2.952zm7.085-1.776c2.061-.75 3.925-1.632 5.583-2.652l-1.572-2.555c-1.462.9-3.138 1.697-5.037 2.387l1.026 2.82zm4.797-2.43h5.67v-3h-5.67v3zm4.17-1.5v51.3h3V9.58h-3zm1.5 52.8h11.88v-3H27.63v3zm10.38-1.5V67h3v-6.12h-3zm1.5 4.62H7.11v3h32.4v-3z"
											></path>
										</g>
										<defs>
											<clipPath id="clip0_108_164">
												<path fill="#fff" d="M0 0H75V75H0z"></path>
											</clipPath>
										</defs>
									</svg>
								</div>
								<div className="text-xl">Nama</div>
								<div className="text-secondary-500 text-xs">
									Alfiandi Hafidz Firmansyah
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
										<g clipPath="url(#clip0_108_167)">
											<path
												fill="#EA5A47"
												d="M6.6 67v-4.41c5.76-5.76 10.65-10.8 14.67-15.12 4.02-4.38 7.08-8.31 9.18-11.79 2.1-3.54 3.15-6.84 3.15-9.9 0-3.3-.9-6-2.7-8.1-1.8-2.1-4.53-3.15-8.19-3.15-2.4 0-4.62.69-6.66 2.07-2.04 1.32-3.9 2.94-5.58 4.86l-4.23-4.23c2.4-2.64 4.95-4.74 7.65-6.3 2.76-1.62 6-2.43 9.72-2.43 5.34 0 9.54 1.56 12.6 4.68 3.06 3.06 4.59 7.14 4.59 12.24 0 3.6-1.02 7.26-3.06 10.98-1.98 3.66-4.74 7.53-8.28 11.61-3.48 4.02-7.5 8.4-12.06 13.14 1.56-.12 3.18-.24 4.86-.36 1.68-.12 3.27-.18 4.77-.18h16.65V67H6.6z"
											></path>
											<path
												fill="#000"
												d="M6.6 67H5.1v1.5h1.5V67zm0-4.41l-1.06-1.06-.44.439v.621h1.5zm14.67-15.12l1.098 1.022.007-.008-1.105-1.014zm9.18-11.79l1.284.775.006-.01-1.29-.765zm.45-18l1.139-.976-1.139.976zM16.05 16.6l.815 1.26.013-.009.012-.009-.84-1.242zm-5.58 4.86l-1.06 1.06 1.133 1.134 1.056-1.206-1.129-.988zm-4.23-4.23l-1.11-1.009-.962 1.058 1.011 1.012L6.24 17.23zm7.65-6.3l.75 1.299.01-.005-.76-1.294zm22.32 2.25l-1.07 1.05.004.005.005.006 1.061-1.061zm1.53 23.22l-1.315-.721-.004.007 1.319.714zm-8.28 11.61l-1.133-.983-.001.001 1.134.982zM17.4 61.15l-1.081-1.04-2.73 2.838 3.926-.302-.115-1.496zm4.86-.36l-.107-1.496.107 1.496zm21.42-.18h1.5v-1.5h-1.5v1.5zm0 6.39v1.5h1.5V67h-1.5zM8.1 67v-4.41h-3V67h3zm-.44-3.35c5.769-5.768 10.672-10.821 14.708-15.158l-2.196-2.044c-4.004 4.303-8.881 9.33-14.633 15.081l2.122 2.122zm14.715-15.166c4.06-4.423 7.19-8.434 9.36-12.029l-2.57-1.55c-2.03 3.365-5.02 7.214-9 11.55l2.21 2.03zm9.365-12.039c2.192-3.694 3.36-7.258 3.36-10.665h-3c0 2.713-.932 5.75-2.94 9.135l2.58 1.53zM35.1 25.78c0-3.586-.985-6.654-3.061-9.076l-2.278 1.952c1.524 1.778 2.339 4.11 2.339 7.124h3zm-3.061-9.076c-2.17-2.532-5.382-3.674-9.329-3.674v3c3.372 0 5.621.958 7.051 2.626l2.278-1.952zM22.71 13.03c-2.708 0-5.22.784-7.5 2.328l1.68 2.484c1.8-1.216 3.728-1.812 5.82-1.812v-3zm-7.475 2.31c-2.162 1.4-4.127 3.113-5.894 5.132l2.258 1.976c1.593-1.82 3.348-3.348 5.266-4.589l-1.63-2.518zm-3.704 5.06L7.3 16.17l-2.122 2.12 4.23 4.23 2.122-2.12zM7.35 18.238c2.31-2.542 4.742-4.538 7.29-6.01l-1.5-2.598c-2.852 1.648-5.52 3.852-8.01 6.59l2.22 2.018zm7.3-6.015C17.143 10.759 20.112 10 23.61 10V7c-3.943 0-7.454.86-10.48 2.636l1.52 2.588zM23.61 10c5.033 0 8.812 1.46 11.53 4.23l2.14-2.1C33.879 8.66 29.258 7 23.61 7v3zm11.54 4.24c2.728 2.73 4.15 6.401 4.15 11.18h3c0-5.421-1.638-9.91-5.03-13.3l-2.12 2.12zm4.15 11.18c0 3.306-.935 6.72-2.875 10.259l2.63 1.442c2.14-3.901 3.245-7.807 3.245-11.701h-3zm-2.88 10.266c-1.915 3.54-4.605 7.32-8.093 11.341l2.266 1.966c3.592-4.14 6.421-8.1 8.466-11.88l-2.638-1.427zm-8.094 11.342c-3.46 3.996-7.461 8.357-12.007 13.082l2.162 2.08c4.574-4.755 8.612-9.154 12.113-13.198l-2.268-1.964zM17.515 62.646c1.557-.12 3.174-.24 4.852-.36l-.214-2.992c-1.682.12-3.305.24-4.868.36l.23 2.992zm4.852-.36a65.583 65.583 0 014.663-.176v-3c-1.54 0-3.166.062-4.877.184l.214 2.992zm4.663-.176h16.65v-3H27.03v3zm15.15-1.5V67h3v-6.39h-3zm1.5 4.89H6.6v3h37.08v-3z"
											></path>
										</g>
										<defs>
											<clipPath id="clip0_108_167">
												<path fill="#fff" d="M0 0H75V75H0z"></path>
											</clipPath>
										</defs>
									</svg>
								</div>
								<div className="text-xl">Nama</div>
								<div className="text-secondary-500 text-xs">
									Berty Zulfa Nur Azizah
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
										viewBox="0 0 75 75"
									>
										<g clipPath="url(#clip0_108_169)">
											<path
												fill="#92D3F5"
												d="M24.24 68.08c-4.56 0-8.37-.81-11.43-2.43-3.06-1.68-5.55-3.57-7.47-5.67l3.78-4.86c1.74 1.8 3.78 3.39 6.12 4.77 2.34 1.38 5.19 2.07 8.55 2.07 3.48 0 6.33-.96 8.55-2.88 2.22-1.92 3.33-4.47 3.33-7.65 0-2.28-.6-4.26-1.8-5.94-1.14-1.74-3.06-3.09-5.76-4.05-2.64-.96-6.24-1.44-10.8-1.44v-5.67c4.08 0 7.29-.48 9.63-1.44 2.4-.96 4.11-2.25 5.13-3.87 1.02-1.62 1.53-3.42 1.53-5.4 0-2.82-.9-5.04-2.7-6.66-1.74-1.62-4.14-2.43-7.2-2.43-2.4 0-4.62.54-6.66 1.62-1.98 1.08-3.84 2.49-5.58 4.23L7.5 15.7c2.22-2.1 4.68-3.81 7.38-5.13 2.7-1.38 5.73-2.07 9.09-2.07 4.98 0 9.09 1.29 12.33 3.87 3.24 2.52 4.86 6.09 4.86 10.71 0 3.48-.96 6.33-2.88 8.55-1.92 2.22-4.44 3.93-7.56 5.13v.36c3.48.78 6.42 2.43 8.82 4.95 2.4 2.46 3.6 5.67 3.6 9.63 0 3.36-.84 6.27-2.52 8.73-1.68 2.46-3.96 4.35-6.84 5.67-2.82 1.32-6 1.98-9.54 1.98z"
											></path>
											<path
												fill="#000"
												d="M12.81 65.65l-.722 1.315.01.005.01.006.702-1.326zm-7.47-5.67l-1.184-.92-.777.998.854.934L5.34 59.98zm3.78-4.86l1.079-1.042-1.202-1.243-1.061 1.364 1.184.921zm23.22 3.96l-.981-1.134.981 1.134zm1.53-13.59l-1.255.822.017.025.017.025 1.221-.872zm-5.76-4.05l-.513 1.41.01.003.503-1.413zM17.31 40h-1.5v1.5h1.5V40zm0-5.67v-1.5h-1.5v1.5h1.5zm9.63-1.44l-.557-1.393-.012.005.569 1.388zm3.96-15.93l-1.022 1.098.01.009.009.008L30.9 16.96zm-13.86-.81l-.702-1.326-.008.005-.008.004.718 1.317zm-5.58 4.23l-1.145.969 1.053 1.244 1.153-1.152-1.061-1.061zM7.5 15.7l-1.03-1.09-1.032.976.917 1.083L7.5 15.7zm7.38-5.13l.659 1.348.012-.006.012-.006-.683-1.336zm21.42 1.8l-.934 1.173.006.006.007.005.921-1.184zm-5.58 24.39l-.538-1.4-.962.37v1.03h1.5zm0 .36h-1.5v1.201l1.172.263.328-1.464zm8.82 4.95l-1.086 1.035.006.006.006.007 1.074-1.048zm1.08 18.36l-1.239-.846 1.239.846zm-6.84 5.67l-.625-1.364-.01.005.635 1.359zm-9.54.48c-4.39 0-7.942-.78-10.728-2.256l-1.404 2.652c3.334 1.765 7.402 2.604 12.132 2.604v-3zm-10.708-2.245c-2.947-1.618-5.298-3.412-7.085-5.367l-2.214 2.024c2.053 2.245 4.682 4.231 7.855 5.973l1.444-2.63zm-7.008-3.434l3.78-4.86-2.368-1.842-3.78 4.86 2.368 1.842zm1.518-4.739c1.84 1.905 3.99 3.577 6.436 5.02l1.524-2.584c-2.234-1.317-4.165-2.825-5.803-4.52l-2.157 2.084zm6.436 5.02c2.62 1.545 5.747 2.278 9.312 2.278v-3c-3.155 0-5.728-.647-7.788-1.862l-1.524 2.584zm9.312 2.278c3.77 0 6.99-1.047 9.531-3.245l-1.962-2.27c-1.899 1.642-4.379 2.515-7.569 2.515v3zm9.531-3.245c2.58-2.231 3.849-5.21 3.849-8.785h-3c0 2.785-.95 4.906-2.811 6.516l1.962 2.269zm3.849-8.785c0-2.558-.679-4.851-2.08-6.812l-2.44 1.744c.999 1.399 1.52 3.066 1.52 5.068h3zm-2.045-6.762c-1.377-2.1-3.618-3.612-6.512-4.641l-1.005 2.826c2.505.891 4.104 2.08 5.007 3.459l2.51-1.644zm-6.502-4.638c-2.875-1.045-6.673-1.53-11.313-1.53v3c4.48 0 7.882.475 10.287 1.35l1.026-2.82zM18.81 40v-5.67h-3V40h3zm-1.5-4.17c4.17 0 7.602-.487 10.2-1.552l-1.14-2.776c-2.082.855-5.07 1.328-9.06 1.328v3zm10.187-1.547c2.593-1.037 4.603-2.496 5.842-4.464l-2.538-1.598c-.801 1.272-2.21 2.393-4.418 3.276l1.114 2.786zm5.842-4.464c1.176-1.868 1.761-3.946 1.761-6.199h-3c0 1.707-.435 3.229-1.3 4.6l2.54 1.6zM35.1 23.62c0-3.168-1.028-5.823-3.197-7.775l-2.006 2.23c1.43 1.288 2.203 3.073 2.203 5.545h3zm-3.178-7.758c-2.09-1.946-4.895-2.832-8.222-2.832v3c2.793 0 4.788.734 6.178 2.028l2.044-2.196zM23.7 13.03c-2.635 0-5.097.595-7.362 1.794l1.404 2.652c1.815-.961 3.793-1.446 5.958-1.446v-3zm-7.378 1.803c-2.117 1.155-4.09 2.654-5.923 4.486l2.122 2.122c1.647-1.648 3.394-2.969 5.237-3.974l-1.436-2.634zm-3.717 4.578l-3.96-4.68-2.29 1.938 3.96 4.68 2.29-1.938zM8.531 16.79a28.116 28.116 0 017.008-4.872L14.22 9.222A31.118 31.118 0 006.47 14.61l2.062 2.18zm7.032-4.884C18.029 10.645 20.82 10 23.97 10V7c-3.571 0-6.84.735-9.773 2.234l1.366 2.672zM23.97 10c4.712 0 8.472 1.215 11.396 3.543l1.868-2.346C33.678 8.365 29.218 7 23.97 7v3zm11.41 3.554c2.825 2.197 4.28 5.303 4.28 9.526h3c0-5.017-1.784-9.051-5.44-11.894l-1.84 2.368zm4.28 9.526c0 3.19-.872 5.67-2.514 7.569l2.268 1.962c2.198-2.541 3.246-5.761 3.246-9.531h-3zm-2.514 7.569c-1.738 2.009-4.042 3.587-6.965 4.711l1.078 2.8c3.317-1.276 6.053-3.118 8.155-5.549l-2.269-1.962zM29.22 36.76v.36h3v-.36h-3zm1.172 1.824c3.198.716 5.872 2.221 8.062 4.52l2.172-2.069c-2.61-2.74-5.816-4.535-9.578-5.379l-.656 2.928zm8.074 4.533c2.085 2.137 3.174 4.95 3.174 8.583h3c0-4.287-1.311-7.894-4.026-10.678l-2.148 2.096zM41.64 51.7c0 3.098-.77 5.704-2.259 7.884l2.478 1.692c1.871-2.74 2.781-5.954 2.781-9.576h-3zm-2.259 7.884c-1.516 2.22-3.577 3.938-6.226 5.152l1.25 2.728c3.111-1.427 5.61-3.489 7.454-6.188l-2.478-1.692zm-6.237 5.157c-2.595 1.215-5.554 1.839-8.904 1.839v3c3.73 0 7.131-.696 10.176-2.121l-1.272-2.718z"
											></path>
										</g>
										<defs>
											<clipPath id="clip0_108_169">
												<path fill="#fff" d="M0 0H75V75H0z"></path>
											</clipPath>
										</defs>
									</svg>
								</div>
								<div className="text-xl">Nama</div>
								<div className="text-secondary-500 text-xs">
									{`Chalimatus Sa'diyah`}
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
											fill="#FADCBC"
											d="M19.107 17.82a4.295 4.295 0 10-6.768 5.168l14.03 18.37 3.27 4.12-9.6-12.568a4.295 4.295 0 10-6.767 5.169l9.6 12.568 7.628 9.609c6.65 7.63 17.656 7.214 25.286.566a23.863 23.863 0 007.926-14.976c.469-5.149.981-18.613.981-18.613-.222-3.164-3.814-5.503-4.277-3.87l-5.953 11.87-4.094-5.136 4.094 5.137-4.094-5.137-16.38-20.934a4.295 4.295 0 10-6.768 5.169l5.169 6.767 7.814 10.316L23.88 9.907a4.295 4.295 0 10-6.768 5.17l17.848 23.13"
										></path>
										<path
											stroke="#000"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M19.106 17.82a4.295 4.295 0 10-6.767 5.168l14.029 18.37 3.27 4.12L20.04 32.91a4.295 4.295 0 10-6.767 5.169l9.599 12.568 7.628 9.609c6.65 7.63 17.657 7.214 25.286.566a23.863 23.863 0 007.926-14.976c.47-5.149.982-18.613.982-18.613-.222-3.164-3.814-5.503-4.277-3.87l-5.953 11.87-4.095-5.136 4.094 5.137-4.094-5.137-16.38-20.934a4.295 4.295 0 10-6.767 5.169l5.168 6.767 7.814 10.316L23.88 9.907a4.295 4.295 0 10-6.767 5.17l17.848 23.13"
										></path>
										<path
											stroke="#000"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeMiterlimit="10"
											strokeWidth="2"
											d="M10.61 46.566c0 3.122 2.125 5.648 4.75 5.648M5 46.037c0 6.808 4.634 12.316 10.36 12.316M51.47 20.249c0-3.122-2.125-5.648-4.751-5.648M57.08 20.778c0-6.807-4.634-12.316-10.361-12.316"
										></path>
									</svg>
								</div>
								<div className="text-xl">Sekian</div>
								<div className="text-secondary-500 text-xs">
									Terima kasih, semoga bermanfaat
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
