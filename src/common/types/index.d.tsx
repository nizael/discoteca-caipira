export interface IAlbum {
  id: number
  name: string
  release_year: number
  artists: string
  cover_image_url: string
  active: boolean
  created_at: string
  updated_at: string
}

export interface ITrail {
  id: number
  name: string
  duration: string
  author: string
  album_id: number
  active: boolean
  created_at: string
  updated_at: string
}