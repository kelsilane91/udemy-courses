type BaseItem = {
  name: string;
  id: string;
  price: number;
};

export type MealItem = BaseItem & {
  description: string;
};

export type CartItem = BaseItem & {
  amount: number;
};
