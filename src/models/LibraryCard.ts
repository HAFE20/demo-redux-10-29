// Vi kan använda ett "type alias" i stället för att skriva "string" överallt
export type CardId = string;

export interface LibraryCard {
	id: CardId;
	userName: string;
	// Future version: när utfärdades kortet, personnummer, adress m.m.
}
