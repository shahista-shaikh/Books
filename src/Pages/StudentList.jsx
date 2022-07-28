import React from 'react';
import './StudentList.css';

const StudentList = () => {
    const students=[
        {fname:'Shahrukh', lname:'Sayyed', email:'shahrukh111@gmail.com', address:'Kharadi Pune', mobile:'8956231547'},
        {fname:'Shahista', lname:'Shaikh', email:'shahista611@gmail.com', address:'Kharadi Pune', mobile:'8956289547'},
        {fname:'Sneha', lname:'Singh', email:'sneha777@gmail.com', address:'Bihar', mobile:'9632231547'},
        {fname:'Komal', lname:'Sinha', email:'komal333@gmail.com', address:'Aurangabad', mobile:'8956151547'}
        
    ]
    return (
        <div>
            <table align='center' className="student-table">
                <caption>Student List</caption>
                <tr className="student-tr">
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Mobile No.</th>
                </tr>
                {
                    students.map((item,i)=>
                    <tr className="student-tr" key={i}>
                    <td>{i+1}</td>
                    <td>{item.fname}</td>
                    <td>{item.lname}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>{item.mobile}</td>
                </tr>
                    )
                }
                
                

            </table>
        </div>
    );
}

export default StudentList;
