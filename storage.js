// default export + async function
export default async function saveToLocal(data) {

    //safety net
    try {

        // convert array to string and save
        localStorage.setItem("userPosts", JSON.stringify(data))

    // catch any errors
    } catch(err) {
        console.error("failed to store data", err)
    }
}