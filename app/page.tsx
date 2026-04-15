import { HomeGallery } from "./components/HomeGallery";
import { SiteChrome } from "./components/SiteChrome";

const galleryColumns = [
  {
    label: "Studio V exterior residential project",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=90",
    ],
  },
  {
    label: "Studio V contemporary exterior project",
    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=90",
    ],
  },
  {
    label: "Studio V architectural facade project",
    images: [
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=2400&q=90",
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
