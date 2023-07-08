import { ToolInterface } from 'interfaces/tool';
import { CustomerInterface } from 'interfaces/customer';
import { GetQueryInterface } from 'interfaces';

export interface RentalInterface {
  id?: string;
  tool_id?: string;
  customer_id?: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  tool?: ToolInterface;
  customer?: CustomerInterface;
  _count?: {};
}

export interface RentalGetQueryInterface extends GetQueryInterface {
  id?: string;
  tool_id?: string;
  customer_id?: string;
  status?: string;
}
