
const Concept5Hero = () => {
    return (
        <section
            className="flex flex-col justify-between w-full h-[1075px] px-[80px] py-[40px] relative font-primary text-white"
            style={{
                backgroundImage: `linear-gradient(#000000b3, #000000b3), url('/images/nev-assets/Gemini_Generated_Image_3b67613b67613b67.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Header */}
            <header className="flex justify-between items-center w-full z-10 relative">
                <div className="h-[52px] w-[312px]">
                    <img src="/images/nev-assets/logo.png" alt="NEV Logo" className="h-full object-contain object-left" />
                </div>
                <nav className="flex items-center gap-[50px] font-bold text-[18px]">
                    <a href="#" className="hover:opacity-80 transition-opacity">SERVICES</a>
                    <a href="#" className="hover:opacity-80 transition-opacity">INDUSTRIES</a>
                    <a href="#" className="hover:opacity-80 transition-opacity">PRODUCTS</a>
                    <a href="#" className="hover:opacity-80 transition-opacity">ABOUT</a>
                    <a href="#" className="flex items-center justify-center px-[40px] py-[12px] bg-gradient-to-r from-[#E36D16] to-[#BC3217] rounded-[10px] text-[var(--color-heavy-metal)] italic font-black hover:opacity-90 transition-opacity">
                        CONTACT
                    </a>
                </nav>
            </header>

            {/* Headline */}
            <div className="flex flex-col items-center justify-around w-full z-10 relative">
                <h2 className="text-[18px] font-bold tracking-[4px] text-[var(--color-meteor)] drop-shadow-md">
                    EXPERT VULCANISING SOLUTIONS
                </h2>
                <h1 className="text-[168px] font-black italic text-center leading-[0.8] tracking-[-5px] drop-shadow-xl opacity-90">
                    ANY CONVEYOR<br />ANY BELT
                </h1>
            </div>

            {/* Footer / Stats */}
            <footer className="flex justify-between items-end h-[197px] w-full z-10 relative pb-8">
                <div className="flex justify-around items-center w-[1077px] h-[128px]">
                    {/* Stat 1 */}
                    <div className="flex flex-col items-center gap-[10px] w-[300px]">
                        <i className="ph-thin ph-lightning text-[var(--color-meteor)] text-[70px]"></i>
                        <span className="text-[20px] font-bold tracking-[1px] text-center">24/7 RAPID RESPONSE</span>
                    </div>
                    {/* Stat 2 */}
                    <div className="flex flex-col items-center gap-[10px] w-[300px]">
                        <i className="ph-thin ph-wrench text-[var(--color-meteor)] text-[70px]"></i>
                        <span className="text-[20px] font-bold tracking-[1px] text-center">NATIONWIDE UK COVERAGE</span>
                    </div>
                    {/* Stat 3 */}
                    <div className="flex flex-col items-center gap-[10px] w-[300px]">
                        <i className="ph-thin ph-medal text-[var(--color-meteor)] text-[70px]"></i>
                        <span className="text-[20px] font-bold tracking-[1px] text-center">45+ YEARS EXPERIENCE</span>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="flex flex-col items-center gap-[16px] w-[180px]">
                    <span className="text-[12px] font-bold tracking-[2px] opacity-60">SCROLL TO EXPLORE</span>
                </div>
            </footer>
        </section>
    );
};

export default Concept5Hero;
