export type CropType = 
  | 'Fruits' 
  | 'Vegetables' 
  | 'Grains' 
  | 'Nuts' 
  | 'Spices' 
  | 'Herbs' 
  | 'Other' 
  | '';

export interface OfferDetails {
  cropName: string;                // Name of the crop
  description?: string;             // Description of the crop or offer
  price: number;                   // Price per unit (e.g., per kg)
  quantity: number;                // Quantity available
  cropType: CropType;              // Specific crop type from defined enum
  harvestTime?: Date | null | string;        // Expected harvest date
  location: string;                // Crop's location
  offerDuration: string;           // Duration of the offer
  paymentTerms: string;            // Terms for payment
  seasonality?: string;            // Seasonality info (optional)
}


export interface NegotiationDetail extends OfferDetails {
  negotiationID: number;
  buyerName: string;
  buyerImageUrl: string;
  proposedPrice?: string;
  finalPrice?: string;
  status: 'Awaiting Response' | 'Counter Offer' | 'Accepted' | 'Rejected';
  ongoing: boolean,
}