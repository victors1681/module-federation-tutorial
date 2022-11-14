import dynamic from 'next/dynamic';
 
const Page = dynamic(() => import('shop/pages/catalog'), { ssr: false});
 
export default Page;