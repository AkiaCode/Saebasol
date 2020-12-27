import { InfoPayload, ValuePayload } from "../type/hitomi"
import { hitomiProxy } from "../utils/endpoints"
import { Base } from "./Base"

export class Info extends Base {
    status: number;
    title: ValuePayload;
    galleryid: string;
    thumbnail: string;
    artist: ValuePayload[];
    group: ValuePayload[];
    type: ValuePayload;
    series: ValuePayload[];
    characters: ValuePayload[];
    tags: ValuePayload[];
    language: ValuePayload;
    constructor(data: InfoPayload) {
        super(data)
        this.status = data.status
        this.title = data.title
        this.galleryid = data.galleryid
        this.thumbnail = data.thumbnail
        this.artist = data.artist
        this.group = data.group
        this.type = data.type
        this.language = data.language
        this.series = data.series
        this.characters = data.characters
        this.tags = data.tags
    }

    get picture() : string {
        return hitomiProxy(this.thumbnail)
    }
}