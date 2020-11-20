import { Link } from "react-router-dom";
import NavBarTab from "./NavBarTab";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function MainPage() {
  const [alcoolFamily1, setFamilyAlcool1] = useState([]);
  const [alcoolFamily2, setFamilyAlcool2] = useState([]);
  const [alcoolFamily3, setFamilyAlcool3] = useState([]);

  const Header = styled.div`
    height: 600px;
    width: 100%;
    background-color: lightblue;
  `;

  const getAlcool1 = () => {
    axios
      // .get("https://evening-citadel-85778.herokuapp.com:443/whiskey/")
      .get("https://evening-citadel-85778.herokuapp.com/whiskey/?page=2")
      .then((res) => {
        console.log(res);
        setFamilyAlcool1(res.data.results);
      });
  };

  useEffect(() => {
    getAlcool1();
  }, []);

  return (
    <>
      <NavBarTab />
      <Header>MainPage header</Header>
      <Link to={"/Family/Gambino"} alcoolList={alcoolFamily1}>
        <div>
          <div>Photo 1</div>
          <text>FAMILY 1</text>
        </div>
      </Link>
      <Link to={"/Family/Lucchese"} alcoolList={alcoolFamily1}>
        <div>
          <div>Photo 2</div>
          <text>FAMILY 2</text>
        </div>
      </Link>
      <Link to={"/Family/Bonanno"} alcoolList={alcoolFamily1}>
        <div>
          <div>Photo 3</div>
          <text>FAMILY 3</text>
        </div>
      </Link>
    </>
  );
}
export default MainPage;
