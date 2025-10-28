import NavbarLoggedIn from "@/components/NavbarLoggedIn";
import Map from "@/components/Map";

export default function Home() {
    return (
        <>
            <div>
                <NavbarLoggedIn />
            </div>
            <div className="pt-20 px-5 flex flex-col">
                <Map />
            </div>
            <div className="px-5 py-5">
            </div>
        </>
    )
}