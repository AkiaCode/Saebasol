import { Rest } from "../models/rest.ts"


const SaidbySoloHatesThisNumbers = [1809408, 1496588, 1808376]

const test = await new Rest().getGalleryinfo(SaidbySoloHatesThisNumbers[1])
console.log(test?.status)
const test1 = await new Rest().getInfo(SaidbySoloHatesThisNumbers[0])
console.log(test1?.picture)
const test2 = await new Rest().getImages(SaidbySoloHatesThisNumbers[0])
if (test2?.images !== undefined)
console.log(test2?.images[0])
const test4 = await new Rest().getIndex()
console.log(test4[0])
const test5 = await new Rest().getList(1)
console.log(test5?.status)
const test6 = await new Rest().getIntegrated(SaidbySoloHatesThisNumbers[0])
console.log(test6?.data[0].status)