import { Galleryinfo } from "../structures/Galleryinfo"
import { Info } from "../structures/Info"
import { Images } from "../structures/Images"
import { hitomiGalleryinfo, hitomiImages, hitomiIndex, hitomiInfo, hitomiIntegrated, hitomiList } from "../utils/endpoints"
import { IntegratedPayload, ListPayload } from "../type/hitomi"

export class Saebasol {
    token: string
    constructor (token: string) {
        this.token = token
    }

    private async getRespone(url: string): Promise<any | undefined> {
        const data = await fetch(url, { headers: { Authorization: this.token } })
        if (!data.ok) return undefined
        return data.json().then(d => d)
    }
    
    async getGalleryinfo(id: number): Promise<Galleryinfo | undefined>  {
        return await this.getRespone(hitomiGalleryinfo(id)).then(d => { 
            if (d !== undefined) return new Galleryinfo(d)
            return undefined
        })
    }
    async getInfo(id: number): Promise<Info | undefined>  {
        return await this.getRespone(hitomiInfo(id)).then(d => { 
            if (d !== undefined) return new Info(d)
            return undefined
        })
    }
    async getImages(id: number): Promise<Images | undefined>  {
        return await this.getRespone(hitomiImages(id)).then(d => { 
            if (d !== undefined) return new Images(d)
            return undefined
        })
    }
    async getIndex(): Promise<any>  {
        return await this.getRespone(hitomiIndex).then(d => { 
            if (d !== undefined) return d
            return undefined
        })
    }
    async getList(list: number): Promise<ListPayload | undefined>  {
        return await this.getRespone(hitomiList(list)).then(d => { 
            if (d !== undefined) return d
            return undefined
        })
    }
    async getIntegrated(num: number): Promise<IntegratedPayload | undefined>  {
        return await this.getRespone(hitomiIntegrated(num)).then(d => { 
            if (d !== undefined) return d
            return undefined
        })
    }
}