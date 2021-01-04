export class PaymentModel {
  constructor(
    public ORDER_ID: number,
    public AMOUNT: number,
    public TXNTYPE: string,
    public CUST_NAME: string,
    public CUST_STREET_ADDRESS1: string,
    public CUST_ZIP: string,
    public CUST_PHONE: string,
    public CUST_EMAIL: string,
    public CURRENCY_CODE: number,
    public RETURN_URL: string
  ) {}
}
