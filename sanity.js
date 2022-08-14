import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
const client =sanityClient({
    projectId:'r4kz1yn5',
    dataset:'production',
    useCdn: true,
    apiVersion:'2021-10-21',
    })

const builder =ImageUrlBuilder(client);
export const urlFor = (source)=>builder.image(source);
// Run This to add exception for localhost 3000 Cors policy
//sanity cors add http://localhost:3000

export default client;