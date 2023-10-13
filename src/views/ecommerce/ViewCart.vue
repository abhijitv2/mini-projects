<template>
    <NavBar name="Ecommerce Product List" bgColor="white-ter" txtColor="link" />
            <div  class="options is-full">
                    <RouterLink to='/ecommerce-product-list' type='button' class="atc button is-warning has-text-weight-bold">Products Page</RouterLink>
            </div>
        <div v-if="cart.length > 0">
              
               <div v-for="product in cart">
                    <div class="columns product top">
                        <div class="column"><img :src="product?.image" alt="product pic" class="prd_img" /></div>
                        <div class="column"><div>{{product?.title}}</div></div>
                        <div class="column"><button @click="decrementPrdQty(product.id)" >-</button> {{product?.qty}} <button @click="incrementPrdQty(product.id)">+</button></div>
                        <div class="column"><div @click='removeProduct(product.id)' ><font-awesome-icon icon="trash" /></div></div>
                        <div class="column">${{ product.totalAmount }}</div>
                    </div>
               </div> 
        </div>
        <div v-else class="product">
            <div>Cart Empty! Please add your desired items to the cart.</div>
        </div>
        <div class="amt is-flex is-full">
            Total Amount : ${{Math.round(totalAmount * 100) / 100 }}</div>
    </template>
    
    
<script setup>
   import NavBar from "@/components/layout/NavBar.vue";
   import {useStoreProducts} from "@/stores/storeProducts.js";
   import {ref}  from "vue";

   const cart = ref([]);
   
   const storeProducts = useStoreProducts();
  
   
   cart.value = storeProducts.cart;

   const totalAmount = ref(0);
   totalAmount.value = storeProducts.getTotalAmount()?storeProducts.getTotalAmount():0 ;


   storeProducts.$subscribe((mutation, state) => {
    totalAmount.value = storeProducts.getTotalAmount()?storeProducts.getTotalAmount():0;
    cart.value = storeProducts.cart;
  })


   const decrementPrdQty = (id) => {
        let foundIndex = cart.value.findIndex(x => x.id === id);
        if(cart.value[foundIndex].qty !== 0){
        cart.value[foundIndex].qty -= 1;
        storeProducts.updateProductQty(cart.value[foundIndex]);
        }
        
   }

   const incrementPrdQty = (id) => {
        let foundIndex = cart.value.findIndex(x => x.id === id);
        cart.value[foundIndex].qty += 1;
        storeProducts.updateProductQty(cart.value[foundIndex]);
    }

    const removeProduct = (id) => {
        storeProducts.removeProduct(id);
    }


    
</script>


<style scoped>
    .product{
        /* display: flex;
        justify-content: space-around;
        align-items: stretch; */
        background: #fff;
        /* align-items: center; */
        padding:5px 0px;
        border-top: 1px solid #a09ea3;
        border-bottom: 1px solid #a09ea3;
    }

    .product-photo img{
        width:100%;
        height:50px;
    }

    .amt{
        background:#fff;
        font-size: 21px;
        font-weight:bolder;
        width:100%;
        justify-content: flex-end;
        padding: 10px;
    }


    .top{
        padding-top:20px;
        border-top: 1px solid #a09ea3;
    }


    .options{
    display:flex;
    padding:10px 10px;
    justify-content: flex-end;
}

.prd_img{
    width:50px;
    margin-left:115px;
}


</style>