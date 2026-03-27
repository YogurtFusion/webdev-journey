export default async function Page({params}){
    const {val} = await params
    console.log(val);
    return <div>I'm about to check console</div>
    
}