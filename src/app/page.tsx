import Image from "next/image";
import Game from "@/app/components/board";
import styles from '@/app/styles/home.module.css'

const Home: React.FC = () => {
  return (
    <div className = {styles.container}>
      <Game />
    </div>
  );
};

export default Home;