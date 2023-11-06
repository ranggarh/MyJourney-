import { Heading, Text, Box, Image, ScrollView } from "native-base";
import { Header } from "../components";

const NewsDetail = ({ route }) => {
  // Get the params
  const params = route.params.item;
  return (
    <>
      <Header title={"News"} withBack="true" />
      <ScrollView>
        <Image  source={{uri: params.image}} w={"full"} h={"48"} alt="Image"/>
        <Box p={"4"} borderBottomColor={"coolGray.300"} borderBottomWidth={1} >
          <Text>{params.date}</Text>
          <Heading>{params.title}</Heading>
        </Box>
        <Box p={"4"}>
          <Text>
            {params.content}
          </Text>
        </Box>
      </ScrollView>
    </>
  );
};

export default NewsDetail;