import FIREBASE from '../config/FIREBASE';

const addBeritaFunc = async (beritaData) => {
  try {
    // Periksa apakah Firebase telah diinisialisasi
    if (!FIREBASE.apps.length) {
      throw new Error('Firebase is not initialized');
    }

    const { image, namaberita, deskripsi, ...otherBeritaData } = beritaData;

    // Konversikan URL gambar menjadi Blob
    const response = await fetch(image);
    const blob = await response.blob();

    // Upload gambar ke Firebase Storage dengan nama berita sebagai nama filenya
    const storageRef = FIREBASE.storage().ref();
    const imageRef = storageRef.child(`images_berita/${namaberita}.jpg`); // Cantumkan namaberita pada nama filenya
    await imageRef.put(blob);

    // Dapatkan URL unduhan untuk gambar yang diunggah
    const imageURL = await imageRef.getDownloadURL();

    // Sertakan URL gambar dan namaberita pada beritaData
    const beritaDataWithImage = {
      ...otherBeritaData,
      imageURL,
      namaberita,
      deskripsi
    };

    // Dengan asumsi memiliki referensi ke node 'berita' di database 
    const beritaRef = FIREBASE.database().ref('berita');

    // Push data berita ke node 'berita'
    await beritaRef.push(beritaDataWithImage);

    console.log('Berita Berhasil Ditambahkan');
  } catch (error) {
    console.error('Gagal Menambahkan Data Berita:', error);
    throw error;
  }
};

export default addBeritaFunc;
