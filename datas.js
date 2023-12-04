const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing";

const datas = [
  {
    //Data Tiket
    id: 1,
    date: "10 Oktober 2023",
    title:
      "Kebakaran di Bromo Timbulkan Kerugian Rp89,7 Miliar Bagi Sektor Pariwisata",
    image:
      "https://i.pinimg.com/564x/42/93/01/42930160dc55520b846a8bc48495bc2b.jpg",
    content: content,
    kota: 'Lumajang ',
    title_wisata:'Bromo Mountain',
    emoji:'⭐⭐⭐⭐⭐',
    kategori:'Mountain',
    hargaTiket: 150000,
    hargaSewa: 45000,
    //Data Sewa
    nama_alat: 'Carrier',
    image_sewa:"https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/t/a/tas-gunung-wanita-escapade-25-ws-carrier.jpg",
    harga_alat: 100000,
  },
  {
    id: 2,
    date: "10 Oktober 2023",
    title: "Geger Pendaki Bawa Balita ke Puncak Kerinci, Ini Peringatan dan Saran Pemandu",
    image:
      "https://i.pinimg.com/564x/56/3e/4e/563e4ee4f4dc4d8747f1fa67e94f78fb.jpg",
    content: content,
    kota: 'Banyuwangi',
    title_wisata:'Ijen Crater',
    emoji:'⭐⭐⭐⭐⭐',
    kategori:'Mountain',
    hargaTiket: 100000,
    hargaSewa: 45000,
    //Data Sewa
    nama_alat: 'Tenda',
    image_sewa:'https://img.id.my-best.com/product_images/8188b9cd4fe6c1ae1471891a726f1489.jpeg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=4ef781e26f4d789dbfadb713660f4f68',
    harga_alat: 30000,
  },
  {
    id: 3,
    date: "10 Oktober 2023",
    title:
      "Gunung Penanggungan Terbakar, Empat Jalur Pendakian Tutup Total",
    image:
      "https://i.pinimg.com/564x/51/54/26/515426591c9277281853f707b2d31288.jpg",
    content: content,
    kota: 'Malang',
    title_wisata:'Sendiki Beach',
    emoji:'⭐⭐⭐⭐⭐',
    kategori:'Beach',
    hargaTiket: 90000,
    hargaSewa: 45000,
    //Data Sewa
    nama_alat: 'Sepatu Gunung',
    image_sewa:'https://s0.bukalapak.com/img/06264829003/s-463-463/data.jpg.webp',
    harga_alat: 100000,
  },
  {
    id: 4,
    date: "10 Oktober 2023",
    title: "5 Tips Aman Mendaki Gunung untuk Lansia, Jangan Paksakan Diri Bagi lansia yang ingin mendaki",
    image:
      "https://i.pinimg.com/564x/9c/cd/9d/9ccd9d6eab19fa34f078467919b4a0df.jpg",
    content: content,
    kota: 'Tulung Agung',
    title_wisata:'Kedung Beach',
    emoji:'⭐⭐⭐⭐⭐',
    kategori:'Beach',
    hargaTiket: 120000,
    hargaSewa: 45000,
    //Data Sewa
    nama_alat: 'Sleeping Bag',
    image_sewa:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5TmNm3YRHr5v0Z8Dso1_EeEeJWPMxNAdqqQ&usqp=CAU",
    harga_alat: 70000,
  },
  {
    id: 5,
    date: "01 November 2023",
    title:
      "Mulai 1 November 2023, Daftar Pendakian Gunung Gede Pangrango Lebih Mudah via Aplikasi",
    image:
      "https://asset.kompas.com/crops/G8lRJO9rBQJCYnFhHDhosm6e8cY=/30x0:1050x680/750x500/data/photo/2019/07/03/1069546737.jpg",
    content: content,
    kota: 'Mojokerto',
    title_wisata:'Penanggungan',
    emoji:'⭐⭐⭐⭐⭐',
    kategori:'Mountain',
    hargaTiket: 40000,
    hargaSewa: 45000,
    //Data Sewa
    nama_alat: 'Flysheet',
    image_sewa:"https://shop.consina-adventure.com/image/cache/data/product/ACCESSORIES/FlySheet/200%20x%20300/rev-flysheet-6-800x800.jpg",
    harga_alat: 20000,
  },
  {
    id: 6,
    date: "01 November 2023",
    title:
      "Mulai 1 November 2023, Daftar Pendakian Gunung Gede Pangrango Lebih Mudah via Aplikasi",
    image:
      "https://i.pinimg.com/564x/1a/fa/38/1afa38752eab119eeb7f059111e3da39.jpg",
    content: content,
    kota: 'Blitar',
    title_wisata:'B-29 Semeru',
    emoji:'⭐⭐⭐⭐⭐',
    kategori:'Mountain',
    hargaTiket: 70000,
    hargaSewa: 45000,
    //Data Sewa
    nama_alat: 'Lampu Tenda',
    image_sewa:"https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/3/16/819ba534-9a74-4263-acbc-405399775108.jpg",
    harga_alat: 10000,
  },
  // {
  //   id: 7,
  //   date: "10 Oktober 2023",
  //   title:
  //     "Kebakaran di Bromo Timbulkan Kerugian Rp89,7 Miliar Bagi Sektor Pariwisata",
  //   image:
  //     "https://i.pinimg.com/564x/42/93/01/42930160dc55520b846a8bc48495bc2b.jpg",
  //   content: content,
  //   kota: 'Lumajang ',
  //   title_wisata:'Bromo Mountain',
  //   emoji:'⭐⭐⭐⭐⭐',
  //   kategori:'Mountain',
  //   hargaTiket: 150000,
  //   hargaSewa: 45000,
  // },
  // {
  //   id: 8,
  //   date: "10 Oktober 2023",
  //   title: "Geger Pendaki Bawa Balita ke Puncak Kerinci, Ini Peringatan dan Saran Pemandu",
  //   image:
  //     "https://i.pinimg.com/564x/56/3e/4e/563e4ee4f4dc4d8747f1fa67e94f78fb.jpg",
  //   content: content,
  //   kota: 'Banyuwangi',
  //   title_wisata:'Ijen Crater',
  //   emoji:'⭐⭐⭐⭐⭐',
  //   kategori:'Mountain',
  //   hargaTiket: 100000,
  //   hargaSewa: 45000,
  // },
  // {
  //   id: 9,
  //   date: "10 Oktober 2023",
  //   title:
  //     "Gunung Penanggungan Terbakar, Empat Jalur Pendakian Tutup Total",
  //   image:
  //     "https://i.pinimg.com/564x/51/54/26/515426591c9277281853f707b2d31288.jpg",
  //   content: content,
  //   kota: 'Malang',
  //   title_wisata:'Sendiki Beach',
  //   emoji:'⭐⭐⭐⭐⭐',
  //   kategori:'Beach',
  //   hargaTiket: 90000,
  //   hargaSewa: 45000,
  // },
  // {
  //   id: 10,
  //   date: "10 Oktober 2023",
  //   title: "5 Tips Aman Mendaki Gunung untuk Lansia, Jangan Paksakan Diri Bagi lansia yang ingin mendaki",
  //   image:
  //     "https://i.pinimg.com/564x/9c/cd/9d/9ccd9d6eab19fa34f078467919b4a0df.jpg",
  //   content: content,
  //   kota: 'Tulung Agung',
  //   title_wisata:'Kedung Beach',
  //   emoji:'⭐⭐⭐⭐⭐',
  //   kategori:'Beach',
  //   hargaTiket: 120000,
  //   hargaSewa: 45000,
  // },
  // {
  //   id: 11,
  //   date: "01 November 2023",
  //   title:
  //     "Mulai 1 November 2023, Daftar Pendakian Gunung Gede Pangrango Lebih Mudah via Aplikasi",
  //   image:
  //     "https://asset.kompas.com/crops/G8lRJO9rBQJCYnFhHDhosm6e8cY=/30x0:1050x680/750x500/data/photo/2019/07/03/1069546737.jpg",
  //   content: content,
  //   kota: 'Mojokerto',
  //   title_wisata:'Penanggungan',
  //   emoji:'⭐⭐⭐⭐⭐',
  //   kategori:'Mountain',
  //   hargaTiket: 40000,
  //   hargaSewa: 45000,
  // },
  // {
  //   id: 12,
  //   date: "01 November 2023",
  //   title:
  //     "Mulai 1 November 2023, Daftar Pendakian Gunung Gede Pangrango Lebih Mudah via Aplikasi",
  //   image:
  //     "https://i.pinimg.com/564x/1a/fa/38/1afa38752eab119eeb7f059111e3da39.jpg",
  //   content: content,
  //   kota: 'Lumajang',
  //   title_wisata:'B-29 Semeru',
  //   emoji:'⭐⭐⭐⭐⭐',
  //   kategori:'Mountain',
  //   hargaTiket: 70000,
  //   hargaSewa: 45000,
  // },
  // {
  //   id: 13,
  //   date: "10 Oktober 2023",
  //   title:
  //     "Kebakaran di Bromo Timbulkan Kerugian Rp89,7 Miliar Bagi Sektor Pariwisata",
  //   image:
  //     "https://i.pinimg.com/564x/42/93/01/42930160dc55520b846a8bc48495bc2b.jpg",
  //   content: content,
  //   kota: 'Lumajang ',
  //   title_wisata:'Bromo Mountain',
  //   emoji:'⭐⭐⭐⭐⭐',
  //   kategori:'Mountain',
  //   hargaTiket: 150000,
  //   hargaSewa: 45000,
  // },
  // {
  //   id: 14,
  //   date: "10 Oktober 2023",
  //   title: "Geger Pendaki Bawa Balita ke Puncak Kerinci, Ini Peringatan dan Saran Pemandu",
  //   image:
  //     "https://i.pinimg.com/564x/56/3e/4e/563e4ee4f4dc4d8747f1fa67e94f78fb.jpg",
  //   content: content,
  //   kota: 'Banyuwangi',
  //   title_wisata:'Ijen Crater',
  //   emoji:'⭐⭐⭐⭐⭐',
  //   kategori:'Mountain',
  //   hargaTiket: 100000,
  //   hargaSewa: 45000,
  // },
  // {
  //   id: 15,
  //   date: "10 Oktober 2023",
  //   title:
  //     "Gunung Penanggungan Terbakar, Empat Jalur Pendakian Tutup Total",
  //   image:
  //     "https://i.pinimg.com/564x/51/54/26/515426591c9277281853f707b2d31288.jpg",
  //   content: content,
  //   kota: 'Malang',
  //   title_wisata:'Sendiki Beach',
  //   emoji:'⭐⭐⭐⭐⭐',
  //   kategori:'Beach',
  //   hargaTiket: 90000,
  //   hargaSewa: 45000,
  // },
  // {
  //   id: 16,
  //   date: "10 Oktober 2023",
  //   title: "5 Tips Aman Mendaki Gunung untuk Lansia, Jangan Paksakan Diri Bagi lansia yang ingin mendaki",
  //   image:
  //     "https://i.pinimg.com/564x/9c/cd/9d/9ccd9d6eab19fa34f078467919b4a0df.jpg",
  //   content: content,
  //   kota: 'Tulung Agung',
  //   title_wisata:'Kedung Beach',
  //   emoji:'⭐⭐⭐⭐⭐',
  //   kategori:'Beach',
  //   hargaTiket: 120000,
  //   hargaSewa: 45000,
  // },
  // {
  //   id: 17,
  //   date: "01 November 2023",
  //   title:
  //     "Mulai 1 November 2023, Daftar Pendakian Gunung Gede Pangrango Lebih Mudah via Aplikasi",
  //   image:
  //     "https://asset.kompas.com/crops/G8lRJO9rBQJCYnFhHDhosm6e8cY=/30x0:1050x680/750x500/data/photo/2019/07/03/1069546737.jpg",
  //   content: content,
  //   kota: 'Mojokerto',
  //   title_wisata:'Penanggungan',
  //   emoji:'⭐⭐⭐⭐⭐',
  //   kategori:'Mountain',
  //   hargaTiket: 40000,
  //   hargaSewa: 45000,
  // },
  // {
  //   id: 18,
  //   date: "01 November 2023",
  //   title:
  //     "Mulai 1 November 2023, Daftar Pendakian Gunung Gede Pangrango Lebih Mudah via Aplikasi",
  //   image:
  //     "https://i.pinimg.com/564x/1a/fa/38/1afa38752eab119eeb7f059111e3da39.jpg",
  //   content: content,
  //   kota: 'Lumajang',
  //   title_wisata:'B-29 Semeru',
  //   emoji:'⭐⭐⭐⭐⭐',
  //   kategori:'Mountain',
  //   hargaTiket: 70000,
  //   hargaSewa: 45000,
  // },
  // {
  //   id: 19,
  //   date: "01 November 2023",
  //   title:
  //     "Mulai 1 November 2023, Daftar Pendakian Gunung Gede Pangrango Lebih Mudah via Aplikasi",
  //   image:
  //     "https://i.pinimg.com/564x/1a/fa/38/1afa38752eab119eeb7f059111e3da39.jpg",
  //   content: content,
  //   kota: 'Lumajang',
  //   title_wisata:'B-29 Semeru',
  //   emoji:'⭐⭐⭐⭐⭐',
  //   kategori:'Mountain',
  //   hargaTiket: 70000,
  //   hargaSewa: 45000,
  // },
  // {
  //   id: 20,
  //   date: "01 November 2023",
  //   title:
  //     "Mulai 1 November 2023, Daftar Pendakian Gunung Gede Pangrango Lebih Mudah via Aplikasi",
  //   image:
  //     "https://i.pinimg.com/564x/1a/fa/38/1afa38752eab119eeb7f059111e3da39.jpg",
  //   content: content,
  //   kota: 'Lumajang',
  //   title_wisata:'B-29 Semeru',
  //   emoji:'⭐⭐⭐⭐⭐',
  //   kategori:'Mountain',
  //   hargaTiket: 70000,
  //   hargaSewa: 45000,
  // },
  
];

export default datas;
