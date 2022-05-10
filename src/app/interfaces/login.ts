export interface Login {
  login_id: number,
  customer_id:{
    id:number
  },
  employee_id:{
    id:number
  },
  username: string,
  password : string,
  status: string,
  is_blocked: boolean,
  blocked_date: string,
  counter: number,
  deleted: boolean,
  activated_account: boolean,
  creation_time: string
}
