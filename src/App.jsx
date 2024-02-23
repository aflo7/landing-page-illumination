import './App.css';
import { FaFacebookF, FaAngleDown } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';


export default function App() {
  return (
    <>
      <div className="top-nav-wrapper">
        <div className="top-nav">
          <div>
            <FaFacebookF />
            <div>Mock</div>
            <div>Mock</div>
            <div>Mock</div>
            <div>Mock</div>
          </div>
        </div>
      </div>

      <div className="bottom-nav-wrapper">
        <div className="bottom-nav">
          <div>Illumination Works Logo</div>
          <div>
            <div>Mock<FaAngleDown /></div>
            <div>Mock<FaAngleDown /></div>
            <div>Mock<FaAngleDown /></div>
            <div>Mock<FaAngleDown /></div>
            <div>Mock<FaAngleDown /></div>
            <IoSearchOutline className='io-search' />
          </div>
        </div>
      </div>

      <main>
        <h1>Illumination Works</h1>
        <p className='main-p'>User-centric digital transformation for today&apos;s modern workforce</p>
      </main>

      <div className="light-blue-wrapper-outer">
        <div className="light-blue-wrapper">
          <h2>Hot off the Press!</h2>
          <p>
            Made using React, JavaScript, HTML and CSS. Made By Andres Flores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            modi, quas hic voluptatibus possimus et.
          </p>
        </div>
      </div>
      <div className="illumination-text-wrapper-outer">
        <div className="illumination-text-wrapper">
        Illumination Works is a lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illum
          molestiae laudantium facilis inventore itaque modi tenetur, quae
          expedita?
        </div>
      </div>
    </>
  );
}
