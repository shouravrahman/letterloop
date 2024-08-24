

const SUbscribeForm = () => {
   return (
      <form className="relative w-[600px] p-[50px] mt-[50px] mx-auto bg-white bg-[url('https://subtlepatterns.com/patterns/geometry.png')] bg-repeat font-montserrat font-normal  shadow-sm border border-indigo-100">
         <div className="absolute w-[400px] h-[1150px] bg-indigo-500 opacity-80 rotate-[45deg] top-[-300px] left-[-60px] z-[-1]"></div>

         <label
            htmlFor="email"
            className="block py-6 mb-6 text-[36px] font-bold tracking-[10px] uppercase border-t-4 border-b-4 border-black w-[30%] transition-all duration-200 "
         >
            Subscribe to my mailing list
         </label>

         <div className='flex'>
            <input
               type="email"
               name="email"
               placeholder="email address"
               required
               className="bg-white border border-1 w-[320px] p-[30px] text-[14px] font-normal tracking-[2px] uppercase focus:outline-none float-left"
            />
            <input
               type="submit"
               value="Subscribe"
               name="subscribe"
               className="text-white bg-gradient-to-r from-indigo-400 via-indigo-600 to-indigo-700 bg-[length:200%_100%] bg-left-bottom border-0 w-[180px] p-[30px] text-[14px] font-normal tracking-[2px] uppercase transition-all duration-200 cursor-pointer hover:bg-right-bottom"
            />
         </div>
      </form>
   );
};

export default SUbscribeForm;
