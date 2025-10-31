import NavbarLoggedIn from "@/components/NavbarLoggedIn";
import Map from "@/components/Map";
import UmkmList from "@/components/UmkmList";
import Filter from "@/components/Filter";
import PlacesForYourMood from "@/components/PlacesForYourMood";
import Footer from "@/components/FooterLandingPage";
import KitDate from "@/components/KitDate";

export default function Home() {
    return (
        <>
            {/* Navbar */}
            <div>
                <NavbarLoggedIn />
            </div>

            {/* Map */}
            <div className="pt-28 px-5 flex flex-col">
                <Map />
            </div>

            {/* Perfect Kit Date and UMKM Recommendations*/}
            <div className="px-5 py-10 flex flex-row gap-x-5">
                <PlacesForYourMood />
                <KitDate />
            </div>

            {/* List of UMKM */}
            <div className="px-5 py-20 w-full">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-blue mb-2">UMKM</h1>
                    <h4 className="text-blue font-light text-base sm:text-lg">
                        Temukan usaha lokal yang kamu butuhkan!
                    </h4>
                </div>
                <div className="flex flex-col lg:flex-row gap-6 w-full max-w-7xl mx-auto">
                    <Filter />
                    <UmkmList />
                </div>
            </div>

            {/* Footer */}
            <div>
                <Footer />
            </div>
        </>
    )
}