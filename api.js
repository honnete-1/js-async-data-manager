export function fetchPosts(){
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response =>response.json())
    .then(data => {
        console.log(data)
        return data
})

.catch(error => {
    console.log('Failed to fetch posts: ', error)
    return []
})
}
