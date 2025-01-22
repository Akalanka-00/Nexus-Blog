import styles from "@/app/homepage.module.css"
import CardList from "@/components/cardlist/Cardlist";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";
export default function Home() {
  return (
    <div className={styles.container}>
      <Featured/>
      <CategoryList/>
      <div className={styles.content}>
        <CardList/>
        <Menu/>
      </div>
    </div>
  );
}
