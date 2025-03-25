import Faq from "@/components/home/Faq";
import Account from "@/components/home/Account";
import Hero from "@/components/home/Hero";
import Money_instantly from "@/components/home/Money_instantly";
import Notifications from "@/components/home/Notifications";
import One_app from "@/components/home/One_app";
import One_anking from "@/components/home/One_banking";
import Saving_accounts from "@/components/home/Saving_accounts";
import Testimonials from "@/components/home/Testimonials";
import Tools from "@/components/home/Tools";
import Blog from "@/components/home/Blog";





export default function Home() {
  return (
   <>
   <Hero/>
   <One_anking/>
   <Money_instantly/>
   <Saving_accounts/>
   <Notifications/>
   <Tools/>
   <Account/>
   <Testimonials/>
   <One_app/>
   <Faq/>
   <Blog/>
   </>
  );
}
