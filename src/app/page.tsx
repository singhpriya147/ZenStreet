"use client"
import styles from "./page.module.css";
import ProfileCard from "@/component/ProfileCard/ProfileCard";
export default function Home() {
  return (
    <div className={styles.page}>
     <h1>hello</h1>
     <ProfileCard></ProfileCard>
      
    </div>
  );
}
