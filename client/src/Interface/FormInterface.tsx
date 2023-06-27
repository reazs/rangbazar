export interface CheckOutFormInterF {
  fName: string;
  lName: string;
  email: string;
  address: string;
  country: string;
  state: string;
  zip: number;
  isShippingSame: boolean;
  saveInfo: boolean;
  creditCardName: string;
  nameOnCard: string;
  creditCardNumber: number;
  expiration: string;
  CVV: string | number;
}

export interface FormErrorsInterF {
  fName?: string;
  lName?: string;
  email?: string;
  address?: string;
  country?: string;
  state?: string;
  zip?: string;
  isShippingSame?: string;
  saveInfo?: string;
  creditCardName?: string;
  nameOnCard?: string;
  creditCardNumber?: string;
  expiration?: string;
  CVV?: string;
}
