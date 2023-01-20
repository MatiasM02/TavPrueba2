export type ProductosRespuesta={
  products:[
    {
      id: number;
      title: string;
      description: string;
      price: number;
      discountPercentage: number;
      rating: number;
      stock: number;
      brand: string;
      category: string;
      thumbnail: string;
      images: string[];
    }
  ],

  total: number;
  skip: number | null;
  limit: number;
}
