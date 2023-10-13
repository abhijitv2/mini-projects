<template>
<NavBar name="Ecommerce Product List" bgColor="white-ter" txtColor="link" />
    <div v-if="result !== null && result !== undefined" class="options is-full">
       <RouterLink to='/ecommerce-product-list/cart' type='button' class="atc button is-warning has-text-weight-bold">Go To Cart</RouterLink>
        </div>
   <div v-if="result !== null && result !== undefined" class="product-container">
        
    <div class="product-box">
        <div class="product-photo">
            <img :src="result?.image" alt="product pic" />
        </div>
        <div class="product-detail">
            <div>{{result.title}}</div>
            <div>{{result.category}}</div>
            <div>{{result.description}}</div>
            <div>${{result.price}}</div>
            <RouterLink to='/ecommerce-product-list/cart' @click='addProduct(result)' type=button class="atc button is-warning has-text-weight-bold">Add To Cart</RouterLink>
        </div>
    </div>
 
   </div>

</template>


<script setup>
import NavBar from "@/components/layout/NavBar.vue"
import {useStoreProducts} from "@/stores/storeProducts.js"
import {watchEffect, ref} from "vue"
import {useRoute} from "vue-router"
import axios from 'axios';


const storeProducts = useStoreProducts();
const cart = storeProducts.cart;

const result = ref(null);

const route = useRoute();

const fetchProduct = async() => {
    const response = await axios.get(`https://fakestoreapi.com/products/${route.params.id}`).then((res)=>{ return res});
    result.value  = response.data;
    console.log("single prod: ", result.value);
}

watchEffect(()=>{
    fetchProduct()
})


const addProduct = (result) => {

if(cart.length === 0 )
{
    // let obj = {
    //     id:result.id,
    //     title: result.title,
    //     image: result.image,
    //     category: result.category,
    //     description: result.description,
    //     price: result.price,
    //     qty: 1
    // }
    storeProducts.addToCart(result);
}
else{

    let foundIndex = cart.findIndex(x => x.id === result.id);
    if(foundIndex === -1)
    {
    storeProducts.addToCart(result);
    }
    else
    {
    cart[foundIndex].qty += 1;
    storeProducts.updateProductQty(cart[foundIndex]);
    }

}

}


</script>

<style scoped>

.product-box{
    display:flex;
    gap:20px;
    background: #fff;
    padding:20px;
    width: 80%;
    
    margin:30px auto;
}

.product-photo{
    width:40%;
}

.product-photo img{
    height: 400px;
    width:600px;
    padding: 15px 8px 8px 8px;
}

.product-detail{
    padding: 10px;
    width: 60%;
}

.product-detail div{
    padding-bottom:8px;
}

.product-detail div:nth-child(1){
    font-size:21px;
    font-weight:bolder;
}


.product-detail div:nth-child(2){
    color:#5e3b9c;
    font-size:12px;  
}

.product-detail div:nth-child(3){
    font-size:14px;
}

.product-detail div:nth-child(4){
    font-weight:bolder;
    font-size:18px;
}


.options{
    display:flex;
    padding:10px 10px;
    justify-content: flex-end;
}

</style>
