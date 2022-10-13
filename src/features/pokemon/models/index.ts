export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: {
    is_hidden: true;
    slot: number;
    ability: {
      url: string;
      endpoint?: string;
    };
  }[];
  forms: any[];
  game_indices: any[];
  held_items: any[];
  location_area_encounters: string;
  moves: any[];
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    other: any;
    versions: any;
  };
  species: {
    url: string;
    endpoint?: string;
  };
  stats: {
    stat: {
      url: string;
      endpoiint?: string;
    };
    effort: number;
    base_stat: number;
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
}
