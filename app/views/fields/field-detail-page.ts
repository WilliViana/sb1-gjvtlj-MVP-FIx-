import { EventData, Page, NavigatedData } from '@nativescript/core';
import { FieldDetailViewModel } from './field-detail-view-model';
import { Field } from '../../models/field.model';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    const field = <Field>args.context;
    page.bindingContext = new FieldDetailViewModel(field);
}