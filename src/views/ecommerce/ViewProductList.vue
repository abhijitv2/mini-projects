<template>
   <NavBar name="Ecommerce Product List" bgColor="white-ter" txtColor="link" />
   <div class="options is-full ">

   
        <input type="text" class="input mr-4" @input="searchProduct" placeholder="Search Product..." v-model="searchTerm" />
    

    
    
    <div class="select">
            <select v-model="option">
                <option value="0">Filter By Category</option>
                <option value="0">All</option>
                <option value="men's clothing">men's clothing</option>
                <option value="electronics">electronics</option>
                <option value="jewelery">jewelery</option>
                <option value="women's clothing">women's clothing</option>
            </select>
        </div>

        <div class="select">
            <select @change="filterByPrice" v-model="priceFilter">
                <option value="">Filter By Price</option>
                <option value="asc">Low to High</option>
                <option value="dsc">High To Low</option>
                <option value="">All</option>           
            </select>
        </div>


    <RouterLink to='/ecommerce-product-list/cart' type='button' class="button is-warning has-text-weight-bold">Go To Cart</RouterLink>
        </div>
   <div v-if="result?.length > 0" class="product-container">
        <ViewProducts :product='result' :key="result.id"  />
   </div>
   <div v-else class="is-flex is-justify-content-center">
    <p class="no-items has-text-weight-semibold	is-size-3">No items available!</p>
   </div>
</template>


<script setup>
import NavBar from "@/components/layout/NavBar.vue";
import ViewProducts from "@/components/products/ViewProducts.vue";
import {watchEffect, ref} from 'vue';
import axios from "axios";

const result = ref();
const option = ref('0');
const priceFilter = ref("");
const searchTerm = ref("");
const filterList =  ref([]);

const fetchProducts = async(option) => {
    if(option.value === "0")
    {
        const response = await axios.get('https://fakestoreapi.com/products').then((res)=>{ return res});  
        result.value  = response.data;
        filterList.value = response.data;
    }
    else
    {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${option.value}`).then((res)=>{ return res});
        result.value  = response.data;
        filterList.value = response.data;
    }
}

watchEffect(()=>{
    fetchProducts(option)
})

const filterByPrice = () => {
    if(priceFilter.value === "asc"){
    result.value = result.value.sort((a,b)=>{  return a.price - b.price })
    filterList.value = result.value;
    }
else if(priceFilter.value === "dsc"){
    result.value = result.value.sort((a,b)=>{  return b.price - a.price })
    filterList.value= result.value;
}
else fetchProducts(option);
}


const searchProduct = () => {
    if(searchTerm.value !== "")
    {
    result.value = result.value.filter(item => {
        return item.title.toLowerCase().includes(searchTerm.value.toLowerCase())
      });
      
    }
    else
    {
        result.value = filterList.value;
    }
    

}


</script>


<style scoped>

.product-container{
 display: flex;
 flex-wrap: wrap;
 gap:30px;
 justify-content: center;
 padding: 30px 0px;
}

.options{
    display:flex;
    padding:10px 10px;
    justify-content: flex-end;
}

.select{
    margin-right: 20px;
}

.no-items{
    margin-top:100px;
}


</style>