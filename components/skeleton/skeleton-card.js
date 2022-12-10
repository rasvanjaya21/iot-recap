const SkeletonCard = () => {
	return (
		<div className="mx-auto rounded-lg shadow-md flex flex-col sm:flex-row gap-5 select-none">
			<div className="flex flex-col flex-1 gap-5 mb-5">
				<div>
					<div className="bg-gray-200 w-full animate-pulse h-24 md:h-40 rounded-t-lg"></div>
				</div>

				<div className="flex flex-col gap-3 px-5">
					<div className="bg-gray-200 w-full animate-pulse h-5 rounded-lg"></div>
				</div>

				<div className="hidden md:flex flex-col gap-3 px-5">
					<div className="bg-gray-200 w-full animate-pulse h-5 rounded-lg"></div>
					<div className="bg-gray-200 w-full animate-pulse h-5 rounded-lg"></div>
				</div>

				<div className="flex gap-2 px-5">
					<div className="bg-gray-200 w-12 h-5 animate-pulse rounded-lg"></div>
					<div className="bg-gray-200 w-12 h-5 animate-pulse rounded-lg"></div>
				</div>
			</div>
		</div>
	);
};

export default SkeletonCard;
