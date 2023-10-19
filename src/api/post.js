const BACKEND_URL = "http://hn.algolia.com";

export async function getPostBySearch(query){
    const endpoint = BACKEND_URL+`/api/v1/search?query=${query}`;
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
}


export async function getPostDetail(postId){
    const endpoint = BACKEND_URL+`/api/v1/items/${postId}`;
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
}