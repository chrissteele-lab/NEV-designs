
const Footer = () => {
    return (
        <footer className="flex flex-col gap-[60px] py-[80px] px-[80px] w-full bg-[#111] font-primary">
            <div className="flex flex-wrap lg:flex-nowrap justify-between w-full gap-[60px]">

                {/* Branding Col */}
                <div className="flex flex-col gap-[24px] w-[300px]">
                    <div className="h-[40px] w-[240px]">
                        <img src="/images/nev-assets/logo.png" alt="NEV Logo" className="h-full object-contain object-left" />
                    </div>
                    <p className="w-full text-[16px] font-normal leading-[1.5] text-[#888888]">
                        Any Conveyor. Any Belt. Expert Vulcanising Solutions Keeping the UK Moving.
                    </p>
                </div>

                {/* Services Col */}
                <div className="flex flex-col gap-[16px] shrink-0">
                    <h4 className="text-[18px] font-bold text-[var(--color-white)]">Services</h4>
                    <ul className="flex flex-col gap-[16px]">
                        <li><a href="#" className="text-[16px] font-normal text-[#888888] hover:text-[var(--color-white)] transition-colors">Belt Fitting & Vulcanising</a></li>
                        <li><a href="#" className="text-[16px] font-normal text-[#888888] hover:text-[var(--color-white)] transition-colors">24/7 Breakdowns</a></li>
                        <li><a href="#" className="text-[16px] font-normal text-[#888888] hover:text-[var(--color-white)] transition-colors">Site Surveys</a></li>
                        <li><a href="#" className="text-[16px] font-normal text-[#888888] hover:text-[var(--color-white)] transition-colors">Belt Repairs</a></li>
                        <li><a href="#" className="text-[16px] font-normal text-[#888888] hover:text-[var(--color-white)] transition-colors">Drum Lagging</a></li>
                    </ul>
                </div>

                {/* Products Col */}
                <div className="flex flex-col gap-[16px] shrink-0 w-[220px]">
                    <h4 className="text-[18px] font-bold text-[var(--color-white)]">Products</h4>
                    <ul className="flex flex-col gap-[16px]">
                        <li><a href="#" className="text-[16px] font-normal text-[#888888] hover:text-[var(--color-white)] transition-colors">Rollers</a></li>
                        <li><a href="#" className="text-[16px] font-normal text-[#888888] hover:text-[var(--color-white)] transition-colors">Drums</a></li>
                        <li><a href="#" className="text-[16px] font-normal text-[#888888] hover:text-[var(--color-white)] transition-colors">Skirts</a></li>
                        <li><a href="#" className="text-[16px] font-normal text-[#888888] hover:text-[var(--color-white)] transition-colors">Scrapers</a></li>
                        <li><a href="#" className="text-[16px] font-normal text-[#888888] hover:text-[var(--color-white)] transition-colors">Cleaners</a></li>
                        <li><a href="#" className="text-[16px] font-normal text-[#888888] hover:text-[var(--color-white)] transition-colors">Fasteners & Clips</a></li>
                        <li><a href="#" className="text-[16px] font-normal text-[#888888] hover:text-[var(--color-white)] transition-colors">Chute Lining</a></li>
                    </ul>
                </div>

                {/* Industries Col */}
                <div className="flex flex-col gap-[16px] shrink-0 w-[220px]">
                    <h4 className="text-[18px] font-bold text-[var(--color-white)]">Industries</h4>
                    <ul className="flex flex-col gap-[16px]">
                        <li><a href="#" className="text-[16px] font-normal text-[#888888] hover:text-[var(--color-white)] transition-colors">Quarrying & Aggregates</a></li>
                        <li><a href="#" className="text-[16px] font-normal text-[#888888] hover:text-[var(--color-white)] transition-colors">Recycling & Waste</a></li>
                        <li><a href="#" className="text-[16px] font-normal text-[#888888] hover:text-[var(--color-white)] transition-colors">Construction & Demolition</a></li>
                        <li><a href="#" className="text-[16px] font-normal text-[#888888] hover:text-[var(--color-white)] transition-colors">Agriculture & Bulk</a></li>
                        <li><a href="#" className="text-[16px] font-normal text-[#888888] hover:text-[var(--color-white)] transition-colors">Manufacturing & Logistics</a></li>
                    </ul>
                </div>

                {/* Contact Col */}
                <div className="flex flex-col gap-[16px] shrink-0 w-[300px]">
                    <h4 className="text-[18px] font-bold text-[var(--color-white)]">Contact</h4>
                    <ul className="flex flex-col gap-[16px]">
                        <li><a href="tel:07891642141" className="text-[16px] font-bold text-[var(--color-meteor)] hover:opacity-80 transition-opacity">Emergency: 07891 642141</a></li>
                        <li><a href="mailto:sales@nevulcanising.co.uk" className="text-[16px] font-normal text-[#888888] hover:text-[var(--color-white)] transition-colors">sales@nevulcanising.co.uk</a></li>
                        <li><span className="text-[16px] font-normal leading-[1.5] text-[#888888] block">Unit 14 Hyde Park Trading Estate<br />Stoke-on-Trent, ST4 1DS</span></li>
                    </ul>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
