export interface Field {
    id: string;
    name: string;
    address: string;
    price: number;
    available: boolean;
    imageUrl?: string;
    description?: string;
    amenities?: string[];
}

export interface Team {
    id: string;
    name: string;
    players: string[];
    captain: string;
    logo?: string;
}

export interface Booking {
    id: string;
    fieldId: string;
    teamId: string;
    date: Date;
    startTime: string;
    endTime: string;
    status: 'pending' | 'confirmed' | 'cancelled';
    paymentStatus: 'pending' | 'completed';
    totalAmount?: number;
    paymentMethod?: string;
}

export interface Payment {
    id: string;
    bookingId: string;
    amount: number;
    status: 'pending' | 'completed' | 'failed';
    method: 'credit_card' | 'pix' | 'cash';
    transactionId?: string;
    createdAt: Date;
}