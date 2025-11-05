import { MapPinned, Sparkles, Store } from "lucide-react";
import ContainerLandingPage from "./ContainerLandingPage";
import NavbarLandingPage from "./NavbarLandingPage";
import Button from "./Button";
import FooterLandingPage from "./FooterLandingPage";
import Link from "next/link";

const features = [
  {
    icon: <MapPinned size={54} color="#374F86" />,
    title: "Pencarian UMKM Terdekat + Peta Interaktif",
    description:
      "Temukan UMKM terdekat secara real-time melalui peta interaktif yang responsif dan akurat. Langsung arahkan ke lokasi pilihanmu lewat Google Maps atau aplikasi peta favoritmu!",
  },
  {
    icon: <Sparkles size={54} color="#374F86" />,
    title: "Filter Pintar + Dinamis",
    description:
      "Temukan UMKM sesuai kebutuhanmu dengan filter dinamis dan tag cepat. Dirancang fleksibel agar pengalamanmu mencari usaha lokal jadi lebih cepat, relevan, dan personal.",
  },
  {
    icon: <Store size={54} color="#374F86" />,
    title: "Profil UMKM + Kontak Langsung",
    description:
      "Lihat info lengkap, foto, dan testimoni pelanggan dalam satu halaman. Langsung hubungi pemilik usaha lewat WhatsApp, telepon, atau email tanpa repot!",
  },
];

export default function LandingPage() {
  return (
    <main>
      <header className="sticky top-0 z-50">
        <NavbarLandingPage />
      </header>

      {/* Hero Section */}
      <section id="home" className="scroll-mt-24" aria-label="Beranda">
        <ContainerLandingPage className="flex flex-col gap-2.5 my-6 md:my-10 mx-4 items-center">
          <h1 className="font-extrabold text-blue text-5xl sm:text-6xl text-center">
            Dari Lokal, untuk Semua
          </h1>
          <p className="sm:text-lg text-center sm:max-w-2xl">
            Dengan Neraki, temukan UMKM favoritmu secara cepat dan mudah. Satu
            platform untuk mencari, mengenal, dan mendukung brand lokal agar
            terus berkembang di era digital.
          </p>
        </ContainerLandingPage>

        <figure className="flex justify-center mx-8 my-5 md:my-10">
          <img
            src="/assets/bamboo.webp"
            alt="Produk bambu dari UMKM lokal"
            className="md:w-5/6 rounded-3xl border-[15px] border-yellow"
            loading="lazy"
          />
        </figure>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-24" aria-label="Tentang Neraki">
        <ContainerLandingPage className="bg-blue px-10 py-6 md:px-28 md:py-10 lg:px-40 flex flex-col gap-5">
          <h2 className="text-4xl font-extrabold text-white">
            Kenalan dengan Neraki
          </h2>
          <p className="text-base text-justify text-white">
            Neraki adalah platform direktori UMKM yang memudahkan kamu menemukan
            produk dan layanan lokal sesuai kebutuhan harian—mulai dari tempat
            nongkrong yang cocok dengan mood, hingga rekomendasi kit spesial
            untuk momen tertentu. Di tengah tantangan eksposur digital yang
            masih minim, Neraki hadir sebagai solusi untuk mempertemukan
            masyarakat dengan UMKM secara efisien dan menyenangkan. Lewat
            fitur-fitur interaktif seperti challenge edukatif dan personalisasi
            rekomendasi, kami ingin bantu UMKM lebih dikenal sekaligus bikin
            eksplorasi kamu makin relevan dan seru.
          </p>
        </ContainerLandingPage>
      </section>

      {/* Features Section */}
      <section id="feature" className="scroll-mt-24" aria-label="Fitur Neraki">
        <ContainerLandingPage>
          <header className="bg-yellow py-6 px-10 md:px-28 md:py-5 lg:px-40 lg:py-5">
            <h2 className="text-4xl font-extrabold text-blue">
              Ada Apa dengan Neraki?
            </h2>
          </header>

          <div className="flex flex-col lg:flex-row justify-between gap-8 mx-10 my-10">
            {features.map(({ icon, title, description }) => (
              <article
                key={title}
                className="bg-blueLight flex flex-col items-center gap-8 p-7 rounded-3xl shadow-md"
              >
                <div className="w-fit p-4 rounded-full border-blue border-4 bg-white">
                  {icon}
                </div>
                <div className="flex flex-col items-center gap-2">
                  <h3 className="text-xl text-center font-medium text-blue">
                    {title}
                  </h3>
                  <p className="text-justify text-blue">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </ContainerLandingPage>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24" aria-label="Kontak">
        <ContainerLandingPage className="px-10 mb-12 md:px-28 lg:px-40 flex flex-col gap-5">
          <h2 className="text-4xl font-extrabold text-blue">
            Lihat Lebih Dekat
          </h2>
          <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6">
            <figure className="w-full lg:w-2/4">
              <img
                src="/assets/woman.webp"
                alt="Pemilik usaha lokal"
                className="rounded-3xl border-[15px] border-yellow"
                loading="lazy"
              />
            </figure>
            <div className="flex flex-col gap-4 md:gap-3">
              <p className="text-base">
                Di balik setiap warung kecil, ada <strong>mimpi besar.</strong>
                <br />
                Di balik setiap produk lokal, ada
                <strong> tangan yang bekerja tanpa henti.</strong>
              </p>
              <Link href="/Login" aria-label="Masuk ke halaman login">
                <Button
                  label="Yuk, Mulai Kenalan!"
                  variant="red"
                  className="w-full lg:w-1/2 py-2.5"
                />
              </Link>
            </div>
          </div>
        </ContainerLandingPage>
        <FooterLandingPage />
      </section>
    </main>
  );
}
