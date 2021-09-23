import Link from "next/link";
import Image from "next/image";

export default function Advert({ link, imageLink }) {
  imageLink = "https://www.lindaikejisblog.com/photos/shares/thumbs/614103d96f046.png";
  link = "https://www.google.com";

  return (
    <div className="h-52 w-full relative">
      <Link passHref href={link}>
        <a target="_blank" referrerPolicy="no-referrer">
          <Image src={imageLink} layout="fill" objectFit="contain" />
        </a>
      </Link>
    </div>
  );
}
