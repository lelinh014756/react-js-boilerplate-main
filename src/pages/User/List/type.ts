import { type StatusDataType } from 'types/coreType';

export interface ListStyle1Data {
  Id: string;
  User: {
    Name: string;
    Avatar: string;
    Certified: boolean;
    Email: string;
  };
  Country: string;
  Friends: number;
  Followers: number;
  Status?: StatusDataType;
}

export interface ListStyle1HeadCell {
  id: keyof ListStyle1Data;
  label: string;
  numeric: boolean;
}
