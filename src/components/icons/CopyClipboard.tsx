import { FC } from 'react'
import { useSelector } from 'react-redux'
import Icon from '../../@types/Icon'
import themeColors from '../../selectors/themeColors'

/** Clipboard icon. */
const CopyClipboard: FC<Icon> = ({ fill, size = 20, style }) => {
  const colors = useSelector(themeColors)
  return (
    <svg
      className='icon'
      x='0px'
      y='0px'
      viewBox='0 0 15 18'
      width={size}
      height={size}
      fill={fill || colors.fg}
      style={style}
    >
      <g>
        <path d='M12.0413194,1.56112169 L10.4044069,1.56112169 C10.1852017,0.645644518 9.36671128,0 8.42535623,0 C7.48400117,0 6.66551071,0.645644518 6.44630556,1.56112169 L4.8093931,1.56112169 C3.64519863,1.56112169 2.70143254,2.50488778 2.70143254,3.66908225 L2.70143254,6.02918733 L2.00661631,6.02918733 C0.898948323,6.03052752 0.00134019262,6.92813565 0,8.03580364 L0,15.1299017 C0.00134019262,16.2375697 0.898948323,17.1351778 2.00661631,17.136518 L7.07463996,17.136518 C8.18230794,17.1351778 9.07991607,16.2375697 9.08125626,15.1299017 L9.08125626,14.8331657 L12.0421301,14.8331657 C12.601196,14.8331657 13.137364,14.6110776 13.5326833,14.2157584 C13.9280026,13.8204391 14.1500907,13.284271 14.1500907,12.7252051 L14.1500907,3.66908225 C14.1500907,3.10987585 13.9278914,2.57358493 13.5323967,2.17824232 C13.136902,1.78289972 12.6005257,1.56090661 12.0413194,1.56112169 Z M8.42454547,0.970892729 C8.82469233,0.974449071 9.18887531,1.2026119 9.36664169,1.56112169 L7.48001699,1.56112169 C7.65840394,1.20214976 8.02370067,0.974192056 8.42454547,0.971703483 L8.42454547,0.970892729 Z M6.0255242,2.53402656 L10.8251883,2.53402656 L10.8251883,3.15344267 C10.8251883,3.33254951 10.6799935,3.47774429 10.5008866,3.47774429 L6.34982582,3.47774429 C6.17071898,3.47774429 6.0255242,3.33254951 6.0255242,3.15344267 L6.0255242,2.53402656 Z M8.10754063,15.1299017 C8.10664915,15.7001187 7.64485613,16.1622742 7.07463996,16.1636131 L2.00661631,16.1636131 C1.43608349,16.1627203 0.97379773,15.7004345 0.972904876,15.1299017 L0.972904876,8.03580364 C0.97379773,7.46527082 1.43608349,7.00298506 2.00661631,7.00209199 L5.50339858,7.00209199 C5.64298218,7.00196524 5.77687841,7.05739069 5.8755347,7.15613548 L7.95268661,9.23328739 C8.05178345,9.33203998 8.10725286,9.46633435 8.10672988,9.60623426 L8.10754063,15.1299017 Z M13.176375,12.7252051 C13.176375,13.3520791 12.6681933,13.8602608 12.0413194,13.8602608 L9.08044551,13.8602608 L9.08044551,9.6054235 C9.08173062,9.20738363 8.9234586,8.82542827 8.64101681,8.54495719 L6.56467565,6.46861603 C6.28410164,6.18632772 5.90221342,6.02808352 5.50420934,6.02918733 L3.67433742,6.02918733 L3.67433742,3.66908225 C3.67433742,3.04220831 4.18251916,2.53402656 4.8093931,2.53402656 L5.05261932,2.53402656 L5.05261932,3.15344267 C5.05261932,3.86987004 5.63339846,4.45064917 6.34982582,4.45064917 L10.5008866,4.45064917 C10.8449272,4.45064917 11.1748767,4.31397959 11.4181501,4.07070618 C11.6614236,3.82743277 11.7980931,3.49748322 11.7980931,3.15344267 L11.7980931,2.53402656 L12.0413194,2.53402656 C12.6681933,2.53402656 13.176375,3.04220831 13.176375,3.66908225 L13.176375,12.7252051 Z'></path>
      </g>
    </svg>
  )
}

export default CopyClipboard
