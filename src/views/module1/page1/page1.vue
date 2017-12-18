<template>
  <div>
    hahaha
    <Button type="primary" @click="testApi">发起ajax请求</Button>
  </div>
</template>
<script>
	import apis from '@/services/apis/index'
	export default {
		name: 'page1',
		data() {
			return {}
		},
	  methods: {
		  testApi() {
			  apis.testApi({a:1}).then((res) => {
				  console.log(res);
			  }, (err) => {
				  console.log(err);
			  })
		  }
	  }
	}
</script>
<style scoped lang="stylus">
</style>