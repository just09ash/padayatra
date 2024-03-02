import { Button } from "../components";

const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10'
    >
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>
        अपडेट्स और समाचार के लिए साइन अप करें
        <span className='text-coral-red'> और </span> न्यूजलेटर
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type='text' placeholder='subscribe@padayatra.com' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label='साइन अप करें' fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
