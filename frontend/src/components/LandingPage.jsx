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
    <main className="scroll-smooth">
      <header className="sticky top-0 z-50">
        <NavbarLandingPage />
      </header>

      <section id="home">
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

        <div className="flex justify-center mx-8 my-5 md:my-10">
          <img
            src="/assets/bamboo.webp"
            alt="Bamboo Product"
            className="md:w-5/6 rounded-3xl border-[15px] border-yellow"
          />
        </div>
      </section>

      <section id="about">
        <ContainerLandingPage className="bg-blue px-10 py-6 md:px-28 md:py-10 lg:px-40 flex flex-col gap-5">
          <h2 className="text-4xl font-extrabold text-white">About Us</h2>
          <p className="text-base text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae atque
            cumque ut quasi et necessitatibus quis porro ab ullam inventore.
            Debitis ullam soluta a nostrum minus numquam eos eum fugit. Esse
            inventore deleniti, facilis quibusdam ipsum minus praesentium ut
            neque ipsam delectus rerum velit soluta ipsa sequi quod perspiciatis
            corporis. Voluptas, mollitia. Impedit debitis aut hic quidem enim
            consectetur quas totam, omnis id exercitationem, voluptatum, nobis
            numquam. Quis perferendis id accusantium voluptates dolore modi.
          </p>
        </ContainerLandingPage>
      </section>

      <section id="feature">
        <ContainerLandingPage>
          <div className="bg-yellow py-6 px-10 md:px-28 md:py-5 lg:px-40 lg:py-5">
            <h2 className="text-4xl font-extrabold text-blue">
              Ada Apa dengan Neraki?
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-8 mx-10 my-10">
            {features.map(({ icon, title, description }) => (
              <div
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
              </div>
            ))}
          </div>
        </ContainerLandingPage>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContainerLandingPage className="px-10 mb-12 md:px-28 lg:px-40 flex flex-col gap-5">
          <h2 className="text-4xl font-extrabold text-blue">
            Lihat Lebih Dekat
          </h2>
          <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6">
            <img
              src="/assets/woman.webp"
              alt="Woman"
              className="w-full lg:w-2/4 rounded-3xl border-[15px] border-yellow"
            />
            <div className="flex flex-col gap-4 md:gap-3">
              <p className="text-base">
                Di balik setiap warung kecil, ada <strong>mimpi besar.</strong>
                <br />
                Di balik setiap produk lokal, ada
                <strong> tangan yang bekerja tanpa henti.</strong>
              </p>
              <Link href="/Login">
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
