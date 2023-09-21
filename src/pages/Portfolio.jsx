import { useEffect } from "react";
import { useState } from "react"
import Gallery from "../components/Gallery";
import bydemet from "../assets/bydemet.png";
import ziropa from "../assets/ziropa.png";
import wefood from "../assets/wefood.png";
import mps from "../assets/mps.png";
import DP from "../assets/DP.png";

export default function portfolio () {
    const [posts, setPosts] = useState ([]);

    useEffect(() => {
        async function getData () {
            const response = await fetch("https://nra.one/wp/wp-json/wp/v2/posts")
            const data = await response.json();
            setPosts(data);
        }
        getData();
    }, []);


    return (
        <div>

        <section>
            <h1 className="headline">Portfolio</h1>
        </section>

        <section>
            <h2 className="websitesHead">Previously projects</h2>

            <div className="wrapper">
                <a href="https://nra.one/ByDemet/index.html"> By Demet
                    <span><img src={bydemet} alt="Preview of nra.one/ByDemet" height={150} /></span>
                </a>

                <a href="https://nra.one/ziropa/index.html"> Ziropa
                    <span><img src={ziropa} alt="Preview of nra.one/ziropa" height={150} /></span>
                </a>

                <a href="https://nra.one/wefood/index.html"> We food
                    <span><img src={wefood} alt="Preview of nra.one/wefood" height={150} /></span>
                </a>

                <a href="https://nra.one/madp%C3%A5su.dk/index.html"> mad på su
                    <span><img src={mps} alt="Preview of nra.one/madpåsu.dk" height={150} /></span>
                </a>

                <a href="https://nra.one/DP/index.html"> Dansk Pilsner
                    <span><img src={DP} alt="Preview of nra.one/DP" height={150} /></span>
                </a>
            </div>
        </section>

        <hr 
        style={{
          backgroundColor: 'white',
          color: 'white',
          borderColor: 'white',
          height: '2px',
          marginBottom: "60px"
        }}
      />

        <section>
            {posts.map(post => (
                <Gallery key={post.id} post={post}/>

            ))}
        </section>

        </div>
    )
}