/**
 * Created by shenlisha on 2017/12/14.
 */
import Page1 from '@/views/module1/page1/page1'
import HelloWorld from '@/components/HelloWorld'
export default [
	{
		path: '/',
		name: 'HelloWorld',
		component: HelloWorld
	},
	{
		path: '/page1',
		name: 'page1',
		component: Page1
	}
]