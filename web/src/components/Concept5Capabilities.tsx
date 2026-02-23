const Concept5Capabilities = () => {
    return (
        <section className="flex flex-col gap-[120px] w-full px-[80px] py-[120px] bg-[var(--color-meteor)] font-primary">
            <div className="flex w-full gap-[200px]">

                {/* Left Sticky Image Frame */}
                <div className="flex-1 max-h-[693px] h-full sticky top-[40px]">
                    <div className="w-full h-full min-h-[600px] rounded-[20px] border border-black"
                        style={{ backgroundImage: `url('/images/nev-assets/advanced-recycling-facility-with-conveyor-belts.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                </div>

                {/* Right List */}
                <div className="flex flex-col gap-[40px] flex-1">

                    {/* Header / Intro */}
                    <div className="flex flex-col gap-[40px] w-[670px] mb-[60px]">
                        <h3 className="text-[18px] font-bold tracking-[4px] text-[var(--color-thunderbird)] uppercase">
                            OUR CORE CAPABILITIES
                        </h3>
                        <p className="text-[40px] font-medium leading-[1.3] text-[var(--color-heavy-metal)] tracking-[-1px]">
                            We deliver industry-leading conveyor belt vulcanising, rapid emergency repairs, and preventative site surveys. Our advanced diagnostic approach ensures we identify and resolve root-cause mechanical failures, maximising your operational throughput.
                        </p>
                        <div>
                            <button className="px-[32px] py-[12px] bg-[#1A1A1A] rounded-[8px] text-white text-[18px] italic font-black uppercase hover:opacity-90 transition-opacity">
                                OUR SERVICES
                            </button>
                        </div>
                    </div>

                    {/* Accordion / List Items */}
                    <div className="flex flex-col w-full border-b border-[var(--color-heavy-metal)] pb-[60px] gap-[40px]">
                        <h4 className="flex justify-between items-center text-[55px] font-black italic leading-none text-[var(--color-heavy-metal)] uppercase">
                            BELT FITTING & VULCANISING
                        </h4>
                        <p className="max-w-[640px] text-[24px] font-normal leading-[1.3] text-[var(--color-heavy-metal)] opacity-80">
                            The integrity of your splice determines your system's longevity. Our master engineers utilise state-of-the-art pressing equipment and advanced chemical compounds to execute flawless hot and cold vulcanising. We create high-tensile joints engineered to withstand the most extreme industrial operational stress.
                        </p>
                    </div>

                    <div className="flex flex-col w-full border-b border-[var(--color-heavy-metal)] py-[40px]">
                        <h4 className="text-[55px] font-black italic leading-none text-[var(--color-heavy-metal)] uppercase">
                            BELT REPAIRS
                        </h4>
                    </div>

                    <div className="flex flex-col w-full border-b border-[var(--color-heavy-metal)] py-[40px]">
                        <h4 className="text-[55px] font-black italic leading-none text-[var(--color-heavy-metal)] uppercase">
                            DRUM LAGGING
                        </h4>
                    </div>

                    <div className="flex flex-col w-full border-b border-[var(--color-heavy-metal)] py-[40px]">
                        <h4 className="text-[55px] font-black italic leading-none text-[var(--color-heavy-metal)] uppercase">
                            SITE SURVEYS
                        </h4>
                    </div>

                    <div className="flex flex-col w-full border-b border-[var(--color-heavy-metal)] py-[40px]">
                        <h4 className="text-[55px] font-black italic leading-none text-[var(--color-heavy-metal)] uppercase">
                            24/7 BREAKDOWNS
                        </h4>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Concept5Capabilities;
