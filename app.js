import {fetchPosts} from './api.js'
import saveToLocal from './storage.js'

async function initApp(){
    const posts = await fetchPosts()
    const top5 = posts.slice(0,5)

    top5.forEach((post,index)=> {
        console.log(`Post ${index + 1}: ${post.title} - ${post.body}`)
    })
await saveToLocal(top5)
}
initApp()