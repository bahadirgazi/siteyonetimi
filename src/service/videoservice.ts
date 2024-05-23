import { Injectable } from '@angular/core';

@Injectable()
export class VideoService {
    getData() {
        return [
            {
                itemImageSrc: '../assets/2024-05-18.mp4',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria9.jpg',
                alt: 'Description for Image 2',
                title: '18 Mayıs 2024'
            },
            {
                itemImageSrc: '../assets/2024-05-02.mp4',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4.jpg',
                alt: 'Description for Image 2',
                title: '2 Mayıs 2024'
            },
            {
                itemImageSrc: '../assets/2024-01-29.mp4',
                thumbnailImageSrc: '../assets/01-05-2024.png',
                alt: 'Description for Image 1',
                title: '29 OCAK 2024'
            },
            {
                itemImageSrc: '../assets/2024-05-01.mp4',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3.jpg',
                alt: 'Description for Image 2',
                title: '1 Mayıs 2024'
            },
            {
                itemImageSrc: '../assets/2024-05-03.mp4',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria5.jpg',
                alt: 'Description for Image 2',
                title: '3 Mayıs 2024'
            },
            {
                itemImageSrc: '../assets/2024-05-13.mp4',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria6.jpg',
                alt: 'Description for Image 2',
                title: '13 Mayıs 2024'
            },
            {
                itemImageSrc: '../assets/2024-05-16.mp4',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria7.jpg',
                alt: 'Description for Image 2',
                title: '16 Mayıs 2024'
            },
            {
                itemImageSrc: '../assets/2024-05-17.mp4',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria8.jpg',
                alt: 'Description for Image 2',
                title: '17 Mayıs 2024'
            },
            {
                itemImageSrc: '../assets/2024-05-18-aksam.mp4',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
                alt: 'Description for Image 2',
                title: '18 Mayıs 2024'
            },
            {
                itemImageSrc: '../assets/2024-05-20.mp4',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2.jpg',
                alt: 'Description for Image 2',
                title: '20 Mayıs 2024'
            },
            {
                itemImageSrc: '../assets/2024-05-22.mp4',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3.jpg',
                alt: 'Description for Image 2',
                title: '22 Mayıs 2024'
            }
        ];
    }

    getVideos() {
        return Promise.resolve(this.getData());
    }
};