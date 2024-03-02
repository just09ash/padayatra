import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          हम आपको प्रदान करते हैं
          <span className='text-coral-red'> शानदार </span>
          <span className='text-coral-red'>गुणवत्ता</span> वाले जूते
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          प्रीमियम सुख और शैली सुनिश्चित करने के लिए, हमारे सुयोगपूर्ण निर्मित
          जूते को उच्च अनुभव में उत्कृष्टता, नवाचार और सुसंगतता के साथ प्रदान करने के लिए
          डिज़ाइन किया गया है।
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          हमारी विवेकशीलता और उत्कृष्टता के प्रति हमारा समर्पण आपकी संतुष्टि सुनिश्चित करता है
        </p>
        <div className='mt-11'>
          <Button label='विवरण देखें' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='उत्पाद विवरण'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
