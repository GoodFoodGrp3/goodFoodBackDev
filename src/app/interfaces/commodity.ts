export interface Commodity {
  commodity_id: number,
  provider_id:{
    id:number
  },
  employee_id:{
    id:number
  },
  code_tva_id: number,
  commodity_name: string,
  commodity_description:string,
  quantity_in_stock: number,
  buy_price:number,
  vendor_provider:string,
  quantity:number
}
