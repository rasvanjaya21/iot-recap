export default function Table() {
	return (
		<div className="overflow-x-auto relative">
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" className="py-3 px-6 text-left">Jam</th>
						<th scope="col" className="py-3 px-6 text-left"> Suhu Cuaca </th> 
						<th scope="col" className="py-3 px-6 text-left"> Kelembaban </th>
					</tr>
				</thead>
				<tbody>
					<tr className="bg-white border-b-[0.5pt] dark:bg-gray-800 dark:border-gray-700">
						<th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white" > 00:00 </th>
						<td className="py-4 px-6">00 °C</td>
						<td className="py-4 px-6">00 %</td>
					</tr>
					<tr className="bg-white border-b-[0.5pt] dark:bg-gray-800 dark:border-gray-700">
						<th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white" > 01:00 </th>
						<td className="py-4 px-6">01 °C</td>
						<td className="py-4 px-6">01 %</td>
					</tr>
					<tr className="bg-white border-b-[0.5pt] dark:bg-gray-800 dark:border-gray-700">
						<th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white" > 02:00 </th>
						<td className="py-4 px-6">02 °C</td>
						<td className="py-4 px-6">02 %</td>
					</tr>
					<tr className="bg-white border-b-[0.5pt] dark:bg-gray-800 dark:border-gray-700">
						<th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white" > 03:00 </th>
						<td className="py-4 px-6">03 °C</td>
						<td className="py-4 px-6">03 %</td>
					</tr>
					<tr className="bg-white border-b-[0.5pt] dark:bg-gray-800 dark:border-gray-700">
						<th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"> 04:00
						</th>
						<td className="py-4 px-6">04 °C</td>
						<td className="py-4 px-6">04 %</td>
					</tr>
					<tr className="bg-white border-b-[0.5pt] dark:bg-gray-800 dark:border-gray-700">
						<th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white" > 05:00 </th>
						<td className="py-4 px-6">05 °C</td>
						<td className="py-4 px-6">05 %</td>
					</tr>
					<tr className="bg-white border-b-[0.5pt] dark:bg-gray-800 dark:border-gray-700">
						<th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">06:00</th>
						<td className="py-4 px-6">06 °C</td>
						<td className="py-4 px-6">06 %</td>
					</tr>
					<tr className="bg-white border-b-[0.5pt] dark:bg-gray-800 dark:border-gray-700">
						<th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">07:00
						</th>
						<td className="py-4 px-6">07 °C</td>
						<td className="py-4 px-6">07 %</td>
					</tr>
					<tr className="bg-white border-b-[0.5pt] dark:bg-gray-800 dark:border-gray-700">
						<th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">08:00</th>
						<td className="py-4 px-6">08 °C</td>
						<td className="py-4 px-6">08 %</td>
					</tr>
					<tr className="bg-white border-b-[0.5pt] dark:bg-gray-800 dark:border-gray-700">
						<th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">09:00</th>
						<td className="py-4 px-6">09 °C</td>
						<td className="py-4 px-6">09 %</td>
					</tr>
					<tr className="bg-white border-b-[0.5pt] dark:bg-gray-800 dark:border-gray-700">
						<th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">10:00</th>
						<td className="py-4 px-6">10 °C</td>
						<td className="py-4 px-6">10 %</td>
					</tr>
					<tr className="bg-white border-b-[0.5pt] dark:bg-gray-800 dark:border-gray-700">
						<th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">11:00</th>
						<td className="py-4 px-6">11 °C</td>
						<td className="py-4 px-6">11 %</td>
					</tr>
					<tr className="bg-white border-b-[0.5pt] dark:bg-gray-800 dark:border-gray-700">
						<th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">12:00</th>
						<td className="py-4 px-6">12 °C</td>
						<td className="py-4 px-6">12 %</td>
					</tr>
					<tr className="bg-white border-b-[0.5pt] dark:bg-gray-800 dark:border-gray-700">
						<th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">13:00</th>
						<td className="py-4 px-6">13 °C</td>
						<td className="py-4 px-6">13 %</td>
					</tr>
					<tr className="bg-white border-b-[0.5pt] dark:bg-gray-800 dark:border-gray-700">
						<th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">14:00</th>
						<td className="py-4 px-6">14 °C</td>
						<td className="py-4 px-6">14 %</td>
					</tr>
					<tr className="bg-white border-b-[0.5pt] dark:bg-gray-800 dark:border-gray-700">
						<th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">15:00</th>
						<td className="py-4 px-6">15 °C</td>
						<td className="py-4 px-6">15 %</td>
					</tr>
					<tr className="bg-white border-b-[0.5pt] dark:bg-gray-800 dark:border-gray-700">
						<th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">16:00</th>
						<td className="py-4 px-6">16 °C</td>
						<td className="py-4 px-6">16 %</td>
					</tr>
					<tr className="bg-white border-b-[0.5pt] dark:bg-gray-800 dark:border-gray-700">
						<th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">17:00</th>
						<td className="py-4 px-6">17 °C</td>
						<td className="py-4 px-6">17 %</td>
					</tr>
					<tr className="bg-white border-b-[0.5pt] dark:bg-gray-800 dark:border-gray-700">
						<th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">18:00</th>
						<td className="py-4 px-6">18 °C</td>
						<td className="py-4 px-6">18 %</td>
					</tr>
					<tr className="bg-white border-b-[0.5pt] dark:bg-gray-800 dark:border-gray-700">
						<th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">19:00</th>
						<td className="py-4 px-6">19 °C</td>
						<td className="py-4 px-6">19 %</td>	
					</tr>
					<tr className="bg-white border-b-[0.5pt] dark:bg-gray-800 dark:border-gray-700">
						<th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">20:00</th>
						<td className="py-4 px-6">20 °C</td>
						<td className="py-4 px-6">20 %</td>
					</tr>
					<tr className="bg-white border-b-[0.5pt] dark:bg-gray-800 dark:border-gray-700">
						<th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">21:00</th>
						<td className="py-4 px-6">21 °C</td>
						<td className="py-4 px-6">21 %</td>
					</tr>
					<tr className="bg-white border-b-[0.5pt] dark:bg-gray-800 dark:border-gray-700">
						<th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">22:00</th>
						<td className="py-4 px-6">22 °C</td>
						<td className="py-4 px-6">22 %</td>
					</tr>
					<tr className="bg-white border-b-[0.5pt] dark:bg-gray-800 dark:border-gray-700">
						<th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">23:00</th>
						<td className="py-4 px-6">23 °C</td>
						<td className="py-4 px-6">23 %</td>
					</tr>
					<tr className="bg-white border-b-[0.5pt] dark:bg-gray-800 dark:border-gray-700">
						<th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">00:00</th>
						<td className="py-4 px-6">00 °C</td>
						<td className="py-4 px-6">00 %</td>
					</tr>
						
				</tbody>
			</table>
		</div>
	);
}
