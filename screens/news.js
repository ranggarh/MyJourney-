import { Heading, Center } from "native-base";
import { Header } from "../components";

const News = () => {
  return (
    <>
      <Header title={"Video"} />
      <Center flex={1}>
        <Heading>News</Heading>
      </Center>
    </>
  );
};

export default News;
