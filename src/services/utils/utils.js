/**
 * Created by shenlisha on 2017/12/14.
 */
import axios from 'axios'
/**
 * options
 */
export default {
	api(url, type, dataGet, dataPost, headers, options) {
		type || (type= 'get');
		if (type === 'get') {
			url += (~url.indexOf('?') ? '&' : '?') + $.param(dataGet);
		}
		axios.request({
			url: url,
			method: type,
			headers: _.extend({'X-Requested-With': 'XMLHttpRequest'}, headers),
			data: JSON.stringify(dataPost)
		}).then((res)=> {
			if (!options || options()) {
				return Promise.resolve(res);
			} else {
				return Promise.reject(res);
			}
		}, function(error) {
			return Promise.reject(error);
		}).catch((error) => {
			if (error.response) {
				// The request was made and the server responded with a status code
				// that falls out of the range of 2xx
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
			} else if (error.request) {
				// The request was made but no response was received
				// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
				// http.ClientRequest in node.js
				console.log(error.request);
			} else {
				// Something happened in setting up the request that triggered an Error
				console.log('Error', error.message);
			}
			console.log(error.config);
		})
	}
}