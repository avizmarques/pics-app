export type Photo = {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
  };
  downloads?: number;
  location: {
    country?: string;
  };
  likes?: number;
  user: {
    name: string;
  };
};

export type Favorite = {
  id: string;
  url: string;
};
