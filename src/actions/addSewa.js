import FIREBASE from '../config/FIREBASE';

const addSewaFunc = async (sewaData) => {
  try {
    // Check if Firebase is initialized
    if (!FIREBASE.apps.length) {
      throw new Error('Firebase is not initialized');
    }

    const { image, namabarang, harga, deskripsi, ...otherSewaData } = sewaData;

    // Convert the image URI to a Blob
    const response = await fetch(image);
    const blob = await response.blob();

    // Upload image to Firebase Storage with the wisata name as the file name
    const storageRef = FIREBASE.storage().ref();
    const imageRef = storageRef.child(`images_sewa/${namabarang}.jpg`); // Include namawisata in the file name
    await imageRef.put(blob);

    // Get the download URL for the uploaded image
    const imageURL = await imageRef.getDownloadURL();

    // Include the image URL and namawisata in the wisataData
    const sewaDataWithImage = {
      ...otherSewaData,
      imageURL,
      namabarang,
      harga,
      deskripsi
    };

    // Assuming you have a reference to the 'wisata' node in your database
    const barangRef = FIREBASE.database().ref('barang');

    // Push the wisata data to the 'wisata' node
    await barangRef.push(sewaDataWithImage);

    console.log('Barang Persewaan Berhasil Ditambahkan');
  } catch (error) {
    console.error('Gagal Menambahkan Data Barang:', error);
    throw error;
  }
};

export default addSewaFunc;
