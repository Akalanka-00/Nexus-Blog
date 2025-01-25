/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "@/app/homepage.module.css"
import CardList from "@/components/cardlist/Cardlist";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";


export default function Home({searchParams}: { searchParams: any }) {

  const page = parseInt(searchParams.page) || 1;
  return (
    <div className={styles.container}>
      <Featured/>
      <CategoryList/>
      <div className={styles.content}>
        <CardList page={page}/>
        <Menu/>
      </div>
    </div>
  );
}
