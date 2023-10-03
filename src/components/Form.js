import React, {useState} from "react";
export default function Form(props) {
    const [member, setMember] = useState({username:"", email:"", role:""});
    const changeHandler = (e) => {
        console.log("changeEvent", e.target.name, e.target.value);
        const newMemberState = {
            ...member, [e.target.name]: e.target.value, id:Date.now(),
        };
        setMember(newMemberState);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        props.addMember(member);
    }
    return(
        <>
            <form onSubmit={submitHandler}>
                <label>
                    Username
                    <input value={member.username} onChange={(e)=> changeHandler(e)} name="username" type="text"></input>
                </label>
                <label>
                    Email
                    <input value={member.email} onChange={(e)=> changeHandler(e)} name="email" type="email"></input>
                </label>
                <label>
                    Role
                    <input value={member.role} onChange={(e)=> changeHandler(e)} name="role" type="text"></input>
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}