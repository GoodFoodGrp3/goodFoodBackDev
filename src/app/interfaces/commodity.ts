export interface Commodity {
  buy_price:number,
  commodity_description:string,
  commodity_id: number,
  commodity_name: string,
  provider: {
    provider_id : number,
    addressLine: string,
    country: string,
    email: string,
    phone: string,
    postalCode: string,
    provider_name: string,
    state: string
  },
  quantity:number,
  taxe: {
    code_tva_id:number,
    taxe_name: string,
    taxe_rate: string
  },
  unit:number,
  vendor_provider:string,
  code_tva_id: number,
}
