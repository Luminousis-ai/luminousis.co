import React, { useState, useEffect, useCallback } from 'react';
import styles from '../styles/projection/RevenueProjection.module.css';

// Import visualization components
import KeyMetrics from '../components/projection/KeyMetrics';
import RevenueGraph from '../components/projection/RevenueGraph';
import UsersGraph from '../components/projection/UsersGraph';
import ProjectionTable from '../components/projection/ProjectionTable';
import Sidebar from '../components/projection/Sidebar';

// Chart.js imports
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RevenueProjection = () => {
  // State for subscription plans
  const [subscriptionPlans, setSubscriptionPlans] = useState([
    { name: 'Free', price: 0.70, distribution: 80 },
    { name: 'Standart', price: 5.00, distribution: 15 },
    { name: 'Premium', price: 12.50, distribution: 5 }
  ]);

  // State for growth settings
  const [growthSettings, setGrowthSettings] = useState({
    monthlyGrowthRate: 8,
    churnRate: 0
  });

  // State for marketing campaigns
  const [campaigns, setCampaigns] = useState([]);

  // State for projection data
  const [projectionData, setProjectionData] = useState(null);

  // State for sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Move calculateProjections into useCallback
  const calculateProjections = useCallback(() => {
    const months = 12;
    const monthlyData = [];
    let totalRevenue = 0;
    let totalMarketingCost = 0;
    let campaignRevenue = new Array(12).fill(0);
    let subscriptionData = [];
    let currentUsers = 100;
    let campaignUsers = 0;

    // Marketing cost hesaplama fonksiyonu
    const calculateMarketingCost = (campaign, duration) => {
      return campaign.cost / duration;
    };

    // Campaign users hesaplama fonksiyonu
    const calculateCampaignUsers = (campaign, duration) => {
      return (campaign.reach * campaign.downloadRate * campaign.activeRate) / 
             (100 * 100 * duration);
    };

    for (let month = 0; month < months; month++) {
        const growthRate = growthSettings.monthlyGrowthRate / 100;
        const churnRate = growthSettings.churnRate / 100;
        const netGrowthRate = growthRate - churnRate;
        
        const organicGrowth = Math.round(currentUsers * netGrowthRate);
        let monthCampaignUsers = 0;
        let monthCampaignRevenue = 0;
        
        // Campaign calculations
        campaigns
            .filter(c => c.startMonth <= month + 1 && c.startMonth + c.duration > month + 1)
            .forEach(campaign => {
                const newUsers = calculateCampaignUsers(campaign, campaign.duration);
                monthCampaignUsers += newUsers;
                totalMarketingCost += calculateMarketingCost(campaign, campaign.duration);
            });
        campaignUsers += monthCampaignUsers;
        
        // Calculate total users with rounding
        const totalUsers = Math.round(currentUsers + organicGrowth + monthCampaignUsers);
        
        // Calculate subscription distribution with rounding
        const subscriptionDistribution = {
            basic: Math.round(totalUsers * (subscriptionPlans[0].distribution / 100)),
            standard: Math.round(totalUsers * (subscriptionPlans[1].distribution / 100)),
            premium: Math.round(totalUsers * (subscriptionPlans[2].distribution / 100))
        };
        
        // Ensure total matches by adjusting basic tier if necessary
        const totalDistributed = subscriptionDistribution.basic + 
                               subscriptionDistribution.standard + 
                               subscriptionDistribution.premium;
        
        if (totalDistributed !== totalUsers) {
            subscriptionDistribution.basic += (totalUsers - totalDistributed);
        }
        
        subscriptionData.push(subscriptionDistribution);
        
        // Calculate revenue with rounded numbers
        const monthRevenue = subscriptionPlans.reduce((sum, plan, index) => {
            const planUsers = subscriptionDistribution[['basic', 'standard', 'premium'][index]];
            const planRevenue = planUsers * plan.price;
            if (index === 0) monthCampaignRevenue = planRevenue * (campaignUsers / totalUsers);
            return sum + planRevenue;
        }, 0);
        
        campaignRevenue[month] = monthCampaignRevenue;
        totalRevenue += monthRevenue;
        
        // Store monthly data with rounded numbers
        monthlyData.push({
            organicUsers: Math.round(currentUsers + organicGrowth),
            campaignUsers: Math.round(campaignUsers),
            totalUsers,
            growthRate: ((totalUsers - currentUsers) / currentUsers) * 100,
            revenue: monthRevenue,
            subscriptionDistribution,
            monthCampaignRevenue
        });
        
        currentUsers = totalUsers;
    }
    
    // Calculate averages and growth rates
    const averageGrowth = monthlyData.reduce((sum, month) => sum + month.growthRate, 0) / months;
    const avgCampaignGrowth = campaignUsers / months;
    const marketingROI = totalMarketingCost > 0 ? 
        ((totalRevenue - totalMarketingCost) / totalMarketingCost) * 100 : 0;
    
    setProjectionData({
        monthlyData,
        totalRevenue,
        averageGrowth,
        marketingROI,
        totalUsers: monthlyData.map(m => m.totalUsers),
        monthlyRevenue: monthlyData.map(m => m.revenue),
        subscriptionData,
        campaignRevenue,
        avgCampaignGrowth
    });
  }, [subscriptionPlans, growthSettings, campaigns]);

  // Update useEffect
  useEffect(() => {
    calculateProjections();
  }, [calculateProjections]);

  return (
    <div className={styles.container}>
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
        <Sidebar 
          subscriptionPlans={subscriptionPlans}
          setSubscriptionPlans={setSubscriptionPlans}
          growthRate={growthSettings.monthlyGrowthRate}
          setGrowthRate={(rate) => setGrowthSettings(prev => ({...prev, monthlyGrowthRate: rate}))}
          churnRate={growthSettings.churnRate}
          setChurnRate={(rate) => setGrowthSettings(prev => ({...prev, churnRate: rate}))}
          campaigns={campaigns}
          setCampaigns={setCampaigns}
        />
      </div>

      <button 
        className={styles.sidebarToggle}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label={isSidebarOpen ? "Close settings panel" : "Open settings panel"}
      >
        {isSidebarOpen ? "Close" : "Settings"}
      </button>

      <div className={`${styles.content} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
        <KeyMetrics 
          data={projectionData} 
          subscriptionPlans={subscriptionPlans}
        />
        <div className={styles.graphs}>
          <RevenueGraph data={projectionData} isSidebarOpen={isSidebarOpen} />
          <UsersGraph data={projectionData} isSidebarOpen={isSidebarOpen} />
        </div>
        <ProjectionTable 
          data={projectionData} 
          subscriptionPlans={subscriptionPlans}
        />
      </div>
      
      {isSidebarOpen && <div className={styles.overlay} onClick={() => setIsSidebarOpen(false)} />}
    </div>
  );
};

export default RevenueProjection; 