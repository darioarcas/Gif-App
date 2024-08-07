




const GetGifs = async(categoria)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=2mDs2vqE1xoRWP52u9pKWRNtj28zd0WI`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map((img)=>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}

export default GetGifs;