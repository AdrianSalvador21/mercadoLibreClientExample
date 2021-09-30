export class PriceData {
  currency: string;
  amount: number;
  decimals: number;

  constructor(data?: any) {
    this.currency = !!data && !!data.currency ? data.currency : null;
    this.amount = !!data && !!data.amount ? data.amount : null;
    this.decimals = !!data && !!data.decimals ? data.decimals : null;
  }
}

