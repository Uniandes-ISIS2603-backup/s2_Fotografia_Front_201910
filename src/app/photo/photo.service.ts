import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Photo } from './photo';
import { PhotoDetail } from './photo-detail';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const photos = '/photos';

@Injectable()
export class PhotoService {

    /**
     * Constructor of the service
     * @param http The HttpClient - This is necessary in order to perform requests
     */
    constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of editorials retrieved from the API
    * @returns The list of books in real time
    */
    getPhotos(): Observable<Photo[]> {
        return this.http.get<Photo[]>(API_URL + photos);
    }

    /**
    * Returns the Observable object with the details of an author retrieved from the API
    * @returns The author details
    */
    getPhotoDetail(photoId): Observable<PhotoDetail> {
        return this.http.get<PhotoDetail>(API_URL + photos + '/' + photoId);
    }
    /**
      * Creates an Jurado
      * @param photo The photo which will be created
      * @returns The confirmation of the photo's creation
      */
    createPhoto(photo): Observable<Photo> {
        console.log(photo);
        return this.http.post<Photo>(API_URL + photos, photo);
    }
    /**
    * Updates a photo
    * @param photo The photo which will be update
    * @returns The confirmation of the photo's update
    */
    updatePhoto(photo): Observable<PhotoDetail> {
        return this.http.put<PhotoDetail>(API_URL + photos + '/' + photo.id, photo);
    }

    /**
    * Deletes a photo
    * @param photoId The photo which will be deleted
    * @returns True if the photo was deleted, false otherwise
    */
    deleteJurado(photoId): Observable<PhotoDetail> {
        return this.http.delete<PhotoDetail>(API_URL + photos + '/' + photoId);
    }
}
