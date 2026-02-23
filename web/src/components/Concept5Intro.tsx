const Concept5Intro = () => {
    return (
        <section className="flex flex-col gap-[80px] w-full px-[80px] py-[120px] bg-[var(--color-white)] font-primary">
            {/* Header */}
            <div className="flex flex-col gap-[100px] w-full">
                <div className="flex flex-col gap-[40px] w-full">
                    <h3 className="text-[18px] font-bold tracking-[4px] text-[var(--color-thunderbird)] uppercase">
                        OVER FOUR DECADES OF HERITAGE
                    </h3>
                    <h2 className="text-[140px] font-black italic leading-[0.8] tracking-[-1px] text-[var(--color-heavy-metal)] max-w-[1747px] uppercase">
                        THE VULCANISING EXPERTS
                    </h2>
                </div>

                {/* Content Row */}
                <div className="flex gap-[200px] w-full">
                    {/* Left Image */}
                    <div className="flex flex-col justify-end w-[676px] h-[478px] p-[40px] gap-[40px] border border-black rounded-[20px] shrink-0"
                        style={{ backgroundImage: `url('/images/nev-assets/team-illustrated.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>

                    {/* Right Text */}
                    <div className="flex flex-col gap-[40px] flex-1">
                        <p className="text-[40px] font-medium leading-[1.3] text-[#57574d] tracking-[-1px]">
                            Leveraging decades of specialised mechanical knowledge, we provide high-performance belt vulcanising and proactive repairs that ensure maximum operational uptime for demanding industrial environments nationwide.
                        </p>

                        <div className="flex gap-[20px] items-center">
                            <button className="flex items-center justify-center px-[40px] py-[12px] bg-[var(--color-meteor)] rounded-[10px] text-[#1e1e1c] text-[18px] italic font-black uppercase hover:opacity-90">
                                MEET THE TEAM
                            </button>
                            <button className="flex items-center justify-center px-[32px] py-[12px] border-2 border-[var(--color-meteor)] rounded-[8px] text-[var(--color-meteor)] text-[18px] font-semibold hover:bg-[var(--color-meteor)] hover:text-[#1e1e1c] transition-colors">
                                OUR HISTORY
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Concept5Intro;
