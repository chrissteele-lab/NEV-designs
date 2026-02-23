import Concept5Hero from './components/Concept5Hero';
import Concept5Intro from './components/Concept5Intro';
import Concept5Capabilities from './components/Concept5Capabilities';
import Industries from './components/Industries';
import FAQs from './components/FAQs';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <main className="w-full flex justify-center bg-[#E5E5E5] min-h-screen">
      {/* Root Container mimicking the Concept 5 Frame Width 1920px */}
      <div className="w-[1920px] max-w-[100vw] bg-white flex flex-col shadow-2xl relative overflow-x-hidden">

        <Concept5Hero />
        <Concept5Intro />
        <Concept5Capabilities />
        <Industries />
        <FAQs />
        <CTASection />
        <Footer />

      </div>
    </main>
  );
}

export default App;
