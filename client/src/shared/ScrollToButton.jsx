import styled from "styled-components";
import { useState, useEffect } from "react";

  
  const ScrollToTopButton = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; /*현재 페이지 세로 스크롤 위치*/
      const threshold = 200;
      const shouldShow = scrollY > threshold;
      setShowScrollButton(shouldShow);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

    return (
      <ScrollButton show={showScrollButton}  id="scroll-top-button" onClick={scrollToTop}>
        ▲
      </ScrollButton>
    );
  };
  
  export default ScrollToTopButton;

  const ScrollButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  display: ${(props) =>
    props.show
      ? "inline"
      : "none"}; /* showScrollButton 값에 따라 동적으로 설정 */
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  z-index: 999;

  &:hover {
    background-color: #333;
  }
`;

 const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

