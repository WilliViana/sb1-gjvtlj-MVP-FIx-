import { Observable, Frame } from '@nativescript/core';
import { Field } from '../../models/field.model';

export class FieldsViewModel extends Observable {
    private _fields: Field[] = [];

    constructor() {
        super();
        this.loadFields();
    }

    get fields(): Field[] {
        return this._fields;
    }

    private loadFields() {
        // TODO: Substituir por chamada real à API
        this._fields = [
            {
                id: '1',
                name: 'Arena do Gol',
                address: 'Rua Principal, 123',
                price: 150,
                available: true,
                imageUrl: 'res://field1',
                description: 'Campo society com grama sintética'
            },
            {
                id: '2',
                name: 'Centro Esportivo',
                address: 'Avenida Central, 456',
                price: 200,
                available: true,
                imageUrl: 'res://field2',
                description: 'Campo oficial com vestiários'
            }
        ];
        this.notifyPropertyChange('fields', this._fields);
    }

    onFieldTap(args) {
        const field = this._fields[args.index];
        Frame.topmost().navigate({
            moduleName: 'views/fields/field-detail-page',
            context: field
        });
    }

    onAddField() {
        // TODO: Navegar para formulário de adição de quadra
        console.log('Adicionar nova quadra');
    }
}