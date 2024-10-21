
import { useEffect, useState } from 'react';
import './header.css';
export const Header = () => {

  const [isDark, setIsDark] = useState(false);

  const handleScroll = () => {
    const section = document.querySelector('.section-with-background');
    const sectionRect = section!.getBoundingClientRect();
    if (sectionRect.top < window.innerHeight && sectionRect.bottom >= 0) {
      console.log('hi');
      setIsDark(true);
    } else {
      console.log('false');
      setIsDark(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
        <div className={ `header ${isDark ? 'dark' : ''}` }>
          <div className="col-6 logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="127" height="18" viewBox="0 0 127 18" fill="none">
                <g clipPath="url(#clip0_1_99)">
                  <path d="M122.601 2.51634C122.601 1.30685 123.552 0.366974 124.8 0.366974C126.049 0.366974 127 1.30685 127 2.51634C127 3.72583 126.049 4.6657 124.8 4.6657C123.552 4.6657 122.601 3.72583 122.601 2.51634ZM126.477 2.51634C126.477 1.6008 125.763 0.848147 124.8 0.848147C123.838 0.848147 123.124 1.59893 123.124 2.51634C123.124 3.43375 123.838 4.18453 124.8 4.18453C125.763 4.18453 126.477 3.43375 126.477 2.51634ZM124.764 1.42293C125.359 1.42293 125.691 1.68131 125.691 2.03329C125.691 2.36281 125.418 2.57438 125.156 2.59685V2.60808C125.347 2.63242 125.453 2.73727 125.549 2.92449L125.859 3.606H125.241L125.002 3.06491C124.92 2.87769 124.849 2.83088 124.635 2.83088H124.481V3.606H123.898V1.42293H124.766H124.764ZM124.479 1.8573V2.40962H124.704C124.954 2.40962 125.108 2.29167 125.108 2.11567C125.108 1.92845 124.977 1.8573 124.704 1.8573H124.479Z" fill="white"/>
                  <path d="M2.95774 2.48826C3.03279 5.36593 3.05781 8.26982 3.05781 11.1475V17.7079H0V0.292084H5.41515L9.70262 15.0737L14.2403 0.292084H19.6054V17.7079H16.4206V11.1718C16.4206 8.3185 16.4206 5.41649 16.5206 2.53694L11.6327 17.7079H7.72245L2.95774 2.48826Z" fill="white"/>
                  <path d="M30.1085 17.7079C29.8834 17.0002 29.7833 16.2681 29.7583 15.171C29.1059 16.7811 27.603 18 25.4708 18C23.6157 18 21.7857 16.9272 21.7857 14.5363C21.7857 12.342 23.2905 11.0239 26.6735 10.4622L29.7063 9.97357V9.41189C29.7063 7.60703 28.8038 6.85063 27.2239 6.85063C25.644 6.85063 24.7915 7.36363 24.6915 9.38755H22.0339C22.134 6.11857 24.3412 4.63199 27.4741 4.63199C31.1342 4.63199 32.6641 6.36384 32.6641 9.36321V14.0701C32.6641 15.6803 32.8142 16.8261 33.0643 17.7042H30.1066L30.1085 17.7079ZM26.7236 15.83C28.4286 15.83 29.7564 14.9276 29.7564 12.9767V11.7092L27.501 12.0499C25.5959 12.342 24.7684 13.0497 24.7684 14.1712C24.7684 15.1953 25.3958 15.83 26.7236 15.83Z" fill="white"/>
                  <path d="M44.3469 17.7079V14.7572C43.7445 16.6108 42.0396 18.0019 39.9343 18.0019C37.0016 18.0019 34.4941 15.5623 34.4941 11.3179C34.4941 7.07343 37.1016 4.63387 39.8593 4.63387C41.8895 4.63387 43.6195 5.95007 44.2968 7.75681V0H47.3046V17.7079H44.3469ZM37.6539 11.3179C37.6539 14.1469 39.2088 15.684 41.0889 15.684C42.7689 15.684 44.3488 14.5138 44.3488 11.6586V10.9752C44.3488 8.14625 42.7689 6.9742 41.0889 6.9742C39.2088 6.9742 37.6539 8.487 37.6539 11.316V11.3179Z" fill="white"/>
                  <path d="M68.5861 12.0874C68.2166 15.3994 65.3301 17.8484 60.9868 17.8484C55.7314 17.8484 52.1039 14.2948 52.1039 8.99064C52.1039 3.6865 55.7063 0.132935 60.9868 0.132935C65.1319 0.132935 68.1666 2.36468 68.536 5.89391H65.6245C65.205 3.97296 63.4288 2.72603 60.9868 2.72603C57.7058 2.72603 55.3369 5.05513 55.3369 8.99064C55.3369 12.9262 57.6807 15.2553 60.9868 15.2553C63.552 15.2553 65.1819 14.0551 65.6745 12.0874H68.5861Z" fill="white"/>
                  <path d="M73.472 4.98212V8.39153C73.9416 6.08676 75.1251 4.81549 76.8031 4.81549C77.2476 4.81549 77.519 4.83983 77.7903 4.93532V7.67257H76.4586C74.6074 7.67257 73.5221 8.56003 73.5221 11.1288V17.5619H70.5605V4.98212H73.472Z" fill="white"/>
                  <path d="M82.2047 0.350128V2.96756H79.2432V0.350128H82.2047ZM82.2047 4.98212V17.5619H79.2432V4.98212H82.2047Z" fill="white"/>
                  <path d="M88.7187 17.7304C86.448 17.7304 85.1663 16.6258 85.1663 14.321V7.21574H83.6365V4.98399H85.1663V2.43958H88.1279V4.98399H90.8413V7.21574H88.1279V13.7687C88.1279 14.9931 88.6456 15.4256 89.9041 15.4256H90.8413V17.5619C90.2986 17.6574 89.6078 17.7304 88.7187 17.7304Z" fill="white"/>
                  <path d="M96.1198 17.7304C93.8491 17.7304 92.5674 16.6258 92.5674 14.321V7.21574H90.1139V4.98399H92.5674V2.43958H95.529V4.98399H98.2424V7.21574H95.529V13.7687C95.529 14.9931 96.0467 15.4256 97.3052 15.4256H98.2424V17.5619C97.6997 17.6574 97.0089 17.7304 96.1198 17.7304Z" fill="white"/>
                  <path d="M101.993 11.5837C102.116 14.2723 103.548 15.6409 105.472 15.6409C107.125 15.6409 108.137 14.6093 108.409 13.3848H110.951C110.556 16.0247 108.386 17.8502 105.374 17.8502C101.674 17.8502 99.0083 15.2571 99.0083 11.2729C99.0083 7.28874 101.699 4.69565 105.301 4.69565C109.225 4.69565 111.124 7.55273 110.926 11.5856H101.995L101.993 11.5837ZM102.141 9.66278H108.161C107.889 7.50218 106.681 6.73455 105.324 6.73455C103.671 6.73455 102.536 7.7437 102.141 9.66278Z" fill="white"/>
                  <path d="M115.883 4.98212V8.39153C116.353 6.08676 117.536 4.81549 119.214 4.81549C119.659 4.81549 119.93 4.83983 120.201 4.93532V7.67257H118.87C117.018 7.67257 115.933 8.56003 115.933 11.1288V17.5619H112.971V4.98212H115.883Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_1_99">
                    <rect width="127" height="18" fill="white"/>
                  </clipPath>
                </defs>
            </svg>
          </div>
          <div className="col-6 menu-items">
            <div className='menu-servicios'>
              <a href="">Servicios</a>
            </div>
            <div className='menu-nosotros'>
              <a href="">Nosotros</a>
            </div>
            <div className='menu-contactos'>
              <a href="">Contactos</a>
            </div>
          </div>
        </div>
    </>
  )
}
