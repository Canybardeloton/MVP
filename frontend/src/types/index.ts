export interface User {
	id: string;
	email: string;
	firstName: string;
	lastName: string;
	role: 'therapist' | 'admin';
}

export interface Patient {
	id: string;
	firstName: string;
	lastName: string;
	birthDate: string;
	age: number;
	category: 'enfant' | 'adolescent' | 'adulte' | 'personne_agee';
}

export interface Bilan {
	id : string;
	patientId: string;
	status: 'brouillon' | "en_cours" | "complet";
	createdAt: string;
	updatedAt: string;
}