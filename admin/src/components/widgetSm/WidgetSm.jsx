import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        console.log("res.data확인",res.data);
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);
  
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={
                user.img ||
                "https://i.namu.wiki/i/tt0mLqnhpbkJjJFnaDmr4PiquIB1GYmEyvYsTaCq2GOgkJDN1hTENObqYp2UNAOidQ_Wh3fwSpXZix_Y2LoH1KMaqLFP-CzDvVlf-r_t0QMri4iBk49BqvYCXF_BtvaHDvij-yib7EbN2NtnApSuZQ.webp"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}