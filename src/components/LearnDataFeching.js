async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return res.json()
}
const LearnDataFeching = async  () => {
    const data = await getData()
    console.log("Data:", data);
  return (
    <div>
      {/* <div>LearnDataFetching</div> */}
      {
       
        data.map((post, id) => (
            <div class="card" key={id}>
            <div class="card-header">
                {post.title}
            </div>
            <div class="card-body">
              <p class="card-text">{post.body}</p>
        
            </div>
          </div>
        ))
      }
    </div>


  )
}

export default LearnDataFeching