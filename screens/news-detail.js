import React from "react";
import { Box, Stack, Heading, HStack, Image, Center, Text, ScrollView, AspectRatio, Pressable } from "native-base";
import Header from '../components/header';

const Greeting = (props) => {
    return (
      <Text fontSize={12} my={1.5} >{props.name}</Text>
    );
};

const NewsDetail = (props) => {
    return (
        <ScrollView>
    <Box>
        <Header title={"Latest News"} withBack="true"/>
        <Box maxW="100%">
            <Box>
            <AspectRatio w="100%" ratio={10/ 7}>
                <Image source={{
                uri: "https://i.pinimg.com/564x/9e/51/8f/9e518f104a7e22f113f3135506c4c38b.jpg"
            }} alt="image" />
            </AspectRatio>
            </Box>
        </Box>
        <Box backgroundColor={"light.100"}>    
            <Stack p="5" h="100%" space={8}>
            <Stack space={6}>
                <Heading size="lg" ml="-1">
                BPBD Lumajang: Awan Panas Erupsi Gunung Semeru Masih Jauh dari Permukiman Warga
                </Heading>
                <Text color={"muted.400"} fontSize="xs" fontWeight="500" ml="-0.5" mt="-3">
                Diterbitkan 09 Nov 2023, 23:59 WIB
                </Text>
            </Stack>
            <Box>
                <Greeting  name="Kepala Bidang Kedaruratan dan Logistik BPBD Lumajang Yudi Cahyono mengatakan awan panas guguran (APG) Gunung Semeru yang kembali erupsi tidak berdampak serius pada warga yang berada di lereng gunung tertinggi di Pulau Jawa itu." />

                <Greeting name="Pada Rabu pukul 10.53 WIB Gunung Semeru kembali erupsi dengan tinggi letusan sekitar 700 meter disertai luncuran awan panas guguran sejauh satu kilometer. Jarak luncur awan panas guguran sejauh satu kilometer ke arah Besuk Kobokan dan hal tersebut masih aman karena jauh dari permukiman, katanya, Kamis (9/11/2023)." />

                <Greeting name="Ia mengatakan BPBD tetap memonitor sejumlah posko pos pantau yang memasang CCTV untuk mengamati aktivitas gunung dengan ketinggian 3.676 meter di atas permukaan laut (mdpl) tersebut." />

                <Greeting name="Gunung Semeru masih berstatus siaga atau Level III, sehingga masyarakat diimbau tidak melakukan aktivitas apapun di sektor tenggara di sepanjang Besuk Kobokan, sejauh 13 km dari puncak atau pusat erupsi." />

                <Greeting name="Di luar jarak tersebut, masyarakat tidak boleh melakukan aktivitas pada jarak 500 meter dari tepi sungai di sepanjang Besuk Kobokan karena berpotensi terlanda perluasan awan panas dan aliran lahar hingga jarak 17 km dari puncak. Masyarakat juga diimbau agar tidak beraktivitas dalam radius lima kilometer dari kawah/puncak Gunung Api Semeru karena rawan terhadap bahaya lontaran batu pijar."/>

                <Greeting name="Selain itu, kata dia, perlu mewaspadai potensi awan panas guguran, guguran lava, dan lahar di sepanjang aliran sungai/lembah yang berhulu di puncak Gunung Api Semeru, terutama sepanjang Besuk Kobokan, Besuk Bang, Besuk Kembar, dan Besuk Sat, serta potensi lahar pada sungai-sungai kecil yang merupakan anak sungai dari Besuk Kobokan."/>
            </Box>

            </Stack>
        </Box>
    </Box>
    </ScrollView>
    );
};

export default NewsDetail;
