import React, {useEffect} from "react";
import styled from "styled-components";
import BlogPic1 from "../../images/blogPic1.jpg";



export default function HomePage(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <PageWrapper>
            <div className="blog-cols">
                <div className="singleBlog">
                    <img className="sqr" src={BlogPic1}/>
                    <div>This is a blog post that you should click on</div>
                </div>
            </div>
            <div className="marginBottom"/>     
        </PageWrapper>
    )
}


const PageWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:left;
    flex-direction:column;
    width:100%;
    padding-top:10px;
    padding-bottom:60px;
    .blog-cols{
        display:flex;
        flex-direction:column;
        margin-left:20px;
        margin-right:10px;
        font-size:1.5rem;
    }
    .marginTop{
        margin-bottom:40px;
    }
    .marginBottom{
        margin-bottom:var(--marginBottom);
    }
    .singleBlog {
        display:flex;
        align-items: center;
        flex-direction: row;
        margin-right: 10px;
    }
    /* p{
        font-family: 'Times New Roman', Times, serif;
        padding: 10px;
        background-color:var(--cardGrey);
        border-radius: 10px;
        margin-bottom:20px;
    } */

    .sqr {
        --size: 400px;
    
        height: var(--size);
        width: var(--size);
        /* border-radius: calc(var(--size) * 0.15); */
        background: {
            image: var(--img);
            size: cover;
            repeat: no-repeat;
        }
        position: relative;
        box-shadow: 2.5px 2.5px 2.5px var(--darkGrey);
    
        &::after {
        content: "";
        position: absolute;
        width: calc(var(--size) * 0.8);
        height: 100%;
        top: calc(var(--size) * 0.05);
        left: 50%;
        transform: translateX(-50%);
        background: {
            image: var(--img);
            size: cover;
            repeat: no-repeat;
        }
        z-index: -1;
        filter: blur(20px) opacity(70%);
        }
  }  
  .sqr:hover{
    box-shadow: 5px 5px 5px var(--darkGrey);
  }
  .sqr {
    margin: 10px;
  }
`;