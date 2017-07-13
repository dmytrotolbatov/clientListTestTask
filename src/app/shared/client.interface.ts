export interface IClient {
  general: IGeneral;
  job: IJob;
  contact: IContact;
  address: IAddress;
}

export interface IGeneral {
  firstName: string;
  lastName: string;
  avatar: string;
}

export interface IJob {
  company: string;
  title: string;
}

export interface IContact {
  email: string;
  phone: string;
}

export interface IAddress {
  street: string;
  city: string;
  zipCode: string;
  country: string;
}
