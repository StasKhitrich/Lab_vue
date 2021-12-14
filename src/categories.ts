export interface ICategory {
  id: number;
  logoPath: string;
  categoryName: string;
}

interface iProduct {
  id: number;
  productName:string;
  categoryId: number;
  productDescription: string;
}
