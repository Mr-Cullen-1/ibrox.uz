export interface InstallmentTerm {
  months: number;
  monthlyPayment: number;
}

export interface InstallmentPlan {
  downPaymentPercent: number;
  downPaymentLabel: string;
  terms: InstallmentTerm[];
}

/**
 * Реальная механика рассрочки магазина: оформление по паспорту, без банка.
 * Два варианта первоначального взноса, у каждого — свой набор сроков.
 * Итоговые суммы зависят от конкретного устройства и уточняются у менеджера.
 */
export const installmentPlans: InstallmentPlan[] = [
  {
    downPaymentPercent: 40,
    downPaymentLabel: "Меньше переплата",
    terms: [
      { months: 3, monthlyPayment: 135 },
      { months: 6, monthlyPayment: 76 },
      { months: 12, monthlyPayment: 42 },
    ],
  },
  {
    downPaymentPercent: 30,
    downPaymentLabel: "Меньше взнос сразу",
    terms: [
      { months: 6, monthlyPayment: 94 },
      { months: 12, monthlyPayment: 56 },
    ],
  },
];

export const installmentExample = {
  deviceName: "iPhone 14 Pro",
  priceUsd: 550,
  downPayments: {
    40: 220,
    30: 170,
  } as Record<number, number>,
};
