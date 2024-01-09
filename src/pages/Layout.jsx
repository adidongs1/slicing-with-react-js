import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar logo={'./src/assets/logo.svg'} />

            {/* main content */}
            <main className="mt-40">
                {children}
            </main>


            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Layout;