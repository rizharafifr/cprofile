import React, { useState } from "react";

const useNavbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return {
    active,
    handleClick,
  };
};

export default useNavbar;
