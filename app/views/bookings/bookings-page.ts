import { NavigatedData, Page } from '@nativescript/core';
import { BookingsViewModel } from './bookings-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    if (!page.bindingContext) {
        page.bindingContext = new BookingsViewModel();
    }
}