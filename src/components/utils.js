import axios from 'axios';

const api = axios.create({
	baseURL: 'https://northcoders-news-backend.vercel.app/api',
});

export const getArticles = (topic) => {
	let url = '/articles?';

	if (topic) {
		url += `topic=${topic}`;
	}
	return api.get(url).then((res) => {
		return res.data.articles;
	});
};

export const getArticleById = (id) => {
	return api.get(`/articles/${id}`).then((res) => {
		return res.data.articles[0];
	});
};

export const getCommentsByArticleId = (id) => {
	return api.get(`/articles/${id}/comments`).then((res) => {
		return res.data.comments;
	});
};

export const patchArticle = (id, body) => {
	return api.patch(`/articles/${id}`, body).then((res) => {
		return res.data;
	});
};

export const postComment = (id, body) => {
	return api.post(`/articles/${id}/comments`, body).then((res) => {
		return res.data.comment[0];
	});
};

export const deleteComment = (id) => {
	return api.delete(`/comments/${id}`);
};

export const getTopics = () => {
	return api.get('/topics').then((res) => {
		return res.data.topics;
	});
};
