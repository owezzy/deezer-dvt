export interface ArtistSearchResult {
  id: string,
  readable: true,
  title: string,
  link: string,
  preview: string,
  artist: Artist
  album: Album,
  "type": string
}

export interface Artist {
  id: string;
  name: string;
  link: string;
  picture: string;
  tracklist: string;
  type: string;
}

export interface Album {
  id: string;
  title: string;
  cover: string;
  tracklist: string;
  type: string;
}
