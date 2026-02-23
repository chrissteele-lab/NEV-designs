
const ServicesIntro = () => {
    return (
        <section className="flex flex-col gap-[40px] py-[80px] px-[80px] w-full bg-[var(--color-white)] font-primary">
            <div className="max-w-[800px] flex flex-col gap-[20px]">
                <h2 className="text-[40px] font-medium leading-[1.3] text-[var(--color-heavy-metal)] tracking-[-1px]">
                    We deliver industry-leading conveyor belt vulcanising, rapid emergency repairs, and preventative site surveys. Our advanced diagnostic approach ensures we identify and resolve root-cause mechanical failures, maximising your operational throughput.
                </h2>
            </div>

            <div className="flex flex-col gap-[24px] p-[40px] bg-[var(--color-nobel)] rounded-[20px] max-w-[800px]">
                <h3 className="text-[32px] font-black italic text-[var(--color-heavy-metal)] uppercase">
                    Belt Fitting & Vulcanising
                </h3>
                <p className="text-[24px] font-normal leading-[1.3] text-[var(--color-heavy-metal)] opacity-80">
                    The integrity of your splice determines your system's longevity. Our master engineers utilise state-of-the-art pressing equipment and advanced chemical compounds to execute flawless hot and cold vulcanising. We create high-tensile joints engineered to withstand the most extreme industrial operational stress.
                </p>
            </div>
        </section>
    );
};

export default ServicesIntro;
