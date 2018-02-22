import * as types from './types';
import injectionPlaces from './static/injectionPlaces.json';

export function addEntry(date, location) {
    const obj = { date: date, location: location };
    injectionPlaces.map((key) => {
        if (obj.location === key.number) {
            obj.location = obj.location + " - " + key.place;
        }
    });
	return {
		type: types.ADD,
		payload: obj
	};
}