import React, { useState } from "react";
import { Box, FlatList, Image, Text } from "native-base";
import data from "../data";
import { Header } from "../components";

const RenderItem = ({item}) => {

    return (
        <Box h={400} alignSelf={"center"} w={"45%"} m={3} p={5} bg={"white"} borderRadius={9} elevation={15} shadow={5} mb={"8"}>
            <Box h={"28px"} w={120} bg={"#2BAA9B"} justifyContent={"center"} alignSelf={"center"} alignItems={"center"} borderRadius={"6px"} >
                <Text fontSize={14} fontWeight={"bold"} color={"white"}>{item.item}</Text>
            </Box>
            <Image alt="Item Image" source={item.image} w={"100%"} h={"85%"} resizeMode="contain"  />
            <Text fontSize={18} color={"green"} bold alignSelf={"center"}>{item.price}</Text>
        </Box>
    );
}

const SewaAlat = () => {
    const [columns] = useState(2);


    return(
        <>
            <Header title={"Sewa Alat Outdoor"} withBack={true}/>
            <FlatList 
                data={data}
                renderItem={RenderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={true}
                numColumns={columns}
                p={4}
            />
        </>
    )
}

export default SewaAlat;