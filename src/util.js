// const paginate = (followers) => {
//     const itemsPerPage = 10
//     const numberOfPages = Math.ceil(followers.length / itemsPerPage)

//     const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
//         const start = index * itemsPerPage
//         return followers.slice(start, start + itemsPerPage)
//     })

//     return newFollowers
// }


// export default paginate


// const itemsPerPage = 10
//         const numberOfPages = Math.ceil(data.length / itemsPerPage)
//         const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
//             const start = index * itemsPerPage
//             return data.slice(start, start + itemsPerPage)
//         })