import styles from './Testimonial.module.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';


const Testimonial = () => {

    useEffect(() => {
        AOS.init({
          duration: 1500,
        });
      }, [])
    

    const testimonials = [
        {id: 1, 
         name: 'MAHAFUZOR',
         image: 'maha.jpg',
         occupation: 'Fashionista', 
         testimony: "CodeKraft is an invaluable partner for any organization seeking top-notch digital solutions. Their commitment to excellence, innovative approach, and exceptional customer service make them an asset to any project."
        },
        {id: 2, 
         name: 'AKANKE',
         image: 'neerah.jpg',
         occupation: 'Fashionista', 
         testimony: " “CodeKraft has consistently delivered high-quality work, exceeding expectations in their dedication to innovative solutions and exceptional customer service. Their expertise in UI/UX design, web development, and graphic design has significantly enhanced our digital presence."
        },
        {id: 3, 
         name: 'NEERAH',
         image: 'neeyah.jpg',
         occupation: 'Baker', 
         testimony: "CodeKraft is an exceptional choice for any business seeking top-notch digital solutions. Their passion for innovation, quality, and customer satisfaction shines through in every project."
        }
    ]
  return (
    <div className={styles.testiContainer}>
        <h2 data-aos="fade-up">Testimonial</h2>
        <div className={styles.leftBorder} data-aos="fade-down"></div>
        <h3 data-aos="slide-right">Let's Know What Our Client Says.......................</h3>
            <div className={styles.testiWrapper}>
                {testimonials.map((testimony) => (
                    <div key={testimony.id}>
                        <img src={testimony.image} alt="" data-aos="fade-down"/>
                        <img src="triangle.png" alt="" data-aos="fade-up"/>
                        <h4 data-aos="zoom-in">{testimony.name}</h4>
                        <h5 data-aos="zoom-out">{testimony.occupation}</h5>
                        <p data-aos="fade-up">{testimony.testimony}</p>
                    </div>
                ) )}
            </div>
    </div>
  )
}

export default Testimonial
