import React from 'react';
import './BookData.css';

const BookData = () => {
    const books=[
        {bname:'Clean Code',author:'Robert C. Martin',publisher:'Prentice Hall',borrowed_by:'Sneha Singh',date_of_borrow:'12/3/2022',date_of_return:'12/4/2022'},
        {bname:'Introduction to Algorithms',author:'Thomas H. Cormen',publisher:'The MIT Press',borrowed_by:'',date_of_borrow:'',date_of_return:''},
        {bname:'Code Complete',author:'Steve McConnell',publisher:'Microsoft Press',borrowed_by:'Shahista Shaikh',date_of_borrow:'20/3/2022',date_of_return:'28/4/2022'},
        {bname:'Design Patterns',author:'Erich Gamma',publisher:'Addison-Wesley Professional',borrowed_by:'Shahrukh Sayyed',date_of_borrow:'22/3/2022',date_of_return:'2/5/2022'}
        // {bname:'',author:'',publisher:'',borrowed_by:'',date_of_borrow:'',date_of_return:''},
        // {bname:'',author:'',publisher:'',borrowed_by:'',date_of_borrow:'',date_of_return:''},
        // {bname:'',author:'',publisher:'',borrowed_by:'',date_of_borrow:'',date_of_return:''},
    ]
    return (
        <div>
            <table align='center' className="book-table">
                <caption>Book List</caption>
                <tr className="book-tr">
                    <th>Id</th>
                    <th>Book Name</th>
                    <th>Author</th>
                    <th>Publisher</th>
                    <th>Borrowed by</th>
                    <th>Date of Borrow</th>
                    <th>Expected date of return</th>
                    <th>View</th>
                    <th>Edit</th>
                </tr>
                {
                    books.map((item,i)=>
                    <tr className="book-tr" key={i}>
                    <td>{i+1}</td>
                    <td>{item.bname}</td>
                    <td>{item.author}</td>
                    <td>{item.publisher}</td>
                    <td>{item.borrowed_by}</td>
                    <td>{item.date_of_borrow}</td>
                    <td>{item.date_of_return}</td>
                    <td><button className="btn">View</button></td>
                    <td><button className="btn">Edit</button></td>
                </tr>
                    )
                }                
            </table>
        </div>
    );
}

export default BookData;
