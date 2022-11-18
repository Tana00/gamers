export interface SidebarMenuInterface {
  label: string;
  link: string;
  icon: string;
}

export interface GameInterface {
  image: string;
  userId: number;
  game: string;
  playtime: number;
  genre: string;
  platforms: any[];
}
