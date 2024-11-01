import { Observable } from '@nativescript/core';
import { Booking } from '../../models/field.model';

export class BookingsViewModel extends Observable {
    private _bookings: Array<Booking & { fieldName: string }> = [];

    constructor() {
        super();
        this.loadBookings();
    }

    get bookings(): Array<Booking & { fieldName: string }> {
        return this._bookings;
    }

    private loadBookings() {
        // TODO: Replace with actual API call
        this._bookings = [
            {
                id: '1',
                fieldId: '1',
                fieldName: 'Soccer Arena',
                teamId: '1',
                date: new Date(),
                startTime: '18:00',
                endTime: '19:00',
                status: 'confirmed',
                paymentStatus: 'completed'
            },
            {
                id: '2',
                fieldId: '2',
                fieldName: 'Football Center',
                teamId: '1',
                date: new Date(),
                startTime: '20:00',
                endTime: '21:00',
                status: 'pending',
                paymentStatus: 'pending'
            }
        ];
        this.notifyPropertyChange('bookings', this._bookings);
    }

    onBookingTap(args) {
        const booking = this._bookings[args.index];
        console.log('Booking tapped:', booking.fieldName);
    }
}