import Head from 'next/head';
import Avatar from '../components/Avatar';
import {MicrophoneIcon, SearchIcon, ViewGridIcon} from "@heroicons/react/solid";
import Image from 'next/image';
import Footer from '../components/Footer';
import { useRef } from 'react';
import { useRouter } from 'next/router';


export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef (null);
   
    const search = (e) => {
      e.preventDefault();

      const term = searchInputRef.current.value;

      if (!term) return;

      router.push(`/search?term=${term}`)
    };

  return (
    <div className="flex flex-col justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <header className="flex w-full p-5 justify-between
    text-sm text-gray-700">

      <div className="flex space-x-4 items-center"> 
    <p className="link">About</p>
    <p className="link">Store</p>
      </div>
        
      <div className="flex space-x-4 items-center">
    <p className="link">Gmail</p>
    <p className="link">Images</p>


   {/* Icon */}
   <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100"/>

   <Avatar url="https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png" />
      </div>
    </header>
          

    {/* Body */}
    <form className="flex flex-col items-center mt-44 flex-grow">
      <Image 
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" height={100} width={300}/>

        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-l max-w-md rounded-full border border-gray-200
        px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500 "/>
          <input 
          ref={searchInputRef}
          type="text" 
          className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5"/>
        </div>
    
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
        <button onClick={search} className="btn">Google Search</button>
        <button onClick={search} className="btn">I'm Feeling Lucky</button>
        </div>
    </form>

    <Footer/>
    </div>
    ); 
}
