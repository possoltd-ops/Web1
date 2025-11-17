export interface Review {
    rating: number;
    text: string;
}

export interface BusinessConfig {
  BUSINESS_NAME: string;
  AREA: string;
  PHONE: string;
  ADDRESS_LINE: string;
  POSTCODE: string;
  CUISINE_TYPE: string;
  ORDER_LINK: string;
  REVIEWS: Review[];
}