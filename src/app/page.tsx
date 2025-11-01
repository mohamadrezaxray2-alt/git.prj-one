import Banner from "@/components/Banner";
import NewProducts from "@/components/NewProducts";
import MainProductListing from "@/components/MainProductListing";

export default function Home() {
  return (
    <main>
      <Banner />
      <NewProducts />
      <MainProductListing />
    </main>
  );
}
