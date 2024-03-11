import {RESTDataSource} from "@apollo/datasource-rest";
import {FilmModel, peopleModel} from '../models.js';

export class GHIBLIAPI extends RESTDataSource {
    baseURL = "https://ghibliapi.dev/";

    getFilms() {
        return this.get<FilmModel[]>('films')
    }

    getPeople() {
        return this.get<peopleModel[]>('people')
    }

    getFilmById(id: string) {
        return this.get<FilmModel>(`films/${id}`)
    }

    getPeopleById(id: string) {
        return this.get<peopleModel>(`people/${id}`)
    }
}