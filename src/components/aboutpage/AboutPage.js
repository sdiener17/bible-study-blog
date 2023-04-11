import React, {useEffect} from "react";
import styled from "styled-components";



export default function AboutPage(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <PageWrapper>
            <div className="first-row">
                <p>Welcome to the About Page!
                </p>
            </div>
            <div className="marginBottom"/>     
        </PageWrapper>
    )
}


const PageWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:100%;
    padding-top:10px;
    padding-bottom:60px;
    //margin-left:40px;
    .top-column{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
    }
    .first-row{
        display:flex;
        flex-direction:row;
        margin-left:20px;
        margin-right:10px;
        font-size:1.5rem;
    }
    .word-cloud{
        max-width:1200px;
        max-height:400px;
    }
    .marginTop{
        margin-bottom:40px;
    }
    .marginBottom{
        margin-bottom:var(--marginBottom);
    }
    p{
        font-family: 'Times New Roman', Times, serif;
        padding: 10px;
        background-color:var(--cardGrey);
        border-radius: 10px;
        margin-bottom:20px;
    }
`;