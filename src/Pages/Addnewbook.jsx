import React,{useState} from 'react';
import "./Addnewbook.css"
import validator from 'validator';

const Addnewbook = () => {
        const [booknameErr, setbooknameErr] = useState(false);
        const [authorErr, setauthorErr] = useState(false);
        const [publisherErr, setpublisherErr] = useState(false);
        const [no_of_pageErr, setno_of_pageErr] = useState(false);
    
    
        function handleSubmit(e) {
            e.preventDefault();
            let bname=document.getElementById("bid").value;
            let aname=document.getElementById("aid").value;
            let pname=document.getElementById("pid").value;
            let page=document.getElementById("nid").value;
        
    
            if(validator.isEmpty(bname)||validator.isEmpty(aname)||validator.isEmpty(pname)||validator.isEmpty(page)){
                alert("Please fill all fields");
            }
            else
            {
                alert("Student information stored successfully!!!");
            }
    
        }
        function handleBooknameChange(e) {
            // setFirstname(e.target.value);
            let item=e.target.value;
            if(!validator.isAlphanumeric(item))
            {
                setbooknameErr(true);
            }
            else
            {
                setbooknameErr(false);
            }
        }
        function handleAuthornameChange(e) {
            // setLastname(e.target.value);
            let item=e.target.value;
            if(!validator.isAlpha(item))
            {
                setauthorErr(true);
            }
            else
            {
                setauthorErr(false);
            }
        }
        function handlePublisherChange(e) {
            // setEmail(e.target.value);
            let publisher=e.target.value;
            if(!validator.isAlpha(publisher))
            {
                setpublisherErr(true);
            }
            else
            {
                setpublisherErr(false);
            }
        }
        function handleNo_of_pageChange(e) {
            // setAddress(e.target.value);
            let npage=e.target.value;
            if(!validator.isNumeric(npage))
            {
                setno_of_pageErr(true);
            }
            else
            {
                setno_of_pageErr(false);
            }
        }
        
    
    return (
        <div>
            <div className="mainform">
                <h1> New Book Entry</h1>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tr>
                            <td>
                                <label htmlFor="bookname">Book Name:</label>
                            </td>
                            <td>
                                <input type="text" name="bookname" id="bid" required onChange={(e) => { handleBooknameChange(e) }} />{booknameErr ? <span className="err-span">Please Enter Book name</span> : ""}
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label htmlFor="author">Author:</label>
                            </td>
                            <td>
                                <input type="text" name="Author" id="aid" required onChange={(e) => { handleAuthornameChange(e) }} />{authorErr ? <span className="err-span"> Please Enter Author name</span> : ""}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="Publisher">Publisher:</label>
                            </td>
                            <td>
                                <input type="text" id="pid" required onChange={(e) => { handlePublisherChange(e) }} />{publisherErr ? <span className="err-span"> Please Enter Publisher</span> : ""}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="no_of_page">No of page:</label>
                            </td>
                            <td>
                                <input type="text" id="nid" maxLength={5} required onChange={(e) => { handleNo_of_pageChange(e) }} />{no_of_pageErr ? <span className="err-span"> Please Enter No of Page</span> : ""}
                            </td>
                        </tr>
                        
                        <tr>
                            <td colSpan={2}>
                                {/* <input className="" type="submit" value="Submit" /> */}
                                <button className="add-btn" onClick={handleSubmit}>Add</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    );
}

export default Addnewbook;
