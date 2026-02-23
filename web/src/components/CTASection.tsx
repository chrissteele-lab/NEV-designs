
const CTASection = () => {
    return (
        <section className="flex flex-col gap-[100px] py-[120px] px-[80px] w-full bg-[var(--color-meteor)] overflow-hidden font-primary">
            <div className="flex flex-col items-center gap-[40px] w-full max-w-[1000px] mx-auto text-center">
                <h3 className="text-[18px] font-bold tracking-[4px] text-[var(--color-white)] uppercase">
                    COMPREHENSIVE NATIONWIDE SUPPORT
                </h3>

                <h2 className="text-[80px] font-black italic leading-[0.9] tracking-[-1px] text-[var(--color-heavy-metal)] uppercase">
                    READY TO OPTIMISE<br />YOUR OPERATIONS?
                </h2>

                <p className="w-full text-[24px] font-normal leading-[1.5] text-[var(--color-heavy-metal)] opacity-80">
                    Whether you require a bespoke maintenance contract, custom drum lagging, or rapid emergency breakdown assistance, our engineering teams are equipped to support your facility.
                </p>

                <div className="flex flex-row gap-[24px] justify-center w-full mt-4 flex-wrap">
                    <button className="flex items-center justify-center px-[40px] py-[16px] rounded-[8px] bg-[var(--color-heavy-metal)] text-[var(--color-white)] text-[18px] font-black italic uppercase hover:opacity-90 transition-opacity">
                        SUBMIT GENERAL ENQUIRY
                    </button>
                    <button className="flex items-center justify-center px-[40px] py-[16px] rounded-[8px] border-2 border-[var(--color-white)] text-[var(--color-white)] text-[18px] font-black italic uppercase hover:bg-white/10 transition-colors">
                        24/7 EMERGENCY HOTLINE
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
