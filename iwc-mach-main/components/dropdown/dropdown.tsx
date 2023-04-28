import React, { useState } from "react";
import Flex from "../Flex";
import styled from "styled-components";
import theme from "../../theme";
import Image from "../../components/ImageShimmer";
import styles from "./dropdown.module.scss";
import Button from "../Button";
import Container from "../../components/Container";
import Svg from "../Svg";

import ArrowDown from "../../public/images/arrow-down.svg";
import { useRouter } from "next/router";

const ListView = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  li {
    padding-bottom: 20px;
  }
`;

const ProductCollectionSection = styled.section`
  padding-top: 15px;
`;

const WathcCollectionTitle = styled.span`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 2px;
  color: white;
  padding-left: 15px;
`;

const WathcCollection = styled.span`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 2px;
  color: white;
`;

const WathcCollectionAnchor = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Dropdown = ({ overviewlistsData, handleParamValue ,data}) => {
  console.log(data.seourl)
  const [toggle, setToggle] = useState(false);
  const [rotate, setRotate] = useState(false);

  const router = useRouter()
  const handleclick = () => {
    setToggle(!toggle);
   
    setRotate(!rotate);
  };

  return (
    <>
      <section className={styles.iwc_dropdown}>
        <Flex
          justifyContent='center'
          width='100%'
          divcolor={theme.color.white}
          padding='15px'
        >
          <Button
            onClick={handleclick}
            kind='default'
          >
            <WathcCollection>PILOT’S WATCH COLLECTION 2022</WathcCollection>

            <Svg
              svgFill='#7b672c'
              margin='0 0 0 5px'
              fillOnHover={theme.color.white}
              className={rotate ? "rotate-180" : "rotate-90"}
            >
              <ArrowDown />
            </Svg>
          </Button>
        </Flex>

        {toggle ? (
          <ProductCollectionSection className='mt60 pv20'>
            <Container>
              <Flex
                className='col-md-12'
                justifyContent='center'
              >
                <ListView className="fade-left" >
                  {overviewlistsData.map((item) => {
                    return (
                      <>
                        <li className={styles.WathcCollections}>
                          <WathcCollectionAnchor
                            onClick={() => {
                              router.push({
                                pathname: `${data.seourl}`,
                              })
                              handleParamValue(item.watchReference);
                              handleclick();
                            }}
                          >
                            {item?.watchMenuImage ? (
                              <Image
                                key={`${item.id}_image`}
                                src={item.watchMenuImage.publishUrl}
                                alt={item.id}
                                imageHeight={264}
                                imageWidth={100}
                              />
                            ) : (
                              ""
                            )}
                            <WathcCollectionTitle>
                              {item.watchName}
                            </WathcCollectionTitle>
                          </WathcCollectionAnchor>
                        </li>
                      </>
                    );
                  })}
                </ListView>
              </Flex>
            </Container>
          </ProductCollectionSection>
        ) : null}
      </section>
    </>
  );
};

export default Dropdown;
