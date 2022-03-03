// @ts-check

// spoiler alert
const wordsEasy = [
  "VE9MRA==",
  "UE9ORA==",
  "V09SRA==",
  "VEVBTQ==",
  "TE9WRQ==",
  "RE9HUw==",
  "Q1VQUw==",
  "U0FNRQ==",
  "UElHUw==",
  "Q0xBVw==",
  "QklLRQ==",
  "TEVHUw==",
  "R0lGVA==",
  "V0lERQ==",
  "UkFURQ==",
  "TUlORA==",
  "U1dBTg==",
  "QkVMVA==",
  "Rk9SVA==",
  "VEVOVA==",
  "U09GVA==",
  "REVOVA==",
  "U0xJUA==",
  "Q0hBVA==",
  "S0FMRQ==",
  "U0FMVA==",
  "TE9PSw==",
  "QkFLRQ==",
  "SEFWRQ==",
  "Q0FWRQ==",
  "UEFSSw==",
  "TEFORA==",
  "QkFMTA==",
  "UEFXUw==",
  "RklMTA==",
  "TFVDSw==",
  "SE9STg==",
  "Q0xBTQ==",
  "R1JPVw==",
  "R0lWRQ==",
  "TkFJTA==",
  "TEVOVA==",
  "SE9MRA==",
  "TUlDRQ==",
  "RkFLRQ==",
  "T1dMUw==",
  "VEFQUw==",
  "RkxBVA==",
  "VEhJUw==",
  "VE9ZUw==",
  "Sk9LRQ==",
  "VFJFRQ==",
  "QkVMTA==",
  "UFJBWQ==",
  "VkFOUw==",
  "SlVNUA==",
  "Uk9ERQ==",
  "VFJJUA==",
  "U0xPVw==",
  "Q0hPUA==",
  "RUFDSA==",
  "UEVUUw==",
  "TUlOVA==",
  "Qk9PVA==",
  "TUFUUw==",
  "S0lDSw==",
  "RUdHUw==",
  "TUlMSw==",
  "VE9BRA==",
  "U0FOSw==",
  "S0VFUA==",
  "Q0FSRQ==",
  "Q0FTVA==",
  "SFVNUA==",
  "U0FJRA==",
  "TFVNUA==",
  "V0lORw==",
  "UklORw==",
  "U09ORw==",
  "U0hPRQ==",
  "RFVNUA==",
  "RFJBVw==",
  "Q0FLRQ==",
  "U1RBUg==",
  "U0lOSw==",
  "V0VTVA==",
  "R09ORQ==",
  "S0lTUw==",
  "UEVTVA==",
  "U0VMTA==",
  "UkVTVA==",
  "R0VSTQ==",
  "SEVBRA==",
  "UkFUUw==",
  "R1VTVA==",
  "SElERQ==",
  "QlJBRw==",
  "QkVEUw==",
  "TUFJRA==",
  "VFJBUA==",
  "Q09PTA==",
  "REVTSw==",
  "RElNRQ==",
  "Q1JPVw==",
  "SE9NRQ==",
  "RElSVA==",
  "RklTSA==",
  "R09MRg==",
  "TEFXTg==",
  "Rk9SSw==",
  "RUFTVA==",
  "UElDSw==",
  "UExBWQ==",
  "TVVDSA==",
  "VFVSTg==",
  "Qk9ORQ==",
  "Tk9TRQ==",
  "U09NRQ==",
  "Q0FSRA==",
  "UkVBRA==",
  "V09MRg==",
  "U0hPUA==",
  "REVBTA==",
  "Q0FNRQ==",
  "Rk9MRA==",
  "V0FMTA==",
  "U09GQQ==",
  "Rk9PVA==",
  "U0FJTA==",
  "SFVHUw==",
  "U0hJUA==",
  "V0FSTQ==",
  "UkVOVA==",
  "Q09BVA==",
  "TEVBRg==",
  "RkVFRA==",
  "UEFJTg==",
  "Q0FORQ==",
  "TUFTSw==",
  "R0lSTA==",
  "RklORQ==",
  "RkxBRw==",
  "R1JFVw==",
  "UEFHRQ==",
  "Rk9VUg==",
  "U1RBWQ==",
  "VVNFRA==",
  "RlJBWQ==",
  "VEhFWQ==",
  "Qk9BVA==",
  "UlVTVA==",
  "VEFDTw==",
  "V0lUSA==",
  "RE9UUw==",
  "Q09STg==",
  "UEFWRQ==",
  "V09STQ==",
  "U1RPUA==",
  "UkFOSw==",
  "U1RFVw==",
  "U09BUA==",
  "S05PVw==",
  "U0laRQ==",
  "QkVBUg==",
  "SEFURQ==",
  "TkFNRQ==",
  "QkFORw==",
  "TkVUUw==",
  "TElWRQ==",
  "V0FWRQ==",
  "QU5UUw==",
  "R0FNRQ==",
  "U0FORA==",
  "QkVFUA==",
  "U1RPVw==",
  "TElLRQ==",
  "SElMTA==",
  "SE9PSw==",
  "SEVBVA==",
  "SEVSTw==",
  "RElTSA==",
  "V0FOVA==",
  "Q09ORQ==",
  "QlVOUw==",
  "U1BJVA==",
  "V09SSw==",
  "RE9ORQ==",
  "Q0FSVA==",
  "U0hPVw==",
  "TU9WRQ==",
  "QkFCWQ==",
  "VEFLRQ==",
  "RFVTVA==",
  "QkFUUw==",
  "SE9QRQ==",
  "SkFXUw==",
  "TUVBTA==",
  "QlVTSA==",
  "QlVHUw==",
  "Q09PSw==",
  "SEFORA==",
  "Q1VCRQ==",
  "RFJPUA==",
  "V0FJVA==",
  "Qk9PSw==",
  "T05DRQ==",
  "Uk9DSw==",
  "TkVTVA==",
  "Qk9STg==",
  "Uk9PTQ==",
  "RE9DSw==",
  "QkVBVA==",
  "R0FURQ==",
  "R09MRA==",
  "UElLRQ==",
  "TUFERQ==",
  "VEFOSw==",
  "QkFSTg==",
  "TUVBVA==",
  "SEFSRA==",
  "VVBPTg==",
  "TElPTg==",
  "QkFOSw==",
  "TU9PTg==",
  "RkFMTA==",
  "V0lOUw==",
  "SU5UTw==",
  "UkFHUw==",
  "TUlORQ==",
  "TElORQ==",
  "U0lERQ==",
  "RkFDRQ==",
  "SEVBTA==",
  "U0lORw==",
  "U0xFRA==",
  "V0hFTg==",
  "WUFSTg==",
  "RFVDSw==",
  "V0FTSA==",
  "QVJNUw==",
  "TUFOWQ==",
  "RUFTWQ==",
  "WUFNUw==",
  "Q09XUw==",
  "SEFSTQ==",
  "TEFLRQ==",
  "UkFORw==",
  "Vk9URQ==",
  "RFJVTQ==",
  "RlJFRQ==",
  "U0FMRQ==",
  "QkFUSA==",
  "TkFQUw==",
  "RkFORw==",
  "QkxFVw==",
  "V0FMSw==",
  "TEFTVA==",
  "VEFTSw==",
  "Wk9ORQ==",
  "VkVTVA==",
  "Q0FTRQ==",
  "U1VDSA==",
  "U0VBVA==",
  "REFSSw==",
  "RklORA==",
  "REFNUA==",
  "SEVMUA==",
  "RlJPTQ==",
  "RklSRQ==",
  "QkxVRQ==",
  "Uk9QRQ==",
  "RkFURQ==",
  "TUFURQ==",
  "TElQUw==",
  "VEFMTA==",
  "UEVBUg==",
  "VEFJTA==",
  "UkFJTg==",
  "U0hVVA==",
  "Q1JFVw==",
  "TElOSw==",
  "SElOVA==",
  "VEhFTQ==",
  "Q1JBTQ==",
  "RlJPRw==",
  "Q0xBUA==",
  "Sk9CUw==",
  "Rk9PRA==",
  "QkVOVA==",
  "Qk9MRA==",
  "Q0xVQg==",
  "REVFUA==",
  "SlVTVA==",
  "U0FWRQ==",
  "REFSVA==",
  "UExVTQ==",
  "Q1JBQg==",
  "RFJJUA==",
  "UlVHUw==",
  "TEFURQ==",
  "REVFUg==",
  "RVlFUw==",
  "T1ZFUg==",
  "V0lSRQ==",
  "VEVTVA==",
  "UEFTVA==",
  "SElLRQ==",
  "VE9FUw==",
  "QkVBTQ==",
  "RUFSUw==",
  "U1dJTQ==",
  "U09MRA==",
  "WkVSTw==",
  "TE9ORw==",
  "Q09MRA==",
  "VElNRQ==",
  "VFdJRw==",
  "Q0xBWQ==",
  "U05VRw==",
  "VE9XTg==",
  "VEhFTg==",
  "U05BUA==",
  "QkFSSw==",
  "UExBTg==",
  "QkFORA==",
  "Q1VSTA==",
  "QlVNUA==",
  "SE9MRQ==",
  "UEFDSw==",
  "TkVDSw==",
  "VkVSWQ==",
  "VEVMTA==",
  "QkVORA==",
  "Q0FHRQ==",
  "Q0FOUw==",
  "U0lDSw==",
  "R09BVA==",
  "TEFNUA==",
  "U0VFRA==",
  "RkFTVA==",
  "V0VCUw==",
  "Q0FUUw==",
  "TUVTUw==",
  "S0lORw==",
  "U1RFUA==",
  "TkVBVA==",
  "QkVTVA==",
  "TUFLRQ==",
  "Q0FSUw==",
  "SEFORw==",
  "TElNRQ==",
  "U0VBTA==",
  "Qk9JTA==",
  "Tk9URQ==",
  "UklERQ==",
  "VEFMRQ==",
  "RE9PUg==",
  "U05PVw==",
  "RElORQ==",
  "Uk9TRQ==",
  "UE9PTA==",
  "SEFJUg==",
  "RklWRQ==",
  "R1JJTg==",
  "TU9QUw==",
  "R0FWRQ==",
  "UElOSw==",
  "UE9UUw==",
  "R0xBRA==",
  "Q09NRQ==",
  "TkVYVA==",
  "SkFSUw==",
  "U0VOVA==",
  "QklSRA==",
  "Q1VCUw==",
  "S0lORA==",
  "Qk9XTA==",
  "VFVCRQ==",
  "Q1JJQg==",
  "RE9MTA==",
  "RkxFVw==",
  "TVVTVA==",
  "REFURQ==",
  "UEFSVA==",
  "RElTSw==",
  "Q0hJTg==",
  "Uk9BRA==",
  "T1BFTg==",
  "U0VORA==",
  "VEFMSw==",
  "S0VZUw==",
  "U1RJUg==",
  "S0lURQ==",
  "UElOUw==",
  "TElNUA==",
  "U1BPVA==",
  "U1VSRg==",
  "UExVRw==",
  "RkFSTQ==",
  "QkFDSw==",
  "WU9HQQ==",
  "U0VMRg==",
  "RklTVA==",
  "TE9TVA==",
  "Q0FNUA==",
  "TElTVA==",
  "U0xJRA==",
  "U1BJTg==",
  "U09VUA==",
  "QkVBTg==",
  "UEFJTA==",
  "V0lORA==",
  "V0lTSA==",
];

const wordsMedium = [
  "UExPVA==",
  "Rk9VTkQ=",
  "VEhJTks=",
  "QkxBQ0s=",
  "RFJFQU0=",
  "Q0hPUkU=",
  "U0hJUlQ=",
  "R09JTkc=",
  "VFJJQ0s=",
  "VkFTRQ==",
  "VEhJTkc=",
  "SE9QUw==",
  "U0xBTQ==",
  "U0xBTlQ=",
  "QkFSRQ==",
  "TFVOQ0g=",
  "Q09JTA==",
  "U1RFQU0=",
  "U1BPS0U=",
  "R1JBREU=",
  "VEVBQ0g=",
  "VEhSRUU=",
  "Q09NRVQ=",
  "UElOVA==",
  "T1RIRVI=",
  "WU9VUg==",
  "Q1JFQU0=",
  "UEFSVFk=",
  "U1BBUks=",
  "SE9ORVk=",
  "TUVMT04=",
  "QkxBTUU=",
  "VE9EQVk=",
  "VE9UQUw=",
  "QlVOQ0g=",
  "R1JFRU4=",
  "Q0hJTEQ=",
  "QkxPVw==",
  "RlJFU0g=",
  "VEhJUkQ=",
  "TUlOVVM=",
  "QkVBTlM=",
  "U0tVTks=",
  "RklOQ0g=",
  "VFJVQ0s=",
  "QkxFTkQ=",
  "V0hJVEU=",
  "UElUQ0g=",
  "T0xJVkU=",
  "QkVJTkc=",
  "R1JJTlM=",
  "SE9STlM=",
  "QUxBUk0=",
  "U0tBVEU=",
  "RkxPUA==",
  "V0VOVA==",
  "V1JJVEU=",
  "RkxBU0g=",
  "UElFQ0U=",
  "UkFESU8=",
  "U01BTEw=",
  "VE9PVEg=",
  "RU5KT1k=",
  "UEFUQ0g=",
  "UFJJTUU=",
  "QUZURVI=",
  "QlVOTlk=",
  "VEhPU0U=",
  "VFJJQkU=",
  "QUdSRUU=",
  "RUFSTFk=",
  "RUFSVEg=",
  "QkxJTks=",
  "R0xVRQ==",
  "QUdBSU4=",
  "VFdJU1Q=",
  "QkVSUlk=",
  "R1JJTkQ=",
  "VFVORQ==",
  "QkFTSw==",
  "UFVSRQ==",
  "U0NPUkU=",
  "U1VTSEk=",
  "Rk9SQ0U=",
  "Sk9JTg==",
  "QU5HRVI=",
  "UkFHRQ==",
  "UExBTlQ=",
  "U1BFTkQ=",
  "RElSVFk=",
  "QUNUT1I=",
  "R1JPVkU=",
  "VU5DTEU=",
  "R0xPQkU=",
  "SEVBUkQ=",
  "TE9DSw==",
  "RU1QVFk=",
  "TUFSSw==",
  "RlJBTUU=",
  "U1RBQ0s=",
  "U05BQ0s=",
  "V0lORFk=",
  "QkVBU1Q=",
  "TE9VRA==",
  "QkxBU1Q=",
  "QVBBUlQ=",
  "RklHSFQ=",
  "QUxFUlQ=",
  "U0hFRVA=",
  "U0xJREU=",
  "Q0hFU1Q=",
  "U05BS0U=",
  "UEFTVEE=",
  "UElBTk8=",
  "UFJJREU=",
  "U0hFRVQ=",
  "UkVQTFk=",
  "Q0xPQ0s=",
  "Uk9CSU4=",
  "TElPTlM=",
  "S09BTEE=",
  "U1RBUlQ=",
  "U0hPUkU=",
  "QlJPT00=",
  "U1BFTlQ=",
  "VEhFU0U=",
  "RlJPV04=",
  "QUhFQUQ=",
  "U1RPUkU=",
  "REFOQ0U=",
  "VEhST1c=",
  "U1dJTVM=",
  "UFJJTlQ=",
  "UkVBRFk=",
  "U0hJTlk=",
  "QkxPQ0s=",
  "Q09BU1Q=",
  "VEVBUg==",
  "VFJBREU=",
  "R1JPV1M=",
  "V0FURVI=",
  "R09PU0U=",
  "U1RBVEU=",
  "U1VSRQ==",
  "RkVBU1Q=",
  "U0VBTQ==",
  "R1JJVA==",
  "V0lHUw==",
  "VEhBTks=",
  "V0hFUkU=",
  "UE9XRVI=",
  "QkVBRA==",
  "TFVOR1M=",
  "QlJBSU4=",
  "TU9MRA==",
  "RUxCT1c=",
  "U0hFTEw=",
  "SEFMRg==",
  "VU5ERVI=",
  "TkVWRVI=",
  "U0hBUEU=",
  "QkVBQ0g=",
  "SFVHRQ==",
  "RklSRUQ=",
  "TEVWRUw=",
  "RlJVSVQ=",
  "VEFCTEU=",
  "SFVOVA==",
  "U05PUkU=",
  "QUdFUw==",
  "QkxJTVA=",
  "TUlHSFQ=",
  "REFTSA==",
  "U0lHSFQ=",
  "V0hJQ0g=",
  "QVdBWQ==",
  "UklDSA==",
  "Q1VSTFk=",
  "Q0hBSU4=",
  "U1RPVkU=",
  "U1BFQUs=",
  "TUVURVI=",
  "U0hBUlA=",
  "QlJJTkc=",
  "U1RJQ0s=",
  "U09DSw==",
  "R0xPUlk=",
  "QlJJQ0s=",
  "U1RFRVA=",
  "U01BUlQ=",
  "SEVBVlk=",
  "R1JBUEU=",
  "U1RPTkU=",
  "Q0xBU1M=",
  "U01FTEw=",
  "UFJJQ0U=",
  "QU5HUlk=",
  "RVhUUkE=",
  "QlJJREU=",
  "VEhST0I=",
  "U0xJQ0U=",
  "VE9BRFM=",
  "QkFLRVI=",
  "TUFUQ0g=",
  "Q1JPV04=",
  "U0hBUks=",
  "TU9WSUU=",
  "QlJPV04=",
  "Q0FNUFM=",
  "R1JBTkQ=",
  "QUxPTkU=",
  "QlJVU0g=",
  "Q0hFU1M=",
  "Q1JBU0g=",
  "TU9VVEg=",
  "Q1JBVEU=",
  "UEFMRQ==",
  "U1RVRFk=",
  "U1RSQVk=",
  "R1VUUw==",
  "WkVCUkE=",
  "Q0xPVUQ=",
  "TFVDS1k=",
  "T05MWQ==",
  "UkFLRQ==",
  "SFVSVA==",
  "RklFTEQ=",
  "R09BVFM=",
  "VFJBSUw=",
  "T0NFQU4=",
  "Uk9ZQUw=",
  "U1RVQ0s=",
  "VFJVVEg=",
  "U0FDSw==",
  "U0NSQVA=",
  "U1RPUk0=",
  "TUFHSUM=",
  "TEVBVkU=",
  "RFJPVkU=",
  "SE9VU0U=",
  "RFJJTks=",
  "RkFDRVM=",
  "U0hBUkU=",
  "RFJJVkU=",
  "U0NBTEU=",
  "SlVJQ0U=",
  "SE9SU0U=",
  "U1dJTkc=",
  "TU9ORVk=",
  "VFJBSU4=",
  "VFJBQ0U=",
  "TUFOR08=",
  "Q0hBTEs=",
  "U1BFRUQ=",
  "TUVBTg==",
  "SEFORFM=",
  "V09SRFM=",
  "VE9BU1Q=",
  "Q1JPV0Q=",
  "U05BSUw=",
  "UklHSFQ=",
  "TVVHUw==",
  "VVBTRVQ=",
  "Q0FORFk=",
  "UEFSS1M=",
  "U0xFRVQ=",
  "UExVUw==",
  "U0FZUw==",
  "WUFSRA==",
  "VElSRUQ=",
  "UElOQ0g=",
  "QlVTWQ==",
  "V0VFSw==",
  "VElHSFQ=",
  "UEVBQ0U=",
  "TEFURVI=",
  "Uk9MRQ==",
  "SEFSRQ==",
  "SFVSUlk=",
  "VEVBUlM=",
  "R1JPVVA=",
  "UEFUSA==",
  "Q0xPV04=",
  "QlJBTkQ=",
  "RlVMTA==",
  "Q09VTEQ=",
  "U09SUlk=",
  "R1JBVlk=",
  "V0hBVA==",
  "Q1VSRQ==",
  "TU9SRQ==",
  "TEVBU1Q=",
  "V09PTA==",
  "UElFUw==",
  "U0NSRVc=",
  "Qk9USA==",
  "U1RBTVA=",
  "RkxBUA==",
  "QVJPU0U=",
  "UElORQ==",
  "V0hBTEU=",
  "V0hFRUw=",
  "RlJPU1Q=",
  "Q0xFQU4=",
  "Q1JBTks=",
  "UEVBQ0g=",
  "UkFNUw==",
  "TE9DQUw=",
  "REVBUg==",
  "VU5USUw=",
  "UEFOVFM=",
  "T1JERVI=",
  "Tk9SVEg=",
  "VEhVTVA=",
  "U0xFRVA=",
  "UkVBQ0g=",
  "QkFJVA==",
  "Q0xBU0g=",
  "R0lGVFM=",
  "QklSVEg=",
  "U0hPRVM=",
  "TElHSFQ=",
  "RE9FUw==",
  "UEFOREE=",
  "UklWRVI=",
  "RklSU1Q=",
  "QlVSTg==",
  "V09NQU4=",
  "QlVZRVI=",
  "Q0FTSA==",
  "UlVERQ==",
  "Tk9ORQ==",
  "SkFJTA==",
  "U1RPT0w=",
  "RlJPTlQ=",
  "VFJVU1Q=",
  "U01PS0U=",
  "U0xJQ0s=",
  "U1RSQVc=",
  "TE9BRg==",
  "Tk9URVM=",
  "Q0hJQ0s=",
  "U0hPQ0s=",
  "QVJNWQ==",
  "Rk9HR1k=",
  "UExBVEU=",
  "RFJVTVM=",
  "VE9XRVI=",
  "U09VTkQ=",
  "Q09VTlQ=",
  "SE9URUw=",
  "VFJJTQ==",
  "VFJFQVQ=",
  "U1BPT04=",
  "RkxPVw==",
  "U1RVTkc=",
  "VFJBWQ==",
  "R09FUw==",
  "UExBTkU=",
  "U0xPVA==",
  "Q0hBSVI=",
  "U1RBSU4=",
  "V09NRU4=",
  "UEhPTkU=",
  "QVBQTEU=",
  "Q0FNRUw=",
  "TU9VU0U=",
  "R1VJREU=",
  "Q0xFQVI=",
  "SEVBUlQ=",
  "U0hBTEw=",
  "V0VJUkQ=",
  "RkxFU0g=",
  "U0hPUlQ=",
  "RlJJRUQ=",
  "RkxBS0U=",
  "VE9SQ0g=",
  "QkVHSU4=",
  "TUVEQUw=",
  "TklHSFQ=",
  "U0hBS0U=",
  "U1dFRVQ=",
  "TEVNT04=",
  "QVVOVA==",
  "TFVORw==",
  "U1dJRlQ=",
  "U09EQQ==",
  "TUFZQkU=",
  "QlJFQUQ=",
  "Q0xJQ0s=",
  "U1BBQ0U=",
  "VEhFUkU=",
  "V0VBSw==",
  "V0hJTEU=",
  "SElORA==",
  "QVdBS0U=",
  "VElHRVI=",
  "Q1JBV0w=",
  "Uk9VTkQ=",
  "Q1VSTFM=",
  "Q0hPS0U=",
  "UkFJU0U=",
  "U01JTEU=",
  "UFVTSA==",
  "V0FUQ0g=",
  "RkxBVw==",
  "UlVMRVI=",
  "UElMT1Q=",
  "T0xERVI=",
  "UEFJTlQ=",
  "U1RVTVA=",
  "U1RBR0U=",
  "TUVUQUw=",
];

const wordsHard = [
  "U0FVQ1k=",
  "TE9ZQUw=",
  "Q1JBTkU=",
  "U0NBUkY=",
  "RkxPV0VS",
  "TU9OVEg=",
  "TUFZT1I=",
  "U1dFQVQ=",
  "U0tJTEw=",
  "U1RSSU5H",
  "QkVOQ0g=",
  "RkFNSUxZ",
  "Q09PS0lF",
  "U1VOTlk=",
  "TU9UT1I=",
  "R0lBTlQ=",
  "VEhSRUFE",
  "Q1lDTEU=",
  "RE9VQkxF",
  "QkVHQU4=",
  "VFJJUExF",
  "RFJBR09O",
  "VElDS0VU",
  "QURWSUNF",
  "Uk9VR0g=",
  "SU5TSVNU",
  "Tk9JU0U=",
  "SVNMQU5E",
  "UkVUVVJO",
  "R0xPU1M=",
  "QkFTSUM=",
  "VEhJQ0s=",
  "Q0lSQ0xF",
  "V0hPU0U=",
  "U09VR0hU",
  "Q0xPVkVS",
  "UFJBSVNF",
  "SlVHR0xF",
  "U1BSSU5H",
  "QkVDT01F",
  "VEhST05F",
  "U1BFRURZ",
  "U0xJR0hU",
  "VVNVQUw=",
  "R1JBU1M=",
  "VFJJRUQ=",
  "Q0FOQUw=",
  "VkFMVUU=",
  "UkVQT1JU",
  "U1RJTEw=",
  "U0lMTFk=",
  "VElEQUw=",
  "R0VFU0U=",
  "SU5DT01F",
  "RklOR0VS",
  "Q0FCTEU=",
  "VFVSVExF",
  "QlJBVkU=",
  "UkFOR0U=",
  "UE9DS0VU",
  "UFVaWkxF",
  "VEVBQ1VQ",
  "R0FUSEVS",
  "QkxBWkU=",
  "V0FOREVS",
  "UkVNSU5E",
  "U0VBUkNI",
  "U09VVEg=",
  "R0VOVExF",
  "Q0FDVFVT",
  "Q09VU0lO",
  "UExBTkVU",
  "U0hBVkU=",
  "VE9JTFM=",
  "U0lMVkVS",
  "U0VDT05E",
  "VElQUEVE",
  "Q0hVVEU=",
  "VE9VQ0g=",
  "VEhSSUZU",
  "U0hPVUxE",
  "VEFVR0hU",
  "TklOSkE=",
  "QkFUVExF",
  "U1VHQVI=",
  "R1JFRVQ=",
  "Qk9VR0hU",
  "TU9USEVS",
  "U0NSQVBF",
  "RkxVVEU=",
  "QVJHVUU=",
  "Q09MTEFS",
  "UFJJWkU=",
  "SU5WRU5U",
  "VklSVFVF",
  "TElUVExF",
  "V0VBVkU=",
  "REVDSURF",
  "V09VTEQ=",
  "VFVSS0VZ",
  "V1JJVEVS",
  "VU5LSU5E",
  "Q09NSU5H",
  "QlVSU1Q=",
  "VU5MT0NL",
  "QVZPSUQ=",
  "RE9DVE9S",
  "Q09WRVQ=",
  "UExJR0hU",
  "V0VBTFRI",
  "QVdBUkU=",
  "REFJTFk=",
  "UE9JTlQ=",
  "UE9UQVRP",
  "Tk9JU1k=",
  "RU1QTE9Z",
  "Q0VMRVJZ",
  "Q09CV0VC",
  "TUFHTkVU",
  "U1RPTEVO",
  "QkFSTlM=",
  "TEFVR0g=",
  "V09SS0VS",
  "Q0hPT1NF",
  "RkxFRVQ=",
  "RlJFRVpF",
  "TEFSR0U=",
  "RFJBTks=",
  "Q0hJTEk=",
  "RkFUSEVS",
  "QVdGVUw=",
  "U1VNTUVS",
  "QkVBVkVS",
  "REVGSU5F",
  "V0hPTEU=",
  "Q0FSUlk=",
  "R1JJTEw=",
  "U1RST05H",
  "Q09VUExF",
  "RkFJUlk=",
  "QkxFU1M=",
  "TUFQTEU=",
  "QVZFTlVF",
  "U0lTVEVS",
  "U0FMQUQ=",
  "UElDS0xF",
  "V0lORE9X",
  "U0VWRU4=",
  "VEhST0FU",
  "VEFSR0VU",
  "QlVCQkxF",
  "UkVNQVJL",
  "QU5JTUFM",
  "RUFHRVI=",
  "V1JJU1Q=",
  "RFdFTEw=",
  "Uk9BU1Q=",
  "Q0hFUlJZ",
  "VEhFSVI=",
  "QU1PVU5U",
  "SlVER0U=",
  "UFVSUExF",
  "QkxBTks=",
  "U0xFRVZF",
  "Vk9DQUw=",
  "VklTVUFM",
  "VklPTElO",
  "QlVTSEVT",
  "Q09VR0g=",
  "QlVJTFQ=",
  "TVlTRUxG",
  "Qk9BUkQ=",
  "U1RBRkY=",
  "VEFVTlQ=",
  "QlVDS0VU",
  "TkFUVVJF",
  "U1BJREVS",
  "QlJJR0hU",
  "V0lEVEg=",
  "RUlHSFQ=",
  "T1dORVI=",
  "U1RSRUVU",
  "Uk9VVEU=",
  "REFNQUdF",
  "RVhDVVNF",
  "QkVUVEVS",
  "Q0xPU0U=",
  "QUNUSU9O",
  "QUJPVVQ=",
  "QURPUFQ=",
  "SEFQUEVO",
  "QVdISUxF",
  "QlJFQVRI",
  "SVRTRUxG",
  "U1RSQUlO",
  "SE9QSU5H",
  "QUJPVkU=",
  "TU9OS0VZ",
  "SUdOT1JF",
  "R1VFU1M=",
  "VklERU8=",
  "RkxPVVI=",
  "TUFOQUdF",
  "UkVQQUlS",
  "VEhJUlNU",
  "QlVUVEVS",
  "RFJFU1M=",
  "UkVDT1JE",
  "U1FVSVJU",
  "UE9VTkQ=",
  "U0hSSU1Q",
  "U0NSRUFN",
  "RUxFVkVO",
  "VU5GQUlS",
  "U1lSVVA=",
  "TU9QUEVE",
  "Q0FNRVJB",
  "UEVOQ0lM",
  "Qk9BU1Q=",
  "UkFOQ0g=",
  "TEVBUk5T",
  "TFVNQkVS",
  "TElaQVJE",
  "SE9MTE9X",
  "RVFVQUw=",
  "U0lNUExF",
  "VkVOT00=",
  "Q09BQ0g=",
  "RU5PVUdI",
  "Q0xPVEg=",
  "TkFUSU9O",
  "TEVER0U=",
  "QlJJREdF",
  "VFJPUEhZ",
  "TlVNQkVS",
  "U09MVkU=",
  "Q1JFUFQ=",
  "TVVTSUM=",
  "U1RPTEU=",
  "VEFTVEU=",
  "U0hPV0VS",
  "UElMTE9X",
  "T1JBTkdF",
  "UE9SQ0g=",
  "VVNFRlVM",
  "RElOTkVS",
  "U1BPTkdF",
  "SEFQUFk=",
  "U1dJUkw=",
  "QkFOS0VS",
  "RkxVTkc=",
  "Q0VMTEFS",
  "Q0hBU0U=",
  "Q1JBWU9O",
  "Q09VUlQ=",
  "RVZFUlk=",
  "RE9aRU4=",
  "U0xFUFQ=",
  "UEFSRU5U",
  "QU1PTkc=",
  "V1JJTkc=",
  "UEVQUEVS",
  "QkVGT1JF",
  "R0hPU1Q=",
  "UVVJTFQ=",
  "U0hJRUxE",
  "U1RSRUFN",
  "R0xPVkU=",
  "RklGVEg=",
  "VE9VR0g=",
  "U0FOREFM",
  "WklQUEVE",
  "R1VJTEQ=",
  "UElaWkE=",
  "UVVJRVQ=",
  "U1RBVFVF",
  "U1RSSUtF",
  "UExFQVNF",
  "SU5TSURF",
  "U0VBU09O",
  "U0hPT0s=",
  "U1BFRUNI",
  "Q0hBUkdF",
  "UkVEVUNF",
  "VU5USUU=",
  "U0NFTlQ=",
  "SVNTVUU=",
  "R1VFU1Q=",
  "SEVJR0hU",
  "Rk9MTE9X",
  "Q0hPU0U=",
  "S05BQ0s=",
  "QkVFVExF",
  "WU9VTkc=",
  "SEFUQ0g=",
  "RVhFUlQ=",
  "QkFOSk8=",
  "VEhVTUI=",
  "SEFNTUVS",
  "RkxJR0hU",
  "QVdBUkQ=",
  "VEhST1dO",
  "U0NBUkNF",
  "R1VJVEFS",
  "RE9OS0VZ",
  "UkVBU09O",
  "TUlERExF",
  "Q0VOVEVS",
  "RVhDRUw=",
  "V1JPTkc=",
  "RlJJRU5E",
  "QkFTSU4=",
  "UEVPUExF",
  "UFJFVFRZ",
  "V0lOVEVS",
  "RlJPWkU=",
  "T0ZGRVI=",
  "RVhJU1Q=",
  "SU5WSVRF",
  "QlJBU1M=",
  "TUFSQkxF",
  "SE9JU1Q=",
  "QVJUSVNU",
  "QlVJTEQ=",
  "R1JBSU4=",
  "VElNSU5H",
  "TkFJVkU=",
  "Q0xJTUI=",
  "QkFER0U=",
  "T0ZURU4=",
  "Qk9VTkNF",
  "QUxJS0U=",
  "QVJPVU5E",
  "RE9MTEFS",
  "U0xFRUs=",
  "VVNJTkc=",
  "RkFSTUVS",
  "Q1JJRUQ=",
  "QlVSR0VS",
  "QU5TV0VS",
  "Qk9UVExF",
  "U1BST1VU",
  "TUFSS0VU",
  "REVWSUNF",
  "Rk9SVEg=",
  "Vk9JQ0U=",
  "UkFCQklU",
  "SU1BR0U=",
  "QUxPVUQ=",
  "VE9NQVRP",
  "R1VBUkQ=",
  "Qk9SUk9X",
  "U0VSVkU=",
  "VEhSSUxM",
  "Qk9SREVS",
  "UEVCQkxF",
  "UEVSU09O",
  "U0hBRE9X",
  "V1JFTkNI",
  "R1JPV0w=",
  "UklERExF",
  "Rk9SR0VU",
  "R0FSTElD",
  "QlJBTkNI",
  "Uk9CT1Q=",
  "RkxPQ0s=",
  "UVVFRU4=",
  "R0VOSVVT",
  "V09SUlk=",
  "UVVJQ0s=",
  "U0NFTkU=",
  "S0lUVEVO",
  "UkVXQVJE",
  "TEFXWUVS",
  "UkVNQUlO",
  "QVVUSE9S",
  "SkVBTlM=",
  "UkVNT1ZF",
  "UFVTSEVT",
  "TElORU4=",
  "VU5MT0FE",
  "VEVBUE9U",
  "QUxXQVlT",
  "V09OREVS",
  "U1FVQVJF",
  "QUxPTkc=",
  "Q0lSQ1VT",
  "SE9CQlk=",
  "QUxNT1NU",
  "QkFTS0VU",
  "Q1JVU0g=",
  "UkVDRVNT",
  "QVJJU0U=",
  "R0xBU1M=",
  "SEVBTFRI",
  "VU5BQkxF",
  "QU5OT1k=",
  "VEVNUEVS",
  "Vk9ZQUdF",
  "Q1JPU1M=",
  "RkFVTFQ=",
  "V0laQVJE",
  "T1lTVEVS",
  "U0hPUlRT",
  "Uk9DS0VU",
  "UklCQk9O",
  "TFVOQVI=",
  "Sk9LRVI=",
  "RkVOQ0U=",
  "Q0hFRVNF",
  "Q0FTVExF",
  "Q0FSUk9U",
  "Q0FORExF",
];

const words = {
  easy: wordsEasy.map(atob),
  medium: wordsMedium.map(atob),
  hard: wordsHard.map(atob),
};

const start = new Date(2022, 2 - 1, 10);

const MILLIS_PER_DAY = 1000 * 60 * 60 * 24;

function daysBetween(first, second) {
  return Math.floor((second - first) / MILLIS_PER_DAY);
}

function getPuzzleIdForDate(date) {
  return daysBetween(start, date);
}

function getPuzzlesForDate(date) {
  const index = getPuzzleIdForDate(date);
  const targets = {};
  for (const difficulty of Object.keys(words)) {
    const wordList = words[difficulty];
    targets[difficulty] =
      wordList[Math.abs(index % wordList.length)].toUpperCase();
  }
  return targets;
}

function getTodayPuzzleId() {
  return getPuzzleIdForDate(new Date());
}

function getTodayPuzzles() {
  return getPuzzlesForDate(new Date());
}

function compareTargetAndGuess(target, guess) {
  const targetUpper = target.toUpperCase();
  const guessUpper = guess.toUpperCase();
  const { length } = targetUpper;
  const result = Array(length);
  const letterUsed = Array(length).fill(false);

  // 1st pass - matches
  for (let i = 0; i < length; i++) {
    if (targetUpper[i] === guessUpper[i]) {
      result[i] = "match";
      letterUsed[i] = true;
    }
  }

  // 2nd pass - miss and present positions
  for (let i = 0; i < targetUpper.length; i++) {
    if (result[i] !== "match") {
      const otherLetters = targetUpper.split("").map((letter, j) => {
        if (i === j || letterUsed[j]) {
          return "";
        }
        return letter;
      });
      const targetIndex = otherLetters.indexOf(guessUpper[i]);
      if (targetIndex >= 0) {
        result[i] = "present";
        letterUsed[targetIndex] = true;
      } else {
        result[i] = "miss";
      }
    }
  }
  return result;
}

/** @type {import("../types").EmojiMatchThemes} */
const emojiMatchThemes = {
  nature: {
    match: "🍀",
    present: "🌻",
    miss: "🕸️",
  },
  fruit: {
    match: "🍏",
    present: "🍊",
    miss: "🥥",
  },
  vegetable: {
    match: "🥦",
    present: "🍄",
    miss: "🍽️",
  },
  tree: {
    match: "🌳",
    present: "🍁",
    miss: "🪨",
  },
  circle: {
    match: "🟢",
    present: "🟠",
    miss: "⚫️",
  },
};

/** @returns {import("../types").EmojiMatchThemeValue} */
function randomEmojiMatchTheme() {
  const themes = Object.values(emojiMatchThemes);
  return themes[Math.floor(Math.random() * themes.length)];
}

/**
 * @param {import("../types").Guess[]} guesses
 * @param {import("../types").EmojiMatchThemeKey} theme
 */
function guessesAsEmojis(guesses, theme) {
  const emojiTheme = emojiMatchThemes[theme] || randomEmojiMatchTheme();
  return guesses
    .map((guess) =>
      guess.map((letter) => emojiTheme[letter.state] || "").join("")
    )
    .join("\n")
    .trim();
}

if (typeof module !== "undefined") {
  module.exports = {
    words,
    daysBetween,
    compareTargetAndGuess,
    emojiMatchThemes,
    getPuzzlesForDate,
    getTodayPuzzles,
    getTodayPuzzleId,
    guessesAsEmojis,
  };
}
