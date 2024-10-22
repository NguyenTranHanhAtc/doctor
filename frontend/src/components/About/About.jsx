// eslint-disable-next-line no-unused-vars
import React from 'react'
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom';



const About = () => {
  return <section>
    <div className='container'>
        <div className='flex justify-between gap[50px] lg:gap-[130px] xl:gap-0 lg:flex-row'>
            {/*===== about img ====== */}
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                <img src={aboutImg} alt="" />
                <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[30%] md:right-[7%] lg:right-[22%]">
                    <img src={aboutCardImg} alt="" />
                </div>
            </div>
            {/*===== about img ====== */}
            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className='heading'>Tự hào là một trong những quốc gia xuất sắc nhất </h2>
            <p className='text__para'>Trong 30 năm liên tiếp, U.S. News & World Report đã công nhận chúng tôi là một trong những bệnh viện công tốt nhất trên toàn quốc và số 1 tại Texas.
            </p>
            
            <p className='text__para mt-[30px]'>Trong 30 năm liên tiếp, U.S. News & World Report đã công nhận chúng tôi là một trong những bệnh viện công tốt nhất trên toàn quốc và số 1 tại Texas.
            </p>
                <Link to='/'><button className='btn'>Đọc tiếp</button></Link>
            </div>
        </div>
    </div>
  </section>
}

export default About
