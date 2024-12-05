export interface ArtistsDB {
    query:   string;
    artists: ArtistsClass;
}

export interface ArtistsClass {
    totalCount: number;
    items:      Item[];
    pagingInfo: PagingInfo;
}

export interface Item {
    data: Data;
}

export interface Data {
    uri:     string;
    profile: Profile;
    visuals: Visuals;
}

export interface Profile {
    name: string;
}

export interface Visuals {
    avatarImage: AvatarImage | null;
}

export interface AvatarImage {
    sources: Source[];
}

export interface Source {
    url:    string;
    width:  number;
    height: number;
}

export interface PagingInfo {
    nextOffset: number;
    limit:      number;
}
