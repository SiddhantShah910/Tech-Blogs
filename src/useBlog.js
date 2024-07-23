const useBlog = (title, body, author) => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('');

    return ( 
        <>
        <label> Blog title:</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
        <label> Blog body:</label>
        <textarea required value={body} onChange={(e) => setBody(e.target.value)}/>
        <label value={author} onChange={(e) => setAuthor(e.target.value)}>Blog author:</label>
        <select>
            <option value='mario'>mario</option>
            <option value='yoshi'>yoshi</option>
        </select>
        <button>Add Blog</button>
        </>
     );
}
 
export default useBlog;