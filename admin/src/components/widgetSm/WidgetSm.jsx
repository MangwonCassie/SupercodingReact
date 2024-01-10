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
                "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnamu.wiki%2Fw%2F%25EC%2596%2591%25ED%258C%258C%25EC%25BF%25B5%25EC%2595%25BC&psig=AOvVaw3U1ykJZPikExIzXGEgYxW1&ust=1704943262071000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCJDDn97u0YMDFQAAAAAdAAAAABAE"
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