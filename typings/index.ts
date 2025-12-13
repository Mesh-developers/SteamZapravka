export type ExchangeResponse = {
    usdToRub: number;
    rubToKzt: number;
    usdToKzt: number;
    kztToRub: number;
}

export type TopupResponse = {
    amount: number;
    currency: "RUB"|"KZT"|"USD";
    loginCheck: boolean;
    netAmount: number;
    sbpPaymentUrl: string;
    sbpTransactionUuid: string;
    steamUsername: string;
    transactionId: string;
}