import {ProductImage} from './product-image.type';

export interface Product {
     
    _id: string;
    name: string;
    price: number;
    images: ProductImage[];
    subCategory: string;
    feedbacksCount: number;
    rating: number;
}
