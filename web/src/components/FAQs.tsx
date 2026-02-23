
const FAQs = () => {
    const faqs = [
        {
            q: 'Do you offer 24/7 emergency services?',
            a: 'Yes, we offer 24/7 emergency belt repair services. If your system breaks down unexpectedly, call our breakdown team at 07891 642141, and we will be on-site as soon as possible to minimise downtime.'
        },
        {
            q: 'Can repairs be carried out on-site?',
            a: 'Yes, our experienced team can carry out most conveyor belt repairs directly at your site, ensuring minimal disruption. We offer hot and cold vulcanising, as well as mechanical and clip joints.'
        },
        {
            q: 'When should a belt be repaired vs replaced?',
            a: 'Common signs include excessive wear, unusual noises, or misalignment. We always aim to work within your budget, but in some cases, upgrading to a more efficient system is more cost-effective in the long run. Contact us for a site survey.'
        },
        {
            q: 'Are you certified for on-site work?',
            a: 'We hold all relevant training and certifications to guarantee the highest safety and quality standards. If we are unable to access your site, we can provide an endless belt for you to fit yourself.'
        },
        {
            q: 'Do you supply other conveyor components?',
            a: 'Yes! We supply and fit a wide range of conveyor components, including rollers, scrapers, skirts, drums, impact bars, and more, ensuring only the highest-quality components are used.'
        }
    ];

    return (
        <section className="flex flex-col lg:flex-row gap-[120px] py-[120px] px-[80px] w-full bg-[var(--color-nobel)] font-primary">
            {/* Intro Column */}
            <div className="flex flex-col gap-[40px] w-full max-w-[670px] shrink-0">
                <h3 className="text-[18px] font-bold tracking-[4px] text-[var(--color-thunderbird)] uppercase">
                    TECHNICAL SUPPORT & HELP
                </h3>
                <p className="w-full text-[40px] font-medium leading-[1.3] text-[var(--color-heavy-metal)] tracking-[-1px]">
                    We understand that maintaining high-performance conveyor systems often comes with technical challenges. Browse our frequently asked questions to learn more about our on-site capabilities, 24/7 support, and how we help you minimise downtime.
                </p>
            </div>

            {/* Accordions Column */}
            <div className="flex flex-col gap-[80px] w-full">
                {faqs.map((faq, idx) => (
                    <div key={idx} className="flex flex-col gap-[40px] pb-[40px] border-b border-[var(--color-heavy-metal)] last:border-0">
                        <h4 className="w-full text-[48px] md:text-[55px] font-black italic leading-[1] text-[var(--color-heavy-metal)] uppercase">
                            {faq.q}
                        </h4>
                        <p className="w-full max-w-[640px] text-[24px] font-normal leading-[1.3] text-[var(--color-heavy-metal)] opacity-80">
                            {faq.a}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQs;
