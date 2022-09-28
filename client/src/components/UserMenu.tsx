import { Dropdown, Menu } from "antd";
import { Link, useHistory } from "react-router-dom";
import { removeBasket } from "../redux/slice/basketSlice";
import { signOut } from "../redux/slice/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/store/configureStore";

const UserMenu = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { user } = useAppSelector((state) => state.user);

  const signout = () => {
    dispatch(signOut());
    dispatch(removeBasket());
    history.push("/");
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      {user?.roles?.includes("Instructor") && (
        <Menu.Item>
          <Link to="/instructor">Instructor</Link>
        </Menu.Item>
      )}
      <Menu.Item>
        <div onClick={signout}>Logout</div>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu} placement="bottom">
      <div className="dropdown">Menu</div>
    </Dropdown>
  );
};

export default UserMenu;
