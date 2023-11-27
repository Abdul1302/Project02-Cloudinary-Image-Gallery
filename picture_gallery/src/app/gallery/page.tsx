import Upload from "./upload"
import cloudinary from "cloudinary"
import View from "./view"

interface MyImage {
    public_id: string,
    tags:string[]
}

const Page = async () => {
    let res = (await cloudinary.v2.search

        .expression("resource_type:image")
        .sort_by("public_id", "desc")
        //.max_results(5)
        .with_field("tags")
        .execute()) as { resources: MyImage[] };
        

    return (
        <>
            <div className="py-4 px-5  flex items-center justify-between">
                <h2 className=" text-3xl font-semibold tracking-tight">
                    Gallery
                </h2>
                <Upload />
            </div>
            <div className="columns-4 gap-4 space-y-4 mx-auto p-5">
                {res.resources.map((item, i) => {
                    return <div key={i} className="break-inside-avoid">
                        <View src={item.public_id} tag={item.tags} />
                    </div>
                })}

            </div>
        </>
    )
}

export default Page