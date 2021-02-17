import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 
			'Client-ID 5xmHlHYgG-KOrTM2tGlkUZbA5W1EERhvNcJNGNDeiK8'
	}
});