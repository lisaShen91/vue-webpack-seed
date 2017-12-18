/**
 * Created by shenlisha on 2017/12/14.
 */
import utils from '@/services/utils/utils'
export default {
	testApi1() {
		return new Promise((resolve) => {
			resolve(124);
		})
	},
	testApi: _.partial(utils.api, '/s', 'get')
}