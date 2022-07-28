export function Entry(props) {


    return <div>
        <h2>{props.entry.title}</h2>
        <h3>{props.entry.subject}</h3>
        <h4>{props.entry.date}</h4>
        <p>{props.entry.content}</p>
        <p>{props.entry.rating}</p>

        <button onClick={()=>{props.delete(props.entry.id)}}>Delete</button>
        <button>Edit</button>
    </div>


}
