import styles from "./page.module.css"
import Header from "@/components/header/Header";
import Welcome from "@/widgets/welcome/Welcome"
import About from "@/widgets/about_us/About_us";
import Catalog from "@/widgets/catalog/Catalog";
import Green from "@/widgets/green_bronze/Green";
import Sale from "@/widgets/sale/Sale";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Welcome/>
      <About/>
      <Catalog/>
      <Green/>
      <Sale/>
      <Footer/>
    </main>
  );
}
