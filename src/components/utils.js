import axios from 'axios';

const api = axios.create({
	baseURL: 'https://nc-news-wbhn.onrender.com/api',
});

const getArticles = () => {
	return api.get('/articles').then((res) => {
		return res.data.articles;
	});
};

export default getArticles;
