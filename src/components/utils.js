import axios from 'axios';

const api = axios.create({
	baseURL: 'https://nc-news-wbhn.onrender.com/api',
});

export const getArticles = () => {
	return api.get('/articles').then((res) => {
		return res.data.articles;
	});
};

export const getArticleById = async (id) => {
	return api.get(`/articles/${id}`).then((res) => {
		return res.data.articles[0];
	});
};

export const getCommentsByArticleId = async (id) => {
	return api.get(`/articles/${id}/comments`).then((res) => {
		return res.data.comments;
	});
};
