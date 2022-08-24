import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
        dolore quidem non, ratione amet magni cupiditate id voluptatibus dolores
        laboriosam veniam quod vitae corrupti quaerat quam cumque quia omnis
        consequatur?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
        consectetur odit nam impedit fuga architecto quam nostrum quo quod est
        repellendus totam sint dolorem, eius veniam, corporis aperiam natus non.
      </p>
      {/* <Footer /> */}
    </div>
  );
}
