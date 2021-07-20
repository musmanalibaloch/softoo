export interface stockResult {
    qty: number,
    sku: string
}

export interface transaction {
    sku: string,
    type: string,
    qty: number
}

export interface stock {
    sku: string,
    stock: number
}

export interface ComputeStock {
    sku: string,
    qty: number
}