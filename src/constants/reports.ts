export interface ReportDataState {
  month: string;
  week: number;
  numberOfSales: number;
  profit: number;
  revenue: number;
  cost: number;
}

const dataReports: ReportDataState[] = [
  {
    month: 'August 2023',
    week: 1,
    numberOfSales: 128,
    profit: 3760.07,
    revenue: 12765.12,
    cost: 10780.25,
  },
  {
    month: 'August 2023',
    week: 2,
    numberOfSales: 98,
    profit: -255.07,
    revenue: 9967.69,
    cost: 9484.59,
  },
  {
    month: 'August 2023',
    week: 3,
    numberOfSales: 111,
    profit: 567.07,
    revenue: 11230.47,
    cost: 10121.77,
  },
  {
    month: 'July 2023',
    week: 1,
    numberOfSales: 127,
    profit: 3260.07,
    revenue: 12565.12,
    cost: 10280.25,
  },
  {
    month: 'July 2023',
    week: 2,
    numberOfSales: 97,
    profit: -435.07,
    revenue: 9767.69,
    cost: 9174.59,
  },
  {
    month: 'July 2023',
    week: 3,
    numberOfSales: 140,
    profit: 4560.08,
    revenue: 15765.12,
    cost: 10788.28,
  },
  {
    month: 'July 2023',
    week: 4,
    numberOfSales: 101,
    profit: 120.07,
    revenue: 10330.47,
    cost: 9881.75,
  },
];
export default dataReports;
