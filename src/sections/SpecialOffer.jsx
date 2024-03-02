import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>विशेष </span>
          प्रस्ताव
        </h2>
        <p className='mt-4 info-text'>
          एक खरीदारी यात्रा पर प्रारंभ करें जो अप्रतिम डील्स के साथ आपके अनुभव को
          पुनर्परिभाषित करती है। प्रमुख चयनों से लेकर अविश्वसनीय बचत तक, हम एक
          अपरिसीमित मूल्य प्रदान करते हैं जो हमें अलग बनाता है।
        </p>
        <p className='mt-6 info-text'>
          एक अनूठी इच्छाओं को पूरा करने के लिए डिज़ाइन किए गए संभावना क्षेत्र में
          भ्रमण करें, श्रेष्ठ प्रत्याशाओं को पार करते हुए। हमारे साथ आपका सफर
          सिर्फ असामान्य नहीं है।
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='अब खरीदें' iconURL={arrowRight} />
          <Button
            label='और अधिक जानें'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
