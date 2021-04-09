// import the image coponent from next
import Image from 'next/image'
import styles from '../styles/About.module.css'
export default function About() {
    return (
        <div>
            <h1>About Page 👋</h1>
            <p className={styles.extraGreen}>i am devloper</p>

            <Image
                src='/vercel.svg'
                alt='logo'
                width={300}
                height={300}
            />
            <Image
                src='https://placekitten.com/300/300'
                alt='logo'
                width={300}
                height={300}
            />
            <Image
                src='https://placekitten.com/300/300'
                alt='logo'
                width={300}
                height={300}
            />
            
        </div>
    )
}