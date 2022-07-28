import React, { useState } from 'react';
import "./StudentForm.css"
import validator from 'validator';



const StudentForm = () => {
    const [firstnameErr, setFirstnameErr] = useState(false);
    const [lastnameErr, setLastnameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [addressErr, setAddressErr] = useState(false);
    const [mobileErr, setMobileErr] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        let fname=document.getElementById("fid").value;
        let lname=document.getElementById("lid").value;
        let ename=document.getElementById("eid").value;
        let aname=document.getElementById("aid").value;
        let mnum=document.getElementById("mid").value;

        if(validator.isEmpty(fname)||validator.isEmpty(lname)||validator.isEmpty(ename)||validator.isEmpty(aname)||validator.isEmpty(mnum)){
            alert("Please fill all fields");
        }
        else
        {
            alert("Student information stored successfully!!!");
        }

    }
    function handleFirstnameChange(e) {
        // setFirstname(e.target.value);
        let item=e.target.value;
        if(!validator.isAlpha(item))
        {
            setFirstnameErr(true);
        }
        else
        {
            setFirstnameErr(false);
        }
    }
    function handleLastnameChange(e) {
        // setLastname(e.target.value);
        let item=e.target.value;
        if(!validator.isAlpha(item))
        {
            setLastnameErr(true);
        }
        else
        {
            setLastnameErr(false);
        }
    }
    function handleEmailChange(e) {
        // setEmail(e.target.value);
        let email=e.target.value;
        if(!validator.isEmail(email))
        {
            setEmailErr(true);
        }
        else
        {
            setEmailErr(false);
        }
    }
    function handleAddressChange(e) {
        // setAddress(e.target.value);
        let address=e.target.value;
        if(!validator.isAlphanumeric(address))
        {
            setAddressErr(true);
        }
        else
        {
            setAddressErr(false);
        }
    }
    function handleMobileChange(e) {
        // setMobile(e.target.value);
        let mobile=e.target.value;
        if(!validator.isMobilePhone(mobile))
        {
            setMobileErr(true);
        }
        else
        {
            setMobileErr(false);
        }
    }
    return (
        <div>
            <div className="mainform">
                <h1>Student Form</h1>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tr>
                            <td>
                                <label htmlFor="firstname">First Name:</label>
                            </td>
                            <td>
                                <input type="text" name="firstname" id="fid" required onChange={(e) => { handleFirstnameChange(e) }} />{firstnameErr ? <span className="err-span">Please Enter First name</span> : ""}
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label htmlFor="lastname">Last Name:</label>
                            </td>
                            <td>
                                <input type="text" name="lastname" id="lid" required onChange={(e) => { handleLastnameChange(e) }} />{lastnameErr ? <span className="err-span"> Please Enter Last name</span> : ""}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="email">Email:</label>
                            </td>
                            <td>
                                <input type="text" id="eid" required onChange={(e) => { handleEmailChange(e) }} />{emailErr ? <span className="err-span"> Please Enter Valid email</span> : ""}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="address">Address:</label>
                            </td>
                            <td>
                                <input type="text" id="aid" required onChange={(e) => { handleAddressChange(e) }} />{addressErr ? <span className="err-span"> Please Enter Address</span> : ""}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="mobile">Mobile Number:</label>
                            </td>
                            <td>
                                <input type="text" id="mid" maxLength={10} required onChange={(e) => { handleMobileChange(e) }} />{mobileErr ? <span className="err-span"> Please Enter valid mobile number</span> : ""}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                {/* <input className="" type="submit" value="Submit" /> */}
                                <button className="submit-btn" onClick={handleSubmit}>Submit</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    );
}

export default StudentForm;
