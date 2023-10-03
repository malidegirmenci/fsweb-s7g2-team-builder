function MemberListing(props) {
    const {memberList} = props;
    return (
        <div className="memberListing">
            {memberList.length === 0 ?
                <div>We dont have member</div> :
                <>
                    <h3>Members</h3>
                    <ul>
                        {memberList.map((member) => {
                            return <li key={member.id}>
                                <a href={`mailto:${member.email}`}>{member.username}</a>, ({member.role})
                            </li>
                        })}
                    </ul>
                </>
            }
        </div>
    );
}

export default MemberListing;
