import { HomeGallery } from "./components/HomeGallery";
import { SiteChrome } from "./components/SiteChrome";

const galleryColumns = [
  {
    label: "Studio V exterior residential project",
    images: [
      "/architecture/industrial-shed-kunnam/3.jpg",

      "/architecture/industrial-shed-kunnam/4.jpg",

      "/architecture/mylapore-apartment/2.jpg",
    ],
  },

  {
    label: "Studio V contemporary exterior project",
    images: [
      "/architecture/mylapore-apartment/3.jpg",

      "/architecture/mylapore-apartment-2/3.jpeg",

      "/architecture/residence-coimbatore/1.jpg",
    ],
  },

  {
    label: "Studio V architectural facade project",
    images: [
      "/architecture/resort-kalpakkam/2.jpg",

      "/interior2/DIR%20-%203.png",

      "/interior2/REC%20-%202.png",
    ],
  },
];

export default function Home() {
  return (
    <SiteChrome>
      <HomeGallery columns={galleryColumns} />
    </SiteChrome>
  );
}
