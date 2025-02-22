import Gallery1 from '../../src/assets/images/gallery1.png';
import Gallery2 from '../../src/assets/images/gallery2.png';
import Gallery3 from '../../src/assets/images/gallery3.png';
import Gallery4 from '../../src/assets/images/gallery4.png';
import Gallery5 from '../../src/assets/images/gallery5.png';
import Gallery6 from '../../src/assets/images/gallery6.png';
import Gallery7 from '../../src/assets/images/gallery7.png';
import Gallery8 from '../../src/assets/images/gallery8.png';
import Gallery9 from '../../src/assets/images/gallery9.png';
import Gallery10 from '../../src/assets/images/gallery10.png';

function Gallery() {
    return(
        <section className='py-12 flex flex-col justify-center items-center gap-2 overflow-hidden'>
            <div className='flex flex-col xl:flex-row justify-center items-center xl:gap-2 w-screen'>
                <img src={Gallery1} alt="image-gallery1" className='w-full h-full object-cover'/>
                <img src={Gallery2} alt="image-gallery2" className='w-full h-full object-cover'/>
                <img src={Gallery3} alt="image-gallery3" className='w-full h-full object-cover'/>
                <img src={Gallery4} alt="image-gallery4" className='w-full h-full object-cover'/>
                <img src={Gallery5} alt="image-gallery5" className='w-full h-full object-cove'/>
            </div>
            <div className='hidden xl:flex flex-col xl:flex-row justify-center items-center gap-2'>
                <img src={Gallery6} alt="image-gallery6" className='w-full h-full object-cover'/>
                <img src={Gallery7} alt="image-gallery7" className='w-full h-full object-cover'/>
                <img src={Gallery8} alt="image-gallery8" className='w-full h-full object-cover'/>
                <img src={Gallery9} alt="image-gallery9" className='w-full h-full object-cover'/>
                <img src={Gallery10} alt="image-gallery10" className='w-full h-full object-cover'/>
            </div>
        </section>
    )
}

export default Gallery;