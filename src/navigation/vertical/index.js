// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import {FileAccount,MessageFast,Contacts,Poll} from "mdi-material-ui"

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/dashboard'
    },

    // {
    //   title: 'Account Settings',
    //   icon: AccountCogOutline,
    //   path: '/account-settings'
    // },
    {
      title: 'Contact File Upload',
      icon: FileAccount,
      path: '/contact-file-upload'
    },
    {
      title: 'Send SMS',
      icon: MessageFast,
      path: '/send-sms'
    },
    {
      title: 'Contact List',
      icon: Contacts,
      path: '/contact-list'
    },
    {
      title: 'Reports',
      icon: Poll,
      path: '/reports'
    },

    // {
    //   title: 'Plans',
    //   icon: AccountCogOutline,
    //   path: '/plans'
    // },
    // {
    //   sectionTitle: 'Pages'
    // },
    // {
    //   title: 'Login',
    //   icon: Login,
    //   path: '/pages/login',
    //   openInNewTab: false
    // },
    // {
    //   title: 'Register',
    //   icon: AccountPlusOutline,
    //   path: '/pages/register',
    //   openInNewTab: false
    // },
    // {
    //   title: 'Error',
    //   icon: AlertCircleOutline,
    //   path: '/pages/error',
    //   openInNewTab: false
    // },
    // {
    //   sectionTitle: 'User Interface'
    // },
    // {
    //   title: 'Typography',
    //   icon: FormatLetterCase,
    //   path: '/typography'
    // },
    // {
    //   title: 'Icons',
    //   path: '/icons',
    //   icon: GoogleCirclesExtended
    // },
    // {
    //   title: 'Cards',
    //   icon: CreditCardOutline,
    //   path: '/cards'
    // },
    // {
    //   title: 'Tables',
    //   icon: Table,
    //   path: '/tables'
    // },
    // {
    //   icon: CubeOutline,
    //   title: 'Form Layouts',
    //   path: '/form-layouts'
    // }
  ]
}

export default navigation
