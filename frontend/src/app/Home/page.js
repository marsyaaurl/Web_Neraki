import NavbarLoggedIn from "@/components/NavbarLoggedIn";
import Map from "@/components/Map";
import UmkmList from "@/components/UmkmList";

export default function Home() {
    return (
        <>
            <div>
                <NavbarLoggedIn />
            </div>
            <div className="pt-20 px-5 flex flex-col">
                <Map />
            </div>
            <div className="px-5 py-20 w-full h-64 flex flex-col text-center">
                <h1 className="text-3xl font-bold text-blue mb-2">UMKM</h1>
                <h4 className="text-blue font-light text-base sm:text-lg">
                    Temukan usaha lokal yang kamu butuhkan!
                </h4>
                <UmkmList />
            </div>
        </>
    )
}