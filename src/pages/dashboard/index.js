// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import { Cog,Contacts,ChartBar,FileUpload,MessageProcessing } from 'mdi-material-ui'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { useRouter } from 'next/router'

import DotsVertical from 'mdi-material-ui/DotsVertical'


const Dashboard = () => {

  const CardStatisticsVertical2 = props => {
    // ** Props
    const { title,color, icon,onClick } = props
    const router = useRouter()

    return (
      <Card onClick={() => router.push(onClick)} sx={{cursor:"pointer"}}>
        <CardContent>
          <Box sx={{ display: 'flex', marginBottom: 5.5, alignItems: 'center', justifyContent: 'center' }}>
            <Avatar sx={{ boxShadow: 3, color: 'common.white', backgroundColor: `${color}.main` }}>
              {icon}
            </Avatar>
            {/* <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
              <DotsVertical />
            </IconButton> */}
          </Box>
          <Typography sx={{ fontWeight: 600, fontSize: '0.875rem', textAlign:"center", alignItems: 'center', justifyContent: 'center' }}>{title}</Typography>
          {/* <Box sx={{ marginTop: 1.5, display: 'flex', flexWrap: 'wrap', marginBottom: 1.5, alignItems: 'flex-start' }}>
            <Typography variant='h6' sx={{ mr: 2 }}>
              {stats}
            </Typography>
            <Typography
              component='sup'
              variant='caption'
              sx={{ color: trend === 'positive' ? 'success.main' : 'error.main' }}
            >
              {trendNumber}
            </Typography>
          </Box> */}
          {/* <Typography variant='caption'>{subtitle}</Typography> */}
        </CardContent>
      </Card>
    )
  }

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
      <Grid item xs={12} md={8}>
          <StatisticsCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <Trophy />
        </Grid>

        {/* <Grid item xs={12} md={6} lg={4}>
          <WeeklyOverview />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TotalEarning />
        </Grid> */}
        <Grid item xs={12} md={12} lg={12}>
          <Grid container spacing={6}>
          <Grid item xs={6}>
              <CardStatisticsVertical2
                color='primary'
                title='Send SMS'
                icon={<MessageProcessing />}
                onClick="/send-sms"
              />
            </Grid>
          <Grid item xs={6}>
              <CardStatisticsVertical2
                icon={<Cog />}
                color='primary'
                title='Settings'
                onClick="/account-settings"
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVertical2
                icon={<Contacts />}
                color='primary'
                title='Contacts'
                onClick="/contact-list"
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVertical2
                title='Reports'
                color='primary'
                icon={<ChartBar />}
                onClick="/reports"
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVertical2
                title='Upload Contacts'
                color='primary'
                icon={<FileUpload />}
                onClick="/contact-file-upload"
              />
            </Grid>

          </Grid>
        </Grid>
        {/* <Grid item xs={12} md={6} lg={4}>
          <SalesByCountries />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <DepositWithdraw />
        </Grid>
        <Grid item xs={12}>
          <Table />
        </Grid> */}
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
