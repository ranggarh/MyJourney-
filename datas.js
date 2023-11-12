const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, orci nec feugiat commodo, ipsum orci consequat nulla, non sodales sem lorem et ante. Etiam dignissim tempor elit, nec feugiat ante suscipit eget. Sed imperdiet diam at ultrices viverra. Duis malesuada mattis tortor, ac ultrices elit euismod a.\n\nSuspendisse tincidunt eleifend volutpat. Phasellus vehicula sapien eu aliquam dignissim. Duis diam lorem, porta id nisi a, interdum rutrum quam. Suspendisse tincidunt euismod nunc. Etiam interdum, sem tincidunt sodales dignissim, orci ligula hendrerit dolor, ac suscipit neque eros sit amet magna. Sed gravida porttitor justo in venenatis. Maecenas dolor odio, semper eu velit pharetra, euismod placerat lectus. Curabitur nec aliquam mi. Aliquam suscipit iaculis vestibulum. Integer nibh ante, dignissim sed convallis eget, elementum ut nunc. Fusce non pharetra enim. Etiam ut justo est. Morbi commodo bibendum lorem a condimentum. Nulla ut magna tempor neque fringilla auctor. Ut aliquam ipsum urna, sodales ultricies ipsum pulvinar ac.\n\nNullam ultrices egestas dapibus. Vivamus sodales, nisl vel lobortis vestibulum, elit libero venenatis mauris, ut efficitur augue turpis ac lorem. Duis eu hendrerit ligula. Mauris auctor, purus ut ornare condimentum, ligula nisi egestas erat, eu fermentum libero massa tincidunt turpis. Suspendisse porta luctus elit eu pellentesque. Vivamus feugiat pellentesque hendrerit. Duis eu vulputate urna, quis bibendum nulla.\n\nPhasellus et faucibus elit, mollis accumsan arcu. Fusce scelerisque orci purus, vel scelerisque nisl viverra vitae. Nulla non lectus in lacus mollis consequat. Aenean consequat luctus tristique. Nunc imperdiet condimentum cursus. Praesent vel fermentum est, id pulvinar est. Nunc dolor velit, commodo non vehicula at, tincidunt lobortis mauris. Curabitur laoreet ipsum ut erat interdum ornare.";

const datas = [
  {
    id: 1,
    
    date: "10 Oktober 2023",
    title:
      "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image:
      "https://i.pinimg.com/564x/56/3e/4e/563e4ee4f4dc4d8747f1fa67e94f78fb.jpg",
    content: content,
    emoji : '⭐⭐⭐⭐⭐',
    categories: "Montain",
    name: 'gunung bromo',
  },
  {
    id: 2,
    date: "10 Oktober 2023",
    title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
    content: content,
    categories: "Beach",
  },
  {
    id: 3,
    date: "10 Oktober 2023",
    title:
      "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
    content: content,
    categories: "Waterfall"
  },
  {
    id: 4,
    date: "10 Oktober 2023",
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
    content: content,
    categories: "Surfing"
  },
  {
    id: 5,
    date: "10 Oktober 2023",
    title:
      "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    image:
      "https://i.pinimg.com/564x/d4/cd/a8/d4cda87854fb59431743f30a01bf1a11.jpg",
    content: content,
    categories: "Camping"
  },
  {
    id: 6,
    date: "10 Oktober 2023",
    title:
      "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image:
      "https://i.pinimg.com/564x/56/3e/4e/563e4ee4f4dc4d8747f1fa67e94f78fb.jpg",
    content: content,
    categories: "Mountain"
  },
  {
    id: 7,
    date: "10 Oktober 2023",
    title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
    content: content,
    categories: "Beach"
  },
  {
    id: 8,
    date: "10 Oktober 2023",
    title:
      "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
    content: content,
    categories: "Waterfall"
  },
  {
    id: 9,
    date: "10 Oktober 2023",
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
    content: content,
    categories: "Surfing"
  },
  {
    id: 10,
    date: "10 Oktober 2023",
    title:
      "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    image:
      "https://i.pinimg.com/564x/d4/cd/a8/d4cda87854fb59431743f30a01bf1a11.jpg",
    content: content,
    categories: "Camping"
  },
  {
    id: 11,
    date: "10 Oktober 2023",
    title:
      "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image:
      "https://i.pinimg.com/564x/56/3e/4e/563e4ee4f4dc4d8747f1fa67e94f78fb.jpg",
    content: content,
    categories: "Mountain"
  },
  {
    id: 12,
    date: "10 Oktober 2023",
    title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
    content: content,
    categories: "Beach"
  },
  {
    id: 13,
    date: "10 Oktober 2023",
    title:
      "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
    content: content,
    categories: "Waterfall"
  },
  {
    id: 14,
    date: "10 Oktober 2023",
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
    content: content,
    
    categories: "Camping"
  },
  {
    id: 15,
    date: "10 Oktober 2023",
    title:
    "Gunung Bromo terletak di Taman Nasional Bromo Tengger Semeru, Jawa Timur.",
    image:
      "https://i.pinimg.com/564x/d4/cd/a8/d4cda87854fb59431743f30a01bf1a11.jpg",
    content: content,
    emoji : '⭐⭐⭐⭐⭐',
    categories: "Mountain",
    name: 'Gunung Bromo',
    lokasi: 'Probolinggo',
  },
  {
    id: 16,
    date: "10 Oktober 2023",
    title:
    "Kawah Ijen terletak di Banyuwangi, Jawa Timur, dan terkenal dengan fenomena blue fire-nya.",
    image:
      "https://i.pinimg.com/564x/56/3e/4e/563e4ee4f4dc4d8747f1fa67e94f78fb.jpg",
    content: content,
    categories: "Crater",
    emoji : '⭐⭐⭐⭐⭐',
    name: 'Ijen Crater',
    lokasi: 'Banyuwangi',
  },
  {
    id: 17,
    date: "10 Oktober 2023",
    title: "Air Terjun Coban Rondo, terletak di Batu, Malang, menawarkan keindahan alam yang memukau dengan airnya yang jatuh dari ketinggian, menciptakan suasana yang menenangkan bagi pengunjung.",
    image:
      "https://i.pinimg.com/564x/96/82/6d/96826de5711b35e3aa1f2fafe9679bde.jpg",
    content: content,
    categories: "Waterfall",
    emoji : '⭐⭐⭐⭐⭐',
    name: 'Coban Rondo',
    lokasi: 'Malang',
  },
  {
    id: 18,
    date: "10 Oktober 2023",
    title:
    "Gunung Semeru, tertinggi di Pulau Jawa, merupakan puncak dari Taman Nasional Bromo Tengger Semeru, menawarkan pemandangan alam yang menakjubkan dan merupakan tujuan pendakian populer di Indonesia.",
    image:
      "https://i.pinimg.com/564x/d8/f5/c8/d8f5c800c8947690a1510d943c66496f.jpg",
    content: content,
    categories: "Hiking",
    emoji : '⭐⭐⭐⭐⭐',
    name: 'Semeru',
    lokasi: 'Lumajang',
  },
  {
    id: 19,
    date: "10 Oktober 2023",
    title: "Pantai Tambakrejo, terletak di Blitar, Jawa Timur, memikat pengunjung dengan pasir putihnya yang lembut, ombak yang tenang, dan suasana pantai yang tenang dan menyegarkan.",
    image:
      "https://i.pinimg.com/564x/1f/f5/15/1ff51536fc71d1db5a31cbc19e3ad5d6.jpg",
    content: content,
    categories: "Beach",
    emoji : '⭐⭐⭐⭐⭐',
    name: 'Pantai Tambak Rejo',
    lokasi: 'Blitar',
  },
  {
    id: 20,
    date: "10 Oktober 2023",
    title:
    "Savana Bekol, berada di Taman Nasional Baluran, menyuguhkan panorama savana yang luas dengan padang rumput hijau dan hewan liar, menciptakan pengalaman safari alam yang unik di Jawa Timur.",
    image:
      "https://i.pinimg.com/564x/fc/5d/9e/fc5d9e21159270a8d6e9094eb07ab363.jpg",
    content: content,
    categories: "Savana",
    emoji : '⭐⭐⭐⭐⭐',
    name: 'Afrika Van Java ',
    lokasi: 'Banyuwangi',
  },
];

export default datas;
