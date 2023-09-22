/* eslint-disable prettier/prettier */
export interface ReportData {
  id: string;
  source: string;
  amount: number;
  created_at: Date;
  updated_at: Date;
  type: ReportType;
}

export interface ReportCreate {
  source: string;
  amount: number;
}

export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export const data: ReportData[] = [
  {
    id: 'uuid0',
    source: 'Software Developer',
    amount: 50000,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.INCOME,
  },
  {
    id: 'uuid1',
    source: 'Freelance',
    amount: 30000,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.INCOME,
  },
  {
    id: 'uuid2',
    source: 'Business',
    amount: 70000,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.INCOME,
  },
  {
    id: 'uuid3',
    source: 'food',
    amount: 5000,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.EXPENSE,
  },
  {
    id: 'uuid4',
    source: 'gadgets',
    amount: 3000,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.EXPENSE,
  },
  {
    id: 'uuid5',
    source: 'rent',
    amount: 7000,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.EXPENSE,
  },
];