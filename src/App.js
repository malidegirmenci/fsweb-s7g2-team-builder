import './App.css';
import Form from './components/Form';
import MemberListing from './components/MemberListing';
import { useState } from 'react';
function App() {
  const [memberList, setMemberList] = useState([{ username: "Baran", email: "baran@google.com.tr", role: "FullStack Developer" }, {username: "Mehmet Ali", email:"m.alidegirmenci@hotmail.com", role:"FullStack Developer"}]);

  return (
    <div className="App">
      <MemberListing memberList={memberList}></MemberListing>
      <Form></Form>
    </div>
  );
}

export default App;
