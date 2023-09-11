
import './book.css'

export default function Book({book})
{
    // distructure book er object er property
    const {name,author} = book;
    return(
        <div className="book">
            <h3>Book Name : {name}</h3>
            <h4>Book Author : {author}</h4>

            </div>
    )
}