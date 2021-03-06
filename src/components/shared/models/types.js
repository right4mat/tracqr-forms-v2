import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked'
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined'
import ShortTextIcon from '@material-ui/icons/ShortText'
import SubjectIcon from '@material-ui/icons/Subject'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import LinkIcon from '@material-ui/icons/Link'
import ToggleOnIcon from '@material-ui/icons/ToggleOn'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import PhoneIcon from '@material-ui/icons/Phone'
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined'
import Looks6OutlinedIcon from '@material-ui/icons/Looks6Outlined'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import DateRangeIcon from '@material-ui/icons/DateRange'
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined'
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import {
  valSelection,
  valFile,
  valText,
  valEmail,
  valPhone,
  valNumber,
  valSwitch,
  valStar
} from '../functions/validation'

const data = {
  RAB: {
    text: 'Radio Button',
    icon: RadioButtonCheckedIcon,
    iconColor: '#0f766e',
    color: '#ccfbf1',
    validator: valSelection
  },
  CHB: {
    text: 'Check Box',
    icon: CheckBoxOutlinedIcon,
    iconColor: '#2857da',
    color: '#dbeafe',
    validator: valSelection 
  },
  SHT: {
    text: 'Short Text',
    icon: ShortTextIcon,
    iconColor: '#c2410c',
    color: '#ffedd5',
    validator: valText
  },
  LOT: {
    text: 'Long Text',
    icon: SubjectIcon,
    iconColor: '#b91c1c',
    color: '#fee2e2',
    validator: valText
  },
  EMA: {
    text: 'Email Address',
    icon: AlternateEmailIcon,
    iconColor: '#118060',
    color: '#d1fae5',
    validator: valEmail
  },
  LIN: {
    text: 'Link',
    icon: LinkIcon,
    iconColor: '#4338ca',
    color: '#e0e7ff',
  },
  YEN: {
    text: 'Switch',
    icon: ToggleOnIcon,
    iconColor: '#b91c1c',
    color: '#fee2e2',
    validator: valSwitch
  },
  STR: {
    text: 'Star Rating',
    icon: StarBorderIcon,
    iconColor: '#b45309',
    color: '#fef3c7',
    validator: valStar
  },
  PHN: {
    text: 'Phone Number',
    icon: PhoneIcon,
    iconColor: '#047857',
    color: '#d1fae5',
    validator: valPhone
  },
  DRD: {
    text: 'Drop Down',
    icon: ArrowDropDownCircleOutlinedIcon,
    iconColor: '#0f766e',
    color: '#ccfbf1',
    validator: valSelection
  },
  NUM: {
    text: 'Number',
    icon: Looks6OutlinedIcon,
    iconColor: '#1d4ed8',
    color: '#dbeafe',
    validator: valNumber
  },
  TIM: {
    text: 'Time',
    icon: AccessTimeIcon,
    iconColor: '#4338ca',
    color: '#e0e7ff',
    validator: valText
  },
  DAT: {
    text: 'Date',
    icon: DateRangeIcon,
    iconColor: '#6d28d9',
    color: '#ede9fe',
    validator: valText
  },
  SLI: {
    text: 'Slider',
    icon: TuneOutlinedIcon,
    iconColor: '#047857',
    color: '#d1fae5',
    validator: valNumber
  },
  FIU: {
    text: 'File Upload',
    icon: CloudUploadOutlinedIcon,
    iconColor: '#424c5b',
    color: '#f3f4f6',
    validator: valFile
  },
  FID: {
    text: 'File Download',
    icon: CloudDownloadOutlinedIcon,
    iconColor: '#424c5b',
    color: '#f3f4f6',
    validator: valFile
  }
}

export default data
