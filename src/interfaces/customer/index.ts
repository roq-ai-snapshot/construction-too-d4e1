import { RentalInterface } from 'interfaces/rental';
import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  name: string;
  company_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  rental?: RentalInterface[];
  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {
    rental?: number;
  };
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  company_id?: string;
  user_id?: string;
}
