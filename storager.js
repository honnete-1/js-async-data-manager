// Step 1 — default export + async function
export default async function saveToLocal(data) {

    // Step 2 — safety net
    try {

        // Step 3 — convert array to string and save
        localStorage.setItem("userPosts", JSON.stringify(data))

    // Step 4 — catch any errors
    } catch(err) {
        console.error("failed to store data", err)
    }
}