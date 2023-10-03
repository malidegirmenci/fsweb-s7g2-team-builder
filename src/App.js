import './App.css';
import Form from './components/Form';
import MemberListing from './components/MemberListing';
import { useState } from 'react';
function App() {
  const [memberList, setMemberList] = useState([]);
  const addMember = (member) => {
        const newMemberList = [...memberList, member];
        setMemberList(newMemberList);
  }
  return (
    <div className="App">
      <MemberListing memberList={memberList}></MemberListing>
      <Form addMember = {addMember}></Form>
    </div>
  );
}

export default App;
