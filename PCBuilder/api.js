const url = 'https://real-time-amazon-data.p.rapidapi.com/search?query=Phone&page=1&category_id=aps';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '06026defe0msh402b5fe2c39be3ep1ca6bbjsne444bfa41204',
		'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}