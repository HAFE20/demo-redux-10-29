// Vi kan använda ett "type alias" i stället för att skriva "string" överallt
// type CardId = string;

export interface LibraryCard {
	id: string;
	userName: string;
	// Future version: när utfärdades kortet, personnummer, adress m.m.
}
