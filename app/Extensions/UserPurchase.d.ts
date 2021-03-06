declare module '@ioc:App/Extensions/UserPurchase' {
  export type UserPurchaseSearchRequest = {
    idOrUserId?: number
  }

  export type UserPurchaseCreationRequest = {
    userId?: number
    guavaAmount?: number
    paymentGateway?: 'MERCADO_PAGO'| 'PIC_PAY' | 'PAY_PAL'
    status?: 'PENDING' | 'CANCELLED' | 'PAID' | 'COMPLETED' | 'CHARGEBACK' | 'REFOUNDED'
  }
}
