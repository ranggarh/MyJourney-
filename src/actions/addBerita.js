import FIREBASE from '../config/FIREBASE';

const addBeritaFunc = async (beritaData) => {
  try {
    // Check if Firebase is initialized
    if (!FIREBASE.apps.length) {
      throw new Error('Firebase is not initialized');
    }

    const { image, namaberita, deskripsi, ...otherBeritaData } = beritaData;

    // Convert the image URI to a Blob
    const response = await fetch(image);
    const blob = await response.blob();

    // Upload image to Firebase Storage with the wisata name as the file name
    const storageRef = FIREBASE.storage().ref();
    const imageRef = storageRef.child(`images_berita/${namaberita}.jpg`); // Include namawisata in the file name
    await imageRef.put(blob);

    // Get the download URL for the uploaded image
    const imageURL = await imageRef.getDownloadURL();

    // Include the image URL and namawisata in the wisataData
    const beritaDataWithImage = {
      ...otherBeritaData,
      imageURL,
      namaberita,
      deskripsi
    };

    // Assuming you have a reference to the 'wisata' node in your database
    const beritaRef = FIREBASE.database().ref('berita');

    // Push the wisata data to the 'wisata' node
    await beritaRef.push(beritaDataWithImage);

    console.log('Berita Berhasil Ditambahkan');
  } catch (error) {
    console.error('Gagal Menambahkan Data Berita:', error);
    throw error;
  }
};

export default addBeritaFunc;
