import styled from "@emotion/styled";
import Image from "next/image";
import AOS from "aos";
import 'aos/dist/aos.css';
import {useEffect} from "react";
import Link from "next/link";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      once: false,
      offset: 120,
      mirror: false,
      easing: 'ease-out',
      delay: 0,
      duration: 400,
    });
  }, []);

  return (
    <HomeWrapper>
      <section
        data-aos="fade-right"
      >
        <Image src='/home1.png' alt='1' width={300} height={300}/>
        <div className='text'>
          <div>씁쓸하지만</div>

          <div>현대 사회에서 누군가에게 나의 내면을 드러내는 것은</div>
          <div>나의 가장 아픈 곳을 알려주는 것과 같기도 합니다.</div>
          <div>그래서 오히려 내 감정을 숨기며 나를 보호하게 됩니다.</div>
        </div>
      </section>

      <section
        data-aos="fade-left"
      >
        <div className='text'>
          <div>하지만 나의 감정에 솔직하지 못한다면,</div>
          <div>나조차 나의 아픔을 알지 못하게 됩니다.<br/><br/></div>
          <div>내 감정을 솔직하게 표현하는 방법으로</div>
          <div>나의 감정을 해소해보는 것은 어떨까요?</div>
        </div>
        <Image src='/home2.png' alt='1' width={300} height={300}/>

      </section>

      <section
        data-aos="fade-right"
      >
        <Image src='/home3.png' alt='1' width={300} height={300}/>
        <div className='text'>
          <div>AI가 나의 글을 분석해 나의 심리상태를 한번 되짚어줍니다.</div>
          <div>또한 그에 알맞는 처방전도 내려줄게요.</div>
          <div>그 AI의 처방을 받고 꾸준히 나의 감정 상태를 들여다보고 살펴주세요.</div>
        </div>
      </section>

      <section
        className='last'
        data-aos="fade-left"
      >
       <Image src='/home4.png' alt='1' width={300} height={300}/>
        <div className='text'>나 자신을 가장 잘 돌봐야하는 것은 나 자신입니다.</div>
      </section>
      <Link href='/ai' >
        <button className='btn'>💉 AI 처방전 받으러 가기</button>
      </Link>
      <Link href='/posts' >
        <button className='btn'>👀 다른 사람들이 공유한 처방전 보러가기</button>
      </Link>
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  font-size: 20px;
  div {
    margin-bottom: 10px;
  }
  
  section {
    height: 500px;
    margin-top: 50px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  
  .last {
    flex-direction: column;
  }
  
  .text {
    margin: 50px;
  }
  
  .btn {
    margin-bottom: 100px;
    margin-left: 10px;
  }
`

