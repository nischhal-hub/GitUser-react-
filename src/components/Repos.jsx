import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";
const Repos = () => {
  const {githubRepo} = useGlobalContext()
  let languages = githubRepo.reduce((total,item)=>{
    const {language}= item
    if(!language)return total;
    console.log(language)
    if(!total[language]){
      total[language]={label:language,value:1}
    }else{
      total[language]={...total[language],value:total[language].value+1}
    }
    return total
  },{})
  languages = Object.values(languages).sort((a,b)=>{b.value-a.value}).splice(0,5)
  console.log(languages)
  // const data = [
  //   {
  //     label: "Venezuela",
  //     value: "200",
  //   },
  //   {
  //     label: "Saudi",
  //     value: "100",
  //   },
  //   {
  //     label: "Canada",
  //     value: "180",
  //   },
  // ]

  return (
    <>
      <section className="section">
        <Wrapper className="section-center">
            <Pie3D data={languages} />;
        </Wrapper>
      </section>
    </>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
