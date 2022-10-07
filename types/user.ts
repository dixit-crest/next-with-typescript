export interface UserProps {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: UserAddressProps;
  company: UserCompanyProps;
}

export interface UserAddressProps {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface UserCompanyProps {
  name: string;
  catchPhrase: string;
  bs: string;
}
