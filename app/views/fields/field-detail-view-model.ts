import { Observable } from '@nativescript/core';
import { Field, Team } from '../../models/field.model';
import { TeamsViewModel } from '../teams/teams-view-model';

export class FieldDetailViewModel extends Observable {
    private _field: Field;
    private _teams: Team[] = [];
    private _selectedDate: Date = new Date();
    private _startTime: Date = new Date();
    private _endTime: Date = new Date();
    private _selectedTeamIndex: number = 0;

    constructor(field: Field) {
        super();
        this._field = field;
        this.loadTeams();
        
        // Set default times
        this._startTime.setHours(18, 0);
        this._endTime.setHours(19, 0);
    }

    get field(): Field {
        return this._field;
    }

    get teams(): Team[] {
        return this._teams;
    }

    get selectedDate(): Date {
        return this._selectedDate;
    }

    set selectedDate(value: Date) {
        if (this._selectedDate !== value) {
            this._selectedDate = value;
            this.notifyPropertyChange('selectedDate', value);
        }
    }

    get startTime(): Date {
        return this._startTime;
    }

    set startTime(value: Date) {
        if (this._startTime !== value) {
            this._startTime = value;
            this.notifyPropertyChange('startTime', value);
        }
    }

    get endTime(): Date {
        return this._endTime;
    }

    set endTime(value: Date) {
        if (this._endTime !== value) {
            this._endTime = value;
            this.notifyPropertyChange('endTime', value);
        }
    }

    get selectedTeamIndex(): number {
        return this._selectedTeamIndex;
    }

    set selectedTeamIndex(value: number) {
        if (this._selectedTeamIndex !== value) {
            this._selectedTeamIndex = value;
            this.notifyPropertyChange('selectedTeamIndex', value);
        }
    }

    private loadTeams() {
        const teamsVM = new TeamsViewModel();
        this._teams = teamsVM.teams;
        this.notifyPropertyChange('teams', this._teams);
    }

    onBookField() {
        const selectedTeam = this._teams[this._selectedTeamIndex];
        
        // Create booking object
        const booking = {
            fieldId: this._field.id,
            teamId: selectedTeam.id,
            date: this._selectedDate,
            startTime: this._startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            endTime: this._endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        // TODO: Implement payment processing
        console.log('Creating booking:', booking);
        
        // Navigate to payment page
        // TODO: Implement navigation to payment page
    }
}