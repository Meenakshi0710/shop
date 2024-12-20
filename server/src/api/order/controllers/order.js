'use strict';
// @ts-ignore
const stripe = require('stripe')(process.env.STRIPE_KEY);
/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order',({strapi}) => ({
    async create(ctx){
      console.log(ctx.request.body);
      console.log(process.env.STRIPE_KEY);
        const {products} = ctx.request.body
        console.log(products);
        const lineItems = await Promise.all(
            products.map(async (product) => {
              console.log(product);
              const item = await strapi
                .service("api::product.product")
                .findOne(product.documentId);
  
              return {
                price_data: {
                  currency: "inr",
                  product_data: {
                    name: item.title,
                  },
                  unit_amount: Math.round(item.price * 100),
                },
                quantity: product.quantity,
              };
            })
          );
          console.log(lineItems);
        try {
            const session = await stripe.checkout.sessions.create({
                shipping_address_collection: {allowed_countries: ['IN']},
                payment_method_types: ["card"],
                mode: 'payment',
                success_url: `http://localhost:5173/success=true`,
                cancel_url: `http://localhost:5173/success=false`,
                line_items:lineItems,
              });
              await strapi.service("api::order.order").create({ data: {  products, stripeid: session.id } });
      
            return { stripeSession: session };
        } catch (error) {
            ctx.response.status = 500;
            return error;
        }
    }
}));
