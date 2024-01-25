async function TestFetch(){
    let res = await fetch('https://api.vercel.app/products/1');
    let data = await res.json();

    return <h1>{data.stock}</h1>;

}

export default function Page(){
    return (<section><h1>TestFetch</h1><TestFetch/></section>);
}