"use client"
// import styles from "./page.module.css";
import './page.css'
import ProfileCard from "@/component/ProfileCard/ProfileCard";
import ProfileDetail from "@/component/ProfileDetail/ProfileDetail";
export default function Home() {
  return (
    <div className="profile">
      <ProfileCard></ProfileCard>
      <ProfileDetail />
    </div>
  );
}
