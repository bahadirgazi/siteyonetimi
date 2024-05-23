import { Injectable } from '@angular/core';

@Injectable()
export class PhotoService {
    getData() {
        return [
            {
                itemImageSrc: '../assets/7.jpg',
                thumbnailImageSrc: '../assets/7.jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: '../assets/8.jpg',
                thumbnailImageSrc: '../assets/8.jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: '../assets/2.jpg',
                thumbnailImageSrc: '../assets/2.jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: '../assets/3.jpg',
                thumbnailImageSrc: '../assets/3.jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: '../assets/4.jpg',
                thumbnailImageSrc: '../assets/4.jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: '../assets/5.jpg',
                thumbnailImageSrc: '../assets/5.jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: '../assets/6.png',
                thumbnailImageSrc: '../assets/6.png',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: '../assets/1.jpg',
                thumbnailImageSrc: '../assets/1.jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            }
        ];
    }

    getImages() {
        return Promise.resolve(this.getData());
    }
};