import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  filmlist:any = [
    {
      img:'https://img2.pngdownload.id/20180323/ape/kisspng-art-film-logo-cinema-clip-art-movie-logo-cliparts-5ab587fb1000c4.1651552415218462670656.jpg',
      judul:'Movie 1',
      diskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
      img:'https://img2.pngdownload.id/20180323/ape/kisspng-art-film-logo-cinema-clip-art-movie-logo-cliparts-5ab587fb1000c4.1651552415218462670656.jpg',
      judul:'Movie 2',
      diskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
      img:'https://img2.pngdownload.id/20180323/ape/kisspng-art-film-logo-cinema-clip-art-movie-logo-cliparts-5ab587fb1000c4.1651552415218462670656.jpg',
      judul:'Movie 3',
      diskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
      img:'https://img2.pngdownload.id/20180323/ape/kisspng-art-film-logo-cinema-clip-art-movie-logo-cliparts-5ab587fb1000c4.1651552415218462670656.jpg',
      judul:'Movie 4',
      diskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
      img:'https://img2.pngdownload.id/20180323/ape/kisspng-art-film-logo-cinema-clip-art-movie-logo-cliparts-5ab587fb1000c4.1651552415218462670656.jpg',
      judul:'Movie 5',
      diskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
  ]
  
}
