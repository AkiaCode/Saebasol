import { Image, ImagesPayload } from "../type/hitomi"
import { Base } from "./Base"

export class Images extends Base {
    images?: Image[];
    constructor(data: ImagesPayload) {
        super(data)
        this.images = data?.images
    }
}