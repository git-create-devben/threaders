export async function GET(request: Request) {
	const url = 'https://meta-threads.p.rapidapi.com/v1/user/id/?username=devben.tech';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '7dd1c7dee4mshcfec6817a02ae0cp191b12jsn491b5cf51ed9',
			'X-RapidAPI-Host': 'meta-threads.p.rapidapi.com'
		}
	};
	
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		const body = await request.json();
		console.log(body);
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}
 