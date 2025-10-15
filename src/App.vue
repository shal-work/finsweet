<template>
		<AppHeaders/>
        <RouterView :pState="state" :pDispatch="dispatch"/>
		<AppFooter/>
        
</template>


<script setup>
    import AppHeaders from '@/vue_components/Headers/AppHeaders' 
    // import AppHome from '@/vue_components/Home/AppHome'
    import AppFooter from '@/vue_components/Footer/AppFooter'
   
    import storeValue from '@/redux/store'
    import { reactive, ref } from 'vue'
 	import '@/js/js.js'

    const state = reactive(storeValue.getState());
    let dispatch = storeValue.dispatch.bind(storeValue);
    
</script>

