import { defineStore } from "pinia";

export const useStoreProducts = defineStore('storeNotes', {
    state: () => {
        return {
            cart: []
        }
    },
    actions: {
        addToCart(product) {           
            let obj = {
                id:product.id,
                title: product.title,
                image: product.image,
                category: product.category,
                description: product.description,
                price: product.price,
                qty: 1,
                totalAmount: 1*product.price
            }
            
            this.cart.unshift(obj)
        },
        updateProductQty(obj) {
            this.cart.findIndex((item) => { if (item.id === obj.id) { item.qty = obj.qty; item.totalAmount = obj.price * obj.qty } })
        },
        removeProduct(id) {
            this.cart = this.cart.filter(item => item.id !== id )
        }
    },
    getters: {
        getTotalAmount: (state) => {

            return () => { 
                let total = 0;
                // for(let item in state.cart)
                // {
                //     if(item.totalAmount === undefined)
                //     {
                //         total = 0;
                //     }
                //     else
                //     {
                //         total += item.totalAmount
                //     }
                // }
                if(state.cart.length === 0)
                {
                    return total;
                }
                else
                {
                    state.cart.map((item)=>{ total += item.totalAmount});
                    return total;
                }

            }   
            
        },
        
    }
})