export default async function Page({params}){
// throw new Error("we are coocked")
    const {slug: rawSlug} = await params
    const slug = decodeURIComponent(rawSlug)
    let lan = ["python", "JavaScript", "Java", "cpp", "cs", "c#"]// # = %23
    if (lan.includes(slug)){
        return  <div>My post: {slug}</div>
    }
    else {
        return <div>Post not found 🍊🍊</div>
    }
}