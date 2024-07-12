import { IProduct, IProductService } from './interfaces'

class ProductList implements IProductService {
    private products: IProduct[] = []
    private currentId: number = 1

    createProduct(data: { name: string; price: number }): IProduct {
        const newProduct: IProduct = {
            id: this.currentId++,
            name: data.name,
            price: data.price,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        this.products.push(newProduct)
        return newProduct
    }

    getProducts(): IProduct[] {
        return this.products
    }

    getOneProduct(id: number): IProduct | undefined {
        return this.products.find(product => product.id === id)
    }

    updateProduct(id: number, data: { name?: string; price?: number }): IProduct {
        const productIndex = this.products.findIndex(product => product.id === id)
        if (productIndex === -1) {
            throw new Error(`Product with id ${id} not found`)
        }

        const currentProduct = this.products[productIndex]
        const updatedProduct: IProduct = {
            ...currentProduct,
            name: data.name ?? currentProduct.name,
            price: data.price ?? currentProduct.price,
            updatedAt: new Date(),
        }

        this.products[productIndex] = updatedProduct
        return updatedProduct
    }

    deleteProduct(id: number): { message: string } {
        const index = this.products.findIndex(product => product.id === id)
        if (index === -1) {
            throw new Error(`Product with id ${id} not found`)
        }
        this.products.splice(index, 1)
        return { message: "Product successfully deleted." }
    }
}

// Exportar a instância da classe
const productList = new ProductList()
export { productList }
