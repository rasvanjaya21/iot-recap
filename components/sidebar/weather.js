export default function WeatherCard(){
    return (
			<div className="ml-11 w-36 border b-gray-400 rounded-xl flex flex-col justify-center items-center text-center p-2 bg-white">
				<div className="text-md font-bold flex flex-col text-gray-900 mt-2">
					<span className="text-xs text-left -ml-4">📍Lowokwaru, Malang</span>
					<span className="font-light text-left pb-2 text-[9px]">
						11 - 12 Desember 2022
					</span>
				</div>
				<div className="w-20 h-20 flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-20"
						viewBox="0 0 81 73"
					>
						<g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
							<g fillRule="nonzero" transform="translate(-174 -308)">
								<g transform="translate(95 222)">
									<g transform="translate(79 86)">
										<path
											fill="#FECA57"
											d="M35.288 26.431a2.283 2.283 0 01-4.218-1.746 19.025 19.025 0 0117.582-11.75c10.506 0 19.022 8.516 19.022 19.022 0 2.155-.36 4.264-1.055 6.26a2.283 2.283 0 01-4.311-1.502c.528-1.515.8-3.116.8-4.758 0-7.985-6.472-14.457-14.456-14.457a14.46 14.46 0 00-13.364 8.931zM71.248 9.36a2.283 2.283 0 010 3.228l-3.227 3.228a2.283 2.283 0 01-3.228-3.228L68.02 9.36a2.283 2.283 0 013.228 0zM48.653 0a2.283 2.283 0 012.283 2.283v4.565a2.283 2.283 0 11-4.565 0V2.283A2.283 2.283 0 0148.652 0zM80.61 31.957a2.283 2.283 0 01-2.283 2.282h-4.565a2.283 2.283 0 110-4.565h4.565a2.283 2.283 0 012.283 2.283zM26.056 9.36a2.283 2.283 0 013.228 0l3.228 3.228a2.283 2.283 0 11-3.228 3.228l-3.228-3.228a2.283 2.283 0 010-3.228z"
										></path>
										<path
											fill="#0ABDE3"
											d="M45.138 37.283a2.283 2.283 0 01-1.93-1.064 20.524 20.524 0 00-17.382-9.589c-11.346 0-20.543 9.198-20.543 20.544s9.197 20.543 20.543 20.543H55.5c8.404 0 15.217-6.813 15.217-15.217S63.904 37.283 55.5 37.283H45.138zm1.22-4.566H55.5c10.926 0 19.783 8.857 19.783 19.783 0 10.926-8.857 19.783-19.783 19.783H25.826C11.96 72.283.717 61.04.717 47.173c0-13.866 11.242-25.108 25.11-25.108a25.08 25.08 0 0120.531 10.652z"
										></path>
									</g>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<p className="text-gray-700 mb-2">Rata - Rata</p>
				<div className="text-xs font-bold text-gray-900 mb-2">
					~ 26.88 º C<span className="font-normal text-gray-700 mx-1"> | </span> ~ 87.16 %
				</div>
			</div>
		);
}