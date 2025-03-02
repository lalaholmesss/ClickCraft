import React from 'react';
import LandingPage from '../components/HomePage/LandingPage/LandingPage';
import ProfileSetUp from '../components/HomePage/ProfileSetUp/ProfileSetUp';
import ReachOut from '../components/HomePage/ReachOut/ReachOut';
import RecentUsers from '../components/HomePage/RecentUsers/RecentUsers';
import TopPortfolios from '../components/HomePage/TopPortfolios/TopPortfolios';

export default function Home() {
  return (
    <div>
        <LandingPage />
        <ProfileSetUp />
        <TopPortfolios />
        <RecentUsers />
        <ReachOut />
    </div>
  )
}
