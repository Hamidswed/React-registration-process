export type UserType = {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  planInfo: {
    title: string;
    price: number;
    timeFrame: boolean;
  };
};
