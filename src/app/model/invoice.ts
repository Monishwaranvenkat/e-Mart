import { Timestamp } from 'rxjs';

export class Invoice{
   id:number=0;
   numberOfProduct:number;
   totalAmount:number;
   supplierid:number;
   timeStamp:Date;
   invoiceSummaries:any=[];
}