export interface IProduct {
    id: number
    name: string
    price: number
    createdAT: Date
    updatedAT: Date
}

export interface IProductService {
    createProduct(data: { name: string; price: number }): IProduct;
    getProducts(): IProduct[];
    getOneProduct(id: number): IProduct | undefined;
    updateProduct(id: number, data: { name?: string; price?: number }): IProduct;
    deleteProduct(id: number): { message: string };
}