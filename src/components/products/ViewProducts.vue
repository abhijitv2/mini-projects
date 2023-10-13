<template>
<div class="product-card" v-for="prod in props.product">
    <div class="product-photo">
        <img :src="prod.image" alt="product pic" />
    </div>
    <div class="product-detail">
        <div class="has-text-weight-bold">{{ prod.title}}</div>
        <div>${{ prod.price}}</div>
      <RouterLink :to='`ecommerce-product-list/product/${prod.id}`' type=button class="atc button is-warning has-text-weight-bold">View Details</RouterLink>
    </div>
</div>
</template>


<script setup >

const props = defineProps({
    product:{
        type:Object,
        required:true
    }
});

</script>


<style scoped>

.product-container{
    background: #537193;
}

.product-card{
    background: #fff;
    flex: 0 0 30%;
    text-align: center;
    margin-top:30px;
}



.product-photo img{
    height: 200px;
    width:200px;
    padding: 15px 8px 8px 8px;
}

.product-detail{
    padding:8px;
}

.atc{
    margin:8px 0px;
}

.stars{
display: flex;
  align-items: center;
  gap: 25px;
}

.stars i {
  color: #e6e6e6;
  font-size: 35px;
  cursor: pointer;
  transition: color 0.2s ease;
}
.stars i.active {
  color: #ff9c1a;
}
</style>