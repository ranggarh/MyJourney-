const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing";

const datas = [
  {
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
  },
  {
    id: 6,
    date: "01 November 2023",
    title:
      "Mulai 1 November 2023, Daftar Pendakian Gunung Gede Pangrango Lebih Mudah via Aplikasi",
    image:
      "https://i.pinimg.com/564x/1a/fa/38/1afa38752eab119eeb7f059111e3da39.jpg",
    content: content,
    kota: 'Lumajang',
    title_wisata:'B-29 Semeru',
    emoji:'⭐⭐⭐⭐⭐',
    kategori:'Mountain',
    hargaTiket: 70000,
    hargaSewa: 45000,
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
