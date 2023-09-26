import { create } from "zustand";

interface PayStore {
  fundsOut: string;
  fundsInAmount: number;
  country: string;
  currency: string;
  rates: number;
  fee: number;
  banner: boolean;
  bonusAmount: number;
  bonusCurrency: string;
  deliveryTime: string;
  deliveryOption: string;

  setFundsOut: (fundsOut: string) => void;
  setFundsInAmount: (fundsInAmount: number) => void;
  setCountry: (country: string) => void;
  setCurrency: (currency: string) => void;
  setRates: (rates: number) => void;
  setFee: (fee: number) => void;
  setBanner: (banner: boolean) => void;
  setBonusAmount: (bonusAmount: number) => void;
  setBonusCurrency: (bonusCurrency: string) => void;
  setDeliveryTime: (deliveryTime: string) => void;
  setDeliveryOption: (deliveryOption: string) => void;
}

export const usePayStore = create<PayStore>((set, get) => ({
  fundsOut: "Receiver Choice",
  fundsInAmount: 100,
  country: "RO",
  currency: "RON",
  rates: 4.5612,
  fee: 0,
  banner: false,
  bonusAmount: 100,
  bonusCurrency: "RON",
  deliveryTime: "Instant",
  deliveryOption: "Phone Notification",

  setFundsOut: (fundsOut: string) => set({ fundsOut }),
  setFundsInAmount: (fundsInAmount: number) => set({ fundsInAmount }),
  setCountry: (country: string) => set({ country }),
  setCurrency: (currency: string) => set({ currency }),
  setRates: (rates: number) => set({ rates }),
  setFee: (fee: number) => set({ fee }),
  setBanner: (banner: boolean) => set({ banner }),
  setDeliveryOption: (deliveryOption: string) => set({ deliveryOption }),

  setBonusAmount: (bonusAmount: number) => {
    const currentState = get();
    if (
      currentState.fundsOut === "Ecosystem" &&
      (currentState.country === "RO" || currentState.country === "PL")
    ) {
      set({ bonusAmount });
    }
  },
  setBonusCurrency: (bonusCurrency: string) => {
    if (get().fundsOut === "Ecosystem") {
      set({ bonusCurrency });
    }
  },

  setDeliveryTime: (deliveryTime: string) => {
    if (get().fundsOut === "Ecosystem" || get().fundsOut === "Cash") {
      set({ deliveryTime: "Instant" });
    } else {
      set({ deliveryTime: "1-2 Business days" });
    }
  },
}));
