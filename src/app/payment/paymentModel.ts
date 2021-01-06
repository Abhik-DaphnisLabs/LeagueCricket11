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
    public RETURN_URL: string,
    public HASH: string,
    public PAY_ID: string,
    public CUST_CITY: string,
    public CUST_STATE: string,
    public CUST_COUNTRY: string,
    public CUST_SHIP_NAME: string,
    public CUST_SHIP_PHONE: string,
    public CUST_SHIP_CITY: string,
    public CUST_SHIP_STATE: string,
    public CUST_SHIP_COUNTRY: string,
    public CUST_SHIP_STREET_ADDRESS1:string,
    public CUST_SHIP_ZIP: string,
    public PRODUCT_DESC: string,
    public SALT: string
  ) {}
}
