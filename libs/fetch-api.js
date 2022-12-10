const baseUrl = process.env.NEXT_PUBLIC_APIURL;

const fetchApi = async (endPoint) => {
	try {
		const req = await fetch( baseUrl + endPoint);
		const res = await req.json();
		const data = res.data;
		return data;
	}
	catch (error) {}
};

export { baseUrl, fetchApi };