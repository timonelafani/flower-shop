export default function Header() {
    return (
        <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src="/logo.jpg" alt="BOTAnica BAAZAR" className="h-10 w-10 object-contain" />
                    <span className="text-xl font-bold text-[#4a5a40]">BOTAnica BAAZAR</span>
                </div>
                <nav>
                    <a href="#shop" className="text-[#4a5a40] hover:text-[#586845] transition font-medium">
                        Shop
                    </a>
                </nav>
            </div>
        </header>
    )
}