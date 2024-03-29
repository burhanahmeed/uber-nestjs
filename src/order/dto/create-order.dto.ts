export class CreateOrderDto {
    longitude: number;
    latitude: number; 
    subtotal: number;
    deliveryFee: number;
    address: string;
    queue: string;
    items: { itemId: number, itemName: string, itemPrice: number, itemImage: string }[]
}
