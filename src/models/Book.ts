export type BookId = string;

export interface Book {
	id: BookId;
	title: string;
	author: string;
	stock: number;   // hur många böcker finns kvar att låna
}
