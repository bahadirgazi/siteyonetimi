import { Component, OnInit } from '@angular/core';
import { ImportsModule } from './imports';
import { PhotoService } from '../service/photoservice';
import { VideoService } from '../service/videoservice';
import { SafePipe } from 'safe-pipe'
interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
  aciklama?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [ImportsModule,SafePipe],
  providers: [PhotoService,VideoService],
})
export class AppComponent implements OnInit {
  images: any[] | undefined;
  videos: any[] | undefined;
  videoss: any[] | undefined;
  responsiveOptionss: any[] | undefined;

  _activeIndex: number = 0;
  _activeIndexVideo: number = 0;

  get activeIndex(): number {
    return this._activeIndex;
  }

  set activeIndex(newValue) {
    if (this.images && 0 <= newValue && newValue <= this.images.length - 1) {
      this._activeIndex = newValue;
    }
  }

  get activeIndexVideo(): number {
    return this._activeIndexVideo;
  }

  set activeIndexVideo(newValue) {
    if (this.videos && 0 <= newValue && newValue <= this.videos.length - 1) {
      this._activeIndexVideo = newValue;
    }
  } 
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  title = 'site-yonetimi';
  events: EventItem[];

  constructor(private photoService: PhotoService,private videoService: VideoService) {
    this.events = [
      {
        status: 'Mesajlaşma-1',
        date: '29 OCAK 2024',
        icon: 'pi pi-check',
        color: '#9C27B0',
        image: './assets/29-01-2024.png',
        aciklama:
          '29.01.2024 tarihinde daha sorunun en başında site yönetimine haber verdik. 30.01.2024 tarihinde geri dönüş yapıldı fakat hala bir şey yapılmadı.',
      },
      {
        status: 'Mesajlaşma-2',
        date: '1 MAYIS 2024',
        icon: 'pi pi-check',
        color: '#673AB7',
        image: './assets/01-05-2024.png',
        aciklama: '01.05.2024 tarihinde artık lağım gelmeye başladı.',
      },
      {
        status: 'Mesajlaşma-3',
        date: '2 MAYIS 2024',
        icon: 'pi pi-check',
        color: '#FF9800',
        image: './assets/02-05-2024.png',
        aciklama:
          '2 Mayısta dönüş yapıldı ve yoğun şekilde su aktığını ve apartmanın lağım koktuğunu söyledik.',
      },
      {
        status: 'Mesajlaşma-4',
        date: '3 MAYIS 2024',
        icon: 'pi pi-check',
        color: '#607D8B',
        image: './assets/03-05-2024.png',
        aciklama:
          '4 Mayısta usta geleceği söylendi. Her zaman ki gibi inandık.',
      },
      {
        status: 'Mesajlaşma-5',
        date: '4 MAYIS 2024',
        icon: 'pi pi-check',
        color: '#607D8B',
        image: './assets/04-05-2024.png',
        aciklama:
          '4 Mayıs saat 21:12 de ustayı daha fazla bekleyemeyeceğimizi belirttik, Cumartesi günümüzü yediler.',
      },
      {
        status: 'Mesajlaşma-6',
        date: '6 MAYIS 2024',
        icon: 'pi pi-check',
        color: '#607D8B',
        image: './assets/06-05-2024.png',
        aciklama:
          '6 Mayıs günü lütfedip bizi lağımdan kurtacaklarını söyledikler. Tabii ki yapmadılar..',
      },
      {
        status: 'Mesajlaşma-7',
        date: '7 MAYIS 2024',
        icon: 'pi pi-check',
        color: '#607D8B',
        image: './assets/07-05-2024.png',
        aciklama:
          'Çocukların hastalık kapacağını söylüyoruz ama kendi çocukları olmadığı için sıkıntı yok.',
      },
      {
        status: 'Mesajlaşma-8',
        date: '8 MAYIS 2024',
        icon: 'pi pi-check',
        color: '#607D8B',
        image: './assets/08-05-2024.png',
        aciklama: 'Neyse artık bıktık sürekli yazmaktan.',
      },
      {
        status: 'Mesajlaşma-9',
        date: '9 MAYIS 2024',
        icon: 'pi pi-check',
        color: '#607D8B',
        image: './assets/09-05-2024.png',
        aciklama: '',
      },
    ];
  }

  ngOnInit() {
    this.photoService.getImages().then((images) => (this.images = images));
    this.videoService.getVideos().then((videos) => (this.videos = videos));
 
    this.responsiveOptionss = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];
  }

  next() {
    this.activeIndex++;
  }

  prev() {
    this.activeIndex--;
  }
  nextV() {
    this.activeIndexVideo++;
  }

  prevV() {
    this.activeIndexVideo--;
  }
}
