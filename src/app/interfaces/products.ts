export interface Products {
  product_id: number,
  category_id:{
    id:number
  },
  product_name: string,
  product_description:string,
  quantity_in_stock: string,
  buy_price:number
}
