import React from "react";
import { useRouter } from "next/router";

const Room = () => {
  const router = useRouter();
  const { id } = router.query;
  return <h3>Room</h3>;
};
export default Room;
