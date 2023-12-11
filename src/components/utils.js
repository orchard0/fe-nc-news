import axios from 'axios';

const api = axios.create({
	baseURL: 'https://nc-news-wbhn.onrender.com/api',
});

const getArticles = async (setArticles, setIsLoading) => {
	try {
		setIsLoading(true);
		const results = await api.get('/articles');
		setArticles(results.data.articles);
		setIsLoading(false);
	} catch (err) {
		console.log(err);
	}
};

export default getArticles;
