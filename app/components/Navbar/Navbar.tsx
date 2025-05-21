import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        
        <header className="px-5 py-3 shadow-sm font-work-sans z-0 ">

        <nav className="flex justify-between items-center ">
            <Link href="/">
                <Image src="/logo.png" alt="logo" width={80} height={30} />
            </Link>
        <div className="flex lg-flex  items-center md:space-x-10 sm:space-x-5 gap-8 text-blue-950 ">
        <Link href="/Home">Home</Link>
        <Link href="/Statics">Statics</Link>
        <Link href="/classes">Docs</Link>
        <Link href="/Footer">Help</Link>
        <button className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Get it now</button>
        </div>
        </nav>
        </header>
     

    );
}
export default Navbar;