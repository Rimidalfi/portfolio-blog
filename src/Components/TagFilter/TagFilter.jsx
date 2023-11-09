

const client = contentful.createClient({
    space: '<space_id>',
    environment: '<environment_id>',
    accessToken: '<content_delivery_api_key>'
   })
   
   client.getEntries({
    content_type: '<content_type_id>',
    select: 'sys.id,fields.title,fields.tags'
   })
   .then((response) => console.log(response.items))
   .catch(console.error)

   client.getEntries({
    content_type: '<content_type_id>',
    'fields.tags[match]': '<tag>'
   })
   .then((response) => console.log(response.items))
   .catch(console.error)

   export default function Posts() {
    const [posts, isLoading] = usePosts()
    const renderPosts = () => {
      if (isLoading) return <p>Loading...</p>
      return posts.map(post => (
        <div key={post.sys.id}>
          <h2>{post.fields.title}</h2>
          {post.fields.tags.map(tag => <span>{tag}</span>)}
        </div>
      ))
    }
    return (
      <div>
        <h1>Blogposts</h1>
        {renderPosts()}
      </div>
    )
   }
   