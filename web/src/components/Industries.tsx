
const Industries = () => {
    const cards = [
        {
            img: '/images/nev-assets/industrial-heavy-machines-with-conveyor-belts-crushing-stones-covering-railway-tracks-quarry.jpg',
            icon: 'ph-mountains',
            heading: 'QUARRYING & AGGREGATES',
            desc: 'Heavy-duty EP and Ripstop belting for the most punishing extraction environments.',
            gradientStart: 0.17
        },
        {
            img: '/images/nev-assets/ewaste-recycling-center-with-bins-conveyor-belts-sorting-processing-recyclable-materials.jpg',
            icon: 'ph-recycle',
            heading: 'RECYCLING & WASTE',
            desc: 'Specialised oil-resistant belting for MRFs and automated sorting technology.',
            gradientStart: 0.5
        },
        {
            img: '/images/nev-assets/aerial-view-basalt-quarry-open-pit-mine-machines-with-sifters-conveyor-belts-industry-black-basalt-stone-stone-quarry.jpg',
            icon: 'ph-buildings',
            heading: 'CONSTRUCTION & DEMOLITION',
            desc: 'Reinforced multi-ply belting for mobile crushers and tracked screeners.',
            gradientStart: 0.5
        },
        {
            img: '/images/nev-assets/moody.png',
            icon: 'ph-leaf',
            heading: 'AGRICULTURE & BULK',
            desc: 'FDA-compliant food-safe belting and weather-resistant agricultural solutions.',
            gradientStart: 0.5
        },
        {
            img: '/images/nev-assets/Gemini_Generated_Image_3b67613b67613b67.png',
            icon: 'ph-factory',
            heading: 'MANUFACTURING & LOGISTICS',
            desc: 'Lightweight PU and PVC belts engineered for perfectly smooth tracking.',
            gradientStart: 0.5
        }
    ];

    return (
        <section className="flex flex-col gap-[60px] pt-[120px] pb-[110px] px-[80px] w-full bg-[var(--color-heavy-metal)] font-primary">
            {/* Header */}
            <div className="flex flex-col gap-[10px] w-full">
                <h3 className="text-[18px] font-bold tracking-[4px] text-[var(--color-meteor)] uppercase">
                    SECTOR SPECIFIC EXPERTISE
                </h3>
                <h2 className="w-full text-[80px] font-black italic leading-[0.9] tracking-[-1px] text-[var(--color-white)] uppercase">
                    INDUSTRIES
                </h2>
            </div>

            {/* Grid */}
            <div className="flex gap-[20px] h-[596px] w-full overflow-x-auto pb-4">
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col justify-end p-[40px] gap-[10px] w-[400px] shrink-0 h-full rounded-[20px] overflow-hidden relative border border-[var(--color-black)]"
                        style={{
                            backgroundImage: `linear-gradient(to top, #000 0%, transparent ${card.gradientStart * 100}%), url('${card.img}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <div className="flex flex-col gap-[40px] pr-[20px] w-full relative z-10">
                            <span className="w-[48px] h-[48px] text-[var(--color-meteor)] text-[48px] flex items-center justify-center">
                                <i className={`ph-fill ${card.icon}`}></i>
                            </span>
                            <div className="flex flex-col gap-[10px] w-full">
                                <h4 className="w-full text-[40px] italic font-black leading-none text-[var(--color-white)] uppercase">
                                    {card.heading}
                                </h4>
                                <p className="w-full text-[20px] font-normal leading-[1.3] text-[var(--color-white)] opacity-80">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Slider Nav Container */}
            <div className="flex justify-end w-full">
                <div className="flex items-center gap-[12px] p-[12px] rounded-[60px] bg-[var(--color-white)]">
                    <button className="flex items-center justify-center w-[50px] h-[50px] rounded-[40px] bg-transparent hover:bg-gray-100 transition-colors">
                        <i className="ph-bold ph-arrow-left text-[24px]"></i>
                    </button>
                    <button className="flex items-center justify-center w-[50px] h-[50px] rounded-[40px] bg-[var(--color-meteor)] text-white hover:opacity-90 transition-opacity">
                        <i className="ph-bold ph-arrow-right text-[24px]"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Industries;
