export interface ArtistSearchResult {
  id: string;
  name: true;
  title: string;
  link: string;
  picture: string;
  picture_medium: string;
  picture_big: string;
  nb_fan: string
  nb_album: string
  type: string
}

export interface Artist {
  id: string;
  name: string;
  link: string;
  picture: string;
  picture_medium: string;
  picture_big: string;
  tracklist: string;
  nb_fan: string
  nb_album: string
  type: string;
}

export interface Album {
  id: string;
  title: string;
  cover: string;
  cover_medium: string;
  cover_big: string;
  label: string;
  nb_tracks: string;
  duration: string;
  fans: string;
  release_date: string,
  record_type: string,
  available: boolean,
}

export interface ArtistTopTrack {
  id: string;
  title: string;
  contributors?: Contributors[];
  artist: Artist;
  album: Album;
}

interface Contributors {
  id: string;
  name: string;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  type: string;
  role: string;
}


const artist = {
  "id": 339209,
  "name": "J. Cole",
  "link": "https://www.deezer.com/artist/339209",
  "share": "https://www.deezer.com/artist/339209?utm_source=deezer&utm_content=artist-339209&utm_term=0_1661643300&utm_medium=web",
  "picture": "https://api.deezer.com/artist/339209/image",
  "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/56x56-000000-80-0-0.jpg",
  "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/250x250-000000-80-0-0.jpg",
  "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/500x500-000000-80-0-0.jpg",
  "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/1000x1000-000000-80-0-0.jpg",
  "nb_album": 27,
  "nb_fan": 2335097,
  "radio": true,
  "tracklist": "https://api.deezer.com/artist/339209/top?limit=50",
  "type": "artist"
}
const artistAlbums = {
  "data": [
    {
      "id": 307288167,
      "title": "D-Day: A Gangsta Grillz Mixtape",
      "link": "https://www.deezer.com/album/307288167",
      "cover": "https://api.deezer.com/album/307288167/image",
      "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/7e1980182f52f6ad2bf90c9c03bb1fdc/56x56-000000-80-0-0.jpg",
      "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/7e1980182f52f6ad2bf90c9c03bb1fdc/250x250-000000-80-0-0.jpg",
      "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/7e1980182f52f6ad2bf90c9c03bb1fdc/500x500-000000-80-0-0.jpg",
      "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/7e1980182f52f6ad2bf90c9c03bb1fdc/1000x1000-000000-80-0-0.jpg",
      "md5_image": "7e1980182f52f6ad2bf90c9c03bb1fdc",
      "genre_id": 116,
      "fans": 7432,
      "release_date": "2022-03-31",
      "record_type": "album",
      "tracklist": "https://api.deezer.com/album/307288167/tracks",
      "explicit_lyrics": true,
      "type": "album"
    },
    {
      "id": 318262627,
      "title": "D-Day: A Gangsta Grillz Mixtape",
      "link": "https://www.deezer.com/album/318262627",
      "cover": "https://api.deezer.com/album/318262627/image",
      "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/8daf2126d7533cea27819c5dd7f4cd49/56x56-000000-80-0-0.jpg",
      "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/8daf2126d7533cea27819c5dd7f4cd49/250x250-000000-80-0-0.jpg",
      "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/8daf2126d7533cea27819c5dd7f4cd49/500x500-000000-80-0-0.jpg",
      "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/8daf2126d7533cea27819c5dd7f4cd49/1000x1000-000000-80-0-0.jpg",
      "md5_image": "8daf2126d7533cea27819c5dd7f4cd49",
      "genre_id": 116,
      "fans": 129,
      "release_date": "2022-05-11",
      "record_type": "album",
      "tracklist": "https://api.deezer.com/album/318262627/tracks",
      "explicit_lyrics": false,
      "type": "album"
    },
    {
      "id": 230155192,
      "title": "The Off-Season",
      "link": "https://www.deezer.com/album/230155192",
      "cover": "https://api.deezer.com/album/230155192/image",
      "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/56x56-000000-80-0-0.jpg",
      "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/250x250-000000-80-0-0.jpg",
      "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/500x500-000000-80-0-0.jpg",
      "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/1956b602e48e7d0cc9898a0288446234/1000x1000-000000-80-0-0.jpg",
      "md5_image": "1956b602e48e7d0cc9898a0288446234",
      "genre_id": 116,
      "fans": 60122,
      "release_date": "2021-05-14",
      "record_type": "album",
      "tracklist": "https://api.deezer.com/album/230155192/tracks",
      "explicit_lyrics": true,
      "type": "album"
    },
    {
      "id": 102427652,
      "title": "Revenge Of The Dreamers III",
      "link": "https://www.deezer.com/album/102427652",
      "cover": "https://api.deezer.com/album/102427652/image",
      "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/d12f731518138e4b024ae025a84f6d78/56x56-000000-80-0-0.jpg",
      "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/d12f731518138e4b024ae025a84f6d78/250x250-000000-80-0-0.jpg",
      "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/d12f731518138e4b024ae025a84f6d78/500x500-000000-80-0-0.jpg",
      "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/d12f731518138e4b024ae025a84f6d78/1000x1000-000000-80-0-0.jpg",
      "md5_image": "d12f731518138e4b024ae025a84f6d78",
      "genre_id": 116,
      "fans": 34037,
      "release_date": "2019-07-05",
      "record_type": "album",
      "tracklist": "https://api.deezer.com/album/102427652/tracks",
      "explicit_lyrics": true,
      "type": "album"
    },
    {
      "id": 126665082,
      "title": "Revenge Of The Dreamers III: Director's Cut",
      "link": "https://www.deezer.com/album/126665082",
      "cover": "https://api.deezer.com/album/126665082/image",
      "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/5e76335891850b3d214eaeaa5b25deee/56x56-000000-80-0-0.jpg",
      "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/5e76335891850b3d214eaeaa5b25deee/250x250-000000-80-0-0.jpg",
      "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/5e76335891850b3d214eaeaa5b25deee/500x500-000000-80-0-0.jpg",
      "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/5e76335891850b3d214eaeaa5b25deee/1000x1000-000000-80-0-0.jpg",
      "md5_image": "5e76335891850b3d214eaeaa5b25deee",
      "genre_id": 116,
      "fans": 16396,
      "release_date": "2020-01-17",
      "record_type": "album",
      "tracklist": "https://api.deezer.com/album/126665082/tracks",
      "explicit_lyrics": true,
      "type": "album"
    }
  ],
  "total": 27,
  "next": "https://api.deezer.com/artist/339209/albums?limit=5&index=5"
}
const artistTopTracks = {
  "data": [
    {
      "id": 1591188152,
      "readable": true,
      "title": "No Role Modelz",
      "title_short": "No Role Modelz",
      "title_version": "",
      "link": "https://www.deezer.com/track/1591188152",
      "duration": 292,
      "rank": 827384,
      "explicit_lyrics": true,
      "explicit_content_lyrics": 1,
      "explicit_content_cover": 1,
      "preview": "https://cdns-preview-f.dzcdn.net/stream/c-f29c6c8e9ba389091119d4540c5e4c00-4.mp3",
      "contributors": [
        {
          "id": 339209,
          "name": "J. Cole",
          "link": "https://www.deezer.com/artist/339209",
          "share": "https://www.deezer.com/artist/339209?utm_source=deezer&utm_content=artist-339209&utm_term=0_1661645001&utm_medium=web",
          "picture": "https://api.deezer.com/artist/339209/image",
          "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/56x56-000000-80-0-0.jpg",
          "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/250x250-000000-80-0-0.jpg",
          "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/500x500-000000-80-0-0.jpg",
          "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/1000x1000-000000-80-0-0.jpg",
          "radio": true,
          "tracklist": "https://api.deezer.com/artist/339209/top?limit=50",
          "type": "artist",
          "role": "Main"
        }
      ],
      "md5_image": "f45c8916970597d390313833a9db0c61",
      "artist": {
        "id": 339209,
        "name": "J. Cole",
        "tracklist": "https://api.deezer.com/artist/339209/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": 280445562,
        "title": "2014 Forest Hills Drive",
        "cover": "https://api.deezer.com/album/280445562/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/f45c8916970597d390313833a9db0c61/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/f45c8916970597d390313833a9db0c61/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/f45c8916970597d390313833a9db0c61/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/f45c8916970597d390313833a9db0c61/1000x1000-000000-80-0-0.jpg",
        "md5_image": "f45c8916970597d390313833a9db0c61",
        "tracklist": "https://api.deezer.com/album/280445562/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": 1048706662,
      "readable": true,
      "title": "She Knows",
      "title_short": "She Knows",
      "title_version": "",
      "link": "https://www.deezer.com/track/1048706662",
      "duration": 296,
      "rank": 626893,
      "explicit_lyrics": true,
      "explicit_content_lyrics": 1,
      "explicit_content_cover": 1,
      "preview": "https://cdns-preview-b.dzcdn.net/stream/c-b27b4496220c026ed3dd75b60428e5e5-4.mp3",
      "contributors": [
        {
          "id": 339209,
          "name": "J. Cole",
          "link": "https://www.deezer.com/artist/339209",
          "share": "https://www.deezer.com/artist/339209?utm_source=deezer&utm_content=artist-339209&utm_term=0_1661645001&utm_medium=web",
          "picture": "https://api.deezer.com/artist/339209/image",
          "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/56x56-000000-80-0-0.jpg",
          "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/250x250-000000-80-0-0.jpg",
          "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/500x500-000000-80-0-0.jpg",
          "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/1000x1000-000000-80-0-0.jpg",
          "radio": true,
          "tracklist": "https://api.deezer.com/artist/339209/top?limit=50",
          "type": "artist",
          "role": "Main"
        },
        {
          "id": 4407772,
          "name": "Amber Coffman",
          "link": "https://www.deezer.com/artist/4407772",
          "share": "https://www.deezer.com/artist/4407772?utm_source=deezer&utm_content=artist-4407772&utm_term=0_1661645001&utm_medium=web",
          "picture": "https://api.deezer.com/artist/4407772/image",
          "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/13463206cb5497d37064ff59c8109142/56x56-000000-80-0-0.jpg",
          "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/13463206cb5497d37064ff59c8109142/250x250-000000-80-0-0.jpg",
          "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/13463206cb5497d37064ff59c8109142/500x500-000000-80-0-0.jpg",
          "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/13463206cb5497d37064ff59c8109142/1000x1000-000000-80-0-0.jpg",
          "radio": true,
          "tracklist": "https://api.deezer.com/artist/4407772/top?limit=50",
          "type": "artist",
          "role": "Featured"
        },
        {
          "id": 427690,
          "name": "Cults",
          "link": "https://www.deezer.com/artist/427690",
          "share": "https://www.deezer.com/artist/427690?utm_source=deezer&utm_content=artist-427690&utm_term=0_1661645001&utm_medium=web",
          "picture": "https://api.deezer.com/artist/427690/image",
          "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/2279ac1f8aa2b2c9e2863d015306df80/56x56-000000-80-0-0.jpg",
          "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/2279ac1f8aa2b2c9e2863d015306df80/250x250-000000-80-0-0.jpg",
          "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/2279ac1f8aa2b2c9e2863d015306df80/500x500-000000-80-0-0.jpg",
          "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/2279ac1f8aa2b2c9e2863d015306df80/1000x1000-000000-80-0-0.jpg",
          "radio": true,
          "tracklist": "https://api.deezer.com/artist/427690/top?limit=50",
          "type": "artist",
          "role": "Featured"
        }
      ],
      "md5_image": "b5d615380b2d9d63849bbac3152590cf",
      "artist": {
        "id": 339209,
        "name": "J. Cole",
        "tracklist": "https://api.deezer.com/artist/339209/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": 166562802,
        "title": "Born Sinner (Deluxe Version)",
        "cover": "https://api.deezer.com/album/166562802/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/b5d615380b2d9d63849bbac3152590cf/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/b5d615380b2d9d63849bbac3152590cf/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/b5d615380b2d9d63849bbac3152590cf/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/b5d615380b2d9d63849bbac3152590cf/1000x1000-000000-80-0-0.jpg",
        "md5_image": "b5d615380b2d9d63849bbac3152590cf",
        "tracklist": "https://api.deezer.com/album/166562802/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": 622457832,
      "readable": true,
      "title": "MIDDLE CHILD",
      "title_short": "MIDDLE CHILD",
      "title_version": "",
      "link": "https://www.deezer.com/track/622457832",
      "duration": 213,
      "rank": 741087,
      "explicit_lyrics": true,
      "explicit_content_lyrics": 1,
      "explicit_content_cover": 1,
      "preview": "https://cdns-preview-5.dzcdn.net/stream/c-56714d5df0c66c3d1fefe175d1f704a3-6.mp3",
      "contributors": [
        {
          "id": 339209,
          "name": "J. Cole",
          "link": "https://www.deezer.com/artist/339209",
          "share": "https://www.deezer.com/artist/339209?utm_source=deezer&utm_content=artist-339209&utm_term=0_1661645001&utm_medium=web",
          "picture": "https://api.deezer.com/artist/339209/image",
          "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/56x56-000000-80-0-0.jpg",
          "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/250x250-000000-80-0-0.jpg",
          "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/500x500-000000-80-0-0.jpg",
          "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/1000x1000-000000-80-0-0.jpg",
          "radio": true,
          "tracklist": "https://api.deezer.com/artist/339209/top?limit=50",
          "type": "artist",
          "role": "Main"
        }
      ],
      "md5_image": "9a0366a17a65c8479901b292a4077507",
      "artist": {
        "id": 339209,
        "name": "J. Cole",
        "tracklist": "https://api.deezer.com/artist/339209/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": 85306262,
        "title": "MIDDLE CHILD",
        "cover": "https://api.deezer.com/album/85306262/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/9a0366a17a65c8479901b292a4077507/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/9a0366a17a65c8479901b292a4077507/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/9a0366a17a65c8479901b292a4077507/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/9a0366a17a65c8479901b292a4077507/1000x1000-000000-80-0-0.jpg",
        "md5_image": "9a0366a17a65c8479901b292a4077507",
        "tracklist": "https://api.deezer.com/album/85306262/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": 1591188092,
      "readable": true,
      "title": "Wet Dreamz",
      "title_short": "Wet Dreamz",
      "title_version": "",
      "link": "https://www.deezer.com/track/1591188092",
      "duration": 239,
      "rank": 673476,
      "explicit_lyrics": true,
      "explicit_content_lyrics": 1,
      "explicit_content_cover": 1,
      "preview": "https://cdns-preview-0.dzcdn.net/stream/c-0e22e95deeb4ba4bcf70e5a41de3bdbe-4.mp3",
      "contributors": [
        {
          "id": 339209,
          "name": "J. Cole",
          "link": "https://www.deezer.com/artist/339209",
          "share": "https://www.deezer.com/artist/339209?utm_source=deezer&utm_content=artist-339209&utm_term=0_1661645001&utm_medium=web",
          "picture": "https://api.deezer.com/artist/339209/image",
          "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/56x56-000000-80-0-0.jpg",
          "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/250x250-000000-80-0-0.jpg",
          "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/500x500-000000-80-0-0.jpg",
          "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/1000x1000-000000-80-0-0.jpg",
          "radio": true,
          "tracklist": "https://api.deezer.com/artist/339209/top?limit=50",
          "type": "artist",
          "role": "Main"
        }
      ],
      "md5_image": "f45c8916970597d390313833a9db0c61",
      "artist": {
        "id": 339209,
        "name": "J. Cole",
        "tracklist": "https://api.deezer.com/artist/339209/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": 280445562,
        "title": "2014 Forest Hills Drive",
        "cover": "https://api.deezer.com/album/280445562/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/f45c8916970597d390313833a9db0c61/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/f45c8916970597d390313833a9db0c61/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/f45c8916970597d390313833a9db0c61/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/f45c8916970597d390313833a9db0c61/1000x1000-000000-80-0-0.jpg",
        "md5_image": "f45c8916970597d390313833a9db0c61",
        "tracklist": "https://api.deezer.com/album/280445562/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": 567564852,
      "readable": true,
      "title": "Work Out",
      "title_short": "Work Out",
      "title_version": "",
      "link": "https://www.deezer.com/track/567564852",
      "duration": 235,
      "rank": 704971,
      "explicit_lyrics": true,
      "explicit_content_lyrics": 1,
      "explicit_content_cover": 1,
      "preview": "https://cdns-preview-5.dzcdn.net/stream/c-596a2e475ff638205588cb69219b3457-6.mp3",
      "contributors": [
        {
          "id": 339209,
          "name": "J. Cole",
          "link": "https://www.deezer.com/artist/339209",
          "share": "https://www.deezer.com/artist/339209?utm_source=deezer&utm_content=artist-339209&utm_term=0_1661645001&utm_medium=web",
          "picture": "https://api.deezer.com/artist/339209/image",
          "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/56x56-000000-80-0-0.jpg",
          "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/250x250-000000-80-0-0.jpg",
          "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/500x500-000000-80-0-0.jpg",
          "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/1000x1000-000000-80-0-0.jpg",
          "radio": true,
          "tracklist": "https://api.deezer.com/artist/339209/top?limit=50",
          "type": "artist",
          "role": "Main"
        }
      ],
      "md5_image": "b6462109ad10bea8f986bfb9394329d8",
      "artist": {
        "id": 339209,
        "name": "J. Cole",
        "tracklist": "https://api.deezer.com/artist/339209/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": 75511252,
        "title": "Cole World: The Sideline Story",
        "cover": "https://api.deezer.com/album/75511252/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/b6462109ad10bea8f986bfb9394329d8/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/b6462109ad10bea8f986bfb9394329d8/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/b6462109ad10bea8f986bfb9394329d8/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/b6462109ad10bea8f986bfb9394329d8/1000x1000-000000-80-0-0.jpg",
        "md5_image": "b6462109ad10bea8f986bfb9394329d8",
        "tracklist": "https://api.deezer.com/album/75511252/tracks",
        "type": "album"
      },
      "type": "track"
    }
  ],
  "total": 100,
  "next": "https://api.deezer.com/artist/339209/top?limit=5&index=5"
}
