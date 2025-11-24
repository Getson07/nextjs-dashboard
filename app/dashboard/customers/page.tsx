import Link from "next/link";

export default function Customers(){
  return <p>Customers Page
    <Link href={'/dashboard/examples'}>Lien vers exemples</Link>
  </p>
}