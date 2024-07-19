import Image from "next/image";
import Board from "@/app/components/board";
import styles from '@/app/styles/home.module.css'

const Home: React.FC = () => {
  return (
    <div className = {styles.container}>
      <Board />
    </div>
  );
};

export default Home;