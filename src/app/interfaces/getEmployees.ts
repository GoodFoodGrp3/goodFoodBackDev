export interface GetEmployees {
  id: number,
  office_id:{
    id:number
  },
  lastname: string,
  firstname:string,
  private_number: string,
  email:string
  reports_to:number
}
