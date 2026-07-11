import styles from './WorkShowcase.module.css';
import Image from 'next/image';

const showcaseImages = [
  { src: '/assets/workShowcase/1.png', alt: 'Patent Drawing 1' },
  { src: '/assets/workShowcase/2.png', alt: 'Patent Drawing 2' },
  { src: '/assets/workShowcase/3.png', alt: 'Patent Drawing 3' },
  { src: '/assets/workShowcase/4.png', alt: 'Patent Drawing 4' },
  { src: '/assets/workShowcase/5.png', alt: 'Patent Drawing 5' },
  { src: '/assets/workShowcase/6.png', alt: 'Patent Drawing 6' },
  { src: '/assets/workShowcase/7.png', alt: 'Patent Drawing 7' },
  { src: '/assets/workShowcase/8.png', alt: 'Patent Drawing 8' },
  { src: '/assets/workShowcase/9.png', alt: 'Patent Drawing 9' },
  { src: '/assets/workShowcase/10.png', alt: 'Patent Drawing 10' },
  { src: '/assets/workShowcase/11.png', alt: 'Patent Drawing 11' },
  { src: '/assets/workShowcase/12.png', alt: 'Patent Drawing 12' },
];

export default function WorkShowcase() {
  return (
    <section className={styles.showcaseSection}>
      <div className={styles.container}>
        <p className={styles.label}>
          TRUSTED BY GLOBAL IP ATTORNEYS FOR PRECISION PATENT DRAWINGS
        </p>
        
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack}>
            {/* First set of images */}
            {showcaseImages.map((img, index) => (
              <div key={`set1-${index}`} className={styles.imageWrapper}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={250}
                  height={250}
                  className={styles.drawingImage}
                  quality={85}
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless infinite scroll */}
            {showcaseImages.map((img, index) => (
              <div key={`set2-${index}`} className={styles.imageWrapper} aria-hidden="true">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={250}
                  height={250}
                  className={styles.drawingImage}
                  quality={85}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
