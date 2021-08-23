// Common
interface Info {
  href: string;
  total: number;
}

interface Properties {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
}

// UserInfo
export interface UserInfo {
  country: string;
  display_name: string;
  email: string;
  external_urls: ExternalUrls;
  followers: Info;
  href: string;
  id: string;
  images: Image[];
  product: string;
  type: string;
  uri: string;
}

interface Image {
  width?: number | null;
  height?: number | null;
  url: string;
}

// Playlists
export interface Playlists extends Properties {
  items: Playlist[];
}

interface ExternalUrls {
  spotify: string;
}

interface Owner {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
  name: string;
}

export interface Playlist {
  collaborative: boolean;
  description?: string;
  external_urls: ExternalUrls;
  followers: Info;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  public: boolean;
  snapshot_id: string;
  tracks: Info;
  type: string;
  uri: string;
}

export interface PlaylistTrack {
  added_at: string;
  added_by: Owner;
  is_local: boolean;
  track: Track;
}

interface PlaylistTracks extends Properties {
  items: PlaylistTrack[];
}

export interface PlaylistById {
  tracks: PlaylistTracks;
  type: string;
  uri: string;
}

// Tracks
export interface Tracks {
  tracks: Track[];
}

export interface Track {
  album: Album;
  artists: Owner[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

interface ExternalIds {
  isrc: string;
}

interface Album {
  album_type: string;
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  type: string;
  uri: string;
}
