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

export type TopupRequest = {
    paymentMethod: string,
    amountRub: number,
    steamLogin: string,
    couponCode: string
}

export type LoginResponse = {
    usernameExists: boolean
}

export type PromocodeResponse = {
    isValid: boolean,
    discountPercentage: number
}

export type VouchersResponse = {
    productId: number,
    orderId: string,
    productName: string,
    inStock: boolean,
    qrSbpTransactionId: string,
    paymentUrl: string,
    amountToBeSoldFor: number
}

export type VouchersBatch = {
    productId: number,
    inStock: boolean,
    priceInRub: number,
    region: string,
    name: string
}