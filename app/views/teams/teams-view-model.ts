import { Observable } from '@nativescript/core';
import { Team } from '../../models/field.model';

export class TeamsViewModel extends Observable {
    private _teams: Team[] = [];

    constructor() {
        super();
        this.loadTeams();
    }

    get teams(): Team[] {
        return this._teams;
    }

    private loadTeams() {
        // TODO: Substituir por chamada real à API
        this._teams = [
            {
                id: '1',
                name: 'Dragões Vermelhos',
                players: ['João', 'Miguel', 'Carlos', 'Tiago', 'Bruno'],
                captain: 'João'
            },
            {
                id: '2',
                name: 'Águias Azuis',
                players: ['Alexandre', 'Samuel', 'Pedro', 'David', 'Marcos'],
                captain: 'Alexandre'
            }
        ];
        this.notifyPropertyChange('teams', this._teams);
    }

    onTeamTap(args) {
        const team = this._teams[args.index];
        console.log('Time selecionado:', team.name);
    }

    onAddTeam() {
        console.log('Adicionar novo time');
    }
}