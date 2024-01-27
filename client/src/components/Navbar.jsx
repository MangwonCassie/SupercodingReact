import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { logout } from "../redux/userRedux";




const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: none;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const quantity = useSelector(state => state.cart.quantity);
  const navigate = useNavigate();


  const handleAdminClick = () => {
    // 어드민 탭 클릭 시 어드민 프로젝트로 이동
    window.location.href = '/admin/dashboard';
  };



  const handleSignInClickToLogin = () => {
    //NOTE: SIGN IN 클릭 시 /login 으로 이동
    navigate('/login');
  };

  const handleSignInClickToRegister = () => {
    //NOTE: SIGN IN 클릭 시 /login 으로 이동
    navigate('/register');
  };



  const handleLogout = () => {
    // 로그아웃 액션 디스패치
    dispatch(logout());
  };


  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
        <LogoLink to="/">
            <Logo>Cassie</Logo>
          </LogoLink>
        </Center>
        <Right>
          {user ? (
            <>
              {/* 로그인 된 경우에 표시되어야 할 JSX 코드 */}
              {user.isAdmin && <Link to="/admin/dashboard"><MenuItem onClick={handleAdminClick}>ADMIN</MenuItem></Link>}
              <MenuItem onClick={handleLogout}>LOGOUT</MenuItem>
            </>
          ) : (
            <>
              <MenuItem onClick={handleSignInClickToRegister} >REGISTER</MenuItem>
              <MenuItem onClick={handleSignInClickToLogin}>SIGN IN</MenuItem>
            </>
          )}
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
