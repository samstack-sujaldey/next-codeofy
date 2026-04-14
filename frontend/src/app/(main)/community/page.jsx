import Home from "@/Components/Communitypage/Home";
import Event from "@/Components/Communitypage/Event";
import Spotlight from "@/Components/Communitypage/Spotlight";
import Tool from "@/Components/Communitypage/Tool";
import Card from "@/Components/Communitypage/Card";
import Category from "@/Components/Communitypage/Category";

function Community() {
  return (
    <>
      <Home />
      <Category />
      <Event />
      <Spotlight />
      <Tool />
      <Card />
    </>
  );
}
export default Community;
