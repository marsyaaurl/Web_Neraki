import Dialog from "@/components/Dialog";
import NavbarLoggedIn from "@/components/NavbarLoggedIn";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Profile() {
    return (
      <ProtectedRoute>
        <main>
          <div>
            <NavbarLoggedIn />
          </div>
          <div>
            <Dialog />
          </div>
        </main>
      </ProtectedRoute>
    );
}