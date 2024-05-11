import { Action } from "@/components/action";
import { CardUi } from "@/components/cards";
import { Header } from "@/components/header";
import { Lamp } from "@/components/ui/lamp";
import FAQ from "@/components/faqfooter";



export default function Home() {
  return (
    <>
      <div>
      <Header />

        
      </div>
        <CardUi />
        <div>
          <Action/>
        </div>
        <FAQ/>
    </>
  );
}
