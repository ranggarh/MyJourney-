import FIREBASE from '../config/FIREBASE';

const addWisataFunc = async (wisataData) => {
  try {
    // Check if Firebase is initialized
    if (!FIREBASE.apps.length) {
      throw new Error('Firebase is not initialized');
    }

    const { image, namawisata, harga, deskripsi, kota, kategori, ...otherWisataData } = wisataData;

    // Convert the image URI to a Blob
    const response = await fetch(image);
    const blob = await response.blob();

    // Upload image to Firebase Storage with the wisata name as the file name
    const storageRef = FIREBASE.storage().ref();
    const imageRef = storageRef.child(`images/${namawisata}.jpg`); // Include namawisata in the file name
    await imageRef.put(blob);

    // Get the download URL for the uploaded image
    const imageURL = await imageRef.getDownloadURL();

    // Include the image URL and namawisata in the wisataData
    const wisataDataWithImage = {
      ...otherWisataData,
      imageURL,
      namawisata,
      harga,
      deskripsi,
      kota,
      kategori // Add namawisata here
    };

    // Assuming you have a reference to the 'wisata' node in your database
    const wisataRef = FIREBASE.database().ref('wisata');

    // Push the wisata data to the 'wisata' node
    await wisataRef.push(wisataDataWithImage);

    console.log('Wisata data added successfully');
  } catch (error) {
    console.error('Error adding wisata data:', error);
    throw error;
  }
};

export default addWisataFunc;
