export function fetchPosts(){
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response =>response.json())
    .then(data => {
        return data
})

.catch(error => {
    console.log('Failed to fetch posts: ', error)
    return []
})
}
