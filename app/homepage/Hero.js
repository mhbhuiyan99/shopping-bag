import Image from "next/image";
import style from "./hero.module.css";

export default function Hero() {
    return (
        <div className={style.hero}>
            <Image 
                src="/hero.png" 
                alt="Hero image"
                width={1400}
                height={400}
            />
        </div>
    )
}